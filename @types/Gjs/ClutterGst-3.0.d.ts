/**
 * ClutterGst-3.0
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
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as Gio from './Gio-2.0';
import type * as Cogl from './Cogl-1.0';
import type * as GL from './GL-1.0';
import type * as Clutter from './Clutter-1.0';
import type * as cairo from './cairo-1.0';
import type * as Json from './Json-1.0';
import type * as CoglPango from './CoglPango-1.0';
import type * as PangoCairo from './PangoCairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as Atk from './Atk-1.0';

export enum BufferingMode {
    STREAM,
    DOWNLOAD,
}
export enum SeekFlags {
    NONE,
    ACCURATE,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const VERSION: number
export const VERSION_HEX: number
export const VERSION_S: string
export function create_video_sink(): Gst.Element
export function init(argv?: string[] | null): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
export function init_with_args(argv: string[] | null, parameter_string: string, entries: GLib.OptionEntry, translation_domain: string): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
export class Player {
    /* Properties of ClutterGst-3.0.ClutterGst.Player */
    audio_volume: number
    readonly idle: boolean
    playing: boolean
    /* Methods of ClutterGst-3.0.ClutterGst.Player */
    get_audio_volume(): number
    get_frame(): Frame
    get_idle(): boolean
    get_pipeline(): Gst.Element
    get_playing(): boolean
    get_video_sink(): VideoSink
    set_audio_volume(volume: number): void
    set_playing(playing: boolean): void
    /* Virtual methods of ClutterGst-3.0.ClutterGst.Player */
    vfunc_eos(): void
    vfunc_error(error: GLib.Error): void
    vfunc_get_audio_volume(): number
    vfunc_get_frame(): Frame
    vfunc_get_idle(): boolean
    vfunc_get_pipeline(): Gst.Element
    vfunc_get_playing(): boolean
    vfunc_get_video_sink(): VideoSink
    vfunc_new_frame(frame: Frame): void
    vfunc_ready(): void
    vfunc_set_audio_volume(volume: number): void
    vfunc_set_playing(playing: boolean): void
    vfunc_size_change(width: number, height: number): void
    /* Signals of ClutterGst-3.0.ClutterGst.Player */
    connect(sigName: "eos", callback: (($obj: Player) => void)): number
    connect_after(sigName: "eos", callback: (($obj: Player) => void)): number
    emit(sigName: "eos"): void
    connect(sigName: "error", callback: (($obj: Player, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: Player, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    connect(sigName: "new-frame", callback: (($obj: Player, frame: Frame) => void)): number
    connect_after(sigName: "new-frame", callback: (($obj: Player, frame: Frame) => void)): number
    emit(sigName: "new-frame", frame: Frame): void
    connect(sigName: "ready", callback: (($obj: Player) => void)): number
    connect_after(sigName: "ready", callback: (($obj: Player) => void)): number
    emit(sigName: "ready"): void
    connect(sigName: "size-change", callback: (($obj: Player, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: Player, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
    static name: string
}
export interface Aspectratio_ConstructProps extends Content_ConstructProps {
    fill_allocation?: boolean
    paint_borders?: boolean
}
export class Aspectratio {
    /* Properties of ClutterGst-3.0.ClutterGst.Aspectratio */
    fill_allocation: boolean
    paint_borders: boolean
    /* Properties of ClutterGst-3.0.ClutterGst.Content */
    frame: Frame
    paint_frame: boolean
    paint_overlays: boolean
    player: GObject.Object
    sink: VideoSink
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.Content */
    get_frame(): Frame
    get_overlays(): Overlays
    get_player(): Player
    get_sink(): VideoSink
    set_frame(frame: Frame): void
    set_player(player: Player): void
    set_sink(sink: VideoSink): void
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
    /* Methods of Clutter-1.0.Clutter.Content */
    get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    invalidate(): void
    /* Virtual methods of ClutterGst-3.0.ClutterGst.Content */
    vfunc_has_painting_content(): boolean
    vfunc_attached(actor: Clutter.Actor): void
    vfunc_detached(actor: Clutter.Actor): void
    vfunc_get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    vfunc_invalidate(): void
    vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ClutterGst-3.0.ClutterGst.Content */
    connect(sigName: "size-change", callback: (($obj: Aspectratio, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: Aspectratio, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Content */
    connect(sigName: "attached", callback: (($obj: Aspectratio, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "attached", callback: (($obj: Aspectratio, actor: Clutter.Actor) => void)): number
    emit(sigName: "attached", actor: Clutter.Actor): void
    connect(sigName: "detached", callback: (($obj: Aspectratio, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "detached", callback: (($obj: Aspectratio, actor: Clutter.Actor) => void)): number
    emit(sigName: "detached", actor: Clutter.Actor): void
    connect(sigName: "notify::fill-allocation", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fill-allocation", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paint-borders", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-borders", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::frame", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paint-frame", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-frame", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paint-overlays", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-overlays", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::player", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sink", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: Aspectratio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Aspectratio_ConstructProps)
    _init (config?: Aspectratio_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Camera_ConstructProps extends GObject.Object_ConstructProps {
    device?: CameraDevice
    audio_volume?: number
    playing?: boolean
}
export class Camera {
    /* Properties of ClutterGst-3.0.ClutterGst.Camera */
    device: CameraDevice
    /* Properties of ClutterGst-3.0.ClutterGst.Player */
    audio_volume: number
    readonly idle: boolean
    playing: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.Camera */
    get_brightness(cur_value: number): boolean
    get_brightness_range(min_value: number, max_value: number, default_value: number): boolean
    get_camera_device(): CameraDevice
    get_color_balance_property(property: string, cur_value: number): boolean
    get_color_balance_property_range(property: string, min_value: number, max_value: number, default_value: number): boolean
    get_contrast(cur_value: number): boolean
    get_contrast_range(min_value: number, max_value: number, default_value: number): boolean
    get_filter(): Gst.Element
    get_gamma(cur_value: number): boolean
    get_gamma_range(min_value: number, max_value: number, default_value: number): boolean
    get_hue(cur_value: number): boolean
    get_hue_range(min_value: number, max_value: number, default_value: number): boolean
    get_saturation(cur_value: number): boolean
    get_saturation_range(min_value: number, max_value: number, default_value: number): boolean
    is_ready_for_capture(): boolean
    is_recording_video(): boolean
    remove_filter(): boolean
    set_brightness(value: number): boolean
    set_camera_device(device: CameraDevice): boolean
    set_color_balance_property(property: string, value: number): boolean
    set_contrast(value: number): boolean
    set_filter(filter: Gst.Element): boolean
    set_gamma(value: number): boolean
    set_hue(value: number): boolean
    set_photo_profile(profile: GstPbutils.EncodingProfile): void
    set_saturation(value: number): boolean
    set_video_profile(profile: GstPbutils.EncodingProfile): void
    start_video_recording(filename: string): boolean
    stop_video_recording(): void
    supports_color_balance(): boolean
    supports_gamma_correction(): boolean
    take_photo(filename: string): boolean
    take_photo_pixbuf(): boolean
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
    /* Methods of ClutterGst-3.0.ClutterGst.Player */
    get_audio_volume(): number
    get_frame(): Frame
    get_idle(): boolean
    get_pipeline(): Gst.Element
    get_playing(): boolean
    get_video_sink(): VideoSink
    set_audio_volume(volume: number): void
    set_playing(playing: boolean): void
    /* Virtual methods of ClutterGst-3.0.ClutterGst.Camera */
    vfunc_photo_saved(): void
    vfunc_photo_taken(pixbuf: GdkPixbuf.Pixbuf): void
    vfunc_ready_for_capture(ready: boolean): void
    vfunc_video_saved(): void
    vfunc_eos(): void
    vfunc_error(error: GLib.Error): void
    vfunc_get_audio_volume(): number
    vfunc_get_frame(): Frame
    vfunc_get_idle(): boolean
    vfunc_get_pipeline(): Gst.Element
    vfunc_get_playing(): boolean
    vfunc_get_video_sink(): VideoSink
    vfunc_new_frame(frame: Frame): void
    vfunc_ready(): void
    vfunc_set_audio_volume(volume: number): void
    vfunc_set_playing(playing: boolean): void
    vfunc_size_change(width: number, height: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ClutterGst-3.0.ClutterGst.Camera */
    connect(sigName: "photo-saved", callback: (($obj: Camera) => void)): number
    connect_after(sigName: "photo-saved", callback: (($obj: Camera) => void)): number
    emit(sigName: "photo-saved"): void
    connect(sigName: "photo-taken", callback: (($obj: Camera, pixbuf: GdkPixbuf.Pixbuf) => void)): number
    connect_after(sigName: "photo-taken", callback: (($obj: Camera, pixbuf: GdkPixbuf.Pixbuf) => void)): number
    emit(sigName: "photo-taken", pixbuf: GdkPixbuf.Pixbuf): void
    connect(sigName: "ready-for-capture", callback: (($obj: Camera, ready: boolean) => void)): number
    connect_after(sigName: "ready-for-capture", callback: (($obj: Camera, ready: boolean) => void)): number
    emit(sigName: "ready-for-capture", ready: boolean): void
    connect(sigName: "video-saved", callback: (($obj: Camera) => void)): number
    connect_after(sigName: "video-saved", callback: (($obj: Camera) => void)): number
    emit(sigName: "video-saved"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ClutterGst-3.0.ClutterGst.Player */
    connect(sigName: "eos", callback: (($obj: Camera) => void)): number
    connect_after(sigName: "eos", callback: (($obj: Camera) => void)): number
    emit(sigName: "eos"): void
    connect(sigName: "error", callback: (($obj: Camera, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: Camera, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    connect(sigName: "new-frame", callback: (($obj: Camera, frame: Frame) => void)): number
    connect_after(sigName: "new-frame", callback: (($obj: Camera, frame: Frame) => void)): number
    emit(sigName: "new-frame", frame: Frame): void
    connect(sigName: "ready", callback: (($obj: Camera) => void)): number
    connect_after(sigName: "ready", callback: (($obj: Camera) => void)): number
    emit(sigName: "ready"): void
    connect(sigName: "size-change", callback: (($obj: Camera, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: Camera, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
    connect(sigName: "notify::device", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::audio-volume", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-volume", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::playing", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Camera_ConstructProps)
    _init (config?: Camera_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Camera
    static $gtype: GObject.Type
}
export interface CameraDevice_ConstructProps extends GObject.Object_ConstructProps {
    element_factory?: Gst.ElementFactory
    name?: string
    node?: string
}
export class CameraDevice {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.CameraDevice */
    get_capture_resolution(): [ /* width */ number, /* height */ number ]
    get_name(): string
    get_node(): string
    get_supported_resolutions(): VideoResolution[]
    set_capture_resolution(width: number, height: number): void
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
    /* Virtual methods of ClutterGst-3.0.ClutterGst.CameraDevice */
    vfunc_capture_resolution_changed(width: number, height: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ClutterGst-3.0.ClutterGst.CameraDevice */
    connect(sigName: "capture-resolution-changed", callback: (($obj: CameraDevice, width: number, height: number) => void)): number
    connect_after(sigName: "capture-resolution-changed", callback: (($obj: CameraDevice, width: number, height: number) => void)): number
    emit(sigName: "capture-resolution-changed", width: number, height: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CameraDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CameraDevice_ConstructProps)
    _init (config?: CameraDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CameraManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class CameraManager {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.CameraManager */
    get_camera_devices(): CameraDevice[]
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
    /* Signals of ClutterGst-3.0.ClutterGst.CameraManager */
    connect(sigName: "camera-added", callback: (($obj: CameraManager, camera_device: CameraDevice) => void)): number
    connect_after(sigName: "camera-added", callback: (($obj: CameraManager, camera_device: CameraDevice) => void)): number
    emit(sigName: "camera-added", camera_device: CameraDevice): void
    connect(sigName: "camera-removed", callback: (($obj: CameraManager, camera_device: CameraDevice) => void)): number
    connect_after(sigName: "camera-removed", callback: (($obj: CameraManager, camera_device: CameraDevice) => void)): number
    emit(sigName: "camera-removed", camera_device: CameraDevice): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CameraManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CameraManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CameraManager_ConstructProps)
    _init (config?: CameraManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): CameraManager
    static $gtype: GObject.Type
}
export interface Content_ConstructProps extends GObject.Object_ConstructProps {
    frame?: Frame
    paint_frame?: boolean
    paint_overlays?: boolean
    player?: GObject.Object
    sink?: VideoSink
}
export class Content {
    /* Properties of ClutterGst-3.0.ClutterGst.Content */
    frame: Frame
    paint_frame: boolean
    paint_overlays: boolean
    player: GObject.Object
    sink: VideoSink
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.Content */
    get_frame(): Frame
    get_overlays(): Overlays
    get_player(): Player
    get_sink(): VideoSink
    set_frame(frame: Frame): void
    set_player(player: Player): void
    set_sink(sink: VideoSink): void
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
    /* Methods of Clutter-1.0.Clutter.Content */
    get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    invalidate(): void
    /* Virtual methods of ClutterGst-3.0.ClutterGst.Content */
    vfunc_has_painting_content(): boolean
    vfunc_attached(actor: Clutter.Actor): void
    vfunc_detached(actor: Clutter.Actor): void
    vfunc_get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    vfunc_invalidate(): void
    vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ClutterGst-3.0.ClutterGst.Content */
    connect(sigName: "size-change", callback: (($obj: Content, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: Content, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Content */
    connect(sigName: "attached", callback: (($obj: Content, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "attached", callback: (($obj: Content, actor: Clutter.Actor) => void)): number
    emit(sigName: "attached", actor: Clutter.Actor): void
    connect(sigName: "detached", callback: (($obj: Content, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "detached", callback: (($obj: Content, actor: Clutter.Actor) => void)): number
    emit(sigName: "detached", actor: Clutter.Actor): void
    connect(sigName: "notify::frame", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paint-frame", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-frame", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paint-overlays", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-overlays", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::player", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sink", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: Content, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Content_ConstructProps)
    _init (config?: Content_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_with_sink(sink: VideoSink): Clutter.Content
    static $gtype: GObject.Type
}
export interface Crop_ConstructProps extends Content_ConstructProps {
    cull_backface?: boolean
    input_region?: Box
    output_region?: Box
    paint_borders?: boolean
}
export class Crop {
    /* Properties of ClutterGst-3.0.ClutterGst.Crop */
    cull_backface: boolean
    input_region: Box
    output_region: Box
    paint_borders: boolean
    /* Properties of ClutterGst-3.0.ClutterGst.Content */
    frame: Frame
    paint_frame: boolean
    paint_overlays: boolean
    player: GObject.Object
    sink: VideoSink
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.Content */
    get_frame(): Frame
    get_overlays(): Overlays
    get_player(): Player
    get_sink(): VideoSink
    set_frame(frame: Frame): void
    set_player(player: Player): void
    set_sink(sink: VideoSink): void
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
    /* Methods of Clutter-1.0.Clutter.Content */
    get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    invalidate(): void
    /* Virtual methods of ClutterGst-3.0.ClutterGst.Content */
    vfunc_has_painting_content(): boolean
    vfunc_attached(actor: Clutter.Actor): void
    vfunc_detached(actor: Clutter.Actor): void
    vfunc_get_preferred_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    vfunc_invalidate(): void
    vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ClutterGst-3.0.ClutterGst.Content */
    connect(sigName: "size-change", callback: (($obj: Crop, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: Crop, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Content */
    connect(sigName: "attached", callback: (($obj: Crop, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "attached", callback: (($obj: Crop, actor: Clutter.Actor) => void)): number
    emit(sigName: "attached", actor: Clutter.Actor): void
    connect(sigName: "detached", callback: (($obj: Crop, actor: Clutter.Actor) => void)): number
    connect_after(sigName: "detached", callback: (($obj: Crop, actor: Clutter.Actor) => void)): number
    emit(sigName: "detached", actor: Clutter.Actor): void
    connect(sigName: "notify::cull-backface", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cull-backface", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-region", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-region", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-region", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-region", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paint-borders", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-borders", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::frame", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paint-frame", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-frame", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::paint-overlays", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paint-overlays", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::player", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sink", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: Crop, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Crop_ConstructProps)
    _init (config?: Crop_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Crop
    static $gtype: GObject.Type
}
export interface Playback_ConstructProps extends GObject.Object_ConstructProps {
    audio_stream?: number
    progress?: number
    seek_flags?: SeekFlags
    subtitle_font_name?: string
    subtitle_track?: number
    subtitle_uri?: string
    uri?: string
    user_agent?: string
    audio_volume?: number
    playing?: boolean
}
export class Playback {
    /* Properties of ClutterGst-3.0.ClutterGst.Playback */
    audio_stream: number
    readonly audio_streams: object
    readonly buffer_fill: number
    readonly can_seek: boolean
    readonly duration: number
    readonly in_seek: boolean
    progress: number
    seek_flags: SeekFlags
    subtitle_font_name: string
    subtitle_track: number
    readonly subtitle_tracks: object
    subtitle_uri: string
    uri: string
    user_agent: string
    /* Properties of ClutterGst-3.0.ClutterGst.Player */
    audio_volume: number
    readonly idle: boolean
    playing: boolean
    /* Fields of ClutterGst-3.0.ClutterGst.Playback */
    parent: GObject.Object
    priv: PlaybackPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ClutterGst-3.0.ClutterGst.Playback */
    get_audio_stream(): number
    get_audio_streams(): string[]
    get_buffer_duration(): number
    get_buffer_fill(): number
    get_buffer_size(): number
    get_buffering_mode(): BufferingMode
    get_duration(): number
    get_in_seek(): boolean
    get_position(): number
    get_progress(): number
    get_seek_flags(): SeekFlags
    get_subtitle_font_name(): string
    get_subtitle_track(): number
    get_subtitle_tracks(): string[]
    get_subtitle_uri(): string
    get_uri(): string
    get_user_agent(): string
    is_live_media(): boolean
    set_audio_stream(index_: number): void
    set_buffer_duration(duration: number): void
    set_buffer_size(size: number): void
    set_buffering_mode(mode: BufferingMode): void
    set_filename(filename: string): void
    set_progress(progress: number): void
    set_seek_flags(flags: SeekFlags): void
    set_subtitle_font_name(font_name: string): void
    set_subtitle_track(index_: number): void
    set_subtitle_uri(uri: string): void
    set_uri(uri: string): void
    set_user_agent(user_agent: string): void
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
    /* Methods of ClutterGst-3.0.ClutterGst.Player */
    get_audio_volume(): number
    get_frame(): Frame
    get_idle(): boolean
    get_pipeline(): Gst.Element
    get_playing(): boolean
    get_video_sink(): VideoSink
    set_audio_volume(volume: number): void
    set_playing(playing: boolean): void
    /* Virtual methods of ClutterGst-3.0.ClutterGst.Playback */
    vfunc_should_buffer(query: Gst.Query): boolean
    vfunc_eos(): void
    vfunc_error(error: GLib.Error): void
    vfunc_get_audio_volume(): number
    vfunc_get_frame(): Frame
    vfunc_get_idle(): boolean
    vfunc_get_pipeline(): Gst.Element
    vfunc_get_playing(): boolean
    vfunc_get_video_sink(): VideoSink
    vfunc_new_frame(frame: Frame): void
    vfunc_ready(): void
    vfunc_set_audio_volume(volume: number): void
    vfunc_set_playing(playing: boolean): void
    vfunc_size_change(width: number, height: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ClutterGst-3.0.ClutterGst.Playback */
    connect(sigName: "should-buffer", callback: (($obj: Playback, query: Gst.Query) => boolean)): number
    connect_after(sigName: "should-buffer", callback: (($obj: Playback, query: Gst.Query) => boolean)): number
    emit(sigName: "should-buffer", query: Gst.Query): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of ClutterGst-3.0.ClutterGst.Player */
    connect(sigName: "eos", callback: (($obj: Playback) => void)): number
    connect_after(sigName: "eos", callback: (($obj: Playback) => void)): number
    emit(sigName: "eos"): void
    connect(sigName: "error", callback: (($obj: Playback, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: Playback, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    connect(sigName: "new-frame", callback: (($obj: Playback, frame: Frame) => void)): number
    connect_after(sigName: "new-frame", callback: (($obj: Playback, frame: Frame) => void)): number
    emit(sigName: "new-frame", frame: Frame): void
    connect(sigName: "ready", callback: (($obj: Playback) => void)): number
    connect_after(sigName: "ready", callback: (($obj: Playback) => void)): number
    emit(sigName: "ready"): void
    connect(sigName: "size-change", callback: (($obj: Playback, width: number, height: number) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: Playback, width: number, height: number) => void)): number
    emit(sigName: "size-change", width: number, height: number): void
    connect(sigName: "notify::audio-stream", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-stream", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::audio-streams", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-streams", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-fill", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-fill", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-seek", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::in-seek", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-seek", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seek-flags", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seek-flags", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-font-name", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-font-name", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-track", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-track", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-tracks", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-tracks", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-uri", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-uri", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::audio-volume", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-volume", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::playing", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: (($obj: Playback, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Playback_ConstructProps)
    _init (config?: Playback_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Playback
    static $gtype: GObject.Type
}
export interface VideoSink_ConstructProps extends GstVideo.VideoSink_ConstructProps {
    update_priority?: number
}
export class VideoSink {
    /* Properties of ClutterGst-3.0.ClutterGst.VideoSink */
    update_priority: number
    /* Properties of GstVideo-1.0.GstVideo.VideoSink */
    show_preroll_frame: boolean
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
    /* Fields of GstVideo-1.0.GstVideo.VideoSink */
    element: GstBase.BaseSink
    width: number
    height: number
    /* Fields of GstBase-1.0.GstBase.BaseSink */
    sinkpad: Gst.Pad
    pad_mode: Gst.PadMode
    offset: number
    can_activate_pull: boolean
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
    /* Methods of ClutterGst-3.0.ClutterGst.VideoSink */
    get_frame(): Frame
    get_overlays(): Overlays
    is_ready(): boolean
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
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    request_pad_simple(name: string): Gst.Pad | null
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
    /* Methods of GstVideo-1.0.GstVideo.ColorBalance */
    get_balance_type(): GstVideo.ColorBalanceType
    get_value(channel: GstVideo.ColorBalanceChannel): number
    list_channels(): GstVideo.ColorBalanceChannel[]
    set_value(channel: GstVideo.ColorBalanceChannel, value: number): void
    value_changed(channel: GstVideo.ColorBalanceChannel, value: number): void
    /* Methods of GstVideo-1.0.GstVideo.Navigation */
    send_command(command: GstVideo.NavigationCommand): void
    send_event(structure: Gst.Structure): void
    send_key_event(event: string, key: string): void
    send_mouse_event(event: string, button: number, x: number, y: number): void
    send_mouse_scroll_event(x: number, y: number, delta_x: number, delta_y: number): void
    /* Virtual methods of ClutterGst-3.0.ClutterGst.VideoSink */
    vfunc_new_frame(): void
    vfunc_new_overlays(): void
    vfunc_pipeline_ready(): void
    vfunc_get_balance_type(): GstVideo.ColorBalanceType
    vfunc_get_value(channel: GstVideo.ColorBalanceChannel): number
    vfunc_list_channels(): GstVideo.ColorBalanceChannel[]
    vfunc_set_value(channel: GstVideo.ColorBalanceChannel, value: number): void
    vfunc_value_changed(channel: GstVideo.ColorBalanceChannel, value: number): void
    vfunc_send_event(structure: Gst.Structure): void
    vfunc_send_event(event: Gst.Event): boolean
    /* Virtual methods of GstVideo-1.0.GstVideo.VideoSink */
    vfunc_set_info(caps: Gst.Caps, info: GstVideo.VideoInfo): boolean
    vfunc_show_frame(buf: Gst.Buffer): Gst.FlowReturn
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
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ClutterGst-3.0.ClutterGst.VideoSink */
    connect(sigName: "new-frame", callback: (($obj: VideoSink) => void)): number
    connect_after(sigName: "new-frame", callback: (($obj: VideoSink) => void)): number
    emit(sigName: "new-frame"): void
    connect(sigName: "new-overlays", callback: (($obj: VideoSink) => void)): number
    connect_after(sigName: "new-overlays", callback: (($obj: VideoSink) => void)): number
    emit(sigName: "new-overlays"): void
    connect(sigName: "pipeline-ready", callback: (($obj: VideoSink) => void)): number
    connect_after(sigName: "pipeline-ready", callback: (($obj: VideoSink) => void)): number
    emit(sigName: "pipeline-ready"): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoSink) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoSink) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoSink, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoSink, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoSink, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoSink, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GstVideo-1.0.GstVideo.ColorBalance */
    connect(sigName: "value-changed", callback: (($obj: VideoSink, channel: GstVideo.ColorBalanceChannel, value: number) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: VideoSink, channel: GstVideo.ColorBalanceChannel, value: number) => void)): number
    emit(sigName: "value-changed", channel: GstVideo.ColorBalanceChannel, value: number): void
    connect(sigName: "notify::update-priority", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-priority", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::show-preroll-frame", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-preroll-frame", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: VideoSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoSink_ConstructProps)
    _init (config?: VideoSink_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VideoSink
    static event_get_type(event: Gst.Event): GstVideo.NavigationEventType
    static event_parse_command(event: Gst.Event): [ /* returnType */ boolean, /* command */ GstVideo.NavigationCommand | null ]
    static event_parse_key_event(event: Gst.Event): [ /* returnType */ boolean, /* key */ string | null ]
    static event_parse_mouse_button_event(event: Gst.Event): [ /* returnType */ boolean, /* button */ number | null, /* x */ number | null, /* y */ number | null ]
    static event_parse_mouse_move_event(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    static event_parse_mouse_scroll_event(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* delta_x */ number | null, /* delta_y */ number | null ]
    static message_get_type(message: Gst.Message): GstVideo.NavigationMessageType
    static message_new_angles_changed(src: Gst.Object, cur_angle: number, n_angles: number): Gst.Message
    static message_new_commands_changed(src: Gst.Object): Gst.Message
    static message_new_event(src: Gst.Object, event: Gst.Event): Gst.Message
    static message_new_mouse_over(src: Gst.Object, active: boolean): Gst.Message
    static message_parse_angles_changed(message: Gst.Message): [ /* returnType */ boolean, /* cur_angle */ number | null, /* n_angles */ number | null ]
    static message_parse_event(message: Gst.Message): [ /* returnType */ boolean, /* event */ Gst.Event | null ]
    static message_parse_mouse_over(message: Gst.Message): [ /* returnType */ boolean, /* active */ boolean | null ]
    static query_get_type(query: Gst.Query): GstVideo.NavigationQueryType
    static query_new_angles(): Gst.Query
    static query_new_commands(): Gst.Query
    static query_parse_angles(query: Gst.Query): [ /* returnType */ boolean, /* cur_angle */ number | null, /* n_angles */ number | null ]
    static query_parse_commands_length(query: Gst.Query): [ /* returnType */ boolean, /* n_cmds */ number | null ]
    static query_parse_commands_nth(query: Gst.Query, nth: number): [ /* returnType */ boolean, /* cmd */ GstVideo.NavigationCommand | null ]
    static query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void
    static query_set_commandsv(query: Gst.Query, cmds: GstVideo.NavigationCommand[]): void
    static $gtype: GObject.Type
}
export abstract class AspectratioClass {
    static name: string
}
export class AspectratioPrivate {
    static name: string
}
export class Box {
    /* Fields of ClutterGst-3.0.ClutterGst.Box */
    x1: number
    y1: number
    x2: number
    y2: number
    /* Methods of ClutterGst-3.0.ClutterGst.Box */
    get_height(): number
    get_width(): number
    static name: string
}
export abstract class CameraClass {
    /* Fields of ClutterGst-3.0.ClutterGst.CameraClass */
    ready_for_capture: (self: Camera, ready: boolean) => void
    photo_saved: (self: Camera) => void
    photo_taken: (self: Camera, pixbuf: GdkPixbuf.Pixbuf) => void
    video_saved: (self: Camera) => void
    static name: string
}
export abstract class CameraDeviceClass {
    /* Fields of ClutterGst-3.0.ClutterGst.CameraDeviceClass */
    capture_resolution_changed: (device: CameraDevice, width: number, height: number) => void
    static name: string
}
export class CameraDevicePrivate {
    static name: string
}
export abstract class CameraManagerClass {
    static name: string
}
export class CameraManagerPrivate {
    static name: string
}
export class CameraPrivate {
    static name: string
}
export abstract class ContentClass {
    /* Fields of ClutterGst-3.0.ClutterGst.ContentClass */
    has_painting_content: (self: Content) => boolean
    static name: string
}
export class ContentPrivate {
    static name: string
}
export abstract class CropClass {
    static name: string
}
export class CropPrivate {
    static name: string
}
export class Frame {
    /* Fields of ClutterGst-3.0.ClutterGst.Frame */
    resolution: VideoResolution
    static name: string
}
export class Overlay {
    /* Fields of ClutterGst-3.0.ClutterGst.Overlay */
    position: Box
    static name: string
}
export class Overlays {
    /* Fields of ClutterGst-3.0.ClutterGst.Overlays */
    overlays: object[]
    static name: string
}
export abstract class PlaybackClass {
    /* Fields of ClutterGst-3.0.ClutterGst.PlaybackClass */
    should_buffer: (self: Playback, query: Gst.Query) => boolean
    static name: string
}
export class PlaybackPrivate {
    static name: string
}
export abstract class PlayerIface {
    /* Fields of ClutterGst-3.0.ClutterGst.PlayerIface */
    get_frame: (self: Player) => Frame
    get_pipeline: (self: Player) => Gst.Element
    get_video_sink: (self: Player) => VideoSink
    get_idle: (self: Player) => boolean
    get_audio_volume: (self: Player) => number
    set_audio_volume: (self: Player, volume: number) => void
    get_playing: (self: Player) => boolean
    set_playing: (self: Player, playing: boolean) => void
    new_frame: (self: Player, frame: Frame) => void
    ready: (self: Player) => void
    eos: (self: Player) => void
    error: (self: Player, error: GLib.Error) => void
    size_change: (self: Player, width: number, height: number) => void
    static name: string
}
export class PlayerIfacePrivate {
    static name: string
}
export class VideoResolution {
    /* Fields of ClutterGst-3.0.ClutterGst.VideoResolution */
    width: number
    height: number
    par_n: number
    par_d: number
    static name: string
}
export abstract class VideoSinkClass {
    /* Fields of ClutterGst-3.0.ClutterGst.VideoSinkClass */
    new_frame: (sink: VideoSink) => void
    pipeline_ready: (sink: VideoSink) => void
    new_overlays: (sink: VideoSink) => void
    static name: string
}
export class VideoSinkPrivate {
    static name: string
}