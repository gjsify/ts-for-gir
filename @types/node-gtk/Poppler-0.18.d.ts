/**
 * Poppler-0.18
 */

/// <reference types="node" />
import type { cairo } from './cairo-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';

declare namespace Poppler {

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
export function dateParse(date: string, timet: number): boolean
export function errorQuark(): GLib.Quark
export function getBackend(): Backend
export function getVersion(): string
export function namedDestFromBytestring(data: any): string
export function namedDestToBytestring(name: string): any | null
export interface AttachmentSaveFunc {
    (buf: any): boolean
}
export interface MediaSaveFunc {
    (buf: any): boolean
}
export interface Annot_ConstructProps extends GObject.Object_ConstructProps {
}
export class Annot {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Annot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Annot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Annot_ConstructProps)
    _init (config?: Annot_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AnnotCircle_ConstructProps extends AnnotMarkup_ConstructProps {
}
export class AnnotCircle {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.AnnotCircle */
    getInteriorColor(): Color
    setInteriorColor(popplerColor?: Color | null): void
    /* Methods of Poppler.AnnotMarkup */
    getDate(): GLib.Date
    getExternalData(): AnnotExternalDataType
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    getReplyTo(): AnnotMarkupReplyType
    getSubject(): string
    hasPopup(): boolean
    setLabel(label?: string | null): void
    setOpacity(opacity: number): void
    setPopup(popupRect: Rectangle): void
    setPopupIsOpen(isOpen: boolean): void
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotCircle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotCircle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.AnnotFileAttachment */
    getAttachment(): Attachment
    getName(): string
    /* Methods of Poppler.AnnotMarkup */
    getDate(): GLib.Date
    getExternalData(): AnnotExternalDataType
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    getReplyTo(): AnnotMarkupReplyType
    getSubject(): string
    hasPopup(): boolean
    setLabel(label?: string | null): void
    setOpacity(opacity: number): void
    setPopup(popupRect: Rectangle): void
    setPopupIsOpen(isOpen: boolean): void
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotFileAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotFileAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AnnotFileAttachment_ConstructProps)
    _init (config?: AnnotFileAttachment_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AnnotFreeText_ConstructProps extends AnnotMarkup_ConstructProps {
}
export class AnnotFreeText {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.AnnotFreeText */
    getCalloutLine(): AnnotCalloutLine
    getQuadding(): AnnotFreeTextQuadding
    /* Methods of Poppler.AnnotMarkup */
    getDate(): GLib.Date
    getExternalData(): AnnotExternalDataType
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    getReplyTo(): AnnotMarkupReplyType
    getSubject(): string
    hasPopup(): boolean
    setLabel(label?: string | null): void
    setOpacity(opacity: number): void
    setPopup(popupRect: Rectangle): void
    setPopupIsOpen(isOpen: boolean): void
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotFreeText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotFreeText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AnnotFreeText_ConstructProps)
    _init (config?: AnnotFreeText_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AnnotLine_ConstructProps extends AnnotMarkup_ConstructProps {
}
export class AnnotLine {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.AnnotLine */
    setVertices(start: Point, end: Point): void
    /* Methods of Poppler.AnnotMarkup */
    getDate(): GLib.Date
    getExternalData(): AnnotExternalDataType
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    getReplyTo(): AnnotMarkupReplyType
    getSubject(): string
    hasPopup(): boolean
    setLabel(label?: string | null): void
    setOpacity(opacity: number): void
    setPopup(popupRect: Rectangle): void
    setPopupIsOpen(isOpen: boolean): void
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotLine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotLine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.AnnotMarkup */
    getDate(): GLib.Date
    getExternalData(): AnnotExternalDataType
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    getReplyTo(): AnnotMarkupReplyType
    getSubject(): string
    hasPopup(): boolean
    setLabel(label?: string | null): void
    setOpacity(opacity: number): void
    setPopup(popupRect: Rectangle): void
    setPopupIsOpen(isOpen: boolean): void
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AnnotMarkup_ConstructProps)
    _init (config?: AnnotMarkup_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AnnotMovie_ConstructProps extends Annot_ConstructProps {
}
export class AnnotMovie {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.AnnotMovie */
    getMovie(): Movie
    getTitle(): string
    /* Methods of Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotMovie, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotMovie, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AnnotMovie_ConstructProps)
    _init (config?: AnnotMovie_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AnnotScreen_ConstructProps extends Annot_ConstructProps {
}
export class AnnotScreen {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.AnnotScreen */
    getAction(): Action
    /* Methods of Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotScreen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotScreen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AnnotScreen_ConstructProps)
    _init (config?: AnnotScreen_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AnnotSquare_ConstructProps extends AnnotMarkup_ConstructProps {
}
export class AnnotSquare {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.AnnotSquare */
    getInteriorColor(): Color
    setInteriorColor(popplerColor?: Color | null): void
    /* Methods of Poppler.AnnotMarkup */
    getDate(): GLib.Date
    getExternalData(): AnnotExternalDataType
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    getReplyTo(): AnnotMarkupReplyType
    getSubject(): string
    hasPopup(): boolean
    setLabel(label?: string | null): void
    setOpacity(opacity: number): void
    setPopup(popupRect: Rectangle): void
    setPopupIsOpen(isOpen: boolean): void
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotSquare, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotSquare, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.AnnotText */
    getIcon(): string
    getIsOpen(): boolean
    getState(): AnnotTextState
    setIcon(icon: string): void
    setIsOpen(isOpen: boolean): void
    /* Methods of Poppler.AnnotMarkup */
    getDate(): GLib.Date
    getExternalData(): AnnotExternalDataType
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    getReplyTo(): AnnotMarkupReplyType
    getSubject(): string
    hasPopup(): boolean
    setLabel(label?: string | null): void
    setOpacity(opacity: number): void
    setPopup(popupRect: Rectangle): void
    setPopupIsOpen(isOpen: boolean): void
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.AnnotTextMarkup */
    getQuadrilaterals(): Quadrilateral[]
    setQuadrilaterals(quadrilaterals: Quadrilateral[]): void
    /* Methods of Poppler.AnnotMarkup */
    getDate(): GLib.Date
    getExternalData(): AnnotExternalDataType
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    getReplyTo(): AnnotMarkupReplyType
    getSubject(): string
    hasPopup(): boolean
    setLabel(label?: string | null): void
    setOpacity(opacity: number): void
    setPopup(popupRect: Rectangle): void
    setPopupIsOpen(isOpen: boolean): void
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AnnotTextMarkup_ConstructProps)
    _init (config?: AnnotTextMarkup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newHighlight(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    static newSquiggly(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    static newStrikeout(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    static newUnderline(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.Attachment */
    getChecksum(): GLib.String
    getCtime(): GLib.DateTime | null
    getDescription(): string
    getMtime(): GLib.DateTime | null
    getName(): string
    getSize(): number
    save(filename: string): boolean
    saveToCallback(saveFunc: AttachmentSaveFunc): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Attachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Attachment_ConstructProps)
    _init (config?: Attachment_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Document_ConstructProps extends GObject.Object_ConstructProps {
    author?: string
    creationDate?: number
    creationDatetime?: GLib.DateTime
    creator?: string
    keywords?: string
    modDate?: number
    modDatetime?: GLib.DateTime
    producer?: string
    subject?: string
    title?: string
}
export class Document {
    /* Properties of Poppler.Document */
    author: string
    creationDate: number
    creationDatetime: GLib.DateTime
    creator: string
    readonly format: string
    readonly formatMajor: number
    readonly formatMinor: number
    keywords: string
    readonly linearized: boolean
    readonly metadata: string
    modDate: number
    modDatetime: GLib.DateTime
    readonly pageLayout: PageLayout
    readonly pageMode: PageMode
    readonly permissions: Permissions
    readonly printDuplex: PrintDuplex
    readonly printNCopies: number
    readonly printScaling: PrintScaling
    producer: string
    subject: string
    readonly subtype: PDFSubtype
    readonly subtypeConformance: PDFConformance
    readonly subtypePart: PDFPart
    readonly subtypeString: string
    title: string
    readonly viewerPreferences: ViewerPreferences
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.Document */
    findDest(linkName: string): Dest
    getAttachments(): Attachment[]
    getAuthor(): string
    getCreationDate(): number
    getCreationDateTime(): GLib.DateTime | null
    getCreator(): string
    getFormField(id: number): FormField
    getId(): [ /* returnType */ boolean, /* permanentId */ string | null, /* updateId */ string | null ]
    getKeywords(): string
    getMetadata(): string
    getModificationDate(): number
    getModificationDateTime(): GLib.DateTime | null
    getNAttachments(): number
    getNPages(): number
    getPage(index: number): Page
    getPageByLabel(label: string): Page
    getPageLayout(): PageLayout
    getPageMode(): PageMode
    getPdfConformance(): PDFConformance
    getPdfPart(): PDFPart
    getPdfSubtype(): PDFSubtype
    getPdfSubtypeString(): string | null
    getPdfVersion(): [ /* majorVersion */ number | null, /* minorVersion */ number | null ]
    getPdfVersionString(): string
    getPermissions(): Permissions
    getPrintDuplex(): PrintDuplex
    getPrintNCopies(): number
    getPrintPageRanges(): PageRange[]
    getPrintScaling(): PrintScaling
    getProducer(): string
    getSubject(): string
    getTitle(): string
    hasAttachments(): boolean
    hasJavascript(): boolean
    isLinearized(): boolean
    save(uri: string): boolean
    saveACopy(uri: string): boolean
    setAuthor(author: string): void
    setCreationDate(creationDate: number): void
    setCreationDateTime(creationDatetime?: GLib.DateTime | null): void
    setCreator(creator: string): void
    setKeywords(keywords: string): void
    setModificationDate(modificationDate: number): void
    setModificationDateTime(modificationDatetime?: GLib.DateTime | null): void
    setProducer(producer: string): void
    setSubject(subject: string): void
    setTitle(title: string): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::author", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creation-date", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creation-date", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creation-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creation-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creation-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creation-datetime", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creation-datetime", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creation-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creation-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creation-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format-major", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-major", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format-minor", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-minor", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keywords", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keywords", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::linearized", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linearized", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::linearized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::linearized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::linearized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadata", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mod-date", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mod-date", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mod-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mod-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mod-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mod-datetime", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mod-datetime", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mod-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mod-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mod-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::page-layout", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-layout", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::page-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::page-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::page-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::page-mode", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-mode", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::page-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::page-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::page-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::permissions", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::permissions", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::permissions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::permissions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::permissions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-duplex", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-duplex", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-n-copies", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-n-copies", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-n-copies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-n-copies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-n-copies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-scaling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-scaling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-scaling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-scaling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-scaling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::producer", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::producer", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::producer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::producer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::producer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subject", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtype", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtype-conformance", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype-conformance", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtype-conformance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtype-conformance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtype-conformance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtype-part", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype-part", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtype-part", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtype-part", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtype-part", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtype-string", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype-string", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtype-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtype-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtype-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::viewer-preferences", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::viewer-preferences", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::viewer-preferences", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::viewer-preferences", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::viewer-preferences", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Document_ConstructProps)
    _init (config?: Document_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromBytes(bytes: any, password?: string | null): Document
    static newFromData(data: any, password?: string | null): Document
    static newFromFile(uri: string, password?: string | null): Document
    static newFromGfile(file: Gio.File, password?: string | null, cancellable?: Gio.Cancellable | null): Document
    static newFromStream(stream: Gio.InputStream, length: number, password?: string | null, cancellable?: Gio.Cancellable | null): Document
    static $gtype: GObject.Type
}
export interface FontInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class FontInfo {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.FontInfo */
    free(): void
    scan(nPages: number): [ /* returnType */ boolean, /* iter */ FontsIter ]
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FontInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.FormField */
    buttonGetButtonType(): FormButtonType
    buttonGetState(): boolean
    buttonSetState(state: boolean): void
    choiceCanSelectMultiple(): boolean
    choiceCommitOnChange(): boolean
    choiceDoSpellCheck(): boolean
    choiceGetChoiceType(): FormChoiceType
    choiceGetItem(index: number): string
    choiceGetNItems(): number
    choiceGetText(): string
    choiceIsEditable(): boolean
    choiceIsItemSelected(index: number): boolean
    choiceSelectItem(index: number): void
    choiceSetText(text: string): void
    choiceToggleItem(index: number): void
    choiceUnselectAll(): void
    getAction(): Action
    getAdditionalAction(type: AdditionalActionType): Action
    getAlternateUiName(): string
    getFieldType(): FormFieldType
    getFontSize(): number
    getId(): number
    getMappingName(): string
    getName(): string
    getPartialName(): string
    isReadOnly(): boolean
    textDoScroll(): boolean
    textDoSpellCheck(): boolean
    textGetMaxLen(): number
    textGetText(): string
    textGetTextType(): FormTextType
    textIsPassword(): boolean
    textIsRichText(): boolean
    textSetText(text: string): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FormField, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FormField, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FormField_ConstructProps)
    _init (config?: FormField_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Layer_ConstructProps extends GObject.Object_ConstructProps {
}
export class Layer {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.Layer */
    getRadioButtonGroupId(): number
    getTitle(): string
    hide(): void
    isParent(): boolean
    isVisible(): boolean
    show(): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Layer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Layer_ConstructProps)
    _init (config?: Layer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Media_ConstructProps extends GObject.Object_ConstructProps {
}
export class Media {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.Media */
    getFilename(): string
    getMimeType(): string
    isEmbedded(): boolean
    save(filename: string): boolean
    saveToCallback(saveFunc: MediaSaveFunc): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Media_ConstructProps)
    _init (config?: Media_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Movie_ConstructProps extends GObject.Object_ConstructProps {
}
export class Movie {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.Movie */
    getAspect(width: number, height: number): void
    getDuration(): number
    getFilename(): string
    getPlayMode(): MoviePlayMode
    getRate(): number
    getRotationAngle(): number
    getStart(): number
    getVolume(): number
    isSynchronous(): boolean
    needPoster(): boolean
    showControls(): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Movie, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Movie, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Movie_ConstructProps)
    _init (config?: Movie_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PSFile_ConstructProps extends GObject.Object_ConstructProps {
}
export class PSFile {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.PSFile */
    free(): void
    setDuplex(duplex: boolean): void
    setPaperSize(width: number, height: number): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PSFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PSFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PSFile_ConstructProps)
    _init (config?: PSFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: Document, filename: string, firstPage: number, nPages: number): PSFile
    static $gtype: GObject.Type
}
export interface Page_ConstructProps extends GObject.Object_ConstructProps {
}
export class Page {
    /* Properties of Poppler.Page */
    readonly label: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.Page */
    addAnnot(annot: Annot): void
    findText(text: string): Rectangle[]
    findTextWithOptions(text: string, options: FindFlags): Rectangle[]
    getAnnotMapping(): AnnotMapping[]
    getBoundingBox(rect: Rectangle): boolean
    getCropBox(): /* rect */ Rectangle
    getDuration(): number
    getFormFieldMapping(): FormFieldMapping[]
    getImage(imageId: number): cairo.Surface
    getImageMapping(): ImageMapping[]
    getIndex(): number
    getLabel(): string
    getLinkMapping(): LinkMapping[]
    getSelectedRegion(scale: number, style: SelectionStyle, selection: Rectangle): cairo.Region
    getSelectedText(style: SelectionStyle, selection: Rectangle): string
    getSelectionRegion(scale: number, style: SelectionStyle, selection: Rectangle): Rectangle[]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    getText(): string
    getTextAttributes(): TextAttributes[]
    getTextAttributesForArea(area: Rectangle): TextAttributes[]
    getTextForArea(area: Rectangle): string
    getTextLayout(): [ /* returnType */ boolean, /* rectangles */ Rectangle[] ]
    getTextLayoutForArea(area: Rectangle): [ /* returnType */ boolean, /* rectangles */ Rectangle[] ]
    getThumbnail(): cairo.Surface
    getThumbnailSize(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    getTransition(): PageTransition
    removeAnnot(annot: Annot): void
    render(cairo: cairo.Context): void
    renderForPrinting(cairo: cairo.Context): void
    renderForPrintingWithOptions(cairo: cairo.Context, options: PrintFlags): void
    renderSelection(cairo: cairo.Context, selection: Rectangle, oldSelection: Rectangle, style: SelectionStyle, glyphColor: Color, backgroundColor: Color): void
    renderToPs(psFile: PSFile): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Page, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Page, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: (($obj: Page, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Page, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Page_ConstructProps)
    _init (config?: Page_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static freeAnnotMapping(list: AnnotMapping[]): void
    static freeFormFieldMapping(list: FormFieldMapping[]): void
    static freeImageMapping(list: ImageMapping[]): void
    static freeLinkMapping(list: LinkMapping[]): void
    static freeTextAttributes(list: TextAttributes[]): void
    static selectionRegionFree(region: Rectangle[]): void
    static $gtype: GObject.Type
}
export interface StructureElement_ConstructProps extends GObject.Object_ConstructProps {
}
export class StructureElement {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler.StructureElement */
    getAbbreviation(): string
    getActualText(): string
    getAltText(): string
    getBackgroundColor(): [ /* returnType */ boolean, /* color */ Color ]
    getBaselineShift(): number
    getBlockAlign(): StructureBlockAlign
    getBorderColor(): [ /* returnType */ boolean, /* colors */ Color[] ]
    getBorderStyle(): /* borderStyles */ StructureBorderStyle[]
    getBorderThickness(): [ /* returnType */ boolean, /* borderThicknesses */ number[] ]
    getBoundingBox(): [ /* returnType */ boolean, /* boundingBox */ Rectangle ]
    getColor(): [ /* returnType */ boolean, /* color */ Color ]
    getColumnCount(): number
    getColumnGaps(): number[]
    getColumnWidths(): number[]
    getEndIndent(): number
    getFormDescription(): string
    getFormRole(): StructureFormRole
    getFormState(): StructureFormState
    getGlyphOrientation(): StructureGlyphOrientation
    getHeight(): number
    getId(): string
    getInlineAlign(): StructureInlineAlign
    getKind(): StructureElementKind
    getLanguage(): string
    getLineHeight(): number
    getListNumbering(): StructureListNumbering
    getPadding(): /* paddings */ number[]
    getPage(): number
    getPlacement(): StructurePlacement
    getRubyAlign(): StructureRubyAlign
    getRubyPosition(): StructureRubyPosition
    getSpaceAfter(): number
    getSpaceBefore(): number
    getStartIndent(): number
    getTableBorderStyle(): /* borderStyles */ StructureBorderStyle[]
    getTableColumnSpan(): number
    getTableHeaders(): string[]
    getTablePadding(): /* paddings */ number[]
    getTableRowSpan(): number
    getTableScope(): StructureTableScope
    getTableSummary(): string
    getText(flags: StructureGetTextFlags): string
    getTextAlign(): StructureTextAlign
    getTextDecorationColor(): [ /* returnType */ boolean, /* color */ Color ]
    getTextDecorationThickness(): number
    getTextDecorationType(): StructureTextDecoration
    getTextIndent(): number
    getTextSpans(): TextSpan[]
    getTitle(): string
    getWidth(): number
    getWritingMode(): StructureWritingMode
    isBlock(): boolean
    isContent(): boolean
    isGrouping(): boolean
    isInline(): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StructureElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StructureElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    fileName: string
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
    fileName: string
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
    namedDest: string
    static name: string
}
export class ActionOCGState {
    /* Fields of Poppler.ActionOCGState */
    type: ActionType
    title: string
    stateList: object[]
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
    parentClass: GObject.ObjectClass
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
    pageNum: number
    left: number
    bottom: number
    right: number
    top: number
    zoom: number
    namedDest: string
    changeLeft: number
    changeTop: number
    changeZoom: number
    /* Methods of Poppler.Dest */
    copy(): Dest
    free(): void
    static name: string
}
export class FontsIter {
    /* Methods of Poppler.FontsIter */
    copy(): FontsIter
    free(): void
    getEncoding(): string
    getFileName(): string
    getFontType(): FontType
    getFullName(): string
    getName(): string
    getSubstituteName(): string
    isEmbedded(): boolean
    isSubset(): boolean
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
    imageId: number
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
    getAction(): Action
    getChild(): IndexIter
    isOpen(): boolean
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
    getChild(): LayersIter
    getLayer(): Layer
    getTitle(): string
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
    startPage: number
    endPage: number
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
    durationReal: number
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
    getChild(): StructureElementIter
    getElement(): StructureElement
    next(): boolean
    static name: string
    static new(popplerDocument: Document): StructureElementIter
    constructor(popplerDocument: Document)
    /* Static methods and pseudo-constructors */
    static new(popplerDocument: Document): StructureElementIter
}
export class TextAttributes {
    /* Fields of Poppler.TextAttributes */
    fontName: string
    fontSize: number
    isUnderlined: boolean
    color: Color
    startIndex: number
    endIndex: number
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
    getColor(): /* color */ Color
    getFontName(): string
    getText(): string
    isBoldFont(): boolean
    isFixedWidthFont(): boolean
    isSerifFont(): boolean
    static name: string
}
export class Action {
    /* Fields of Poppler.Action */
    type: ActionType
    any: ActionAny
    gotoDest: ActionGotoDest
    gotoRemote: ActionGotoRemote
    launch: ActionLaunch
    uri: ActionUri
    named: ActionNamed
    movie: ActionMovie
    rendition: ActionRendition
    ocgState: ActionOCGState
    javascript: ActionJavascript
    resetForm: ActionResetForm
    /* Methods of Poppler.Action */
    copy(): Action
    free(): void
    static name: string
}
}