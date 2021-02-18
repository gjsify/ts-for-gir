/**
 * Babl-0.1
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';

export enum IccIntent {
    PERCEPTUAL,
    RELATIVE_COLORIMETRIC,
    SATURATION,
    ABSOLUTE_COLORIMETRIC,
    PERFORMANCE,
}
export enum SpaceFlags {
    NONE,
    EQUALIZE,
}
export enum ModelFlag {
    ALPHA,
    ASSOCIATED,
    INVERTED,
    LINEAR,
    NONLINEAR,
    PERCEPTUAL,
    GRAY,
    RGB,
    CIE,
    CMYK,
}
export const ALPHA_FLOOR: number
export const ALPHA_FLOOR_F: number
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function component(name: string): Object
export function conversion_get_destination_space(conversion: Object): Object
export function conversion_get_source_space(conversion: Object): Object
export function exit(): void
export function fast_fish(source_format: object | null, destination_format: object | null, performance: string): Object
export function fish(source_format?: object | null, destination_format?: object | null): Object
export function format(encoding: string): Object
export function format_exists(name: string): number
export function format_get_bytes_per_pixel(format: Object): number
export function format_get_encoding(babl: Object): string
export function format_get_model(format: Object): Object
export function format_get_n_components(format: Object): number
export function format_get_space(format: Object): Object
export function format_get_type(format: Object, component_index: number): Object
export function format_has_alpha(format: Object): number
export function format_is_format_n(format: Object): number
export function format_is_palette(format: Object): number
export function format_n(type: Object, components: number): Object
export function format_with_space(encoding: string, space: Object): Object
export function get_model_flags(model: Object): ModelFlag
export function get_name(babl: Object): string
export function get_version(): [ /* major */ number, /* minor */ number, /* micro */ number ]
export function icc_get_key(icc_data: string, icc_length: number, key: string, language: string, country: string): string
export function icc_make_space(icc_data: string, icc_length: number, intent: IccIntent, error: string): Object
export function init(): void
export function introspect(babl: Object): void
export function model(name: string): Object
export function model_is(babl: Object, model_name: string): number
export function model_with_space(name: string, space: Object): Object
export function new_palette(name: string, format_u8: Object, format_u8_with_alpha: Object): Object
export function new_palette_with_space(name: string, space: Object, format_u8: Object, format_u8_with_alpha: Object): Object
export function palette_reset(babl: Object): void
export function palette_set_palette(babl: Object, format: Object, data: Uint8Array[], count: number): void
export function process(babl_fish: Object, source: object | null, destination: object | null, n: number): number
export function process_rows(babl_fish: Object, source: object | null, source_stride: number, dest: object | null, dest_stride: number, n: number, rows: number): number
export function sampling(horizontal: number, vertical: number): Object
export function space(name: string): Object
export function space_from_chromaticities(name: string | null, wx: number, wy: number, rx: number, ry: number, gx: number, gy: number, bx: number, by: number, trc_red: Object, trc_green: Object | null, trc_blue: Object | null, flags: SpaceFlags): Object
export function space_from_icc(icc_data: string, icc_length: number, intent: IccIntent): [ /* returnType */ Object, /* error */ string ]
export function space_from_rgbxyz_matrix(name: string | null, wx: number, wy: number, wz: number, rx: number, gx: number, bx: number, ry: number, gy: number, by: number, rz: number, gz: number, bz: number, trc_red: Object, trc_green?: Object | null, trc_blue?: Object | null): Object
export function space_get(space: Object): [ /* xw */ number | null, /* yw */ number | null, /* xr */ number | null, /* yr */ number | null, /* xg */ number | null, /* yg */ number | null, /* xb */ number | null, /* yb */ number | null, /* red_trc */ Object | null, /* green_trc */ Object | null, /* blue_trc */ Object | null ]
export function space_get_gamma(space: Object): number
export function space_get_icc(babl: Object): [ /* returnType */ string, /* length */ number | null ]
export function space_get_rgb_luminance(space: Object): [ /* red_luminance */ number | null, /* green_luminance */ number | null, /* blue_luminance */ number | null ]
export function space_is_cmyk(space: Object): number
export function space_is_gray(space: Object): number
export function space_with_trc(space: Object, trc: Object): Object
export function trc(name: string): Object
export function trc_gamma(gamma: number): Object
export function type(name: string): Object
export interface FuncLinear {
    (conversion: Object, src: string, dst: string, n: number): void
}
export interface FuncPlanar {
    (conversion: Object, src_bands: number, src: string, src_pitch: number, dst_bands: number, dst: string, dst_pitch: number, n: number): void
}
export class Object {
    static name: string
}