/**
 * GstGL-1.0
 */

import type * as Gjs from './Gjs';
import type * as GstVideo from './GstVideo-1.0';
import type * as GstBase from './GstBase-1.0';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export enum GLBaseMemoryError {
    FAILED,
    OLD_LIBS,
    RESOURCE_UNAVAILABLE,
}
export enum GLConfigCaveat {
    NONE,
    SLOW,
    NON_CONFORMANT,
}
export enum GLContextError {
    FAILED,
    WRONG_CONFIG,
    WRONG_API,
    OLD_LIBS,
    CREATE_CONTEXT,
    RESOURCE_UNAVAILABLE,
}
export enum GLFormat {
    LUMINANCE,
    ALPHA,
    LUMINANCE_ALPHA,
    RED,
    R8,
    RG,
    RG8,
    RGB,
    RGB8,
    RGB565,
    RGB16,
    RGBA,
    RGBA8,
    RGBA16,
    DEPTH_COMPONENT16,
    DEPTH24_STENCIL8,
    RGB10_A2,
    R16,
    RG16,
}
export enum GLQueryType {
    NONE,
    TIME_ELAPSED,
    TIMESTAMP,
}
export enum GLSLError {
    COMPILE,
    LINK,
    PROGRAM,
}
export enum GLSLVersion {
    NONE,
    /* 100 (invalid, starts with a number) */
    /* 110 (invalid, starts with a number) */
    /* 120 (invalid, starts with a number) */
    /* 130 (invalid, starts with a number) */
    /* 140 (invalid, starts with a number) */
    /* 150 (invalid, starts with a number) */
    /* 300 (invalid, starts with a number) */
    /* 310 (invalid, starts with a number) */
    /* 320 (invalid, starts with a number) */
    /* 330 (invalid, starts with a number) */
    /* 400 (invalid, starts with a number) */
    /* 410 (invalid, starts with a number) */
    /* 420 (invalid, starts with a number) */
    /* 430 (invalid, starts with a number) */
    /* 440 (invalid, starts with a number) */
    /* 450 (invalid, starts with a number) */
}
export enum GLStereoDownmix {
    GREEN_MAGENTA_DUBOIS,
    RED_CYAN_DUBOIS,
    AMBER_BLUE_DUBOIS,
}
export enum GLTextureTarget {
    NONE,
    /* 2D (invalid, starts with a number) */
    RECTANGLE,
    EXTERNAL_OES,
}
export enum GLUploadReturn {
    DONE,
    ERROR,
    UNSUPPORTED,
    RECONFIGURE,
    UNSHARED_GL_CONTEXT,
}
export enum GLWindowError {
    FAILED,
    OLD_LIBS,
    RESOURCE_UNAVAILABLE,
}
export enum GLAPI {
    NONE,
    OPENGL,
    OPENGL3,
    GLES1,
    GLES2,
    ANY,
}
export enum GLBaseMemoryTransfer {
    DOWNLOAD,
    UPLOAD,
}
export enum GLConfigSurfaceType {
    NONE,
    WINDOW,
    PBUFFER,
    PIXMAP,
}
export enum GLDisplayType {
    NONE,
    X11,
    WAYLAND,
    COCOA,
    WIN32,
    DISPMANX,
    EGL,
    VIV_FB,
    GBM,
    EGL_DEVICE,
    EAGL,
    WINRT,
    ANDROID,
    ANY,
}
export enum GLPlatform {
    NONE,
    EGL,
    GLX,
    WGL,
    CGL,
    EAGL,
    ANY,
}
export enum GLSLProfile {
    NONE,
    ES,
    CORE,
    COMPATIBILITY,
    ANY,
}
export const BUFFER_POOL_OPTION_GL_SYNC_META: string
export const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_2D: string
export const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_EXTERNAL_OES: string
export const BUFFER_POOL_OPTION_GL_TEXTURE_TARGET_RECTANGLE: string
export const CAPS_FEATURE_MEMORY_GL_BUFFER: string
export const CAPS_FEATURE_MEMORY_GL_MEMORY: string
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_ALLOC: number
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_BUFFER: number
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_USER: number
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_VIDEO: number
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_GPU_HANDLE: number
export const GL_ALLOCATION_PARAMS_ALLOC_FLAG_WRAP_SYSMEM: number
export const GL_API_GLES1_NAME: string
export const GL_API_GLES2_NAME: string
export const GL_API_OPENGL3_NAME: string
export const GL_API_OPENGL_NAME: string
export const GL_BASE_MEMORY_ALLOCATOR_NAME: string
export const GL_BUFFER_ALLOCATOR_NAME: string
export const GL_COLOR_CONVERT_FORMATS: string
export const GL_COLOR_CONVERT_VIDEO_CAPS: string
export const GL_CONFIG_STRUCTURE_NAME: string
export const GL_CONTEXT_TYPE_CGL: string
export const GL_CONTEXT_TYPE_EAGL: string
export const GL_CONTEXT_TYPE_EGL: string
export const GL_CONTEXT_TYPE_GLX: string
export const GL_CONTEXT_TYPE_WGL: string
export const GL_DISPLAY_CONTEXT_TYPE: string
export const GL_MEMORY_ALLOCATOR_NAME: string
export const GL_MEMORY_PBO_ALLOCATOR_NAME: string
export const GL_MEMORY_VIDEO_FORMATS_STR: string
export const GL_RENDERBUFFER_ALLOCATOR_NAME: string
export const GL_TEXTURE_TARGET_2D_STR: string
export const GL_TEXTURE_TARGET_EXTERNAL_OES_STR: string
export const GL_TEXTURE_TARGET_RECTANGLE_STR: string
export const MAP_GL: number
export function buffer_add_gl_sync_meta(context: GLContext, buffer: Gst.Buffer): GLSyncMeta
export function buffer_add_gl_sync_meta_full(context: GLContext, buffer: Gst.Buffer, data?: object | null): GLSyncMeta
export function buffer_pool_config_get_gl_allocation_params(config: Gst.Structure): GLAllocationParams
export function buffer_pool_config_set_gl_allocation_params(config: Gst.Structure, params: GLAllocationParams): void
export function context_get_gl_display(context: Gst.Context): [ /* returnType */ boolean, /* display */ GLDisplay ]
export function context_set_gl_display(context: Gst.Context, display: GLDisplay): void
export function gl_api_from_string(api_s: string): GLAPI
export function gl_api_to_string(api: GLAPI): string
export function gl_base_memory_alloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory
export function gl_base_memory_error_quark(): GLib.Quark
export function gl_base_memory_init_once(): void
export function gl_buffer_init_once(): void
export function gl_check_extension(name: string, ext: string): boolean
export function gl_config_caveat_to_string(caveat: GLConfigCaveat): string | null
export function gl_config_surface_type_to_string(surface_type: GLConfigSurfaceType): string | null
export function gl_context_error_quark(): GLib.Quark
export function gl_element_propagate_display_context(element: Gst.Element, display: GLDisplay): void
export function gl_ensure_element_data(element: object | null, display_ptr: GLDisplay, other_context_ptr: GLContext): [ /* returnType */ boolean, /* display_ptr */ GLDisplay, /* other_context_ptr */ GLContext ]
export function gl_format_from_video_info(context: GLContext, vinfo: GstVideo.VideoInfo, plane: number): GLFormat
export function gl_format_is_supported(context: GLContext, format: GLFormat): boolean
export function gl_format_type_from_sized_gl_format(format: GLFormat): [ /* unsized_format */ GLFormat, /* gl_type */ number ]
export function gl_format_type_n_bytes(format: number, type: number): number
export function gl_get_affine_transformation_meta_as_ndc(meta?: GstVideo.VideoAffineTransformationMeta | null): /* matrix */ number[]
export function gl_get_plane_data_size(info: GstVideo.VideoInfo, align: GstVideo.VideoAlignment, plane: number): number
export function gl_get_plane_start(info: GstVideo.VideoInfo, valign: GstVideo.VideoAlignment, plane: number): number
export function gl_handle_context_query(element: Gst.Element, query: Gst.Query, display?: GLDisplay | null, context?: GLContext | null, other_context?: GLContext | null): boolean
export function gl_handle_set_context(element: Gst.Element, context: Gst.Context, display: GLDisplay, other_context: GLContext): [ /* returnType */ boolean, /* display */ GLDisplay, /* other_context */ GLContext ]
export function gl_memory_init_once(): void
export function gl_memory_pbo_init_once(): void
export function gl_multiply_matrix4(a: number[], b: number[]): /* result */ number[]
export function gl_platform_from_string(platform_s: string): GLPlatform
export function gl_platform_to_string(platform: GLPlatform): string
export function gl_query_local_gl_context(element: Gst.Element, direction: Gst.PadDirection, context_ptr: GLContext): [ /* returnType */ boolean, /* context_ptr */ GLContext ]
export function gl_renderbuffer_init_once(): void
export function gl_set_affine_transformation_meta_from_ndc(meta: GstVideo.VideoAffineTransformationMeta, matrix: number[]): void
export function gl_sized_gl_format_from_gl_format_type(context: GLContext, format: number, type: number): number
export function gl_stereo_downmix_mode_get_type(): GObject.Type
export function gl_sync_meta_api_get_type(): GObject.Type
export function gl_sync_meta_get_info(): Gst.MetaInfo
export function gl_texture_target_from_gl(target: number): GLTextureTarget
export function gl_texture_target_from_string(str: string): GLTextureTarget
export function gl_texture_target_to_buffer_pool_option(target: GLTextureTarget): string
export function gl_texture_target_to_gl(target: GLTextureTarget): number
export function gl_texture_target_to_string(target: GLTextureTarget): string
export function gl_value_get_texture_target_mask(value: any): GLTextureTarget
export function gl_value_set_texture_target(value: any, target: GLTextureTarget): boolean
export function gl_value_set_texture_target_from_mask(value: any, target_mask: GLTextureTarget): boolean
export function gl_version_to_glsl_version(gl_api: GLAPI, maj: number, min: number): GLSLVersion
export function gl_window_error_quark(): GLib.Quark
export function glsl_error_quark(): GLib.Quark
export function glsl_profile_from_string(string: string): GLSLProfile
export function glsl_profile_to_string(profile: GLSLProfile): string | null
export function glsl_string_get_version_profile(s: string): [ /* returnType */ boolean, /* version */ GLSLVersion, /* profile */ GLSLProfile ]
export function glsl_version_from_string(string: string): GLSLVersion
export function glsl_version_profile_from_string(string: string): [ /* returnType */ boolean, /* version_ret */ GLSLVersion, /* profile_ret */ GLSLProfile ]
export function glsl_version_profile_to_string(version: GLSLVersion, profile: GLSLProfile): string
export function glsl_version_to_string(version: GLSLVersion): string | null
export function is_gl_base_memory(mem: Gst.Memory): boolean
export function is_gl_buffer(mem: Gst.Memory): boolean
export function is_gl_memory(mem: Gst.Memory): boolean
export function is_gl_memory_pbo(mem: Gst.Memory): boolean
export function is_gl_renderbuffer(mem: Gst.Memory): boolean
export interface GLAllocationParamsCopyFunc {
    (src: GLAllocationParams, dest: GLAllocationParams): void
}
export interface GLAllocationParamsFreeFunc {
    (params?: object | null): void
}
export interface GLAsyncDebugLogGetMessage {
    (): string
}
export interface GLBaseMemoryAllocatorAllocFunction {
    (allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory
}
export interface GLBaseMemoryAllocatorCopyFunction {
    (mem: GLBaseMemory, offset: number, size: number): GLBaseMemory
}
export interface GLBaseMemoryAllocatorCreateFunction {
    (mem: GLBaseMemory): boolean
}
export interface GLBaseMemoryAllocatorDestroyFunction {
    (mem: GLBaseMemory): void
}
export interface GLBaseMemoryAllocatorMapFunction {
    (mem: GLBaseMemory, info: Gst.MapInfo, maxsize: number): object | null
}
export interface GLBaseMemoryAllocatorUnmapFunction {
    (mem: GLBaseMemory, info: Gst.MapInfo): void
}
export interface GLContextThreadFunc {
    (context: GLContext, data?: object | null): void
}
export interface GLFilterRenderFunc {
    (filter: GLFilter, in_tex: GLMemory): boolean
}
export interface GLFramebufferFunc {
    (stuff?: object | null): boolean
}
export interface GLWindowCB {
    (data?: object | null): void
}
export interface GLWindowResizeCB {
    (data: object | null, width: number, height: number): void
}
export interface GLBaseFilter_ConstructProps extends GstBase.BaseTransform_ConstructProps {
}
export class GLBaseFilter {
    /* Properties of GstGL-1.0.GstGL.GLBaseFilter */
    readonly context: GLContext
    /* Properties of GstBase-1.0.GstBase.BaseTransform */
    qos: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGL-1.0.GstGL.GLBaseFilter */
    display: GLDisplay
    in_caps: Gst.Caps
    out_caps: Gst.Caps
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
    /* Methods of GstGL-1.0.GstGL.GLBaseFilter */
    find_gl_context(): boolean
    get_gl_context(): GLContext | null
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
    /* Virtual methods of GstGL-1.0.GstGL.GLBaseFilter */
    vfunc_gl_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfunc_gl_start(): boolean
    vfunc_gl_stop(): void
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
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: GLBaseFilter) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: GLBaseFilter) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: GLBaseFilter, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: GLBaseFilter, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: GLBaseFilter, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: GLBaseFilter, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLBaseFilter, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLBaseFilter, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::context", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLBaseFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLBaseFilter_ConstructProps)
    _init (config?: GLBaseFilter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GLBaseMemoryAllocator_ConstructProps extends Gst.Allocator_ConstructProps {
}
export class GLBaseMemoryAllocator {
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Allocator */
    object: Gst.Object
    mem_type: string
    mem_map: Gst.MemoryMapFunction
    mem_unmap: Gst.MemoryUnmapFunction
    mem_copy: Gst.MemoryCopyFunction
    mem_share: Gst.MemoryShareFunction
    mem_is_span: Gst.MemoryIsSpanFunction
    mem_map_full: Gst.MemoryMapFullFunction
    mem_unmap_full: Gst.MemoryUnmapFullFunction
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    set_default(): void
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
    /* Virtual methods of GstGL-1.0.GstGL.GLBaseMemoryAllocator */
    vfunc_alloc(params: GLAllocationParams): GLBaseMemory
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of Gst-1.0.Gst.Allocator */
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfunc_free(memory: Gst.Memory): void
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
    connect(sigName: "deep-notify", callback: (($obj: GLBaseMemoryAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLBaseMemoryAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLBaseMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLBaseMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GLBaseMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLBaseMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLBaseMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLBaseMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLBaseMemoryAllocator_ConstructProps)
    _init (config?: GLBaseMemoryAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GLBaseSrc_ConstructProps extends GstBase.PushSrc_ConstructProps {
    timestamp_offset?: number
}
export class GLBaseSrc {
    /* Properties of GstGL-1.0.GstGL.GLBaseSrc */
    timestamp_offset: number
    /* Properties of GstBase-1.0.GstBase.BaseSrc */
    blocksize: number
    do_timestamp: boolean
    num_buffers: number
    typefind: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGL-1.0.GstGL.GLBaseSrc */
    display: GLDisplay
    context: GLContext
    out_info: GstVideo.VideoInfo
    out_caps: Gst.Caps
    running_time: Gst.ClockTime
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
    /* Virtual methods of GstGL-1.0.GstGL.GLBaseSrc */
    vfunc_fill_gl_memory(mem: GLMemory): boolean
    vfunc_gl_start(): boolean
    vfunc_gl_stop(): void
    vfunc_alloc(): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_alloc(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_create(buf: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_create(offset: number, size: number, buf: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    /* Virtual methods of GstBase-1.0.GstBase.PushSrc */
    vfunc_alloc(): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_alloc(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_create(buf: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_create(offset: number, size: number, buf: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    /* Virtual methods of GstBase-1.0.GstBase.BaseSrc */
    vfunc_alloc(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_create(offset: number, size: number, buf: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_do_seek(segment: Gst.Segment): boolean
    vfunc_event(event: Gst.Event): boolean
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fixate(caps: Gst.Caps): Gst.Caps
    vfunc_get_caps(filter?: Gst.Caps | null): Gst.Caps
    vfunc_get_size(): [ /* returnType */ boolean, /* size */ number ]
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
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: GLBaseSrc) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: GLBaseSrc) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: GLBaseSrc, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: GLBaseSrc, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: GLBaseSrc, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: GLBaseSrc, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLBaseSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLBaseSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::timestamp-offset", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp-offset", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::do-timestamp", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-buffers", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::typefind", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLBaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLBaseSrc_ConstructProps)
    _init (config?: GLBaseSrc_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GLBufferAllocator_ConstructProps extends GLBaseMemoryAllocator_ConstructProps {
}
export class GLBufferAllocator {
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Allocator */
    object: Gst.Object
    mem_type: string
    mem_map: Gst.MemoryMapFunction
    mem_unmap: Gst.MemoryUnmapFunction
    mem_copy: Gst.MemoryCopyFunction
    mem_share: Gst.MemoryShareFunction
    mem_is_span: Gst.MemoryIsSpanFunction
    mem_map_full: Gst.MemoryMapFullFunction
    mem_unmap_full: Gst.MemoryUnmapFullFunction
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    set_default(): void
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
    /* Virtual methods of GstGL-1.0.GstGL.GLBufferAllocator */
    vfunc_alloc(params: GLAllocationParams): GLBaseMemory
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of GstGL-1.0.GstGL.GLBaseMemoryAllocator */
    vfunc_alloc(params: GLAllocationParams): GLBaseMemory
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of Gst-1.0.Gst.Allocator */
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfunc_free(memory: Gst.Memory): void
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
    connect(sigName: "deep-notify", callback: (($obj: GLBufferAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLBufferAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLBufferAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLBufferAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GLBufferAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLBufferAllocator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLBufferAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLBufferAllocator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLBufferAllocator_ConstructProps)
    _init (config?: GLBufferAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GLBufferPool_ConstructProps extends Gst.BufferPool_ConstructProps {
}
export class GLBufferPool {
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGL-1.0.GstGL.GLBufferPool */
    bufferpool: Gst.BufferPool
    context: GLContext
    /* Fields of Gst-1.0.Gst.BufferPool */
    object: Gst.Object
    flushing: number
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLBufferPool */
    get_gl_allocation_params(): GLAllocationParams
    /* Methods of Gst-1.0.Gst.BufferPool */
    acquire_buffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    get_config(): Gst.Structure
    get_options(): string[]
    has_option(option: string): boolean
    is_active(): boolean
    release_buffer(buffer: Gst.Buffer): void
    set_active(active: boolean): boolean
    set_config(config: Gst.Structure): boolean
    set_flushing(flushing: boolean): void
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
    /* Virtual methods of Gst-1.0.Gst.BufferPool */
    vfunc_acquire_buffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    vfunc_alloc_buffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    vfunc_flush_start(): void
    vfunc_flush_stop(): void
    vfunc_free_buffer(buffer: Gst.Buffer): void
    vfunc_get_options(): string[]
    vfunc_release_buffer(buffer: Gst.Buffer): void
    vfunc_reset_buffer(buffer: Gst.Buffer): void
    vfunc_set_config(config: Gst.Structure): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
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
    connect(sigName: "deep-notify", callback: (($obj: GLBufferPool, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLBufferPool, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLBufferPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GLBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLBufferPool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLBufferPool_ConstructProps)
    _init (config?: GLBufferPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLBufferPool
    static new(): GLBufferPool
    static $gtype: GObject.Type
}
export interface GLColorConvert_ConstructProps extends Gst.Object_ConstructProps {
}
export class GLColorConvert {
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLColorConvert */
    decide_allocation(query: Gst.Query): boolean
    perform(inbuf: Gst.Buffer): Gst.Buffer
    set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean
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
    connect(sigName: "deep-notify", callback: (($obj: GLColorConvert, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLColorConvert, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLColorConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLColorConvert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GLColorConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLColorConvert, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLColorConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLColorConvert, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLColorConvert_ConstructProps)
    _init (config?: GLColorConvert_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLColorConvert
    static fixate_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, other: Gst.Caps): Gst.Caps
    static transform_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
    static $gtype: GObject.Type
}
export interface GLContext_ConstructProps extends Gst.Object_ConstructProps {
}
export class GLContext {
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGL-1.0.GstGL.GLContext */
    gl_vtable: GLFuncs
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLContext */
    activate(activate: boolean): boolean
    can_share(other_context: GLContext): boolean
    check_feature(feature: string): boolean
    check_framebuffer_status(fbo_target: number): boolean
    check_gl_version(api: GLAPI, maj: number, min: number): boolean
    clear_framebuffer(): void
    clear_shader(): void
    create(other_context?: GLContext | null): boolean
    destroy(): void
    fill_info(): boolean
    get_config(): Gst.Structure | null
    get_display(): GLDisplay
    get_gl_api(): GLAPI
    get_gl_context(): number
    get_gl_platform(): GLPlatform
    get_gl_platform_version(): [ /* major */ number, /* minor */ number ]
    get_gl_version(): [ /* maj */ number, /* min */ number ]
    get_proc_address(name: string): object | null
    get_thread(): GLib.Thread
    get_window(): GLWindow | null
    is_shared(): boolean
    request_config(gl_config?: Gst.Structure | null): boolean
    set_shared_with(share: GLContext): void
    set_window(window: GLWindow): boolean
    supports_glsl_profile_version(version: GLSLVersion, profile: GLSLProfile): boolean
    supports_precision(version: GLSLVersion, profile: GLSLProfile): boolean
    supports_precision_highp(version: GLSLVersion, profile: GLSLProfile): boolean
    swap_buffers(): void
    thread_add(func: GLContextThreadFunc): void
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
    /* Virtual methods of GstGL-1.0.GstGL.GLContext */
    vfunc_activate(activate: boolean): boolean
    vfunc_check_feature(feature: string): boolean
    vfunc_choose_format(): boolean
    vfunc_create_context(gl_api: GLAPI, other_context: GLContext): boolean
    vfunc_destroy_context(): void
    vfunc_get_config(): Gst.Structure | null
    vfunc_get_gl_api(): GLAPI
    vfunc_get_gl_context(): number
    vfunc_get_gl_platform(): GLPlatform
    vfunc_get_gl_platform_version(): [ /* major */ number, /* minor */ number ]
    vfunc_request_config(gl_config?: Gst.Structure | null): boolean
    vfunc_swap_buffers(): void
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
    connect(sigName: "deep-notify", callback: (($obj: GLContext, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLContext, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLContext_ConstructProps)
    _init (config?: GLContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: GLDisplay): GLContext
    static new_wrapped(display: GLDisplay, handle: number, context_type: GLPlatform, available_apis: GLAPI): GLContext
    static default_get_proc_address(gl_api: GLAPI, name: string): object | null
    static get_current(): GLContext
    static get_current_gl_api(platform: GLPlatform): [ /* returnType */ GLAPI, /* major */ number | null, /* minor */ number | null ]
    static get_current_gl_context(context_type: GLPlatform): number
    static get_proc_address_with_platform(context_type: GLPlatform, gl_api: GLAPI, name: string): object | null
    static $gtype: GObject.Type
}
export interface GLDisplay_ConstructProps extends Gst.Object_ConstructProps {
}
export class GLDisplay {
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLDisplay */
    add_context(context: GLContext): boolean
    create_context(other_context: GLContext): [ /* returnType */ boolean, /* p_context */ GLContext ]
    create_window(): GLWindow
    filter_gl_api(gl_api: GLAPI): void
    find_window(data: object | null, compare_func: GLib.CompareFunc): GLWindow
    get_gl_api(): GLAPI
    get_gl_api_unlocked(): GLAPI
    get_gl_context_for_thread(thread: GLib.Thread): GLContext
    get_handle(): number
    get_handle_type(): GLDisplayType
    remove_context(context: GLContext): void
    remove_window(window: GLWindow): boolean
    retrieve_window(data: object | null, compare_func: GLib.CompareFunc): GLWindow
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
    /* Virtual methods of GstGL-1.0.GstGL.GLDisplay */
    vfunc_create_window(): GLWindow
    vfunc_get_handle(): number
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
    /* Signals of GstGL-1.0.GstGL.GLDisplay */
    connect(sigName: "create-context", callback: (($obj: GLDisplay, context: GLContext) => GLContext)): number
    connect_after(sigName: "create-context", callback: (($obj: GLDisplay, context: GLContext) => GLContext)): number
    emit(sigName: "create-context", context: GLContext): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLDisplay, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLDisplay, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GLDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLDisplay, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLDisplay_ConstructProps)
    _init (config?: GLDisplay_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GLDisplay
    static new_with_type(type: GLDisplayType): GLDisplay
    static $gtype: GObject.Type
}
export interface GLFilter_ConstructProps extends GLBaseFilter_ConstructProps {
}
export class GLFilter {
    /* Properties of GstGL-1.0.GstGL.GLBaseFilter */
    readonly context: GLContext
    /* Properties of GstBase-1.0.GstBase.BaseTransform */
    qos: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGL-1.0.GstGL.GLFilter */
    in_info: GstVideo.VideoInfo
    out_info: GstVideo.VideoInfo
    in_texture_target: GLTextureTarget
    out_texture_target: GLTextureTarget
    out_caps: Gst.Caps
    fbo: GLFramebuffer
    /* Fields of GstGL-1.0.GstGL.GLBaseFilter */
    display: GLDisplay
    in_caps: Gst.Caps
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
    /* Methods of GstGL-1.0.GstGL.GLFilter */
    draw_fullscreen_quad(): void
    filter_texture(input: Gst.Buffer, output: Gst.Buffer): boolean
    render_to_target(input: GLMemory, output: GLMemory, func: GLFilterRenderFunc): boolean
    render_to_target_with_shader(input: GLMemory, output: GLMemory, shader: GLShader): void
    /* Methods of GstGL-1.0.GstGL.GLBaseFilter */
    find_gl_context(): boolean
    get_gl_context(): GLContext | null
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
    /* Virtual methods of GstGL-1.0.GstGL.GLFilter */
    vfunc_filter(inbuf: Gst.Buffer, outbuf: Gst.Buffer): boolean
    vfunc_filter_texture(input: GLMemory, output: GLMemory): boolean
    vfunc_init_fbo(): boolean
    vfunc_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfunc_transform_internal_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter_caps: Gst.Caps): Gst.Caps
    vfunc_query(direction: Gst.PadDirection, query: Gst.Query): boolean
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of GstGL-1.0.GstGL.GLBaseFilter */
    vfunc_gl_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfunc_gl_start(): boolean
    vfunc_gl_stop(): void
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
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: GLFilter) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: GLFilter) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: GLFilter, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: GLFilter, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: GLFilter, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: GLFilter, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLFilter, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLFilter, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::context", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLFilter_ConstructProps)
    _init (config?: GLFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static add_rgba_pad_templates(klass: GLFilterClass): void
    static $gtype: GObject.Type
}
export interface GLFramebuffer_ConstructProps extends Gst.Object_ConstructProps {
}
export class GLFramebuffer {
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLFramebuffer */
    attach(attachment_point: number, mem: GLBaseMemory): void
    bind(): void
    draw_to_texture(mem: GLMemory, func: GLFramebufferFunc): boolean
    get_effective_dimensions(): [ /* width */ number | null, /* height */ number | null ]
    get_id(): number
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
    connect(sigName: "deep-notify", callback: (($obj: GLFramebuffer, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLFramebuffer, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLFramebuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GLFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLFramebuffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLFramebuffer_ConstructProps)
    _init (config?: GLFramebuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLFramebuffer
    static new_with_default_depth(context: GLContext, width: number, height: number): GLFramebuffer
    static $gtype: GObject.Type
}
export interface GLMemoryAllocator_ConstructProps extends GLBaseMemoryAllocator_ConstructProps {
}
export class GLMemoryAllocator {
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Allocator */
    object: Gst.Object
    mem_type: string
    mem_map: Gst.MemoryMapFunction
    mem_unmap: Gst.MemoryUnmapFunction
    mem_copy: Gst.MemoryCopyFunction
    mem_share: Gst.MemoryShareFunction
    mem_is_span: Gst.MemoryIsSpanFunction
    mem_map_full: Gst.MemoryMapFullFunction
    mem_unmap_full: Gst.MemoryUnmapFullFunction
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    set_default(): void
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
    /* Virtual methods of GstGL-1.0.GstGL.GLMemoryAllocator */
    vfunc_alloc(params: GLAllocationParams): GLBaseMemory
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of GstGL-1.0.GstGL.GLBaseMemoryAllocator */
    vfunc_alloc(params: GLAllocationParams): GLBaseMemory
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of Gst-1.0.Gst.Allocator */
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfunc_free(memory: Gst.Memory): void
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
    connect(sigName: "deep-notify", callback: (($obj: GLMemoryAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLMemoryAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GLMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLMemoryAllocator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLMemoryAllocator_ConstructProps)
    _init (config?: GLMemoryAllocator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(context: GLContext): GLMemoryAllocator
    static $gtype: GObject.Type
}
export interface GLMemoryPBOAllocator_ConstructProps extends GLMemoryAllocator_ConstructProps {
}
export class GLMemoryPBOAllocator {
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Allocator */
    object: Gst.Object
    mem_type: string
    mem_map: Gst.MemoryMapFunction
    mem_unmap: Gst.MemoryUnmapFunction
    mem_copy: Gst.MemoryCopyFunction
    mem_share: Gst.MemoryShareFunction
    mem_is_span: Gst.MemoryIsSpanFunction
    mem_map_full: Gst.MemoryMapFullFunction
    mem_unmap_full: Gst.MemoryUnmapFullFunction
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    set_default(): void
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
    /* Virtual methods of GstGL-1.0.GstGL.GLMemoryPBOAllocator */
    vfunc_alloc(params: GLAllocationParams): GLBaseMemory
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of GstGL-1.0.GstGL.GLMemoryAllocator */
    vfunc_alloc(params: GLAllocationParams): GLBaseMemory
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of GstGL-1.0.GstGL.GLBaseMemoryAllocator */
    vfunc_alloc(params: GLAllocationParams): GLBaseMemory
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of Gst-1.0.Gst.Allocator */
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfunc_free(memory: Gst.Memory): void
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
    connect(sigName: "deep-notify", callback: (($obj: GLMemoryPBOAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLMemoryPBOAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLMemoryPBOAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLMemoryPBOAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GLMemoryPBOAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLMemoryPBOAllocator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLMemoryPBOAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLMemoryPBOAllocator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLMemoryPBOAllocator_ConstructProps)
    _init (config?: GLMemoryPBOAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GLOverlayCompositor_ConstructProps extends Gst.Object_ConstructProps {
    yinvert?: boolean
}
export class GLOverlayCompositor {
    /* Properties of GstGL-1.0.GstGL.GLOverlayCompositor */
    yinvert: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLOverlayCompositor */
    draw_overlays(): void
    free_overlays(): void
    upload_overlays(buf: Gst.Buffer): void
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
    connect(sigName: "deep-notify", callback: (($obj: GLOverlayCompositor, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLOverlayCompositor, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::yinvert", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yinvert", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLOverlayCompositor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLOverlayCompositor_ConstructProps)
    _init (config?: GLOverlayCompositor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLOverlayCompositor
    static add_caps(caps: Gst.Caps): Gst.Caps
    static $gtype: GObject.Type
}
export interface GLRenderbufferAllocator_ConstructProps extends GLBaseMemoryAllocator_ConstructProps {
}
export class GLRenderbufferAllocator {
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Allocator */
    object: Gst.Object
    mem_type: string
    mem_map: Gst.MemoryMapFunction
    mem_unmap: Gst.MemoryUnmapFunction
    mem_copy: Gst.MemoryCopyFunction
    mem_share: Gst.MemoryShareFunction
    mem_is_span: Gst.MemoryIsSpanFunction
    mem_map_full: Gst.MemoryMapFullFunction
    mem_unmap_full: Gst.MemoryUnmapFullFunction
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Allocator */
    alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    free(memory: Gst.Memory): void
    set_default(): void
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
    /* Virtual methods of GstGL-1.0.GstGL.GLRenderbufferAllocator */
    vfunc_alloc(params: GLAllocationParams): GLBaseMemory
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of GstGL-1.0.GstGL.GLBaseMemoryAllocator */
    vfunc_alloc(params: GLAllocationParams): GLBaseMemory
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    /* Virtual methods of Gst-1.0.Gst.Allocator */
    vfunc_alloc(size: number, params?: Gst.AllocationParams | null): Gst.Memory | null
    vfunc_free(memory: Gst.Memory): void
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
    connect(sigName: "deep-notify", callback: (($obj: GLRenderbufferAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLRenderbufferAllocator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLRenderbufferAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLRenderbufferAllocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GLRenderbufferAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLRenderbufferAllocator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLRenderbufferAllocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLRenderbufferAllocator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLRenderbufferAllocator_ConstructProps)
    _init (config?: GLRenderbufferAllocator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GLSLStage_ConstructProps extends Gst.Object_ConstructProps {
}
export class GLSLStage {
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLSLStage */
    compile(): boolean
    get_handle(): number
    get_profile(): GLSLProfile
    get_shader_type(): number
    get_version(): GLSLVersion
    set_strings(version: GLSLVersion, profile: GLSLProfile, str: string[]): boolean
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
    connect(sigName: "deep-notify", callback: (($obj: GLSLStage, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLSLStage, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLSLStage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLSLStage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GLSLStage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLSLStage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLSLStage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLSLStage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLSLStage_ConstructProps)
    _init (config?: GLSLStage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext, type: number): GLSLStage
    static new_default_fragment(context: GLContext): GLSLStage
    static new_default_vertex(context: GLContext): GLSLStage
    static new_with_string(context: GLContext, type: number, version: GLSLVersion, profile: GLSLProfile, str: string): GLSLStage
    static new_with_strings(context: GLContext, type: number, version: GLSLVersion, profile: GLSLProfile, str: string[]): GLSLStage
    static $gtype: GObject.Type
}
export interface GLShader_ConstructProps extends Gst.Object_ConstructProps {
}
export class GLShader {
    /* Properties of GstGL-1.0.GstGL.GLShader */
    readonly linked: boolean
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGL-1.0.GstGL.GLShader */
    context: GLContext
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLShader */
    attach(stage: GLSLStage): boolean
    attach_unlocked(stage: GLSLStage): boolean
    bind_attribute_location(index: number, name: string): void
    bind_frag_data_location(index: number, name: string): void
    compile_attach_stage(stage: GLSLStage): boolean
    detach(stage: GLSLStage): void
    detach_unlocked(stage: GLSLStage): void
    get_attribute_location(name: string): number
    get_program_handle(): number
    is_linked(): boolean
    link(): boolean
    release(): void
    release_unlocked(): void
    set_uniform_1f(name: string, value: number): void
    set_uniform_1fv(name: string, value: number[]): void
    set_uniform_1i(name: string, value: number): void
    set_uniform_1iv(name: string, value: number[]): void
    set_uniform_2f(name: string, v0: number, v1: number): void
    set_uniform_2fv(name: string, value: number[]): void
    set_uniform_2i(name: string, v0: number, v1: number): void
    set_uniform_2iv(name: string, value: number[]): void
    set_uniform_3f(name: string, v0: number, v1: number, v2: number): void
    set_uniform_3fv(name: string, value: number[]): void
    set_uniform_3i(name: string, v0: number, v1: number, v2: number): void
    set_uniform_3iv(name: string, value: number[]): void
    set_uniform_4f(name: string, v0: number, v1: number, v2: number, v3: number): void
    set_uniform_4fv(name: string, value: number[]): void
    set_uniform_4i(name: string, v0: number, v1: number, v2: number, v3: number): void
    set_uniform_4iv(name: string, value: number[]): void
    set_uniform_matrix_2fv(name: string, count: number, transpose: boolean, value: number): void
    set_uniform_matrix_2x3fv(name: string, count: number, transpose: boolean, value: number): void
    set_uniform_matrix_2x4fv(name: string, count: number, transpose: boolean, value: number): void
    set_uniform_matrix_3fv(name: string, count: number, transpose: boolean, value: number): void
    set_uniform_matrix_3x2fv(name: string, count: number, transpose: boolean, value: number): void
    set_uniform_matrix_3x4fv(name: string, count: number, transpose: boolean, value: number): void
    set_uniform_matrix_4fv(name: string, count: number, transpose: boolean, value: number): void
    set_uniform_matrix_4x2fv(name: string, count: number, transpose: boolean, value: number): void
    set_uniform_matrix_4x3fv(name: string, count: number, transpose: boolean, value: number): void
    use(): void
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
    connect(sigName: "deep-notify", callback: (($obj: GLShader, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLShader, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::linked", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linked", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLShader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLShader_ConstructProps)
    _init (config?: GLShader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLShader
    static new_default(context: GLContext): GLShader
    static string_fragment_external_oes_get_default(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string
    static string_fragment_get_default(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string
    static string_get_highest_precision(context: GLContext, version: GLSLVersion, profile: GLSLProfile): string
    static $gtype: GObject.Type
}
export interface GLUpload_ConstructProps extends Gst.Object_ConstructProps {
}
export class GLUpload {
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGL-1.0.GstGL.GLUpload */
    context: GLContext
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLUpload */
    get_caps(): [ /* in_caps */ Gst.Caps | null, /* out_caps */ Gst.Caps | null ]
    perform_with_buffer(buffer: Gst.Buffer): [ /* returnType */ GLUploadReturn, /* outbuf_ptr */ Gst.Buffer ]
    propose_allocation(decide_query: Gst.Query | null, query: Gst.Query): void
    set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean
    set_context(context: GLContext): void
    transform_caps(context: GLContext, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
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
    connect(sigName: "deep-notify", callback: (($obj: GLUpload, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLUpload, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLUpload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLUpload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GLUpload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLUpload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLUpload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLUpload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLUpload_ConstructProps)
    _init (config?: GLUpload_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext): GLUpload
    static get_input_template_caps(): Gst.Caps
    static $gtype: GObject.Type
}
export interface GLViewConvert_ConstructProps extends Gst.Object_ConstructProps {
    downmix_mode?: GLStereoDownmix
    input_flags_override?: GstVideo.VideoMultiviewFlags
    input_mode_override?: GstVideo.VideoMultiviewMode
    output_flags_override?: GstVideo.VideoMultiviewFlags
    output_mode_override?: GstVideo.VideoMultiviewMode
}
export class GLViewConvert {
    /* Properties of GstGL-1.0.GstGL.GLViewConvert */
    downmix_mode: GLStereoDownmix
    input_flags_override: GstVideo.VideoMultiviewFlags
    input_mode_override: GstVideo.VideoMultiviewMode
    output_flags_override: GstVideo.VideoMultiviewFlags
    output_mode_override: GstVideo.VideoMultiviewMode
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstGL-1.0.GstGL.GLViewConvert */
    object: Gst.Object
    context: GLContext
    shader: GLShader
    in_info: GstVideo.VideoInfo
    out_info: GstVideo.VideoInfo
    from_texture_target: GLTextureTarget
    to_texture_target: GLTextureTarget
    caps_passthrough: boolean
    initted: boolean
    reconfigure: boolean
    fbo: GLFramebuffer
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLViewConvert */
    fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps
    get_output(): [ /* returnType */ Gst.FlowReturn, /* outbuf_ptr */ Gst.Buffer ]
    perform(inbuf: Gst.Buffer): Gst.Buffer
    reset(): void
    set_caps(in_caps: Gst.Caps, out_caps: Gst.Caps): boolean
    set_context(context: GLContext): void
    submit_input_buffer(is_discont: boolean, input: Gst.Buffer): Gst.FlowReturn
    transform_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
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
    connect(sigName: "deep-notify", callback: (($obj: GLViewConvert, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLViewConvert, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::downmix-mode", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::downmix-mode", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-flags-override", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-flags-override", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-mode-override", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-mode-override", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-flags-override", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-flags-override", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-mode-override", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-mode-override", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLViewConvert, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLViewConvert_ConstructProps)
    _init (config?: GLViewConvert_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GLViewConvert
    static $gtype: GObject.Type
}
export interface GLWindow_ConstructProps extends Gst.Object_ConstructProps {
}
export class GLWindow {
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstGL-1.0.GstGL.GLWindow */
    controls_viewport(): boolean
    draw(): void
    get_context(): GLContext
    get_display(): number
    get_surface_dimensions(): [ /* width */ number, /* height */ number ]
    get_window_handle(): number
    handle_events(handle_events: boolean): void
    has_output_surface(): boolean
    queue_resize(): void
    quit(): void
    resize(width: number, height: number): void
    run(): void
    send_key_event(event_type: string, key_str: string): void
    send_message(callback: GLWindowCB): void
    send_message_async(callback: GLWindowCB): void
    send_mouse_event(event_type: string, button: number, posx: number, posy: number): void
    send_scroll_event(posx: number, posy: number, delta_x: number, delta_y: number): void
    set_close_callback(callback: GLWindowCB): void
    set_draw_callback(callback: GLWindowCB): void
    set_preferred_size(width: number, height: number): void
    set_render_rectangle(x: number, y: number, width: number, height: number): boolean
    set_resize_callback(callback: GLWindowResizeCB): void
    set_window_handle(handle: number): void
    show(): void
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
    /* Virtual methods of GstGL-1.0.GstGL.GLWindow */
    vfunc_close(): void
    vfunc_controls_viewport(): boolean
    vfunc_draw(): void
    vfunc_get_display(): number
    vfunc_get_window_handle(): number
    vfunc_handle_events(handle_events: boolean): void
    vfunc_has_output_surface(): boolean
    vfunc_open(): boolean
    vfunc_queue_resize(): void
    vfunc_quit(): void
    vfunc_run(): void
    vfunc_send_message(callback: GLWindowCB): void
    vfunc_send_message_async(callback: GLWindowCB): void
    vfunc_set_preferred_size(width: number, height: number): void
    vfunc_set_render_rectangle(x: number, y: number, width: number, height: number): boolean
    vfunc_set_window_handle(handle: number): void
    vfunc_show(): void
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
    /* Signals of GstGL-1.0.GstGL.GLWindow */
    connect(sigName: "key-event", callback: (($obj: GLWindow, id: string, key: string) => void)): number
    connect_after(sigName: "key-event", callback: (($obj: GLWindow, id: string, key: string) => void)): number
    emit(sigName: "key-event", id: string, key: string): void
    connect(sigName: "mouse-event", callback: (($obj: GLWindow, id: string, button: number, x: number, y: number) => void)): number
    connect_after(sigName: "mouse-event", callback: (($obj: GLWindow, id: string, button: number, x: number, y: number) => void)): number
    emit(sigName: "mouse-event", id: string, button: number, x: number, y: number): void
    connect(sigName: "scroll-event", callback: (($obj: GLWindow, x: number, y: number, delta_x: number, delta_y: number) => void)): number
    connect_after(sigName: "scroll-event", callback: (($obj: GLWindow, x: number, y: number, delta_x: number, delta_y: number) => void)): number
    emit(sigName: "scroll-event", x: number, y: number, delta_x: number, delta_y: number): void
    connect(sigName: "window-handle-changed", callback: (($obj: GLWindow) => void)): number
    connect_after(sigName: "window-handle-changed", callback: (($obj: GLWindow) => void)): number
    emit(sigName: "window-handle-changed"): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GLWindow, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GLWindow, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GLWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GLWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GLWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GLWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GLWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLWindow_ConstructProps)
    _init (config?: GLWindow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: GLDisplay): GLWindow
    static $gtype: GObject.Type
}
export class GLAllocationParams {
    /* Fields of GstGL-1.0.GstGL.GLAllocationParams */
    struct_size: number
    copy: GLAllocationParamsCopyFunc
    free: GLAllocationParamsFreeFunc
    alloc_flags: number
    alloc_size: number
    alloc_params: Gst.AllocationParams
    context: GLContext
    notify: GLib.DestroyNotify
    user_data: object
    wrapped_data: object
    gl_handle: object
    /* Methods of GstGL-1.0.GstGL.GLAllocationParams */
    copy_data(dest: GLAllocationParams): void
    free_data(): void
    static name: string
}
export class GLAsyncDebug {
    /* Methods of GstGL-1.0.GstGL.GLAsyncDebug */
    free(): void
    freeze(): void
    init(): void
    output_log_msg(): void
    thaw(): void
    unset(): void
    static name: string
}
export abstract class GLBaseFilterClass {
    /* Fields of GstGL-1.0.GstGL.GLBaseFilterClass */
    parent_class: GstBase.BaseTransformClass
    supported_gl_api: GLAPI
    gl_start: (filter: GLBaseFilter) => boolean
    gl_stop: (filter: GLBaseFilter) => void
    gl_set_caps: (filter: GLBaseFilter, incaps: Gst.Caps, outcaps: Gst.Caps) => boolean
    static name: string
}
export class GLBaseFilterPrivate {
    static name: string
}
export class GLBaseMemory {
    /* Fields of GstGL-1.0.GstGL.GLBaseMemory */
    mem: Gst.Memory
    context: GLContext
    lock: GLib.Mutex
    map_flags: Gst.MapFlags
    map_count: number
    gl_map_count: number
    data: object
    query: GLQuery
    /* Methods of GstGL-1.0.GstGL.GLBaseMemory */
    alloc_data(): boolean
    init(allocator: Gst.Allocator, parent: Gst.Memory | null, context: GLContext, params: Gst.AllocationParams | null, size: number, user_data?: object | null, notify?: GLib.DestroyNotify | null): void
    memcpy(dest: GLBaseMemory, offset: number, size: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(allocator: GLBaseMemoryAllocator, params: GLAllocationParams): GLBaseMemory
    static init_once(): void
}
export abstract class GLBaseMemoryAllocatorClass {
    /* Fields of GstGL-1.0.GstGL.GLBaseMemoryAllocatorClass */
    parent_class: Gst.AllocatorClass
    alloc: GLBaseMemoryAllocatorAllocFunction
    create: GLBaseMemoryAllocatorCreateFunction
    map: GLBaseMemoryAllocatorMapFunction
    unmap: GLBaseMemoryAllocatorUnmapFunction
    copy: GLBaseMemoryAllocatorCopyFunction
    destroy: GLBaseMemoryAllocatorDestroyFunction
    static name: string
}
export abstract class GLBaseSrcClass {
    /* Fields of GstGL-1.0.GstGL.GLBaseSrcClass */
    parent_class: GstBase.PushSrcClass
    supported_gl_api: GLAPI
    gl_start: (src: GLBaseSrc) => boolean
    gl_stop: (src: GLBaseSrc) => void
    fill_gl_memory: (src: GLBaseSrc, mem: GLMemory) => boolean
    static name: string
}
export class GLBaseSrcPrivate {
    static name: string
}
export class GLBuffer {
    /* Fields of GstGL-1.0.GstGL.GLBuffer */
    mem: GLBaseMemory
    id: number
    target: number
    usage_hints: number
    static name: string
    /* Static methods and pseudo-constructors */
    static init_once(): void
}
export class GLBufferAllocationParams {
    /* Fields of GstGL-1.0.GstGL.GLBufferAllocationParams */
    parent: GLAllocationParams
    gl_target: number
    gl_usage: number
    static name: string
    static new(context: GLContext, alloc_size: number, alloc_params: Gst.AllocationParams | null, gl_target: number, gl_usage: number): GLBufferAllocationParams
    constructor(context: GLContext, alloc_size: number, alloc_params: Gst.AllocationParams | null, gl_target: number, gl_usage: number)
    /* Static methods and pseudo-constructors */
    static new(context: GLContext, alloc_size: number, alloc_params: Gst.AllocationParams | null, gl_target: number, gl_usage: number): GLBufferAllocationParams
}
export abstract class GLBufferAllocatorClass {
    /* Fields of GstGL-1.0.GstGL.GLBufferAllocatorClass */
    parent_class: GLBaseMemoryAllocatorClass
    static name: string
}
export abstract class GLBufferPoolClass {
    /* Fields of GstGL-1.0.GstGL.GLBufferPoolClass */
    parent_class: Gst.BufferPoolClass
    static name: string
}
export class GLBufferPoolPrivate {
    static name: string
}
export abstract class GLColorConvertClass {
    static name: string
}
export class GLColorConvertPrivate {
    static name: string
}
export abstract class GLContextClass {
    /* Fields of GstGL-1.0.GstGL.GLContextClass */
    parent_class: Gst.ObjectClass
    get_current_context: () => number
    get_gl_context: (context: GLContext) => number
    get_gl_api: (context: GLContext) => GLAPI
    get_gl_platform: (context: GLContext) => GLPlatform
    get_proc_address: (gl_api: GLAPI, name: string) => object
    activate: (context: GLContext, activate: boolean) => boolean
    choose_format: (context: GLContext) => boolean
    create_context: (context: GLContext, gl_api: GLAPI, other_context: GLContext) => boolean
    destroy_context: (context: GLContext) => void
    swap_buffers: (context: GLContext) => void
    check_feature: (context: GLContext, feature: string) => boolean
    get_gl_platform_version: (context: GLContext) => [ /* major */ number, /* minor */ number ]
    get_config: (context: GLContext) => Gst.Structure | null
    request_config: (context: GLContext, gl_config?: Gst.Structure | null) => boolean
    static name: string
}
export class GLContextPrivate {
    static name: string
}
export abstract class GLDisplayClass {
    /* Fields of GstGL-1.0.GstGL.GLDisplayClass */
    object_class: Gst.ObjectClass
    get_handle: (display: GLDisplay) => number
    create_window: (display: GLDisplay) => GLWindow
    static name: string
}
export class GLDisplayPrivate {
    static name: string
}
export abstract class GLFilterClass {
    /* Fields of GstGL-1.0.GstGL.GLFilterClass */
    parent_class: GLBaseFilterClass
    set_caps: (filter: GLFilter, incaps: Gst.Caps, outcaps: Gst.Caps) => boolean
    filter: (filter: GLFilter, inbuf: Gst.Buffer, outbuf: Gst.Buffer) => boolean
    filter_texture: (filter: GLFilter, input: GLMemory, output: GLMemory) => boolean
    init_fbo: (filter: GLFilter) => boolean
    transform_internal_caps: (filter: GLFilter, direction: Gst.PadDirection, caps: Gst.Caps, filter_caps: Gst.Caps) => Gst.Caps
    static name: string
}
export abstract class GLFramebufferClass {
    static name: string
}
export class GLFramebufferPrivate {
    static name: string
}
export class GLFuncs {
    static name: string
}
export class GLMemory {
    /* Fields of GstGL-1.0.GstGL.GLMemory */
    mem: GLBaseMemory
    tex_id: number
    tex_target: GLTextureTarget
    tex_format: GLFormat
    info: GstVideo.VideoInfo
    valign: GstVideo.VideoAlignment
    plane: number
    tex_scaling: number[]
    texture_wrapped: boolean
    unpack_length: number
    tex_width: number
    /* Methods of GstGL-1.0.GstGL.GLMemory */
    copy_into(tex_id: number, target: GLTextureTarget, tex_format: GLFormat, width: number, height: number): boolean
    copy_teximage(tex_id: number, out_target: GLTextureTarget, out_tex_format: GLFormat, out_width: number, out_height: number): boolean
    get_texture_format(): GLFormat
    get_texture_height(): number
    get_texture_id(): number
    get_texture_target(): GLTextureTarget
    get_texture_width(): number
    init(allocator: Gst.Allocator, parent: Gst.Memory | null, context: GLContext, target: GLTextureTarget, tex_format: GLFormat, params: Gst.AllocationParams | null, info: GstVideo.VideoInfo, plane: number, valign?: GstVideo.VideoAlignment | null, user_data?: object | null, notify?: GLib.DestroyNotify | null): void
    read_pixels(write_pointer?: object | null): boolean
    texsubimage(read_pointer?: object | null): void
    static name: string
    /* Static methods and pseudo-constructors */
    static init_once(): void
}
export abstract class GLMemoryAllocatorClass {
    /* Fields of GstGL-1.0.GstGL.GLMemoryAllocatorClass */
    map: GLBaseMemoryAllocatorMapFunction
    copy: GLBaseMemoryAllocatorCopyFunction
    unmap: GLBaseMemoryAllocatorUnmapFunction
    static name: string
}
export class GLMemoryPBO {
    /* Methods of GstGL-1.0.GstGL.GLMemoryPBO */
    copy_into_texture(tex_id: number, target: GLTextureTarget, tex_format: GLFormat, width: number, height: number, stride: number, respecify: boolean): boolean
    download_transfer(): void
    upload_transfer(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static init_once(): void
}
export abstract class GLMemoryPBOAllocatorClass {
    /* Fields of GstGL-1.0.GstGL.GLMemoryPBOAllocatorClass */
    parent_class: GLMemoryAllocatorClass
    static name: string
}
export abstract class GLOverlayCompositorClass {
    /* Fields of GstGL-1.0.GstGL.GLOverlayCompositorClass */
    object_class: Gst.ObjectClass
    static name: string
}
export class GLQuery {
    /* Methods of GstGL-1.0.GstGL.GLQuery */
    counter(): void
    end(): void
    free(): void
    init(context: GLContext, query_type: GLQueryType): void
    result(): number
    start(): void
    unset(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static local_gl_context(element: Gst.Element, direction: Gst.PadDirection, context_ptr: GLContext): [ /* returnType */ boolean, /* context_ptr */ GLContext ]
}
export class GLRenderbuffer {
    /* Fields of GstGL-1.0.GstGL.GLRenderbuffer */
    renderbuffer_id: number
    renderbuffer_format: GLFormat
    width: number
    height: number
    renderbuffer_wrapped: boolean
    /* Methods of GstGL-1.0.GstGL.GLRenderbuffer */
    get_format(): GLFormat
    get_height(): number
    get_id(): number
    get_width(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static init_once(): void
}
export class GLRenderbufferAllocationParams {
    /* Fields of GstGL-1.0.GstGL.GLRenderbufferAllocationParams */
    renderbuffer_format: GLFormat
    width: number
    height: number
    static name: string
    static new(context: GLContext, alloc_params: Gst.AllocationParams | null, renderbuffer_format: GLFormat, width: number, height: number): GLRenderbufferAllocationParams
    constructor(context: GLContext, alloc_params: Gst.AllocationParams | null, renderbuffer_format: GLFormat, width: number, height: number)
    /* Static methods and pseudo-constructors */
    static new(context: GLContext, alloc_params: Gst.AllocationParams | null, renderbuffer_format: GLFormat, width: number, height: number): GLRenderbufferAllocationParams
    static new_wrapped(context: GLContext, alloc_params: Gst.AllocationParams | null, renderbuffer_format: GLFormat, width: number, height: number, gl_handle?: object | null, user_data?: object | null, notify?: GLib.DestroyNotify | null): GLRenderbufferAllocationParams
}
export abstract class GLRenderbufferAllocatorClass {
    /* Fields of GstGL-1.0.GstGL.GLRenderbufferAllocatorClass */
    parent_class: GLBaseMemoryAllocatorClass
    static name: string
}
export abstract class GLSLStageClass {
    static name: string
}
export class GLSLStagePrivate {
    static name: string
}
export abstract class GLShaderClass {
    static name: string
}
export class GLShaderPrivate {
    static name: string
}
export class GLSyncMeta {
    /* Fields of GstGL-1.0.GstGL.GLSyncMeta */
    parent: Gst.Meta
    context: GLContext
    data: object
    set_sync: (sync: GLSyncMeta, context: GLContext) => void
    set_sync_gl: (sync: GLSyncMeta, context: GLContext) => void
    wait: (sync: GLSyncMeta, context: GLContext) => void
    wait_gl: (sync: GLSyncMeta, context: GLContext) => void
    wait_cpu: (sync: GLSyncMeta, context: GLContext) => void
    wait_cpu_gl: (sync: GLSyncMeta, context: GLContext) => void
    copy: (src: GLSyncMeta, sbuffer: Gst.Buffer, dest: GLSyncMeta, dbuffer: Gst.Buffer) => void
    free: (sync: GLSyncMeta, context: GLContext) => void
    free_gl: (sync: GLSyncMeta, context: GLContext) => void
    /* Methods of GstGL-1.0.GstGL.GLSyncMeta */
    set_sync_point(context: GLContext): void
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
export abstract class GLUploadClass {
    /* Fields of GstGL-1.0.GstGL.GLUploadClass */
    object_class: Gst.ObjectClass
    static name: string
}
export class GLUploadPrivate {
    static name: string
}
export class GLVideoAllocationParams {
    /* Fields of GstGL-1.0.GstGL.GLVideoAllocationParams */
    parent: GLAllocationParams
    v_info: GstVideo.VideoInfo
    plane: number
    valign: GstVideo.VideoAlignment
    target: GLTextureTarget
    tex_format: GLFormat
    /* Methods of GstGL-1.0.GstGL.GLVideoAllocationParams */
    copy_data(dest_vid: GLVideoAllocationParams): void
    free_data(): void
    static name: string
    static new(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat): GLVideoAllocationParams
    constructor(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat)
    /* Static methods and pseudo-constructors */
    static new(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat): GLVideoAllocationParams
    static new_wrapped_data(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat, wrapped_data?: object | null, user_data?: object | null, notify?: GLib.DestroyNotify | null): GLVideoAllocationParams
    static new_wrapped_gl_handle(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat, gl_handle?: object | null, user_data?: object | null, notify?: GLib.DestroyNotify | null): GLVideoAllocationParams
    static new_wrapped_texture(context: GLContext, alloc_params: Gst.AllocationParams | null, v_info: GstVideo.VideoInfo, plane: number, valign: GstVideo.VideoAlignment | null, target: GLTextureTarget, tex_format: GLFormat, tex_id: number, user_data?: object | null, notify?: GLib.DestroyNotify | null): GLVideoAllocationParams
}
export abstract class GLViewConvertClass {
    static name: string
}
export class GLViewConvertPrivate {
    static name: string
}
export abstract class GLWindowClass {
    /* Fields of GstGL-1.0.GstGL.GLWindowClass */
    parent_class: Gst.ObjectClass
    get_display: (window: GLWindow) => number
    set_window_handle: (window: GLWindow, handle: number) => void
    get_window_handle: (window: GLWindow) => number
    draw: (window: GLWindow) => void
    run: (window: GLWindow) => void
    quit: (window: GLWindow) => void
    send_message: (window: GLWindow, callback: GLWindowCB) => void
    send_message_async: (window: GLWindow, callback: GLWindowCB) => void
    open: (window: GLWindow) => boolean
    close: (window: GLWindow) => void
    handle_events: (window: GLWindow, handle_events: boolean) => void
    set_preferred_size: (window: GLWindow, width: number, height: number) => void
    show: (window: GLWindow) => void
    set_render_rectangle: (window: GLWindow, x: number, y: number, width: number, height: number) => boolean
    queue_resize: (window: GLWindow) => void
    controls_viewport: (window: GLWindow) => boolean
    has_output_surface: (window: GLWindow) => boolean
    static name: string
}
export class GLWindowPrivate {
    static name: string
}