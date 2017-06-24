/**
 * Pango-1.0
 */

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
export interface AttrDataCopyFunc {
    (user_data: object): object
}
export interface AttrFilterFunc {
    (attribute: Attribute, user_data: object): boolean
}
export interface FontsetForeachFunc {
    (fontset: Fontset, font: Font, user_data: object): boolean
}
export interface Context_ConstructProps {
}
export interface Context {
    /* Methods of Context */
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
    /* Methods of Object */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Context_Static {
    new (config: Context_ConstructProps): Context
}
export declare class Context_Static {
    new(): Context
}
export declare var Context: Context_Static
export interface Engine_ConstructProps {
}
export interface Engine {
    /* Methods of Object */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Engine_Static {
    new (config: Engine_ConstructProps): Engine
}
export declare var Engine: Engine_Static
export interface EngineLang_ConstructProps {
}
export interface EngineLang {
    /* Methods of Object */
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
    /* Virtual methods of EngineLang */
    vfunc_script_break(text: string, len: number, analysis: Analysis, attrs: LogAttr, attrs_len: number): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface EngineLang_Static {
    new (config: EngineLang_ConstructProps): EngineLang
}
export declare var EngineLang: EngineLang_Static
export interface EngineShape_ConstructProps {
}
export interface EngineShape {
    /* Methods of Object */
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
    /* Virtual methods of EngineShape */
    vfunc_covers(font: Font, language: Language, wc: number): CoverageLevel
    vfunc_script_shape(font: Font, item_text: string, item_length: number, analysis: Analysis, glyphs: GlyphString, paragraph_text: string, paragraph_length: number): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface EngineShape_Static {
    new (config: EngineShape_ConstructProps): EngineShape
}
export declare var EngineShape: EngineShape_Static
export interface Font_ConstructProps {
}
export interface Font {
    /* Methods of Font */
    describe(): FontDescription
    describe_with_absolute_size(): FontDescription
    get_font_map(): FontMap | null
    get_glyph_extents(glyph: Glyph): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    get_metrics(language: Language | null): FontMetrics
    /* Methods of Object */
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
    /* Virtual methods of Font */
    vfunc_describe(): FontDescription
    vfunc_describe_absolute(): FontDescription
    vfunc_get_font_map(): FontMap | null
    vfunc_get_glyph_extents(glyph: Glyph): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    vfunc_get_metrics(language: Language | null): FontMetrics
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Font_Static {
    new (config: Font_ConstructProps): Font
}
export declare class Font_Static {
    descriptions_free(descs: FontDescription[] | null): void
}
export declare var Font: Font_Static
export interface FontFace_ConstructProps {
}
export interface FontFace {
    /* Methods of FontFace */
    describe(): FontDescription
    get_face_name(): string
    is_synthesized(): boolean
    list_sizes(): /* sizes */ number[] | null
    /* Methods of Object */
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
    /* Virtual methods of FontFace */
    vfunc_describe(): FontDescription
    vfunc_get_face_name(): string
    vfunc_is_synthesized(): boolean
    vfunc_list_sizes(): /* sizes */ number[] | null
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface FontFace_Static {
    new (config: FontFace_ConstructProps): FontFace
}
export declare var FontFace: FontFace_Static
export interface FontFamily_ConstructProps {
}
export interface FontFamily {
    /* Methods of FontFamily */
    get_name(): string
    is_monospace(): boolean
    list_faces(): /* faces */ FontFace[] | null
    /* Methods of Object */
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
    /* Virtual methods of FontFamily */
    vfunc_get_name(): string
    vfunc_is_monospace(): boolean
    vfunc_list_faces(): /* faces */ FontFace[] | null
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface FontFamily_Static {
    new (config: FontFamily_ConstructProps): FontFamily
}
export declare var FontFamily: FontFamily_Static
export interface FontMap_ConstructProps {
}
export interface FontMap {
    /* Methods of FontMap */
    changed(): void
    create_context(): Context
    get_serial(): number
    get_shape_engine_type(): string
    list_families(): /* families */ FontFamily[]
    load_font(context: Context, desc: FontDescription): Font | null
    load_fontset(context: Context, desc: FontDescription, language: Language): Fontset | null
    /* Methods of Object */
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
    /* Virtual methods of FontMap */
    vfunc_changed(): void
    vfunc_get_serial(): number
    vfunc_list_families(): /* families */ FontFamily[]
    vfunc_load_font(context: Context, desc: FontDescription): Font | null
    vfunc_load_fontset(context: Context, desc: FontDescription, language: Language): Fontset | null
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface FontMap_Static {
    new (config: FontMap_ConstructProps): FontMap
}
export declare var FontMap: FontMap_Static
export interface Fontset_ConstructProps {
}
export interface Fontset {
    /* Methods of Fontset */
    foreach(func: FontsetForeachFunc, data: object): void
    get_font(wc: number): Font
    get_metrics(): FontMetrics
    /* Methods of Object */
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
    /* Virtual methods of Fontset */
    vfunc_foreach(func: FontsetForeachFunc, data: object): void
    vfunc_get_font(wc: number): Font
    vfunc_get_language(): Language
    vfunc_get_metrics(): FontMetrics
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Fontset_Static {
    new (config: Fontset_ConstructProps): Fontset
}
export declare var Fontset: Fontset_Static
export interface FontsetSimple_ConstructProps {
}
export interface FontsetSimple {
    /* Methods of FontsetSimple */
    append(font: Font): void
    size(): number
    /* Methods of Fontset */
    foreach(func: FontsetForeachFunc, data: object): void
    get_font(wc: number): Font
    get_metrics(): FontMetrics
    /* Methods of Object */
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
    /* Virtual methods of Fontset */
    vfunc_foreach(func: FontsetForeachFunc, data: object): void
    vfunc_get_font(wc: number): Font
    vfunc_get_language(): Language
    vfunc_get_metrics(): FontMetrics
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface FontsetSimple_Static {
    new (config: FontsetSimple_ConstructProps): FontsetSimple
}
export declare class FontsetSimple_Static {
    new(language: Language): FontsetSimple
}
export declare var FontsetSimple: FontsetSimple_Static
export interface Layout_ConstructProps {
}
export interface Layout {
    /* Methods of Layout */
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
    /* Methods of Object */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Layout_Static {
    new (config: Layout_ConstructProps): Layout
}
export declare class Layout_Static {
    new(context: Context): Layout
}
export declare var Layout: Layout_Static
export interface Renderer_ConstructProps {
}
export interface Renderer {
    /* Methods of Renderer */
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
    /* Methods of Object */
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
    /* Virtual methods of Renderer */
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
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void))
}
export interface Renderer_Static {
    new (config: Renderer_ConstructProps): Renderer
}
export declare var Renderer: Renderer_Static
export interface Analysis_ConstructProps {
}
export interface Analysis {
}
export interface Analysis_Static {
    new (config: Analysis_ConstructProps): Analysis
}
export declare var Analysis: Analysis_Static
export interface AttrClass_ConstructProps {
}
export interface AttrClass {
}
export interface AttrClass_Static {
    new (config: AttrClass_ConstructProps): AttrClass
}
export declare var AttrClass: AttrClass_Static
export interface AttrColor_ConstructProps {
}
export interface AttrColor {
}
export interface AttrColor_Static {
    new (config: AttrColor_ConstructProps): AttrColor
}
export declare var AttrColor: AttrColor_Static
export interface AttrFloat_ConstructProps {
}
export interface AttrFloat {
}
export interface AttrFloat_Static {
    new (config: AttrFloat_ConstructProps): AttrFloat
}
export declare var AttrFloat: AttrFloat_Static
export interface AttrFontDesc_ConstructProps {
}
export interface AttrFontDesc {
}
export interface AttrFontDesc_Static {
    new (config: AttrFontDesc_ConstructProps): AttrFontDesc
}
export declare var AttrFontDesc: AttrFontDesc_Static
export interface AttrFontFeatures_ConstructProps {
}
export interface AttrFontFeatures {
}
export interface AttrFontFeatures_Static {
    new (config: AttrFontFeatures_ConstructProps): AttrFontFeatures
}
export declare var AttrFontFeatures: AttrFontFeatures_Static
export interface AttrInt_ConstructProps {
}
export interface AttrInt {
}
export interface AttrInt_Static {
    new (config: AttrInt_ConstructProps): AttrInt
}
export declare var AttrInt: AttrInt_Static
export interface AttrIterator_ConstructProps {
}
export interface AttrIterator {
    /* Methods of AttrIterator */
    destroy(): void
    get_attrs(): GLib.SList
    get_font(desc: FontDescription, language: Language | null, extra_attrs: GLib.SList | null): void
    next(): boolean
    range(): [ /* start */ number, /* end */ number ]
}
export interface AttrIterator_Static {
    new (config: AttrIterator_ConstructProps): AttrIterator
}
export declare var AttrIterator: AttrIterator_Static
export interface AttrLanguage_ConstructProps {
}
export interface AttrLanguage {
}
export interface AttrLanguage_Static {
    new (config: AttrLanguage_ConstructProps): AttrLanguage
}
export declare var AttrLanguage: AttrLanguage_Static
export interface AttrList_ConstructProps {
}
export interface AttrList {
    /* Methods of AttrList */
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
    new (config: AttrList_ConstructProps): AttrList
}
export declare class AttrList_Static {
    new(): AttrList
}
export declare var AttrList: AttrList_Static
export interface AttrShape_ConstructProps {
}
export interface AttrShape {
}
export interface AttrShape_Static {
    new (config: AttrShape_ConstructProps): AttrShape
}
export declare var AttrShape: AttrShape_Static
export interface AttrSize_ConstructProps {
}
export interface AttrSize {
}
export interface AttrSize_Static {
    new (config: AttrSize_ConstructProps): AttrSize
}
export declare var AttrSize: AttrSize_Static
export interface AttrString_ConstructProps {
}
export interface AttrString {
}
export interface AttrString_Static {
    new (config: AttrString_ConstructProps): AttrString
}
export declare var AttrString: AttrString_Static
export interface Attribute_ConstructProps {
}
export interface Attribute {
    /* Methods of Attribute */
    destroy(): void
    equal(attr2: Attribute): boolean
    init(klass: AttrClass): void
}
export interface Attribute_Static {
    new (config: Attribute_ConstructProps): Attribute
}
export declare var Attribute: Attribute_Static
export interface Color_ConstructProps {
}
export interface Color {
    /* Methods of Color */
    copy(): Color | null
    free(): void
    parse(spec: string): boolean
    to_string(): string
}
export interface Color_Static {
    new (config: Color_ConstructProps): Color
}
export declare var Color: Color_Static
export interface ContextClass_ConstructProps {
}
export interface ContextClass {
}
export interface ContextClass_Static {
    new (config: ContextClass_ConstructProps): ContextClass
}
export declare var ContextClass: ContextClass_Static
export interface Coverage_ConstructProps {
}
export interface Coverage {
    /* Methods of Coverage */
    get(index_: number): CoverageLevel
    max(other: Coverage): void
    set(index_: number, level: CoverageLevel): void
    to_bytes(): [ /* bytes */ number[], /* n_bytes */ number ]
    unref(): void
}
export interface Coverage_Static {
    new (config: Coverage_ConstructProps): Coverage
}
export declare var Coverage: Coverage_Static
export interface EngineClass_ConstructProps {
}
export interface EngineClass {
}
export interface EngineClass_Static {
    new (config: EngineClass_ConstructProps): EngineClass
}
export declare var EngineClass: EngineClass_Static
export interface EngineInfo_ConstructProps {
}
export interface EngineInfo {
}
export interface EngineInfo_Static {
    new (config: EngineInfo_ConstructProps): EngineInfo
}
export declare var EngineInfo: EngineInfo_Static
export interface EngineLangClass_ConstructProps {
}
export interface EngineLangClass {
}
export interface EngineLangClass_Static {
    new (config: EngineLangClass_ConstructProps): EngineLangClass
}
export declare var EngineLangClass: EngineLangClass_Static
export interface EngineScriptInfo_ConstructProps {
}
export interface EngineScriptInfo {
}
export interface EngineScriptInfo_Static {
    new (config: EngineScriptInfo_ConstructProps): EngineScriptInfo
}
export declare var EngineScriptInfo: EngineScriptInfo_Static
export interface EngineShapeClass_ConstructProps {
}
export interface EngineShapeClass {
}
export interface EngineShapeClass_Static {
    new (config: EngineShapeClass_ConstructProps): EngineShapeClass
}
export declare var EngineShapeClass: EngineShapeClass_Static
export interface FontClass_ConstructProps {
}
export interface FontClass {
}
export interface FontClass_Static {
    new (config: FontClass_ConstructProps): FontClass
}
export declare var FontClass: FontClass_Static
export interface FontDescription_ConstructProps {
}
export interface FontDescription {
    /* Methods of FontDescription */
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
    new (config: FontDescription_ConstructProps): FontDescription
}
export declare class FontDescription_Static {
    new(): FontDescription
    from_string(str: string): FontDescription
}
export declare var FontDescription: FontDescription_Static
export interface FontFaceClass_ConstructProps {
}
export interface FontFaceClass {
}
export interface FontFaceClass_Static {
    new (config: FontFaceClass_ConstructProps): FontFaceClass
}
export declare var FontFaceClass: FontFaceClass_Static
export interface FontFamilyClass_ConstructProps {
}
export interface FontFamilyClass {
}
export interface FontFamilyClass_Static {
    new (config: FontFamilyClass_ConstructProps): FontFamilyClass
}
export declare var FontFamilyClass: FontFamilyClass_Static
export interface FontMapClass_ConstructProps {
}
export interface FontMapClass {
}
export interface FontMapClass_Static {
    new (config: FontMapClass_ConstructProps): FontMapClass
}
export declare var FontMapClass: FontMapClass_Static
export interface FontMetrics_ConstructProps {
}
export interface FontMetrics {
    /* Methods of FontMetrics */
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
    new (config: FontMetrics_ConstructProps): FontMetrics
}
export declare class FontMetrics_Static {
    new(): FontMetrics
}
export declare var FontMetrics: FontMetrics_Static
export interface FontsetClass_ConstructProps {
}
export interface FontsetClass {
}
export interface FontsetClass_Static {
    new (config: FontsetClass_ConstructProps): FontsetClass
}
export declare var FontsetClass: FontsetClass_Static
export interface FontsetSimpleClass_ConstructProps {
}
export interface FontsetSimpleClass {
}
export interface FontsetSimpleClass_Static {
    new (config: FontsetSimpleClass_ConstructProps): FontsetSimpleClass
}
export declare var FontsetSimpleClass: FontsetSimpleClass_Static
export interface GlyphGeometry_ConstructProps {
}
export interface GlyphGeometry {
}
export interface GlyphGeometry_Static {
    new (config: GlyphGeometry_ConstructProps): GlyphGeometry
}
export declare var GlyphGeometry: GlyphGeometry_Static
export interface GlyphInfo_ConstructProps {
}
export interface GlyphInfo {
}
export interface GlyphInfo_Static {
    new (config: GlyphInfo_ConstructProps): GlyphInfo
}
export declare var GlyphInfo: GlyphInfo_Static
export interface GlyphItem_ConstructProps {
}
export interface GlyphItem {
    /* Methods of GlyphItem */
    apply_attrs(text: string, list: AttrList): GLib.SList
    copy(): GlyphItem | null
    free(): void
    get_logical_widths(text: string, logical_widths: number[]): void
    letter_space(text: string, log_attrs: LogAttr[], letter_spacing: number): void
    split(text: string, split_index: number): GlyphItem
}
export interface GlyphItem_Static {
    new (config: GlyphItem_ConstructProps): GlyphItem
}
export declare var GlyphItem: GlyphItem_Static
export interface GlyphItemIter_ConstructProps {
}
export interface GlyphItemIter {
    /* Methods of GlyphItemIter */
    copy(): GlyphItemIter | null
    free(): void
    init_end(glyph_item: GlyphItem, text: string): boolean
    init_start(glyph_item: GlyphItem, text: string): boolean
    next_cluster(): boolean
    prev_cluster(): boolean
}
export interface GlyphItemIter_Static {
    new (config: GlyphItemIter_ConstructProps): GlyphItemIter
}
export declare var GlyphItemIter: GlyphItemIter_Static
export interface GlyphString_ConstructProps {
}
export interface GlyphString {
    /* Methods of GlyphString */
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
    new (config: GlyphString_ConstructProps): GlyphString
}
export declare class GlyphString_Static {
    new(): GlyphString
}
export declare var GlyphString: GlyphString_Static
export interface GlyphVisAttr_ConstructProps {
}
export interface GlyphVisAttr {
}
export interface GlyphVisAttr_Static {
    new (config: GlyphVisAttr_ConstructProps): GlyphVisAttr
}
export declare var GlyphVisAttr: GlyphVisAttr_Static
export interface IncludedModule_ConstructProps {
}
export interface IncludedModule {
}
export interface IncludedModule_Static {
    new (config: IncludedModule_ConstructProps): IncludedModule
}
export declare var IncludedModule: IncludedModule_Static
export interface Item_ConstructProps {
}
export interface Item {
    /* Methods of Item */
    copy(): Item | null
    free(): void
    split(split_index: number, split_offset: number): Item
}
export interface Item_Static {
    new (config: Item_ConstructProps): Item
}
export declare class Item_Static {
    new(): Item
}
export declare var Item: Item_Static
export interface Language_ConstructProps {
}
export interface Language {
    /* Methods of Language */
    get_sample_string(): string
    get_scripts(): [ /* returnType */ Script[] | null, /* num_scripts */ number | null ]
    includes_script(script: Script): boolean
    matches(range_list: string): boolean
    to_string(): string
}
export interface Language_Static {
    new (config: Language_ConstructProps): Language
}
export declare class Language_Static {
    from_string(language: string | null): Language | null
    get_default(): Language
}
export declare var Language: Language_Static
export interface LayoutClass_ConstructProps {
}
export interface LayoutClass {
}
export interface LayoutClass_Static {
    new (config: LayoutClass_ConstructProps): LayoutClass
}
export declare var LayoutClass: LayoutClass_Static
export interface LayoutIter_ConstructProps {
}
export interface LayoutIter {
    /* Methods of LayoutIter */
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
    new (config: LayoutIter_ConstructProps): LayoutIter
}
export declare var LayoutIter: LayoutIter_Static
export interface LayoutLine_ConstructProps {
}
export interface LayoutLine {
    /* Methods of LayoutLine */
    get_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    get_pixel_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    get_x_ranges(start_index: number, end_index: number): [ /* ranges */ number[], /* n_ranges */ number ]
    index_to_x(index_: number, trailing: boolean): /* x_pos */ number
    ref(): LayoutLine
    unref(): void
    x_to_index(x_pos: number): [ /* returnType */ boolean, /* index_ */ number, /* trailing */ number ]
}
export interface LayoutLine_Static {
    new (config: LayoutLine_ConstructProps): LayoutLine
}
export declare var LayoutLine: LayoutLine_Static
export interface LogAttr_ConstructProps {
}
export interface LogAttr {
}
export interface LogAttr_Static {
    new (config: LogAttr_ConstructProps): LogAttr
}
export declare var LogAttr: LogAttr_Static
export interface Map_ConstructProps {
}
export interface Map {
    /* Methods of Map */
}
export interface Map_Static {
    new (config: Map_ConstructProps): Map
}
export declare var Map: Map_Static
export interface MapEntry_ConstructProps {
}
export interface MapEntry {
}
export interface MapEntry_Static {
    new (config: MapEntry_ConstructProps): MapEntry
}
export declare var MapEntry: MapEntry_Static
export interface Matrix_ConstructProps {
}
export interface Matrix {
    /* Methods of Matrix */
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
    new (config: Matrix_ConstructProps): Matrix
}
export declare var Matrix: Matrix_Static
export interface Rectangle_ConstructProps {
}
export interface Rectangle {
}
export interface Rectangle_Static {
    new (config: Rectangle_ConstructProps): Rectangle
}
export declare var Rectangle: Rectangle_Static
export interface RendererClass_ConstructProps {
}
export interface RendererClass {
}
export interface RendererClass_Static {
    new (config: RendererClass_ConstructProps): RendererClass
}
export declare var RendererClass: RendererClass_Static
export interface RendererPrivate_ConstructProps {
}
export interface RendererPrivate {
}
export interface RendererPrivate_Static {
    new (config: RendererPrivate_ConstructProps): RendererPrivate
}
export declare var RendererPrivate: RendererPrivate_Static
export interface ScriptForLang_ConstructProps {
}
export interface ScriptForLang {
}
export interface ScriptForLang_Static {
    new (config: ScriptForLang_ConstructProps): ScriptForLang
}
export declare var ScriptForLang: ScriptForLang_Static
export interface ScriptIter_ConstructProps {
}
export interface ScriptIter {
    /* Methods of ScriptIter */
    free(): void
    get_range(): [ /* start */ string | null, /* end */ string | null, /* script */ Script | null ]
    next(): boolean
}
export interface ScriptIter_Static {
    new (config: ScriptIter_ConstructProps): ScriptIter
}
export declare var ScriptIter: ScriptIter_Static
export interface TabArray_ConstructProps {
}
export interface TabArray {
    /* Methods of TabArray */
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
    new (config: TabArray_ConstructProps): TabArray
}
export declare class TabArray_Static {
    new(initial_size: number, positions_in_pixels: boolean): TabArray
}
export declare var TabArray: TabArray_Static
type Glyph = number
type GlyphUnit = number
type LayoutRun = GlyphItem