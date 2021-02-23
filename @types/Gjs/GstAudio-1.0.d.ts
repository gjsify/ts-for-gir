/**
 * GstAudio-1.0
 */

import type * as Gjs from './Gjs';
import type * as GstBase from './GstBase-1.0';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

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
export function audio_buffer_clip(buffer: Gst.Buffer, segment: Gst.Segment, rate: number, bpf: number): Gst.Buffer
export function audio_buffer_map(info: AudioInfo, gstbuffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* buffer */ AudioBuffer ]
export function audio_buffer_reorder_channels(buffer: Gst.Buffer, format: AudioFormat, from: AudioChannelPosition[], to: AudioChannelPosition[]): boolean
export function audio_buffer_truncate(buffer: Gst.Buffer, bpf: number, trim: number, samples: number): Gst.Buffer
export function audio_channel_get_fallback_mask(channels: number): number
export function audio_channel_positions_from_mask(channel_mask: number, position: AudioChannelPosition[]): boolean
export function audio_channel_positions_to_mask(position: AudioChannelPosition[], force_order: boolean): [ /* returnType */ boolean, /* channel_mask */ number ]
export function audio_channel_positions_to_string(position: AudioChannelPosition[]): string
export function audio_channel_positions_to_valid_order(position: AudioChannelPosition[]): boolean
export function audio_check_valid_channel_positions(position: AudioChannelPosition[], force_order: boolean): boolean
export function audio_clipping_meta_api_get_type(): GObject.Type
export function audio_clipping_meta_get_info(): Gst.MetaInfo
export function audio_downmix_meta_api_get_type(): GObject.Type
export function audio_downmix_meta_get_info(): Gst.MetaInfo
export function audio_format_build_integer(sign: boolean, endianness: number, width: number, depth: number): AudioFormat
export function audio_format_fill_silence(info: AudioFormatInfo, dest: Uint8Array[]): void
export function audio_format_from_string(format: string): AudioFormat
export function audio_format_get_info(format: AudioFormat): AudioFormatInfo
export function audio_format_info_get_type(): GObject.Type
export function audio_format_to_string(format: AudioFormat): string
export function audio_formats_raw(): AudioFormat[]
export function audio_get_channel_reorder_map(from: AudioChannelPosition[], to: AudioChannelPosition[], reorder_map: number[]): boolean
export function audio_iec61937_frame_size(spec: AudioRingBufferSpec): number
export function audio_iec61937_payload(src: Uint8Array[], dst: Uint8Array[], spec: AudioRingBufferSpec, endianness: number): boolean
export function audio_info_from_caps(caps: Gst.Caps): [ /* returnType */ boolean, /* info */ AudioInfo ]
export function audio_info_init(): /* info */ AudioInfo
export function audio_level_meta_api_get_type(): GObject.Type
export function audio_level_meta_get_info(): Gst.MetaInfo
export function audio_make_raw_caps(formats: AudioFormat[] | null, layout: AudioLayout): Gst.Caps
export function audio_meta_api_get_type(): GObject.Type
export function audio_meta_get_info(): Gst.MetaInfo
export function audio_reorder_channels(data: Uint8Array[], format: AudioFormat, from: AudioChannelPosition[], to: AudioChannelPosition[]): boolean
export function audio_resampler_new(method: AudioResamplerMethod, flags: AudioResamplerFlags, format: AudioFormat, channels: number, in_rate: number, out_rate: number, options: Gst.Structure): AudioResampler
export function audio_resampler_options_set_quality(method: AudioResamplerMethod, quality: number, in_rate: number, out_rate: number, options: Gst.Structure): void
export function buffer_add_audio_clipping_meta(buffer: Gst.Buffer, format: Gst.Format, start: number, end: number): AudioClippingMeta
export function buffer_add_audio_downmix_meta(buffer: Gst.Buffer, from_position: AudioChannelPosition[], to_position: AudioChannelPosition[], matrix: number): AudioDownmixMeta
export function buffer_add_audio_level_meta(buffer: Gst.Buffer, level: number, voice_activity: boolean): AudioLevelMeta | null
export function buffer_add_audio_meta(buffer: Gst.Buffer, info: AudioInfo, samples: number, offsets?: number | null): AudioMeta
export function buffer_get_audio_downmix_meta_for_channels(buffer: Gst.Buffer, to_position: AudioChannelPosition[]): AudioDownmixMeta
export function buffer_get_audio_level_meta(buffer: Gst.Buffer): AudioLevelMeta | null
export function stream_volume_convert_volume(from: StreamVolumeFormat, to: StreamVolumeFormat, val: number): number
export interface AudioBaseSinkCustomSlavingCallback {
    (sink: AudioBaseSink, etime: Gst.ClockTime, itime: Gst.ClockTime, requested_skew: Gst.ClockTimeDiff, discont_reason: AudioBaseSinkDiscontReason): void
}
export interface AudioClockGetTimeFunc {
    (clock: Gst.Clock): Gst.ClockTime
}
export interface AudioFormatPack {
    (info: AudioFormatInfo, flags: AudioPackFlags, src: Uint8Array[], data: Uint8Array[], length: number): void
}
export interface AudioFormatUnpack {
    (info: AudioFormatInfo, flags: AudioPackFlags, dest: Uint8Array[], data: Uint8Array[], length: number): void
}
export interface AudioRingBufferCallback {
    (rbuf: AudioRingBuffer, data: Uint8Array[]): void
}
export class StreamVolume {
    /* Properties of GstAudio-1.0.GstAudio.StreamVolume */
    mute: boolean
    volume: number
    /* Methods of GstAudio-1.0.GstAudio.StreamVolume */
    get_mute(): boolean
    get_volume(format: StreamVolumeFormat): number
    set_mute(mute: boolean): void
    set_volume(format: StreamVolumeFormat, val: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static convert_volume(from: StreamVolumeFormat, to: StreamVolumeFormat, val: number): number
}
export interface AudioAggregator_ConstructProps extends GstBase.Aggregator_ConstructProps {
    alignment_threshold?: number
    discont_wait?: number
    output_buffer_duration?: number
    output_buffer_duration_fraction?: Gst.Fraction
}
export class AudioAggregator {
    /* Properties of GstAudio-1.0.GstAudio.AudioAggregator */
    alignment_threshold: number
    discont_wait: number
    output_buffer_duration: number
    output_buffer_duration_fraction: Gst.Fraction
    /* Properties of GstBase-1.0.GstBase.Aggregator */
    emit_signals: boolean
    latency: number
    min_upstream_latency: number
    start_time: number
    start_time_selection: GstBase.AggregatorStartTimeSelection
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioAggregator */
    current_caps: Gst.Caps
    /* Fields of GstBase-1.0.GstBase.Aggregator */
    srcpad: Gst.Pad
    /* Fields of Gst-1.0.Gst.Element */
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
    numpads: number
    pads: Gst.Pad[]
    numsrcpads: number
    srcpads: Gst.Pad[]
    numsinkpads: number
    sinkpads: Gst.Pad[]
    pads_cookie: number
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioAggregator */
    set_sink_caps(pad: AudioAggregatorPad, caps: Gst.Caps): void
    /* Methods of GstBase-1.0.GstBase.Aggregator */
    finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    finish_buffer_list(bufferlist: Gst.BufferList): Gst.FlowReturn
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool | null
    get_latency(): Gst.ClockTime
    negotiate(): boolean
    peek_next_sample(pad: GstBase.AggregatorPad): Gst.Sample | null
    selected_samples(pts: Gst.ClockTime, dts: Gst.ClockTime, duration: Gst.ClockTime, info?: Gst.Structure | null): void
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void
    set_src_caps(caps: Gst.Caps): void
    simple_get_next_time(): Gst.ClockTime
    update_segment(segment: Gst.Segment): void
    /* Methods of Gst-1.0.Gst.Element */
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
    /* Virtual methods of GstAudio-1.0.GstAudio.AudioAggregator */
    vfunc_aggregate_one_buffer(pad: AudioAggregatorPad, inbuf: Gst.Buffer, in_offset: number, outbuf: Gst.Buffer, out_offset: number, num_frames: number): boolean
    vfunc_create_output_buffer(num_frames: number): Gst.Buffer
    /* Virtual methods of GstBase-1.0.GstBase.Aggregator */
    vfunc_aggregate(timeout: boolean): Gst.FlowReturn
    vfunc_clip(aggregator_pad: GstBase.AggregatorPad, buf: Gst.Buffer): Gst.Buffer
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_finish_buffer_list(bufferlist: Gst.BufferList): Gst.FlowReturn
    vfunc_fixate_src_caps(caps: Gst.Caps): Gst.Caps
    vfunc_flush(): Gst.FlowReturn
    vfunc_get_next_time(): Gst.ClockTime
    vfunc_negotiate(): boolean
    vfunc_negotiated_src_caps(caps: Gst.Caps): boolean
    vfunc_peek_next_sample(aggregator_pad: GstBase.AggregatorPad): Gst.Sample | null
    vfunc_propose_allocation(pad: GstBase.AggregatorPad, decide_query: Gst.Query, query: Gst.Query): boolean
    vfunc_sink_event(aggregator_pad: GstBase.AggregatorPad, event: Gst.Event): boolean
    vfunc_sink_event_pre_queue(aggregator_pad: GstBase.AggregatorPad, event: Gst.Event): Gst.FlowReturn
    vfunc_sink_query(aggregator_pad: GstBase.AggregatorPad, query: Gst.Query): boolean
    vfunc_sink_query_pre_queue(aggregator_pad: GstBase.AggregatorPad, query: Gst.Query): boolean
    vfunc_src_activate(mode: Gst.PadMode, active: boolean): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_update_src_caps(caps: Gst.Caps): [ /* returnType */ Gst.FlowReturn, /* ret */ Gst.Caps | null ]
    /* Virtual methods of Gst-1.0.Gst.Element */
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
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstBase-1.0.GstBase.Aggregator */
    connect(sigName: "samples-selected", callback: (($obj: AudioAggregator, segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void)): number
    connect_after(sigName: "samples-selected", callback: (($obj: AudioAggregator, segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void)): number
    emit(sigName: "samples-selected", segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioAggregator) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: AudioAggregator) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioAggregator, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: AudioAggregator, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioAggregator, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: AudioAggregator, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioAggregator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioAggregator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alignment-threshold", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-threshold", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::discont-wait", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discont-wait", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-buffer-duration", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-buffer-duration", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-buffer-duration-fraction", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-buffer-duration-fraction", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::emit-signals", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-upstream-latency", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-upstream-latency", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time-selection", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time-selection", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioAggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioAggregator_ConstructProps)
    _init (config?: AudioAggregator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioAggregatorConvertPad_ConstructProps extends AudioAggregatorPad_ConstructProps {
    converter_config?: Gst.Structure
}
export class AudioAggregatorConvertPad {
    /* Properties of GstAudio-1.0.GstAudio.AudioAggregatorConvertPad */
    converter_config: Gst.Structure
    /* Properties of GstBase-1.0.GstBase.AggregatorPad */
    emit_signals: boolean
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
    element_private: object
    padtemplate: Gst.PadTemplate
    direction: Gst.PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.AggregatorPad */
    drop_buffer(): boolean
    has_buffer(): boolean
    is_eos(): boolean
    peek_buffer(): Gst.Buffer | null
    pop_buffer(): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Pad */
    activate_mode(mode: Gst.PadMode, active: boolean): boolean
    add_probe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    can_link(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chain_list(list: Gst.BufferList): Gst.FlowReturn
    check_reconfigure(): boolean
    create_stream_id(parent: Gst.Element, stream_id?: string | null): string
    event_default(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    get_allowed_caps(): Gst.Caps | null
    get_current_caps(): Gst.Caps | null
    get_direction(): Gst.PadDirection
    get_element_private(): object | null
    get_last_flow_return(): Gst.FlowReturn
    get_offset(): number
    get_pad_template(): Gst.PadTemplate | null
    get_pad_template_caps(): Gst.Caps
    get_parent_element(): Gst.Element | null
    get_peer(): Gst.Pad | null
    get_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    get_single_internal_link(): Gst.Pad | null
    get_sticky_event(event_type: Gst.EventType, idx: number): Gst.Event | null
    get_stream(): Gst.Stream | null
    get_stream_id(): string | null
    get_task_state(): Gst.TaskState
    has_current_caps(): boolean
    is_active(): boolean
    is_blocked(): boolean
    is_blocking(): boolean
    is_linked(): boolean
    iterate_internal_links(): Gst.Iterator | null
    iterate_internal_links_default(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    link_full(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    link_maybe_ghosting(sink: Gst.Pad): boolean
    link_maybe_ghosting_full(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    mark_reconfigure(): void
    needs_reconfigure(): boolean
    pause_task(): boolean
    peer_query(query: Gst.Query): boolean
    peer_query_accept_caps(caps: Gst.Caps): boolean
    peer_query_caps(filter?: Gst.Caps | null): Gst.Caps
    peer_query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    peer_query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peer_query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxy_query_accept_caps(query: Gst.Query): boolean
    proxy_query_caps(query: Gst.Query): boolean
    pull_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    push(buffer: Gst.Buffer): Gst.FlowReturn
    push_event(event: Gst.Event): boolean
    push_list(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    query_accept_caps(caps: Gst.Caps): boolean
    query_caps(filter?: Gst.Caps | null): Gst.Caps
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_default(parent: Gst.Object | null, query: Gst.Query): boolean
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    remove_probe(id: number): void
    send_event(event: Gst.Event): boolean
    set_activate_function_full(activate: Gst.PadActivateFunction): void
    set_activatemode_function_full(activatemode: Gst.PadActivateModeFunction): void
    set_active(active: boolean): boolean
    set_chain_function_full(chain: Gst.PadChainFunction): void
    set_chain_list_function_full(chainlist: Gst.PadChainListFunction): void
    set_element_private(priv?: object | null): void
    set_event_full_function_full(event: Gst.PadEventFullFunction): void
    set_event_function_full(event: Gst.PadEventFunction): void
    set_getrange_function_full(get: Gst.PadGetRangeFunction): void
    set_iterate_internal_links_function_full(iterintlink: Gst.PadIterIntLinkFunction): void
    set_link_function_full(link: Gst.PadLinkFunction): void
    set_offset(offset: number): void
    set_query_function_full(query: Gst.PadQueryFunction): void
    set_unlink_function_full(unlink: Gst.PadUnlinkFunction): void
    start_task(func: Gst.TaskFunction): boolean
    sticky_events_foreach(foreach_func: Gst.PadStickyEventsForeachFunction): void
    stop_task(): boolean
    store_sticky_event(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    use_fixed_caps(): void
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
    /* Virtual methods of GstAudio-1.0.GstAudio.AudioAggregatorPad */
    vfunc_convert_buffer(in_info: AudioInfo, out_info: AudioInfo, buffer: Gst.Buffer): Gst.Buffer
    vfunc_update_conversion_info(): void
    /* Virtual methods of GstBase-1.0.GstBase.AggregatorPad */
    vfunc_flush(aggregator: GstBase.Aggregator): Gst.FlowReturn
    vfunc_skip_buffer(aggregator: GstBase.Aggregator, buffer: Gst.Buffer): boolean
    /* Virtual methods of Gst-1.0.Gst.Pad */
    vfunc_linked(peer: Gst.Pad): void
    vfunc_unlinked(peer: Gst.Pad): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstBase-1.0.GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: (($obj: AudioAggregatorConvertPad, object: Gst.Buffer) => void)): number
    connect_after(sigName: "buffer-consumed", callback: (($obj: AudioAggregatorConvertPad, object: Gst.Buffer) => void)): number
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: (($obj: AudioAggregatorConvertPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: AudioAggregatorConvertPad, peer: Gst.Pad) => void)): number
    emit(sigName: "linked", peer: Gst.Pad): void
    connect(sigName: "unlinked", callback: (($obj: AudioAggregatorConvertPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: AudioAggregatorConvertPad, peer: Gst.Pad) => void)): number
    emit(sigName: "unlinked", peer: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioAggregatorConvertPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioAggregatorConvertPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::converter-config", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::converter-config", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::emit-signals", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caps", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::template", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioAggregatorConvertPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioAggregatorConvertPad_ConstructProps)
    _init (config?: AudioAggregatorConvertPad_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioAggregatorPad_ConstructProps extends GstBase.AggregatorPad_ConstructProps {
}
export class AudioAggregatorPad {
    /* Properties of GstBase-1.0.GstBase.AggregatorPad */
    emit_signals: boolean
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
    element_private: object
    padtemplate: Gst.PadTemplate
    direction: Gst.PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.AggregatorPad */
    drop_buffer(): boolean
    has_buffer(): boolean
    is_eos(): boolean
    peek_buffer(): Gst.Buffer | null
    pop_buffer(): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Pad */
    activate_mode(mode: Gst.PadMode, active: boolean): boolean
    add_probe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    can_link(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chain_list(list: Gst.BufferList): Gst.FlowReturn
    check_reconfigure(): boolean
    create_stream_id(parent: Gst.Element, stream_id?: string | null): string
    event_default(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    get_allowed_caps(): Gst.Caps | null
    get_current_caps(): Gst.Caps | null
    get_direction(): Gst.PadDirection
    get_element_private(): object | null
    get_last_flow_return(): Gst.FlowReturn
    get_offset(): number
    get_pad_template(): Gst.PadTemplate | null
    get_pad_template_caps(): Gst.Caps
    get_parent_element(): Gst.Element | null
    get_peer(): Gst.Pad | null
    get_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    get_single_internal_link(): Gst.Pad | null
    get_sticky_event(event_type: Gst.EventType, idx: number): Gst.Event | null
    get_stream(): Gst.Stream | null
    get_stream_id(): string | null
    get_task_state(): Gst.TaskState
    has_current_caps(): boolean
    is_active(): boolean
    is_blocked(): boolean
    is_blocking(): boolean
    is_linked(): boolean
    iterate_internal_links(): Gst.Iterator | null
    iterate_internal_links_default(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    link_full(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    link_maybe_ghosting(sink: Gst.Pad): boolean
    link_maybe_ghosting_full(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    mark_reconfigure(): void
    needs_reconfigure(): boolean
    pause_task(): boolean
    peer_query(query: Gst.Query): boolean
    peer_query_accept_caps(caps: Gst.Caps): boolean
    peer_query_caps(filter?: Gst.Caps | null): Gst.Caps
    peer_query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    peer_query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peer_query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxy_query_accept_caps(query: Gst.Query): boolean
    proxy_query_caps(query: Gst.Query): boolean
    pull_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    push(buffer: Gst.Buffer): Gst.FlowReturn
    push_event(event: Gst.Event): boolean
    push_list(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    query_accept_caps(caps: Gst.Caps): boolean
    query_caps(filter?: Gst.Caps | null): Gst.Caps
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_default(parent: Gst.Object | null, query: Gst.Query): boolean
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    remove_probe(id: number): void
    send_event(event: Gst.Event): boolean
    set_activate_function_full(activate: Gst.PadActivateFunction): void
    set_activatemode_function_full(activatemode: Gst.PadActivateModeFunction): void
    set_active(active: boolean): boolean
    set_chain_function_full(chain: Gst.PadChainFunction): void
    set_chain_list_function_full(chainlist: Gst.PadChainListFunction): void
    set_element_private(priv?: object | null): void
    set_event_full_function_full(event: Gst.PadEventFullFunction): void
    set_event_function_full(event: Gst.PadEventFunction): void
    set_getrange_function_full(get: Gst.PadGetRangeFunction): void
    set_iterate_internal_links_function_full(iterintlink: Gst.PadIterIntLinkFunction): void
    set_link_function_full(link: Gst.PadLinkFunction): void
    set_offset(offset: number): void
    set_query_function_full(query: Gst.PadQueryFunction): void
    set_unlink_function_full(unlink: Gst.PadUnlinkFunction): void
    start_task(func: Gst.TaskFunction): boolean
    sticky_events_foreach(foreach_func: Gst.PadStickyEventsForeachFunction): void
    stop_task(): boolean
    store_sticky_event(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    use_fixed_caps(): void
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
    /* Virtual methods of GstAudio-1.0.GstAudio.AudioAggregatorPad */
    vfunc_convert_buffer(in_info: AudioInfo, out_info: AudioInfo, buffer: Gst.Buffer): Gst.Buffer
    vfunc_update_conversion_info(): void
    /* Virtual methods of GstBase-1.0.GstBase.AggregatorPad */
    vfunc_flush(aggregator: GstBase.Aggregator): Gst.FlowReturn
    vfunc_skip_buffer(aggregator: GstBase.Aggregator, buffer: Gst.Buffer): boolean
    /* Virtual methods of Gst-1.0.Gst.Pad */
    vfunc_linked(peer: Gst.Pad): void
    vfunc_unlinked(peer: Gst.Pad): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GstBase-1.0.GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: (($obj: AudioAggregatorPad, object: Gst.Buffer) => void)): number
    connect_after(sigName: "buffer-consumed", callback: (($obj: AudioAggregatorPad, object: Gst.Buffer) => void)): number
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: (($obj: AudioAggregatorPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: AudioAggregatorPad, peer: Gst.Pad) => void)): number
    emit(sigName: "linked", peer: Gst.Pad): void
    connect(sigName: "unlinked", callback: (($obj: AudioAggregatorPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: AudioAggregatorPad, peer: Gst.Pad) => void)): number
    emit(sigName: "unlinked", peer: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioAggregatorPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioAggregatorPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::emit-signals", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caps", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::template", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioAggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioAggregatorPad_ConstructProps)
    _init (config?: AudioAggregatorPad_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioBaseSink_ConstructProps extends GstBase.BaseSink_ConstructProps {
    alignment_threshold?: number
    buffer_time?: number
    can_activate_pull?: boolean
    discont_wait?: number
    drift_tolerance?: number
    latency_time?: number
    provide_clock?: boolean
    slave_method?: AudioBaseSinkSlaveMethod
}
export class AudioBaseSink {
    /* Properties of GstAudio-1.0.GstAudio.AudioBaseSink */
    alignment_threshold: number
    buffer_time: number
    can_activate_pull: boolean
    discont_wait: number
    drift_tolerance: number
    latency_time: number
    provide_clock: boolean
    slave_method: AudioBaseSinkSlaveMethod
    /* Properties of GstBase-1.0.GstBase.BaseSink */
    async: boolean
    blocksize: number
    enable_last_sample: boolean
    readonly last_sample: Gst.Sample
    max_bitrate: number
    max_lateness: number
    processing_deadline: number
    qos: boolean
    render_delay: number
    readonly stats: Gst.Structure
    sync: boolean
    throttle_time: number
    ts_offset: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioBaseSink */
    element: GstBase.BaseSink
    ringbuffer: AudioRingBuffer
    next_sample: number
    provided_clock: Gst.Clock
    eos_rendering: boolean
    /* Fields of GstBase-1.0.GstBase.BaseSink */
    sinkpad: Gst.Pad
    pad_mode: Gst.PadMode
    offset: number
    can_activate_push: boolean
    preroll_lock: GLib.Mutex
    preroll_cond: GLib.Cond
    eos: boolean
    need_preroll: boolean
    have_preroll: boolean
    playing_async: boolean
    have_newsegment: boolean
    segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Element */
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
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioBaseSink */
    create_ringbuffer(): AudioRingBuffer
    get_alignment_threshold(): Gst.ClockTime
    get_discont_wait(): Gst.ClockTime
    get_drift_tolerance(): number
    get_provide_clock(): boolean
    get_slave_method(): AudioBaseSinkSlaveMethod
    report_device_failure(): void
    set_alignment_threshold(alignment_threshold: Gst.ClockTime): void
    set_custom_slaving_callback(callback: AudioBaseSinkCustomSlavingCallback): void
    set_discont_wait(discont_wait: Gst.ClockTime): void
    set_drift_tolerance(drift_tolerance: number): void
    set_provide_clock(provide: boolean): void
    set_slave_method(method: AudioBaseSinkSlaveMethod): void
    /* Methods of GstBase-1.0.GstBase.BaseSink */
    do_preroll(obj: Gst.MiniObject): Gst.FlowReturn
    get_blocksize(): number
    get_drop_out_of_segment(): boolean
    get_last_sample(): Gst.Sample | null
    get_latency(): Gst.ClockTime
    get_max_bitrate(): number
    get_max_lateness(): number
    get_processing_deadline(): Gst.ClockTime
    get_render_delay(): Gst.ClockTime
    get_stats(): Gst.Structure
    get_sync(): boolean
    get_throttle_time(): number
    get_ts_offset(): Gst.ClockTimeDiff
    is_async_enabled(): boolean
    is_last_sample_enabled(): boolean
    is_qos_enabled(): boolean
    query_latency(): [ /* returnType */ boolean, /* live */ boolean | null, /* upstream_live */ boolean | null, /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    set_async_enabled(enabled: boolean): void
    set_blocksize(blocksize: number): void
    set_drop_out_of_segment(drop_out_of_segment: boolean): void
    set_last_sample_enabled(enabled: boolean): void
    set_max_bitrate(max_bitrate: number): void
    set_max_lateness(max_lateness: number): void
    set_processing_deadline(processing_deadline: Gst.ClockTime): void
    set_qos_enabled(enabled: boolean): void
    set_render_delay(delay: Gst.ClockTime): void
    set_sync(sync: boolean): void
    set_throttle_time(throttle: number): void
    set_ts_offset(offset: Gst.ClockTimeDiff): void
    wait(time: Gst.ClockTime): [ /* returnType */ Gst.FlowReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    wait_clock(time: Gst.ClockTime): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    wait_preroll(): Gst.FlowReturn
    /* Methods of Gst-1.0.Gst.Element */
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
    /* Virtual methods of GstAudio-1.0.GstAudio.AudioBaseSink */
    vfunc_create_ringbuffer(): AudioRingBuffer
    vfunc_payload(buffer: Gst.Buffer): Gst.Buffer
    /* Virtual methods of GstBase-1.0.GstBase.BaseSink */
    vfunc_activate_pull(active: boolean): boolean
    vfunc_event(event: Gst.Event): boolean
    vfunc_fixate(caps: Gst.Caps): Gst.Caps
    vfunc_get_caps(filter: Gst.Caps): Gst.Caps
    vfunc_get_times(buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime): void
    vfunc_prepare(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_prepare_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_preroll(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_query(query: Gst.Query): boolean
    vfunc_render(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_render_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_unlock_stop(): boolean
    vfunc_wait_event(event: Gst.Event): Gst.FlowReturn
    /* Virtual methods of Gst-1.0.Gst.Element */
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
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioBaseSink) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: AudioBaseSink) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioBaseSink, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: AudioBaseSink, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioBaseSink, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: AudioBaseSink, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioBaseSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioBaseSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alignment-threshold", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-threshold", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-time", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-time", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-activate-pull", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-activate-pull", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::discont-wait", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discont-wait", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::drift-tolerance", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drift-tolerance", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency-time", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency-time", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provide-clock", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provide-clock", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::slave-method", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-method", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-last-sample", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-sample", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-bitrate", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-lateness", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::processing-deadline", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::render-delay", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::throttle-time", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ts-offset", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioBaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioBaseSink_ConstructProps)
    _init (config?: AudioBaseSink_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioBaseSrc_ConstructProps extends GstBase.PushSrc_ConstructProps {
    buffer_time?: number
    latency_time?: number
    provide_clock?: boolean
    slave_method?: AudioBaseSrcSlaveMethod
}
export class AudioBaseSrc {
    /* Properties of GstAudio-1.0.GstAudio.AudioBaseSrc */
    readonly actual_buffer_time: number
    readonly actual_latency_time: number
    buffer_time: number
    latency_time: number
    provide_clock: boolean
    slave_method: AudioBaseSrcSlaveMethod
    /* Properties of GstBase-1.0.GstBase.BaseSrc */
    blocksize: number
    do_timestamp: boolean
    num_buffers: number
    typefind: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioBaseSrc */
    element: GstBase.PushSrc
    ringbuffer: AudioRingBuffer
    next_sample: number
    clock: Gst.Clock
    /* Fields of GstBase-1.0.GstBase.BaseSrc */
    srcpad: Gst.Pad
    live_lock: GLib.Mutex
    live_cond: GLib.Cond
    is_live: boolean
    live_running: boolean
    can_activate_push: boolean
    random_access: boolean
    clock_id: Gst.ClockID
    segment: Gst.Segment
    need_newsegment: boolean
    num_buffers_left: number
    running: boolean
    pending_seek: Gst.Event
    priv: GstBase.BaseSrcPrivate
    /* Fields of Gst-1.0.Gst.Element */
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
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioBaseSrc */
    create_ringbuffer(): AudioRingBuffer
    get_provide_clock(): boolean
    get_slave_method(): AudioBaseSrcSlaveMethod
    set_provide_clock(provide: boolean): void
    set_slave_method(method: AudioBaseSrcSlaveMethod): void
    /* Methods of GstBase-1.0.GstBase.BaseSrc */
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_blocksize(): number
    get_buffer_pool(): Gst.BufferPool | null
    get_do_timestamp(): boolean
    is_async(): boolean
    negotiate(): boolean
    new_seamless_segment(start: number, stop: number, time: number): boolean
    new_segment(segment: Gst.Segment): boolean
    query_latency(): [ /* returnType */ boolean, /* live */ boolean | null, /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    set_async(async: boolean): void
    set_automatic_eos(automatic_eos: boolean): void
    set_blocksize(blocksize: number): void
    set_caps(caps: Gst.Caps): boolean
    set_do_timestamp(timestamp: boolean): void
    set_dynamic_size(dynamic: boolean): void
    set_format(format: Gst.Format): void
    set_live(live: boolean): void
    start_complete(ret: Gst.FlowReturn): void
    start_wait(): Gst.FlowReturn
    submit_buffer_list(buffer_list: Gst.BufferList): void
    wait_playing(): Gst.FlowReturn
    /* Methods of Gst-1.0.Gst.Element */
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
    /* Virtual methods of GstAudio-1.0.GstAudio.AudioBaseSrc */
    vfunc_create_ringbuffer(): AudioRingBuffer
    vfunc_alloc(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_alloc(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    /* Virtual methods of GstBase-1.0.GstBase.PushSrc */
    vfunc_alloc(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_alloc(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    /* Virtual methods of GstBase-1.0.GstBase.BaseSrc */
    vfunc_alloc(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_do_seek(segment: Gst.Segment): boolean
    vfunc_event(event: Gst.Event): boolean
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fixate(caps: Gst.Caps): Gst.Caps
    vfunc_get_caps(filter?: Gst.Caps | null): Gst.Caps
    vfunc_get_size(size: number): boolean
    vfunc_get_times(buffer: Gst.Buffer): [ /* start */ Gst.ClockTime, /* end */ Gst.ClockTime ]
    vfunc_is_seekable(): boolean
    vfunc_negotiate(): boolean
    vfunc_prepare_seek_segment(seek: Gst.Event, segment: Gst.Segment): boolean
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_unlock_stop(): boolean
    /* Virtual methods of Gst-1.0.Gst.Element */
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
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioBaseSrc) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: AudioBaseSrc) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioBaseSrc, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: AudioBaseSrc, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioBaseSrc, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: AudioBaseSrc, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioBaseSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioBaseSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actual-buffer-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actual-buffer-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actual-latency-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actual-latency-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency-time", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provide-clock", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provide-clock", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::slave-method", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-method", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::do-timestamp", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-buffers", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::typefind", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    do_timestamp: boolean
    num_buffers: number
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
    live_lock: GLib.Mutex
    live_cond: GLib.Cond
    is_live: boolean
    live_running: boolean
    can_activate_push: boolean
    random_access: boolean
    clock_id: Gst.ClockID
    segment: Gst.Segment
    need_newsegment: boolean
    num_buffers_left: number
    running: boolean
    pending_seek: Gst.Event
    priv: GstBase.BaseSrcPrivate
    /* Fields of Gst-1.0.Gst.Element */
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
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioCdSrc */
    add_track(track: AudioCdSrcTrack): boolean
    /* Methods of GstBase-1.0.GstBase.BaseSrc */
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_blocksize(): number
    get_buffer_pool(): Gst.BufferPool | null
    get_do_timestamp(): boolean
    is_async(): boolean
    negotiate(): boolean
    new_seamless_segment(start: number, stop: number, time: number): boolean
    new_segment(segment: Gst.Segment): boolean
    query_latency(): [ /* returnType */ boolean, /* live */ boolean | null, /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    set_async(async: boolean): void
    set_automatic_eos(automatic_eos: boolean): void
    set_blocksize(blocksize: number): void
    set_caps(caps: Gst.Caps): boolean
    set_do_timestamp(timestamp: boolean): void
    set_dynamic_size(dynamic: boolean): void
    set_format(format: Gst.Format): void
    set_live(live: boolean): void
    start_complete(ret: Gst.FlowReturn): void
    start_wait(): Gst.FlowReturn
    submit_buffer_list(buffer_list: Gst.BufferList): void
    wait_playing(): Gst.FlowReturn
    /* Methods of Gst-1.0.Gst.Element */
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
    /* Methods of Gst-1.0.Gst.URIHandler */
    get_protocols(): string[] | null
    get_uri(): string | null
    get_uri_type(): Gst.URIType
    set_uri(uri: string): boolean
    /* Virtual methods of GstAudio-1.0.GstAudio.AudioCdSrc */
    vfunc_close(): void
    vfunc_open(device: string): boolean
    vfunc_read_sector(sector: number): Gst.Buffer
    vfunc_get_uri(): string | null
    vfunc_set_uri(uri: string): boolean
    vfunc_alloc(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_alloc(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    /* Virtual methods of GstBase-1.0.GstBase.PushSrc */
    vfunc_alloc(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_alloc(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    /* Virtual methods of GstBase-1.0.GstBase.BaseSrc */
    vfunc_alloc(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_do_seek(segment: Gst.Segment): boolean
    vfunc_event(event: Gst.Event): boolean
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fixate(caps: Gst.Caps): Gst.Caps
    vfunc_get_caps(filter?: Gst.Caps | null): Gst.Caps
    vfunc_get_size(size: number): boolean
    vfunc_get_times(buffer: Gst.Buffer): [ /* start */ Gst.ClockTime, /* end */ Gst.ClockTime ]
    vfunc_is_seekable(): boolean
    vfunc_negotiate(): boolean
    vfunc_prepare_seek_segment(seek: Gst.Event, segment: Gst.Segment): boolean
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_unlock_stop(): boolean
    /* Virtual methods of Gst-1.0.Gst.Element */
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
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioCdSrc) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: AudioCdSrc) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioCdSrc, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: AudioCdSrc, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioCdSrc, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: AudioCdSrc, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioCdSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioCdSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mode", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::do-timestamp", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-buffers", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::typefind", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioCdSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioCdSrc_ConstructProps)
    _init (config?: AudioCdSrc_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioClock_ConstructProps extends Gst.SystemClock_ConstructProps {
}
export class AudioClock {
    /* Properties of Gst-1.0.Gst.SystemClock */
    clock_type: Gst.ClockType
    /* Properties of Gst-1.0.Gst.Clock */
    timeout: number
    window_size: number
    window_threshold: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioClock */
    clock: Gst.SystemClock
    func: AudioClockGetTimeFunc
    user_data: object
    destroy_notify: GLib.DestroyNotify
    /* Fields of Gst-1.0.Gst.Clock */
    object: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioClock */
    adjust(time: Gst.ClockTime): Gst.ClockTime
    get_time(): Gst.ClockTime
    invalidate(): void
    reset(time: Gst.ClockTime): void
    /* Methods of Gst-1.0.Gst.Clock */
    add_observation(slave: Gst.ClockTime, master: Gst.ClockTime): [ /* returnType */ boolean, /* r_squared */ number ]
    add_observation_unapplied(slave: Gst.ClockTime, master: Gst.ClockTime): [ /* returnType */ boolean, /* r_squared */ number, /* internal */ Gst.ClockTime | null, /* external */ Gst.ClockTime | null, /* rate_num */ Gst.ClockTime | null, /* rate_denom */ Gst.ClockTime | null ]
    adjust_unlocked(internal: Gst.ClockTime): Gst.ClockTime
    adjust_with_calibration(internal_target: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    get_calibration(): [ /* internal */ Gst.ClockTime | null, /* external */ Gst.ClockTime | null, /* rate_num */ Gst.ClockTime | null, /* rate_denom */ Gst.ClockTime | null ]
    get_internal_time(): Gst.ClockTime
    get_master(): Gst.Clock | null
    get_resolution(): Gst.ClockTime
    get_timeout(): Gst.ClockTime
    is_synced(): boolean
    new_periodic_id(start_time: Gst.ClockTime, interval: Gst.ClockTime): Gst.ClockID
    new_single_shot_id(time: Gst.ClockTime): Gst.ClockID
    periodic_id_reinit(id: Gst.ClockID, start_time: Gst.ClockTime, interval: Gst.ClockTime): boolean
    set_calibration(internal: Gst.ClockTime, external: Gst.ClockTime, rate_num: Gst.ClockTime, rate_denom: Gst.ClockTime): void
    set_master(master?: Gst.Clock | null): boolean
    set_resolution(resolution: Gst.ClockTime): Gst.ClockTime
    set_synced(synced: boolean): void
    set_timeout(timeout: Gst.ClockTime): void
    single_shot_id_reinit(id: Gst.ClockID, time: Gst.ClockTime): boolean
    unadjust_unlocked(external: Gst.ClockTime): Gst.ClockTime
    unadjust_with_calibration(external_target: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    wait_for_sync(timeout: Gst.ClockTime): boolean
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
    /* Virtual methods of Gst-1.0.Gst.Clock */
    vfunc_change_resolution(old_resolution: Gst.ClockTime, new_resolution: Gst.ClockTime): Gst.ClockTime
    vfunc_get_internal_time(): Gst.ClockTime
    vfunc_get_resolution(): Gst.ClockTime
    vfunc_unschedule(entry: Gst.ClockEntry): void
    vfunc_wait(entry: Gst.ClockEntry): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    vfunc_wait_async(entry: Gst.ClockEntry): Gst.ClockReturn
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Clock */
    connect(sigName: "synced", callback: (($obj: AudioClock, synced: boolean) => void)): number
    connect_after(sigName: "synced", callback: (($obj: AudioClock, synced: boolean) => void)): number
    emit(sigName: "synced", synced: boolean): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::clock-type", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-size", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-threshold", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioClock_ConstructProps)
    _init (config?: AudioClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, func: AudioClockGetTimeFunc): AudioClock
    static $gtype: GObject.Type
}
export interface AudioDecoder_ConstructProps extends Gst.Element_ConstructProps {
    max_errors?: number
    min_latency?: number
    plc?: boolean
    tolerance?: number
}
export class AudioDecoder {
    /* Properties of GstAudio-1.0.GstAudio.AudioDecoder */
    max_errors: number
    min_latency: number
    plc: boolean
    tolerance: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioDecoder */
    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    stream_lock: GLib.RecMutex
    input_segment: Gst.Segment
    output_segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Element */
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
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioDecoder */
    allocate_output_buffer(size: number): Gst.Buffer
    finish_frame(buf: Gst.Buffer | null, frames: number): Gst.FlowReturn
    finish_subframe(buf?: Gst.Buffer | null): Gst.FlowReturn
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_audio_info(): AudioInfo
    get_delay(): number
    get_drainable(): boolean
    get_estimate_rate(): number
    get_latency(): [ /* min */ Gst.ClockTime | null, /* max */ Gst.ClockTime | null ]
    get_max_errors(): number
    get_min_latency(): Gst.ClockTime
    get_needs_format(): boolean
    get_parse_state(): [ /* sync */ boolean | null, /* eos */ boolean | null ]
    get_plc(): boolean
    get_plc_aware(): number
    get_tolerance(): Gst.ClockTime
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    set_allocation_caps(allocation_caps?: Gst.Caps | null): void
    set_drainable(enabled: boolean): void
    set_estimate_rate(enabled: boolean): void
    set_latency(min: Gst.ClockTime, max: Gst.ClockTime): void
    set_max_errors(num: number): void
    set_min_latency(num: Gst.ClockTime): void
    set_needs_format(enabled: boolean): void
    set_output_caps(caps: Gst.Caps): boolean
    set_output_format(info: AudioInfo): boolean
    set_plc(enabled: boolean): void
    set_plc_aware(plc: boolean): void
    set_tolerance(tolerance: Gst.ClockTime): void
    set_use_default_pad_acceptcaps(use: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
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
    /* Virtual methods of GstAudio-1.0.GstAudio.AudioDecoder */
    vfunc_close(): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_flush(hard: boolean): void
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps
    vfunc_handle_frame(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_negotiate(): boolean
    vfunc_open(): boolean
    vfunc_parse(adapter: GstBase.Adapter, offset: number, length: number): Gst.FlowReturn
    vfunc_pre_push(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_set_format(caps: Gst.Caps): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_sink_query(query: Gst.Query): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean
    /* Virtual methods of Gst-1.0.Gst.Element */
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
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioDecoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: AudioDecoder) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioDecoder, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: AudioDecoder, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioDecoder, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: AudioDecoder, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioDecoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioDecoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-errors", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-latency", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-latency", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::plc", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plc", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tolerance", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tolerance", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioDecoder_ConstructProps)
    _init (config?: AudioDecoder_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioEncoder_ConstructProps extends Gst.Element_ConstructProps {
    hard_resync?: boolean
    perfect_timestamp?: boolean
    tolerance?: number
}
export class AudioEncoder {
    /* Properties of GstAudio-1.0.GstAudio.AudioEncoder */
    hard_resync: boolean
    readonly mark_granule: boolean
    perfect_timestamp: boolean
    tolerance: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioEncoder */
    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    stream_lock: GLib.RecMutex
    input_segment: Gst.Segment
    output_segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Element */
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
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioEncoder */
    allocate_output_buffer(size: number): Gst.Buffer
    finish_frame(buffer: Gst.Buffer | null, samples: number): Gst.FlowReturn
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_audio_info(): AudioInfo
    get_drainable(): boolean
    get_frame_max(): number
    get_frame_samples_max(): number
    get_frame_samples_min(): number
    get_hard_min(): boolean
    get_hard_resync(): boolean
    get_latency(): [ /* min */ Gst.ClockTime | null, /* max */ Gst.ClockTime | null ]
    get_lookahead(): number
    get_mark_granule(): boolean
    get_perfect_timestamp(): boolean
    get_tolerance(): Gst.ClockTime
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    negotiate(): boolean
    proxy_getcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    set_allocation_caps(allocation_caps?: Gst.Caps | null): void
    set_drainable(enabled: boolean): void
    set_frame_max(num: number): void
    set_frame_samples_max(num: number): void
    set_frame_samples_min(num: number): void
    set_hard_min(enabled: boolean): void
    set_hard_resync(enabled: boolean): void
    set_headers(headers: Gst.Buffer[]): void
    set_latency(min: Gst.ClockTime, max: Gst.ClockTime): void
    set_lookahead(num: number): void
    set_mark_granule(enabled: boolean): void
    set_output_format(caps: Gst.Caps): boolean
    set_perfect_timestamp(enabled: boolean): void
    set_tolerance(tolerance: Gst.ClockTime): void
    /* Methods of Gst-1.0.Gst.Element */
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
    /* Methods of Gst-1.0.Gst.Preset */
    delete_preset(name: string): boolean
    get_meta(name: string, tag: string): [ /* returnType */ boolean, /* value */ string ]
    get_preset_names(): string[]
    get_property_names(): string[]
    is_editable(): boolean
    load_preset(name: string): boolean
    rename_preset(old_name: string, new_name: string): boolean
    save_preset(name: string): boolean
    set_meta(name: string, tag: string, value?: string | null): boolean
    /* Virtual methods of GstAudio-1.0.GstAudio.AudioEncoder */
    vfunc_close(): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_flush(): void
    vfunc_getcaps(filter: Gst.Caps): Gst.Caps
    vfunc_handle_frame(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_negotiate(): boolean
    vfunc_open(): boolean
    vfunc_pre_push(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_set_format(info: AudioInfo): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_sink_query(query: Gst.Query): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean
    vfunc_delete_preset(name: string): boolean
    vfunc_get_meta(name: string, tag: string): [ /* returnType */ boolean, /* value */ string ]
    vfunc_get_preset_names(): string[]
    vfunc_get_property_names(): string[]
    vfunc_load_preset(name: string): boolean
    vfunc_rename_preset(old_name: string, new_name: string): boolean
    vfunc_save_preset(name: string): boolean
    vfunc_set_meta(name: string, tag: string, value?: string | null): boolean
    /* Virtual methods of Gst-1.0.Gst.Element */
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
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioEncoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: AudioEncoder) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioEncoder, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: AudioEncoder, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioEncoder, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: AudioEncoder, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioEncoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioEncoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::hard-resync", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hard-resync", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-granule", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-granule", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::perfect-timestamp", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perfect-timestamp", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tolerance", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tolerance", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioEncoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioEncoder_ConstructProps)
    _init (config?: AudioEncoder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_app_dir(): string | null
    static set_app_dir(app_dir: string): boolean
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
    have_segment: boolean
    segment: Gst.Segment
    queued_buf: Gst.Buffer
    /* Fields of Gst-1.0.Gst.Element */
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
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.BaseTransform */
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool | null
    is_in_place(): boolean
    is_passthrough(): boolean
    is_qos_enabled(): boolean
    reconfigure(): boolean
    reconfigure_sink(): void
    reconfigure_src(): void
    set_gap_aware(gap_aware: boolean): void
    set_in_place(in_place: boolean): void
    set_passthrough(passthrough: boolean): void
    set_prefer_passthrough(prefer_passthrough: boolean): void
    set_qos_enabled(enabled: boolean): void
    update_qos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void
    update_src_caps(updated_caps: Gst.Caps): boolean
    /* Methods of Gst-1.0.Gst.Element */
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
    /* Virtual methods of GstAudio-1.0.GstAudio.AudioFilter */
    vfunc_setup(info: AudioInfo): boolean
    vfunc_query(direction: Gst.PadDirection, query: Gst.Query): boolean
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of GstBase-1.0.GstBase.BaseTransform */
    vfunc_accept_caps(direction: Gst.PadDirection, caps: Gst.Caps): boolean
    vfunc_before_transform(buffer: Gst.Buffer): void
    vfunc_copy_metadata(input: Gst.Buffer, outbuf: Gst.Buffer): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_filter_meta(query: Gst.Query, api: GObject.Type, params: Gst.Structure): boolean
    vfunc_fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps
    vfunc_generate_output(): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfunc_get_unit_size(caps: Gst.Caps): [ /* returnType */ boolean, /* size */ number ]
    vfunc_prepare_output_buffer(input: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfunc_propose_allocation(decide_query: Gst.Query, query: Gst.Query): boolean
    vfunc_query(direction: Gst.PadDirection, query: Gst.Query): boolean
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_submit_input_buffer(is_discont: boolean, input: Gst.Buffer): Gst.FlowReturn
    vfunc_transform(inbuf: Gst.Buffer, outbuf: Gst.Buffer): Gst.FlowReturn
    vfunc_transform_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
    vfunc_transform_ip(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean
    vfunc_transform_size(direction: Gst.PadDirection, caps: Gst.Caps, size: number, othercaps: Gst.Caps): [ /* returnType */ boolean, /* othersize */ number ]
    /* Virtual methods of Gst-1.0.Gst.Element */
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
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioFilter) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: AudioFilter) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioFilter, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: AudioFilter, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioFilter, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: AudioFilter, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioFilter, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioFilter, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qos", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioFilter_ConstructProps)
    _init (config?: AudioFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static add_pad_templates(klass: AudioFilter | Function | GObject.Type, allowed_caps: Gst.Caps): void
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
    samples_per_seg: number
    empty_seg: number
    state: number
    segdone: number
    segbase: number
    waiting: number
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioRingBuffer */
    acquire(spec: AudioRingBufferSpec): boolean
    activate(active: boolean): boolean
    advance(advance: number): void
    clear(segment: number): void
    clear_all(): void
    close_device(): boolean
    commit(sample: number, data: Uint8Array[], out_samples: number, accum: number): [ /* returnType */ number, /* accum */ number ]
    convert(src_fmt: Gst.Format, src_val: number, dest_fmt: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    delay(): number
    device_is_open(): boolean
    is_acquired(): boolean
    is_active(): boolean
    is_flushing(): boolean
    may_start(allowed: boolean): void
    open_device(): boolean
    pause(): boolean
    prepare_read(): [ /* returnType */ boolean, /* segment */ number, /* readptr */ Uint8Array[] ]
    read(sample: number, data: Uint8Array[]): [ /* returnType */ number, /* timestamp */ Gst.ClockTime ]
    release(): boolean
    samples_done(): number
    set_callback(cb: AudioRingBufferCallback | null): void
    set_channel_positions(position: AudioChannelPosition[]): void
    set_flushing(flushing: boolean): void
    set_sample(sample: number): void
    set_timestamp(readseg: number, timestamp: Gst.ClockTime): void
    start(): boolean
    stop(): boolean
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
    /* Virtual methods of GstAudio-1.0.GstAudio.AudioRingBuffer */
    vfunc_acquire(spec: AudioRingBufferSpec): boolean
    vfunc_activate(active: boolean): boolean
    vfunc_clear_all(): void
    vfunc_close_device(): boolean
    vfunc_commit(sample: number, data: Uint8Array[], out_samples: number, accum: number): [ /* returnType */ number, /* accum */ number ]
    vfunc_delay(): number
    vfunc_open_device(): boolean
    vfunc_pause(): boolean
    vfunc_release(): boolean
    vfunc_resume(): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioRingBuffer, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioRingBuffer, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioRingBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioRingBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: AudioRingBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioRingBuffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioRingBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioRingBuffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioRingBuffer_ConstructProps)
    _init (config?: AudioRingBuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static debug_spec_buff(spec: AudioRingBufferSpec): void
    static debug_spec_caps(spec: AudioRingBufferSpec): void
    static parse_caps(spec: AudioRingBufferSpec, caps: Gst.Caps): boolean
    static $gtype: GObject.Type
}
export interface AudioSink_ConstructProps extends AudioBaseSink_ConstructProps {
}
export class AudioSink {
    /* Properties of GstAudio-1.0.GstAudio.AudioBaseSink */
    alignment_threshold: number
    buffer_time: number
    can_activate_pull: boolean
    discont_wait: number
    drift_tolerance: number
    latency_time: number
    provide_clock: boolean
    slave_method: AudioBaseSinkSlaveMethod
    /* Properties of GstBase-1.0.GstBase.BaseSink */
    async: boolean
    blocksize: number
    enable_last_sample: boolean
    readonly last_sample: Gst.Sample
    max_bitrate: number
    max_lateness: number
    processing_deadline: number
    qos: boolean
    render_delay: number
    readonly stats: Gst.Structure
    sync: boolean
    throttle_time: number
    ts_offset: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioSink */
    element: AudioBaseSink
    /* Fields of GstAudio-1.0.GstAudio.AudioBaseSink */
    ringbuffer: AudioRingBuffer
    next_sample: number
    provided_clock: Gst.Clock
    eos_rendering: boolean
    /* Fields of GstBase-1.0.GstBase.BaseSink */
    sinkpad: Gst.Pad
    pad_mode: Gst.PadMode
    offset: number
    can_activate_push: boolean
    preroll_lock: GLib.Mutex
    preroll_cond: GLib.Cond
    eos: boolean
    need_preroll: boolean
    have_preroll: boolean
    playing_async: boolean
    have_newsegment: boolean
    segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Element */
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
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioBaseSink */
    create_ringbuffer(): AudioRingBuffer
    get_alignment_threshold(): Gst.ClockTime
    get_discont_wait(): Gst.ClockTime
    get_drift_tolerance(): number
    get_provide_clock(): boolean
    get_slave_method(): AudioBaseSinkSlaveMethod
    report_device_failure(): void
    set_alignment_threshold(alignment_threshold: Gst.ClockTime): void
    set_custom_slaving_callback(callback: AudioBaseSinkCustomSlavingCallback): void
    set_discont_wait(discont_wait: Gst.ClockTime): void
    set_drift_tolerance(drift_tolerance: number): void
    set_provide_clock(provide: boolean): void
    set_slave_method(method: AudioBaseSinkSlaveMethod): void
    /* Methods of GstBase-1.0.GstBase.BaseSink */
    do_preroll(obj: Gst.MiniObject): Gst.FlowReturn
    get_blocksize(): number
    get_drop_out_of_segment(): boolean
    get_last_sample(): Gst.Sample | null
    get_latency(): Gst.ClockTime
    get_max_bitrate(): number
    get_max_lateness(): number
    get_processing_deadline(): Gst.ClockTime
    get_render_delay(): Gst.ClockTime
    get_stats(): Gst.Structure
    get_sync(): boolean
    get_throttle_time(): number
    get_ts_offset(): Gst.ClockTimeDiff
    is_async_enabled(): boolean
    is_last_sample_enabled(): boolean
    is_qos_enabled(): boolean
    query_latency(): [ /* returnType */ boolean, /* live */ boolean | null, /* upstream_live */ boolean | null, /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    set_async_enabled(enabled: boolean): void
    set_blocksize(blocksize: number): void
    set_drop_out_of_segment(drop_out_of_segment: boolean): void
    set_last_sample_enabled(enabled: boolean): void
    set_max_bitrate(max_bitrate: number): void
    set_max_lateness(max_lateness: number): void
    set_processing_deadline(processing_deadline: Gst.ClockTime): void
    set_qos_enabled(enabled: boolean): void
    set_render_delay(delay: Gst.ClockTime): void
    set_sync(sync: boolean): void
    set_throttle_time(throttle: number): void
    set_ts_offset(offset: Gst.ClockTimeDiff): void
    wait(time: Gst.ClockTime): [ /* returnType */ Gst.FlowReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    wait_clock(time: Gst.ClockTime): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    wait_preroll(): Gst.FlowReturn
    /* Methods of Gst-1.0.Gst.Element */
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
    /* Virtual methods of GstAudio-1.0.GstAudio.AudioSink */
    vfunc_close(): boolean
    vfunc_delay(): number
    vfunc_open(): boolean
    vfunc_pause(): void
    vfunc_prepare(spec: AudioRingBufferSpec): boolean
    vfunc_prepare(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_reset(): void
    vfunc_resume(): void
    vfunc_stop(): void
    vfunc_stop(): boolean
    vfunc_unprepare(): boolean
    vfunc_write(data: object | null, length: number): number
    /* Virtual methods of GstAudio-1.0.GstAudio.AudioBaseSink */
    vfunc_create_ringbuffer(): AudioRingBuffer
    vfunc_payload(buffer: Gst.Buffer): Gst.Buffer
    /* Virtual methods of GstBase-1.0.GstBase.BaseSink */
    vfunc_activate_pull(active: boolean): boolean
    vfunc_event(event: Gst.Event): boolean
    vfunc_fixate(caps: Gst.Caps): Gst.Caps
    vfunc_get_caps(filter: Gst.Caps): Gst.Caps
    vfunc_get_times(buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime): void
    vfunc_prepare(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_prepare_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_preroll(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_query(query: Gst.Query): boolean
    vfunc_render(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_render_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_unlock_stop(): boolean
    vfunc_wait_event(event: Gst.Event): Gst.FlowReturn
    /* Virtual methods of Gst-1.0.Gst.Element */
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
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioSink) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: AudioSink) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioSink, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: AudioSink, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioSink, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: AudioSink, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alignment-threshold", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-threshold", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-time", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-time", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-activate-pull", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-activate-pull", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::discont-wait", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discont-wait", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::drift-tolerance", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drift-tolerance", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency-time", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency-time", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provide-clock", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provide-clock", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::slave-method", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-method", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-last-sample", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-sample", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-bitrate", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-lateness", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::processing-deadline", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::render-delay", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::throttle-time", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ts-offset", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioSink_ConstructProps)
    _init (config?: AudioSink_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AudioSrc_ConstructProps extends AudioBaseSrc_ConstructProps {
}
export class AudioSrc {
    /* Properties of GstAudio-1.0.GstAudio.AudioBaseSrc */
    readonly actual_buffer_time: number
    readonly actual_latency_time: number
    buffer_time: number
    latency_time: number
    provide_clock: boolean
    slave_method: AudioBaseSrcSlaveMethod
    /* Properties of GstBase-1.0.GstBase.BaseSrc */
    blocksize: number
    do_timestamp: boolean
    num_buffers: number
    typefind: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstAudio-1.0.GstAudio.AudioSrc */
    element: AudioBaseSrc
    /* Fields of GstAudio-1.0.GstAudio.AudioBaseSrc */
    ringbuffer: AudioRingBuffer
    next_sample: number
    clock: Gst.Clock
    /* Fields of GstBase-1.0.GstBase.BaseSrc */
    srcpad: Gst.Pad
    live_lock: GLib.Mutex
    live_cond: GLib.Cond
    is_live: boolean
    live_running: boolean
    can_activate_push: boolean
    random_access: boolean
    clock_id: Gst.ClockID
    segment: Gst.Segment
    need_newsegment: boolean
    num_buffers_left: number
    running: boolean
    pending_seek: Gst.Event
    priv: GstBase.BaseSrcPrivate
    /* Fields of Gst-1.0.Gst.Element */
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
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstAudio-1.0.GstAudio.AudioBaseSrc */
    create_ringbuffer(): AudioRingBuffer
    get_provide_clock(): boolean
    get_slave_method(): AudioBaseSrcSlaveMethod
    set_provide_clock(provide: boolean): void
    set_slave_method(method: AudioBaseSrcSlaveMethod): void
    /* Methods of GstBase-1.0.GstBase.BaseSrc */
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_blocksize(): number
    get_buffer_pool(): Gst.BufferPool | null
    get_do_timestamp(): boolean
    is_async(): boolean
    negotiate(): boolean
    new_seamless_segment(start: number, stop: number, time: number): boolean
    new_segment(segment: Gst.Segment): boolean
    query_latency(): [ /* returnType */ boolean, /* live */ boolean | null, /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    set_async(async: boolean): void
    set_automatic_eos(automatic_eos: boolean): void
    set_blocksize(blocksize: number): void
    set_caps(caps: Gst.Caps): boolean
    set_do_timestamp(timestamp: boolean): void
    set_dynamic_size(dynamic: boolean): void
    set_format(format: Gst.Format): void
    set_live(live: boolean): void
    start_complete(ret: Gst.FlowReturn): void
    start_wait(): Gst.FlowReturn
    submit_buffer_list(buffer_list: Gst.BufferList): void
    wait_playing(): Gst.FlowReturn
    /* Methods of Gst-1.0.Gst.Element */
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
    /* Virtual methods of GstAudio-1.0.GstAudio.AudioSrc */
    vfunc_close(): boolean
    vfunc_delay(): number
    vfunc_open(): boolean
    vfunc_prepare(spec: AudioRingBufferSpec): boolean
    vfunc_read(data: object | null, length: number, timestamp: Gst.ClockTime): number
    vfunc_reset(): void
    vfunc_unprepare(): boolean
    vfunc_alloc(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_alloc(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    /* Virtual methods of GstAudio-1.0.GstAudio.AudioBaseSrc */
    vfunc_create_ringbuffer(): AudioRingBuffer
    vfunc_alloc(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_alloc(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    /* Virtual methods of GstBase-1.0.GstBase.PushSrc */
    vfunc_alloc(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_alloc(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    /* Virtual methods of GstBase-1.0.GstBase.BaseSrc */
    vfunc_alloc(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_create(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_do_seek(segment: Gst.Segment): boolean
    vfunc_event(event: Gst.Event): boolean
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fixate(caps: Gst.Caps): Gst.Caps
    vfunc_get_caps(filter?: Gst.Caps | null): Gst.Caps
    vfunc_get_size(size: number): boolean
    vfunc_get_times(buffer: Gst.Buffer): [ /* start */ Gst.ClockTime, /* end */ Gst.ClockTime ]
    vfunc_is_seekable(): boolean
    vfunc_negotiate(): boolean
    vfunc_prepare_seek_segment(seek: Gst.Event, segment: Gst.Segment): boolean
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_unlock_stop(): boolean
    /* Virtual methods of Gst-1.0.Gst.Element */
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
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioSrc) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: AudioSrc) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioSrc, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: AudioSrc, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioSrc, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: AudioSrc, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actual-buffer-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actual-buffer-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::actual-latency-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actual-latency-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency-time", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provide-clock", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provide-clock", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::slave-method", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-method", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::do-timestamp", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-buffers", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::typefind", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AudioSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioSrc_ConstructProps)
    _init (config?: AudioSrc_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AudioAggregatorClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioAggregatorClass */
    parent_class: GstBase.AggregatorClass
    create_output_buffer: (aagg: AudioAggregator, num_frames: number) => Gst.Buffer
    aggregate_one_buffer: (aagg: AudioAggregator, pad: AudioAggregatorPad, inbuf: Gst.Buffer, in_offset: number, outbuf: Gst.Buffer, out_offset: number, num_frames: number) => boolean
    static name: string
}
export abstract class AudioAggregatorConvertPadClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioAggregatorConvertPadClass */
    parent_class: AudioAggregatorPadClass
    static name: string
}
export class AudioAggregatorConvertPadPrivate {
    static name: string
}
export abstract class AudioAggregatorPadClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioAggregatorPadClass */
    parent_class: GstBase.AggregatorPadClass
    convert_buffer: (pad: AudioAggregatorPad, in_info: AudioInfo, out_info: AudioInfo, buffer: Gst.Buffer) => Gst.Buffer
    update_conversion_info: (pad: AudioAggregatorPad) => void
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
    parent_class: GstBase.BaseSinkClass
    create_ringbuffer: (sink: AudioBaseSink) => AudioRingBuffer
    payload: (sink: AudioBaseSink, buffer: Gst.Buffer) => Gst.Buffer
    static name: string
}
export class AudioBaseSinkPrivate {
    static name: string
}
export abstract class AudioBaseSrcClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioBaseSrcClass */
    parent_class: GstBase.PushSrcClass
    create_ringbuffer: (src: AudioBaseSrc) => AudioRingBuffer
    static name: string
}
export class AudioBaseSrcPrivate {
    static name: string
}
export class AudioBuffer {
    /* Fields of GstAudio-1.0.GstAudio.AudioBuffer */
    info: AudioInfo
    n_samples: number
    n_planes: number
    planes: object
    buffer: Gst.Buffer
    /* Methods of GstAudio-1.0.GstAudio.AudioBuffer */
    unmap(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static clip(buffer: Gst.Buffer, segment: Gst.Segment, rate: number, bpf: number): Gst.Buffer
    static map(info: AudioInfo, gstbuffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* buffer */ AudioBuffer ]
    static reorder_channels(buffer: Gst.Buffer, format: AudioFormat, from: AudioChannelPosition[], to: AudioChannelPosition[]): boolean
    static truncate(buffer: Gst.Buffer, bpf: number, trim: number, samples: number): Gst.Buffer
}
export abstract class AudioCdSrcClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioCdSrcClass */
    pushsrc_class: GstBase.PushSrcClass
    open: (src: AudioCdSrc, device: string) => boolean
    close: (src: AudioCdSrc) => void
    read_sector: (src: AudioCdSrc, sector: number) => Gst.Buffer
    static name: string
}
export class AudioCdSrcPrivate {
    static name: string
}
export class AudioCdSrcTrack {
    /* Fields of GstAudio-1.0.GstAudio.AudioCdSrcTrack */
    is_audio: boolean
    num: number
    start: number
    end: number
    tags: Gst.TagList
    static name: string
}
export class AudioChannelMixer {
    /* Methods of GstAudio-1.0.GstAudio.AudioChannelMixer */
    free(): void
    is_passthrough(): boolean
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
    static get_info(): Gst.MetaInfo
}
export abstract class AudioClockClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioClockClass */
    parent_class: Gst.SystemClockClass
    static name: string
}
export class AudioConverter {
    /* Methods of GstAudio-1.0.GstAudio.AudioConverter */
    convert(flags: AudioConverterFlags, in_: Uint8Array[]): [ /* returnType */ boolean, /* out */ Uint8Array[] ]
    free(): void
    get_config(): [ /* returnType */ Gst.Structure, /* in_rate */ number | null, /* out_rate */ number | null ]
    get_in_frames(out_frames: number): number
    get_max_latency(): number
    get_out_frames(in_frames: number): number
    is_passthrough(): boolean
    reset(): void
    samples(flags: AudioConverterFlags, in_: object | null, in_frames: number, out: object | null, out_frames: number): boolean
    supports_inplace(): boolean
    update_config(in_rate: number, out_rate: number, config?: Gst.Structure | null): boolean
    static name: string
    static new(flags: AudioConverterFlags, in_info: AudioInfo, out_info: AudioInfo, config?: Gst.Structure | null): AudioConverter
    constructor(flags: AudioConverterFlags, in_info: AudioInfo, out_info: AudioInfo, config?: Gst.Structure | null)
    /* Static methods and pseudo-constructors */
    static new(flags: AudioConverterFlags, in_info: AudioInfo, out_info: AudioInfo, config?: Gst.Structure | null): AudioConverter
}
export abstract class AudioDecoderClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioDecoderClass */
    element_class: Gst.ElementClass
    start: (dec: AudioDecoder) => boolean
    stop: (dec: AudioDecoder) => boolean
    set_format: (dec: AudioDecoder, caps: Gst.Caps) => boolean
    parse: (dec: AudioDecoder, adapter: GstBase.Adapter, offset: number, length: number) => Gst.FlowReturn
    handle_frame: (dec: AudioDecoder, buffer: Gst.Buffer) => Gst.FlowReturn
    flush: (dec: AudioDecoder, hard: boolean) => void
    pre_push: (dec: AudioDecoder, buffer: Gst.Buffer) => Gst.FlowReturn
    sink_event: (dec: AudioDecoder, event: Gst.Event) => boolean
    src_event: (dec: AudioDecoder, event: Gst.Event) => boolean
    open: (dec: AudioDecoder) => boolean
    close: (dec: AudioDecoder) => boolean
    negotiate: (dec: AudioDecoder) => boolean
    decide_allocation: (dec: AudioDecoder, query: Gst.Query) => boolean
    propose_allocation: (dec: AudioDecoder, query: Gst.Query) => boolean
    sink_query: (dec: AudioDecoder, query: Gst.Query) => boolean
    src_query: (dec: AudioDecoder, query: Gst.Query) => boolean
    getcaps: (dec: AudioDecoder, filter: Gst.Caps) => Gst.Caps
    transform_meta: (enc: AudioDecoder, outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer) => boolean
    static name: string
}
export class AudioDecoderPrivate {
    static name: string
}
export class AudioDownmixMeta {
    /* Fields of GstAudio-1.0.GstAudio.AudioDownmixMeta */
    meta: Gst.Meta
    from_position: AudioChannelPosition
    to_position: AudioChannelPosition
    from_channels: number
    to_channels: number
    matrix: number
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
export abstract class AudioEncoderClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioEncoderClass */
    element_class: Gst.ElementClass
    start: (enc: AudioEncoder) => boolean
    stop: (enc: AudioEncoder) => boolean
    set_format: (enc: AudioEncoder, info: AudioInfo) => boolean
    handle_frame: (enc: AudioEncoder, buffer: Gst.Buffer) => Gst.FlowReturn
    flush: (enc: AudioEncoder) => void
    pre_push: (enc: AudioEncoder, buffer: Gst.Buffer) => Gst.FlowReturn
    sink_event: (enc: AudioEncoder, event: Gst.Event) => boolean
    src_event: (enc: AudioEncoder, event: Gst.Event) => boolean
    getcaps: (enc: AudioEncoder, filter: Gst.Caps) => Gst.Caps
    open: (enc: AudioEncoder) => boolean
    close: (enc: AudioEncoder) => boolean
    negotiate: (enc: AudioEncoder) => boolean
    decide_allocation: (enc: AudioEncoder, query: Gst.Query) => boolean
    propose_allocation: (enc: AudioEncoder, query: Gst.Query) => boolean
    transform_meta: (enc: AudioEncoder, outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer) => boolean
    sink_query: (encoder: AudioEncoder, query: Gst.Query) => boolean
    src_query: (encoder: AudioEncoder, query: Gst.Query) => boolean
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
    add_pad_templates(klass: AudioFilter | Function | GObject.Type, allowed_caps: Gst.Caps): void
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
    silence: Uint8Array[]
    unpack_format: AudioFormat
    unpack_func: AudioFormatUnpack
    pack_func: AudioFormatPack
    /* Methods of GstAudio-1.0.GstAudio.AudioFormatInfo */
    fill_silence(dest: Uint8Array[]): void
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
    convert(src_fmt: Gst.Format, src_val: number, dest_fmt: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    copy(): AudioInfo
    free(): void
    is_equal(other: AudioInfo): boolean
    set_format(format: AudioFormat, rate: number, channels: number, position?: AudioChannelPosition[] | null): void
    to_caps(): Gst.Caps
    static name: string
    static new(): AudioInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AudioInfo
    static from_caps(caps: Gst.Caps): [ /* returnType */ boolean, /* info */ AudioInfo ]
    static init(): /* info */ AudioInfo
}
export class AudioLevelMeta {
    /* Fields of GstAudio-1.0.GstAudio.AudioLevelMeta */
    meta: Gst.Meta
    level: number
    voice_activity: boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
export class AudioMeta {
    /* Fields of GstAudio-1.0.GstAudio.AudioMeta */
    meta: Gst.Meta
    info: AudioInfo
    samples: number
    offsets: number
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
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
    get_in_frames(out_frames: number): number
    get_max_latency(): number
    get_out_frames(in_frames: number): number
    resample(in_: object | null, in_frames: number, out: object | null, out_frames: number): void
    reset(): void
    update(in_rate: number, out_rate: number, options: Gst.Structure): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static options_set_quality(method: AudioResamplerMethod, quality: number, in_rate: number, out_rate: number, options: Gst.Structure): void
}
export abstract class AudioRingBufferClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioRingBufferClass */
    parent_class: Gst.ObjectClass
    open_device: (buf: AudioRingBuffer) => boolean
    acquire: (buf: AudioRingBuffer, spec: AudioRingBufferSpec) => boolean
    release: (buf: AudioRingBuffer) => boolean
    close_device: (buf: AudioRingBuffer) => boolean
    start: (buf: AudioRingBuffer) => boolean
    pause: (buf: AudioRingBuffer) => boolean
    resume: (buf: AudioRingBuffer) => boolean
    stop: (buf: AudioRingBuffer) => boolean
    delay: (buf: AudioRingBuffer) => number
    activate: (buf: AudioRingBuffer, active: boolean) => boolean
    commit: (buf: AudioRingBuffer, sample: number, data: Uint8Array[], out_samples: number, accum: number) => [ /* returnType */ number, /* accum */ number ]
    clear_all: (buf: AudioRingBuffer) => void
    static name: string
}
export class AudioRingBufferSpec {
    /* Fields of GstAudio-1.0.GstAudio.AudioRingBufferSpec */
    caps: Gst.Caps
    type: AudioRingBufferFormatType
    info: AudioInfo
    latency_time: number
    buffer_time: number
    segsize: number
    segtotal: number
    seglatency: number
    static name: string
}
export abstract class AudioSinkClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioSinkClass */
    parent_class: AudioBaseSinkClass
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
    clear_all: (sink: AudioSink) => void
    static name: string
}
export abstract class AudioSrcClass {
    /* Fields of GstAudio-1.0.GstAudio.AudioSrcClass */
    parent_class: AudioBaseSrcClass
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
    get_alignment_threshold(): Gst.ClockTime
    get_discont_wait(): Gst.ClockTime
    get_rate(): number
    get_samples_since_discont(): number
    get_timestamp_at_discont(): Gst.ClockTime
    mark_discont(): void
    process(discont: boolean, timestamp: Gst.ClockTime, n_samples: number): [ /* returnType */ boolean, /* out_timestamp */ Gst.ClockTime, /* out_duration */ Gst.ClockTime, /* out_sample_position */ number ]
    set_alignment_threshold(alignment_threshold: Gst.ClockTime): void
    set_discont_wait(discont_wait: Gst.ClockTime): void
    set_rate(rate: number): void
    static name: string
    static new(rate: number, alignment_threshold: Gst.ClockTime, discont_wait: Gst.ClockTime): AudioStreamAlign
    constructor(rate: number, alignment_threshold: Gst.ClockTime, discont_wait: Gst.ClockTime)
    /* Static methods and pseudo-constructors */
    static new(rate: number, alignment_threshold: Gst.ClockTime, discont_wait: Gst.ClockTime): AudioStreamAlign
}
export abstract class StreamVolumeInterface {
    /* Fields of GstAudio-1.0.GstAudio.StreamVolumeInterface */
    iface: GObject.TypeInterface
    static name: string
}