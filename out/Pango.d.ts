/**
 * Pango-1.0
 */

import * as Gjs from './Gjs'
import * as cairo from './cairo'
import * as GObject from './GObject'
import * as GLib from './GLib'
export enum Alignment {
    LEFT,
    CENTER,
    RIGHT,
}
export enum AttrType {
    INVALID,
    LANGUAGE,
    FAMILY,
    STYLE,
    WEIGHT,
    VARIANT,
    STRETCH,
    SIZE,
    FONT_DESC,
    FOREGROUND,
    BACKGROUND,
    UNDERLINE,
    STRIKETHROUGH,
    RISE,
    SHAPE,
    SCALE,
    FALLBACK,
    LETTER_SPACING,
    UNDERLINE_COLOR,
    STRIKETHROUGH_COLOR,
    ABSOLUTE_SIZE,
    GRAVITY,
    GRAVITY_HINT,
    FONT_FEATURES,
    FOREGROUND_ALPHA,
    BACKGROUND_ALPHA,
}
export enum BidiType {
    L,
    LRE,
    LRO,
    R,
    AL,
    RLE,
    RLO,
    PDF,
    EN,
    ES,
    ET,
    AN,
    CS,
    NSM,
    BN,
    B,
    S,
    WS,
    ON,
}
export enum CoverageLevel {
    NONE,
    FALLBACK,
    APPROXIMATE,
    EXACT,
}
export enum Direction {
    LTR,
    RTL,
    TTB_LTR,
    TTB_RTL,
    WEAK_LTR,
    WEAK_RTL,
    NEUTRAL,
}
export enum EllipsizeMode {
    NONE,
    START,
    MIDDLE,
    END,
}
export enum Gravity {
    SOUTH,
    EAST,
    NORTH,
    WEST,
    AUTO,
}
export enum GravityHint {
    NATURAL,
    STRONG,
    LINE,
}
export enum RenderPart {
    FOREGROUND,
    BACKGROUND,
    UNDERLINE,
    STRIKETHROUGH,
}
export enum Script {
    INVALID_CODE,
    COMMON,
    INHERITED,
    ARABIC,
    ARMENIAN,
    BENGALI,
    BOPOMOFO,
    CHEROKEE,
    COPTIC,
    CYRILLIC,
    DESERET,
    DEVANAGARI,
    ETHIOPIC,
    GEORGIAN,
    GOTHIC,
    GREEK,
    GUJARATI,
    GURMUKHI,
    HAN,
    HANGUL,
    HEBREW,
    HIRAGANA,
    KANNADA,
    KATAKANA,
    KHMER,
    LAO,
    LATIN,
    MALAYALAM,
    MONGOLIAN,
    MYANMAR,
    OGHAM,
    OLD_ITALIC,
    ORIYA,
    RUNIC,
    SINHALA,
    SYRIAC,
    TAMIL,
    TELUGU,
    THAANA,
    THAI,
    TIBETAN,
    CANADIAN_ABORIGINAL,
    YI,
    TAGALOG,
    HANUNOO,
    BUHID,
    TAGBANWA,
    BRAILLE,
    CYPRIOT,
    LIMBU,
    OSMANYA,
    SHAVIAN,
    LINEAR_B,
    TAI_LE,
    UGARITIC,
    NEW_TAI_LUE,
    BUGINESE,
    GLAGOLITIC,
    TIFINAGH,
    SYLOTI_NAGRI,
    OLD_PERSIAN,
    KHAROSHTHI,
    UNKNOWN,
    BALINESE,
    CUNEIFORM,
    PHOENICIAN,
    PHAGS_PA,
    NKO,
    KAYAH_LI,
    LEPCHA,
    REJANG,
    SUNDANESE,
    SAURASHTRA,
    CHAM,
    OL_CHIKI,
    VAI,
    CARIAN,
    LYCIAN,
    LYDIAN,
    BATAK,
    BRAHMI,
    MANDAIC,
    CHAKMA,
    MEROITIC_CURSIVE,
    MEROITIC_HIEROGLYPHS,
    MIAO,
    SHARADA,
    SORA_SOMPENG,
    TAKRI,
}
export enum Stretch {
    ULTRA_CONDENSED,
    EXTRA_CONDENSED,
    CONDENSED,
    SEMI_CONDENSED,
    NORMAL,
    SEMI_EXPANDED,
    EXPANDED,
    EXTRA_EXPANDED,
    ULTRA_EXPANDED,
}
export enum Style {
    NORMAL,
    OBLIQUE,
    ITALIC,
}
export enum TabAlign {
    LEFT,
}
export enum Underline {
    NONE,
    SINGLE,
    DOUBLE,
    LOW,
    ERROR,
}
export enum Variant {
    NORMAL,
    SMALL_CAPS,
}
export enum Weight {
    THIN,
    ULTRALIGHT,
    LIGHT,
    SEMILIGHT,
    BOOK,
    NORMAL,
    MEDIUM,
    SEMIBOLD,
    BOLD,
    ULTRABOLD,
    HEAVY,
    ULTRAHEAVY,
}
export enum WrapMode {
    WORD,
    CHAR,
    WORD_CHAR,
}
export enum FontMask {
    FAMILY,
    STYLE,
    VARIANT,
    WEIGHT,
    STRETCH,
    SIZE,
    GRAVITY,
}
export const ANALYSIS_FLAG_CENTERED_BASELINE:number
export const ANALYSIS_FLAG_IS_ELLIPSIS:number
export const ATTR_INDEX_FROM_TEXT_BEGINNING:number
export const ENGINE_TYPE_LANG:string
export const ENGINE_TYPE_SHAPE:string
export const GLYPH_EMPTY:Glyph
export const GLYPH_INVALID_INPUT:Glyph
export const GLYPH_UNKNOWN_FLAG:Glyph
export const RENDER_TYPE_NONE:string
export const SCALE:number
export const UNKNOWN_GLYPH_HEIGHT:number
export const UNKNOWN_GLYPH_WIDTH:number
export function attr_type_get_name(type: AttrType): string | null
export function attr_type_register(name: string): AttrType
export function bidi_type_for_unichar(ch: number): BidiType
/* Function 'break' is a reserved word */
export function config_key_get(key: string): string
export function config_key_get_system(key: string): string
export function default_break(text: string, length: number, analysis: Analysis | null, attrs: LogAttr, attrs_len: number): void
export function extents_to_pixels(inclusive: Rectangle | null, nearest: Rectangle | null): void
export function find_base_dir(text: string, length: number): Direction
export function find_paragraph_boundary(text: string, length: number): [ /* paragraph_delimiter_index */ number, /* next_paragraph_start */ number ]
export function font_description_from_string(str: string): FontDescription
export function get_lib_subdirectory(): string
export function get_log_attrs(text: string, length: number, level: number, language: Language, log_attrs: LogAttr[]): void
export function get_mirror_char(ch: number, mirrored_ch: number): boolean
export function get_sysconf_subdirectory(): string
export function gravity_get_for_matrix(matrix: Matrix | null): Gravity
export function gravity_get_for_script(script: Script, base_gravity: Gravity, hint: GravityHint): Gravity
export function gravity_get_for_script_and_width(script: Script, wide: boolean, base_gravity: Gravity, hint: GravityHint): Gravity
export function gravity_to_rotation(gravity: Gravity): number
export function is_zero_width(ch: number): boolean
export function itemize(context: Context, text: string, start_index: number, length: number, attrs: AttrList, cached_iter: AttrIterator | null): GLib.List
export function itemize_with_base_dir(context: Context, base_dir: Direction, text: string, start_index: number, length: number, attrs: AttrList, cached_iter: AttrIterator | null): GLib.List
export function language_from_string(language: string | null): Language | null
export function language_get_default(): Language
export function log2vis_get_embedding_levels(text: string, length: number, pbase_dir: Direction): number
export function lookup_aliases(fontname: string): /* families */ string[]
export function markup_parser_finish(context: GLib.MarkupParseContext): [ /* returnType */ boolean, /* attr_list */ AttrList | null, /* text */ string | null, /* accel_char */ number | null ]
export function markup_parser_new(accel_marker: number): GLib.MarkupParseContext
export function module_register(module: IncludedModule): void
export function parse_enum(type: number, str: string | null, warn: boolean): [ /* returnType */ boolean, /* value */ number | null, /* possible_values */ string | null ]
export function parse_markup(markup_text: string, length: number, accel_marker: number): [ /* returnType */ boolean, /* attr_list */ AttrList | null, /* text */ string | null, /* accel_char */ number | null ]
export function parse_stretch(str: string, warn: boolean): [ /* returnType */ boolean, /* stretch */ Stretch ]
export function parse_style(str: string, warn: boolean): [ /* returnType */ boolean, /* style */ Style ]
export function parse_variant(str: string, warn: boolean): [ /* returnType */ boolean, /* variant */ Variant ]
export function parse_weight(str: string, warn: boolean): [ /* returnType */ boolean, /* weight */ Weight ]
export function quantize_line_geometry(thickness: number, position: number): void
export function read_line(stream: object): [ /* returnType */ number, /* str */ GLib.String ]
export function reorder_items(logical_items: GLib.List): GLib.List
export function scan_int(pos: string): [ /* returnType */ boolean, /* out */ number ]
export function scan_string(pos: string): [ /* returnType */ boolean, /* out */ GLib.String ]
export function scan_word(pos: string): [ /* returnType */ boolean, /* out */ GLib.String ]
export function script_for_unichar(ch: number): Script
export function script_get_sample_language(script: Script): Language | null
export function shape(text: string, length: number, analysis: Analysis, glyphs: GlyphString): void
export function shape_full(item_text: string, item_length: number, paragraph_text: string | null, paragraph_length: number, analysis: Analysis, glyphs: GlyphString): void
export function skip_space(pos: string): boolean
export function split_file_list(str: string): string[]
export function trim_string(str: string): string
export function unichar_direction(ch: number): Direction
export function units_from_double(d: number): number
export function units_to_double(i: number): number
export function version(): number
export function version_check(required_major: number, required_minor: number, required_micro: number): string | null
export function version_string(): string
export interface AttrFilterFunc {
    (attribute: Attribute, user_data: object): boolean
}
export interface FontsetForeachFunc {
    (fontset: Fontset, font: Font, user_data: object): boolean
}
export interface Context_ConstructProps extends GObject.Object_ConstructProps {
}
export interface Context {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.Context */
    changed(): void
    get_base_dir(): Direction
    get_base_gravity(): Gravity
    get_font_description(): FontDescription
    get_font_map(): FontMap
    get_gravity(): Gravity
    get_gravity_hint(): GravityHint
    get_language(): Language
    get_matrix(): Matrix | null
    get_metrics(desc: FontDescription | null, language: Language | null): FontMetrics
    get_serial(): number
    list_families(): /* families */ FontFamily[]
    load_font(desc: FontDescription): Font | null
    load_fontset(desc: FontDescription, language: Language): Fontset | null
    set_base_dir(direction: Direction): void
    set_base_gravity(gravity: Gravity): void
    set_font_description(desc: FontDescription): void
    set_font_map(font_map: FontMap): void
    set_gravity_hint(hint: GravityHint): void
    set_language(language: Language): void
    set_matrix(matrix: Matrix | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Context, pspec: GObject.ParamSpec) => void))
}
export interface Context_Static {
    name: string
    new (config: Context_ConstructProps): Context
}
export declare class Context_Static {
    new(): Context
}
export declare var Context: Context_Static
export interface Engine_ConstructProps extends GObject.Object_ConstructProps {
}
export interface Engine {
    /* Fields of Pango.Engine */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Engine, pspec: GObject.ParamSpec) => void))
}
export interface Engine_Static {
    name: string
    new (config: Engine_ConstructProps): Engine
}
export declare var Engine: Engine_Static
export interface EngineLang_ConstructProps extends Engine_ConstructProps {
}
export interface EngineLang {
    /* Fields of Pango.EngineLang */
    /* Fields of Pango.Engine */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Pango.EngineLang */
    vfunc_script_break(text: string, len: number, analysis: Analysis, attrs: LogAttr, attrs_len: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: EngineLang, pspec: GObject.ParamSpec) => void))
}
export interface EngineLang_Static {
    name: string
    new (config: EngineLang_ConstructProps): EngineLang
}
export declare var EngineLang: EngineLang_Static
export interface EngineShape_ConstructProps extends Engine_ConstructProps {
}
export interface EngineShape {
    /* Fields of Pango.EngineShape */
    parent_instance:Engine
    /* Fields of Pango.Engine */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Pango.EngineShape */
    vfunc_covers(font: Font, language: Language, wc: number): CoverageLevel
    vfunc_script_shape(font: Font, item_text: string, item_length: number, analysis: Analysis, glyphs: GlyphString, paragraph_text: string, paragraph_length: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: EngineShape, pspec: GObject.ParamSpec) => void))
}
export interface EngineShape_Static {
    name: string
    new (config: EngineShape_ConstructProps): EngineShape
}
export declare var EngineShape: EngineShape_Static
export interface Font_ConstructProps extends GObject.Object_ConstructProps {
}
export interface Font {
    /* Fields of Pango.Font */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.Font */
    describe(): FontDescription
    describe_with_absolute_size(): FontDescription
    get_font_map(): FontMap | null
    get_glyph_extents(glyph: Glyph): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    get_metrics(language: Language | null): FontMetrics
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Pango.Font */
    vfunc_describe(): FontDescription
    vfunc_describe_absolute(): FontDescription
    vfunc_get_font_map(): FontMap | null
    vfunc_get_glyph_extents(glyph: Glyph): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    vfunc_get_metrics(language: Language | null): FontMetrics
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Font, pspec: GObject.ParamSpec) => void))
}
export interface Font_Static {
    name: string
    new (config: Font_ConstructProps): Font
}
export declare class Font_Static {
    descriptions_free(descs: FontDescription[] | null): void
}
export declare var Font: Font_Static
export interface FontFace_ConstructProps extends GObject.Object_ConstructProps {
}
export interface FontFace {
    /* Fields of Pango.FontFace */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.FontFace */
    describe(): FontDescription
    get_face_name(): string
    is_synthesized(): boolean
    list_sizes(): /* sizes */ number[] | null
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Pango.FontFace */
    vfunc_describe(): FontDescription
    vfunc_get_face_name(): string
    vfunc_is_synthesized(): boolean
    vfunc_list_sizes(): /* sizes */ number[] | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FontFace, pspec: GObject.ParamSpec) => void))
}
export interface FontFace_Static {
    name: string
    new (config: FontFace_ConstructProps): FontFace
}
export declare var FontFace: FontFace_Static
export interface FontFamily_ConstructProps extends GObject.Object_ConstructProps {
}
export interface FontFamily {
    /* Fields of Pango.FontFamily */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.FontFamily */
    get_name(): string
    is_monospace(): boolean
    list_faces(): /* faces */ FontFace[] | null
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Pango.FontFamily */
    vfunc_get_name(): string
    vfunc_is_monospace(): boolean
    vfunc_list_faces(): /* faces */ FontFace[] | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FontFamily, pspec: GObject.ParamSpec) => void))
}
export interface FontFamily_Static {
    name: string
    new (config: FontFamily_ConstructProps): FontFamily
}
export declare var FontFamily: FontFamily_Static
export interface FontMap_ConstructProps extends GObject.Object_ConstructProps {
}
export interface FontMap {
    /* Fields of Pango.FontMap */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.FontMap */
    changed(): void
    create_context(): Context
    get_serial(): number
    get_shape_engine_type(): string
    list_families(): /* families */ FontFamily[]
    load_font(context: Context, desc: FontDescription): Font | null
    load_fontset(context: Context, desc: FontDescription, language: Language): Fontset | null
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Pango.FontMap */
    vfunc_changed(): void
    vfunc_get_serial(): number
    vfunc_list_families(): /* families */ FontFamily[]
    vfunc_load_font(context: Context, desc: FontDescription): Font | null
    vfunc_load_fontset(context: Context, desc: FontDescription, language: Language): Fontset | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FontMap, pspec: GObject.ParamSpec) => void))
}
export interface FontMap_Static {
    name: string
    new (config: FontMap_ConstructProps): FontMap
}
export declare var FontMap: FontMap_Static
export interface Fontset_ConstructProps extends GObject.Object_ConstructProps {
}
export interface Fontset {
    /* Fields of Pango.Fontset */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.Fontset */
    foreach(func: FontsetForeachFunc, data: object): void
    get_font(wc: number): Font
    get_metrics(): FontMetrics
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Pango.Fontset */
    vfunc_foreach(func: FontsetForeachFunc, data: object): void
    vfunc_get_font(wc: number): Font
    vfunc_get_language(): Language
    vfunc_get_metrics(): FontMetrics
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Fontset, pspec: GObject.ParamSpec) => void))
}
export interface Fontset_Static {
    name: string
    new (config: Fontset_ConstructProps): Fontset
}
export declare var Fontset: Fontset_Static
export interface FontsetSimple_ConstructProps extends Fontset_ConstructProps {
}
export interface FontsetSimple {
    /* Fields of Pango.Fontset */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.FontsetSimple */
    append(font: Font): void
    size(): number
    /* Methods of Pango.Fontset */
    foreach(func: FontsetForeachFunc, data: object): void
    get_font(wc: number): Font
    get_metrics(): FontMetrics
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Pango.Fontset */
    vfunc_foreach(func: FontsetForeachFunc, data: object): void
    vfunc_get_font(wc: number): Font
    vfunc_get_language(): Language
    vfunc_get_metrics(): FontMetrics
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FontsetSimple, pspec: GObject.ParamSpec) => void))
}
export interface FontsetSimple_Static {
    name: string
    new (config: FontsetSimple_ConstructProps): FontsetSimple
}
export declare class FontsetSimple_Static {
    new(language: Language): FontsetSimple
}
export declare var FontsetSimple: FontsetSimple_Static
export interface Layout_ConstructProps extends GObject.Object_ConstructProps {
}
export interface Layout {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.Layout */
    context_changed(): void
    copy(): Layout
    get_alignment(): Alignment
    get_attributes(): AttrList
    get_auto_dir(): boolean
    get_baseline(): number
    get_character_count(): number
    get_context(): Context
    get_cursor_pos(index_: number): [ /* strong_pos */ Rectangle | null, /* weak_pos */ Rectangle | null ]
    get_ellipsize(): EllipsizeMode
    get_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    get_font_description(): FontDescription | null
    get_height(): number
    get_indent(): number
    get_iter(): LayoutIter
    get_justify(): boolean
    get_line(line: number): LayoutLine | null
    get_line_count(): number
    get_line_readonly(line: number): LayoutLine | null
    get_lines(): GLib.SList
    get_lines_readonly(): GLib.SList
    get_log_attrs(): /* attrs */ LogAttr[]
    get_log_attrs_readonly(): [ /* returnType */ LogAttr[], /* n_attrs */ number ]
    get_pixel_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    get_pixel_size(): [ /* width */ number | null, /* height */ number | null ]
    get_serial(): number
    get_single_paragraph_mode(): boolean
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_spacing(): number
    get_tabs(): TabArray | null
    get_text(): string
    get_unknown_glyphs_count(): number
    get_width(): number
    get_wrap(): WrapMode
    index_to_line_x(index_: number, trailing: boolean): [ /* line */ number | null, /* x_pos */ number | null ]
    index_to_pos(index_: number): /* pos */ Rectangle
    is_ellipsized(): boolean
    is_wrapped(): boolean
    move_cursor_visually(strong: boolean, old_index: number, old_trailing: number, direction: number): [ /* new_index */ number, /* new_trailing */ number ]
    set_alignment(alignment: Alignment): void
    set_attributes(attrs: AttrList | null): void
    set_auto_dir(auto_dir: boolean): void
    set_ellipsize(ellipsize: EllipsizeMode): void
    set_font_description(desc: FontDescription | null): void
    set_height(height: number): void
    set_indent(indent: number): void
    set_justify(justify: boolean): void
    set_markup(markup: string, length: number): void
    set_markup_with_accel(markup: string, length: number, accel_marker: number): /* accel_char */ number | null
    set_single_paragraph_mode(setting: boolean): void
    set_spacing(spacing: number): void
    set_tabs(tabs: TabArray | null): void
    set_text(text: string, length: number): void
    set_width(width: number): void
    set_wrap(wrap: WrapMode): void
    xy_to_index(x: number, y: number): [ /* returnType */ boolean, /* index_ */ number, /* trailing */ number ]
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Layout, pspec: GObject.ParamSpec) => void))
}
export interface Layout_Static {
    name: string
    new (config: Layout_ConstructProps): Layout
}
export declare class Layout_Static {
    new(context: Context): Layout
}
export declare var Layout: Layout_Static
export interface Renderer_ConstructProps extends GObject.Object_ConstructProps {
}
export interface Renderer {
    /* Fields of Pango.Renderer */
    matrix:Matrix
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.Renderer */
    activate(): void
    deactivate(): void
    draw_error_underline(x: number, y: number, width: number, height: number): void
    draw_glyph(font: Font, glyph: Glyph, x: number, y: number): void
    draw_glyph_item(text: string | null, glyph_item: GlyphItem, x: number, y: number): void
    draw_glyphs(font: Font, glyphs: GlyphString, x: number, y: number): void
    draw_layout(layout: Layout, x: number, y: number): void
    draw_layout_line(line: LayoutLine, x: number, y: number): void
    draw_rectangle(part: RenderPart, x: number, y: number, width: number, height: number): void
    draw_trapezoid(part: RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    get_alpha(part: RenderPart): number
    get_color(part: RenderPart): Color | null
    get_layout(): Layout | null
    get_layout_line(): LayoutLine | null
    get_matrix(): Matrix | null
    part_changed(part: RenderPart): void
    set_alpha(part: RenderPart, alpha: number): void
    set_color(part: RenderPart, color: Color | null): void
    set_matrix(matrix: Matrix | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.BindingTransformFunc | null, transform_from: GObject.BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): GObject.Binding
    bind_property_with_closures(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Pango.Renderer */
    vfunc_begin(): void
    vfunc_draw_error_underline(x: number, y: number, width: number, height: number): void
    vfunc_draw_glyph(font: Font, glyph: Glyph, x: number, y: number): void
    vfunc_draw_glyph_item(text: string | null, glyph_item: GlyphItem, x: number, y: number): void
    vfunc_draw_glyphs(font: Font, glyphs: GlyphString, x: number, y: number): void
    vfunc_draw_rectangle(part: RenderPart, x: number, y: number, width: number, height: number): void
    vfunc_draw_shape(attr: AttrShape, x: number, y: number): void
    vfunc_draw_trapezoid(part: RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    vfunc_end(): void
    vfunc_part_changed(part: RenderPart): void
    vfunc_prepare_run(run: LayoutRun): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Renderer, pspec: GObject.ParamSpec) => void))
}
export interface Renderer_Static {
    name: string
    new (config: Renderer_ConstructProps): Renderer
}
export declare var Renderer: Renderer_Static
export interface Analysis {
    /* Fields of Pango.Analysis */
    shape_engine:EngineShape
    lang_engine:EngineLang
    font:Font
    level:number
    gravity:number
    flags:number
    script:number
    language:Language
    extra_attrs:GLib.SList
}
export interface Analysis_Static {
    name: string
}
export declare var Analysis: Analysis_Static
export interface AttrClass {
    /* Fields of Pango.AttrClass */
    type:AttrType
    destroy:any
    equal:any
}
export interface AttrClass_Static {
    name: string
}
export declare var AttrClass: AttrClass_Static
export interface AttrColor {
    /* Fields of Pango.AttrColor */
    attr:Attribute
    color:Color
}
export interface AttrColor_Static {
    name: string
}
export declare var AttrColor: AttrColor_Static
export interface AttrFloat {
    /* Fields of Pango.AttrFloat */
    attr:Attribute
    value:number
}
export interface AttrFloat_Static {
    name: string
}
export declare var AttrFloat: AttrFloat_Static
export interface AttrFontDesc {
    /* Fields of Pango.AttrFontDesc */
    attr:Attribute
    desc:FontDescription
}
export interface AttrFontDesc_Static {
    name: string
}
export declare var AttrFontDesc: AttrFontDesc_Static
export interface AttrFontFeatures {
    /* Fields of Pango.AttrFontFeatures */
    attr:Attribute
    features:string
}
export interface AttrFontFeatures_Static {
    name: string
}
export declare var AttrFontFeatures: AttrFontFeatures_Static
export interface AttrInt {
    /* Fields of Pango.AttrInt */
    attr:Attribute
    value:number
}
export interface AttrInt_Static {
    name: string
}
export declare var AttrInt: AttrInt_Static
export interface AttrIterator {
    /* Methods of Pango.AttrIterator */
    destroy(): void
    get_attrs(): GLib.SList
    get_font(desc: FontDescription, language: Language | null, extra_attrs: GLib.SList | null): void
    next(): boolean
    range(): [ /* start */ number, /* end */ number ]
}
export interface AttrIterator_Static {
    name: string
}
export declare var AttrIterator: AttrIterator_Static
export interface AttrLanguage {
    /* Fields of Pango.AttrLanguage */
    attr:Attribute
    value:Language
}
export interface AttrLanguage_Static {
    name: string
}
export declare var AttrLanguage: AttrLanguage_Static
export interface AttrList {
    /* Methods of Pango.AttrList */
    change(attr: Attribute): void
    copy(): AttrList | null
    filter(func: AttrFilterFunc, data: object): AttrList | null
    insert(attr: Attribute): void
    insert_before(attr: Attribute): void
    ref(): AttrList
    splice(other: AttrList, pos: number, len: number): void
    unref(): void
}
export interface AttrList_Static {
    name: string
}
export declare class AttrList_Static {
    new(): AttrList
}
export declare var AttrList: AttrList_Static
export interface AttrShape {
    /* Fields of Pango.AttrShape */
    attr:Attribute
    ink_rect:Rectangle
    logical_rect:Rectangle
    data:object
    destroy_func:GLib.DestroyNotify
}
export interface AttrShape_Static {
    name: string
}
export declare var AttrShape: AttrShape_Static
export interface AttrSize {
    /* Fields of Pango.AttrSize */
    attr:Attribute
    size:number
    absolute:number
}
export interface AttrSize_Static {
    name: string
}
export declare var AttrSize: AttrSize_Static
export interface AttrString {
    /* Fields of Pango.AttrString */
    attr:Attribute
    value:string
}
export interface AttrString_Static {
    name: string
}
export declare var AttrString: AttrString_Static
export interface Attribute {
    /* Fields of Pango.Attribute */
    klass:AttrClass
    start_index:number
    end_index:number
    /* Methods of Pango.Attribute */
    destroy(): void
    equal(attr2: Attribute): boolean
    init(klass: AttrClass): void
}
export interface Attribute_Static {
    name: string
}
export declare var Attribute: Attribute_Static
export interface Color {
    /* Fields of Pango.Color */
    red:number
    green:number
    blue:number
    /* Methods of Pango.Color */
    copy(): Color | null
    free(): void
    parse(spec: string): boolean
    to_string(): string
}
export interface Color_Static {
    name: string
}
export declare var Color: Color_Static
export interface ContextClass {
}
export interface ContextClass_Static {
    name: string
}
export declare var ContextClass: ContextClass_Static
export interface Coverage {
    /* Methods of Pango.Coverage */
    get(index_: number): CoverageLevel
    max(other: Coverage): void
    set(index_: number, level: CoverageLevel): void
    to_bytes(): /* bytes */ Gjs.byteArray.ByteArray[]
    unref(): void
}
export interface Coverage_Static {
    name: string
}
export declare var Coverage: Coverage_Static
export interface EngineClass {
    /* Fields of Pango.EngineClass */
}
export interface EngineClass_Static {
    name: string
}
export declare var EngineClass: EngineClass_Static
export interface EngineInfo {
    /* Fields of Pango.EngineInfo */
    id:string
    engine_type:string
    render_type:string
    scripts:EngineScriptInfo
    n_scripts:number
}
export interface EngineInfo_Static {
    name: string
}
export declare var EngineInfo: EngineInfo_Static
export interface EngineLangClass {
    /* Fields of Pango.EngineLangClass */
    script_break:any
}
export interface EngineLangClass_Static {
    name: string
}
export declare var EngineLangClass: EngineLangClass_Static
export interface EngineScriptInfo {
    /* Fields of Pango.EngineScriptInfo */
    script:Script
    langs:string
}
export interface EngineScriptInfo_Static {
    name: string
}
export declare var EngineScriptInfo: EngineScriptInfo_Static
export interface EngineShapeClass {
    /* Fields of Pango.EngineShapeClass */
    script_shape:any
    covers:any
}
export interface EngineShapeClass_Static {
    name: string
}
export declare var EngineShapeClass: EngineShapeClass_Static
export interface FontClass {
    /* Fields of Pango.FontClass */
    parent_class:GObject.ObjectClass
    describe:any
    get_glyph_extents:any
    get_metrics:any
    get_font_map:any
    describe_absolute:any
}
export interface FontClass_Static {
    name: string
}
export declare var FontClass: FontClass_Static
export interface FontDescription {
    /* Methods of Pango.FontDescription */
    better_match(old_match: FontDescription | null, new_match: FontDescription): boolean
    copy(): FontDescription | null
    copy_static(): FontDescription | null
    equal(desc2: FontDescription): boolean
    free(): void
    get_family(): string | null
    get_gravity(): Gravity
    get_set_fields(): FontMask
    get_size(): number
    get_size_is_absolute(): boolean
    get_stretch(): Stretch
    get_style(): Style
    get_variant(): Variant
    get_weight(): Weight
    hash(): number
    merge(desc_to_merge: FontDescription | null, replace_existing: boolean): void
    merge_static(desc_to_merge: FontDescription, replace_existing: boolean): void
    set_absolute_size(size: number): void
    set_family(family: string): void
    set_family_static(family: string): void
    set_gravity(gravity: Gravity): void
    set_size(size: number): void
    set_stretch(stretch: Stretch): void
    set_style(style: Style): void
    set_variant(variant: Variant): void
    set_weight(weight: Weight): void
    to_filename(): string
    to_string(): string
    unset_fields(to_unset: FontMask): void
}
export interface FontDescription_Static {
    name: string
}
export declare class FontDescription_Static {
    new(): FontDescription
    from_string(str: string): FontDescription
}
export declare var FontDescription: FontDescription_Static
export interface FontFaceClass {
    /* Fields of Pango.FontFaceClass */
    parent_class:GObject.ObjectClass
    get_face_name:any
    describe:any
    list_sizes:any
    is_synthesized:any
}
export interface FontFaceClass_Static {
    name: string
}
export declare var FontFaceClass: FontFaceClass_Static
export interface FontFamilyClass {
    /* Fields of Pango.FontFamilyClass */
    parent_class:GObject.ObjectClass
    list_faces:any
    get_name:any
    is_monospace:any
}
export interface FontFamilyClass_Static {
    name: string
}
export declare var FontFamilyClass: FontFamilyClass_Static
export interface FontMapClass {
    /* Fields of Pango.FontMapClass */
    parent_class:GObject.ObjectClass
    load_font:any
    list_families:any
    load_fontset:any
    shape_engine_type:string
    get_serial:any
    changed:any
}
export interface FontMapClass_Static {
    name: string
}
export declare var FontMapClass: FontMapClass_Static
export interface FontMetrics {
    /* Fields of Pango.FontMetrics */
    /* Methods of Pango.FontMetrics */
    get_approximate_char_width(): number
    get_approximate_digit_width(): number
    get_ascent(): number
    get_descent(): number
    get_strikethrough_position(): number
    get_strikethrough_thickness(): number
    get_underline_position(): number
    get_underline_thickness(): number
    ref(): FontMetrics | null
    unref(): void
}
export interface FontMetrics_Static {
    name: string
}
export declare class FontMetrics_Static {
    new(): FontMetrics
}
export declare var FontMetrics: FontMetrics_Static
export interface FontsetClass {
    /* Fields of Pango.FontsetClass */
    parent_class:GObject.ObjectClass
    get_font:any
    get_metrics:any
    get_language:any
    foreach:any
}
export interface FontsetClass_Static {
    name: string
}
export declare var FontsetClass: FontsetClass_Static
export interface FontsetSimpleClass {
}
export interface FontsetSimpleClass_Static {
    name: string
}
export declare var FontsetSimpleClass: FontsetSimpleClass_Static
export interface GlyphGeometry {
    /* Fields of Pango.GlyphGeometry */
    width:GlyphUnit
    x_offset:GlyphUnit
    y_offset:GlyphUnit
}
export interface GlyphGeometry_Static {
    name: string
}
export declare var GlyphGeometry: GlyphGeometry_Static
export interface GlyphInfo {
    /* Fields of Pango.GlyphInfo */
    glyph:Glyph
    geometry:GlyphGeometry
    attr:GlyphVisAttr
}
export interface GlyphInfo_Static {
    name: string
}
export declare var GlyphInfo: GlyphInfo_Static
export interface GlyphItem {
    /* Fields of Pango.GlyphItem */
    item:Item
    glyphs:GlyphString
    /* Methods of Pango.GlyphItem */
    apply_attrs(text: string, list: AttrList): GLib.SList
    copy(): GlyphItem | null
    free(): void
    get_logical_widths(text: string, logical_widths: number[]): void
    letter_space(text: string, log_attrs: LogAttr[], letter_spacing: number): void
    split(text: string, split_index: number): GlyphItem
}
export interface GlyphItem_Static {
    name: string
}
export declare var GlyphItem: GlyphItem_Static
export interface GlyphItemIter {
    /* Fields of Pango.GlyphItemIter */
    glyph_item:GlyphItem
    text:string
    start_glyph:number
    start_index:number
    start_char:number
    end_glyph:number
    end_index:number
    end_char:number
    /* Methods of Pango.GlyphItemIter */
    copy(): GlyphItemIter | null
    free(): void
    init_end(glyph_item: GlyphItem, text: string): boolean
    init_start(glyph_item: GlyphItem, text: string): boolean
    next_cluster(): boolean
    prev_cluster(): boolean
}
export interface GlyphItemIter_Static {
    name: string
}
export declare var GlyphItemIter: GlyphItemIter_Static
export interface GlyphString {
    /* Fields of Pango.GlyphString */
    num_glyphs:number
    glyphs:GlyphInfo[]
    log_clusters:number
    /* Methods of Pango.GlyphString */
    copy(): GlyphString | null
    extents(font: Font): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    extents_range(start: number, end: number, font: Font): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    free(): void
    get_logical_widths(text: string, length: number, embedding_level: number, logical_widths: number[]): void
    get_width(): number
    index_to_x(text: string, length: number, analysis: Analysis, index_: number, trailing: boolean): /* x_pos */ number
    set_size(new_len: number): void
    x_to_index(text: string, length: number, analysis: Analysis, x_pos: number): [ /* index_ */ number, /* trailing */ number ]
}
export interface GlyphString_Static {
    name: string
}
export declare class GlyphString_Static {
    new(): GlyphString
}
export declare var GlyphString: GlyphString_Static
export interface GlyphVisAttr {
    /* Fields of Pango.GlyphVisAttr */
    is_cluster_start:number
}
export interface GlyphVisAttr_Static {
    name: string
}
export declare var GlyphVisAttr: GlyphVisAttr_Static
export interface IncludedModule {
    /* Fields of Pango.IncludedModule */
    list:any
    init:any
    exit:any
}
export interface IncludedModule_Static {
    name: string
}
export declare var IncludedModule: IncludedModule_Static
export interface Item {
    /* Fields of Pango.Item */
    offset:number
    length:number
    num_chars:number
    analysis:Analysis
    /* Methods of Pango.Item */
    copy(): Item | null
    free(): void
    split(split_index: number, split_offset: number): Item
}
export interface Item_Static {
    name: string
}
export declare class Item_Static {
    new(): Item
}
export declare var Item: Item_Static
export interface Language {
    /* Methods of Pango.Language */
    get_sample_string(): string
    get_scripts(): [ /* returnType */ Script[] | null, /* num_scripts */ number | null ]
    includes_script(script: Script): boolean
    matches(range_list: string): boolean
    to_string(): string
}
export interface Language_Static {
    name: string
}
export declare class Language_Static {
    from_string(language: string | null): Language | null
    get_default(): Language
}
export declare var Language: Language_Static
export interface LayoutClass {
}
export interface LayoutClass_Static {
    name: string
}
export declare var LayoutClass: LayoutClass_Static
export interface LayoutIter {
    /* Methods of Pango.LayoutIter */
    at_last_line(): boolean
    copy(): LayoutIter | null
    free(): void
    get_baseline(): number
    get_char_extents(): /* logical_rect */ Rectangle
    get_cluster_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    get_index(): number
    get_layout(): Layout
    get_layout_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    get_line(): LayoutLine
    get_line_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    get_line_readonly(): LayoutLine
    get_line_yrange(): [ /* y0_ */ number | null, /* y1_ */ number | null ]
    get_run(): LayoutRun | null
    get_run_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    get_run_readonly(): LayoutRun | null
    next_char(): boolean
    next_cluster(): boolean
    next_line(): boolean
    next_run(): boolean
}
export interface LayoutIter_Static {
    name: string
}
export declare var LayoutIter: LayoutIter_Static
export interface LayoutLine {
    /* Fields of Pango.LayoutLine */
    layout:Layout
    start_index:number
    length:number
    runs:GLib.SList
    is_paragraph_start:number
    resolved_dir:number
    /* Methods of Pango.LayoutLine */
    get_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    get_pixel_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    get_x_ranges(start_index: number, end_index: number): /* ranges */ number[]
    index_to_x(index_: number, trailing: boolean): /* x_pos */ number
    ref(): LayoutLine
    unref(): void
    x_to_index(x_pos: number): [ /* returnType */ boolean, /* index_ */ number, /* trailing */ number ]
}
export interface LayoutLine_Static {
    name: string
}
export declare var LayoutLine: LayoutLine_Static
export interface LogAttr {
    /* Fields of Pango.LogAttr */
    is_line_break:number
    is_mandatory_break:number
    is_char_break:number
    is_white:number
    is_cursor_position:number
    is_word_start:number
    is_word_end:number
    is_sentence_boundary:number
    is_sentence_start:number
    is_sentence_end:number
    backspace_deletes_character:number
    is_expandable_space:number
    is_word_boundary:number
}
export interface LogAttr_Static {
    name: string
}
export declare var LogAttr: LogAttr_Static
export interface Map {
    /* Methods of Pango.Map */
}
export interface Map_Static {
    name: string
}
export declare var Map: Map_Static
export interface MapEntry {
}
export interface MapEntry_Static {
    name: string
}
export declare var MapEntry: MapEntry_Static
export interface Matrix {
    /* Fields of Pango.Matrix */
    xx:number
    xy:number
    yx:number
    yy:number
    x0:number
    y0:number
    /* Methods of Pango.Matrix */
    concat(new_matrix: Matrix): void
    copy(): Matrix | null
    free(): void
    get_font_scale_factor(): number
    get_font_scale_factors(): [ /* xscale */ number | null, /* yscale */ number | null ]
    rotate(degrees: number): void
    scale(scale_x: number, scale_y: number): void
    transform_distance(dx: number, dy: number): void
    transform_pixel_rectangle(rect: Rectangle | null): void
    transform_point(x: number, y: number): void
    transform_rectangle(rect: Rectangle | null): void
    translate(tx: number, ty: number): void
}
export interface Matrix_Static {
    name: string
}
export declare var Matrix: Matrix_Static
export interface Rectangle {
    /* Fields of Pango.Rectangle */
    x:number
    y:number
    width:number
    height:number
}
export interface Rectangle_Static {
    name: string
}
export declare var Rectangle: Rectangle_Static
export interface RendererClass {
    /* Fields of Pango.RendererClass */
    draw_glyphs:any
    draw_rectangle:any
    draw_error_underline:any
    draw_shape:any
    draw_trapezoid:any
    draw_glyph:any
    part_changed:any
    begin:any
    end:any
    prepare_run:any
    draw_glyph_item:any
}
export interface RendererClass_Static {
    name: string
}
export declare var RendererClass: RendererClass_Static
export interface RendererPrivate {
}
export interface RendererPrivate_Static {
    name: string
}
export declare var RendererPrivate: RendererPrivate_Static
export interface ScriptForLang {
    /* Fields of Pango.ScriptForLang */
    lang:number[]
    scripts:Script[]
}
export interface ScriptForLang_Static {
    name: string
}
export declare var ScriptForLang: ScriptForLang_Static
export interface ScriptIter {
    /* Methods of Pango.ScriptIter */
    free(): void
    get_range(): [ /* start */ string | null, /* end */ string | null, /* script */ Script | null ]
    next(): boolean
}
export interface ScriptIter_Static {
    name: string
}
export declare var ScriptIter: ScriptIter_Static
export interface TabArray {
    /* Methods of Pango.TabArray */
    copy(): TabArray
    free(): void
    get_positions_in_pixels(): boolean
    get_size(): number
    get_tab(tab_index: number): [ /* alignment */ TabAlign | null, /* location */ number | null ]
    get_tabs(): [ /* alignments */ TabAlign | null, /* locations */ number[] | null ]
    resize(new_size: number): void
    set_tab(tab_index: number, alignment: TabAlign, location: number): void
}
export interface TabArray_Static {
    name: string
}
export declare class TabArray_Static {
    new(initial_size: number, positions_in_pixels: boolean): TabArray
}
export declare var TabArray: TabArray_Static
type Glyph = number
type GlyphUnit = number
type LayoutRun = GlyphItem