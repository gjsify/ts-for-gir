/**
 * PangoFT2-1.0
 */

import * as Gjs from './Gjs';
import * as freetype2 from './freetype2-2.0';
import * as PangoFc from './PangoFc-1.0';
import * as fontconfig from './fontconfig-2.0';
import * as Pango from './Pango-1.0';
import * as cairo from './cairo-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';

export function font_get_coverage(font: Pango.Font, language: Pango.Language): Pango.Coverage
export function font_get_kerning(font: Pango.Font, left: Pango.Glyph, right: Pango.Glyph): number
export function get_unknown_glyph(font: Pango.Font): Pango.Glyph
export function render(bitmap: freetype2.Bitmap, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
export function render_layout(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void
export function render_layout_line(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void
export function render_layout_line_subpixel(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void
export function render_layout_subpixel(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void
export function render_transformed(bitmap: freetype2.Bitmap, matrix: Pango.Matrix | null, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
export function shutdown_display(): void
export interface SubstituteFunc {
    (pattern: fontconfig.Pattern, data?: object | null): void
}
export interface FontMap_ConstructProps extends PangoFc.FontMap_ConstructProps {
}
export class FontMap {
    /* Fields of Pango.FontMap */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PangoFT2.FontMap */
    set_default_substitute(func: SubstituteFunc): void
    set_resolution(dpi_x: number, dpi_y: number): void
    substitute_changed(): void
    /* Methods of PangoFc.FontMap */
    cache_clear(): void
    config_changed(): void
    create_context(): Pango.Context
    find_decoder(pattern: fontconfig.Pattern): PangoFc.Decoder | null
    set_default_substitute(func: PangoFc.SubstituteFunc): void
    shutdown(): void
    /* Methods of Pango.FontMap */
    changed(): void
    get_family(name: string): Pango.FontFamily
    get_serial(): number
    list_families(): /* families */ Pango.FontFamily[]
    load_font(context: Pango.Context, desc: Pango.FontDescription): Pango.Font | null
    load_fontset(context: Pango.Context, desc: Pango.FontDescription, language: Pango.Language): Pango.Fontset | null
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
    /* Virtual methods of Pango.FontMap */
    vfunc_changed(): void
    vfunc_get_family(name: string): Pango.FontFamily
    vfunc_get_serial(): number
    vfunc_list_families(): /* families */ Pango.FontFamily[]
    vfunc_load_font(context: Pango.Context, desc: Pango.FontDescription): Pango.Font | null
    vfunc_load_fontset(context: Pango.Context, desc: Pango.FontDescription, language: Pango.Language): Pango.Fontset | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FontMap_ConstructProps)
    _init (config?: FontMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FontMap
    static $gtype: GObject.Type
}