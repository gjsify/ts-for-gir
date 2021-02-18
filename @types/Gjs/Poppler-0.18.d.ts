/**
 * Poppler-0.18
 */

import type * as Gjs from './Gjs';
import type * as cairo from './cairo-1.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum ActionLayerAction {
    ON,
    OFF,
    TOGGLE,
}
export enum ActionMovieOperation {
    PLAY,
    PAUSE,
    RESUME,
    STOP,
}
export enum ActionType {
    UNKNOWN,
    NONE,
    GOTO_DEST,
    GOTO_REMOTE,
    LAUNCH,
    URI,
    NAMED,
    MOVIE,
    RENDITION,
    OCG_STATE,
    JAVASCRIPT,
    RESET_FORM,
}
export enum AdditionalActionType {
    FIELD_MODIFIED,
    FORMAT_FIELD,
    VALIDATE_FIELD,
    CALCULATE_FIELD,
}
export enum AnnotExternalDataType {
    /* 3D (invalid, starts with a number) */
    UNKNOWN,
}
export enum AnnotFreeTextQuadding {
    LEFT_JUSTIFIED,
    CENTERED,
    RIGHT_JUSTIFIED,
}
export enum AnnotMarkupReplyType {
    R,
    GROUP,
}
export enum AnnotTextState {
    MARKED,
    UNMARKED,
    ACCEPTED,
    REJECTED,
    CANCELLED,
    COMPLETED,
    NONE,
    UNKNOWN,
}
export enum AnnotType {
    UNKNOWN,
    TEXT,
    LINK,
    FREE_TEXT,
    LINE,
    SQUARE,
    CIRCLE,
    POLYGON,
    POLY_LINE,
    HIGHLIGHT,
    UNDERLINE,
    SQUIGGLY,
    STRIKE_OUT,
    STAMP,
    CARET,
    INK,
    POPUP,
    FILE_ATTACHMENT,
    SOUND,
    MOVIE,
    WIDGET,
    SCREEN,
    PRINTER_MARK,
    TRAP_NET,
    WATERMARK,
    /* 3D (invalid, starts with a number) */
}
export enum Backend {
    UNKNOWN,
    SPLASH,
    CAIRO,
}
export enum DestType {
    UNKNOWN,
    XYZ,
    FIT,
    FITH,
    FITV,
    FITR,
    FITB,
    FITBH,
    FITBV,
    NAMED,
}
export enum Error {
    INVALID,
    ENCRYPTED,
    OPEN_FILE,
    BAD_CATALOG,
    DAMAGED,
}
export enum FontType {
    UNKNOWN,
    TYPE1,
    TYPE1C,
    TYPE1COT,
    TYPE3,
    TRUETYPE,
    TRUETYPEOT,
    CID_TYPE0,
    CID_TYPE0C,
    CID_TYPE0COT,
    CID_TYPE2,
    CID_TYPE2OT,
}
export enum FormButtonType {
    PUSH,
    CHECK,
    RADIO,
}
export enum FormChoiceType {
    COMBO,
    LIST,
}
export enum FormFieldType {
    UNKNOWN,
    BUTTON,
    TEXT,
    CHOICE,
    SIGNATURE,
}
export enum FormTextType {
    NORMAL,
    MULTILINE,
    FILE_SELECT,
}
export enum MoviePlayMode {
    ONCE,
    OPEN,
    REPEAT,
    PALINDROME,
}
export enum PDFConformance {
    UNSET,
    A,
    B,
    G,
    N,
    P,
    PG,
    U,
    NONE,
}
export enum PDFPart {
    UNSET,
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    /* 4 (invalid, starts with a number) */
    /* 5 (invalid, starts with a number) */
    /* 6 (invalid, starts with a number) */
    /* 7 (invalid, starts with a number) */
    /* 8 (invalid, starts with a number) */
    NONE,
}
export enum PDFSubtype {
    UNSET,
    PDF_A,
    PDF_E,
    PDF_UA,
    PDF_VT,
    PDF_X,
    NONE,
}
export enum PageLayout {
    UNSET,
    SINGLE_PAGE,
    ONE_COLUMN,
    TWO_COLUMN_LEFT,
    TWO_COLUMN_RIGHT,
    TWO_PAGE_LEFT,
    TWO_PAGE_RIGHT,
}
export enum PageMode {
    UNSET,
    NONE,
    USE_OUTLINES,
    USE_THUMBS,
    FULL_SCREEN,
    USE_OC,
    USE_ATTACHMENTS,
}
export enum PageTransitionAlignment {
    HORIZONTAL,
    VERTICAL,
}
export enum PageTransitionDirection {
    INWARD,
    OUTWARD,
}
export enum PageTransitionType {
    REPLACE,
    SPLIT,
    BLINDS,
    BOX,
    WIPE,
    DISSOLVE,
    GLITTER,
    FLY,
    PUSH,
    COVER,
    UNCOVER,
    FADE,
}
export enum PrintDuplex {
    NONE,
    SIMPLEX,
    DUPLEX_FLIP_SHORT_EDGE,
    DUPLEX_FLIP_LONG_EDGE,
}
export enum PrintScaling {
    APP_DEFAULT,
    NONE,
}
export enum SelectionStyle {
    GLYPH,
    WORD,
    LINE,
}
export enum StructureBlockAlign {
    BEFORE,
    MIDDLE,
    AFTER,
    JUSTIFY,
}
export enum StructureBorderStyle {
    NONE,
    HIDDEN,
    DOTTED,
    DASHED,
    SOLID,
    DOUBLE,
    GROOVE,
    INSET,
    OUTSET,
}
export enum StructureElementKind {
    CONTENT,
    OBJECT_REFERENCE,
    DOCUMENT,
    PART,
    ARTICLE,
    SECTION,
    DIV,
    SPAN,
    QUOTE,
    NOTE,
    REFERENCE,
    BIBENTRY,
    CODE,
    LINK,
    ANNOT,
    BLOCKQUOTE,
    CAPTION,
    NONSTRUCT,
    TOC,
    TOC_ITEM,
    INDEX,
    PRIVATE,
    PARAGRAPH,
    HEADING,
    HEADING_1,
    HEADING_2,
    HEADING_3,
    HEADING_4,
    HEADING_5,
    HEADING_6,
    LIST,
    LIST_ITEM,
    LIST_LABEL,
    LIST_BODY,
    TABLE,
    TABLE_ROW,
    TABLE_HEADING,
    TABLE_DATA,
    TABLE_HEADER,
    TABLE_FOOTER,
    TABLE_BODY,
    RUBY,
    RUBY_BASE_TEXT,
    RUBY_ANNOT_TEXT,
    RUBY_PUNCTUATION,
    WARICHU,
    WARICHU_TEXT,
    WARICHU_PUNCTUATION,
    FIGURE,
    FORMULA,
    FORM,
}
export enum StructureFormRole {
    UNDEFINED,
    RADIO_BUTTON,
    PUSH_BUTTON,
    TEXT_VALUE,
    CHECKBOX,
}
export enum StructureFormState {
    ON,
    OFF,
    NEUTRAL,
}
export enum StructureGlyphOrientation {
    AUTO,
    /* 0 (invalid, starts with a number) */
    /* 90 (invalid, starts with a number) */
    /* 180 (invalid, starts with a number) */
    /* 270 (invalid, starts with a number) */
}
export enum StructureInlineAlign {
    START,
    CENTER,
    END,
}
export enum StructureListNumbering {
    NONE,
    DISC,
    CIRCLE,
    SQUARE,
    DECIMAL,
    UPPER_ROMAN,
    LOWER_ROMAN,
    UPPER_ALPHA,
    LOWER_ALPHA,
}
export enum StructurePlacement {
    BLOCK,
    INLINE,
    BEFORE,
    START,
    END,
}
export enum StructureRubyAlign {
    START,
    CENTER,
    END,
    JUSTIFY,
    DISTRIBUTE,
}
export enum StructureRubyPosition {
    BEFORE,
    AFTER,
    WARICHU,
    INLINE,
}
export enum StructureTableScope {
    ROW,
    COLUMN,
    BOTH,
}
export enum StructureTextAlign {
    START,
    CENTER,
    END,
    JUSTIFY,
}
export enum StructureTextDecoration {
    NONE,
    UNDERLINE,
    OVERLINE,
    LINETHROUGH,
}
export enum StructureWritingMode {
    LR_TB,
    RL_TB,
    TB_RL,
}
export enum AnnotFlag {
    UNKNOWN,
    INVISIBLE,
    HIDDEN,
    PRINT,
    NO_ZOOM,
    NO_ROTATE,
    NO_VIEW,
    READ_ONLY,
    LOCKED,
    TOGGLE_NO_VIEW,
    LOCKED_CONTENTS,
}
export enum FindFlags {
    DEFAULT,
    CASE_SENSITIVE,
    BACKWARDS,
    WHOLE_WORDS_ONLY,
    IGNORE_DIACRITICS,
}
export enum Permissions {
    OK_TO_PRINT,
    OK_TO_MODIFY,
    OK_TO_COPY,
    OK_TO_ADD_NOTES,
    OK_TO_FILL_FORM,
    OK_TO_EXTRACT_CONTENTS,
    OK_TO_ASSEMBLE,
    OK_TO_PRINT_HIGH_RESOLUTION,
    FULL,
}
export enum PrintFlags {
    DOCUMENT,
    MARKUP_ANNOTS,
    STAMP_ANNOTS_ONLY,
    ALL,
}
export enum StructureGetTextFlags {
    NONE,
    RECURSIVE,
}
export enum ViewerPreferences {
    UNSET,
    HIDE_TOOLBAR,
    HIDE_MENUBAR,
    HIDE_WINDOWUI,
    FIT_WINDOW,
    CENTER_WINDOW,
    DISPLAY_DOC_TITLE,
    DIRECTION_RTL,
}
export const ANNOT_TEXT_ICON_CIRCLE: string
export const ANNOT_TEXT_ICON_COMMENT: string
export const ANNOT_TEXT_ICON_CROSS: string
export const ANNOT_TEXT_ICON_HELP: string
export const ANNOT_TEXT_ICON_INSERT: string
export const ANNOT_TEXT_ICON_KEY: string
export const ANNOT_TEXT_ICON_NEW_PARAGRAPH: string
export const ANNOT_TEXT_ICON_NOTE: string
export const ANNOT_TEXT_ICON_PARAGRAPH: string
export const HAS_CAIRO: number
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function date_parse(date: string, timet: number): boolean
export function error_quark(): GLib.Quark
export function get_backend(): Backend
export function get_version(): string
export function named_dest_from_bytestring(data: Uint8Array[]): string
export function named_dest_to_bytestring(name: string): Uint8Array[] | null
export interface AttachmentSaveFunc {
    (buf: Uint8Array[]): boolean
}
export interface MediaSaveFunc {
    (buf: Uint8Array[]): boolean
}
export interface Annot_ConstructProps extends GObject.Object_ConstructProps {
}
export class Annot {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.Annot */
    get_annot_type(): AnnotType
    get_color(): Color
    get_contents(): string
    get_flags(): AnnotFlag
    get_modified(): string
    get_name(): string
    get_page_index(): number
    get_rectangle(): /* poppler_rect */ Rectangle
    set_color(poppler_color?: Color | null): void
    set_contents(contents: string): void
    set_flags(flags: AnnotFlag): void
    set_rectangle(poppler_rect: Rectangle): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Annot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Annot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Annot_ConstructProps)
    _init (config?: Annot_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AnnotCircle_ConstructProps extends AnnotMarkup_ConstructProps {
}
export class AnnotCircle {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.AnnotCircle */
    get_interior_color(): Color
    set_interior_color(poppler_color?: Color | null): void
    /* Methods of Poppler.AnnotMarkup */
    get_date(): GLib.Date
    get_external_data(): AnnotExternalDataType
    get_label(): string
    get_opacity(): number
    get_popup_is_open(): boolean
    get_popup_rectangle(): [ /* returnType */ boolean, /* poppler_rect */ Rectangle ]
    get_reply_to(): AnnotMarkupReplyType
    get_subject(): string
    has_popup(): boolean
    set_label(label?: string | null): void
    set_opacity(opacity: number): void
    set_popup(popup_rect: Rectangle): void
    set_popup_is_open(is_open: boolean): void
    set_popup_rectangle(poppler_rect: Rectangle): void
    /* Methods of Poppler.Annot */
    get_annot_type(): AnnotType
    get_color(): Color
    get_contents(): string
    get_flags(): AnnotFlag
    get_modified(): string
    get_name(): string
    get_page_index(): number
    get_rectangle(): /* poppler_rect */ Rectangle
    set_color(poppler_color?: Color | null): void
    set_contents(contents: string): void
    set_flags(flags: AnnotFlag): void
    set_rectangle(poppler_rect: Rectangle): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotCircle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotCircle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AnnotCircle_ConstructProps)
    _init (config?: AnnotCircle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: Document, rect: Rectangle): AnnotCircle
    static $gtype: GObject.Type
}
export interface AnnotFileAttachment_ConstructProps extends AnnotMarkup_ConstructProps {
}
export class AnnotFileAttachment {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.AnnotFileAttachment */
    get_attachment(): Attachment
    get_name(): string
    /* Methods of Poppler.AnnotMarkup */
    get_date(): GLib.Date
    get_external_data(): AnnotExternalDataType
    get_label(): string
    get_opacity(): number
    get_popup_is_open(): boolean
    get_popup_rectangle(): [ /* returnType */ boolean, /* poppler_rect */ Rectangle ]
    get_reply_to(): AnnotMarkupReplyType
    get_subject(): string
    has_popup(): boolean
    set_label(label?: string | null): void
    set_opacity(opacity: number): void
    set_popup(popup_rect: Rectangle): void
    set_popup_is_open(is_open: boolean): void
    set_popup_rectangle(poppler_rect: Rectangle): void
    /* Methods of Poppler.Annot */
    get_annot_type(): AnnotType
    get_color(): Color
    get_contents(): string
    get_flags(): AnnotFlag
    get_modified(): string
    get_page_index(): number
    get_rectangle(): /* poppler_rect */ Rectangle
    set_color(poppler_color?: Color | null): void
    set_contents(contents: string): void
    set_flags(flags: AnnotFlag): void
    set_rectangle(poppler_rect: Rectangle): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotFileAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotFileAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AnnotFileAttachment_ConstructProps)
    _init (config?: AnnotFileAttachment_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AnnotFreeText_ConstructProps extends AnnotMarkup_ConstructProps {
}
export class AnnotFreeText {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.AnnotFreeText */
    get_callout_line(): AnnotCalloutLine
    get_quadding(): AnnotFreeTextQuadding
    /* Methods of Poppler.AnnotMarkup */
    get_date(): GLib.Date
    get_external_data(): AnnotExternalDataType
    get_label(): string
    get_opacity(): number
    get_popup_is_open(): boolean
    get_popup_rectangle(): [ /* returnType */ boolean, /* poppler_rect */ Rectangle ]
    get_reply_to(): AnnotMarkupReplyType
    get_subject(): string
    has_popup(): boolean
    set_label(label?: string | null): void
    set_opacity(opacity: number): void
    set_popup(popup_rect: Rectangle): void
    set_popup_is_open(is_open: boolean): void
    set_popup_rectangle(poppler_rect: Rectangle): void
    /* Methods of Poppler.Annot */
    get_annot_type(): AnnotType
    get_color(): Color
    get_contents(): string
    get_flags(): AnnotFlag
    get_modified(): string
    get_name(): string
    get_page_index(): number
    get_rectangle(): /* poppler_rect */ Rectangle
    set_color(poppler_color?: Color | null): void
    set_contents(contents: string): void
    set_flags(flags: AnnotFlag): void
    set_rectangle(poppler_rect: Rectangle): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotFreeText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotFreeText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AnnotFreeText_ConstructProps)
    _init (config?: AnnotFreeText_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AnnotLine_ConstructProps extends AnnotMarkup_ConstructProps {
}
export class AnnotLine {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.AnnotLine */
    set_vertices(start: Point, end: Point): void
    /* Methods of Poppler.AnnotMarkup */
    get_date(): GLib.Date
    get_external_data(): AnnotExternalDataType
    get_label(): string
    get_opacity(): number
    get_popup_is_open(): boolean
    get_popup_rectangle(): [ /* returnType */ boolean, /* poppler_rect */ Rectangle ]
    get_reply_to(): AnnotMarkupReplyType
    get_subject(): string
    has_popup(): boolean
    set_label(label?: string | null): void
    set_opacity(opacity: number): void
    set_popup(popup_rect: Rectangle): void
    set_popup_is_open(is_open: boolean): void
    set_popup_rectangle(poppler_rect: Rectangle): void
    /* Methods of Poppler.Annot */
    get_annot_type(): AnnotType
    get_color(): Color
    get_contents(): string
    get_flags(): AnnotFlag
    get_modified(): string
    get_name(): string
    get_page_index(): number
    get_rectangle(): /* poppler_rect */ Rectangle
    set_color(poppler_color?: Color | null): void
    set_contents(contents: string): void
    set_flags(flags: AnnotFlag): void
    set_rectangle(poppler_rect: Rectangle): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotLine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotLine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AnnotLine_ConstructProps)
    _init (config?: AnnotLine_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: Document, rect: Rectangle, start: Point, end: Point): AnnotLine
    static $gtype: GObject.Type
}
export interface AnnotMarkup_ConstructProps extends Annot_ConstructProps {
}
export class AnnotMarkup {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.AnnotMarkup */
    get_date(): GLib.Date
    get_external_data(): AnnotExternalDataType
    get_label(): string
    get_opacity(): number
    get_popup_is_open(): boolean
    get_popup_rectangle(): [ /* returnType */ boolean, /* poppler_rect */ Rectangle ]
    get_reply_to(): AnnotMarkupReplyType
    get_subject(): string
    has_popup(): boolean
    set_label(label?: string | null): void
    set_opacity(opacity: number): void
    set_popup(popup_rect: Rectangle): void
    set_popup_is_open(is_open: boolean): void
    set_popup_rectangle(poppler_rect: Rectangle): void
    /* Methods of Poppler.Annot */
    get_annot_type(): AnnotType
    get_color(): Color
    get_contents(): string
    get_flags(): AnnotFlag
    get_modified(): string
    get_name(): string
    get_page_index(): number
    get_rectangle(): /* poppler_rect */ Rectangle
    set_color(poppler_color?: Color | null): void
    set_contents(contents: string): void
    set_flags(flags: AnnotFlag): void
    set_rectangle(poppler_rect: Rectangle): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AnnotMarkup_ConstructProps)
    _init (config?: AnnotMarkup_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AnnotMovie_ConstructProps extends Annot_ConstructProps {
}
export class AnnotMovie {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.AnnotMovie */
    get_movie(): Movie
    get_title(): string
    /* Methods of Poppler.Annot */
    get_annot_type(): AnnotType
    get_color(): Color
    get_contents(): string
    get_flags(): AnnotFlag
    get_modified(): string
    get_name(): string
    get_page_index(): number
    get_rectangle(): /* poppler_rect */ Rectangle
    set_color(poppler_color?: Color | null): void
    set_contents(contents: string): void
    set_flags(flags: AnnotFlag): void
    set_rectangle(poppler_rect: Rectangle): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotMovie, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotMovie, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AnnotMovie_ConstructProps)
    _init (config?: AnnotMovie_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AnnotScreen_ConstructProps extends Annot_ConstructProps {
}
export class AnnotScreen {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.AnnotScreen */
    get_action(): Action
    /* Methods of Poppler.Annot */
    get_annot_type(): AnnotType
    get_color(): Color
    get_contents(): string
    get_flags(): AnnotFlag
    get_modified(): string
    get_name(): string
    get_page_index(): number
    get_rectangle(): /* poppler_rect */ Rectangle
    set_color(poppler_color?: Color | null): void
    set_contents(contents: string): void
    set_flags(flags: AnnotFlag): void
    set_rectangle(poppler_rect: Rectangle): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotScreen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotScreen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AnnotScreen_ConstructProps)
    _init (config?: AnnotScreen_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AnnotSquare_ConstructProps extends AnnotMarkup_ConstructProps {
}
export class AnnotSquare {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.AnnotSquare */
    get_interior_color(): Color
    set_interior_color(poppler_color?: Color | null): void
    /* Methods of Poppler.AnnotMarkup */
    get_date(): GLib.Date
    get_external_data(): AnnotExternalDataType
    get_label(): string
    get_opacity(): number
    get_popup_is_open(): boolean
    get_popup_rectangle(): [ /* returnType */ boolean, /* poppler_rect */ Rectangle ]
    get_reply_to(): AnnotMarkupReplyType
    get_subject(): string
    has_popup(): boolean
    set_label(label?: string | null): void
    set_opacity(opacity: number): void
    set_popup(popup_rect: Rectangle): void
    set_popup_is_open(is_open: boolean): void
    set_popup_rectangle(poppler_rect: Rectangle): void
    /* Methods of Poppler.Annot */
    get_annot_type(): AnnotType
    get_color(): Color
    get_contents(): string
    get_flags(): AnnotFlag
    get_modified(): string
    get_name(): string
    get_page_index(): number
    get_rectangle(): /* poppler_rect */ Rectangle
    set_color(poppler_color?: Color | null): void
    set_contents(contents: string): void
    set_flags(flags: AnnotFlag): void
    set_rectangle(poppler_rect: Rectangle): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotSquare, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotSquare, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AnnotSquare_ConstructProps)
    _init (config?: AnnotSquare_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: Document, rect: Rectangle): AnnotSquare
    static $gtype: GObject.Type
}
export interface AnnotText_ConstructProps extends AnnotMarkup_ConstructProps {
}
export class AnnotText {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.AnnotText */
    get_icon(): string
    get_is_open(): boolean
    get_state(): AnnotTextState
    set_icon(icon: string): void
    set_is_open(is_open: boolean): void
    /* Methods of Poppler.AnnotMarkup */
    get_date(): GLib.Date
    get_external_data(): AnnotExternalDataType
    get_label(): string
    get_opacity(): number
    get_popup_is_open(): boolean
    get_popup_rectangle(): [ /* returnType */ boolean, /* poppler_rect */ Rectangle ]
    get_reply_to(): AnnotMarkupReplyType
    get_subject(): string
    has_popup(): boolean
    set_label(label?: string | null): void
    set_opacity(opacity: number): void
    set_popup(popup_rect: Rectangle): void
    set_popup_is_open(is_open: boolean): void
    set_popup_rectangle(poppler_rect: Rectangle): void
    /* Methods of Poppler.Annot */
    get_annot_type(): AnnotType
    get_color(): Color
    get_contents(): string
    get_flags(): AnnotFlag
    get_modified(): string
    get_name(): string
    get_page_index(): number
    get_rectangle(): /* poppler_rect */ Rectangle
    set_color(poppler_color?: Color | null): void
    set_contents(contents: string): void
    set_flags(flags: AnnotFlag): void
    set_rectangle(poppler_rect: Rectangle): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AnnotText_ConstructProps)
    _init (config?: AnnotText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: Document, rect: Rectangle): AnnotText
    static $gtype: GObject.Type
}
export interface AnnotTextMarkup_ConstructProps extends AnnotMarkup_ConstructProps {
}
export class AnnotTextMarkup {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.AnnotTextMarkup */
    get_quadrilaterals(): Quadrilateral[]
    set_quadrilaterals(quadrilaterals: Quadrilateral[]): void
    /* Methods of Poppler.AnnotMarkup */
    get_date(): GLib.Date
    get_external_data(): AnnotExternalDataType
    get_label(): string
    get_opacity(): number
    get_popup_is_open(): boolean
    get_popup_rectangle(): [ /* returnType */ boolean, /* poppler_rect */ Rectangle ]
    get_reply_to(): AnnotMarkupReplyType
    get_subject(): string
    has_popup(): boolean
    set_label(label?: string | null): void
    set_opacity(opacity: number): void
    set_popup(popup_rect: Rectangle): void
    set_popup_is_open(is_open: boolean): void
    set_popup_rectangle(poppler_rect: Rectangle): void
    /* Methods of Poppler.Annot */
    get_annot_type(): AnnotType
    get_color(): Color
    get_contents(): string
    get_flags(): AnnotFlag
    get_modified(): string
    get_name(): string
    get_page_index(): number
    get_rectangle(): /* poppler_rect */ Rectangle
    set_color(poppler_color?: Color | null): void
    set_contents(contents: string): void
    set_flags(flags: AnnotFlag): void
    set_rectangle(poppler_rect: Rectangle): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AnnotTextMarkup_ConstructProps)
    _init (config?: AnnotTextMarkup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_highlight(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    static new_squiggly(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    static new_strikeout(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    static new_underline(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    static $gtype: GObject.Type
}
export interface Attachment_ConstructProps extends GObject.Object_ConstructProps {
}
export class Attachment {
    /* Fields of Poppler.Attachment */
    parent: GObject.Object
    name: string
    description: string
    size: number
    mtime: GLib.Time
    ctime: GLib.Time
    checksum: GLib.String
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.Attachment */
    get_checksum(): GLib.String
    get_ctime(): GLib.DateTime | null
    get_description(): string
    get_mtime(): GLib.DateTime | null
    get_name(): string
    get_size(): number
    save(filename: string): boolean
    save_to_callback(save_func: AttachmentSaveFunc): boolean
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Attachment_ConstructProps)
    _init (config?: Attachment_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Document_ConstructProps extends GObject.Object_ConstructProps {
    author?: string
    creation_date?: number
    creation_datetime?: GLib.DateTime
    creator?: string
    keywords?: string
    mod_date?: number
    mod_datetime?: GLib.DateTime
    producer?: string
    subject?: string
    title?: string
}
export class Document {
    /* Properties of Poppler.Document */
    author: string
    creation_date: number
    creation_datetime: GLib.DateTime
    creator: string
    readonly format: string
    readonly format_major: number
    readonly format_minor: number
    keywords: string
    readonly linearized: boolean
    readonly metadata: string
    mod_date: number
    mod_datetime: GLib.DateTime
    readonly page_layout: PageLayout
    readonly page_mode: PageMode
    readonly permissions: Permissions
    readonly print_duplex: PrintDuplex
    readonly print_n_copies: number
    readonly print_scaling: PrintScaling
    producer: string
    subject: string
    readonly subtype: PDFSubtype
    readonly subtype_conformance: PDFConformance
    readonly subtype_part: PDFPart
    readonly subtype_string: string
    title: string
    readonly viewer_preferences: ViewerPreferences
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.Document */
    find_dest(link_name: string): Dest
    get_attachments(): Attachment[]
    get_author(): string
    get_creation_date(): number
    get_creation_date_time(): GLib.DateTime | null
    get_creator(): string
    get_form_field(id: number): FormField
    get_id(): [ /* returnType */ boolean, /* permanent_id */ string | null, /* update_id */ string | null ]
    get_keywords(): string
    get_metadata(): string
    get_modification_date(): number
    get_modification_date_time(): GLib.DateTime | null
    get_n_attachments(): number
    get_n_pages(): number
    get_page(index: number): Page
    get_page_by_label(label: string): Page
    get_page_layout(): PageLayout
    get_page_mode(): PageMode
    get_pdf_conformance(): PDFConformance
    get_pdf_part(): PDFPart
    get_pdf_subtype(): PDFSubtype
    get_pdf_subtype_string(): string | null
    get_pdf_version(): [ /* major_version */ number | null, /* minor_version */ number | null ]
    get_pdf_version_string(): string
    get_permissions(): Permissions
    get_print_duplex(): PrintDuplex
    get_print_n_copies(): number
    get_print_page_ranges(): PageRange[]
    get_print_scaling(): PrintScaling
    get_producer(): string
    get_subject(): string
    get_title(): string
    has_attachments(): boolean
    has_javascript(): boolean
    is_linearized(): boolean
    save(uri: string): boolean
    save_a_copy(uri: string): boolean
    set_author(author: string): void
    set_creation_date(creation_date: number): void
    set_creation_date_time(creation_datetime?: GLib.DateTime | null): void
    set_creator(creator: string): void
    set_keywords(keywords: string): void
    set_modification_date(modification_date: number): void
    set_modification_date_time(modification_datetime?: GLib.DateTime | null): void
    set_producer(producer: string): void
    set_subject(subject: string): void
    set_title(title: string): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::author", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creation-date", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creation-date", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creation-datetime", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creation-datetime", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creator", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::format", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::format-major", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-major", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::format-minor", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-minor", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keywords", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keywords", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::linearized", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linearized", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::metadata", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mod-date", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mod-date", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mod-datetime", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mod-datetime", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::page-layout", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-layout", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::page-mode", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-mode", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::permissions", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::permissions", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::print-duplex", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-duplex", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::print-n-copies", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-n-copies", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::print-scaling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-scaling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::producer", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::producer", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subject", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtype", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtype-conformance", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype-conformance", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtype-part", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype-part", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtype-string", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype-string", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::viewer-preferences", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::viewer-preferences", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Document_ConstructProps)
    _init (config?: Document_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_bytes(bytes: GLib.Bytes, password?: string | null): Document
    static new_from_data(data: Uint8Array[], password?: string | null): Document
    static new_from_file(uri: string, password?: string | null): Document
    static new_from_gfile(file: Gio.File, password?: string | null, cancellable?: Gio.Cancellable | null): Document
    static new_from_stream(stream: Gio.InputStream, length: number, password?: string | null, cancellable?: Gio.Cancellable | null): Document
    static $gtype: GObject.Type
}
export interface FontInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class FontInfo {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.FontInfo */
    free(): void
    scan(n_pages: number): [ /* returnType */ boolean, /* iter */ FontsIter ]
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FontInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FontInfo_ConstructProps)
    _init (config?: FontInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: Document): FontInfo
    static $gtype: GObject.Type
}
export interface FormField_ConstructProps extends GObject.Object_ConstructProps {
}
export class FormField {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.FormField */
    button_get_button_type(): FormButtonType
    button_get_state(): boolean
    button_set_state(state: boolean): void
    choice_can_select_multiple(): boolean
    choice_commit_on_change(): boolean
    choice_do_spell_check(): boolean
    choice_get_choice_type(): FormChoiceType
    choice_get_item(index: number): string
    choice_get_n_items(): number
    choice_get_text(): string
    choice_is_editable(): boolean
    choice_is_item_selected(index: number): boolean
    choice_select_item(index: number): void
    choice_set_text(text: string): void
    choice_toggle_item(index: number): void
    choice_unselect_all(): void
    get_action(): Action
    get_additional_action(type: AdditionalActionType): Action
    get_alternate_ui_name(): string
    get_field_type(): FormFieldType
    get_font_size(): number
    get_id(): number
    get_mapping_name(): string
    get_name(): string
    get_partial_name(): string
    is_read_only(): boolean
    text_do_scroll(): boolean
    text_do_spell_check(): boolean
    text_get_max_len(): number
    text_get_text(): string
    text_get_text_type(): FormTextType
    text_is_password(): boolean
    text_is_rich_text(): boolean
    text_set_text(text: string): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FormField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FormField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FormField_ConstructProps)
    _init (config?: FormField_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Layer_ConstructProps extends GObject.Object_ConstructProps {
}
export class Layer {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.Layer */
    get_radio_button_group_id(): number
    get_title(): string
    hide(): void
    is_parent(): boolean
    is_visible(): boolean
    show(): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Layer_ConstructProps)
    _init (config?: Layer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Media_ConstructProps extends GObject.Object_ConstructProps {
}
export class Media {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.Media */
    get_filename(): string
    get_mime_type(): string
    is_embedded(): boolean
    save(filename: string): boolean
    save_to_callback(save_func: MediaSaveFunc): boolean
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Media_ConstructProps)
    _init (config?: Media_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Movie_ConstructProps extends GObject.Object_ConstructProps {
}
export class Movie {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.Movie */
    get_aspect(width: number, height: number): void
    get_duration(): number
    get_filename(): string
    get_play_mode(): MoviePlayMode
    get_rate(): number
    get_rotation_angle(): number
    get_start(): number
    get_volume(): number
    is_synchronous(): boolean
    need_poster(): boolean
    show_controls(): boolean
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Movie, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Movie, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Movie_ConstructProps)
    _init (config?: Movie_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PSFile_ConstructProps extends GObject.Object_ConstructProps {
}
export class PSFile {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.PSFile */
    free(): void
    set_duplex(duplex: boolean): void
    set_paper_size(width: number, height: number): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PSFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PSFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PSFile_ConstructProps)
    _init (config?: PSFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: Document, filename: string, first_page: number, n_pages: number): PSFile
    static $gtype: GObject.Type
}
export interface Page_ConstructProps extends GObject.Object_ConstructProps {
}
export class Page {
    /* Properties of Poppler.Page */
    readonly label: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.Page */
    add_annot(annot: Annot): void
    find_text(text: string): Rectangle[]
    find_text_with_options(text: string, options: FindFlags): Rectangle[]
    get_annot_mapping(): AnnotMapping[]
    get_bounding_box(rect: Rectangle): boolean
    get_crop_box(): /* rect */ Rectangle
    get_duration(): number
    get_form_field_mapping(): FormFieldMapping[]
    get_image(image_id: number): cairo.Surface
    get_image_mapping(): ImageMapping[]
    get_index(): number
    get_label(): string
    get_link_mapping(): LinkMapping[]
    get_selected_region(scale: number, style: SelectionStyle, selection: Rectangle): cairo.Region
    get_selected_text(style: SelectionStyle, selection: Rectangle): string
    get_selection_region(scale: number, style: SelectionStyle, selection: Rectangle): Rectangle[]
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_text(): string
    get_text_attributes(): TextAttributes[]
    get_text_attributes_for_area(area: Rectangle): TextAttributes[]
    get_text_for_area(area: Rectangle): string
    get_text_layout(): [ /* returnType */ boolean, /* rectangles */ Rectangle[] ]
    get_text_layout_for_area(area: Rectangle): [ /* returnType */ boolean, /* rectangles */ Rectangle[] ]
    get_thumbnail(): cairo.Surface
    get_thumbnail_size(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    get_transition(): PageTransition
    remove_annot(annot: Annot): void
    render(cairo: cairo.Context): void
    render_for_printing(cairo: cairo.Context): void
    render_for_printing_with_options(cairo: cairo.Context, options: PrintFlags): void
    render_selection(cairo: cairo.Context, selection: Rectangle, old_selection: Rectangle, style: SelectionStyle, glyph_color: Color, background_color: Color): void
    render_to_ps(ps_file: PSFile): void
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Page, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Page, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: Page, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Page, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Page_ConstructProps)
    _init (config?: Page_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static free_annot_mapping(list: AnnotMapping[]): void
    static free_form_field_mapping(list: FormFieldMapping[]): void
    static free_image_mapping(list: ImageMapping[]): void
    static free_link_mapping(list: LinkMapping[]): void
    static free_text_attributes(list: TextAttributes[]): void
    static selection_region_free(region: Rectangle[]): void
    static $gtype: GObject.Type
}
export interface StructureElement_ConstructProps extends GObject.Object_ConstructProps {
}
export class StructureElement {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Poppler.StructureElement */
    get_abbreviation(): string
    get_actual_text(): string
    get_alt_text(): string
    get_background_color(): [ /* returnType */ boolean, /* color */ Color ]
    get_baseline_shift(): number
    get_block_align(): StructureBlockAlign
    get_border_color(): [ /* returnType */ boolean, /* colors */ Color[] ]
    get_border_style(): /* border_styles */ StructureBorderStyle[]
    get_border_thickness(): [ /* returnType */ boolean, /* border_thicknesses */ number[] ]
    get_bounding_box(): [ /* returnType */ boolean, /* bounding_box */ Rectangle ]
    get_color(): [ /* returnType */ boolean, /* color */ Color ]
    get_column_count(): number
    get_column_gaps(): number[]
    get_column_widths(): number[]
    get_end_indent(): number
    get_form_description(): string
    get_form_role(): StructureFormRole
    get_form_state(): StructureFormState
    get_glyph_orientation(): StructureGlyphOrientation
    get_height(): number
    get_id(): string
    get_inline_align(): StructureInlineAlign
    get_kind(): StructureElementKind
    get_language(): string
    get_line_height(): number
    get_list_numbering(): StructureListNumbering
    get_padding(): /* paddings */ number[]
    get_page(): number
    get_placement(): StructurePlacement
    get_ruby_align(): StructureRubyAlign
    get_ruby_position(): StructureRubyPosition
    get_space_after(): number
    get_space_before(): number
    get_start_indent(): number
    get_table_border_style(): /* border_styles */ StructureBorderStyle[]
    get_table_column_span(): number
    get_table_headers(): string[]
    get_table_padding(): /* paddings */ number[]
    get_table_row_span(): number
    get_table_scope(): StructureTableScope
    get_table_summary(): string
    get_text(flags: StructureGetTextFlags): string
    get_text_align(): StructureTextAlign
    get_text_decoration_color(): [ /* returnType */ boolean, /* color */ Color ]
    get_text_decoration_thickness(): number
    get_text_decoration_type(): StructureTextDecoration
    get_text_indent(): number
    get_text_spans(): TextSpan[]
    get_title(): string
    get_width(): number
    get_writing_mode(): StructureWritingMode
    is_block(): boolean
    is_content(): boolean
    is_grouping(): boolean
    is_inline(): boolean
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StructureElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StructureElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StructureElement_ConstructProps)
    _init (config?: StructureElement_ConstructProps): void
    static $gtype: GObject.Type
}
export class ActionAny {
    /* Fields of Poppler.ActionAny */
    type: ActionType
    title: string
    static name: string
}
export class ActionGotoDest {
    /* Fields of Poppler.ActionGotoDest */
    type: ActionType
    title: string
    dest: Dest
    static name: string
}
export class ActionGotoRemote {
    /* Fields of Poppler.ActionGotoRemote */
    type: ActionType
    title: string
    file_name: string
    dest: Dest
    static name: string
}
export class ActionJavascript {
    /* Fields of Poppler.ActionJavascript */
    type: ActionType
    title: string
    script: string
    static name: string
}
export class ActionLaunch {
    /* Fields of Poppler.ActionLaunch */
    type: ActionType
    title: string
    file_name: string
    params: string
    static name: string
}
export class ActionLayer {
    /* Fields of Poppler.ActionLayer */
    action: ActionLayerAction
    layers: object[]
    static name: string
}
export class ActionMovie {
    /* Fields of Poppler.ActionMovie */
    type: ActionType
    title: string
    operation: ActionMovieOperation
    movie: Movie
    static name: string
}
export class ActionNamed {
    /* Fields of Poppler.ActionNamed */
    type: ActionType
    title: string
    named_dest: string
    static name: string
}
export class ActionOCGState {
    /* Fields of Poppler.ActionOCGState */
    type: ActionType
    title: string
    state_list: object[]
    static name: string
}
export class ActionRendition {
    /* Fields of Poppler.ActionRendition */
    type: ActionType
    title: string
    op: number
    media: Media
    static name: string
}
export class ActionResetForm {
    /* Fields of Poppler.ActionResetForm */
    type: ActionType
    title: string
    fields: object[]
    exclude: boolean
    static name: string
}
export class ActionUri {
    /* Fields of Poppler.ActionUri */
    type: ActionType
    title: string
    uri: string
    static name: string
}
export class AnnotCalloutLine {
    /* Fields of Poppler.AnnotCalloutLine */
    multiline: boolean
    x1: number
    y1: number
    x2: number
    y2: number
    x3: number
    y3: number
    /* Methods of Poppler.AnnotCalloutLine */
    copy(): AnnotCalloutLine
    free(): void
    static name: string
    static new(): AnnotCalloutLine
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AnnotCalloutLine
}
export class AnnotMapping {
    /* Fields of Poppler.AnnotMapping */
    area: Rectangle
    annot: Annot
    /* Methods of Poppler.AnnotMapping */
    copy(): AnnotMapping
    free(): void
    static name: string
    static new(): AnnotMapping
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AnnotMapping
}
export abstract class AttachmentClass {
    /* Fields of Poppler.AttachmentClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class Color {
    /* Fields of Poppler.Color */
    red: number
    green: number
    blue: number
    /* Methods of Poppler.Color */
    copy(): Color
    free(): void
    static name: string
    static new(): Color
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Color
}
export class Dest {
    /* Fields of Poppler.Dest */
    type: DestType
    page_num: number
    left: number
    bottom: number
    right: number
    top: number
    zoom: number
    named_dest: string
    change_left: number
    change_top: number
    change_zoom: number
    /* Methods of Poppler.Dest */
    copy(): Dest
    free(): void
    static name: string
}
export class FontsIter {
    /* Methods of Poppler.FontsIter */
    copy(): FontsIter
    free(): void
    get_encoding(): string
    get_file_name(): string
    get_font_type(): FontType
    get_full_name(): string
    get_name(): string
    get_substitute_name(): string
    is_embedded(): boolean
    is_subset(): boolean
    next(): boolean
    static name: string
}
export class FormFieldMapping {
    /* Fields of Poppler.FormFieldMapping */
    area: Rectangle
    field: FormField
    /* Methods of Poppler.FormFieldMapping */
    copy(): FormFieldMapping
    free(): void
    static name: string
    static new(): FormFieldMapping
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FormFieldMapping
}
export class ImageMapping {
    /* Fields of Poppler.ImageMapping */
    area: Rectangle
    image_id: number
    /* Methods of Poppler.ImageMapping */
    copy(): ImageMapping
    free(): void
    static name: string
    static new(): ImageMapping
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ImageMapping
}
export class IndexIter {
    /* Methods of Poppler.IndexIter */
    copy(): IndexIter
    free(): void
    get_action(): Action
    get_child(): IndexIter
    is_open(): boolean
    next(): boolean
    static name: string
    static new(document: Document): IndexIter
    constructor(document: Document)
    /* Static methods and pseudo-constructors */
    static new(document: Document): IndexIter
}
export class LayersIter {
    /* Methods of Poppler.LayersIter */
    copy(): LayersIter
    free(): void
    get_child(): LayersIter
    get_layer(): Layer
    get_title(): string
    next(): boolean
    static name: string
    static new(document: Document): LayersIter
    constructor(document: Document)
    /* Static methods and pseudo-constructors */
    static new(document: Document): LayersIter
}
export class LinkMapping {
    /* Fields of Poppler.LinkMapping */
    area: Rectangle
    action: Action
    /* Methods of Poppler.LinkMapping */
    copy(): LinkMapping
    free(): void
    static name: string
    static new(): LinkMapping
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): LinkMapping
}
export class PageRange {
    /* Fields of Poppler.PageRange */
    start_page: number
    end_page: number
    static name: string
}
export class PageTransition {
    /* Fields of Poppler.PageTransition */
    type: PageTransitionType
    alignment: PageTransitionAlignment
    direction: PageTransitionDirection
    duration: number
    angle: number
    scale: number
    rectangular: boolean
    duration_real: number
    /* Methods of Poppler.PageTransition */
    copy(): PageTransition
    free(): void
    static name: string
    static new(): PageTransition
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PageTransition
}
export class Point {
    /* Fields of Poppler.Point */
    x: number
    y: number
    /* Methods of Poppler.Point */
    copy(): Point
    free(): void
    static name: string
    static new(): Point
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Point
}
export class Quadrilateral {
    /* Fields of Poppler.Quadrilateral */
    p1: Point
    p2: Point
    p3: Point
    p4: Point
    /* Methods of Poppler.Quadrilateral */
    copy(): Quadrilateral
    free(): void
    static name: string
    static new(): Quadrilateral
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Quadrilateral
}
export class Rectangle {
    /* Fields of Poppler.Rectangle */
    x1: number
    y1: number
    x2: number
    y2: number
    /* Methods of Poppler.Rectangle */
    copy(): Rectangle
    free(): void
    static name: string
    static new(): Rectangle
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Rectangle
}
export class StructureElementIter {
    /* Methods of Poppler.StructureElementIter */
    copy(): StructureElementIter
    free(): void
    get_child(): StructureElementIter
    get_element(): StructureElement
    next(): boolean
    static name: string
    static new(poppler_document: Document): StructureElementIter
    constructor(poppler_document: Document)
    /* Static methods and pseudo-constructors */
    static new(poppler_document: Document): StructureElementIter
}
export class TextAttributes {
    /* Fields of Poppler.TextAttributes */
    font_name: string
    font_size: number
    is_underlined: boolean
    color: Color
    start_index: number
    end_index: number
    /* Methods of Poppler.TextAttributes */
    copy(): TextAttributes
    free(): void
    static name: string
    static new(): TextAttributes
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): TextAttributes
}
export class TextSpan {
    /* Methods of Poppler.TextSpan */
    copy(): TextSpan
    free(): void
    get_color(): /* color */ Color
    get_font_name(): string
    get_text(): string
    is_bold_font(): boolean
    is_fixed_width_font(): boolean
    is_serif_font(): boolean
    static name: string
}
export class Action {
    /* Fields of Poppler.Action */
    type: ActionType
    any: ActionAny
    goto_dest: ActionGotoDest
    goto_remote: ActionGotoRemote
    launch: ActionLaunch
    uri: ActionUri
    named: ActionNamed
    movie: ActionMovie
    rendition: ActionRendition
    ocg_state: ActionOCGState
    javascript: ActionJavascript
    reset_form: ActionResetForm
    /* Methods of Poppler.Action */
    copy(): Action
    free(): void
    static name: string
}