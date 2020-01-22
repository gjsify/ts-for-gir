/**
 * Pango-1.0
 */

/// <reference path="cairo.d.ts" />
/// <reference path="GObject.d.ts" />
/// <reference path="GLib.d.ts" />

declare namespace Pango {

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
    BASSA_VAH,
    CAUCASIAN_ALBANIAN,
    DUPLOYAN,
    ELBASAN,
    GRANTHA,
    KHOJKI,
    KHUDAWADI,
    LINEAR_A,
    MAHAJANI,
    MANICHAEAN,
    MENDE_KIKAKUI,
    MODI,
    MRO,
    NABATAEAN,
    OLD_NORTH_ARABIAN,
    OLD_PERMIC,
    PAHAWH_HMONG,
    PALMYRENE,
    PAU_CIN_HAU,
    PSALTER_PAHLAVI,
    SIDDHAM,
    TIRHUTA,
    WARANG_CITI,
    AHOM,
    ANATOLIAN_HIEROGLYPHS,
    HATRAN,
    MULTANI,
    OLD_HUNGARIAN,
    SIGNWRITING,
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
    VARIATIONS,
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
export const VERSION_MIN_REQUIRED:number
export function attrTypeGetName(type: AttrType): string | null
export function attrTypeRegister(name: string): AttrType
export function bidiTypeForUnichar(ch: number): BidiType
/* Function 'break' is a reserved word */
export function configKeyGet(key: string): string
export function configKeyGetSystem(key: string): string
export function defaultBreak(text: string, length: number, analysis: Analysis | null, attrs: LogAttr, attrs_len: number): void
export function extentsToPixels(inclusive?: Rectangle | null, nearest?: Rectangle | null): void
export function findBaseDir(text: string, length: number): Direction
export function findParagraphBoundary(text: string, length: number): [ /* paragraph_delimiter_index */ number, /* next_paragraph_start */ number ]
export function fontDescriptionFromString(str: string): FontDescription
export function getLibSubdirectory(): string
export function getLogAttrs(text: string, length: number, level: number, language: Language, log_attrs: LogAttr[]): void
export function getMirrorChar(ch: number, mirrored_ch: number): boolean
export function getSysconfSubdirectory(): string
export function gravityGetForMatrix(matrix?: Matrix | null): Gravity
export function gravityGetForScript(script: Script, base_gravity: Gravity, hint: GravityHint): Gravity
export function gravityGetForScriptAndWidth(script: Script, wide: boolean, base_gravity: Gravity, hint: GravityHint): Gravity
export function gravityToRotation(gravity: Gravity): number
export function isZeroWidth(ch: number): boolean
export function itemize(context: Context, text: string, start_index: number, length: number, attrs: AttrList, cached_iter?: AttrIterator | null): Item[]
export function itemizeWithBaseDir(context: Context, base_dir: Direction, text: string, start_index: number, length: number, attrs: AttrList, cached_iter?: AttrIterator | null): Item[]
export function languageFromString(language?: string | null): Language | null
export function languageGetDefault(): Language
export function log2visGetEmbeddingLevels(text: string, length: number, pbase_dir: Direction): number
export function lookupAliases(fontname: string): /* families */ string[]
export function markupParserFinish(context: GLib.MarkupParseContext): [ /* returnType */ boolean, /* attr_list */ AttrList | null, /* text */ string | null, /* accel_char */ number | null ]
export function markupParserNew(accel_marker: number): GLib.MarkupParseContext
export function moduleRegister(module: IncludedModule): void
export function parseEnum(type: GObject.Type, str: string | null, warn: boolean): [ /* returnType */ boolean, /* value */ number | null, /* possible_values */ string | null ]
export function parseMarkup(markup_text: string, length: number, accel_marker: number): [ /* returnType */ boolean, /* attr_list */ AttrList | null, /* text */ string | null, /* accel_char */ number | null ]
export function parseStretch(str: string, warn: boolean): [ /* returnType */ boolean, /* stretch */ Stretch ]
export function parseStyle(str: string, warn: boolean): [ /* returnType */ boolean, /* style */ Style ]
export function parseVariant(str: string, warn: boolean): [ /* returnType */ boolean, /* variant */ Variant ]
export function parseWeight(str: string, warn: boolean): [ /* returnType */ boolean, /* weight */ Weight ]
export function quantizeLineGeometry(thickness: number, position: number): void
export function readLine(stream?: object | null): [ /* returnType */ number, /* str */ GLib.String ]
export function reorderItems(logical_items: Item[]): Item[]
export function scanInt(pos: string): [ /* returnType */ boolean, /* out */ number ]
export function scanString(pos: string): [ /* returnType */ boolean, /* out */ GLib.String ]
export function scanWord(pos: string): [ /* returnType */ boolean, /* out */ GLib.String ]
export function scriptForUnichar(ch: number): Script
export function scriptGetSampleLanguage(script: Script): Language | null
export function shape(text: string, length: number, analysis: Analysis, glyphs: GlyphString): void
export function shapeFull(item_text: string, item_length: number, paragraph_text: string | null, paragraph_length: number, analysis: Analysis, glyphs: GlyphString): void
export function skipSpace(pos: string): boolean
export function splitFileList(str: string): string[]
export function trimString(str: string): string
export function unicharDirection(ch: number): Direction
export function unitsFromDouble(d: number): number
export function unitsToDouble(i: number): number
export function version(): number
export function versionCheck(required_major: number, required_minor: number, required_micro: number): string | null
export function versionString(): string
export interface AttrDataCopyFunc {
    (): object | null
}
export interface AttrFilterFunc {
    (attribute: Attribute): boolean
}
export interface FontsetForeachFunc {
    (fontset: Fontset, font: Font): boolean
}
export interface Context_ConstructProps extends GObject.Object_ConstructProps {
}
export class Context {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.Context */
    changed(): void
    getBaseDir(): Direction
    getBaseGravity(): Gravity
    getFontDescription(): FontDescription
    getFontMap(): FontMap
    getGravity(): Gravity
    getGravityHint(): GravityHint
    getLanguage(): Language
    getMatrix(): Matrix | null
    getMetrics(desc?: FontDescription | null, language?: Language | null): FontMetrics
    getSerial(): number
    listFamilies(): /* families */ FontFamily[]
    loadFont(desc: FontDescription): Font | null
    loadFontset(desc: FontDescription, language: Language): Fontset | null
    setBaseDir(direction: Direction): void
    setBaseGravity(gravity: Gravity): void
    setFontDescription(desc: FontDescription): void
    setFontMap(font_map: FontMap): void
    setGravityHint(hint: GravityHint): void
    setLanguage(language: Language): void
    setMatrix(matrix?: Matrix | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: Context, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: Context, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: Context, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    static new(): Context
    static $gtype: GObject.Type
}
export interface Engine_ConstructProps extends GObject.Object_ConstructProps {
}
export class Engine {
    /* Fields of Pango.Engine */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: Engine, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: Engine, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: Engine, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: Engine_ConstructProps)
    _init (config?: Engine_ConstructProps): void
    static $gtype: GObject.Type
}
export interface EngineLang_ConstructProps extends Engine_ConstructProps {
}
export class EngineLang {
    /* Fields of Pango.EngineLang */
    /* Fields of Pango.Engine */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Pango.EngineLang */
    vfuncScriptBreak?(text: string, len: number, analysis: Analysis, attrs: LogAttr, attrs_len: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: EngineLang, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: EngineLang, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: EngineLang, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: EngineLang, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: EngineLang, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: EngineLang_ConstructProps)
    _init (config?: EngineLang_ConstructProps): void
    static $gtype: GObject.Type
}
export interface EngineShape_ConstructProps extends Engine_ConstructProps {
}
export class EngineShape {
    /* Fields of Pango.EngineShape */
    parent_instance:Engine
    /* Fields of Pango.Engine */
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Pango.EngineShape */
    vfuncCovers?(font: Font, language: Language, wc: number): CoverageLevel
    vfuncScriptShape?(font: Font, item_text: string, item_length: number, analysis: Analysis, glyphs: GlyphString, paragraph_text: string, paragraph_length: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: EngineShape, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: EngineShape, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: EngineShape, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: EngineShape, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: EngineShape, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: EngineShape_ConstructProps)
    _init (config?: EngineShape_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Font_ConstructProps extends GObject.Object_ConstructProps {
}
export class Font {
    /* Fields of Pango.Font */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.Font */
    describe(): FontDescription
    describeWithAbsoluteSize(): FontDescription
    findShaper(language: Language, ch: number): EngineShape
    getFontMap(): FontMap | null
    getGlyphExtents(glyph: Glyph): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    getMetrics(language?: Language | null): FontMetrics
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Pango.Font */
    vfuncDescribe?(): FontDescription
    vfuncDescribeAbsolute?(): FontDescription
    vfuncFindShaper?(language: Language, ch: number): EngineShape
    vfuncGetFontMap?(): FontMap | null
    vfuncGetGlyphExtents?(glyph: Glyph): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    vfuncGetMetrics?(language?: Language | null): FontMetrics
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Font, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Font, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: Font, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: Font, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: Font, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: Font_ConstructProps)
    _init (config?: Font_ConstructProps): void
    static descriptionsFree(descs: FontDescription[] | null): void
    static $gtype: GObject.Type
}
export interface FontFace_ConstructProps extends GObject.Object_ConstructProps {
}
export class FontFace {
    /* Fields of Pango.FontFace */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.FontFace */
    describe(): FontDescription
    getFaceName(): string
    isSynthesized(): boolean
    listSizes(): /* sizes */ number[] | null
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Pango.FontFace */
    vfuncDescribe?(): FontDescription
    vfuncGetFaceName?(): string
    vfuncIsSynthesized?(): boolean
    vfuncListSizes?(): /* sizes */ number[] | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FontFace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FontFace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: FontFace, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: FontFace, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: FontFace, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: FontFace_ConstructProps)
    _init (config?: FontFace_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FontFamily_ConstructProps extends GObject.Object_ConstructProps {
}
export class FontFamily {
    /* Fields of Pango.FontFamily */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.FontFamily */
    getName(): string
    isMonospace(): boolean
    listFaces(): /* faces */ FontFace[] | null
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Pango.FontFamily */
    vfuncGetName?(): string
    vfuncIsMonospace?(): boolean
    vfuncListFaces?(): /* faces */ FontFace[] | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FontFamily, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FontFamily, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: FontFamily, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: FontFamily, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: FontFamily, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: FontFamily_ConstructProps)
    _init (config?: FontFamily_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FontMap_ConstructProps extends GObject.Object_ConstructProps {
}
export class FontMap {
    /* Fields of Pango.FontMap */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.FontMap */
    changed(): void
    createContext(): Context
    getSerial(): number
    getShapeEngineType(): string
    listFamilies(): /* families */ FontFamily[]
    loadFont(context: Context, desc: FontDescription): Font | null
    loadFontset(context: Context, desc: FontDescription, language: Language): Fontset | null
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Pango.FontMap */
    vfuncChanged?(): void
    vfuncGetSerial?(): number
    vfuncListFamilies?(): /* families */ FontFamily[]
    vfuncLoadFont?(context: Context, desc: FontDescription): Font | null
    vfuncLoadFontset?(context: Context, desc: FontDescription, language: Language): Fontset | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: FontMap, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: FontMap, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: FontMap, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: FontMap_ConstructProps)
    _init (config?: FontMap_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Fontset_ConstructProps extends GObject.Object_ConstructProps {
}
export class Fontset {
    /* Fields of Pango.Fontset */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.Fontset */
    foreach(func: FontsetForeachFunc): void
    getFont(wc: number): Font
    getMetrics(): FontMetrics
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Pango.Fontset */
    vfuncForeach?(func: FontsetForeachFunc): void
    vfuncGetFont?(wc: number): Font
    vfuncGetLanguage?(): Language
    vfuncGetMetrics?(): FontMetrics
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Fontset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Fontset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: Fontset, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: Fontset, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: Fontset, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: Fontset_ConstructProps)
    _init (config?: Fontset_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FontsetSimple_ConstructProps extends Fontset_ConstructProps {
}
export class FontsetSimple {
    /* Fields of Pango.Fontset */
    parent_instance:GObject.Object
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.FontsetSimple */
    append(font: Font): void
    size(): number
    /* Methods of Pango.Fontset */
    foreach(func: FontsetForeachFunc): void
    getFont(wc: number): Font
    getMetrics(): FontMetrics
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Pango.Fontset */
    vfuncForeach?(func: FontsetForeachFunc): void
    vfuncGetFont?(wc: number): Font
    vfuncGetLanguage?(): Language
    vfuncGetMetrics?(): FontMetrics
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: FontsetSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: FontsetSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: FontsetSimple, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: FontsetSimple, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: FontsetSimple, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: FontsetSimple_ConstructProps)
    _init (config?: FontsetSimple_ConstructProps): void
    static new(language: Language): FontsetSimple
    static $gtype: GObject.Type
}
export interface Layout_ConstructProps extends GObject.Object_ConstructProps {
}
export class Layout {
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.Layout */
    contextChanged(): void
    copy(): Layout
    getAlignment(): Alignment
    getAttributes(): AttrList
    getAutoDir(): boolean
    getBaseline(): number
    getCharacterCount(): number
    getContext(): Context
    getCursorPos(index_: number): [ /* strong_pos */ Rectangle | null, /* weak_pos */ Rectangle | null ]
    getEllipsize(): EllipsizeMode
    getExtents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    getFontDescription(): FontDescription | null
    getHeight(): number
    getIndent(): number
    getIter(): LayoutIter
    getJustify(): boolean
    getLine(line: number): LayoutLine | null
    getLineCount(): number
    getLineReadonly(line: number): LayoutLine | null
    getLines(): LayoutLine[]
    getLinesReadonly(): LayoutLine[]
    getLogAttrs(): /* attrs */ LogAttr[]
    getLogAttrsReadonly(): LogAttr[]
    getPixelExtents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    getPixelSize(): [ /* width */ number | null, /* height */ number | null ]
    getSerial(): number
    getSingleParagraphMode(): boolean
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    getSpacing(): number
    getTabs(): TabArray | null
    getText(): string
    getUnknownGlyphsCount(): number
    getWidth(): number
    getWrap(): WrapMode
    indexToLineX(index_: number, trailing: boolean): [ /* line */ number | null, /* x_pos */ number | null ]
    indexToPos(index_: number): /* pos */ Rectangle
    isEllipsized(): boolean
    isWrapped(): boolean
    moveCursorVisually(strong: boolean, old_index: number, old_trailing: number, direction: number): [ /* new_index */ number, /* new_trailing */ number ]
    setAlignment(alignment: Alignment): void
    setAttributes(attrs?: AttrList | null): void
    setAutoDir(auto_dir: boolean): void
    setEllipsize(ellipsize: EllipsizeMode): void
    setFontDescription(desc?: FontDescription | null): void
    setHeight(height: number): void
    setIndent(indent: number): void
    setJustify(justify: boolean): void
    setMarkup(markup: string, length: number): void
    setMarkupWithAccel(markup: string, length: number, accel_marker: number): /* accel_char */ number | null
    setSingleParagraphMode(setting: boolean): void
    setSpacing(spacing: number): void
    setTabs(tabs?: TabArray | null): void
    setText(text: string, length: number): void
    setWidth(width: number): void
    setWrap(wrap: WrapMode): void
    xyToIndex(x: number, y: number): [ /* returnType */ boolean, /* index_ */ number, /* trailing */ number ]
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Layout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Layout, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: Layout, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: Layout, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: Layout, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: Layout_ConstructProps)
    _init (config?: Layout_ConstructProps): void
    static new(context: Context): Layout
    static $gtype: GObject.Type
}
export interface Renderer_ConstructProps extends GObject.Object_ConstructProps {
}
export class Renderer {
    /* Fields of Pango.Renderer */
    matrix:Matrix
    /* Fields of GObject.Object */
    g_type_instance:GObject.TypeInstance
    /* Methods of Pango.Renderer */
    activate(): void
    deactivate(): void
    drawErrorUnderline(x: number, y: number, width: number, height: number): void
    drawGlyph(font: Font, glyph: Glyph, x: number, y: number): void
    drawGlyphItem(text: string | null, glyph_item: GlyphItem, x: number, y: number): void
    drawGlyphs(font: Font, glyphs: GlyphString, x: number, y: number): void
    drawLayout(layout: Layout, x: number, y: number): void
    drawLayoutLine(line: LayoutLine, x: number, y: number): void
    drawRectangle(part: RenderPart, x: number, y: number, width: number, height: number): void
    drawTrapezoid(part: RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    getAlpha(part: RenderPart): number
    getColor(part: RenderPart): Color | null
    getLayout(): Layout | null
    getLayoutLine(): LayoutLine | null
    getMatrix(): Matrix | null
    partChanged(part: RenderPart): void
    setAlpha(part: RenderPart, alpha: number): void
    setColor(part: RenderPart, color?: Color | null): void
    setMatrix(matrix?: Matrix | null): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of Pango.Renderer */
    vfuncBegin?(): void
    vfuncDrawErrorUnderline?(x: number, y: number, width: number, height: number): void
    vfuncDrawGlyph?(font: Font, glyph: Glyph, x: number, y: number): void
    vfuncDrawGlyphItem?(text: string | null, glyph_item: GlyphItem, x: number, y: number): void
    vfuncDrawGlyphs?(font: Font, glyphs: GlyphString, x: number, y: number): void
    vfuncDrawRectangle?(part: RenderPart, x: number, y: number, width: number, height: number): void
    vfuncDrawShape?(attr: AttrShape, x: number, y: number): void
    vfuncDrawTrapezoid?(part: RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    vfuncEnd?(): void
    vfuncPartChanged?(part: RenderPart): void
    vfuncPrepareRun?(run: LayoutRun): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify?(pspec: GObject.ParamSpec): void
    vfuncSetProperty?(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: ((event: Renderer, pspec: GObject.ParamSpec) => void)): EventEmitter
    once(sigName: "notify", callback: ((event: Renderer, pspec: GObject.ParamSpec) => void)): EventEmitter
    off(sigName: "notify", callback: ((event: Renderer, pspec: GObject.ParamSpec) => void)): EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): EventEmitter
    once(sigName: string, callback: any): EventEmitter
    off(sigName: string, callback: any): EventEmitter
    static name: string
    constructor (config?: Renderer_ConstructProps)
    _init (config?: Renderer_ConstructProps): void
    static $gtype: GObject.Type
}
export class Analysis {
    /* Fields of Pango.Analysis */
    shape_engine:EngineShape
    lang_engine:EngineLang
    font:Font
    level:number
    gravity:number
    flags:number
    script:number
    language:Language
    extra_attrs:object[]
    static name: string
}
export class AttrClass {
    /* Fields of Pango.AttrClass */
    type:AttrType
    destroy:any
    equal:any
    static name: string
}
export class AttrColor {
    /* Fields of Pango.AttrColor */
    attr:Attribute
    color:Color
    static name: string
}
export class AttrFloat {
    /* Fields of Pango.AttrFloat */
    attr:Attribute
    value:number
    static name: string
}
export class AttrFontDesc {
    /* Fields of Pango.AttrFontDesc */
    attr:Attribute
    desc:FontDescription
    static name: string
}
export class AttrFontFeatures {
    /* Fields of Pango.AttrFontFeatures */
    attr:Attribute
    features:string
    static name: string
}
export class AttrInt {
    /* Fields of Pango.AttrInt */
    attr:Attribute
    value:number
    static name: string
}
export class AttrIterator {
    /* Methods of Pango.AttrIterator */
    destroy(): void
    getAttrs(): Attribute[]
    getFont(desc: FontDescription, language?: Language | null, extra_attrs?: Attribute[] | null): void
    next(): boolean
    range(): [ /* start */ number, /* end */ number ]
    static name: string
}
export class AttrLanguage {
    /* Fields of Pango.AttrLanguage */
    attr:Attribute
    value:Language
    static name: string
}
export class AttrList {
    /* Methods of Pango.AttrList */
    change(attr: Attribute): void
    copy(): AttrList | null
    filter(func: AttrFilterFunc): AttrList | null
    insert(attr: Attribute): void
    insertBefore(attr: Attribute): void
    ref(): AttrList
    splice(other: AttrList, pos: number, len: number): void
    unref(): void
    static name: string
    static new(): AttrList
    constructor()
    static new(): AttrList
}
export class AttrShape {
    /* Fields of Pango.AttrShape */
    attr:Attribute
    ink_rect:Rectangle
    logical_rect:Rectangle
    data:object
    copy_func:AttrDataCopyFunc
    destroy_func:GLib.DestroyNotify
    static name: string
}
export class AttrSize {
    /* Fields of Pango.AttrSize */
    attr:Attribute
    size:number
    absolute:number
    static name: string
}
export class AttrString {
    /* Fields of Pango.AttrString */
    attr:Attribute
    value:string
    static name: string
}
export class Attribute {
    /* Fields of Pango.Attribute */
    klass:AttrClass
    start_index:number
    end_index:number
    /* Methods of Pango.Attribute */
    destroy(): void
    equal(attr2: Attribute): boolean
    init(klass: AttrClass): void
    static name: string
}
export class Color {
    /* Fields of Pango.Color */
    red:number
    green:number
    blue:number
    /* Methods of Pango.Color */
    copy(): Color | null
    free(): void
    parse(spec: string): boolean
    static name: string
}
export class Coverage {
    /* Methods of Pango.Coverage */
    get(index_: number): CoverageLevel
    max(other: Coverage): void
    set(index_: number, level: CoverageLevel): void
    toBytes(): /* bytes */ any
    unref(): void
    static name: string
}
export class EngineInfo {
    /* Fields of Pango.EngineInfo */
    id:string
    engine_type:string
    render_type:string
    scripts:EngineScriptInfo
    n_scripts:number
    static name: string
}
export class EngineScriptInfo {
    /* Fields of Pango.EngineScriptInfo */
    script:Script
    langs:string
    static name: string
}
export class FontDescription {
    /* Methods of Pango.FontDescription */
    betterMatch(old_match: FontDescription | null, new_match: FontDescription): boolean
    copy(): FontDescription | null
    copyStatic(): FontDescription | null
    equal(desc2: FontDescription): boolean
    free(): void
    getFamily(): string | null
    getGravity(): Gravity
    getSetFields(): FontMask
    getSize(): number
    getSizeIsAbsolute(): boolean
    getStretch(): Stretch
    getStyle(): Style
    getVariant(): Variant
    getVariations(): string | null
    getWeight(): Weight
    hash(): number
    merge(desc_to_merge: FontDescription | null, replace_existing: boolean): void
    mergeStatic(desc_to_merge: FontDescription, replace_existing: boolean): void
    setAbsoluteSize(size: number): void
    setFamily(family: string): void
    setFamilyStatic(family: string): void
    setGravity(gravity: Gravity): void
    setSize(size: number): void
    setStretch(stretch: Stretch): void
    setStyle(style: Style): void
    setVariant(variant: Variant): void
    setVariations(settings: string): void
    setVariationsStatic(settings: string): void
    setWeight(weight: Weight): void
    toFilename(): string
    unsetFields(to_unset: FontMask): void
    static name: string
    static new(): FontDescription
    constructor()
    static new(): FontDescription
    static fromString(str: string): FontDescription
}
export class FontMetrics {
    /* Fields of Pango.FontMetrics */
    /* Methods of Pango.FontMetrics */
    getApproximateCharWidth(): number
    getApproximateDigitWidth(): number
    getAscent(): number
    getDescent(): number
    getStrikethroughPosition(): number
    getStrikethroughThickness(): number
    getUnderlinePosition(): number
    getUnderlineThickness(): number
    ref(): FontMetrics | null
    unref(): void
    static name: string
    static new(): FontMetrics
    constructor()
    static new(): FontMetrics
}
export class GlyphGeometry {
    /* Fields of Pango.GlyphGeometry */
    width:GlyphUnit
    x_offset:GlyphUnit
    y_offset:GlyphUnit
    static name: string
}
export class GlyphInfo {
    /* Fields of Pango.GlyphInfo */
    glyph:Glyph
    geometry:GlyphGeometry
    attr:GlyphVisAttr
    static name: string
}
export class GlyphItem {
    /* Fields of Pango.GlyphItem */
    item:Item
    glyphs:GlyphString
    /* Methods of Pango.GlyphItem */
    applyAttrs(text: string, list: AttrList): GlyphItem[]
    copy(): GlyphItem | null
    free(): void
    getLogicalWidths(text: string, logical_widths: number[]): void
    letterSpace(text: string, log_attrs: LogAttr[], letter_spacing: number): void
    split(text: string, split_index: number): GlyphItem
    static name: string
}
export class GlyphItemIter {
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
    initEnd(glyph_item: GlyphItem, text: string): boolean
    initStart(glyph_item: GlyphItem, text: string): boolean
    nextCluster(): boolean
    prevCluster(): boolean
    static name: string
}
export class GlyphString {
    /* Fields of Pango.GlyphString */
    num_glyphs:number
    glyphs:GlyphInfo[]
    log_clusters:number
    /* Methods of Pango.GlyphString */
    copy(): GlyphString | null
    extents(font: Font): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    extentsRange(start: number, end: number, font: Font): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    free(): void
    getLogicalWidths(text: string, length: number, embedding_level: number, logical_widths: number[]): void
    getWidth(): number
    indexToX(text: string, length: number, analysis: Analysis, index_: number, trailing: boolean): /* x_pos */ number
    setSize(new_len: number): void
    xToIndex(text: string, length: number, analysis: Analysis, x_pos: number): [ /* index_ */ number, /* trailing */ number ]
    static name: string
    static new(): GlyphString
    constructor()
    static new(): GlyphString
}
export class GlyphVisAttr {
    /* Fields of Pango.GlyphVisAttr */
    is_cluster_start:number
    static name: string
}
export class IncludedModule {
    /* Fields of Pango.IncludedModule */
    list:any
    init:any
    exit:any
    static name: string
}
export class Item {
    /* Fields of Pango.Item */
    offset:number
    length:number
    num_chars:number
    analysis:Analysis
    /* Methods of Pango.Item */
    copy(): Item | null
    free(): void
    split(split_index: number, split_offset: number): Item
    static name: string
    static new(): Item
    constructor()
    static new(): Item
}
export class Language {
    /* Methods of Pango.Language */
    getSampleString(): string
    getScripts(): Script[] | null
    includesScript(script: Script): boolean
    matches(range_list: string): boolean
    static name: string
    static fromString(language?: string | null): Language | null
    static getDefault(): Language
}
export class LayoutIter {
    /* Methods of Pango.LayoutIter */
    atLastLine(): boolean
    copy(): LayoutIter | null
    free(): void
    getBaseline(): number
    getCharExtents(): /* logical_rect */ Rectangle
    getClusterExtents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    getIndex(): number
    getLayout(): Layout
    getLayoutExtents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    getLine(): LayoutLine
    getLineExtents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    getLineReadonly(): LayoutLine
    getLineYrange(): [ /* y0_ */ number | null, /* y1_ */ number | null ]
    getRun(): LayoutRun | null
    getRunExtents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    getRunReadonly(): LayoutRun | null
    nextChar(): boolean
    nextCluster(): boolean
    nextLine(): boolean
    nextRun(): boolean
    static name: string
}
export class LayoutLine {
    /* Fields of Pango.LayoutLine */
    layout:Layout
    start_index:number
    length:number
    runs:LayoutRun[]
    is_paragraph_start:number
    resolved_dir:number
    /* Methods of Pango.LayoutLine */
    getExtents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    getPixelExtents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    getXRanges(start_index: number, end_index: number): /* ranges */ number[]
    indexToX(index_: number, trailing: boolean): /* x_pos */ number
    ref(): LayoutLine
    unref(): void
    xToIndex(x_pos: number): [ /* returnType */ boolean, /* index_ */ number, /* trailing */ number ]
    static name: string
}
export class LogAttr {
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
    static name: string
}
export class Map {
    /* Methods of Pango.Map */
    static name: string
}
export class MapEntry {
    static name: string
}
export class Matrix {
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
    getFontScaleFactor(): number
    getFontScaleFactors(): [ /* xscale */ number | null, /* yscale */ number | null ]
    rotate(degrees: number): void
    scale(scale_x: number, scale_y: number): void
    transformDistance(dx: number, dy: number): void
    transformPixelRectangle(rect?: Rectangle | null): void
    transformPoint(x: number, y: number): void
    transformRectangle(rect?: Rectangle | null): void
    translate(tx: number, ty: number): void
    static name: string
}
export class Rectangle {
    /* Fields of Pango.Rectangle */
    x:number
    y:number
    width:number
    height:number
    static name: string
}
export class RendererPrivate {
    static name: string
}
export class ScriptIter {
    /* Methods of Pango.ScriptIter */
    free(): void
    getRange(): [ /* start */ string | null, /* end */ string | null, /* script */ Script | null ]
    next(): boolean
    static name: string
}
export class TabArray {
    /* Methods of Pango.TabArray */
    copy(): TabArray
    free(): void
    getPositionsInPixels(): boolean
    getSize(): number
    getTab(tab_index: number): [ /* alignment */ TabAlign | null, /* location */ number | null ]
    getTabs(): [ /* alignments */ TabAlign | null, /* locations */ number[] | null ]
    resize(new_size: number): void
    setTab(tab_index: number, alignment: TabAlign, location: number): void
    static name: string
    static new(initial_size: number, positions_in_pixels: boolean): TabArray
    constructor(initial_size: number, positions_in_pixels: boolean)
    static new(initial_size: number, positions_in_pixels: boolean): TabArray
}
type Glyph = number
type GlyphUnit = number
type LayoutRun = GlyphItem
}