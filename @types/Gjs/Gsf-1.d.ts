/**
 * Gsf-1
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum ClipFormat {
    WINDOWS_CLIPBOARD,
    MACINTOSH_CLIPBOARD,
    GUID,
    NO_DATA,
    CLIPBOARD_FORMAT_NAME,
    UNKNOWN,
}
export enum ClipFormatWindows {
    ERROR,
    UNKNOWN,
    METAFILE,
    DIB,
    ENHANCED_METAFILE,
}
export enum Error {
    OUT_OF_MEMORY,
    INVALID_DATA,
}
export enum OutputCsvQuotingMode {
    NEVER,
    AUTO,
    ALWAYS,
}
export enum XMLContent {
    NO_CONTENT,
    CONTENT,
    SHARED_CONTENT,
    /* 2ND (invalid, starts with a number) */
}
export enum ZipCompressionMethod {
    STORED,
    SHRUNK,
    REDUCEDX1,
    REDUCEDX2,
    REDUCEDX3,
    REDUCEDX4,
    IMPLODED,
    TOKENIZED,
    DEFLATED,
    DEFLATED_BETTER,
    IMPLODED_BETTER,
}
export const META_NAME_BYTE_COUNT: string
export const META_NAME_CASE_SENSITIVE: string
export const META_NAME_CATEGORY: string
export const META_NAME_CELL_COUNT: string
export const META_NAME_CHARACTER_COUNT: string
export const META_NAME_CODEPAGE: string
export const META_NAME_COMPANY: string
export const META_NAME_CREATOR: string
export const META_NAME_DATE_CREATED: string
export const META_NAME_DATE_MODIFIED: string
export const META_NAME_DESCRIPTION: string
export const META_NAME_DICTIONARY: string
export const META_NAME_DOCUMENT_PARTS: string
export const META_NAME_EDITING_DURATION: string
export const META_NAME_GENERATOR: string
export const META_NAME_HEADING_PAIRS: string
export const META_NAME_HIDDEN_SLIDE_COUNT: string
export const META_NAME_IMAGE_COUNT: string
export const META_NAME_INITIAL_CREATOR: string
export const META_NAME_KEYWORD: string
export const META_NAME_KEYWORDS: string
export const META_NAME_LANGUAGE: string
export const META_NAME_LAST_PRINTED: string
export const META_NAME_LAST_SAVED_BY: string
export const META_NAME_LINE_COUNT: string
export const META_NAME_LINKS_DIRTY: string
export const META_NAME_LOCALE_SYSTEM_DEFAULT: string
export const META_NAME_MANAGER: string
export const META_NAME_MM_CLIP_COUNT: string
export const META_NAME_MSOLE_UNKNOWN_17: string
export const META_NAME_MSOLE_UNKNOWN_18: string
export const META_NAME_MSOLE_UNKNOWN_19: string
export const META_NAME_MSOLE_UNKNOWN_20: string
export const META_NAME_MSOLE_UNKNOWN_21: string
export const META_NAME_MSOLE_UNKNOWN_22: string
export const META_NAME_MSOLE_UNKNOWN_23: string
export const META_NAME_NOTE_COUNT: string
export const META_NAME_OBJECT_COUNT: string
export const META_NAME_PAGE_COUNT: string
export const META_NAME_PARAGRAPH_COUNT: string
export const META_NAME_PRESENTATION_FORMAT: string
export const META_NAME_PRINTED_BY: string
export const META_NAME_PRINT_DATE: string
export const META_NAME_REVISION_COUNT: string
export const META_NAME_SCALE: string
export const META_NAME_SECURITY: string
export const META_NAME_SLIDE_COUNT: string
export const META_NAME_SPREADSHEET_COUNT: string
export const META_NAME_SUBJECT: string
export const META_NAME_TABLE_COUNT: string
export const META_NAME_TEMPLATE: string
export const META_NAME_THUMBNAIL: string
export const META_NAME_TITLE: string
export const META_NAME_WORD_COUNT: string
export function base64_decode_simple(data: Uint8Array[], len: number): number
export function base64_decode_step(in_: Uint8Array[], len: number, out: Uint8Array[], state: number, save: number): [ /* returnType */ number, /* state */ number, /* save */ number ]
export function base64_encode_close(in_: Uint8Array[], break_lines: boolean, out: Uint8Array[], state: number, save: number): [ /* returnType */ number, /* state */ number, /* save */ number ]
export function base64_encode_simple(data: Uint8Array[], len: number): number
export function base64_encode_step(in_: Uint8Array[], len: number, break_lines: boolean, out: Uint8Array[], state: number, save: number): [ /* returnType */ number, /* state */ number, /* save */ number ]
export function debug_flag(flag: string): boolean
export function doc_meta_dump(meta: DocMetaData): void
export function error_quark(): GLib.Quark
export function extension_pointer(path: string): string
export function filename_to_utf8(filename: string, quoted: boolean): string
export function init(): void
export function init_dynamic(module: GObject.TypeModule): void
export function le_get_double(p?: object | null): number
export function le_get_float(p?: object | null): number
export function le_get_guint64(p?: object | null): number
export function le_set_double(p: object | null, d: number): void
export function le_set_float(p: object | null, f: number): void
export function mem_dump(ptr: number, len: number): void
export function msole_codepage_to_lid(codepage: number): number
export function msole_iconv_win_codepage(): number
export function msole_inflate(input: Input, offset: gsf_off_t): Uint8Array[]
export function msole_language_for_lid(lid: number): string
export function msole_lid_for_language(lang?: string | null): number
export function msole_lid_to_codepage(lid: number): number
export function msole_lid_to_codepage_str(lid: number): string
export function odf_get_ns(): XMLInNS
export function odf_get_version(): number
export function odf_get_version_string(): string
export function open_pkg_error_id(): number
export function open_pkg_foreach_rel(opkg: Input, func: OpenPkgIter): void
export function open_pkg_open_rel(opkg: Input, rel: OpenPkgRel): Input
export function open_pkg_open_rel_by_id(opkg: Input, id: string): Input
export function open_pkg_open_rel_by_type(opkg: Input, type: string): Input
export function open_pkg_parse_rel_by_id(xin: XMLIn, id: string, dtd: XMLInNode, ns: XMLInNS): GLib.Error
export function property_settings_find(name: string, params: GObject.Parameter[]): GObject.Parameter
export function property_settings_free(params: GObject.Parameter[]): void
export function shutdown(): void
export function shutdown_dynamic(module: GObject.TypeModule): void
export function value_get_docprop_array(value: any): any[] | null
export function value_get_docprop_varray(value: any): GObject.ValueArray
export function value_get_docprop_vector(value: any): DocPropVector
export function vba_inflate(input: Input, offset: gsf_off_t, size: number, add_null_terminator: boolean): number
export function xmlDocFormatDump(output: Output, cur: libxml2.Doc, encoding: string | null, format: boolean): number
export function xml_gvalue_from_str(res: any, t: GObject.Type, str: string): boolean
export function xml_probe(input: Input, func: XMLProbeFunc): boolean
export interface OpenPkgIter {
    (opkg: Input, rel: OpenPkgRel): void
}
export interface XMLInExtDtor {
    (xin: XMLIn, old_state?: object | null): void
}
export interface XMLInUnknownFunc {
    (xin: XMLIn, elem: libxml2.Char, attrs: libxml2.Char): boolean
}
export interface XMLProbeFunc {
    (name: libxml2.Char, prefix: libxml2.Char, URI: libxml2.Char, nb_namespaces: number, namespaces: libxml2.Char, nb_attributes: number, nb_defaulted: number, attributes: libxml2.Char): boolean
}
export interface Blob_ConstructProps extends GObject.Object_ConstructProps {
}
export class Blob {
    /* Fields of Gsf.Blob */
    object: GObject.Object
    priv: BlobPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Blob */
    get_size(): number
    peek_data(): object | null
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
    connect(sigName: "notify", callback: (($obj: Blob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Blob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Blob_ConstructProps)
    _init (config?: Blob_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data_to_copy: Uint8Array[]): Blob
    static $gtype: GObject.Type
}
export interface ClipData_ConstructProps extends GObject.Object_ConstructProps {
}
export class ClipData {
    /* Fields of Gsf.ClipData */
    object: GObject.Object
    priv: ClipDataPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.ClipData */
    get_data_blob(): Blob
    get_format(): ClipFormat
    get_windows_clipboard_format(): ClipFormatWindows
    peek_real_data(ret_size: number): object | null
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
    connect(sigName: "notify", callback: (($obj: ClipData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClipData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClipData_ConstructProps)
    _init (config?: ClipData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: ClipFormat, data_blob: Blob): ClipData
    static $gtype: GObject.Type
}
export interface DocMetaData_ConstructProps extends GObject.Object_ConstructProps {
}
export class DocMetaData {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.DocMetaData */
    foreach(func: GLib.HFunc): void
    insert(name: string, value: any): void
    lookup(name: string): DocProp | null
    odf_subtree(doc: XMLIn): void
    read_from_msole(in_: Input): GLib.Error
    read_from_odf(input: Input): GLib.Error
    remove(name: string): void
    size(): number
    steal(name: string): DocProp | null
    store(prop: DocProp): void
    write_to_msole(out: Output, doc_not_component: boolean): boolean
    write_to_odf(output: XMLOut): boolean
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
    connect(sigName: "notify", callback: (($obj: DocMetaData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocMetaData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DocMetaData_ConstructProps)
    _init (config?: DocMetaData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DocMetaData
    static $gtype: GObject.Type
}
export interface DocPropVector_ConstructProps extends GObject.Object_ConstructProps {
}
export class DocPropVector {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.DocPropVector */
    append(value: any): void
    as_string(): string
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
    connect(sigName: "notify", callback: (($obj: DocPropVector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocPropVector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DocPropVector_ConstructProps)
    _init (config?: DocPropVector_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DocPropVector
    static $gtype: GObject.Type
}
export interface Infile_ConstructProps extends Input_ConstructProps {
}
export class Infile {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Infile */
    parent: Input
    /* Fields of Gsf.Input */
    g_object: GObject.Object
    cur_offset: gsf_off_t
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Infile */
    child_by_aname(names: string[]): Input
    child_by_index(i: number): Input
    child_by_name(name: string): Input
    name_by_index(i: number): string | null
    num_children(): number
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dump_as_hex: boolean): void
    dup(): Input | null
    find_vba(): InfileMSVBA | null
    get_modtime(): GLib.DateTime
    read(num_bytes: number): Uint8Array[]
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seek_emulate(pos: gsf_off_t): boolean
    set_container(container?: Infile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_modtime_from_stat(st?: object | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename: string): boolean
    set_size(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
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
    /* Virtual methods of Gsf.Infile */
    vfunc_name_by_index(i: number): string | null
    vfunc_num_children(): number
    /* Virtual methods of Gsf.Input */
    vfunc_Dup(): Input | null
    vfunc_OpenSibling(name: string): Input
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eof", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modtime", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Infile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Infile_ConstructProps)
    _init (config?: Infile_ConstructProps): void
    static $gtype: GObject.Type
}
export interface InfileMSOle_ConstructProps extends Infile_ConstructProps {
}
export class InfileMSOle {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Infile */
    parent: Input
    /* Fields of Gsf.Input */
    g_object: GObject.Object
    cur_offset: gsf_off_t
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.InfileMSOle */
    get_class_id(res: number): boolean
    /* Methods of Gsf.Infile */
    child_by_aname(names: string[]): Input
    child_by_index(i: number): Input
    child_by_name(name: string): Input
    name_by_index(i: number): string | null
    num_children(): number
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dump_as_hex: boolean): void
    dup(): Input | null
    find_vba(): InfileMSVBA | null
    get_modtime(): GLib.DateTime
    read(num_bytes: number): Uint8Array[]
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seek_emulate(pos: gsf_off_t): boolean
    set_container(container?: Infile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_modtime_from_stat(st?: object | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename: string): boolean
    set_size(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
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
    /* Virtual methods of Gsf.Infile */
    vfunc_name_by_index(i: number): string | null
    vfunc_num_children(): number
    /* Virtual methods of Gsf.Input */
    vfunc_Dup(): Input | null
    vfunc_OpenSibling(name: string): Input
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eof", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modtime", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InfileMSOle_ConstructProps)
    _init (config?: InfileMSOle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InfileMSOle
    static $gtype: GObject.Type
}
export interface InfileMSVBA_ConstructProps extends Infile_ConstructProps {
}
export class InfileMSVBA {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Infile */
    parent: Input
    /* Fields of Gsf.Input */
    g_object: GObject.Object
    cur_offset: gsf_off_t
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.InfileMSVBA */
    get_modules(): GLib.HashTable | null
    steal_modules(): GLib.HashTable | null
    /* Methods of Gsf.Infile */
    child_by_aname(names: string[]): Input
    child_by_index(i: number): Input
    child_by_name(name: string): Input
    name_by_index(i: number): string | null
    num_children(): number
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dump_as_hex: boolean): void
    dup(): Input | null
    find_vba(): InfileMSVBA | null
    get_modtime(): GLib.DateTime
    read(num_bytes: number): Uint8Array[]
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seek_emulate(pos: gsf_off_t): boolean
    set_container(container?: Infile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_modtime_from_stat(st?: object | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename: string): boolean
    set_size(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
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
    /* Virtual methods of Gsf.Infile */
    vfunc_name_by_index(i: number): string | null
    vfunc_num_children(): number
    /* Virtual methods of Gsf.Input */
    vfunc_Dup(): Input | null
    vfunc_OpenSibling(name: string): Input
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eof", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modtime", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InfileMSVBA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InfileMSVBA_ConstructProps)
    _init (config?: InfileMSVBA_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Infile): InfileMSVBA
    static $gtype: GObject.Type
}
export interface InfileStdio_ConstructProps extends Infile_ConstructProps {
}
export class InfileStdio {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Infile */
    parent: Input
    /* Fields of Gsf.Input */
    g_object: GObject.Object
    cur_offset: gsf_off_t
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Infile */
    child_by_aname(names: string[]): Input
    child_by_index(i: number): Input
    child_by_name(name: string): Input
    name_by_index(i: number): string | null
    num_children(): number
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dump_as_hex: boolean): void
    dup(): Input | null
    find_vba(): InfileMSVBA | null
    get_modtime(): GLib.DateTime
    read(num_bytes: number): Uint8Array[]
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seek_emulate(pos: gsf_off_t): boolean
    set_container(container?: Infile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_modtime_from_stat(st?: object | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename: string): boolean
    set_size(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
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
    /* Virtual methods of Gsf.Infile */
    vfunc_name_by_index(i: number): string | null
    vfunc_num_children(): number
    /* Virtual methods of Gsf.Input */
    vfunc_Dup(): Input | null
    vfunc_OpenSibling(name: string): Input
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eof", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modtime", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InfileStdio_ConstructProps)
    _init (config?: InfileStdio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(root: string): InfileStdio
    static $gtype: GObject.Type
}
export interface InfileTar_ConstructProps extends Infile_ConstructProps {
    source?: Input
}
export class InfileTar {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Infile */
    parent: Input
    /* Fields of Gsf.Input */
    g_object: GObject.Object
    cur_offset: gsf_off_t
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Infile */
    child_by_aname(names: string[]): Input
    child_by_index(i: number): Input
    child_by_name(name: string): Input
    name_by_index(i: number): string | null
    num_children(): number
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dump_as_hex: boolean): void
    dup(): Input | null
    find_vba(): InfileMSVBA | null
    get_modtime(): GLib.DateTime
    read(num_bytes: number): Uint8Array[]
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seek_emulate(pos: gsf_off_t): boolean
    set_container(container?: Infile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_modtime_from_stat(st?: object | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename: string): boolean
    set_size(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
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
    /* Virtual methods of Gsf.Infile */
    vfunc_name_by_index(i: number): string | null
    vfunc_num_children(): number
    /* Virtual methods of Gsf.Input */
    vfunc_Dup(): Input | null
    vfunc_OpenSibling(name: string): Input
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eof", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modtime", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InfileTar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InfileTar_ConstructProps)
    _init (config?: InfileTar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InfileTar
    static $gtype: GObject.Type
}
export interface InfileZip_ConstructProps extends Infile_ConstructProps {
    internal_parent?: InfileZip
    source?: Input
}
export class InfileZip {
    /* Properties of Gsf.InfileZip */
    readonly compression_level: number
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Infile */
    parent: Input
    /* Fields of Gsf.Input */
    g_object: GObject.Object
    cur_offset: gsf_off_t
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Infile */
    child_by_aname(names: string[]): Input
    child_by_index(i: number): Input
    child_by_name(name: string): Input
    name_by_index(i: number): string | null
    num_children(): number
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dump_as_hex: boolean): void
    dup(): Input | null
    find_vba(): InfileMSVBA | null
    get_modtime(): GLib.DateTime
    read(num_bytes: number): Uint8Array[]
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seek_emulate(pos: gsf_off_t): boolean
    set_container(container?: Infile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_modtime_from_stat(st?: object | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename: string): boolean
    set_size(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
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
    /* Virtual methods of Gsf.Infile */
    vfunc_name_by_index(i: number): string | null
    vfunc_num_children(): number
    /* Virtual methods of Gsf.Input */
    vfunc_Dup(): Input | null
    vfunc_OpenSibling(name: string): Input
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compression-level", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-level", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::container", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eof", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modtime", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InfileZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InfileZip_ConstructProps)
    _init (config?: InfileZip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InfileZip
    static $gtype: GObject.Type
}
export interface Input_ConstructProps extends GObject.Object_ConstructProps {
}
export class Input {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Input */
    g_object: GObject.Object
    cur_offset: gsf_off_t
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dump_as_hex: boolean): void
    dup(): Input | null
    find_vba(): InfileMSVBA | null
    get_modtime(): GLib.DateTime
    read(num_bytes: number): Uint8Array[]
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seek_emulate(pos: gsf_off_t): boolean
    set_container(container?: Infile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_modtime_from_stat(st?: object | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename: string): boolean
    set_size(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
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
    /* Virtual methods of Gsf.Input */
    vfunc_Dup(): Input | null
    vfunc_OpenSibling(name: string): Input
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eof", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modtime", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Input, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Input_ConstructProps)
    _init (config?: Input_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static mmap_new(filename: string): Input
    static error_id(): GLib.Quark
    static $gtype: GObject.Type
}
export interface InputGZip_ConstructProps extends Input_ConstructProps {
    raw?: boolean
    source?: Input
    uncompressed_size?: number
}
export class InputGZip {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Input */
    g_object: GObject.Object
    cur_offset: gsf_off_t
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dump_as_hex: boolean): void
    dup(): Input | null
    find_vba(): InfileMSVBA | null
    get_modtime(): GLib.DateTime
    read(num_bytes: number): Uint8Array[]
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seek_emulate(pos: gsf_off_t): boolean
    set_container(container?: Infile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_modtime_from_stat(st?: object | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename: string): boolean
    set_size(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
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
    /* Virtual methods of Gsf.Input */
    vfunc_Dup(): Input | null
    vfunc_OpenSibling(name: string): Input
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eof", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modtime", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InputGZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputGZip_ConstructProps)
    _init (config?: InputGZip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InputGZip
    static $gtype: GObject.Type
}
export interface InputGio_ConstructProps extends Input_ConstructProps {
}
export class InputGio {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Input */
    g_object: GObject.Object
    cur_offset: gsf_off_t
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dump_as_hex: boolean): void
    dup(): Input | null
    find_vba(): InfileMSVBA | null
    get_modtime(): GLib.DateTime
    read(num_bytes: number): Uint8Array[]
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seek_emulate(pos: gsf_off_t): boolean
    set_container(container?: Infile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_modtime_from_stat(st?: object | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename: string): boolean
    set_size(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
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
    /* Virtual methods of Gsf.Input */
    vfunc_Dup(): Input | null
    vfunc_OpenSibling(name: string): Input
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eof", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modtime", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InputGio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputGio_ConstructProps)
    _init (config?: InputGio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: Gio.File): InputGio
    static new_for_path(path: string): InputGio
    static new_for_uri(uri: string): InputGio
    static $gtype: GObject.Type
}
export interface InputHTTP_ConstructProps extends Input_ConstructProps {
    content_type?: string
    url?: string
}
export class InputHTTP {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Input */
    g_object: GObject.Object
    cur_offset: gsf_off_t
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.InputHTTP */
    get_content_type(): string
    get_url(): string
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dump_as_hex: boolean): void
    dup(): Input | null
    find_vba(): InfileMSVBA | null
    get_modtime(): GLib.DateTime
    read(num_bytes: number): Uint8Array[]
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seek_emulate(pos: gsf_off_t): boolean
    set_container(container?: Infile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_modtime_from_stat(st?: object | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename: string): boolean
    set_size(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
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
    /* Virtual methods of Gsf.Input */
    vfunc_Dup(): Input | null
    vfunc_OpenSibling(name: string): Input
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eof", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modtime", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InputHTTP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputHTTP_ConstructProps)
    _init (config?: InputHTTP_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(url: string): InputHTTP
    static $gtype: GObject.Type
}
export interface InputMemory_ConstructProps extends Input_ConstructProps {
}
export class InputMemory {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Input */
    g_object: GObject.Object
    cur_offset: gsf_off_t
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dump_as_hex: boolean): void
    dup(): Input | null
    find_vba(): InfileMSVBA | null
    get_modtime(): GLib.DateTime
    read(num_bytes: number): Uint8Array[]
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seek_emulate(pos: gsf_off_t): boolean
    set_container(container?: Infile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_modtime_from_stat(st?: object | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename: string): boolean
    set_size(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
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
    /* Virtual methods of Gsf.Input */
    vfunc_Dup(): Input | null
    vfunc_OpenSibling(name: string): Input
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eof", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modtime", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InputMemory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputMemory_ConstructProps)
    _init (config?: InputMemory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buf: Uint8Array[], needs_free: boolean): InputMemory
    static new_clone(buf: Uint8Array[]): InputMemory
    static new_from_bzip(source: Input): InputMemory
    static new_from_iochannel(channel: GLib.IOChannel): InputMemory
    static $gtype: GObject.Type
}
export interface InputProxy_ConstructProps extends Input_ConstructProps {
}
export class InputProxy {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Input */
    g_object: GObject.Object
    cur_offset: gsf_off_t
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dump_as_hex: boolean): void
    dup(): Input | null
    find_vba(): InfileMSVBA | null
    get_modtime(): GLib.DateTime
    read(num_bytes: number): Uint8Array[]
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seek_emulate(pos: gsf_off_t): boolean
    set_container(container?: Infile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_modtime_from_stat(st?: object | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename: string): boolean
    set_size(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
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
    /* Virtual methods of Gsf.Input */
    vfunc_Dup(): Input | null
    vfunc_OpenSibling(name: string): Input
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eof", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modtime", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InputProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputProxy_ConstructProps)
    _init (config?: InputProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InputProxy
    static new_section(source: Input, offset: gsf_off_t, size: gsf_off_t): InputProxy
    static $gtype: GObject.Type
}
export interface InputStdio_ConstructProps extends Input_ConstructProps {
}
export class InputStdio {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Input */
    g_object: GObject.Object
    cur_offset: gsf_off_t
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dump_as_hex: boolean): void
    dup(): Input | null
    find_vba(): InfileMSVBA | null
    get_modtime(): GLib.DateTime
    read(num_bytes: number): Uint8Array[]
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seek_emulate(pos: gsf_off_t): boolean
    set_container(container?: Infile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_modtime_from_stat(st?: object | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename: string): boolean
    set_size(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
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
    /* Virtual methods of Gsf.Input */
    vfunc_Dup(): Input | null
    vfunc_OpenSibling(name: string): Input
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eof", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modtime", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InputStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputStdio_ConstructProps)
    _init (config?: InputStdio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): InputStdio
    static new_FILE(filename: string, file: object | null, keep_open: boolean): InputStdio
    static $gtype: GObject.Type
}
export interface InputTextline_ConstructProps extends Input_ConstructProps {
}
export class InputTextline {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Input */
    g_object: GObject.Object
    cur_offset: gsf_off_t
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.InputTextline */
    ascii_gets(): Uint8Array[] | null
    utf8_gets(): Uint8Array[] | null
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dump_as_hex: boolean): void
    dup(): Input | null
    find_vba(): InfileMSVBA | null
    get_modtime(): GLib.DateTime
    read(num_bytes: number): Uint8Array[]
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seek_emulate(pos: gsf_off_t): boolean
    set_container(container?: Infile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_modtime_from_stat(st?: object | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename: string): boolean
    set_size(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
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
    /* Virtual methods of Gsf.Input */
    vfunc_Dup(): Input | null
    vfunc_OpenSibling(name: string): Input
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eof", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modtime", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: InputTextline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputTextline_ConstructProps)
    _init (config?: InputTextline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Input): InputTextline
    static $gtype: GObject.Type
}
export interface ODFOut_ConstructProps extends XMLOut_ConstructProps {
    odf_version?: number
}
export class ODFOut {
    /* Properties of Gsf.XMLOut */
    pretty_print: boolean
    /* Fields of Gsf.ODFOut */
    base: XMLOut
    priv: object
    /* Fields of Gsf.XMLOut */
    output: Output
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.ODFOut */
    get_version(): number
    get_version_string(): string
    /* Methods of Gsf.XMLOut */
    add_base64(id: string | null, data: Uint8Array[]): void
    add_bool(id: string | null, val: boolean): void
    add_color(id: string | null, r: number, g: number, b: number): void
    add_cstr(id?: string | null, val_utf8?: string | null): void
    add_cstr_unchecked(id?: string | null, val_utf8?: string | null): void
    add_enum(id: string | null, etype: GObject.Type, val: number): void
    add_float(id: string | null, val: number, precision: number): void
    add_gvalue(id: string | null, val: any): void
    add_int(id: string | null, val: number): void
    add_uint(id: string | null, val: number): void
    end_element(): string
    get_output(): Output | null
    get_pretty_print(): boolean
    set_doc_type(type: string): void
    set_pretty_print(pp: boolean): boolean
    simple_element(id: string, content: string): void
    simple_float_element(id: string, val: number, precision: number): void
    simple_int_element(id: string, val: number): void
    start_element(id: string): void
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
    connect(sigName: "notify", callback: (($obj: ODFOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ODFOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::pretty-print", callback: (($obj: ODFOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pretty-print", callback: (($obj: ODFOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ODFOut_ConstructProps)
    _init (config?: ODFOut_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Outfile_ConstructProps extends Output_ConstructProps {
}
export class Outfile {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly is_closed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Outfile */
    parent: Output
    /* Fields of Gsf.Output */
    g_object: GObject.Object
    cur_size: gsf_off_t
    cur_offset: gsf_off_t
    wrapped_by: GObject.Object
    err: GLib.Error
    printf_buf: string
    printf_buf_size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Outfile */
    new_child(name: string, is_dir: boolean): Output
    open_pkg_add_rel(name: string, content_type: string, parent: Outfile, type: string): Output
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    get_modtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    set_container(container?: Outfile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array[]): boolean
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
    /* Virtual methods of Gsf.Output */
    vfunc_Close(): boolean
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfunc_Write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-closed", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Outfile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Outfile_ConstructProps)
    _init (config?: Outfile_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OutfileMSOle_ConstructProps extends Outfile_ConstructProps {
    big_block_size?: number
    sink?: Output
    small_block_size?: number
}
export class OutfileMSOle {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly is_closed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Outfile */
    parent: Output
    /* Fields of Gsf.Output */
    g_object: GObject.Object
    cur_size: gsf_off_t
    cur_offset: gsf_off_t
    wrapped_by: GObject.Object
    err: GLib.Error
    printf_buf: string
    printf_buf_size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.OutfileMSOle */
    set_class_id(clsid: Uint8Array[]): boolean
    /* Methods of Gsf.Outfile */
    new_child(name: string, is_dir: boolean): Output
    open_pkg_add_rel(name: string, content_type: string, parent: Outfile, type: string): Output
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    get_modtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    set_container(container?: Outfile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array[]): boolean
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
    /* Virtual methods of Gsf.Output */
    vfunc_Close(): boolean
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfunc_Write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-closed", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutfileMSOle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutfileMSOle_ConstructProps)
    _init (config?: OutfileMSOle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Output): OutfileMSOle
    static new_full(sink: Output, bb_size: number, sb_size: number): OutfileMSOle
    static $gtype: GObject.Type
}
export interface OutfileOpenPkg_ConstructProps extends Outfile_ConstructProps {
    content_type?: string
    is_dir?: boolean
    sink?: Outfile
}
export class OutfileOpenPkg {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly is_closed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Outfile */
    parent: Output
    /* Fields of Gsf.Output */
    g_object: GObject.Object
    cur_size: gsf_off_t
    cur_offset: gsf_off_t
    wrapped_by: GObject.Object
    err: GLib.Error
    printf_buf: string
    printf_buf_size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.OutfileOpenPkg */
    add_extern_rel(target: string, content_type: string): string
    relate(parent: OutfileOpenPkg, type: string): string
    set_content_type(content_type: string): void
    set_sink(sink: Output): void
    /* Methods of Gsf.Outfile */
    new_child(name: string, is_dir: boolean): Output
    open_pkg_add_rel(name: string, content_type: string, parent: Outfile, type: string): Output
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    get_modtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    set_container(container?: Outfile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array[]): boolean
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
    /* Virtual methods of Gsf.Output */
    vfunc_Close(): boolean
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfunc_Write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-closed", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutfileOpenPkg, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutfileOpenPkg_ConstructProps)
    _init (config?: OutfileOpenPkg_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Outfile): OutfileOpenPkg
    static $gtype: GObject.Type
}
export interface OutfileStdio_ConstructProps extends Outfile_ConstructProps {
}
export class OutfileStdio {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly is_closed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Outfile */
    parent: Output
    /* Fields of Gsf.Output */
    g_object: GObject.Object
    cur_size: gsf_off_t
    cur_offset: gsf_off_t
    wrapped_by: GObject.Object
    err: GLib.Error
    printf_buf: string
    printf_buf_size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Outfile */
    new_child(name: string, is_dir: boolean): Output
    open_pkg_add_rel(name: string, content_type: string, parent: Outfile, type: string): Output
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    get_modtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    set_container(container?: Outfile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array[]): boolean
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
    /* Virtual methods of Gsf.Output */
    vfunc_Close(): boolean
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfunc_Write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-closed", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutfileStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutfileStdio_ConstructProps)
    _init (config?: OutfileStdio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(root: string): OutfileStdio
    static $gtype: GObject.Type
}
export interface OutfileZip_ConstructProps extends Outfile_ConstructProps {
    compression_level?: number
    deflate_level?: number
    entry_name?: string
    sink?: Output
    zip64?: number
}
export class OutfileZip {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly is_closed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Outfile */
    parent: Output
    /* Fields of Gsf.Output */
    g_object: GObject.Object
    cur_size: gsf_off_t
    cur_offset: gsf_off_t
    wrapped_by: GObject.Object
    err: GLib.Error
    printf_buf: string
    printf_buf_size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.OutfileZip */
    set_compression_method(method: ZipCompressionMethod): boolean
    /* Methods of Gsf.Outfile */
    new_child(name: string, is_dir: boolean): Output
    open_pkg_add_rel(name: string, content_type: string, parent: Outfile, type: string): Output
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    get_modtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    set_container(container?: Outfile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array[]): boolean
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
    /* Virtual methods of Gsf.Output */
    vfunc_Close(): boolean
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfunc_Write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-closed", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutfileZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutfileZip_ConstructProps)
    _init (config?: OutfileZip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Output): OutfileZip
    static $gtype: GObject.Type
}
export interface Output_ConstructProps extends GObject.Object_ConstructProps {
    container?: Outfile
    modtime?: GLib.DateTime
    name?: string
}
export class Output {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly is_closed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Output */
    g_object: GObject.Object
    cur_size: gsf_off_t
    cur_offset: gsf_off_t
    wrapped_by: GObject.Object
    err: GLib.Error
    printf_buf: string
    printf_buf_size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    get_modtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    set_container(container?: Outfile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array[]): boolean
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
    /* Virtual methods of Gsf.Output */
    vfunc_Close(): boolean
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfunc_Write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-closed", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Output, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Output_ConstructProps)
    _init (config?: Output_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_id(): GLib.Quark
    static unwrap(wrapper: GObject.Object, wrapee: Output): boolean
    static wrap(wrapper: GObject.Object, wrapee: Output): boolean
    static $gtype: GObject.Type
}
export interface OutputBzip_ConstructProps extends Output_ConstructProps {
}
export class OutputBzip {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly is_closed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Output */
    g_object: GObject.Object
    cur_size: gsf_off_t
    cur_offset: gsf_off_t
    wrapped_by: GObject.Object
    err: GLib.Error
    printf_buf: string
    printf_buf_size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    get_modtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    set_container(container?: Outfile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array[]): boolean
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
    /* Virtual methods of Gsf.Output */
    vfunc_Close(): boolean
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfunc_Write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-closed", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputBzip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutputBzip_ConstructProps)
    _init (config?: OutputBzip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Output): OutputBzip
    static $gtype: GObject.Type
}
export interface OutputCsv_ConstructProps extends Output_ConstructProps {
    eol?: string
    quote?: string
    quoting_mode?: OutputCsvQuotingMode
    quoting_on_whitespace?: boolean
    quoting_triggers?: string
    separator?: string
    sink?: Output
}
export class OutputCsv {
    /* Properties of Gsf.OutputCsv */
    eol: string
    quote: string
    quoting_mode: OutputCsvQuotingMode
    quoting_on_whitespace: boolean
    quoting_triggers: string
    separator: string
    sink: Output
    /* Properties of Gsf.Output */
    container: Outfile
    readonly is_closed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.OutputCsv */
    output: Output
    quote_len: number
    eol_len: number
    separator_len: number
    fields_on_line: boolean
    buf: GLib.String
    /* Fields of Gsf.Output */
    g_object: GObject.Object
    cur_size: gsf_off_t
    cur_offset: gsf_off_t
    wrapped_by: GObject.Object
    err: GLib.Error
    printf_buf: string
    printf_buf_size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.OutputCsv */
    write_eol(): boolean
    write_field(field: string, len: number): boolean
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    get_modtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    set_container(container?: Outfile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array[]): boolean
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
    /* Virtual methods of Gsf.Output */
    vfunc_Close(): boolean
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfunc_Write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::eol", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eol", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quote", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quote", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quoting-mode", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quoting-mode", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quoting-on-whitespace", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quoting-on-whitespace", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quoting-triggers", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quoting-triggers", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::separator", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::separator", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sink", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sink", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::container", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-closed", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputCsv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutputCsv_ConstructProps)
    _init (config?: OutputCsv_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OutputGZip_ConstructProps extends Output_ConstructProps {
    deflate_level?: number
    raw?: boolean
    sink?: Output
}
export class OutputGZip {
    /* Properties of Gsf.OutputGZip */
    deflate_level: number
    /* Properties of Gsf.Output */
    container: Outfile
    readonly is_closed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Output */
    g_object: GObject.Object
    cur_size: gsf_off_t
    cur_offset: gsf_off_t
    wrapped_by: GObject.Object
    err: GLib.Error
    printf_buf: string
    printf_buf_size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    get_modtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    set_container(container?: Outfile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array[]): boolean
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
    /* Virtual methods of Gsf.Output */
    vfunc_Close(): boolean
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfunc_Write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::deflate-level", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deflate-level", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::container", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-closed", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputGZip, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutputGZip_ConstructProps)
    _init (config?: OutputGZip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Output): OutputGZip
    static $gtype: GObject.Type
}
export interface OutputGio_ConstructProps extends Output_ConstructProps {
}
export class OutputGio {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly is_closed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Output */
    g_object: GObject.Object
    cur_size: gsf_off_t
    cur_offset: gsf_off_t
    wrapped_by: GObject.Object
    err: GLib.Error
    printf_buf: string
    printf_buf_size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    get_modtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    set_container(container?: Outfile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array[]): boolean
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
    /* Virtual methods of Gsf.Output */
    vfunc_Close(): boolean
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfunc_Write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-closed", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputGio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutputGio_ConstructProps)
    _init (config?: OutputGio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: Gio.File): OutputGio
    static new_for_path(path: string): OutputGio
    static new_for_uri(uri: string): OutputGio
    static $gtype: GObject.Type
}
export interface OutputIOChannel_ConstructProps extends Output_ConstructProps {
}
export class OutputIOChannel {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly is_closed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Output */
    g_object: GObject.Object
    cur_size: gsf_off_t
    cur_offset: gsf_off_t
    wrapped_by: GObject.Object
    err: GLib.Error
    printf_buf: string
    printf_buf_size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    get_modtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    set_container(container?: Outfile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array[]): boolean
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
    /* Virtual methods of Gsf.Output */
    vfunc_Close(): boolean
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfunc_Write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-closed", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputIOChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutputIOChannel_ConstructProps)
    _init (config?: OutputIOChannel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(channel: GLib.IOChannel): OutputIOChannel
    static $gtype: GObject.Type
}
export interface OutputIconv_ConstructProps extends Output_ConstructProps {
    fallback?: string
    input_charset?: string
    output_charset?: string
    sink?: Output
}
export class OutputIconv {
    /* Properties of Gsf.OutputIconv */
    fallback: string
    /* Properties of Gsf.Output */
    container: Outfile
    readonly is_closed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Output */
    g_object: GObject.Object
    cur_size: gsf_off_t
    cur_offset: gsf_off_t
    wrapped_by: GObject.Object
    err: GLib.Error
    printf_buf: string
    printf_buf_size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    get_modtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    set_container(container?: Outfile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array[]): boolean
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
    /* Virtual methods of Gsf.Output */
    vfunc_Close(): boolean
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfunc_Write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::fallback", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fallback", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::container", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-closed", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputIconv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutputIconv_ConstructProps)
    _init (config?: OutputIconv_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sink: Output, dst: string, src: string): OutputIconv
    static $gtype: GObject.Type
}
export interface OutputMemory_ConstructProps extends Output_ConstructProps {
}
export class OutputMemory {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly is_closed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Output */
    g_object: GObject.Object
    cur_size: gsf_off_t
    cur_offset: gsf_off_t
    wrapped_by: GObject.Object
    err: GLib.Error
    printf_buf: string
    printf_buf_size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.OutputMemory */
    get_bytes(): Uint8Array[] | null
    steal_bytes(): Uint8Array[] | null
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    get_modtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    set_container(container?: Outfile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array[]): boolean
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
    /* Virtual methods of Gsf.Output */
    vfunc_Close(): boolean
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfunc_Write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-closed", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputMemory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutputMemory_ConstructProps)
    _init (config?: OutputMemory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OutputMemory
    static $gtype: GObject.Type
}
export interface OutputStdio_ConstructProps extends Output_ConstructProps {
}
export class OutputStdio {
    /* Properties of Gsf.Output */
    container: Outfile
    readonly is_closed: boolean
    name: string
    readonly position: number
    readonly size: number
    /* Fields of Gsf.Output */
    g_object: GObject.Object
    cur_size: gsf_off_t
    cur_offset: gsf_off_t
    wrapped_by: GObject.Object
    err: GLib.Error
    printf_buf: string
    printf_buf_size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.Output */
    close(): boolean
    error(): GLib.Error | null
    get_modtime(): GLib.DateTime | null
    puts(line: string): boolean
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    set_container(container?: Outfile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename?: string | null): boolean
    tell(): gsf_off_t
    write(data: Uint8Array[]): boolean
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
    /* Virtual methods of Gsf.Output */
    vfunc_Close(): boolean
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    vfunc_Write(data: Uint8Array[]): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-closed", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: OutputStdio, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutputStdio_ConstructProps)
    _init (config?: OutputStdio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): OutputStdio
    static $gtype: GObject.Type
}
export interface SharedMemory_ConstructProps extends GObject.Object_ConstructProps {
}
export class SharedMemory {
    /* Fields of Gsf.SharedMemory */
    g_object: GObject.Object
    buf: object
    size: gsf_off_t
    needs_free: boolean
    needs_unmap: boolean
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
    connect(sigName: "notify", callback: (($obj: SharedMemory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SharedMemory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SharedMemory_ConstructProps)
    _init (config?: SharedMemory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static mmapped_new(buf: object | null, size: gsf_off_t): SharedMemory
    static new(buf: object | null, size: gsf_off_t, needs_free: boolean): SharedMemory
    static $gtype: GObject.Type
}
export interface StructuredBlob_ConstructProps extends Infile_ConstructProps {
}
export class StructuredBlob {
    /* Properties of Gsf.Input */
    readonly container: Infile
    readonly eof: boolean
    readonly modtime: GLib.DateTime
    readonly name: string
    readonly position: number
    readonly remaining: number
    readonly size: number
    /* Fields of Gsf.Infile */
    parent: Input
    /* Fields of Gsf.Input */
    g_object: GObject.Object
    cur_offset: gsf_off_t
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.StructuredBlob */
    write(container: Outfile): boolean
    /* Methods of Gsf.Infile */
    child_by_aname(names: string[]): Input
    child_by_index(i: number): Input
    child_by_name(name: string): Input
    name_by_index(i: number): string | null
    num_children(): number
    /* Methods of Gsf.Input */
    copy(output: Output): boolean
    dump(dump_as_hex: boolean): void
    dup(): Input | null
    find_vba(): InfileMSVBA | null
    get_modtime(): GLib.DateTime
    read(num_bytes: number): Uint8Array[]
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    seek_emulate(pos: gsf_off_t): boolean
    set_container(container?: Infile | null): boolean
    set_modtime(modtime?: GLib.DateTime | null): boolean
    set_modtime_from_stat(st?: object | null): boolean
    set_name(name?: string | null): boolean
    set_name_from_filename(filename: string): boolean
    set_size(size: gsf_off_t): boolean
    sibling(name: string): Input
    tell(): gsf_off_t
    uncompress(): Input
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
    /* Virtual methods of Gsf.Infile */
    vfunc_name_by_index(i: number): string | null
    vfunc_num_children(): number
    /* Virtual methods of Gsf.Input */
    vfunc_Dup(): Input | null
    vfunc_OpenSibling(name: string): Input
    vfunc_Seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::container", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::container", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::eof", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::eof", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modtime", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modtime", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: StructuredBlob, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StructuredBlob_ConstructProps)
    _init (config?: StructuredBlob_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static read(input: Input): StructuredBlob
    static $gtype: GObject.Type
}
export interface XMLOut_ConstructProps extends GObject.Object_ConstructProps {
    pretty_print?: boolean
    sink?: Output
}
export class XMLOut {
    /* Properties of Gsf.XMLOut */
    pretty_print: boolean
    /* Fields of Gsf.XMLOut */
    base: GObject.Object
    output: Output
    priv: object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gsf.XMLOut */
    add_base64(id: string | null, data: Uint8Array[]): void
    add_bool(id: string | null, val: boolean): void
    add_color(id: string | null, r: number, g: number, b: number): void
    add_cstr(id?: string | null, val_utf8?: string | null): void
    add_cstr_unchecked(id?: string | null, val_utf8?: string | null): void
    add_enum(id: string | null, etype: GObject.Type, val: number): void
    add_float(id: string | null, val: number, precision: number): void
    add_gvalue(id: string | null, val: any): void
    add_int(id: string | null, val: number): void
    add_uint(id: string | null, val: number): void
    end_element(): string
    get_output(): Output | null
    get_pretty_print(): boolean
    set_doc_type(type: string): void
    set_pretty_print(pp: boolean): boolean
    simple_element(id: string, content: string): void
    simple_float_element(id: string, val: number, precision: number): void
    simple_int_element(id: string, val: number): void
    start_element(id: string): void
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
    connect(sigName: "notify", callback: (($obj: XMLOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XMLOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::pretty-print", callback: (($obj: XMLOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pretty-print", callback: (($obj: XMLOut, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: XMLOut_ConstructProps)
    _init (config?: XMLOut_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(output: Output): XMLOut
    static $gtype: GObject.Type
}
export abstract class BlobClass {
    static name: string
}
export class BlobPrivate {
    static name: string
}
export abstract class ClipDataClass {
    static name: string
}
export class ClipDataPrivate {
    static name: string
}
export class DocProp {
    /* Methods of Gsf.DocProp */
    dump(): void
    free(): void
    get_link(): string | null
    get_name(): string
    get_val(): any
    set_link(link?: string | null): void
    set_val(val: any): void
    swap_val(val: any): any
    static name: string
    static new(name: string): DocProp
    constructor(name: string)
    /* Static methods and pseudo-constructors */
    static new(name: string): DocProp
}
export abstract class InfileClass {
    /* Fields of Gsf.InfileClass */
    input_class: InputClass
    num_children: (infile: Infile) => number
    name_by_index: (infile: Infile, i: number) => string | null
    static name: string
}
export abstract class InputClass {
    /* Fields of Gsf.InputClass */
    g_object_class: GObject.ObjectClass
    Dup: (input: Input) => Input | null
    Read: (input: Input, num_bytes: number, optional_buffer?: Uint8Array[] | null) => Uint8Array[] | null
    Seek: (input: Input, offset: gsf_off_t, whence: GLib.SeekType) => boolean
    OpenSibling: (input: Input, name: string) => Input
    static name: string
}
export class MSOleSortingKey {
    /* Methods of Gsf.MSOleSortingKey */
    cmp(b: MSOleSortingKey): number
    free(): void
    static name: string
    static new(name: string): MSOleSortingKey
    constructor(name: string)
    /* Static methods and pseudo-constructors */
    static new(name: string): MSOleSortingKey
}
export abstract class ODFOutClass {
    /* Fields of Gsf.ODFOutClass */
    base: XMLOutClass
    static name: string
}
export class OpenPkgRel {
    /* Methods of Gsf.OpenPkgRel */
    get_target(): string
    get_type(): string
    is_extern(): boolean
    static name: string
}
export class OpenPkgRels {
    static name: string
}
export abstract class OutfileClass {
    /* Fields of Gsf.OutfileClass */
    output_class: OutputClass
    static name: string
}
export abstract class OutputClass {
    /* Fields of Gsf.OutputClass */
    g_object_class: GObject.ObjectClass
    Close: (output: Output) => boolean
    Seek: (output: Output, offset: gsf_off_t, whence: GLib.SeekType) => boolean
    Write: (output: Output, data: Uint8Array[]) => boolean
    static name: string
}
export abstract class OutputCsvClass {
    /* Fields of Gsf.OutputCsvClass */
    output_class: OutputClass
    static name: string
}
export abstract class OutputIconvClass {
    /* Fields of Gsf.OutputIconvClass */
    output_class: OutputClass
    static name: string
}
export class Timestamp {
    /* Fields of Gsf.Timestamp */
    date: GLib.Date
    seconds: number
    time_zone: GLib.String
    timet: number
    /* Methods of Gsf.Timestamp */
    as_string(): string
    copy(): Timestamp
    equal(b: Timestamp): boolean
    free(): void
    hash(): number
    load_from_string(spec: string): number
    set_time(t: number): void
    to_value(value: any): void
    static name: string
    static new(): Timestamp
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Timestamp
}
export class XMLBlob {
    static name: string
}
export class XMLIn {
    /* Fields of Gsf.XMLIn */
    user_state: object
    content: GLib.String
    doc: XMLInDoc
    node: XMLInNode
    /* Methods of Gsf.XMLIn */
    check_ns(str: string, ns_id: number): string | null
    get_input(): Input
    namecmp(str: string, ns_id: number, name: string): boolean
    push_state(doc: XMLInDoc, new_state: object | null, dtor: XMLInExtDtor, attrs: string[]): void
    set_silent_unknowns(silent: boolean): void
    static name: string
}
export class XMLInDoc {
    /* Methods of Gsf.XMLInDoc */
    add_nodes(nodes: XMLInNode[]): void
    free(): void
    parse(input: Input, user_state?: object | null): boolean
    set_unknown_handler(handler: XMLInUnknownFunc): void
    static name: string
    static new(nodes: XMLInNode[], ns: XMLInNS[]): XMLInDoc
    constructor(nodes: XMLInNode[], ns: XMLInNS[])
    /* Static methods and pseudo-constructors */
    static new(nodes: XMLInNode[], ns: XMLInNS[]): XMLInDoc
}
export class XMLInNS {
    /* Fields of Gsf.XMLInNS */
    uri: string
    ns_id: number
    static name: string
}
export class XMLInNode {
    /* Fields of Gsf.XMLInNode */
    id: string
    ns_id: number
    name: string
    parent_id: string
    start: (xin: XMLIn, attrs: libxml2.Char) => void
    end: (xin: XMLIn, unknown: XMLBlob) => void
    has_content: XMLContent
    check_children_for_ns: number
    share_children_with_parent: number
    static name: string
}
export abstract class XMLOutClass {
    /* Fields of Gsf.XMLOutClass */
    base: GObject.ObjectClass
    static name: string
}
export type gsf_off_t = number