/**
 * EvinceDocument-3.0
 */

import * as Gjs from './Gjs';
import * as Gtk from './Gtk-3.0';
import * as xlib from './xlib-2.0';
import * as Gdk from './Gdk-3.0';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gio from './Gio-2.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';
import * as Atk from './Atk-1.0';

export enum AnnotationTextIcon {
    NOTE,
    COMMENT,
    KEY,
    HELP,
    NEW_PARAGRAPH,
    PARAGRAPH,
    INSERT,
    CROSS,
    CIRCLE,
    UNKNOWN,
}
export enum AnnotationTextMarkupType {
    HIGHLIGHT,
    STRIKE_OUT,
    UNDERLINE,
    SQUIGGLY,
}
export enum AnnotationType {
    UNKNOWN,
    TEXT,
    ATTACHMENT,
    TEXT_MARKUP,
}
export enum AnnotationsOverMarkup {
    NOT_IMPLEMENTED,
    UNKNOWN,
    YES,
    NOT,
}
export enum CompressionType {
    NONE,
    BZIP2,
    GZIP,
    LZMA,
}
export enum DocumentContainsJS {
    UNKNOWN,
    NO,
    YES,
}
export enum DocumentError {
    INVALID,
    UNSUPPORTED_CONTENT,
    ENCRYPTED,
}
export enum DocumentLayout {
    SINGLE_PAGE,
    ONE_COLUMN,
    TWO_COLUMN_LEFT,
    TWO_COLUMN_RIGHT,
    TWO_PAGE_LEFT,
    TWO_PAGE_RIGHT,
}
export enum DocumentMode {
    NONE,
    USE_OC,
    USE_THUMBS,
    FULL_SCREEN,
    USE_ATTACHMENTS,
    PRESENTATION,
}
export enum FileExporterFormat {
    UNKNOWN,
    PS,
    PDF,
}
export enum FormFieldButtonType {
    PUSH,
    CHECK,
    RADIO,
}
export enum FormFieldChoiceType {
    COMBO,
    LIST,
}
export enum FormFieldTextType {
    NORMAL,
    MULTILINE,
    FILE_SELECT,
}
export enum LinkActionType {
    GOTO_DEST,
    GOTO_REMOTE,
    EXTERNAL_URI,
    LAUNCH,
    NAMED,
    LAYERS_STATE,
    RESET_FORM,
}
export enum LinkDestType {
    PAGE,
    XYZ,
    FIT,
    FITH,
    FITV,
    FITR,
    NAMED,
    PAGE_LABEL,
    UNKNOWN,
}
export enum SelectionStyle {
    GLYPH,
    WORD,
    LINE,
}
export enum TransitionEffectAlignment {
    HORIZONTAL,
    VERTICAL,
}
export enum TransitionEffectDirection {
    INWARD,
    OUTWARD,
}
export enum TransitionEffectType {
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
export enum AnnotationsSaveMask {
    NONE,
    CONTENTS,
    COLOR,
    AREA,
    LABEL,
    OPACITY,
    POPUP_RECT,
    POPUP_IS_OPEN,
    TEXT_IS_OPEN,
    TEXT_ICON,
    ATTACHMENT,
    TEXT_MARKUP_TYPE,
    ALL,
}
export enum DocumentInfoFields {
    TITLE,
    FORMAT,
    AUTHOR,
    SUBJECT,
    KEYWORDS,
    LAYOUT,
    CREATOR,
    PRODUCER,
    CREATION_DATE,
    MOD_DATE,
    LINEARIZED,
    START_MODE,
    UI_HINTS,
    PERMISSIONS,
    N_PAGES,
    SECURITY,
    PAPER_SIZE,
    LICENSE,
    CONTAINS_JS,
}
export enum DocumentLoadFlags {
    NONE,
    NO_CACHE,
}
export enum DocumentPermissions {
    OK_TO_PRINT,
    OK_TO_MODIFY,
    OK_TO_COPY,
    OK_TO_ADD_NOTES,
    FULL,
}
export enum DocumentUIHints {
    HIDE_TOOLBAR,
    HIDE_MENUBAR,
    HIDE_WINDOWUI,
    FIT_WINDOW,
    CENTER_WINDOW,
    DISPLAY_DOC_TITLE,
    DIRECTION_RTL,
}
export enum FileExporterCapabilities {
    PAGE_SET,
    COPIES,
    COLLATE,
    REVERSE,
    SCALE,
    GENERATE_PDF,
    GENERATE_PS,
    PREVIEW,
    NUMBER_UP,
}
export enum FindOptions {
    DEFAULT,
    CASE_SENSITIVE,
    WHOLE_WORDS_ONLY,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function backends_manager_get_document(mime_type: string): Document
export function backends_manager_get_document_module_name(document: Document): string
export function document_error_quark(): GLib.Quark
export function file_compress(uri: string, type: CompressionType): string
export function file_copy_metadata(from: string, to: string): boolean
export function file_get_mime_type(uri: string, fast: boolean): string
export function file_is_temp(file: Gio.File): boolean
export function file_uncompress(uri: string, type: CompressionType): string
export function get_locale_dir(): string
export function init(): boolean
export function mkdtemp(tmpl: string): string
export function mkstemp(tmpl: string, file_name: string): number
export function mkstemp_file(tmpl: string): Gio.File
export function rect_cmp(a: Rectangle, b: Rectangle): number
export function shutdown(): void
export function tmp_file_unlink(file: Gio.File): void
export function tmp_filename_unlink(filename: string): void
export function tmp_uri_unlink(uri: string): void
export function xfer_uri_simple(from: string, to: string): boolean
export interface AnnotationMarkup_ConstructProps extends Annotation_ConstructProps {
    can_have_popup?: boolean
    has_popup?: boolean
    label?: string
    opacity?: number
    popup_is_open?: boolean
    rectangle?: Rectangle
}
export class AnnotationMarkup {
    /* Properties of EvinceDocument.AnnotationMarkup */
    can_have_popup: boolean
    has_popup: boolean
    label: string
    opacity: number
    popup_is_open: boolean
    rectangle: Rectangle
    /* Properties of EvinceDocument.Annotation */
    area: Rectangle
    color: object
    contents: string
    modified: string
    name: string
    rgba: Gdk.RGBA
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.AnnotationMarkup */
    get_label(): string
    get_opacity(): number
    get_popup_is_open(): boolean
    get_rectangle(ev_rect: Rectangle): void
    set_has_popup(has_popup: boolean): boolean
    set_label(label: string): boolean
    set_opacity(opacity: number): boolean
    set_popup_is_open(is_open: boolean): boolean
    set_rectangle(ev_rect: Rectangle): boolean
    /* Methods of EvinceDocument.Annotation */
    equal(other: Annotation): boolean
    get_annotation_type(): AnnotationType
    get_area(area: Rectangle): void
    get_color(): /* color */ Gdk.Color
    get_contents(): string
    get_modified(): string
    get_name(): string
    get_page(): Page
    get_page_index(): number
    get_rgba(): /* rgba */ Gdk.RGBA
    set_area(area: Rectangle): boolean
    set_color(color: Gdk.Color): boolean
    set_contents(contents: string): boolean
    set_modified(modified: string): boolean
    set_modified_from_time(utime: GLib.Time): boolean
    set_name(name: string): boolean
    set_rgba(rgba: Gdk.RGBA): boolean
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
    connect(sigName: "notify", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-have-popup", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-popup", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::popup-is-open", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rectangle", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::area", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contents", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rgba", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: AnnotationMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AnnotationMarkup_ConstructProps)
    _init (config?: AnnotationMarkup_ConstructProps): void
    static $gtype: GObject.Type
}
export class AsyncRenderer {
    /* Methods of EvinceDocument.AsyncRenderer */
    render_pixbuf(page: number, scale: number, rotation: number): void
    /* Virtual methods of EvinceDocument.AsyncRenderer */
    vfunc_render_finished(pixbuf: GdkPixbuf.Pixbuf): void
    vfunc_render_pixbuf(page: number, scale: number, rotation: number): void
    /* Signals of EvinceDocument.AsyncRenderer */
    connect(sigName: "render-finished", callback: (($obj: AsyncRenderer, object: GdkPixbuf.Pixbuf) => void)): number
    connect_after(sigName: "render-finished", callback: (($obj: AsyncRenderer, object: GdkPixbuf.Pixbuf) => void)): number
    emit(sigName: "render-finished", object: GdkPixbuf.Pixbuf): void
    static name: string
}
export class DocumentAnnotations {
    /* Methods of EvinceDocument.DocumentAnnotations */
    add_annotation(annot: Annotation, rect: Rectangle): void
    can_add_annotation(): boolean
    can_remove_annotation(): boolean
    document_is_modified(): boolean
    get_annotations(page: Page): MappingList
    over_markup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup
    remove_annotation(annot: Annotation): void
    save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void
    /* Virtual methods of EvinceDocument.DocumentAnnotations */
    vfunc_add_annotation(annot: Annotation, rect: Rectangle): void
    vfunc_document_is_modified(): boolean
    vfunc_get_annotations(page: Page): MappingList
    vfunc_over_markup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup
    vfunc_remove_annotation(annot: Annotation): void
    vfunc_save_annotation(annot: Annotation, mask: AnnotationsSaveMask): void
    static name: string
}
export class DocumentAttachments {
    /* Methods of EvinceDocument.DocumentAttachments */
    get_attachments(): Attachment[]
    has_attachments(): boolean
    /* Virtual methods of EvinceDocument.DocumentAttachments */
    vfunc_get_attachments(): Attachment[]
    vfunc_has_attachments(): boolean
    static name: string
}
export class DocumentFind {
    /* Methods of EvinceDocument.DocumentFind */
    find_text(page: Page, text: string, case_sensitive: boolean): Rectangle[]
    find_text_with_options(page: Page, text: string, options: FindOptions): Rectangle[]
    get_supported_options(): FindOptions
    /* Virtual methods of EvinceDocument.DocumentFind */
    vfunc_find_text(page: Page, text: string, case_sensitive: boolean): Rectangle[]
    vfunc_find_text_with_options(page: Page, text: string, options: FindOptions): Rectangle[]
    vfunc_get_supported_options(): FindOptions
    static name: string
}
export class DocumentFonts {
    /* Methods of EvinceDocument.DocumentFonts */
    fill_model(model: Gtk.TreeModel): void
    get_fonts_summary(): string
    get_progress(): number
    scan(n_pages: number): boolean
    /* Virtual methods of EvinceDocument.DocumentFonts */
    vfunc_fill_model(model: Gtk.TreeModel): void
    vfunc_get_fonts_summary(): string
    vfunc_get_progress(): number
    vfunc_scan(n_pages: number): boolean
    static name: string
}
export class DocumentForms {
    /* Methods of EvinceDocument.DocumentForms */
    document_is_modified(): boolean
    form_field_button_get_state(field: FormField): boolean
    form_field_button_set_state(field: FormField, state: boolean): void
    form_field_choice_get_item(field: FormField, index: number): string
    form_field_choice_get_n_items(field: FormField): number
    form_field_choice_get_text(field: FormField): string
    form_field_choice_is_item_selected(field: FormField, index: number): boolean
    form_field_choice_select_item(field: FormField, index: number): void
    form_field_choice_set_text(field: FormField, text: string): void
    form_field_choice_toggle_item(field: FormField, index: number): void
    form_field_choice_unselect_all(field: FormField): void
    form_field_text_get_text(field: FormField): string
    form_field_text_set_text(field: FormField, text: string): void
    get_form_fields(page: Page): MappingList
    reset_form(action: LinkAction): void
    /* Virtual methods of EvinceDocument.DocumentForms */
    vfunc_document_is_modified(): boolean
    vfunc_form_field_button_get_state(field: FormField): boolean
    vfunc_form_field_button_set_state(field: FormField, state: boolean): void
    vfunc_form_field_choice_get_item(field: FormField, index: number): string
    vfunc_form_field_choice_get_n_items(field: FormField): number
    vfunc_form_field_choice_get_text(field: FormField): string
    vfunc_form_field_choice_is_item_selected(field: FormField, index: number): boolean
    vfunc_form_field_choice_select_item(field: FormField, index: number): void
    vfunc_form_field_choice_set_text(field: FormField, text: string): void
    vfunc_form_field_choice_toggle_item(field: FormField, index: number): void
    vfunc_form_field_choice_unselect_all(field: FormField): void
    vfunc_form_field_text_get_text(field: FormField): string
    vfunc_form_field_text_set_text(field: FormField, text: string): void
    vfunc_get_form_fields(page: Page): MappingList
    vfunc_reset_form(action: LinkAction): void
    static name: string
}
export class DocumentImages {
    /* Methods of EvinceDocument.DocumentImages */
    get_image(image: Image): GdkPixbuf.Pixbuf
    get_image_mapping(page: Page): MappingList
    /* Virtual methods of EvinceDocument.DocumentImages */
    vfunc_get_image(image: Image): GdkPixbuf.Pixbuf
    vfunc_get_image_mapping(page: Page): MappingList
    static name: string
}
export class DocumentLayers {
    /* Methods of EvinceDocument.DocumentLayers */
    get_layers(): Gtk.TreeModel
    has_layers(): boolean
    hide_layer(layer: Layer): void
    layer_is_visible(layer: Layer): boolean
    show_layer(layer: Layer): void
    /* Virtual methods of EvinceDocument.DocumentLayers */
    vfunc_get_layers(): Gtk.TreeModel
    vfunc_has_layers(): boolean
    vfunc_hide_layer(layer: Layer): void
    vfunc_layer_is_visible(layer: Layer): boolean
    vfunc_show_layer(layer: Layer): void
    static name: string
}
export class DocumentLinks {
    /* Methods of EvinceDocument.DocumentLinks */
    find_link_dest(link_name: string): LinkDest
    find_link_page(link_name: string): number
    get_dest_page(dest: LinkDest): number
    get_dest_page_label(dest: LinkDest): string
    get_link_page(link: Link): number
    get_link_page_label(link: Link): string
    get_links(page: Page): MappingList
    get_links_model(): Gtk.TreeModel
    has_document_links(): boolean
    /* Virtual methods of EvinceDocument.DocumentLinks */
    vfunc_find_link_dest(link_name: string): LinkDest
    vfunc_find_link_page(link_name: string): number
    vfunc_get_links(page: Page): MappingList
    vfunc_get_links_model(): Gtk.TreeModel
    vfunc_has_document_links(): boolean
    static name: string
}
export class DocumentMedia {
    /* Methods of EvinceDocument.DocumentMedia */
    get_media_mapping(page: Page): MappingList
    /* Virtual methods of EvinceDocument.DocumentMedia */
    vfunc_get_media_mapping(page: Page): MappingList
    static name: string
}
export class DocumentPrint {
    /* Methods of EvinceDocument.DocumentPrint */
    print_page(page: Page, cr: cairo.Context): void
    /* Virtual methods of EvinceDocument.DocumentPrint */
    vfunc_print_page(page: Page, cr: cairo.Context): void
    static name: string
}
export class DocumentSecurity {
    /* Methods of EvinceDocument.DocumentSecurity */
    has_document_security(): boolean
    set_password(password: string): void
    /* Virtual methods of EvinceDocument.DocumentSecurity */
    vfunc_has_document_security(): boolean
    vfunc_set_password(password: string): void
    static name: string
}
export class DocumentText {
    /* Methods of EvinceDocument.DocumentText */
    get_text(page: Page): string
    get_text_attrs(page: Page): Pango.AttrList
    get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean
    get_text_mapping(page: Page): cairo.Region
    /* Virtual methods of EvinceDocument.DocumentText */
    vfunc_get_text(page: Page): string
    vfunc_get_text_attrs(page: Page): Pango.AttrList
    vfunc_get_text_layout(page: Page, areas: Rectangle, n_areas: number): boolean
    vfunc_get_text_mapping(page: Page): cairo.Region
    static name: string
}
export class DocumentTransition {
    /* Methods of EvinceDocument.DocumentTransition */
    get_effect(page: number): TransitionEffect
    get_page_duration(page: number): number
    /* Virtual methods of EvinceDocument.DocumentTransition */
    vfunc_get_effect(page: number): TransitionEffect
    vfunc_get_page_duration(page: number): number
    static name: string
}
export class FileExporter {
    /* Methods of EvinceDocument.FileExporter */
    begin(fc: FileExporterContext): void
    begin_page(): void
    do_page(rc: RenderContext): void
    end(): void
    end_page(): void
    get_capabilities(): FileExporterCapabilities
    /* Virtual methods of EvinceDocument.FileExporter */
    vfunc_begin(fc: FileExporterContext): void
    vfunc_begin_page(): void
    vfunc_do_page(rc: RenderContext): void
    vfunc_end(): void
    vfunc_end_page(): void
    vfunc_get_capabilities(): FileExporterCapabilities
    static name: string
}
export class Selection {
    /* Methods of EvinceDocument.Selection */
    get_selected_text(page: Page, style: SelectionStyle, points: Rectangle): string
    get_selection_region(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region
    render_selection(rc: RenderContext, surface: cairo.Surface, points: Rectangle, old_points: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color): void
    /* Virtual methods of EvinceDocument.Selection */
    vfunc_get_selected_text(page: Page, style: SelectionStyle, points: Rectangle): string
    vfunc_get_selection_region(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region
    vfunc_render_selection(rc: RenderContext, surface: cairo.Surface, points: Rectangle, old_points: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color): void
    static name: string
}
export interface Annotation_ConstructProps extends GObject.Object_ConstructProps {
    area?: Rectangle
    color?: object
    contents?: string
    modified?: string
    name?: string
    page?: Page
    rgba?: Gdk.RGBA
}
export class Annotation {
    /* Properties of EvinceDocument.Annotation */
    area: Rectangle
    color: object
    contents: string
    modified: string
    name: string
    rgba: Gdk.RGBA
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.Annotation */
    equal(other: Annotation): boolean
    get_annotation_type(): AnnotationType
    get_area(area: Rectangle): void
    get_color(): /* color */ Gdk.Color
    get_contents(): string
    get_modified(): string
    get_name(): string
    get_page(): Page
    get_page_index(): number
    get_rgba(): /* rgba */ Gdk.RGBA
    set_area(area: Rectangle): boolean
    set_color(color: Gdk.Color): boolean
    set_contents(contents: string): boolean
    set_modified(modified: string): boolean
    set_modified_from_time(utime: GLib.Time): boolean
    set_name(name: string): boolean
    set_rgba(rgba: Gdk.RGBA): boolean
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
    connect(sigName: "notify", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::area", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contents", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rgba", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: Annotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Annotation_ConstructProps)
    _init (config?: Annotation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AnnotationAttachment_ConstructProps extends Annotation_ConstructProps {
    attachment?: Attachment
    can_have_popup?: boolean
    has_popup?: boolean
    label?: string
    opacity?: number
    popup_is_open?: boolean
    rectangle?: Rectangle
}
export class AnnotationAttachment {
    /* Properties of EvinceDocument.AnnotationAttachment */
    attachment: Attachment
    /* Properties of EvinceDocument.Annotation */
    area: Rectangle
    color: object
    contents: string
    modified: string
    name: string
    rgba: Gdk.RGBA
    /* Properties of EvinceDocument.AnnotationMarkup */
    can_have_popup: boolean
    has_popup: boolean
    label: string
    opacity: number
    popup_is_open: boolean
    rectangle: Rectangle
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.AnnotationAttachment */
    get_attachment(): Attachment
    set_attachment(attachment: Attachment): boolean
    /* Methods of EvinceDocument.Annotation */
    equal(other: Annotation): boolean
    get_annotation_type(): AnnotationType
    get_area(area: Rectangle): void
    get_color(): /* color */ Gdk.Color
    get_contents(): string
    get_modified(): string
    get_name(): string
    get_page(): Page
    get_page_index(): number
    get_rgba(): /* rgba */ Gdk.RGBA
    set_area(area: Rectangle): boolean
    set_color(color: Gdk.Color): boolean
    set_contents(contents: string): boolean
    set_modified(modified: string): boolean
    set_modified_from_time(utime: GLib.Time): boolean
    set_name(name: string): boolean
    set_rgba(rgba: Gdk.RGBA): boolean
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
    /* Methods of EvinceDocument.AnnotationMarkup */
    get_label(): string
    get_opacity(): number
    get_popup_is_open(): boolean
    get_rectangle(ev_rect: Rectangle): void
    set_has_popup(has_popup: boolean): boolean
    set_label(label: string): boolean
    set_opacity(opacity: number): boolean
    set_popup_is_open(is_open: boolean): boolean
    set_rectangle(ev_rect: Rectangle): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attachment", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attachment", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::area", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contents", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rgba", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-have-popup", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-popup", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::popup-is-open", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rectangle", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: AnnotationAttachment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AnnotationAttachment_ConstructProps)
    _init (config?: AnnotationAttachment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(page: Page, attachment: Attachment): AnnotationAttachment
    static $gtype: GObject.Type
}
export interface AnnotationText_ConstructProps extends Annotation_ConstructProps {
    icon?: AnnotationTextIcon
    is_open?: boolean
    can_have_popup?: boolean
    has_popup?: boolean
    label?: string
    opacity?: number
    popup_is_open?: boolean
    rectangle?: Rectangle
}
export class AnnotationText {
    /* Properties of EvinceDocument.AnnotationText */
    icon: AnnotationTextIcon
    is_open: boolean
    /* Properties of EvinceDocument.Annotation */
    area: Rectangle
    color: object
    contents: string
    modified: string
    name: string
    rgba: Gdk.RGBA
    /* Properties of EvinceDocument.AnnotationMarkup */
    can_have_popup: boolean
    has_popup: boolean
    label: string
    opacity: number
    popup_is_open: boolean
    rectangle: Rectangle
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.AnnotationText */
    get_icon(): AnnotationTextIcon
    get_is_open(): boolean
    set_icon(icon: AnnotationTextIcon): boolean
    set_is_open(is_open: boolean): boolean
    /* Methods of EvinceDocument.Annotation */
    equal(other: Annotation): boolean
    get_annotation_type(): AnnotationType
    get_area(area: Rectangle): void
    get_color(): /* color */ Gdk.Color
    get_contents(): string
    get_modified(): string
    get_name(): string
    get_page(): Page
    get_page_index(): number
    get_rgba(): /* rgba */ Gdk.RGBA
    set_area(area: Rectangle): boolean
    set_color(color: Gdk.Color): boolean
    set_contents(contents: string): boolean
    set_modified(modified: string): boolean
    set_modified_from_time(utime: GLib.Time): boolean
    set_name(name: string): boolean
    set_rgba(rgba: Gdk.RGBA): boolean
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
    /* Methods of EvinceDocument.AnnotationMarkup */
    get_label(): string
    get_opacity(): number
    get_popup_is_open(): boolean
    get_rectangle(ev_rect: Rectangle): void
    set_has_popup(has_popup: boolean): boolean
    set_label(label: string): boolean
    set_opacity(opacity: number): boolean
    set_popup_is_open(is_open: boolean): boolean
    set_rectangle(ev_rect: Rectangle): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::icon", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-open", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-open", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::area", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contents", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rgba", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-have-popup", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-popup", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::popup-is-open", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rectangle", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: AnnotationText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AnnotationText_ConstructProps)
    _init (config?: AnnotationText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(page: Page): AnnotationText
    static $gtype: GObject.Type
}
export interface AnnotationTextMarkup_ConstructProps extends Annotation_ConstructProps {
    type?: AnnotationTextMarkupType
    can_have_popup?: boolean
    has_popup?: boolean
    label?: string
    opacity?: number
    popup_is_open?: boolean
    rectangle?: Rectangle
}
export class AnnotationTextMarkup {
    /* Properties of EvinceDocument.AnnotationTextMarkup */
    type: AnnotationTextMarkupType
    /* Properties of EvinceDocument.Annotation */
    area: Rectangle
    color: object
    contents: string
    modified: string
    name: string
    rgba: Gdk.RGBA
    /* Properties of EvinceDocument.AnnotationMarkup */
    can_have_popup: boolean
    has_popup: boolean
    label: string
    opacity: number
    popup_is_open: boolean
    rectangle: Rectangle
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.AnnotationTextMarkup */
    get_markup_type(): AnnotationTextMarkupType
    set_markup_type(markup_type: AnnotationTextMarkupType): boolean
    /* Methods of EvinceDocument.Annotation */
    equal(other: Annotation): boolean
    get_annotation_type(): AnnotationType
    get_area(area: Rectangle): void
    get_color(): /* color */ Gdk.Color
    get_contents(): string
    get_modified(): string
    get_name(): string
    get_page(): Page
    get_page_index(): number
    get_rgba(): /* rgba */ Gdk.RGBA
    set_area(area: Rectangle): boolean
    set_color(color: Gdk.Color): boolean
    set_contents(contents: string): boolean
    set_modified(modified: string): boolean
    set_modified_from_time(utime: GLib.Time): boolean
    set_name(name: string): boolean
    set_rgba(rgba: Gdk.RGBA): boolean
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
    /* Methods of EvinceDocument.AnnotationMarkup */
    get_label(): string
    get_opacity(): number
    get_popup_is_open(): boolean
    get_rectangle(ev_rect: Rectangle): void
    set_has_popup(has_popup: boolean): boolean
    set_label(label: string): boolean
    set_opacity(opacity: number): boolean
    set_popup_is_open(is_open: boolean): boolean
    set_rectangle(ev_rect: Rectangle): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::type", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::area", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contents", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rgba", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-have-popup", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-popup", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::popup-is-open", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rectangle", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: (($obj: AnnotationTextMarkup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AnnotationTextMarkup_ConstructProps)
    _init (config?: AnnotationTextMarkup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static highlight_new(page: Page): AnnotationTextMarkup
    static squiggly_new(page: Page): AnnotationTextMarkup
    static strike_out_new(page: Page): AnnotationTextMarkup
    static underline_new(page: Page): AnnotationTextMarkup
    static $gtype: GObject.Type
}
export interface Attachment_ConstructProps extends GObject.Object_ConstructProps {
    ctime?: number
    data?: object
    description?: string
    mtime?: number
    name?: string
    size?: number
}
export class Attachment {
    /* Fields of EvinceDocument.Attachment */
    base_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.Attachment */
    get_creation_date(): GLib.Time
    get_description(): string
    get_mime_type(): string
    get_modification_date(): GLib.Time
    get_name(): string
    open(screen: Gdk.Screen, timestamp: number): boolean
    save(file: Gio.File): boolean
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
    /* Static methods and pseudo-constructors */
    static new(name: string, description: string, mtime: GLib.Time, ctime: GLib.Time, size: number, data?: object | null): Attachment
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface Document_ConstructProps extends GObject.Object_ConstructProps {
    modified?: boolean
}
export class Document {
    /* Properties of EvinceDocument.Document */
    modified: boolean
    /* Fields of EvinceDocument.Document */
    base: GObject.Object
    priv: DocumentPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.Document */
    check_dimensions(): boolean
    find_page_by_label(page_label: string, page_index: number): boolean
    get_backend_info(info: DocumentBackendInfo): boolean
    get_info(): DocumentInfo
    get_max_label_len(): number
    get_max_page_size(width: number, height: number): void
    get_min_page_size(width: number, height: number): void
    get_modified(): boolean
    get_n_pages(): number
    get_page(index: number): Page
    get_page_label(page_index: number): string
    get_page_size(page_index: number): [ /* width */ number | null, /* height */ number | null ]
    get_size(): number
    get_thumbnail(rc: RenderContext): GdkPixbuf.Pixbuf
    get_thumbnail_surface(rc: RenderContext): cairo.Surface
    get_title(): string
    get_uri(): string
    has_synctex(): boolean
    has_text_page_labels(): boolean
    is_page_size_uniform(): boolean
    load(uri: string): boolean
    load_full(uri: string, flags: DocumentLoadFlags): boolean
    load_gfile(file: Gio.File, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean
    load_stream(stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean
    render(rc: RenderContext): cairo.Surface
    save(uri: string): boolean
    set_modified(modified: boolean): void
    synctex_backward_search(page_index: number, x: number, y: number): SourceLink
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
    /* Virtual methods of EvinceDocument.Document */
    vfunc_get_backend_info(info: DocumentBackendInfo): boolean
    vfunc_get_info(): DocumentInfo
    vfunc_get_n_pages(): number
    vfunc_get_page(index: number): Page
    vfunc_get_page_label(page: Page): string
    vfunc_get_page_size(page: Page): [ /* width */ number | null, /* height */ number | null ]
    vfunc_get_thumbnail(rc: RenderContext): GdkPixbuf.Pixbuf
    vfunc_get_thumbnail_surface(rc: RenderContext): cairo.Surface
    vfunc_load(uri: string): boolean
    vfunc_load_gfile(file: Gio.File, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean
    vfunc_load_stream(stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean
    vfunc_render(rc: RenderContext): cairo.Surface
    vfunc_save(uri: string): boolean
    vfunc_support_synctex(): boolean
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
    connect(sigName: "notify::modified", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Document_ConstructProps)
    _init (config?: Document_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static doc_mutex_lock(): void
    static doc_mutex_trylock(): boolean
    static doc_mutex_unlock(): void
    static factory_add_filters(chooser: Gtk.Widget, document: Document): void
    static factory_get_document(uri: string): Document
    static factory_get_document_for_gfile(file: Gio.File, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): Document
    static factory_get_document_for_stream(stream: Gio.InputStream, mime_type: string | null, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): Document
    static factory_get_document_full(uri: string, flags: DocumentLoadFlags): Document
    static fc_mutex_lock(): void
    static fc_mutex_trylock(): boolean
    static fc_mutex_unlock(): void
    static misc_format_date(utime: GLib.Time): string
    static misc_format_datetime(dt: GLib.DateTime): string
    static misc_get_loading_thumbnail(width: number, height: number, inverted_colors: boolean): GdkPixbuf.Pixbuf
    static misc_get_page_border_size(page_width: number, page_height: number, border: Gtk.Border): void
    static misc_get_pointer_position(widget: Gtk.Widget): [ /* x */ number, /* y */ number ]
    static misc_get_screen_dpi(screen: Gdk.Screen): number
    static misc_get_thumbnail_frame(width: number, height: number, source_pixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf
    static misc_get_widget_dpi(widget: Gtk.Widget): number
    static misc_invert_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    static misc_invert_surface(surface: cairo.Surface): void
    static misc_paint_one_page(cr: cairo.Context, widget: Gtk.Widget, area: Gdk.Rectangle, border: Gtk.Border, highlight: boolean, inverted_colors: boolean): void
    static misc_pixbuf_from_surface(surface: cairo.Surface): GdkPixbuf.Pixbuf
    static misc_render_loading_thumbnail(widget: Gtk.Widget, width: number, height: number, inverted_colors: boolean): GdkPixbuf.Pixbuf
    static misc_render_loading_thumbnail_surface(widget: Gtk.Widget, width: number, height: number, inverted_colors: boolean): cairo.Surface
    static misc_render_thumbnail_surface_with_frame(widget: Gtk.Widget, source_surface: cairo.Surface, width: number, height: number): cairo.Surface
    static misc_render_thumbnail_with_frame(widget: Gtk.Widget, source_pixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf
    static misc_surface_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): cairo.Surface
    static misc_surface_rotate_and_scale(surface: cairo.Surface, dest_width: number, dest_height: number, dest_rotation: number): cairo.Surface
    static $gtype: GObject.Type
}
export interface FormField_ConstructProps extends GObject.Object_ConstructProps {
}
export class FormField {
    /* Fields of EvinceDocument.FormField */
    parent: GObject.Object
    id: number
    is_read_only: boolean
    font_size: number
    activation_link: Link
    page: Page
    changed: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.FormField */
    get_alternate_name(): string
    set_alternate_name(alternative_text: string): void
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
export interface FormFieldButton_ConstructProps extends FormField_ConstructProps {
}
export class FormFieldButton {
    /* Fields of EvinceDocument.FormFieldButton */
    parent: FormField
    type: FormFieldButtonType
    state: boolean
    /* Fields of EvinceDocument.FormField */
    id: number
    is_read_only: boolean
    font_size: number
    activation_link: Link
    page: Page
    changed: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.FormField */
    get_alternate_name(): string
    set_alternate_name(alternative_text: string): void
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
    connect(sigName: "notify", callback: (($obj: FormFieldButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FormFieldButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FormFieldButton_ConstructProps)
    _init (config?: FormFieldButton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, type: FormFieldButtonType): FormFieldButton
    static $gtype: GObject.Type
}
export interface FormFieldChoice_ConstructProps extends FormField_ConstructProps {
}
export class FormFieldChoice {
    /* Fields of EvinceDocument.FormFieldChoice */
    parent: FormField
    type: FormFieldChoiceType
    multi_select: boolean
    is_editable: boolean
    do_spell_check: boolean
    commit_on_sel_change: boolean
    selected_items: object[]
    text: string
    /* Fields of EvinceDocument.FormField */
    id: number
    is_read_only: boolean
    font_size: number
    activation_link: Link
    page: Page
    changed: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.FormField */
    get_alternate_name(): string
    set_alternate_name(alternative_text: string): void
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
    connect(sigName: "notify", callback: (($obj: FormFieldChoice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FormFieldChoice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FormFieldChoice_ConstructProps)
    _init (config?: FormFieldChoice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, type: FormFieldChoiceType): FormFieldChoice
    static $gtype: GObject.Type
}
export interface FormFieldSignature_ConstructProps extends FormField_ConstructProps {
}
export class FormFieldSignature {
    /* Fields of EvinceDocument.FormFieldSignature */
    parent: FormField
    /* Fields of EvinceDocument.FormField */
    id: number
    is_read_only: boolean
    font_size: number
    activation_link: Link
    page: Page
    changed: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.FormField */
    get_alternate_name(): string
    set_alternate_name(alternative_text: string): void
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
    connect(sigName: "notify", callback: (($obj: FormFieldSignature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FormFieldSignature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FormFieldSignature_ConstructProps)
    _init (config?: FormFieldSignature_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number): FormFieldSignature
    static $gtype: GObject.Type
}
export interface FormFieldText_ConstructProps extends FormField_ConstructProps {
}
export class FormFieldText {
    /* Fields of EvinceDocument.FormFieldText */
    parent: FormField
    type: FormFieldTextType
    do_spell_check: boolean
    do_scroll: boolean
    comb: boolean
    is_rich_text: boolean
    is_password: boolean
    max_len: number
    text: string
    /* Fields of EvinceDocument.FormField */
    id: number
    is_read_only: boolean
    font_size: number
    activation_link: Link
    page: Page
    changed: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.FormField */
    get_alternate_name(): string
    set_alternate_name(alternative_text: string): void
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
    connect(sigName: "notify", callback: (($obj: FormFieldText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FormFieldText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FormFieldText_ConstructProps)
    _init (config?: FormFieldText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, type: FormFieldTextType): FormFieldText
    static $gtype: GObject.Type
}
export interface Image_ConstructProps extends GObject.Object_ConstructProps {
}
export class Image {
    /* Fields of EvinceDocument.Image */
    base_instance: GObject.Object
    priv: ImagePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.Image */
    get_id(): number
    get_page(): number
    get_pixbuf(): GdkPixbuf.Pixbuf
    get_tmp_uri(): string
    save_tmp(pixbuf: GdkPixbuf.Pixbuf): string
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
    connect(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Image_ConstructProps)
    _init (config?: Image_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(page: number, img_id: number): Image
    static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Image
    static $gtype: GObject.Type
}
export interface Layer_ConstructProps extends GObject.Object_ConstructProps {
}
export class Layer {
    /* Fields of EvinceDocument.Layer */
    base_instance: GObject.Object
    priv: LayerPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.Layer */
    get_rb_group(): number
    is_parent(): boolean
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
    /* Static methods and pseudo-constructors */
    static new(is_parent: boolean, rb_group: number): Layer
    static $gtype: GObject.Type
}
export interface Link_ConstructProps extends GObject.Object_ConstructProps {
    action?: LinkAction
    title?: string
}
export class Link {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.Link */
    get_action(): LinkAction
    get_title(): string
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
    connect(sigName: "notify", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Link, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Link_ConstructProps)
    _init (config?: Link_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, action: LinkAction): Link
    static $gtype: GObject.Type
}
export interface LinkAction_ConstructProps extends GObject.Object_ConstructProps {
    dest?: LinkDest
    exclude_reset_fields?: boolean
    filename?: string
    hide_list?: object
    name?: string
    params?: string
    reset_fields?: object
    show_list?: object
    toggle_list?: object
    type?: LinkActionType
    uri?: string
}
export class LinkAction {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.LinkAction */
    equal(b: LinkAction): boolean
    get_action_type(): LinkActionType
    get_dest(): LinkDest
    get_exclude_reset_fields(): boolean
    get_filename(): string
    get_hide_list(): Layer[]
    get_name(): string
    get_params(): string
    get_show_list(): Layer[]
    get_toggle_list(): Layer[]
    get_uri(): string
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
    connect(sigName: "notify", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LinkAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LinkAction_ConstructProps)
    _init (config?: LinkAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_dest(dest: LinkDest): LinkAction
    static new_external_uri(uri: string): LinkAction
    static new_launch(filename: string, params: string): LinkAction
    static new_layers_state(show_list: Layer[], hide_list: Layer[], toggle_list: Layer[]): LinkAction
    static new_named(name: string): LinkAction
    static new_remote(dest: LinkDest, filename: string): LinkAction
    static $gtype: GObject.Type
}
export interface LinkDest_ConstructProps extends GObject.Object_ConstructProps {
    bottom?: number
    change?: number
    left?: number
    named?: string
    page?: number
    page_label?: string
    right?: number
    top?: number
    type?: LinkDestType
    zoom?: number
}
export class LinkDest {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.LinkDest */
    equal(b: LinkDest): boolean
    get_bottom(): number
    get_dest_type(): LinkDestType
    get_left(change_left: boolean): number
    get_named_dest(): string
    get_page(): number
    get_page_label(): string
    get_right(): number
    get_top(change_top: boolean): number
    get_zoom(change_zoom: boolean): number
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
    connect(sigName: "notify", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LinkDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LinkDest_ConstructProps)
    _init (config?: LinkDest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_fit(page: number): LinkDest
    static new_fith(page: number, top: number, change_top: boolean): LinkDest
    static new_fitr(page: number, left: number, bottom: number, right: number, top: number): LinkDest
    static new_fitv(page: number, left: number, change_left: boolean): LinkDest
    static new_named(named_dest: string): LinkDest
    static new_page(page: number): LinkDest
    static new_page_label(page_label: string): LinkDest
    static new_xyz(page: number, left: number, top: number, zoom: number, change_left: boolean, change_top: boolean, change_zoom: boolean): LinkDest
    static $gtype: GObject.Type
}
export interface Media_ConstructProps extends GObject.Object_ConstructProps {
}
export class Media {
    /* Fields of EvinceDocument.Media */
    base_instance: GObject.Object
    priv: MediaPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.Media */
    get_page_index(): number
    get_show_controls(): boolean
    get_uri(): string
    set_show_controls(show_controls: boolean): void
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
    /* Static methods and pseudo-constructors */
    static new_for_uri(page: Page, uri: string): Media
    static $gtype: GObject.Type
}
export interface Page_ConstructProps extends GObject.Object_ConstructProps {
}
export class Page {
    /* Fields of EvinceDocument.Page */
    base_instance: GObject.Object
    index: number
    backend_page: BackendPage
    backend_destroy_func: BackendPageDestroyFunc
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Page_ConstructProps)
    _init (config?: Page_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(index: number): Page
    static $gtype: GObject.Type
}
export interface RenderContext_ConstructProps extends GObject.Object_ConstructProps {
}
export class RenderContext {
    /* Fields of EvinceDocument.RenderContext */
    parent: GObject.Object
    page: Page
    rotation: number
    scale: number
    target_width: number
    target_height: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of EvinceDocument.RenderContext */
    compute_scaled_size(width_points: number, height_points: number, scaled_width: number, scaled_height: number): void
    compute_scales(width_points: number, height_points: number, scale_x: number, scale_y: number): void
    compute_transformed_size(width_points: number, height_points: number, transformed_width: number, transformed_height: number): void
    set_page(page: Page): void
    set_rotation(rotation: number): void
    set_scale(scale: number): void
    set_target_size(target_width: number, target_height: number): void
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
    connect(sigName: "notify", callback: (($obj: RenderContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RenderContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RenderContext_ConstructProps)
    _init (config?: RenderContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(page: Page, rotation: number, scale: number): RenderContext
    static $gtype: GObject.Type
}
export interface TransitionEffect_ConstructProps extends GObject.Object_ConstructProps {
    alignment?: TransitionEffectAlignment
    angle?: number
    direction?: TransitionEffectDirection
    duration?: number
    rectangular?: boolean
    scale?: number
    type?: TransitionEffectType
}
export class TransitionEffect {
    /* Properties of EvinceDocument.TransitionEffect */
    alignment: TransitionEffectAlignment
    angle: number
    direction: TransitionEffectDirection
    duration: number
    rectangular: boolean
    scale: number
    type: TransitionEffectType
    /* Fields of EvinceDocument.TransitionEffect */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alignment", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::angle", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::angle", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::direction", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rectangular", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangular", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: TransitionEffect, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TransitionEffect_ConstructProps)
    _init (config?: TransitionEffect_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AnnotationAttachmentClass {
    static name: string
}
export abstract class AnnotationClass {
    static name: string
}
export abstract class AnnotationMarkupInterface {
    static name: string
}
export abstract class AnnotationTextClass {
    static name: string
}
export abstract class AnnotationTextMarkupClass {
    static name: string
}
export abstract class AsyncRendererInterface {
    /* Fields of EvinceDocument.AsyncRendererInterface */
    base_iface: GObject.TypeInterface
    render_finished: (renderer: AsyncRenderer, pixbuf: GdkPixbuf.Pixbuf) => void
    render_pixbuf: (renderer: AsyncRenderer, page: number, scale: number, rotation: number) => void
    static name: string
}
export abstract class AttachmentClass {
    /* Fields of EvinceDocument.AttachmentClass */
    base_class: GObject.ObjectClass
    static name: string
}
export abstract class DocumentAnnotationsInterface {
    /* Fields of EvinceDocument.DocumentAnnotationsInterface */
    base_iface: GObject.TypeInterface
    get_annotations: (document_annots: DocumentAnnotations, page: Page) => MappingList
    document_is_modified: (document_annots: DocumentAnnotations) => boolean
    add_annotation: (document_annots: DocumentAnnotations, annot: Annotation, rect: Rectangle) => void
    save_annotation: (document_annots: DocumentAnnotations, annot: Annotation, mask: AnnotationsSaveMask) => void
    remove_annotation: (document_annots: DocumentAnnotations, annot: Annotation) => void
    over_markup: (document_annots: DocumentAnnotations, annot: Annotation, x: number, y: number) => AnnotationsOverMarkup
    static name: string
}
export abstract class DocumentAttachmentsInterface {
    /* Fields of EvinceDocument.DocumentAttachmentsInterface */
    base_iface: GObject.TypeInterface
    has_attachments: (document_attachments: DocumentAttachments) => boolean
    get_attachments: (document_attachments: DocumentAttachments) => Attachment[]
    static name: string
}
export class DocumentBackendInfo {
    /* Fields of EvinceDocument.DocumentBackendInfo */
    name: string
    version: string
    static name: string
}
export abstract class DocumentClass {
    /* Fields of EvinceDocument.DocumentClass */
    base_class: GObject.ObjectClass
    load: (document: Document, uri: string) => boolean
    save: (document: Document, uri: string) => boolean
    get_n_pages: (document: Document) => number
    get_page: (document: Document, index: number) => Page
    get_page_size: (document: Document, page: Page) => [ /* width */ number | null, /* height */ number | null ]
    get_page_label: (document: Document, page: Page) => string
    render: (document: Document, rc: RenderContext) => cairo.Surface
    get_thumbnail: (document: Document, rc: RenderContext) => GdkPixbuf.Pixbuf
    get_info: (document: Document) => DocumentInfo
    get_backend_info: (document: Document, info: DocumentBackendInfo) => boolean
    support_synctex: (document: Document) => boolean
    load_stream: (document: Document, stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null) => boolean
    load_gfile: (document: Document, file: Gio.File, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null) => boolean
    get_thumbnail_surface: (document: Document, rc: RenderContext) => cairo.Surface
    static name: string
}
export abstract class DocumentFindInterface {
    /* Fields of EvinceDocument.DocumentFindInterface */
    base_iface: GObject.TypeInterface
    find_text: (document_find: DocumentFind, page: Page, text: string, case_sensitive: boolean) => Rectangle[]
    find_text_with_options: (document_find: DocumentFind, page: Page, text: string, options: FindOptions) => Rectangle[]
    get_supported_options: (document_find: DocumentFind) => FindOptions
    static name: string
}
export abstract class DocumentFontsInterface {
    /* Fields of EvinceDocument.DocumentFontsInterface */
    base_iface: GObject.TypeInterface
    scan: (document_fonts: DocumentFonts, n_pages: number) => boolean
    get_progress: (document_fonts: DocumentFonts) => number
    fill_model: (document_fonts: DocumentFonts, model: Gtk.TreeModel) => void
    get_fonts_summary: (document_fonts: DocumentFonts) => string
    static name: string
}
export abstract class DocumentFormsInterface {
    /* Fields of EvinceDocument.DocumentFormsInterface */
    base_iface: GObject.TypeInterface
    get_form_fields: (document_forms: DocumentForms, page: Page) => MappingList
    document_is_modified: (document_forms: DocumentForms) => boolean
    form_field_text_get_text: (document_forms: DocumentForms, field: FormField) => string
    form_field_text_set_text: (document_forms: DocumentForms, field: FormField, text: string) => void
    form_field_button_get_state: (document_forms: DocumentForms, field: FormField) => boolean
    form_field_button_set_state: (document_forms: DocumentForms, field: FormField, state: boolean) => void
    form_field_choice_get_item: (document_forms: DocumentForms, field: FormField, index: number) => string
    form_field_choice_get_n_items: (document_forms: DocumentForms, field: FormField) => number
    form_field_choice_is_item_selected: (document_forms: DocumentForms, field: FormField, index: number) => boolean
    form_field_choice_select_item: (document_forms: DocumentForms, field: FormField, index: number) => void
    form_field_choice_toggle_item: (document_forms: DocumentForms, field: FormField, index: number) => void
    form_field_choice_unselect_all: (document_forms: DocumentForms, field: FormField) => void
    form_field_choice_set_text: (document_forms: DocumentForms, field: FormField, text: string) => void
    form_field_choice_get_text: (document_forms: DocumentForms, field: FormField) => string
    reset_form: (document_forms: DocumentForms, action: LinkAction) => void
    static name: string
}
export abstract class DocumentImagesInterface {
    /* Fields of EvinceDocument.DocumentImagesInterface */
    base_iface: GObject.TypeInterface
    get_image_mapping: (document_images: DocumentImages, page: Page) => MappingList
    get_image: (document_images: DocumentImages, image: Image) => GdkPixbuf.Pixbuf
    static name: string
}
export class DocumentInfo {
    /* Fields of EvinceDocument.DocumentInfo */
    title: string
    format: string
    author: string
    subject: string
    keywords: string
    creator: string
    producer: string
    linearized: string
    security: string
    creation_date: GLib.Time
    modified_date: GLib.Time
    layout: DocumentLayout
    mode: DocumentMode
    ui_hints: number
    permissions: number
    n_pages: number
    paper_height: number
    paper_width: number
    license: DocumentLicense
    contains_js: DocumentContainsJS
    fields_mask: number
    /* Methods of EvinceDocument.DocumentInfo */
    copy(): DocumentInfo
    free(): void
    static name: string
}
export abstract class DocumentLayersInterface {
    /* Fields of EvinceDocument.DocumentLayersInterface */
    base_iface: GObject.TypeInterface
    has_layers: (document_layers: DocumentLayers) => boolean
    get_layers: (document_layers: DocumentLayers) => Gtk.TreeModel
    show_layer: (document_layers: DocumentLayers, layer: Layer) => void
    hide_layer: (document_layers: DocumentLayers, layer: Layer) => void
    layer_is_visible: (document_layers: DocumentLayers, layer: Layer) => boolean
    static name: string
}
export class DocumentLicense {
    /* Fields of EvinceDocument.DocumentLicense */
    text: string
    uri: string
    web_statement: string
    /* Methods of EvinceDocument.DocumentLicense */
    copy(): DocumentLicense
    free(): void
    get_text(): string
    get_uri(): string
    get_web_statement(): string
    static name: string
    static new(): DocumentLicense
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): DocumentLicense
}
export abstract class DocumentLinksInterface {
    /* Fields of EvinceDocument.DocumentLinksInterface */
    base_iface: GObject.TypeInterface
    has_document_links: (document_links: DocumentLinks) => boolean
    get_links_model: (document_links: DocumentLinks) => Gtk.TreeModel
    get_links: (document_links: DocumentLinks, page: Page) => MappingList
    find_link_dest: (document_links: DocumentLinks, link_name: string) => LinkDest
    find_link_page: (document_links: DocumentLinks, link_name: string) => number
    static name: string
}
export abstract class DocumentMediaInterface {
    /* Fields of EvinceDocument.DocumentMediaInterface */
    base_iface: GObject.TypeInterface
    get_media_mapping: (document_media: DocumentMedia, page: Page) => MappingList
    static name: string
}
export abstract class DocumentPrintInterface {
    /* Fields of EvinceDocument.DocumentPrintInterface */
    base_iface: GObject.TypeInterface
    print_page: (document_print: DocumentPrint, page: Page, cr: cairo.Context) => void
    static name: string
}
export class DocumentPrivate {
    static name: string
}
export abstract class DocumentSecurityInterface {
    /* Fields of EvinceDocument.DocumentSecurityInterface */
    base_iface: GObject.TypeInterface
    has_document_security: (document_security: DocumentSecurity) => boolean
    set_password: (document_security: DocumentSecurity, password: string) => void
    static name: string
}
export abstract class DocumentTextInterface {
    /* Fields of EvinceDocument.DocumentTextInterface */
    base_iface: GObject.TypeInterface
    get_text_mapping: (document_text: DocumentText, page: Page) => cairo.Region
    get_text: (document_text: DocumentText, page: Page) => string
    get_text_layout: (document_text: DocumentText, page: Page, areas: Rectangle, n_areas: number) => boolean
    get_text_attrs: (document_text: DocumentText, page: Page) => Pango.AttrList
    static name: string
}
export abstract class DocumentTransitionInterface {
    /* Fields of EvinceDocument.DocumentTransitionInterface */
    base_iface: GObject.TypeInterface
    get_page_duration: (document_trans: DocumentTransition, page: number) => number
    get_effect: (document_trans: DocumentTransition, page: number) => TransitionEffect
    static name: string
}
export class FileExporterContext {
    /* Fields of EvinceDocument.FileExporterContext */
    format: FileExporterFormat
    filename: string
    first_page: number
    last_page: number
    paper_width: number
    paper_height: number
    duplex: boolean
    pages_per_sheet: number
    static name: string
}
export abstract class FileExporterInterface {
    /* Fields of EvinceDocument.FileExporterInterface */
    base_iface: GObject.TypeInterface
    begin: (exporter: FileExporter, fc: FileExporterContext) => void
    begin_page: (exporter: FileExporter) => void
    do_page: (exporter: FileExporter, rc: RenderContext) => void
    end_page: (exporter: FileExporter) => void
    end: (exporter: FileExporter) => void
    get_capabilities: (exporter: FileExporter) => FileExporterCapabilities
    static name: string
}
export abstract class FormFieldButtonClass {
    /* Fields of EvinceDocument.FormFieldButtonClass */
    parent_class: FormFieldClass
    static name: string
}
export abstract class FormFieldChoiceClass {
    /* Fields of EvinceDocument.FormFieldChoiceClass */
    parent_class: FormFieldClass
    static name: string
}
export abstract class FormFieldClass {
    /* Fields of EvinceDocument.FormFieldClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class FormFieldSignatureClass {
    /* Fields of EvinceDocument.FormFieldSignatureClass */
    parent_class: FormFieldClass
    static name: string
}
export abstract class FormFieldTextClass {
    /* Fields of EvinceDocument.FormFieldTextClass */
    parent_class: FormFieldClass
    static name: string
}
export abstract class ImageClass {
    /* Fields of EvinceDocument.ImageClass */
    base_class: GObject.ObjectClass
    static name: string
}
export class ImagePrivate {
    static name: string
}
export abstract class LayerClass {
    /* Fields of EvinceDocument.LayerClass */
    base_class: GObject.ObjectClass
    static name: string
}
export class LayerPrivate {
    static name: string
}
export abstract class LinkActionClass {
    static name: string
}
export class LinkActionPrivate {
    static name: string
}
export abstract class LinkClass {
    static name: string
}
export abstract class LinkDestClass {
    static name: string
}
export class LinkDestPrivate {
    static name: string
}
export class LinkPrivate {
    static name: string
}
export class Mapping {
    /* Fields of EvinceDocument.Mapping */
    area: Rectangle
    data: object
    static name: string
}
export class MappingList {
    /* Methods of EvinceDocument.MappingList */
    find(data?: object | null): Mapping
    find_custom(data: object | null, func: GLib.CompareFunc): Mapping
    get(x: number, y: number): Mapping
    get_data(x: number, y: number): object | null
    get_list(): Mapping[]
    get_page(): number
    length(): number
    nth(n: number): Mapping
    ref(): MappingList
    remove(mapping: Mapping): void
    unref(): void
    static name: string
    static new(page: number, list: Mapping[], data_destroy_func: GLib.DestroyNotify): MappingList
    constructor(page: number, list: Mapping[], data_destroy_func: GLib.DestroyNotify)
    /* Static methods and pseudo-constructors */
    static new(page: number, list: Mapping[], data_destroy_func: GLib.DestroyNotify): MappingList
}
export abstract class MediaClass {
    /* Fields of EvinceDocument.MediaClass */
    base_class: GObject.ObjectClass
    static name: string
}
export class MediaPrivate {
    static name: string
}
export abstract class PageClass {
    /* Fields of EvinceDocument.PageClass */
    base_class: GObject.ObjectClass
    static name: string
}
export class Point {
    /* Fields of EvinceDocument.Point */
    x: number
    y: number
    static name: string
}
export class Rectangle {
    /* Fields of EvinceDocument.Rectangle */
    x1: number
    y1: number
    x2: number
    y2: number
    /* Methods of EvinceDocument.Rectangle */
    copy(): Rectangle
    free(): void
    static name: string
    static new(): Rectangle
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Rectangle
}
export abstract class RenderContextClass {
    /* Fields of EvinceDocument.RenderContextClass */
    klass: GObject.ObjectClass
    static name: string
}
export abstract class SelectionInterface {
    /* Fields of EvinceDocument.SelectionInterface */
    base_iface: GObject.TypeInterface
    render_selection: (selection: Selection, rc: RenderContext, surface: cairo.Surface, points: Rectangle, old_points: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color) => void
    get_selected_text: (selection: Selection, page: Page, style: SelectionStyle, points: Rectangle) => string
    get_selection_region: (selection: Selection, rc: RenderContext, style: SelectionStyle, points: Rectangle) => cairo.Region
    static name: string
}
export class SourceLink {
    /* Fields of EvinceDocument.SourceLink */
    filename: string
    line: number
    col: number
    /* Methods of EvinceDocument.SourceLink */
    copy(): SourceLink
    free(): void
    static name: string
    static new(filename: string, line: number, col: number): SourceLink
    constructor(filename: string, line: number, col: number)
    /* Static methods and pseudo-constructors */
    static new(filename: string, line: number, col: number): SourceLink
}
export abstract class TransitionEffectClass {
    /* Fields of EvinceDocument.TransitionEffectClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class TypeInfo {
    /* Fields of EvinceDocument.TypeInfo */
    desc: string
    mime_types: string
    static name: string
}
type BackendPage = object
type BackendPageDestroyFunc = GLib.DestroyNotify