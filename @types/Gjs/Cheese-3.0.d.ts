/**
 * Cheese-3.0
 */

import type * as Gjs from './Gjs';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as Gio from './Gio-2.0';
import type * as Clutter from './Clutter-1.0';
import type * as cairo from './cairo-1.0';
import type * as Json from './Json-1.0';
import type * as GL from './GL-1.0';
import type * as CoglPango from './CoglPango-1.0';
import type * as PangoCairo from './PangoCairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as Cogl from './Cogl-1.0';
import type * as Atk from './Atk-1.0';

export enum CameraError {
    UNKNOWN,
    ELEMENT_NOT_FOUND,
    NO_DEVICE,
}
export enum MediaMode {
    PHOTO,
    VIDEO,
    BURST,
}
export const PHOTO_NAME_SUFFIX: string
export const VIDEO_NAME_SUFFIX: string
export interface Camera_ConstructProps extends GObject.Object_ConstructProps {
    device?: CameraDevice
    format?: VideoFormat
    video_texture?: object
}
export class Camera {
    /* Properties of Cheese-3.0.Cheese.Camera */
    device: CameraDevice
    format: VideoFormat
    readonly num_camera_devices: number
    video_texture: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Cheese-3.0.Cheese.Camera */
    connect_effect_texture(effect: Effect, texture: Clutter.Actor): void
    get_balance_property_range(property: string): [ /* returnType */ boolean, /* min */ number, /* max */ number, /* def */ number ]
    get_camera_devices(): CameraDevice[]
    get_current_video_format(): VideoFormat
    get_recorded_time(): string
    get_selected_device(): CameraDevice
    get_video_formats(): VideoFormat[]
    play(): void
    set_balance_property(property: string, value: number): void
    set_device(device: CameraDevice): void
    set_effect(effect: Effect): void
    set_video_format(format: VideoFormat): void
    setup(device?: CameraDevice | null): void
    start_video_recording(filename: string): void
    stop(): void
    stop_video_recording(): void
    switch_camera_device(): void
    take_photo(filename: string): boolean
    take_photo_pixbuf(): boolean
    toggle_effects_pipeline(active: boolean): void
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
    /* Virtual methods of Cheese-3.0.Cheese.Camera */
    vfunc_photo_saved(): void
    vfunc_photo_taken(pixbuf: GdkPixbuf.Pixbuf): void
    vfunc_state_flags_changed(new_state: Gst.State): void
    vfunc_video_saved(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Cheese-3.0.Cheese.Camera */
    connect(sigName: "photo-saved", callback: (($obj: Camera) => void)): number
    connect_after(sigName: "photo-saved", callback: (($obj: Camera) => void)): number
    emit(sigName: "photo-saved"): void
    connect(sigName: "photo-taken", callback: (($obj: Camera, pixbuf: GdkPixbuf.Pixbuf) => void)): number
    connect_after(sigName: "photo-taken", callback: (($obj: Camera, pixbuf: GdkPixbuf.Pixbuf) => void)): number
    emit(sigName: "photo-taken", pixbuf: GdkPixbuf.Pixbuf): void
    connect(sigName: "state-flags-changed", callback: (($obj: Camera, state: number) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: Camera, state: number) => void)): number
    emit(sigName: "state-flags-changed", state: number): void
    connect(sigName: "video-saved", callback: (($obj: Camera) => void)): number
    connect_after(sigName: "video-saved", callback: (($obj: Camera) => void)): number
    emit(sigName: "video-saved"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::format", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-camera-devices", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-camera-devices", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::video-texture", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-texture", callback: (($obj: Camera, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Camera_ConstructProps)
    _init (config?: Camera_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(video_texture: Clutter.Actor, name: string | null, x_resolution: number, y_resolution: number): Camera
    static $gtype: GObject.Type
}
export interface CameraDevice_ConstructProps extends GObject.Object_ConstructProps {
    device?: Gst.Device
    name?: string
    path?: string
}
export class CameraDevice {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Cheese-3.0.Cheese.CameraDevice */
    get_best_format(): VideoFormat
    get_caps_for_format(format: VideoFormat): Gst.Caps
    get_format_list(): VideoFormat[]
    get_name(): string
    get_path(): string
    get_src(): Gst.Element
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Cheese-3.0.Cheese.CameraDevice */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    /* Static methods and pseudo-constructors */
    static new(device: Gst.Device): CameraDevice
    static supported_format_caps(): Gst.Caps
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface CameraDeviceMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class CameraDeviceMonitor {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Cheese-3.0.Cheese.CameraDeviceMonitor */
    coldplug(): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Cheese-3.0.Cheese.CameraDeviceMonitor */
    vfunc_added(device: CameraDevice): void
    vfunc_removed(device: CameraDevice): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Cheese-3.0.Cheese.CameraDeviceMonitor */
    connect(sigName: "added", callback: (($obj: CameraDeviceMonitor, device: CameraDevice) => void)): number
    connect_after(sigName: "added", callback: (($obj: CameraDeviceMonitor, device: CameraDevice) => void)): number
    emit(sigName: "added", device: CameraDevice): void
    connect(sigName: "removed", callback: (($obj: CameraDeviceMonitor, device: CameraDevice) => void)): number
    connect_after(sigName: "removed", callback: (($obj: CameraDeviceMonitor, device: CameraDevice) => void)): number
    emit(sigName: "removed", device: CameraDevice): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CameraDeviceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CameraDeviceMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CameraDeviceMonitor_ConstructProps)
    _init (config?: CameraDeviceMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CameraDeviceMonitor
    static new_finish(result: Gio.AsyncResult): CameraDeviceMonitor
    static new_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Effect_ConstructProps extends GObject.Object_ConstructProps {
    control_valve?: Gst.Element
    name?: string
    pipeline_desc?: string
}
export class Effect {
    /* Properties of Cheese-3.0.Cheese.Effect */
    control_valve: Gst.Element
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Cheese-3.0.Cheese.Effect */
    disable_preview(): void
    enable_preview(): void
    get_name(): string
    get_pipeline_desc(): string
    is_preview_connected(): boolean
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
    connect(sigName: "notify", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::control-valve", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::control-valve", callback: (($obj: Effect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Effect_ConstructProps)
    _init (config?: Effect_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, pipeline_desc: string): Effect
    static load_effects(): Effect[]
    static load_from_file(filename: string): Effect
    static $gtype: GObject.Type
}
export interface FileUtil_ConstructProps extends GObject.Object_ConstructProps {
}
export class FileUtil {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Cheese-3.0.Cheese.FileUtil */
    get_new_media_filename(mode: MediaMode): string
    get_photo_path(): string
    get_video_path(): string
    reset_burst(): void
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
    connect(sigName: "notify", callback: (($obj: FileUtil, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileUtil, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileUtil_ConstructProps)
    _init (config?: FileUtil_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FileUtil
    static $gtype: GObject.Type
}
export abstract class CameraClass {
    /* Fields of Cheese-3.0.Cheese.CameraClass */
    photo_saved: (camera: Camera) => void
    photo_taken: (camera: Camera, pixbuf: GdkPixbuf.Pixbuf) => void
    video_saved: (camera: Camera) => void
    state_flags_changed: (camera: Camera, new_state: Gst.State) => void
    static name: string
}
export abstract class CameraDeviceClass {
    /* Fields of Cheese-3.0.Cheese.CameraDeviceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class CameraDeviceMonitorClass {
    /* Fields of Cheese-3.0.Cheese.CameraDeviceMonitorClass */
    added: (monitor: CameraDeviceMonitor, device: CameraDevice) => void
    removed: (monitor: CameraDeviceMonitor, device: CameraDevice) => void
    static name: string
}
export class CameraDeviceMonitorPrivate {
    static name: string
}
export class CameraPrivate {
    static name: string
}
export abstract class EffectClass {
    /* Fields of Cheese-3.0.Cheese.EffectClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FileUtilClass {
    /* Fields of Cheese-3.0.Cheese.FileUtilClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class VideoFormat {
    /* Fields of Cheese-3.0.Cheese.VideoFormat */
    width: number
    height: number
    static name: string
}