/**
 * PangoXft-1.0
 */

import * as Gjs from './Gjs';
import * as xlib from './xlib-2.0';
import * as xft from './xft-2.0';
import * as PangoOT from './PangoOT-1.0';
import * as freetype2 from './freetype2-2.0';
import * as PangoFc from './PangoFc-1.0';
import * as fontconfig from './fontconfig-2.0';
import * as Pango from './Pango-1.0';
import * as cairo from './cairo-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as PangoFT2 from './PangoFT2-1.0';

export function get_font_map(display: xlib.Display, screen: number): Pango.FontMap
export function picture_render(display: xlib.Display, src_picture: xlib.Picture, dest_picture: xlib.Picture, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
export function render(draw: xft.Draw, color: xft.Color, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
export function render_layout(draw: xft.Draw, color: xft.Color, layout: Pango.Layout, x: number, y: number): void
export function render_layout_line(draw: xft.Draw, color: xft.Color, line: Pango.LayoutLine, x: number, y: number): void
export function render_transformed(draw: xft.Draw, color: xft.Color, matrix: Pango.Matrix | null, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
export function set_default_substitute(display: xlib.Display, screen: number, func: SubstituteFunc): void
export function shutdown_display(display: xlib.Display, screen: number): void
export function substitute_changed(display: xlib.Display, screen: number): void
export interface SubstituteFunc {
    (pattern: fontconfig.Pattern, data?: object | null): void
}
export interface Font_ConstructProps extends PangoFc.Font_ConstructProps {
}
export class Font {
    /* Properties of PangoFc.Font */
    fontmap: PangoFc.FontMap
    /* Fields of PangoFc.Font */
    parent_instance: Pango.Font
    font_pattern: fontconfig.Pattern
    priv: object
    matrix: Pango.Matrix
    description: Pango.FontDescription
    metrics_by_lang: object[]
    is_hinted: number
    is_transformed: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PangoXft.Font */
    get_glyph(wc: number): number
    get_unknown_glyph(wc: number): Pango.Glyph
    has_char(wc: number): boolean
    /* Methods of PangoFc.Font */
    get_languages(): Pango.Language | null
    kern_glyphs(glyphs: Pango.GlyphString): void
    unlock_face(): void
    /* Methods of Pango.Font */
    describe(): Pango.FontDescription
    describe_with_absolute_size(): Pango.FontDescription
    find_shaper(language: Pango.Language, ch: number): Pango.EngineShape
    get_coverage(language: Pango.Language): Pango.Coverage
    get_face(): Pango.FontFace
    get_features(num_features: number): [ /* features */ HarfBuzz.feature_t[], /* num_features */ number ]
    get_font_map(): Pango.FontMap | null
    get_glyph_extents(glyph: Pango.Glyph): [ /* ink_rect */ Pango.Rectangle | null, /* logical_rect */ Pango.Rectangle | null ]
    get_metrics(language?: Pango.Language | null): Pango.FontMetrics
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
    /* Virtual methods of Pango.Font */
    vfunc_create_hb_font(): HarfBuzz.font_t
    vfunc_describe(): Pango.FontDescription
    vfunc_describe_absolute(): Pango.FontDescription
    vfunc_get_coverage(language: Pango.Language): Pango.Coverage
    vfunc_get_features(num_features: number): [ /* features */ HarfBuzz.feature_t[], /* num_features */ number ]
    vfunc_get_font_map(): Pango.FontMap | null
    vfunc_get_glyph_extents(glyph: Pango.Glyph): [ /* ink_rect */ Pango.Rectangle | null, /* logical_rect */ Pango.Rectangle | null ]
    vfunc_get_metrics(language?: Pango.Language | null): Pango.FontMetrics
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::fontmap", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fontmap", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Font_ConstructProps)
    _init (config?: Font_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FontMap_ConstructProps extends PangoFc.FontMap_ConstructProps {
}
export class FontMap {
    /* Fields of Pango.FontMap */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PangoFc.FontMap */
    cache_clear(): void
    config_changed(): void
    create_context(): Pango.Context
    find_decoder(pattern: fontconfig.Pattern): PangoFc.Decoder | null
    set_default_substitute(func: PangoFc.SubstituteFunc): void
    shutdown(): void
    substitute_changed(): void
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
    static $gtype: GObject.Type
}
export interface Renderer_ConstructProps extends Pango.Renderer_ConstructProps {
    display?: object
    screen?: number
}
export class Renderer {
    /* Fields of Pango.Renderer */
    matrix: Pango.Matrix
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of PangoXft.Renderer */
    set_default_color(default_color: Pango.Color): void
    set_draw(draw: xft.Draw): void
    /* Methods of Pango.Renderer */
    activate(): void
    deactivate(): void
    draw_error_underline(x: number, y: number, width: number, height: number): void
    draw_glyph(font: Pango.Font, glyph: Pango.Glyph, x: number, y: number): void
    draw_glyph_item(text: string | null, glyph_item: Pango.GlyphItem, x: number, y: number): void
    draw_glyphs(font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
    draw_layout(layout: Pango.Layout, x: number, y: number): void
    draw_layout_line(line: Pango.LayoutLine, x: number, y: number): void
    draw_rectangle(part: Pango.RenderPart, x: number, y: number, width: number, height: number): void
    draw_trapezoid(part: Pango.RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    get_alpha(part: Pango.RenderPart): number
    get_color(part: Pango.RenderPart): Pango.Color | null
    get_layout(): Pango.Layout | null
    get_layout_line(): Pango.LayoutLine | null
    get_matrix(): Pango.Matrix | null
    part_changed(part: Pango.RenderPart): void
    set_alpha(part: Pango.RenderPart, alpha: number): void
    set_color(part: Pango.RenderPart, color?: Pango.Color | null): void
    set_matrix(matrix?: Pango.Matrix | null): void
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
    /* Virtual methods of PangoXft.Renderer */
    vfunc_composite_glyphs(xft_font: xft.Font, glyphs: xft.GlyphSpec, n_glyphs: number): void
    vfunc_composite_trapezoids(part: Pango.RenderPart, trapezoids: xlib.XTrapezoid, n_trapezoids: number): void
    /* Virtual methods of Pango.Renderer */
    vfunc_begin(): void
    vfunc_draw_error_underline(x: number, y: number, width: number, height: number): void
    vfunc_draw_glyph(font: Pango.Font, glyph: Pango.Glyph, x: number, y: number): void
    vfunc_draw_glyph_item(text: string | null, glyph_item: Pango.GlyphItem, x: number, y: number): void
    vfunc_draw_glyphs(font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
    vfunc_draw_rectangle(part: Pango.RenderPart, x: number, y: number, width: number, height: number): void
    vfunc_draw_shape(attr: Pango.AttrShape, x: number, y: number): void
    vfunc_draw_trapezoid(part: Pango.RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    vfunc_end(): void
    vfunc_part_changed(part: Pango.RenderPart): void
    vfunc_prepare_run(run: Pango.LayoutRun): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Renderer_ConstructProps)
    _init (config?: Renderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: xlib.Display, screen: number): Renderer
    static $gtype: GObject.Type
}
export abstract class RendererClass {
    /* Fields of PangoXft.RendererClass */
    composite_trapezoids: (xftrenderer: Renderer, part: Pango.RenderPart, trapezoids: xlib.XTrapezoid, n_trapezoids: number) => void
    composite_glyphs: (xftrenderer: Renderer, xft_font: xft.Font, glyphs: xft.GlyphSpec, n_glyphs: number) => void
    static name: string
}
export class RendererPrivate {
    static name: string
}