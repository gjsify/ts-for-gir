/**
 * Cogl-1.0
 */

import * as Gjs from './Gjs';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as GL from './GL-1.0';

export enum AttributeType {
    BYTE,
    UNSIGNED_BYTE,
    SHORT,
    UNSIGNED_SHORT,
    FLOAT,
}
export enum BitmapError {
    FAILED,
    UNKNOWN_TYPE,
    CORRUPT_IMAGE,
}
export enum BlendStringError {
    PARSE_ERROR,
    ARGUMENT_PARSE_ERROR,
    INVALID_ERROR,
    GPU_UNSUPPORTED_ERROR,
}
export enum DepthTestFunction {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
export enum FilterReturn {
    CONTINUE,
    REMOVE,
}
export enum FogMode {
    LINEAR,
    EXPONENTIAL,
    EXPONENTIAL_SQUARED,
}
export enum IndicesType {
    BYTE,
    SHORT,
    INT,
}
export enum MaterialAlphaFunc {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
export enum MaterialFilter {
    NEAREST,
    LINEAR,
    NEAREST_MIPMAP_NEAREST,
    LINEAR_MIPMAP_NEAREST,
    NEAREST_MIPMAP_LINEAR,
    LINEAR_MIPMAP_LINEAR,
}
export enum MaterialLayerType {
    TEXTURE,
}
export enum MaterialWrapMode {
    REPEAT,
    CLAMP_TO_EDGE,
    AUTOMATIC,
}
export enum PixelFormat {
    ANY,
    A_8,
    RGB_565,
    RGBA_4444,
    RGBA_5551,
    YUV,
    G_8,
    RG_88,
    RGB_888,
    BGR_888,
    RGBA_8888,
    BGRA_8888,
    ARGB_8888,
    ABGR_8888,
    RGBA_1010102,
    BGRA_1010102,
    ARGB_2101010,
    ABGR_2101010,
    RGBA_8888_PRE,
    BGRA_8888_PRE,
    ARGB_8888_PRE,
    ABGR_8888_PRE,
    RGBA_4444_PRE,
    RGBA_5551_PRE,
    RGBA_1010102_PRE,
    BGRA_1010102_PRE,
    ARGB_2101010_PRE,
    ABGR_2101010_PRE,
    DEPTH_16,
    DEPTH_32,
    DEPTH_24_STENCIL_8,
}
export enum RendererError {
    XLIB_DISPLAY_OPEN,
    BAD_CONSTRAINT,
}
export enum ShaderType {
    VERTEX,
    FRAGMENT,
}
export enum StereoMode {
    BOTH,
    LEFT,
    RIGHT,
}
export enum SystemError {
    COGL_SYSTEM_ERROR_UNSUPPORTED,
    COGL_SYSTEM_ERROR_NO_MEMORY,
}
export enum TextureComponents {
    A,
    RG,
    RGB,
    RGBA,
    DEPTH,
}
export enum TextureError {
    SIZE,
    FORMAT,
    BAD_PARAMETER,
    TYPE,
}
export enum TextureType {
    /* 2D (invalid, starts with a number) */
    /* 3D (invalid, starts with a number) */
    RECTANGLE,
}
export enum VerticesMode {
    POINTS,
    LINES,
    LINE_LOOP,
    LINE_STRIP,
    TRIANGLES,
    TRIANGLE_STRIP,
    TRIANGLE_FAN,
}
export enum Winding {
    CLOCKWISE,
    COUNTER_CLOCKWISE,
}
export enum WinsysFeature {
    MULTIPLE_ONSCREEN,
    SWAP_THROTTLE,
    VBLANK_COUNTER,
    VBLANK_WAIT,
    TEXTURE_FROM_PIXMAP,
    SWAP_BUFFERS_EVENT,
    SWAP_REGION,
    SWAP_REGION_THROTTLE,
    SWAP_REGION_SYNCHRONIZED,
    BUFFER_AGE,
    SYNC_AND_COMPLETE_EVENT,
    N_FEATURES,
}
export enum BufferBit {
    COLOR,
    DEPTH,
    STENCIL,
}
export enum BufferTarget {
    WINDOW_BUFFER,
    OFFSCREEN_BUFFER,
}
export enum ColorMask {
    NONE,
    RED,
    GREEN,
    BLUE,
    ALPHA,
    ALL,
}
export enum FeatureFlags {
    TEXTURE_RECTANGLE,
    TEXTURE_NPOT,
    TEXTURE_YUV,
    TEXTURE_READ_PIXELS,
    SHADERS_GLSL,
    OFFSCREEN,
    OFFSCREEN_MULTISAMPLE,
    OFFSCREEN_BLIT,
    FOUR_CLIP_PLANES,
    STENCIL_BUFFER,
    VBOS,
    PBOS,
    UNSIGNED_INT_INDICES,
    DEPTH_RANGE,
    TEXTURE_NPOT_BASIC,
    TEXTURE_NPOT_MIPMAP,
    TEXTURE_NPOT_REPEAT,
    POINT_SPRITE,
    TEXTURE_3D,
    SHADERS_ARBFP,
    MAP_BUFFER_FOR_READ,
    MAP_BUFFER_FOR_WRITE,
    ONSCREEN_MULTIPLE,
    DEPTH_TEXTURE,
}
export enum ReadPixelsFlags {
    COLOR_BUFFER,
}
export enum TextureFlags {
    NONE,
    NO_AUTO_MIPMAP,
    NO_SLICING,
    NO_ATLAS,
}
export const AFIRST_BIT: number
export const A_BIT: number
export const BGR_BIT: number
export const DEPTH_BIT: number
export const FIXED_0_5: number
export const FIXED_1: number
export const FIXED_2_PI: number
export const FIXED_BITS: number
export const FIXED_EPSILON: number
export const FIXED_MAX: number
export const FIXED_MIN: number
export const FIXED_PI: number
export const FIXED_PI_2: number
export const FIXED_PI_4: number
export const FIXED_Q: number
export const PREMULT_BIT: number
export const RADIANS_TO_DEGREES: number
export const SQRTI_ARG_10_PERCENT: number
export const SQRTI_ARG_5_PERCENT: number
export const SQRTI_ARG_MAX: number
export const STENCIL_BIT: number
export const TEXTURE_MAX_WASTE: number
export function begin_gl(): void
export function bitmap_error_quark(): number
export function blend_string_error_quark(): number
export function check_extension(name: string, ext: string): Bool
export function clear(color: Color, buffers: number): void
export function clip_ensure(): void
export function clip_pop(): void
export function clip_push(x_offset: number, y_offset: number, width: number, height: number): void
export function clip_push_rectangle(x0: number, y0: number, x1: number, y1: number): void
export function clip_push_window_rect(x_offset: number, y_offset: number, width: number, height: number): void
export function clip_push_window_rectangle(x_offset: number, y_offset: number, width: number, height: number): void
export function clip_stack_restore(): void
export function clip_stack_save(): void
export function clutter_check_extension_CLUTTER(name: string, ext: string): Bool
export function clutter_winsys_has_feature_CLUTTER(feature: WinsysFeature): Bool
export function color_equal(v1?: object | null, v2?: object | null): Bool
export function color_init_from_hsl(hue: number, saturation: number, luminance: number): /* color */ Color
export function create_program(): Handle
export function create_shader(shader_type: ShaderType): Handle
export function debug_matrix_print(matrix: Matrix): void
export function disable_fog(): void
export function double_to_int(value: number): number
export function double_to_uint(value: number): number
export function end_gl(): void
export function features_available(features: FeatureFlags): Bool
export function flush(): void
export function frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void
export function get_backface_culling_enabled(): Bool
export function get_bitmasks(): [ /* red */ number, /* green */ number, /* blue */ number, /* alpha */ number ]
export function get_depth_test_enabled(): Bool
export function get_features(): FeatureFlags
export function get_modelview_matrix(): /* matrix */ Matrix
export function get_option_group(): GLib.OptionGroup
export function get_projection_matrix(): /* matrix */ Matrix
export function get_source(): object | null
export function get_viewport(): /* v */ number[]
export function gtype_matrix_get_type(): GObject.Type
export function handle_get_type(): GObject.Type
export function handle_ref(handle: Handle): Handle
export function handle_unref(handle: Handle): void
export function is_bitmap(object?: object | null): Bool
export function is_material(handle: Handle): Bool
export function is_offscreen(object?: object | null): Bool
export function is_program(handle: Handle): Bool
export function is_shader(handle: Handle): Bool
export function is_texture(object?: object | null): Bool
export function is_vertex_buffer(handle: Handle): Bool
export function is_vertex_buffer_indices(handle: Handle): Bool
export function material_ref(material: Handle): Handle
export function material_unref(material: Handle): void
export function matrix_equal(v1?: object | null, v2?: object | null): Bool
export function onscreen_clutter_backend_set_size_CLUTTER(width: number, height: number): void
export function ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void
export function perspective(fovy: number, aspect: number, z_near: number, z_far: number): void
export function polygon(vertices: TextureVertex, n_vertices: number, use_color: Bool): void
export function pop_draw_buffer(): void
export function pop_framebuffer(): void
export function pop_matrix(): void
export function pop_source(): void
export function program_attach_shader(program_handle: Handle, shader_handle: Handle): void
export function program_get_uniform_location(handle: Handle, uniform_name: string): number
export function program_link(handle: Handle): void
export function program_ref(handle: Handle): Handle
export function program_set_uniform_1f(program: Handle, uniform_location: number, value: number): void
export function program_set_uniform_1i(program: Handle, uniform_location: number, value: number): void
export function program_set_uniform_float(program: Handle, uniform_location: number, n_components: number, value: number[]): void
export function program_set_uniform_int(program: Handle, uniform_location: number, n_components: number, value: number[]): void
export function program_set_uniform_matrix(program: Handle, uniform_location: number, dimensions: number, transpose: Bool, value: number[]): void
export function program_uniform_1f(uniform_no: number, value: number): void
export function program_uniform_1i(uniform_no: number, value: number): void
export function program_uniform_float(uniform_no: number, size: number, value: number[]): void
export function program_uniform_int(uniform_no: number, size: number, value: number[]): void
export function program_uniform_matrix(uniform_no: number, size: number, transpose: Bool, value: number[]): void
export function program_unref(handle: Handle): void
export function program_use(handle: Handle): void
export function push_draw_buffer(): void
export function push_matrix(): void
export function push_source(material?: object | null): void
export function read_pixels(x: number, y: number, width: number, height: number, source: ReadPixelsFlags, format: PixelFormat, pixels: number): void
export function rectangle(x_1: number, y_1: number, x_2: number, y_2: number): void
export function rectangle_with_multitexture_coords(x1: number, y1: number, x2: number, y2: number, tex_coords: number[], tex_coords_len: number): void
export function rectangle_with_texture_coords(x1: number, y1: number, x2: number, y2: number, tx1: number, ty1: number, tx2: number, ty2: number): void
export function rectangles(verts: number[], n_rects: number): void
export function rectangles_with_texture_coords(verts: number[], n_rects: number): void
export function rotate(angle: number, x: number, y: number, z: number): void
export function scale(x: number, y: number, z: number): void
export function set_backface_culling_enabled(setting: Bool): void
export function set_depth_test_enabled(setting: Bool): void
export function set_draw_buffer(target: BufferTarget, offscreen: Handle): void
export function set_fog(fog_color: Color, mode: FogMode, density: number, z_near: number, z_far: number): void
export function set_modelview_matrix(matrix: Matrix): void
export function set_projection_matrix(matrix: Matrix): void
export function set_source(material?: object | null): void
export function set_source_color(color: Color): void
export function set_source_color4f(red: number, green: number, blue: number, alpha: number): void
export function set_source_color4ub(red: number, green: number, blue: number, alpha: number): void
export function set_source_texture(texture: Texture): void
export function set_viewport(x: number, y: number, width: number, height: number): void
export function shader_compile(handle: Handle): void
export function shader_get_info_log(handle: Handle): string
export function shader_get_type(handle: Handle): ShaderType
export function shader_is_compiled(handle: Handle): Bool
export function shader_ref(handle: Handle): Handle
export function shader_source(shader: Handle, source: string): void
export function shader_unref(handle: Handle): void
export function sqrti(x: number): number
export function texture_error_quark(): number
export function transform(matrix: Matrix): void
export function translate(x: number, y: number, z: number): void
export function vertex_buffer_add(handle: Handle, attribute_name: string, n_components: number, type: AttributeType, normalized: Bool, stride: number, pointer?: object | null): void
export function vertex_buffer_delete(handle: Handle, attribute_name: string): void
export function vertex_buffer_disable(handle: Handle, attribute_name: string): void
export function vertex_buffer_draw(handle: Handle, mode: VerticesMode, first: number, count: number): void
export function vertex_buffer_draw_elements(handle: Handle, mode: VerticesMode, indices: Handle, min_index: number, max_index: number, indices_offset: number, count: number): void
export function vertex_buffer_enable(handle: Handle, attribute_name: string): void
export function vertex_buffer_get_n_vertices(handle: Handle): number
export function vertex_buffer_indices_get_for_quads(n_indices: number): Handle
export function vertex_buffer_indices_get_type(indices: Handle): IndicesType
export function vertex_buffer_new(n_vertices: number): Handle
export function vertex_buffer_ref(handle: Handle): Handle
export function vertex_buffer_submit(handle: Handle): void
export function vertex_buffer_unref(handle: Handle): void
export function viewport(width: number, height: number): void
export interface FuncPtr {
    (): void
}
export class Texture {
    /* Methods of Cogl.Texture */
    allocate(): Bool
    get_components(): TextureComponents
    get_data(format: PixelFormat, rowstride: number, data: number): number
    get_gl_texture(): [ /* returnType */ Bool, /* out_gl_handle */ number | null, /* out_gl_target */ number | null ]
    get_height(): number
    get_max_waste(): number
    get_premultiplied(): Bool
    get_width(): number
    is_sliced(): Bool
    set_components(components: TextureComponents): void
    set_premultiplied(premultiplied: Bool): void
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: number): Bool
    static name: string
}
export class Bitmap {
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_file(filename: string): Bitmap
    static get_size_from_file(filename: string): [ /* returnType */ Bool, /* width */ number, /* height */ number ]
}
export class Fixed {
    /* Methods of Cogl.Fixed */
    pow2(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static pow(x: number, y: Fixed): number
}
export class Offscreen {
    static name: string
    /* Static methods and pseudo-constructors */
    static new_to_texture(texture: Texture): Offscreen
    static new_with_texture(texture: Texture): Offscreen
    static ref(offscreen?: object | null): object | null
    static unref(offscreen?: object | null): void
}
export class Color {
    /* Methods of Cogl.Color */
    copy(): Color
    free(): void
    get_alpha(): number
    get_alpha_byte(): number
    get_alpha_float(): number
    get_blue(): number
    get_blue_byte(): number
    get_blue_float(): number
    get_green(): number
    get_green_byte(): number
    get_green_float(): number
    get_red(): number
    get_red_byte(): number
    get_red_float(): number
    init_from_4f(red: number, green: number, blue: number, alpha: number): void
    init_from_4fv(color_array: number): void
    init_from_4ub(red: number, green: number, blue: number, alpha: number): void
    premultiply(): void
    set_alpha(alpha: number): void
    set_alpha_byte(alpha: number): void
    set_alpha_float(alpha: number): void
    set_blue(blue: number): void
    set_blue_byte(blue: number): void
    set_blue_float(blue: number): void
    set_from_4f(red: number, green: number, blue: number, alpha: number): void
    set_from_4ub(red: number, green: number, blue: number, alpha: number): void
    set_green(green: number): void
    set_green_byte(green: number): void
    set_green_float(green: number): void
    set_red(red: number): void
    set_red_byte(red: number): void
    set_red_float(red: number): void
    to_hsl(): [ /* hue */ number, /* saturation */ number, /* luminance */ number ]
    unpremultiply(): void
    static name: string
    static new(): Color
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Color
    static equal(v1?: object | null, v2?: object | null): Bool
    static init_from_hsl(hue: number, saturation: number, luminance: number): /* color */ Color
}
export class Euler {
    static name: string
}
export class Material {
    /* Methods of Cogl.Material */
    get_ambient(ambient: Color): void
    get_color(): /* color */ Color
    get_diffuse(diffuse: Color): void
    get_emission(emission: Color): void
    get_layer_point_sprite_coords_enabled(layer_index: number): Bool
    get_layer_wrap_mode_p(layer_index: number): MaterialWrapMode
    get_layer_wrap_mode_s(layer_index: number): MaterialWrapMode
    get_layer_wrap_mode_t(layer_index: number): MaterialWrapMode
    get_layers(): MaterialLayer[]
    get_n_layers(): number
    get_point_size(): number
    get_shininess(): number
    get_specular(specular: Color): void
    get_user_program(): Handle
    remove_layer(layer_index: number): void
    set_alpha_test_function(alpha_func: MaterialAlphaFunc, alpha_reference: number): void
    set_ambient(ambient: Color): void
    set_ambient_and_diffuse(color: Color): void
    set_blend(blend_string: string): Bool
    set_blend_constant(constant_color: Color): void
    set_color(color: Color): void
    set_color4f(red: number, green: number, blue: number, alpha: number): void
    set_color4ub(red: number, green: number, blue: number, alpha: number): void
    set_diffuse(diffuse: Color): void
    set_emission(emission: Color): void
    set_layer(layer_index: number, texture: Handle): void
    set_layer_combine(layer_index: number, blend_string: string): Bool
    set_layer_combine_constant(layer_index: number, constant: Color): void
    set_layer_filters(layer_index: number, min_filter: MaterialFilter, mag_filter: MaterialFilter): void
    set_layer_matrix(layer_index: number, matrix: Matrix): void
    set_layer_point_sprite_coords_enabled(layer_index: number, enable: Bool): Bool
    set_layer_wrap_mode(layer_index: number, mode: MaterialWrapMode): void
    set_layer_wrap_mode_p(layer_index: number, mode: MaterialWrapMode): void
    set_layer_wrap_mode_s(layer_index: number, mode: MaterialWrapMode): void
    set_layer_wrap_mode_t(layer_index: number, mode: MaterialWrapMode): void
    set_point_size(point_size: number): void
    set_shininess(shininess: number): void
    set_specular(specular: Color): void
    set_user_program(program: Handle): void
    static name: string
    /* Static methods and pseudo-constructors */
    static ref(material: Handle): Handle
    static unref(material: Handle): void
}
export class MaterialLayer {
    /* Methods of Cogl.MaterialLayer */
    get_mag_filter(): MaterialFilter
    get_min_filter(): MaterialFilter
    get_texture(): Handle
    get_type(): MaterialLayerType
    get_wrap_mode_p(): MaterialWrapMode
    get_wrap_mode_s(): MaterialWrapMode
    get_wrap_mode_t(): MaterialWrapMode
    static name: string
}
export class Matrix {
    /* Fields of Cogl.Matrix */
    xx: number
    yx: number
    zx: number
    wx: number
    xy: number
    yy: number
    zy: number
    wy: number
    xz: number
    yz: number
    zz: number
    wz: number
    xw: number
    yw: number
    zw: number
    ww: number
    /* Methods of Cogl.Matrix */
    copy(): Matrix
    free(): void
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void
    get_array(): number
    get_inverse(): [ /* returnType */ Bool, /* inverse */ Matrix ]
    init_from_array(array: number): void
    init_identity(): void
    init_translation(tx: number, ty: number, tz: number): void
    is_identity(): Bool
    look_at(eye_position_x: number, eye_position_y: number, eye_position_z: number, object_x: number, object_y: number, object_z: number, world_up_x: number, world_up_y: number, world_up_z: number): void
    multiply(a: Matrix, b: Matrix): void
    ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    scale(sx: number, sy: number, sz: number): void
    transform_point(x: number, y: number, z: number, w: number): [ /* x */ number, /* y */ number, /* z */ number, /* w */ number ]
    translate(x: number, y: number, z: number): void
    transpose(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static equal(v1?: object | null, v2?: object | null): Bool
}
export class Quaternion {
    static name: string
}
export class TextureVertex {
    /* Fields of Cogl.TextureVertex */
    x: number
    y: number
    z: number
    tx: number
    ty: number
    color: Color
    static name: string
}
export class _ColorSizeCheck {
    /* Fields of Cogl._ColorSizeCheck */
    compile_time_assert_CoglColor_size: number[]
    static name: string
}
export class _MatrixSizeCheck {
    /* Fields of Cogl._MatrixSizeCheck */
    compile_time_assert_CoglMatrix_size: number[]
    static name: string
}
export class _TextureVertexSizeCheck {
    /* Fields of Cogl._TextureVertexSizeCheck */
    compile_time_assert_CoglTextureVertex_size: number[]
    static name: string
}
type Angle = number
type Bool = number
type Handle = object