/**
 * GstPlay-1.0
 */

import type * as Gjs from './Gjs';
import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstTag from './GstTag-1.0';
import type GstPbutils from './GstPbutils-1.0';
import type GstAudio from './GstAudio-1.0';

export namespace GstPlay {

enum PlayColorBalanceType {
    HUE,
    BRIGHTNESS,
    SATURATION,
    CONTRAST,
}
enum PlayError {
    FAILED,
}
enum PlayMessage {
    URI_LOADED,
    POSITION_UPDATED,
    DURATION_CHANGED,
    STATE_CHANGED,
    BUFFERING,
    END_OF_STREAM,
    ERROR,
    WARNING,
    VIDEO_DIMENSIONS_CHANGED,
    MEDIA_INFO_UPDATED,
    VOLUME_CHANGED,
    MUTE_CHANGED,
    SEEK_DONE,
}
enum PlaySnapshotFormat {
    RAW_NATIVE,
    RAW_XRGB,
    RAW_BGRX,
    JPG,
    PNG,
}
enum PlayState {
    STOPPED,
    BUFFERING,
    PAUSED,
    PLAYING,
}
function play_color_balance_type_get_name(type: PlayColorBalanceType): string
function play_error_get_name(error: PlayError): string
function play_error_quark(): GLib.Quark
function play_message_get_name(message_type: PlayMessage): string
function play_message_parse_buffering_percent(msg: Gst.Message): /* percent */ number | null
function play_message_parse_duration_updated(msg: Gst.Message): /* duration */ Gst.ClockTime | null
function play_message_parse_error(msg: Gst.Message): [ /* error */ GLib.Error | null, /* details */ Gst.Structure | null ]
function play_message_parse_media_info_updated(msg: Gst.Message): /* info */ PlayMediaInfo | null
function play_message_parse_muted_changed(msg: Gst.Message): /* muted */ boolean | null
function play_message_parse_position_updated(msg: Gst.Message): /* position */ Gst.ClockTime | null
function play_message_parse_state_changed(msg: Gst.Message): /* state */ PlayState | null
function play_message_parse_type(msg: Gst.Message): /* type */ PlayMessage | null
function play_message_parse_video_dimensions_changed(msg: Gst.Message): [ /* width */ number | null, /* height */ number | null ]
function play_message_parse_volume_changed(msg: Gst.Message): /* volume */ number | null
function play_message_parse_warning(msg: Gst.Message): [ /* error */ GLib.Error | null, /* details */ Gst.Structure | null ]
function play_state_get_name(state: PlayState): string
class PlayVideoRenderer {
    static name: string
}
export interface Play_ConstructProps extends Gst.Object_ConstructProps {
    audio_video_offset?: number
    mute?: boolean
    rate?: number
    subtitle_video_offset?: number
    suburi?: string
    uri?: string
    video_multiview_flags?: GstVideo.VideoMultiviewFlags
    video_multiview_mode?: GstVideo.VideoMultiviewFramePacking
    video_renderer?: PlayVideoRenderer
    volume?: number
}
class Play {
    /* Properties of GstPlay-1.0.GstPlay.Play */
    audio_video_offset: number
    readonly current_audio_track: PlayAudioInfo
    readonly current_subtitle_track: PlaySubtitleInfo
    readonly current_video_track: PlayVideoInfo
    readonly duration: number
    readonly media_info: PlayMediaInfo
    mute: boolean
    readonly pipeline: Gst.Element
    readonly position: number
    rate: number
    subtitle_video_offset: number
    suburi: string
    uri: string
    video_multiview_flags: GstVideo.VideoMultiviewFlags
    video_multiview_mode: GstVideo.VideoMultiviewFramePacking
    video_renderer: PlayVideoRenderer
    volume: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstPlay-1.0.GstPlay.Play */
    get_audio_video_offset(): number
    get_color_balance(type: PlayColorBalanceType): number
    get_config(): Gst.Structure
    get_current_audio_track(): PlayAudioInfo | null
    get_current_subtitle_track(): PlaySubtitleInfo | null
    get_current_video_track(): PlayVideoInfo | null
    get_current_visualization(): string | null
    get_duration(): Gst.ClockTime
    get_media_info(): PlayMediaInfo | null
    get_message_bus(): Gst.Bus
    get_multiview_flags(): GstVideo.VideoMultiviewFlags
    get_multiview_mode(): GstVideo.VideoMultiviewFramePacking
    get_mute(): boolean
    get_pipeline(): Gst.Element
    get_position(): Gst.ClockTime
    get_rate(): number
    get_subtitle_uri(): string | null
    get_subtitle_video_offset(): number
    get_uri(): string | null
    get_video_snapshot(format: PlaySnapshotFormat, config?: Gst.Structure | null): Gst.Sample | null
    get_volume(): number
    has_color_balance(): boolean
    pause(): void
    play(): void
    seek(position: Gst.ClockTime): void
    set_audio_track(stream_index: number): boolean
    set_audio_track_enabled(enabled: boolean): void
    set_audio_video_offset(offset: number): void
    set_color_balance(type: PlayColorBalanceType, value: number): void
    set_config(config: Gst.Structure): boolean
    set_multiview_flags(flags: GstVideo.VideoMultiviewFlags): void
    set_multiview_mode(mode: GstVideo.VideoMultiviewFramePacking): void
    set_mute(val: boolean): void
    set_rate(rate: number): void
    set_subtitle_track(stream_index: number): boolean
    set_subtitle_track_enabled(enabled: boolean): void
    set_subtitle_uri(uri?: string | null): void
    set_subtitle_video_offset(offset: number): void
    set_uri(uri?: string | null): void
    set_video_track(stream_index: number): boolean
    set_video_track_enabled(enabled: boolean): void
    set_visualization(name?: string | null): boolean
    set_visualization_enabled(enabled: boolean): void
    set_volume(val: number): void
    stop(): void
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
    connect(sigName: "deep-notify", callback: (($obj: Play, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Play, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::audio-video-offset", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-video-offset", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-audio-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-audio-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-subtitle-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-subtitle-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-video-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-video-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-info", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-info", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mute", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pipeline", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pipeline", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rate", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-video-offset", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-video-offset", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suburi", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suburi", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::video-multiview-flags", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-multiview-flags", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::video-multiview-mode", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-multiview-mode", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::video-renderer", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-renderer", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::volume", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Play_ConstructProps)
    _init (config?: Play_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(video_renderer?: PlayVideoRenderer | null): Play
    static config_get_position_update_interval(config: Gst.Structure): number
    static config_get_seek_accurate(config: Gst.Structure): boolean
    static config_get_user_agent(config: Gst.Structure): string | null
    static config_set_position_update_interval(config: Gst.Structure, interval: number): void
    static config_set_seek_accurate(config: Gst.Structure, accurate: boolean): void
    static config_set_user_agent(config: Gst.Structure, agent?: string | null): void
    static get_audio_streams(info: PlayMediaInfo): PlayAudioInfo[]
    static get_subtitle_streams(info: PlayMediaInfo): PlaySubtitleInfo[]
    static get_video_streams(info: PlayMediaInfo): PlayVideoInfo[]
    static is_play_message(msg: Gst.Message): boolean
    static visualizations_free(viss: PlayVisualization): void
    static visualizations_get(): PlayVisualization[]
    static $gtype: GObject.Type
}
export interface PlayAudioInfo_ConstructProps extends PlayStreamInfo_ConstructProps {
}
class PlayAudioInfo {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstPlay-1.0.GstPlay.PlayAudioInfo */
    get_bitrate(): number
    get_channels(): number
    get_language(): string | null
    get_max_bitrate(): number
    get_sample_rate(): number
    /* Methods of GstPlay-1.0.GstPlay.PlayStreamInfo */
    get_caps(): Gst.Caps | null
    get_codec(): string | null
    get_index(): number
    get_stream_type(): string
    get_tags(): Gst.TagList | null
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlayAudioInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlayAudioInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlayAudioInfo_ConstructProps)
    _init (config?: PlayAudioInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayMediaInfo_ConstructProps extends GObject.Object_ConstructProps {
}
class PlayMediaInfo {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstPlay-1.0.GstPlay.PlayMediaInfo */
    get_audio_streams(): PlayAudioInfo[]
    get_container_format(): string | null
    get_duration(): Gst.ClockTime
    get_image_sample(): Gst.Sample | null
    get_number_of_audio_streams(): number
    get_number_of_streams(): number
    get_number_of_subtitle_streams(): number
    get_number_of_video_streams(): number
    get_stream_list(): PlayStreamInfo[]
    get_subtitle_streams(): PlaySubtitleInfo[]
    get_tags(): Gst.TagList | null
    get_title(): string | null
    get_uri(): string
    get_video_streams(): PlayVideoInfo[]
    is_live(): boolean
    is_seekable(): boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlayMediaInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlayMediaInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlayMediaInfo_ConstructProps)
    _init (config?: PlayMediaInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlaySignalAdapter_ConstructProps extends GObject.Object_ConstructProps {
}
class PlaySignalAdapter {
    /* Properties of GstPlay-1.0.GstPlay.PlaySignalAdapter */
    readonly play: Play
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstPlay-1.0.GstPlay.PlaySignalAdapter */
    get_play(): Play
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
    /* Signals of GstPlay-1.0.GstPlay.PlaySignalAdapter */
    connect(sigName: "buffering", callback: (($obj: PlaySignalAdapter, object: number) => void)): number
    connect_after(sigName: "buffering", callback: (($obj: PlaySignalAdapter, object: number) => void)): number
    emit(sigName: "buffering", object: number): void
    connect(sigName: "duration-changed", callback: (($obj: PlaySignalAdapter, object: number) => void)): number
    connect_after(sigName: "duration-changed", callback: (($obj: PlaySignalAdapter, object: number) => void)): number
    emit(sigName: "duration-changed", object: number): void
    connect(sigName: "end-of-stream", callback: (($obj: PlaySignalAdapter) => void)): number
    connect_after(sigName: "end-of-stream", callback: (($obj: PlaySignalAdapter) => void)): number
    emit(sigName: "end-of-stream"): void
    connect(sigName: "error", callback: (($obj: PlaySignalAdapter, object: GLib.Error, p0: Gst.Structure) => void)): number
    connect_after(sigName: "error", callback: (($obj: PlaySignalAdapter, object: GLib.Error, p0: Gst.Structure) => void)): number
    emit(sigName: "error", object: GLib.Error, p0: Gst.Structure): void
    connect(sigName: "media-info-updated", callback: (($obj: PlaySignalAdapter, object: PlayMediaInfo) => void)): number
    connect_after(sigName: "media-info-updated", callback: (($obj: PlaySignalAdapter, object: PlayMediaInfo) => void)): number
    emit(sigName: "media-info-updated", object: PlayMediaInfo): void
    connect(sigName: "mute-changed", callback: (($obj: PlaySignalAdapter, object: boolean) => void)): number
    connect_after(sigName: "mute-changed", callback: (($obj: PlaySignalAdapter, object: boolean) => void)): number
    emit(sigName: "mute-changed", object: boolean): void
    connect(sigName: "position-updated", callback: (($obj: PlaySignalAdapter, object: number) => void)): number
    connect_after(sigName: "position-updated", callback: (($obj: PlaySignalAdapter, object: number) => void)): number
    emit(sigName: "position-updated", object: number): void
    connect(sigName: "seek-done", callback: (($obj: PlaySignalAdapter, object: number) => void)): number
    connect_after(sigName: "seek-done", callback: (($obj: PlaySignalAdapter, object: number) => void)): number
    emit(sigName: "seek-done", object: number): void
    connect(sigName: "state-changed", callback: (($obj: PlaySignalAdapter, object: PlayState) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: PlaySignalAdapter, object: PlayState) => void)): number
    emit(sigName: "state-changed", object: PlayState): void
    connect(sigName: "uri-loaded", callback: (($obj: PlaySignalAdapter, object: string) => void)): number
    connect_after(sigName: "uri-loaded", callback: (($obj: PlaySignalAdapter, object: string) => void)): number
    emit(sigName: "uri-loaded", object: string): void
    connect(sigName: "video-dimensions-changed", callback: (($obj: PlaySignalAdapter, object: number, p0: number) => void)): number
    connect_after(sigName: "video-dimensions-changed", callback: (($obj: PlaySignalAdapter, object: number, p0: number) => void)): number
    emit(sigName: "video-dimensions-changed", object: number, p0: number): void
    connect(sigName: "volume-changed", callback: (($obj: PlaySignalAdapter, object: number) => void)): number
    connect_after(sigName: "volume-changed", callback: (($obj: PlaySignalAdapter, object: number) => void)): number
    emit(sigName: "volume-changed", object: number): void
    connect(sigName: "warning", callback: (($obj: PlaySignalAdapter, object: GLib.Error, p0: Gst.Structure) => void)): number
    connect_after(sigName: "warning", callback: (($obj: PlaySignalAdapter, object: GLib.Error, p0: Gst.Structure) => void)): number
    emit(sigName: "warning", object: GLib.Error, p0: Gst.Structure): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlaySignalAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlaySignalAdapter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::play", callback: (($obj: PlaySignalAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::play", callback: (($obj: PlaySignalAdapter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlaySignalAdapter_ConstructProps)
    _init (config?: PlaySignalAdapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(play: Play): PlaySignalAdapter
    static new_sync_emit(play: Play): PlaySignalAdapter
    static new_with_main_context(play: Play, context: GLib.MainContext): PlaySignalAdapter
    static $gtype: GObject.Type
}
export interface PlayStreamInfo_ConstructProps extends GObject.Object_ConstructProps {
}
class PlayStreamInfo {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstPlay-1.0.GstPlay.PlayStreamInfo */
    get_caps(): Gst.Caps | null
    get_codec(): string | null
    get_index(): number
    get_stream_type(): string
    get_tags(): Gst.TagList | null
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlayStreamInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlayStreamInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlayStreamInfo_ConstructProps)
    _init (config?: PlayStreamInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlaySubtitleInfo_ConstructProps extends PlayStreamInfo_ConstructProps {
}
class PlaySubtitleInfo {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstPlay-1.0.GstPlay.PlaySubtitleInfo */
    get_language(): string | null
    /* Methods of GstPlay-1.0.GstPlay.PlayStreamInfo */
    get_caps(): Gst.Caps | null
    get_codec(): string | null
    get_index(): number
    get_stream_type(): string
    get_tags(): Gst.TagList | null
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlaySubtitleInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlaySubtitleInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlaySubtitleInfo_ConstructProps)
    _init (config?: PlaySubtitleInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayVideoInfo_ConstructProps extends PlayStreamInfo_ConstructProps {
}
class PlayVideoInfo {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstPlay-1.0.GstPlay.PlayVideoInfo */
    get_bitrate(): number
    get_framerate(): [ /* fps_n */ number, /* fps_d */ number ]
    get_height(): number
    get_max_bitrate(): number
    get_pixel_aspect_ratio(): [ /* par_n */ number, /* par_d */ number ]
    get_width(): number
    /* Methods of GstPlay-1.0.GstPlay.PlayStreamInfo */
    get_caps(): Gst.Caps | null
    get_codec(): string | null
    get_index(): number
    get_stream_type(): string
    get_tags(): Gst.TagList | null
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlayVideoInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlayVideoInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlayVideoInfo_ConstructProps)
    _init (config?: PlayVideoInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayVideoOverlayVideoRenderer_ConstructProps extends GObject.Object_ConstructProps {
    video_sink?: Gst.Element
    window_handle?: object
}
class PlayVideoOverlayVideoRenderer {
    /* Properties of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer */
    video_sink: Gst.Element
    window_handle: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer */
    expose(): void
    get_render_rectangle(): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    get_window_handle(): object | null
    set_render_rectangle(x: number, y: number, width: number, height: number): void
    set_window_handle(window_handle?: object | null): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlayVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlayVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::video-sink", callback: (($obj: PlayVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-sink", callback: (($obj: PlayVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-handle", callback: (($obj: PlayVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-handle", callback: (($obj: PlayVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlayVideoOverlayVideoRenderer_ConstructProps)
    _init (config?: PlayVideoOverlayVideoRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_with_sink(window_handle: object | null, video_sink: Gst.Element): PlayVideoRenderer
    static $gtype: GObject.Type
}
abstract class PlayAudioInfoClass {
    static name: string
}
abstract class PlayClass {
    static name: string
}
abstract class PlayMediaInfoClass {
    static name: string
}
abstract class PlaySignalAdapterClass {
    static name: string
}
abstract class PlayStreamInfoClass {
    static name: string
}
abstract class PlaySubtitleInfoClass {
    static name: string
}
abstract class PlayVideoInfoClass {
    static name: string
}
abstract class PlayVideoOverlayVideoRendererClass {
    static name: string
}
abstract class PlayVideoRendererInterface {
    /* Fields of GstPlay-1.0.GstPlay.PlayVideoRendererInterface */
    parent_iface: GObject.TypeInterface
    static name: string
}
class PlayVisualization {
    /* Fields of GstPlay-1.0.GstPlay.PlayVisualization */
    name: string
    description: string
    /* Methods of GstPlay-1.0.GstPlay.PlayVisualization */
    copy(): PlayVisualization
    free(): void
    static name: string
}
}
export default GstPlay