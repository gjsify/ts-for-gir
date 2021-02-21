/**
 * GXml-0.10
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as GLib from './GLib-2.0';
import type * as GObject from './GObject-2.0';
import type * as Gio from './Gio-2.0';
import type * as Gee from './Gee-0.8';

export enum DomException {
    NONE,
    INDEX_SIZE,
    DOMSTRING_SIZE,
    HIERARCHY_REQUEST,
    WRONG_DOCUMENT,
    INVALID_CHARACTER,
    NO_DATA_ALLOWED,
    NO_MODIFICATION_ALLOWED,
    NOT_FOUND,
    NOT_SUPPORTED,
    INUSE_ATTRIBUTE,
    DOM,
    INVALID_DOC,
    INVALID_ROOT,
    NAMESPACE,
    X_OTHER,
}
export enum NodeType {
    X_UNKNOWN,
    ELEMENT,
    ATTRIBUTE,
    TEXT,
    CDATA_SECTION,
    ENTITY_REFERENCE,
    ENTITY,
    PROCESSING_INSTRUCTION,
    COMMENT,
    DOCUMENT,
    DOCUMENT_TYPE,
    DOCUMENT_FRAGMENT,
    NOTATION,
}
export enum DocumentError {
    INVALID_DOCUMENT_ERROR,
    INVALID_FILE,
}
export enum Error {
    NOT_SUPPORTED,
    PARSER,
    WRITER,
}
export enum SerializableError {
    UNSUPPORTED_TYPE_ERROR,
    STR_TO_VALUE_ERROR,
}
export enum SerializableEnumError {
    INVALID_VALUE_ERROR,
    PARSE_ERROR,
}
export enum EnumerationError {
    INVALID_VALUE,
    INVALID_TEXT,
}
export enum TDocumentReadType {
    NEXT,
    CONTINUE,
    STOP,
}
export function warning(ex: DomException, message: string): void
export function exception(ex: DomException, message: string): void
export interface Attribute_ConstructProps extends GObject.Object_ConstructProps {
    namespace?: Namespace
}
export class Attribute {
    /* Properties of GXml-0.10.GXml.Attribute */
    namespace: Namespace
    readonly prefix: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.Attribute */
    get_namespace(): Namespace
    set_namespace(value: Namespace): void
    get_prefix(): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.Attribute */
    vfunc_get_namespace(): Namespace
    vfunc_set_namespace(value: Namespace): void
    vfunc_get_prefix(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Attribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Attribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::namespace", callback: (($obj: Attribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace", callback: (($obj: Attribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: Attribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Attribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Attribute_ConstructProps)
    _init (config?: Attribute_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Comment_ConstructProps extends GObject.Object_ConstructProps {
}
export class Comment {
    /* Properties of GXml-0.10.GXml.Comment */
    readonly str: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.Comment */
    get_str(): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.Comment */
    vfunc_get_str(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::str", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Comment_ConstructProps)
    _init (config?: Comment_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CDATA_ConstructProps extends GObject.Object_ConstructProps {
}
export class CDATA {
    /* Properties of GXml-0.10.GXml.CDATA */
    readonly str: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.CDATA */
    get_str(): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.CDATA */
    vfunc_get_str(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CDATA, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::str", callback: (($obj: CDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: CDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CDATA_ConstructProps)
    _init (config?: CDATA_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Document_ConstructProps extends GObject.Object_ConstructProps {
    indent?: boolean
    ns_top?: boolean
    prefix_default_ns?: boolean
    backup?: boolean
    file?: Gio.File
}
export class Document {
    /* Properties of GXml-0.10.GXml.Document */
    indent: boolean
    ns_top: boolean
    prefix_default_ns: boolean
    backup: boolean
    readonly root: Node
    file: Gio.File
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.Document */
    create_element(name: string): Node
    create_text(text: string): Node
    create_comment(text: string): Node
    create_cdata(text: string): Node
    create_pi(target: string, data: string): Node
    save(cancellable?: Gio.Cancellable | null): boolean
    save_as(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    get_indent(): boolean
    set_indent(value: boolean): void
    get_ns_top(): boolean
    set_ns_top(value: boolean): void
    get_prefix_default_ns(): boolean
    set_prefix_default_ns(value: boolean): void
    get_backup(): boolean
    set_backup(value: boolean): void
    get_root(): Node
    get_file(): Gio.File
    set_file(value: Gio.File): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.Document */
    vfunc_create_element(name: string): Node
    vfunc_create_text(text: string): Node
    vfunc_create_comment(text: string): Node
    vfunc_create_cdata(text: string): Node
    vfunc_create_pi(target: string, data: string): Node
    vfunc_save(cancellable?: Gio.Cancellable | null): boolean
    vfunc_save_as(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_indent(): boolean
    vfunc_set_indent(value: boolean): void
    vfunc_get_ns_top(): boolean
    vfunc_set_ns_top(value: boolean): void
    vfunc_get_prefix_default_ns(): boolean
    vfunc_set_prefix_default_ns(value: boolean): void
    vfunc_get_backup(): boolean
    vfunc_set_backup(value: boolean): void
    vfunc_get_root(): Node
    vfunc_get_file(): Gio.File
    vfunc_set_file(value: Gio.File): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::indent", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ns-top", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ns-top", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix-default-ns", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix-default-ns", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backup", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backup", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Document_ConstructProps)
    _init (config?: Document_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_default(): Document
    static new_default_for_path(path: string): Document
    static new_default_for_file(f: Gio.File): Document
    static $gtype: GObject.Type
}
export interface DocumentType_ConstructProps extends GObject.Object_ConstructProps {
}
export class DocumentType {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DocumentType_ConstructProps)
    _init (config?: DocumentType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Element_ConstructProps extends GObject.Object_ConstructProps {
    content?: string
}
export class Element {
    /* Properties of GXml-0.10.GXml.Element */
    readonly tag_name: string
    content: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.Element */
    normalize(): void
    set_attr(name: string, value: string): void
    get_attr(name: string): Node
    remove_attr(name: string): void
    set_ns_attr(ns: Namespace, name: string, value: string): void
    get_ns_attr(name: string, uri: string): Node
    get_tag_name(): string
    get_content(): string
    set_content(value: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.Element */
    vfunc_normalize(): void
    vfunc_set_attr(name: string, value: string): void
    vfunc_get_attr(name: string): Node
    vfunc_remove_attr(name: string): void
    vfunc_set_ns_attr(ns: Namespace, name: string, value: string): void
    vfunc_get_ns_attr(name: string, uri: string): Node
    vfunc_get_tag_name(): string
    vfunc_get_content(): string
    vfunc_set_content(value: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::tag-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Element_ConstructProps)
    _init (config?: Element_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Namespace_ConstructProps extends GObject.Object_ConstructProps {
}
export class Namespace {
    /* Properties of GXml-0.10.GXml.Namespace */
    readonly uri: string
    readonly prefix: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.Namespace */
    get_uri(): string
    get_prefix(): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.Namespace */
    vfunc_get_uri(): string
    vfunc_get_prefix(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Namespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Namespace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uri", callback: (($obj: Namespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Namespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: Namespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Namespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Namespace_ConstructProps)
    _init (config?: Namespace_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Node_ConstructProps extends GObject.Object_ConstructProps {
    value?: string
}
export class Node {
    /* Properties of GXml-0.10.GXml.Node */
    readonly namespaces: Gee.List
    readonly childs: Gee.BidirList
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly type_node: NodeType
    readonly document: Document
    readonly parent: Node
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.Node */
    get(key: string): Node | null
    get_elements_by_property_value(property: string, value: string): ElementList
    to_string(): string
    set_namespace(uri: string, prefix?: string | null): boolean
    ns_prefix(): string
    ns_uri(): string
    get_namespaces(): Gee.List
    get_childs(): Gee.BidirList
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_type_node(): NodeType
    get_document(): Document
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.Node */
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_to_string(): string
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_namespaces(): Gee.List
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    vfunc_get_parent(): Node
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::namespaces", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::childs", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::childs", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Node_ConstructProps)
    _init (config?: Node_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static copy(doc: Document, node: Node, source: Node, deep: boolean): boolean
    static $gtype: GObject.Type
}
export interface Notation_ConstructProps extends GObject.Object_ConstructProps {
}
export class Notation {
    /* Properties of GXml-0.10.GXml.Notation */
    readonly public_id: string
    readonly external_id: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.Notation */
    get_public_id(): string | null
    get_external_id(): string | null
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.Notation */
    vfunc_get_public_id(): string | null
    vfunc_get_external_id(): string | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::public-id", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::public-id", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::external-id", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::external-id", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Notation_ConstructProps)
    _init (config?: Notation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ProcessingInstruction_ConstructProps extends GObject.Object_ConstructProps {
}
export class ProcessingInstruction {
    /* Properties of GXml-0.10.GXml.ProcessingInstruction */
    readonly target: string
    readonly data: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.ProcessingInstruction */
    get_target(): string
    get_data(): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.ProcessingInstruction */
    vfunc_get_target(): string
    vfunc_get_data(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::target", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::data", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProcessingInstruction_ConstructProps)
    _init (config?: ProcessingInstruction_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Text_ConstructProps extends GObject.Object_ConstructProps {
}
export class Text {
    /* Properties of GXml-0.10.GXml.Text */
    readonly str: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.Text */
    get_str(): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.Text */
    vfunc_get_str(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::str", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Text_ConstructProps)
    _init (config?: Text_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NamedNodeMap_ConstructProps extends GObject.Object_ConstructProps {
}
export class NamedNodeMap {
    /* Properties of GXml-0.10.GXml.NamedNodeMap */
    readonly length: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.NamedNodeMap */
    get_named_item(name: string): object | null
    set_named_item(item?: object | null): object | null
    remove_named_item(name: string): object | null
    item(index: number): object | null
    get_length(): number
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.NamedNodeMap */
    vfunc_get_named_item(name: string): object | null
    vfunc_set_named_item(item?: object | null): object | null
    vfunc_remove_named_item(name: string): object | null
    vfunc_item(index: number): object | null
    vfunc_get_length(): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::length", callback: (($obj: NamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: NamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NamedNodeMap_ConstructProps)
    _init (config?: NamedNodeMap_ConstructProps): void
    static $gtype: GObject.Type
}
export interface xNodeList_ConstructProps extends GObject.Object_ConstructProps {
    length?: number
}
export class xNodeList {
    /* Properties of GXml-0.10.GXml.xNodeList */
    length: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.xNodeList */
    item(idx: number): xNode
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    to_string(in_line: boolean): string
    first(): xNode
    last(): xNode
    get(n: number): xNode
    get_length(): number
    set_length(value: number): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.xNodeList */
    vfunc_item(idx: number): xNode
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_to_string(in_line: boolean): string
    vfunc_first(): xNode
    vfunc_last(): xNode
    vfunc_get(n: number): xNode
    vfunc_get_length(): number
    vfunc_set_length(value: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: xNodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xNodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::length", callback: (($obj: xNodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: xNodeList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: xNodeList_ConstructProps)
    _init (config?: xNodeList_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Serializable_ConstructProps extends GObject.Object_ConstructProps {
    serialized_xml_node_value?: string
}
export class Serializable {
    /* Properties of GXml-0.10.GXml.Serializable */
    readonly unknown_serializable_properties: Gee.Map
    readonly unknown_serializable_nodes: Gee.Collection
    serialized_xml_node_value: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.Serializable */
    get_enable_unknown_serializable_property(): boolean
    set_default_namespace(node: Node): boolean
    serialize_use_xml_node_value(): boolean
    node_name(): string
    property_use_nick(): boolean
    serialize(node: Node): Node | null
    serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): boolean
    deserialize_property(property_node: Node): boolean
    find_property_spec(property_name: string): GObject.ParamSpec | null
    default_find_property_spec(property_name: string): GObject.ParamSpec | null
    list_serializable_properties(): GObject.ParamSpec[]
    default_list_serializable_properties(): GObject.ParamSpec[]
    get_unknown_serializable_properties(): Gee.Map
    get_unknown_serializable_nodes(): Gee.Collection
    get_serialized_xml_node_value(): string | null
    set_serialized_xml_node_value(value?: string | null): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.Serializable */
    vfunc_get_enable_unknown_serializable_property(): boolean
    vfunc_set_default_namespace(node: Node): boolean
    vfunc_serialize_use_xml_node_value(): boolean
    vfunc_node_name(): string
    vfunc_property_use_nick(): boolean
    vfunc_serialize(node: Node): Node | null
    vfunc_serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    vfunc_deserialize(node: Node): boolean
    vfunc_deserialize_property(property_node: Node): boolean
    vfunc_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_default_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_default_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_get_unknown_serializable_properties(): Gee.Map
    vfunc_get_unknown_serializable_nodes(): Gee.Collection
    vfunc_get_serialized_xml_node_value(): string | null
    vfunc_set_serialized_xml_node_value(value?: string | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GXml-0.10.GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: Serializable, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property", callback: (($obj: Serializable, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: Serializable, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property_type", callback: (($obj: Serializable, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property", callback: (($obj: Serializable, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property", callback: (($obj: Serializable, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: Serializable, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property_type", callback: (($obj: Serializable, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::unknown-serializable-properties", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-properties", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unknown-serializable-nodes", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-nodes", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialized-xml-node-value", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialized-xml-node-value", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Serializable_ConstructProps)
    _init (config?: Serializable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static string_to_gvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    static gvalue_to_string(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableProperty_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableProperty {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.SerializableProperty */
    get_serializable_property_value(): string
    set_serializable_property_value(val?: string | null): void
    deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    serialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    default_serializable_property_serialize_property(element: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    default_serializable_property_deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.SerializableProperty */
    vfunc_get_serializable_property_value(): string
    vfunc_set_serializable_property_value(val?: string | null): void
    vfunc_deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    vfunc_serialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableProperty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableProperty_ConstructProps)
    _init (config?: SerializableProperty_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SerializableMapKey_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableMapKey {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.SerializableMapKey */
    get_map_key(): object | null
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.SerializableMapKey */
    vfunc_get_map_key(): object | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableMapKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableMapKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableMapKey_ConstructProps)
    _init (config?: SerializableMapKey_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SerializableMapDualKey_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableMapDualKey {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.SerializableMapDualKey */
    get_map_primary_key(): object | null
    get_map_secondary_key(): object | null
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.SerializableMapDualKey */
    vfunc_get_map_primary_key(): object | null
    vfunc_get_map_secondary_key(): object | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableMapDualKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableMapDualKey, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableMapDualKey_ConstructProps)
    _init (config?: SerializableMapDualKey_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SerializableCollection_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableCollection {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.SerializableCollection */
    deserialize_proceed(): boolean
    deserialized(): boolean
    deserialize_node(node: Node): boolean
    deserialize_children(): boolean
    is_collection(): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.SerializableCollection */
    vfunc_deserialize_proceed(): boolean
    vfunc_deserialized(): boolean
    vfunc_deserialize_node(node: Node): boolean
    vfunc_deserialize_children(): boolean
    vfunc_is_collection(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableCollection_ConstructProps)
    _init (config?: SerializableCollection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ElementList_ConstructProps extends Gee.ArrayList_ConstructProps {
}
export class ElementList {
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly read_only_view: Gee.BidirList
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    /* Fields of GXml-0.10.GXml.ElementList */
    parent_instance: Gee.ArrayList
    priv: ElementListPrivate
    /* Fields of Gee-0.8.Gee.ArrayList */
    _items: object[]
    _items_length1: number
    _size: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.ElementList */
    get(index: number): Element
    to_array(): Element[]
    /* Methods of Gee-0.8.Gee.ArrayList */
    add_all(collection: Gee.Collection): boolean
    get_equal_func(): [ /* returnType */ Gee.EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidir_list_iterator(): Gee.BidirListIterator
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_read_only_view(): Gee.BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    list_iterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    get_read_only_view(): Gee.List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Gee.Collection
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.ElementList */
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.ArrayList */
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractBidirList */
    vfunc_bidir_list_iterator(): Gee.BidirListIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractList */
    vfunc_list_iterator(): Gee.ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): Gee.List | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Gee.Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Gee.Iterator
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Gee.Collection): boolean
    vfunc_contains_all(collection: Gee.Collection): boolean
    vfunc_remove_all(collection: Gee.Collection): boolean
    vfunc_retain_all(collection: Gee.Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Gee.Iterator): boolean
    vfunc_contains_all_iterator(iter: Gee.Iterator): boolean
    vfunc_remove_all_iterator(iter: Gee.Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ElementList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: ElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ElementList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: ElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ElementList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: ElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ElementList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ElementList_ConstructProps)
    _init (config?: ElementList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ElementList
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): ElementList
    static $gtype: GObject.Type
}
export interface NodeList_ConstructProps extends Gee.ArrayList_ConstructProps {
}
export class NodeList {
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly read_only_view: Gee.BidirList
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    /* Fields of GXml-0.10.GXml.NodeList */
    parent_instance: Gee.ArrayList
    priv: NodeListPrivate
    /* Fields of Gee-0.8.Gee.ArrayList */
    _items: object[]
    _items_length1: number
    _size: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.NodeList */
    get(index: number): Node
    to_array(): Node[]
    /* Methods of Gee-0.8.Gee.ArrayList */
    add_all(collection: Gee.Collection): boolean
    get_equal_func(): [ /* returnType */ Gee.EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidir_list_iterator(): Gee.BidirListIterator
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_read_only_view(): Gee.BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    list_iterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    get_read_only_view(): Gee.List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Gee.Collection
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.NodeList */
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.ArrayList */
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractBidirList */
    vfunc_bidir_list_iterator(): Gee.BidirListIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractList */
    vfunc_list_iterator(): Gee.ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): Gee.List | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Gee.Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Gee.Iterator
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Gee.Collection): boolean
    vfunc_contains_all(collection: Gee.Collection): boolean
    vfunc_remove_all(collection: Gee.Collection): boolean
    vfunc_retain_all(collection: Gee.Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Gee.Iterator): boolean
    vfunc_contains_all_iterator(iter: Gee.Iterator): boolean
    vfunc_remove_all_iterator(iter: Gee.Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NodeList_ConstructProps)
    _init (config?: NodeList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NodeList
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): NodeList
    static $gtype: GObject.Type
}
export interface xAttr_ConstructProps extends BackedNode_ConstructProps {
    specified?: boolean
    namespace?: Namespace
}
export class xAttr {
    /* Properties of GXml-0.10.GXml.xAttr */
    specified: boolean
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.Attribute */
    namespace: Namespace
    readonly prefix: string
    /* Fields of GXml-0.10.GXml.xAttr */
    parent_instance: BackedNode
    priv: xAttrPrivate
    /* Fields of GXml-0.10.GXml.xNode */
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.xAttr */
    get_specified(): boolean
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Attribute */
    get_namespace(): Namespace
    set_namespace(value: Namespace): void
    get_prefix(): string
    /* Virtual methods of GXml-0.10.GXml.xAttr */
    vfunc_get_namespace(): Namespace
    vfunc_set_namespace(value: Namespace): void
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_get_prefix(): string
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::specified", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::specified", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: xAttr_ConstructProps)
    _init (config?: xAttr_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BackedNode_ConstructProps extends xNode_ConstructProps {
}
export class BackedNode {
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Fields of GXml-0.10.GXml.BackedNode */
    parent_instance: xNode
    priv: BackedNodePrivate
    /* Fields of GXml-0.10.GXml.xNode */
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::namespace-definitions", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BackedNode_ConstructProps)
    _init (config?: BackedNode_ConstructProps): void
    static $gtype: GObject.Type
}
export interface xCDATASection_ConstructProps extends xText_ConstructProps {
}
export class xCDATASection {
    /* Properties of GXml-0.10.GXml.xCharacterData */
    data: string
    length: number
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.CDATA */
    readonly str: string
    /* Fields of GXml-0.10.GXml.xCDATASection */
    parent_instance: xText
    priv: xCDATASectionPrivate
    /* Fields of GXml-0.10.GXml.xNode */
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.xText */
    split_text(offset: number): xText
    /* Methods of GXml-0.10.GXml.xCharacterData */
    substring_data(offset: number, count: number): string
    append_data(new_segment: string): void
    insert_data(offset: number, new_segment: string): void
    delete_data(offset: number, count: number): void
    replace_data(offset: number, count: number, new_segment: string): void
    get_data(): string
    set_data(value: string): void
    get_length(): number
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.CDATA */
    get_str(): string
    /* Virtual methods of GXml-0.10.GXml.xCDATASection */
    vfunc_get_str(): string
    /* Virtual methods of GXml-0.10.GXml.xText */
    vfunc_get_str(): string
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::str", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: xCDATASection_ConstructProps)
    _init (config?: xCDATASection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface xCharacterData_ConstructProps extends BackedNode_ConstructProps {
    data?: string
    length?: number
}
export class xCharacterData {
    /* Properties of GXml-0.10.GXml.xCharacterData */
    data: string
    length: number
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Fields of GXml-0.10.GXml.xCharacterData */
    parent_instance: BackedNode
    priv: xCharacterDataPrivate
    /* Fields of GXml-0.10.GXml.xNode */
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.xCharacterData */
    substring_data(offset: number, count: number): string
    append_data(new_segment: string): void
    insert_data(offset: number, new_segment: string): void
    delete_data(offset: number, count: number): void
    replace_data(offset: number, count: number, new_segment: string): void
    get_data(): string
    set_data(value: string): void
    get_length(): number
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: xCharacterData_ConstructProps)
    _init (config?: xCharacterData_ConstructProps): void
    static $gtype: GObject.Type
}
export interface xComment_ConstructProps extends xCharacterData_ConstructProps {
}
export class xComment {
    /* Properties of GXml-0.10.GXml.xCharacterData */
    data: string
    length: number
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.Comment */
    readonly str: string
    /* Fields of GXml-0.10.GXml.xComment */
    parent_instance: xCharacterData
    priv: xCommentPrivate
    /* Fields of GXml-0.10.GXml.xNode */
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.xCharacterData */
    substring_data(offset: number, count: number): string
    append_data(new_segment: string): void
    insert_data(offset: number, new_segment: string): void
    delete_data(offset: number, count: number): void
    replace_data(offset: number, count: number, new_segment: string): void
    get_data(): string
    set_data(value: string): void
    get_length(): number
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Comment */
    get_str(): string
    /* Virtual methods of GXml-0.10.GXml.xComment */
    vfunc_get_str(): string
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::str", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: xComment_ConstructProps)
    _init (config?: xComment_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DocumentFragment_ConstructProps extends BackedNode_ConstructProps {
}
export class DocumentFragment {
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Fields of GXml-0.10.GXml.DocumentFragment */
    parent_instance: BackedNode
    priv: DocumentFragmentPrivate
    /* Fields of GXml-0.10.GXml.xNode */
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::namespace-definitions", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DocumentFragment_ConstructProps)
    _init (config?: DocumentFragment_ConstructProps): void
    static $gtype: GObject.Type
}
export interface xDocumentType_ConstructProps extends xNode_ConstructProps {
    entities?: Gee.Map
    notations?: Gee.Map
}
export class xDocumentType {
    /* Properties of GXml-0.10.GXml.xDocumentType */
    entities: Gee.Map
    notations: Gee.Map
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Fields of GXml-0.10.GXml.xDocumentType */
    parent_instance: xNode
    priv: xDocumentTypePrivate
    /* Fields of GXml-0.10.GXml.xNode */
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.xDocumentType */
    get_entities(): Gee.Map | null
    get_notations(): Gee.Map | null
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::entities", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entities", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::notations", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notations", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: xDocumentType_ConstructProps)
    _init (config?: xDocumentType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface xDocument_ConstructProps extends xNode_ConstructProps {
    doctype?: xDocumentType
    implementation?: Implementation
    document_element?: xElement
    indent?: boolean
    ns_top?: boolean
    prefix_default_ns?: boolean
    backup?: boolean
    file?: Gio.File
}
export class xDocument {
    /* Properties of GXml-0.10.GXml.xDocument */
    doctype: xDocumentType
    implementation: Implementation
    document_element: xElement
    readonly root: Node
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.Document */
    indent: boolean
    ns_top: boolean
    prefix_default_ns: boolean
    backup: boolean
    file: Gio.File
    /* Fields of GXml-0.10.GXml.xDocument */
    parent_instance: xNode
    priv: xDocumentPrivate
    /* Fields of GXml-0.10.GXml.xNode */
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.xDocument */
    save_to_path(file_path: string): void
    save_to_stream(outstream: Gio.OutputStream, can?: Gio.Cancellable | null): void
    create_document_fragment(): DocumentFragment
    create_text_node(text_data: string): xText
    create_managed_comment(comment_data: string): xComment
    create_cdata_section(cdata_data: string): xCDATASection
    create_processing_instruction(target: string, data: string): xProcessingInstruction
    create_attribute(name: string): xAttr
    create_entity_reference(name: string): EntityReference
    get_elements_by_tag_name(tag_name: string): xNodeList
    copy_node(foreign_node: xNode, deep: boolean): xNode
    get_doctype(): xDocumentType | null
    get_implementation(): Implementation
    get_document_element(): xElement
    get_root(): Node
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Document */
    create_element(name: string): Node
    create_text(text: string): Node
    create_comment(text: string): Node
    create_cdata(text: string): Node
    create_pi(target: string, data: string): Node
    save(cancellable?: Gio.Cancellable | null): boolean
    save_as(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    get_indent(): boolean
    set_indent(value: boolean): void
    get_ns_top(): boolean
    set_ns_top(value: boolean): void
    get_prefix_default_ns(): boolean
    set_prefix_default_ns(value: boolean): void
    get_backup(): boolean
    set_backup(value: boolean): void
    get_file(): Gio.File
    set_file(value: Gio.File): void
    /* Virtual methods of GXml-0.10.GXml.xDocument */
    vfunc_get_root(): Node
    vfunc_create_element(name: string): Node
    vfunc_create_text(text: string): Node
    vfunc_create_comment(text: string): Node
    vfunc_create_cdata(text: string): Node
    vfunc_create_pi(target: string, data: string): Node
    vfunc_save(cancellable?: Gio.Cancellable | null): boolean
    vfunc_save_as(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_indent(): boolean
    vfunc_set_indent(value: boolean): void
    vfunc_get_ns_top(): boolean
    vfunc_set_ns_top(value: boolean): void
    vfunc_get_prefix_default_ns(): boolean
    vfunc_set_prefix_default_ns(value: boolean): void
    vfunc_get_backup(): boolean
    vfunc_set_backup(value: boolean): void
    vfunc_get_file(): Gio.File
    vfunc_set_file(value: Gio.File): void
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::doctype", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::implementation", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document-element", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::indent", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ns-top", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ns-top", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix-default-ns", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix-default-ns", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backup", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backup", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: xDocument_ConstructProps)
    _init (config?: xDocument_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static from_libxml2(doc: object | null, require_root: boolean): xDocument
    static from_path(file_path: string): xDocument
    static from_gfile(fin: Gio.File, can?: Gio.Cancellable | null): xDocument
    static from_stream(instream: Gio.InputStream, can?: Gio.Cancellable | null): xDocument
    static from_string(xml: string): xDocument
    static from_string_with_options(xml: string, url: string | null, encoding: string | null, options: number): xDocument
    static new(): xDocument
    static new_default(): Document
    static new_default_for_path(path: string): Document
    static new_default_for_file(f: Gio.File): Document
    static $gtype: GObject.Type
}
export interface xElement_ConstructProps extends BackedNode_ConstructProps {
    content?: string
}
export class xElement {
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.Element */
    readonly tag_name: string
    content: string
    /* Fields of GXml-0.10.GXml.xElement */
    parent_instance: BackedNode
    priv: xElementPrivate
    /* Fields of GXml-0.10.GXml.xNode */
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.xElement */
    get_attribute(name: string): string
    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    get_attribute_node(name: string): xAttr | null
    set_attribute_node(new_attr: xAttr): xAttr
    remove_attribute_node(old_attr: xAttr): xAttr
    get_elements_by_tag_name(tag_name: string): xNodeList
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Element */
    normalize(): void
    set_attr(name: string, value: string): void
    get_attr(name: string): Node
    remove_attr(name: string): void
    set_ns_attr(ns: Namespace, name: string, value: string): void
    get_ns_attr(name: string, uri: string): Node
    get_tag_name(): string
    get_content(): string
    set_content(value: string): void
    /* Virtual methods of GXml-0.10.GXml.xElement */
    vfunc_normalize(): void
    vfunc_set_attr(name: string, value: string): void
    vfunc_get_attr(name: string): Node
    vfunc_remove_attr(name: string): void
    vfunc_set_ns_attr(ns: Namespace, name: string, value: string): void
    vfunc_get_ns_attr(name: string, uri: string): Node
    vfunc_get_tag_name(): string
    vfunc_get_content(): string
    vfunc_set_content(value: string): void
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tag-name", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: xElement_ConstructProps)
    _init (config?: xElement_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Entity_ConstructProps extends xNode_ConstructProps {
    public_id?: string
    system_id?: string
    notation_name?: string
}
export class Entity {
    /* Properties of GXml-0.10.GXml.Entity */
    public_id: string
    system_id: string
    notation_name: string
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Fields of GXml-0.10.GXml.Entity */
    parent_instance: xNode
    priv: EntityPrivate
    /* Fields of GXml-0.10.GXml.xNode */
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.Entity */
    get_public_id(): string
    get_system_id(): string
    get_notation_name(): string
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::public-id", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::public-id", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::system-id", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-id", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::notation-name", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notation-name", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Entity_ConstructProps)
    _init (config?: Entity_ConstructProps): void
    static $gtype: GObject.Type
}
export interface EntityReference_ConstructProps extends xNode_ConstructProps {
}
export class EntityReference {
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Fields of GXml-0.10.GXml.EntityReference */
    parent_instance: xNode
    priv: EntityReferencePrivate
    /* Fields of GXml-0.10.GXml.xNode */
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::namespace-definitions", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EntityReference_ConstructProps)
    _init (config?: EntityReference_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Implementation_ConstructProps extends GObject.Object_ConstructProps {
}
export class Implementation {
    /* Fields of GXml-0.10.GXml.Implementation */
    parent_instance: GObject.Object
    priv: ImplementationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.Implementation */
    create_document(namespace_uri?: string | null, qualified_name?: string | null, doctype?: xDocumentType | null): xDocument
    has_feature(feature: string, version?: string | null): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Implementation_ConstructProps)
    _init (config?: Implementation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AbstractNamedAttrMap_ConstructProps extends GObject.Object_ConstructProps {
}
export class AbstractNamedAttrMap {
    /* Fields of GXml-0.10.GXml.AbstractNamedAttrMap */
    parent_instance: GObject.Object
    priv: AbstractNamedAttrMapPrivate
    elem: xElement
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Gee-0.8.Gee.Traversable */
    foreach(f: Gee.ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    filter(pred: Gee.Predicate): Gee.Iterator
    chop(offset: number, length: number): Gee.Iterator
    flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    tee(forks: number): Gee.Iterator[]
    first_match(pred: Gee.Predicate): object | null
    any_match(pred: Gee.Predicate): boolean
    all_match(pred: Gee.Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    get_element_type(): GObject.Type
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Gee.Iterator
    /* Virtual methods of GXml-0.10.GXml.AbstractNamedAttrMap */
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_iterator(): Gee.Iterator
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractNamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractNamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractNamedAttrMap_ConstructProps)
    _init (config?: AbstractNamedAttrMap_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AbstractNamedAttrMapEntry_ConstructProps extends Gee.MapEntry_ConstructProps {
}
export class AbstractNamedAttrMapEntry {
    /* Properties of Gee-0.8.Gee.MapEntry */
    readonly key: object
    value: object
    readonly read_only: boolean
    /* Fields of GXml-0.10.GXml.AbstractNamedAttrMapEntry */
    parent_instance: Gee.MapEntry
    priv: AbstractNamedAttrMapEntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.MapEntry */
    get_key(): object | null
    get_value(): object | null
    set_value(value?: object | null): void
    get_read_only(): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gee-0.8.Gee.MapEntry */
    vfunc_get_key(): object | null
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_get_read_only(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractNamedAttrMapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractNamedAttrMapEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::key", callback: (($obj: AbstractNamedAttrMapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: AbstractNamedAttrMapEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: AbstractNamedAttrMapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: AbstractNamedAttrMapEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: AbstractNamedAttrMapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractNamedAttrMapEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractNamedAttrMapEntry_ConstructProps)
    _init (config?: AbstractNamedAttrMapEntry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(k: string, v: Attribute): AbstractNamedAttrMapEntry
    static $gtype: GObject.Type
}
export interface AbstractNamedAttrMapIterator_ConstructProps extends GObject.Object_ConstructProps {
}
export class AbstractNamedAttrMapIterator {
    /* Properties of Gee-0.8.Gee.Iterator */
    readonly valid: boolean
    readonly read_only: boolean
    /* Fields of GXml-0.10.GXml.AbstractNamedAttrMapIterator */
    parent_instance: GObject.Object
    priv: AbstractNamedAttrMapIteratorPrivate
    nm: AbstractNamedAttrMap
    cur: object | null
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Gee-0.8.Gee.Traversable */
    foreach(f: Gee.ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    filter(pred: Gee.Predicate): Gee.Iterator
    chop(offset: number, length: number): Gee.Iterator
    flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    tee(forks: number): Gee.Iterator[]
    first_match(pred: Gee.Predicate): object | null
    any_match(pred: Gee.Predicate): boolean
    all_match(pred: Gee.Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    get_element_type(): GObject.Type
    /* Methods of Gee-0.8.Gee.Iterator */
    next(): boolean
    has_next(): boolean
    get(): object | null
    remove(): void
    get_valid(): boolean
    get_read_only(): boolean
    /* Virtual methods of GXml-0.10.GXml.AbstractNamedAttrMapIterator */
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    vfunc_get_valid(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractNamedAttrMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractNamedAttrMapIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::valid", callback: (($obj: AbstractNamedAttrMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: AbstractNamedAttrMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: AbstractNamedAttrMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractNamedAttrMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AbstractNamedAttrMapIterator_ConstructProps)
    _init (config?: AbstractNamedAttrMapIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(nm: AbstractNamedAttrMap): AbstractNamedAttrMapIterator
    static unfold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.UnfoldFunc, current?: Gee.Lazy | null): Gee.Iterator
    static concat(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, iters: Gee.Iterator): Gee.Iterator
    static $gtype: GObject.Type
}
export interface NamedAttrMap_ConstructProps extends AbstractNamedAttrMap_ConstructProps {
}
export class NamedAttrMap {
    /* Properties of Gee-0.8.Gee.Map */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    readonly read_only_view: Gee.Map
    /* Properties of GXml-0.10.GXml.NamedNodeMap */
    readonly length: number
    /* Fields of GXml-0.10.GXml.NamedAttrMap */
    parent_instance: AbstractNamedAttrMap
    priv: NamedAttrMapPrivate
    /* Fields of GXml-0.10.GXml.AbstractNamedAttrMap */
    elem: xElement
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.NamedAttrMap */
    contains(key: string): boolean
    contains_all(map: Gee.Map): boolean
    remove(key: string): [ /* returnType */ boolean, /* val */ Attribute ]
    remove_all(map: Gee.Map): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Gee-0.8.Gee.Map */
    has_key(key?: object | null): boolean
    contains(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    clear(): void
    map_iterator(): Gee.MapIterator
    set_all(map: Gee.Map): void
    unset_all(map: Gee.Map): boolean
    has_all(map: Gee.Map): boolean
    get_size(): number
    get_is_empty(): boolean
    get_read_only(): boolean
    get_keys(): Gee.Set
    get_values(): Gee.Collection
    get_entries(): Gee.Set
    get_read_only_view(): Gee.Map
    get_key_type(): GObject.Type
    get_value_type(): GObject.Type
    /* Methods of GXml-0.10.GXml.NamedNodeMap */
    get_named_item(name: string): object | null
    set_named_item(item?: object | null): object | null
    remove_named_item(name: string): object | null
    item(index: number): object | null
    get_length(): number
    /* Virtual methods of GXml-0.10.GXml.NamedAttrMap */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_clear(): void
    vfunc_map_iterator(): Gee.MapIterator
    vfunc_set_all(map: Gee.Map): void
    vfunc_unset_all(map: Gee.Map): boolean
    vfunc_has_all(map: Gee.Map): boolean
    vfunc_get_size(): number
    vfunc_get_is_empty(): boolean
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Gee.Set
    vfunc_get_values(): Gee.Collection
    vfunc_get_entries(): Gee.Set
    vfunc_get_read_only_view(): Gee.Map
    vfunc_get_named_item(name: string): object | null
    vfunc_set_named_item(item?: object | null): object | null
    vfunc_remove_named_item(name: string): object | null
    vfunc_item(index: number): object | null
    vfunc_get_length(): number
    /* Virtual methods of GXml-0.10.GXml.AbstractNamedAttrMap */
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_iterator(): Gee.Iterator
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NamedAttrMap_ConstructProps)
    _init (config?: NamedAttrMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify): Gee.Map
    static $gtype: GObject.Type
}
export interface NamespaceAttr_ConstructProps extends xNode_ConstructProps {
    defined_prefix?: string
    defined_namespace_uri?: string
}
export class NamespaceAttr {
    /* Properties of GXml-0.10.GXml.NamespaceAttr */
    defined_prefix: string
    defined_namespace_uri: string
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.Namespace */
    readonly uri: string
    readonly prefix: string
    /* Fields of GXml-0.10.GXml.NamespaceAttr */
    parent_instance: xNode
    priv: NamespaceAttrPrivate
    /* Fields of GXml-0.10.GXml.xNode */
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.NamespaceAttr */
    get_defined_prefix(): string
    get_defined_namespace_uri(): string
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Namespace */
    get_uri(): string
    get_prefix(): string
    /* Virtual methods of GXml-0.10.GXml.NamespaceAttr */
    vfunc_get_uri(): string
    vfunc_get_prefix(): string
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::defined-prefix", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::defined-prefix", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::defined-namespace-uri", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::defined-namespace-uri", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NamespaceAttr_ConstructProps)
    _init (config?: NamespaceAttr_ConstructProps): void
    static $gtype: GObject.Type
}
export interface xNode_ConstructProps extends GObject.Object_ConstructProps {
    namespace_definitions?: Gee.List
    namespace_uri?: string
    namespace_prefix?: string
    local_name?: string
    node_name?: string
    node_value?: string
    node_type?: NodeType
    parent_node?: xNode
    child_nodes?: xNodeList
    first_child?: xNode
    last_child?: xNode
    previous_sibling?: xNode
    next_sibling?: xNode
    attributes?: NamedAttrMap
    owner_document?: xDocument
    value?: string
}
export class xNode {
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.Node */
    readonly childs: Gee.BidirList
    readonly type_node: NodeType
    readonly document: Document
    /* Fields of GXml-0.10.GXml.xNode */
    parent_instance: GObject.Object
    priv: xNodePrivate
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Node */
    get(key: string): Node | null
    get_elements_by_property_value(property: string, value: string): ElementList
    set_namespace(uri: string, prefix?: string | null): boolean
    ns_prefix(): string
    ns_uri(): string
    get_childs(): Gee.BidirList
    get_type_node(): NodeType
    get_document(): Document
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::childs", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::childs", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: xNode_ConstructProps)
    _init (config?: xNode_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static copy(doc: Document, node: Node, source: Node, deep: boolean): boolean
    static $gtype: GObject.Type
}
export interface xNotation_ConstructProps extends xNode_ConstructProps {
}
export class xNotation {
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.Notation */
    readonly public_id: string
    readonly external_id: string
    /* Fields of GXml-0.10.GXml.xNotation */
    parent_instance: xNode
    priv: xNotationPrivate
    /* Fields of GXml-0.10.GXml.xNode */
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Notation */
    get_public_id(): string | null
    get_external_id(): string | null
    /* Virtual methods of GXml-0.10.GXml.xNotation */
    vfunc_get_public_id(): string | null
    vfunc_get_external_id(): string | null
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::public-id", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::public-id", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::external-id", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::external-id", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: xNotation_ConstructProps)
    _init (config?: xNotation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface xProcessingInstruction_ConstructProps extends xNode_ConstructProps {
}
export class xProcessingInstruction {
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.ProcessingInstruction */
    readonly target: string
    readonly data: string
    /* Fields of GXml-0.10.GXml.xProcessingInstruction */
    parent_instance: xNode
    priv: xProcessingInstructionPrivate
    /* Fields of GXml-0.10.GXml.xNode */
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.ProcessingInstruction */
    get_target(): string
    get_data(): string
    /* Virtual methods of GXml-0.10.GXml.xProcessingInstruction */
    vfunc_get_target(): string
    vfunc_get_data(): string
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::target", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::data", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: xProcessingInstruction_ConstructProps)
    _init (config?: xProcessingInstruction_ConstructProps): void
    static $gtype: GObject.Type
}
export interface xText_ConstructProps extends xCharacterData_ConstructProps {
}
export class xText {
    /* Properties of GXml-0.10.GXml.xCharacterData */
    data: string
    length: number
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.Text */
    readonly str: string
    /* Fields of GXml-0.10.GXml.xText */
    parent_instance: xCharacterData
    priv: xTextPrivate
    /* Fields of GXml-0.10.GXml.xNode */
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.xText */
    split_text(offset: number): xText
    /* Methods of GXml-0.10.GXml.xCharacterData */
    substring_data(offset: number, count: number): string
    append_data(new_segment: string): void
    insert_data(offset: number, new_segment: string): void
    delete_data(offset: number, count: number): void
    replace_data(offset: number, count: number, new_segment: string): void
    get_data(): string
    set_data(value: string): void
    get_length(): number
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Text */
    get_str(): string
    /* Virtual methods of GXml-0.10.GXml.xText */
    vfunc_get_str(): string
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::str", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: xText_ConstructProps)
    _init (config?: xText_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SerializableBool_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableBool {
    /* Fields of GXml-0.10.GXml.SerializableBool */
    parent_instance: GObject.Object
    priv: SerializableBoolPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.SerializableBool */
    get_value(): boolean
    set_value(val: boolean): void
    to_string(): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.SerializableProperty */
    get_serializable_property_value(): string
    set_serializable_property_value(val?: string | null): void
    deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    serialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    default_serializable_property_serialize_property(element: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    default_serializable_property_deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    /* Virtual methods of GXml-0.10.GXml.SerializableBool */
    vfunc_get_serializable_property_value(): string
    vfunc_set_serializable_property_value(val?: string | null): void
    vfunc_deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    vfunc_serialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableBool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableBool_ConstructProps)
    _init (config?: SerializableBool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableBool
    static $gtype: GObject.Type
}
export interface SerializableDouble_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableDouble {
    /* Fields of GXml-0.10.GXml.SerializableDouble */
    parent_instance: GObject.Object
    priv: SerializableDoublePrivate
    _val: string
    _fraction: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.SerializableDouble */
    get_fraction(): number
    set_fraction(fraction: number): void
    get_value(): number
    set_value(val: number): void
    to_string(): string
    format(f: string): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.SerializableProperty */
    get_serializable_property_value(): string
    set_serializable_property_value(val?: string | null): void
    deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    serialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    default_serializable_property_serialize_property(element: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    default_serializable_property_deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    /* Virtual methods of GXml-0.10.GXml.SerializableDouble */
    vfunc_get_serializable_property_value(): string
    vfunc_set_serializable_property_value(val?: string | null): void
    vfunc_deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    vfunc_serialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableDouble, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableDouble, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableDouble_ConstructProps)
    _init (config?: SerializableDouble_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableDouble
    static $gtype: GObject.Type
}
export interface SerializableFloat_ConstructProps extends SerializableDouble_ConstructProps {
}
export class SerializableFloat {
    /* Fields of GXml-0.10.GXml.SerializableFloat */
    parent_instance: SerializableDouble
    priv: SerializableFloatPrivate
    /* Fields of GXml-0.10.GXml.SerializableDouble */
    _val: string
    _fraction: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.SerializableFloat */
    get_value(): number
    set_value(val: number): void
    /* Methods of GXml-0.10.GXml.SerializableDouble */
    get_fraction(): number
    set_fraction(fraction: number): void
    to_string(): string
    format(f: string): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.SerializableDouble */
    vfunc_get_serializable_property_value(): string
    vfunc_set_serializable_property_value(val?: string | null): void
    vfunc_deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    vfunc_serialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableFloat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableFloat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableFloat_ConstructProps)
    _init (config?: SerializableFloat_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableFloat
    static $gtype: GObject.Type
}
export interface SerializableEnum_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableEnum {
    /* Fields of GXml-0.10.GXml.SerializableEnum */
    parent_instance: GObject.Object
    priv: SerializableEnumPrivate
    _val: string
    _enumtype: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.SerializableEnum */
    set_enum_type(type: GObject.Type): void
    get_enum_type(): GObject.Type
    parse(str: string): void
    parse_integer(v: number): void
    to_integer(): number
    to_string(): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.SerializableProperty */
    get_serializable_property_value(): string
    set_serializable_property_value(val?: string | null): void
    deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    serialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    default_serializable_property_serialize_property(element: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    default_serializable_property_deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    /* Virtual methods of GXml-0.10.GXml.SerializableEnum */
    vfunc_get_serializable_property_value(): string
    vfunc_set_serializable_property_value(val?: string | null): void
    vfunc_deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    vfunc_serialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableEnum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableEnum_ConstructProps)
    _init (config?: SerializableEnum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static with_enum(type: GObject.Type): SerializableEnum
    static new(): SerializableEnum
    static $gtype: GObject.Type
}
export interface SerializableInt_ConstructProps extends SerializableDouble_ConstructProps {
}
export class SerializableInt {
    /* Fields of GXml-0.10.GXml.SerializableInt */
    parent_instance: SerializableDouble
    priv: SerializableIntPrivate
    /* Fields of GXml-0.10.GXml.SerializableDouble */
    _val: string
    _fraction: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.SerializableInt */
    get_value(): number
    set_value(val: number): void
    /* Methods of GXml-0.10.GXml.SerializableDouble */
    get_fraction(): number
    set_fraction(fraction: number): void
    to_string(): string
    format(f: string): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.SerializableDouble */
    vfunc_get_serializable_property_value(): string
    vfunc_set_serializable_property_value(val?: string | null): void
    vfunc_deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    vfunc_serialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableInt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableInt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableInt_ConstructProps)
    _init (config?: SerializableInt_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableInt
    static $gtype: GObject.Type
}
export interface SerializableValueList_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableValueList {
    /* Fields of GXml-0.10.GXml.SerializableValueList */
    parent_instance: GObject.Object
    priv: SerializableValueListPrivate
    _vals: string[]
    extra: Gee.ArrayList
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.SerializableValueList */
    get_values(): Gee.List
    add_values(vals: string[]): void
    get_value_at(index: number): string | null
    select_value_at(index: number): void
    get_values_array(): string[]
    is_value(): boolean
    to_string(): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.SerializableProperty */
    get_serializable_property_value(): string
    set_serializable_property_value(val?: string | null): void
    deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    serialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    default_serializable_property_serialize_property(element: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    default_serializable_property_deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    /* Virtual methods of GXml-0.10.GXml.SerializableValueList */
    vfunc_get_values(): Gee.List
    vfunc_add_values(vals: string[]): void
    vfunc_get_value_at(index: number): string | null
    vfunc_select_value_at(index: number): void
    vfunc_get_values_array(): string[]
    vfunc_is_value(): boolean
    vfunc_get_serializable_property_value(): string
    vfunc_set_serializable_property_value(val?: string | null): void
    vfunc_deserialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    vfunc_serialize_property(property_node: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableValueList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableValueList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableValueList_ConstructProps)
    _init (config?: SerializableValueList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableValueList
    static $gtype: GObject.Type
}
export interface SerializableObjectModel_ConstructProps extends GObject.Object_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignored_serializable_properties?: GLib.HashTable
    serialized_xml_node_value?: string
}
export class SerializableObjectModel {
    /* Properties of GXml-0.10.GXml.SerializableObjectModel */
    properties: GObject.ParamSpec[]
    ignored_serializable_properties: GLib.HashTable
    /* Properties of GXml-0.10.GXml.Serializable */
    readonly unknown_serializable_properties: Gee.Map
    readonly unknown_serializable_nodes: Gee.Collection
    serialized_xml_node_value: string
    /* Fields of GXml-0.10.GXml.SerializableObjectModel */
    parent_instance: GObject.Object
    priv: SerializableObjectModelPrivate
    _node: Node
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.SerializableObjectModel */
    get_enable_unknown_serializable_property(): boolean
    serialize_use_xml_node_value(): boolean
    property_use_nick(): boolean
    set_default_namespace(node: Node): boolean
    node_name(): string
    default_node_name(): string
    find_property_spec(property_name: string): GObject.ParamSpec | null
    list_serializable_properties(): GObject.ParamSpec[]
    serialize(node: Node): Node | null
    default_serialize(node: Node): Node | null
    serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    default_serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): boolean
    default_deserialize(node: Node): boolean
    deserialize_property(property_node: Node): boolean
    default_deserialize_property(property_node: Node): boolean
    to_string(): string
    get_properties(): GObject.ParamSpec[]
    set_properties(value: GObject.ParamSpec[]): void
    get_ignored_serializable_properties(): GLib.HashTable
    set_ignored_serializable_properties(value: GLib.HashTable): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Serializable */
    default_find_property_spec(property_name: string): GObject.ParamSpec | null
    default_list_serializable_properties(): GObject.ParamSpec[]
    get_unknown_serializable_properties(): Gee.Map
    get_unknown_serializable_nodes(): Gee.Collection
    get_serialized_xml_node_value(): string | null
    set_serialized_xml_node_value(value?: string | null): void
    /* Virtual methods of GXml-0.10.GXml.SerializableObjectModel */
    vfunc_get_enable_unknown_serializable_property(): boolean
    vfunc_serialize_use_xml_node_value(): boolean
    vfunc_property_use_nick(): boolean
    vfunc_set_default_namespace(node: Node): boolean
    vfunc_node_name(): string
    vfunc_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_serialize(node: Node): Node | null
    vfunc_serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    vfunc_deserialize(node: Node): boolean
    vfunc_deserialize_property(property_node: Node): boolean
    vfunc_to_string(): string
    vfunc_default_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_default_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_get_unknown_serializable_properties(): Gee.Map
    vfunc_get_unknown_serializable_nodes(): Gee.Collection
    vfunc_get_serialized_xml_node_value(): string | null
    vfunc_set_serialized_xml_node_value(value?: string | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml-0.10.GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableObjectModel, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property", callback: (($obj: SerializableObjectModel, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableObjectModel, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableObjectModel, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableObjectModel, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property", callback: (($obj: SerializableObjectModel, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableObjectModel, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableObjectModel, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "notify::properties", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableObjectModel_ConstructProps)
    _init (config?: SerializableObjectModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static string_to_gvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    static gvalue_to_string(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableTreeMap_ConstructProps extends Gee.TreeMap_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignored_serializable_properties?: GLib.HashTable
    serialized_xml_node_value?: string
}
export class SerializableTreeMap {
    /* Properties of GXml-0.10.GXml.SerializableTreeMap */
    properties: GObject.ParamSpec[]
    ignored_serializable_properties: GLib.HashTable
    /* Properties of Gee-0.8.Gee.AbstractBidirSortedMap */
    readonly read_only_view: Gee.BidirSortedMap
    /* Properties of Gee-0.8.Gee.AbstractSortedMap */
    readonly ascending_keys: Gee.SortedSet
    readonly ascending_entries: Gee.SortedSet
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    /* Properties of GXml-0.10.GXml.Serializable */
    readonly unknown_serializable_properties: Gee.Map
    readonly unknown_serializable_nodes: Gee.Collection
    serialized_xml_node_value: string
    /* Fields of GXml-0.10.GXml.SerializableTreeMap */
    parent_instance: Gee.TreeMap
    priv: SerializableTreeMapPrivate
    _node: Node
    _deserialized: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.SerializableTreeMap */
    deserialize_proceed(): boolean
    deserialized(): boolean
    deserialize_node(node: Node): boolean
    deserialize_children(): boolean
    set_default_namespace(node: Node): boolean
    serialize_use_xml_node_value(): boolean
    property_use_nick(): boolean
    node_name(): string
    find_property_spec(property_name: string): GObject.ParamSpec | null
    list_serializable_properties(): GObject.ParamSpec[]
    serialize(node: Node): Node | null
    default_serialize(node: Node): Node | null
    serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    default_serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): boolean
    default_deserialize(node: Node): boolean
    deserialize_property(property_node: Node): boolean
    default_deserialize_property(property_node: Node): boolean
    get_properties(): GObject.ParamSpec[]
    set_properties(value: GObject.ParamSpec[]): void
    get_ignored_serializable_properties(): GLib.HashTable
    set_ignored_serializable_properties(value: GLib.HashTable): void
    /* Methods of Gee-0.8.Gee.TreeMap */
    get_key_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null ]
    get_value_equal_func(): [ /* returnType */ Gee.EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractBidirSortedMap */
    bidir_map_iterator(): Gee.BidirMapIterator
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_read_only_view(): Gee.BidirSortedMap
    /* Methods of Gee-0.8.Gee.AbstractSortedMap */
    head_map(before?: object | null): Gee.SortedMap
    tail_map(after?: object | null): Gee.SortedMap
    sub_map(before?: object | null, after?: object | null): Gee.SortedMap
    get_ascending_keys(): Gee.SortedSet
    get_ascending_entries(): Gee.SortedSet
    /* Methods of Gee-0.8.Gee.AbstractMap */
    has_key(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator(): Gee.MapIterator
    clear(): void
    foreach(f: Gee.ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    get_size(): number
    get_read_only(): boolean
    get_keys(): Gee.Set
    get_values(): Gee.Collection
    get_entries(): Gee.Set
    get_read_only_view(): Gee.Map
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Serializable */
    get_enable_unknown_serializable_property(): boolean
    default_find_property_spec(property_name: string): GObject.ParamSpec | null
    default_list_serializable_properties(): GObject.ParamSpec[]
    get_unknown_serializable_properties(): Gee.Map
    get_unknown_serializable_nodes(): Gee.Collection
    get_serialized_xml_node_value(): string | null
    set_serialized_xml_node_value(value?: string | null): void
    /* Methods of GXml-0.10.GXml.SerializableCollection */
    is_collection(): boolean
    /* Virtual methods of GXml-0.10.GXml.SerializableTreeMap */
    vfunc_deserialize_proceed(): boolean
    vfunc_deserialized(): boolean
    vfunc_deserialize_node(node: Node): boolean
    vfunc_deserialize_children(): boolean
    vfunc_set_default_namespace(node: Node): boolean
    vfunc_serialize_use_xml_node_value(): boolean
    vfunc_property_use_nick(): boolean
    vfunc_node_name(): string
    vfunc_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_serialize(node: Node): Node | null
    vfunc_serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    vfunc_deserialize(node: Node): boolean
    vfunc_deserialize_property(property_node: Node): boolean
    vfunc_get_enable_unknown_serializable_property(): boolean
    vfunc_default_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_default_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_get_unknown_serializable_properties(): Gee.Map
    vfunc_get_unknown_serializable_nodes(): Gee.Collection
    vfunc_get_serialized_xml_node_value(): string | null
    vfunc_set_serialized_xml_node_value(value?: string | null): void
    vfunc_is_collection(): boolean
    vfunc_get_read_only_view(): Gee.BidirSortedMap
    vfunc_get_read_only_view(): Gee.SortedMap
    vfunc_get_read_only_view(): Gee.Map
    /* Virtual methods of Gee-0.8.Gee.TreeMap */
    vfunc_get_read_only_view(): Gee.BidirSortedMap
    vfunc_get_read_only_view(): Gee.SortedMap
    vfunc_get_read_only_view(): Gee.Map
    /* Virtual methods of Gee-0.8.Gee.AbstractBidirSortedMap */
    vfunc_bidir_map_iterator(): Gee.BidirMapIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Gee.BidirSortedMap
    vfunc_get_read_only_view(): Gee.SortedMap
    vfunc_get_read_only_view(): Gee.Map
    /* Virtual methods of Gee-0.8.Gee.AbstractSortedMap */
    vfunc_head_map(before?: object | null): Gee.SortedMap
    vfunc_tail_map(after?: object | null): Gee.SortedMap
    vfunc_sub_map(before?: object | null, after?: object | null): Gee.SortedMap
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_ascending_keys(): Gee.SortedSet
    vfunc_get_ascending_entries(): Gee.SortedSet
    vfunc_get_read_only_view(): Gee.SortedMap
    vfunc_get_read_only_view(): Gee.Map
    /* Virtual methods of Gee-0.8.Gee.AbstractMap */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_map_iterator(): Gee.MapIterator
    vfunc_clear(): void
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Gee.Set
    vfunc_get_values(): Gee.Collection
    vfunc_get_entries(): Gee.Set
    vfunc_get_read_only_view(): Gee.Map
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_iterator(): Gee.Iterator
    vfunc_set_all(map: Gee.Map): void
    vfunc_unset_all(map: Gee.Map): boolean
    vfunc_has_all(map: Gee.Map): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml-0.10.GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableTreeMap, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property", callback: (($obj: SerializableTreeMap, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableTreeMap, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableTreeMap, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableTreeMap, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property", callback: (($obj: SerializableTreeMap, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableTreeMap, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableTreeMap, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "notify::properties", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ascending-keys", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ascending-entries", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableTreeMap_ConstructProps)
    _init (config?: SerializableTreeMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableTreeMap
    static new(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_compare_func: GLib.CompareDataFunc | null, value_equal_func: Gee.EqualDataFunc | null): SerializableTreeMap
    static string_to_gvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    static gvalue_to_string(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableHashMap_ConstructProps extends Gee.HashMap_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignored_serializable_properties?: GLib.HashTable
    serialized_xml_node_value?: string
}
export class SerializableHashMap {
    /* Properties of GXml-0.10.GXml.SerializableHashMap */
    properties: GObject.ParamSpec[]
    ignored_serializable_properties: GLib.HashTable
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    readonly read_only_view: Gee.Map
    /* Properties of GXml-0.10.GXml.Serializable */
    readonly unknown_serializable_properties: Gee.Map
    readonly unknown_serializable_nodes: Gee.Collection
    serialized_xml_node_value: string
    /* Fields of GXml-0.10.GXml.SerializableHashMap */
    parent_instance: Gee.HashMap
    priv: SerializableHashMapPrivate
    _node: Node
    _deserialized: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.SerializableHashMap */
    deserialize_proceed(): boolean
    deserialized(): boolean
    deserialize_node(node: Node): boolean
    deserialize_children(): boolean
    set_default_namespace(node: Node): boolean
    get_enable_unknown_serializable_property(): boolean
    serialize_use_xml_node_value(): boolean
    property_use_nick(): boolean
    node_name(): string
    find_property_spec(property_name: string): GObject.ParamSpec | null
    list_serializable_properties(): GObject.ParamSpec[]
    serialize(node: Node): Node | null
    default_serialize(node: Node): Node | null
    serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    default_serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): boolean
    default_deserialize(node: Node): boolean
    deserialize_property(property_node: Node): boolean
    default_deserialize_property(property_node: Node): boolean
    get_properties(): GObject.ParamSpec[]
    set_properties(value: GObject.ParamSpec[]): void
    get_ignored_serializable_properties(): GLib.HashTable
    set_ignored_serializable_properties(value: GLib.HashTable): void
    /* Methods of Gee-0.8.Gee.HashMap */
    get_key_hash_func(): [ /* returnType */ Gee.HashDataFunc, /* result_target */ object | null ]
    get_key_equal_func(): [ /* returnType */ Gee.EqualDataFunc, /* result_target */ object | null ]
    get_value_equal_func(): [ /* returnType */ Gee.EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractMap */
    has_key(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator(): Gee.MapIterator
    clear(): void
    foreach(f: Gee.ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_size(): number
    get_read_only(): boolean
    get_keys(): Gee.Set
    get_values(): Gee.Collection
    get_entries(): Gee.Set
    get_read_only_view(): Gee.Map
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Serializable */
    default_find_property_spec(property_name: string): GObject.ParamSpec | null
    default_list_serializable_properties(): GObject.ParamSpec[]
    get_unknown_serializable_properties(): Gee.Map
    get_unknown_serializable_nodes(): Gee.Collection
    get_serialized_xml_node_value(): string | null
    set_serialized_xml_node_value(value?: string | null): void
    /* Methods of GXml-0.10.GXml.SerializableCollection */
    is_collection(): boolean
    /* Virtual methods of GXml-0.10.GXml.SerializableHashMap */
    vfunc_deserialize_proceed(): boolean
    vfunc_deserialized(): boolean
    vfunc_deserialize_node(node: Node): boolean
    vfunc_deserialize_children(): boolean
    vfunc_set_default_namespace(node: Node): boolean
    vfunc_get_enable_unknown_serializable_property(): boolean
    vfunc_serialize_use_xml_node_value(): boolean
    vfunc_property_use_nick(): boolean
    vfunc_node_name(): string
    vfunc_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_serialize(node: Node): Node | null
    vfunc_serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    vfunc_deserialize(node: Node): boolean
    vfunc_deserialize_property(property_node: Node): boolean
    vfunc_default_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_default_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_get_unknown_serializable_properties(): Gee.Map
    vfunc_get_unknown_serializable_nodes(): Gee.Collection
    vfunc_get_serialized_xml_node_value(): string | null
    vfunc_set_serialized_xml_node_value(value?: string | null): void
    vfunc_is_collection(): boolean
    /* Virtual methods of Gee-0.8.Gee.AbstractMap */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_map_iterator(): Gee.MapIterator
    vfunc_clear(): void
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Gee.Set
    vfunc_get_values(): Gee.Collection
    vfunc_get_entries(): Gee.Set
    vfunc_get_read_only_view(): Gee.Map
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_iterator(): Gee.Iterator
    vfunc_set_all(map: Gee.Map): void
    vfunc_unset_all(map: Gee.Map): boolean
    vfunc_has_all(map: Gee.Map): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml-0.10.GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableHashMap, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property", callback: (($obj: SerializableHashMap, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableHashMap, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableHashMap, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableHashMap, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property", callback: (($obj: SerializableHashMap, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableHashMap, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableHashMap, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "notify::properties", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableHashMap_ConstructProps)
    _init (config?: SerializableHashMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableHashMap
    static new(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: Gee.HashDataFunc | null, key_equal_func: Gee.EqualDataFunc | null, value_equal_func: Gee.EqualDataFunc | null): SerializableHashMap
    static string_to_gvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    static gvalue_to_string(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableDualKeyMap_ConstructProps extends GObject.Object_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignored_serializable_properties?: GLib.HashTable
    serialized_xml_node_value?: string
}
export class SerializableDualKeyMap {
    /* Properties of GXml-0.10.GXml.SerializableDualKeyMap */
    readonly value_type: GObject.Type
    readonly primary_key_type: GObject.Type
    readonly secondary_key_type: GObject.Type
    readonly primary_keys: Gee.Collection
    readonly size: number
    properties: GObject.ParamSpec[]
    ignored_serializable_properties: GLib.HashTable
    /* Properties of GXml-0.10.GXml.Serializable */
    readonly unknown_serializable_properties: Gee.Map
    readonly unknown_serializable_nodes: Gee.Collection
    serialized_xml_node_value: string
    /* Fields of GXml-0.10.GXml.SerializableDualKeyMap */
    parent_instance: GObject.Object
    priv: SerializableDualKeyMapPrivate
    storage: Gee.HashMultiMap
    _node: Node
    _deserialized: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.SerializableDualKeyMap */
    deserialize_proceed(): boolean
    deserialized(): boolean
    deserialize_node(node: Node): boolean
    deserialize_children(): boolean
    secondary_keys(key?: object | null): Gee.Collection
    values_for_key(primary_key?: object | null): Gee.Collection
    values(): Gee.Collection
    set(primary_key?: object | null, secundary_key?: object | null, val?: object | null): void
    get(primary_key?: object | null, secondary_key?: object | null): object | null
    set_default_namespace(node: Node): boolean
    get_enable_unknown_serializable_property(): boolean
    serialize_use_xml_node_value(): boolean
    property_use_nick(): boolean
    node_name(): string
    find_property_spec(property_name: string): GObject.ParamSpec | null
    list_serializable_properties(): GObject.ParamSpec[]
    serialize(node: Node): Node | null
    default_serialize(node: Node): Node | null
    serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    default_serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): boolean
    default_deserialize(node: Node): boolean
    deserialize_property(property_node: Node): boolean
    default_deserialize_property(property_node: Node): boolean
    get_value_type(): GObject.Type
    get_primary_key_type(): GObject.Type
    get_secondary_key_type(): GObject.Type
    get_primary_keys(): Gee.Collection
    get_size(): number
    get_properties(): GObject.ParamSpec[]
    set_properties(value: GObject.ParamSpec[]): void
    get_ignored_serializable_properties(): GLib.HashTable
    set_ignored_serializable_properties(value: GLib.HashTable): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Gee-0.8.Gee.Traversable */
    foreach(f: Gee.ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    filter(pred: Gee.Predicate): Gee.Iterator
    chop(offset: number, length: number): Gee.Iterator
    flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    tee(forks: number): Gee.Iterator[]
    first_match(pred: Gee.Predicate): object | null
    any_match(pred: Gee.Predicate): boolean
    all_match(pred: Gee.Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    get_element_type(): GObject.Type
    /* Methods of GXml-0.10.GXml.Serializable */
    default_find_property_spec(property_name: string): GObject.ParamSpec | null
    default_list_serializable_properties(): GObject.ParamSpec[]
    get_unknown_serializable_properties(): Gee.Map
    get_unknown_serializable_nodes(): Gee.Collection
    get_serialized_xml_node_value(): string | null
    set_serialized_xml_node_value(value?: string | null): void
    /* Methods of GXml-0.10.GXml.SerializableCollection */
    is_collection(): boolean
    /* Virtual methods of GXml-0.10.GXml.SerializableDualKeyMap */
    vfunc_deserialize_proceed(): boolean
    vfunc_deserialized(): boolean
    vfunc_deserialize_node(node: Node): boolean
    vfunc_deserialize_children(): boolean
    vfunc_set_default_namespace(node: Node): boolean
    vfunc_get_enable_unknown_serializable_property(): boolean
    vfunc_serialize_use_xml_node_value(): boolean
    vfunc_property_use_nick(): boolean
    vfunc_node_name(): string
    vfunc_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_serialize(node: Node): Node | null
    vfunc_serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    vfunc_deserialize(node: Node): boolean
    vfunc_deserialize_property(property_node: Node): boolean
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_default_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_default_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_get_unknown_serializable_properties(): Gee.Map
    vfunc_get_unknown_serializable_nodes(): Gee.Collection
    vfunc_get_serialized_xml_node_value(): string | null
    vfunc_set_serialized_xml_node_value(value?: string | null): void
    vfunc_is_collection(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml-0.10.GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableDualKeyMap, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property", callback: (($obj: SerializableDualKeyMap, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableDualKeyMap, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableDualKeyMap, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableDualKeyMap, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property", callback: (($obj: SerializableDualKeyMap, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableDualKeyMap, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableDualKeyMap, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "notify::value-type", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-key-type", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-key-type", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secondary-key-type", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-key-type", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-keys", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-keys", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::properties", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableDualKeyMap_ConstructProps)
    _init (config?: SerializableDualKeyMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableDualKeyMap
    static string_to_gvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    static gvalue_to_string(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableArrayList_ConstructProps extends Gee.ArrayList_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignored_serializable_properties?: GLib.HashTable
    serialized_xml_node_value?: string
}
export class SerializableArrayList {
    /* Properties of GXml-0.10.GXml.SerializableArrayList */
    properties: GObject.ParamSpec[]
    ignored_serializable_properties: GLib.HashTable
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly read_only_view: Gee.BidirList
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    /* Properties of GXml-0.10.GXml.Serializable */
    readonly unknown_serializable_properties: Gee.Map
    readonly unknown_serializable_nodes: Gee.Collection
    serialized_xml_node_value: string
    /* Fields of GXml-0.10.GXml.SerializableArrayList */
    parent_instance: Gee.ArrayList
    priv: SerializableArrayListPrivate
    _node: Node
    _deserialized: boolean
    /* Fields of Gee-0.8.Gee.ArrayList */
    _items: object[]
    _items_length1: number
    _size: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.SerializableArrayList */
    deserialize_proceed(): boolean
    deserialized(): boolean
    deserialize_node(node: Node): boolean
    deserialize_children(): boolean
    set_default_namespace(node: Node): boolean
    serialize_use_xml_node_value(): boolean
    property_use_nick(): boolean
    node_name(): string
    find_property_spec(property_name: string): GObject.ParamSpec | null
    list_serializable_properties(): GObject.ParamSpec[]
    serialize(node: Node): Node | null
    default_serialize(node: Node): Node | null
    serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    default_serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): boolean
    default_deserialize(node: Node): boolean
    deserialize_property(property_node: Node): boolean
    default_deserialize_property(property_node: Node): boolean
    get_properties(): GObject.ParamSpec[]
    set_properties(value: GObject.ParamSpec[]): void
    get_ignored_serializable_properties(): GLib.HashTable
    set_ignored_serializable_properties(value: GLib.HashTable): void
    /* Methods of Gee-0.8.Gee.ArrayList */
    add_all(collection: Gee.Collection): boolean
    get_equal_func(): [ /* returnType */ Gee.EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidir_list_iterator(): Gee.BidirListIterator
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_read_only_view(): Gee.BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    list_iterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    get_read_only_view(): Gee.List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Gee.Collection
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Serializable */
    get_enable_unknown_serializable_property(): boolean
    default_find_property_spec(property_name: string): GObject.ParamSpec | null
    default_list_serializable_properties(): GObject.ParamSpec[]
    get_unknown_serializable_properties(): Gee.Map
    get_unknown_serializable_nodes(): Gee.Collection
    get_serialized_xml_node_value(): string | null
    set_serialized_xml_node_value(value?: string | null): void
    /* Methods of GXml-0.10.GXml.SerializableCollection */
    is_collection(): boolean
    /* Virtual methods of GXml-0.10.GXml.SerializableArrayList */
    vfunc_deserialize_proceed(): boolean
    vfunc_deserialized(): boolean
    vfunc_deserialize_node(node: Node): boolean
    vfunc_deserialize_children(): boolean
    vfunc_set_default_namespace(node: Node): boolean
    vfunc_serialize_use_xml_node_value(): boolean
    vfunc_property_use_nick(): boolean
    vfunc_node_name(): string
    vfunc_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_serialize(node: Node): Node | null
    vfunc_serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    vfunc_deserialize(node: Node): boolean
    vfunc_deserialize_property(property_node: Node): boolean
    vfunc_get_enable_unknown_serializable_property(): boolean
    vfunc_default_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_default_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_get_unknown_serializable_properties(): Gee.Map
    vfunc_get_unknown_serializable_nodes(): Gee.Collection
    vfunc_get_serialized_xml_node_value(): string | null
    vfunc_set_serialized_xml_node_value(value?: string | null): void
    vfunc_is_collection(): boolean
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.ArrayList */
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractBidirList */
    vfunc_bidir_list_iterator(): Gee.BidirListIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractList */
    vfunc_list_iterator(): Gee.ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): Gee.List | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Gee.Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Gee.Iterator
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Gee.Collection): boolean
    vfunc_contains_all(collection: Gee.Collection): boolean
    vfunc_remove_all(collection: Gee.Collection): boolean
    vfunc_retain_all(collection: Gee.Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Gee.Iterator): boolean
    vfunc_contains_all_iterator(iter: Gee.Iterator): boolean
    vfunc_remove_all_iterator(iter: Gee.Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml-0.10.GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableArrayList, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property", callback: (($obj: SerializableArrayList, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableArrayList, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableArrayList, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableArrayList, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property", callback: (($obj: SerializableArrayList, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableArrayList, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableArrayList, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "notify::properties", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableArrayList_ConstructProps)
    _init (config?: SerializableArrayList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableArrayList
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): SerializableArrayList
    static string_to_gvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    static gvalue_to_string(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableContainer_ConstructProps extends SerializableObjectModel_ConstructProps {
}
export class SerializableContainer {
    /* Properties of GXml-0.10.GXml.SerializableObjectModel */
    properties: GObject.ParamSpec[]
    ignored_serializable_properties: GLib.HashTable
    /* Fields of GXml-0.10.GXml.SerializableContainer */
    parent_instance: SerializableObjectModel
    priv: SerializableContainerPrivate
    /* Fields of GXml-0.10.GXml.SerializableObjectModel */
    _node: Node
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.SerializableContainer */
    init_containers(): void
    /* Methods of GXml-0.10.GXml.SerializableObjectModel */
    get_enable_unknown_serializable_property(): boolean
    serialize_use_xml_node_value(): boolean
    property_use_nick(): boolean
    set_default_namespace(node: Node): boolean
    node_name(): string
    default_node_name(): string
    find_property_spec(property_name: string): GObject.ParamSpec | null
    list_serializable_properties(): GObject.ParamSpec[]
    serialize(node: Node): Node | null
    default_serialize(node: Node): Node | null
    serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    default_serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): boolean
    default_deserialize(node: Node): boolean
    deserialize_property(property_node: Node): boolean
    default_deserialize_property(property_node: Node): boolean
    to_string(): string
    get_properties(): GObject.ParamSpec[]
    set_properties(value: GObject.ParamSpec[]): void
    get_ignored_serializable_properties(): GLib.HashTable
    set_ignored_serializable_properties(value: GLib.HashTable): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.SerializableContainer */
    vfunc_init_containers(): void
    /* Virtual methods of GXml-0.10.GXml.SerializableObjectModel */
    vfunc_get_enable_unknown_serializable_property(): boolean
    vfunc_serialize_use_xml_node_value(): boolean
    vfunc_property_use_nick(): boolean
    vfunc_set_default_namespace(node: Node): boolean
    vfunc_node_name(): string
    vfunc_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_serialize(node: Node): Node | null
    vfunc_serialize_property(element: Node, prop: GObject.ParamSpec): Node | null
    vfunc_deserialize(node: Node): boolean
    vfunc_deserialize_property(property_node: Node): boolean
    vfunc_to_string(): string
    vfunc_default_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_default_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_get_unknown_serializable_properties(): Gee.Map
    vfunc_get_unknown_serializable_nodes(): Gee.Collection
    vfunc_get_serialized_xml_node_value(): string | null
    vfunc_set_serialized_xml_node_value(value?: string | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::properties", callback: (($obj: SerializableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableContainer_ConstructProps)
    _init (config?: SerializableContainer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TAttribute_ConstructProps extends TNode_ConstructProps {
    namespace?: Namespace
}
export class TAttribute {
    /* Properties of GXml-0.10.GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly type_node: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.Attribute */
    namespace: Namespace
    readonly prefix: string
    /* Fields of GXml-0.10.GXml.TAttribute */
    parent_instance: TNode
    priv: TAttributePrivate
    _namespaces: Gee.ArrayList
    /* Fields of GXml-0.10.GXml.TNode */
    _name: string
    _value: string
    _doc: Document
    _parent: Node
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.TNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    set_parent(node: Node): void
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_document(): Document
    get_name(): string
    get_namespaces(): Gee.List
    get_type_node(): NodeType
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Attribute */
    get_namespace(): Namespace
    set_namespace(value: Namespace): void
    get_prefix(): string
    /* Virtual methods of GXml-0.10.GXml.TAttribute */
    vfunc_get_namespace(): Namespace
    vfunc_set_namespace(value: Namespace): void
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_get_prefix(): string
    /* Virtual methods of GXml-0.10.GXml.TNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_set_parent(node: Node): void
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_document(): Document
    vfunc_get_name(): string
    vfunc_get_namespaces(): Gee.List
    vfunc_get_type_node(): NodeType
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TAttribute_ConstructProps)
    _init (config?: TAttribute_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(d: Document, name: string, value: string): TAttribute
    static $gtype: GObject.Type
}
export interface TComment_ConstructProps extends TNode_ConstructProps {
}
export class TComment {
    /* Properties of GXml-0.10.GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly type_node: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.Comment */
    readonly str: string
    /* Fields of GXml-0.10.GXml.TComment */
    parent_instance: TNode
    priv: TCommentPrivate
    /* Fields of GXml-0.10.GXml.TNode */
    _name: string
    _value: string
    _doc: Document
    _parent: Node
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.TNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    set_parent(node: Node): void
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_document(): Document
    get_name(): string
    get_namespaces(): Gee.List
    get_type_node(): NodeType
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Comment */
    get_str(): string
    /* Virtual methods of GXml-0.10.GXml.TComment */
    vfunc_get_str(): string
    /* Virtual methods of GXml-0.10.GXml.TNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_set_parent(node: Node): void
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_document(): Document
    vfunc_get_name(): string
    vfunc_get_namespaces(): Gee.List
    vfunc_get_type_node(): NodeType
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::str", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TComment_ConstructProps)
    _init (config?: TComment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: Document, text: string): TComment
    static $gtype: GObject.Type
}
export interface TCDATA_ConstructProps extends TNode_ConstructProps {
}
export class TCDATA {
    /* Properties of GXml-0.10.GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly type_node: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.CDATA */
    readonly str: string
    /* Fields of GXml-0.10.GXml.TCDATA */
    parent_instance: TNode
    priv: TCDATAPrivate
    /* Fields of GXml-0.10.GXml.TNode */
    _name: string
    _value: string
    _doc: Document
    _parent: Node
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.TNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    set_parent(node: Node): void
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_document(): Document
    get_name(): string
    get_namespaces(): Gee.List
    get_type_node(): NodeType
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.CDATA */
    get_str(): string
    /* Virtual methods of GXml-0.10.GXml.TCDATA */
    vfunc_get_str(): string
    /* Virtual methods of GXml-0.10.GXml.TNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_set_parent(node: Node): void
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_document(): Document
    vfunc_get_name(): string
    vfunc_get_namespaces(): Gee.List
    vfunc_get_type_node(): NodeType
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::str", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TCDATA_ConstructProps)
    _init (config?: TCDATA_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(d: Document, text: string): TCDATA
    static $gtype: GObject.Type
}
export interface TDocument_ConstructProps extends TNode_ConstructProps {
    indent?: boolean
    ns_top?: boolean
    prefix_default_ns?: boolean
    backup?: boolean
    file?: Gio.File
}
export class TDocument {
    /* Properties of GXml-0.10.GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly type_node: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.Document */
    indent: boolean
    ns_top: boolean
    prefix_default_ns: boolean
    backup: boolean
    readonly root: Node
    file: Gio.File
    /* Fields of GXml-0.10.GXml.TDocument */
    parent_instance: TNode
    priv: TDocumentPrivate
    _namespaces: Gee.ArrayList
    _children: Gee.ArrayList
    /* Fields of GXml-0.10.GXml.TNode */
    _name: string
    _value: string
    _doc: Document
    _parent: Node
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.TDocument */
    save_to(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of GXml-0.10.GXml.TNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    set_parent(node: Node): void
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_document(): Document
    get_name(): string
    get_namespaces(): Gee.List
    get_type_node(): NodeType
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Document */
    create_element(name: string): Node
    create_text(text: string): Node
    create_comment(text: string): Node
    create_cdata(text: string): Node
    create_pi(target: string, data: string): Node
    save(cancellable?: Gio.Cancellable | null): boolean
    save_as(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    get_indent(): boolean
    set_indent(value: boolean): void
    get_ns_top(): boolean
    set_ns_top(value: boolean): void
    get_prefix_default_ns(): boolean
    set_prefix_default_ns(value: boolean): void
    get_backup(): boolean
    set_backup(value: boolean): void
    get_root(): Node
    get_file(): Gio.File
    set_file(value: Gio.File): void
    /* Virtual methods of GXml-0.10.GXml.TDocument */
    vfunc_create_element(name: string): Node
    vfunc_create_text(text: string): Node
    vfunc_create_comment(text: string): Node
    vfunc_create_cdata(text: string): Node
    vfunc_create_pi(target: string, data: string): Node
    vfunc_save(cancellable?: Gio.Cancellable | null): boolean
    vfunc_save_as(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_indent(): boolean
    vfunc_set_indent(value: boolean): void
    vfunc_get_ns_top(): boolean
    vfunc_set_ns_top(value: boolean): void
    vfunc_get_prefix_default_ns(): boolean
    vfunc_set_prefix_default_ns(value: boolean): void
    vfunc_get_backup(): boolean
    vfunc_set_backup(value: boolean): void
    vfunc_get_root(): Node
    vfunc_get_file(): Gio.File
    vfunc_set_file(value: Gio.File): void
    /* Virtual methods of GXml-0.10.GXml.TNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_set_parent(node: Node): void
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_document(): Document
    vfunc_get_name(): string
    vfunc_get_namespaces(): Gee.List
    vfunc_get_type_node(): NodeType
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::indent", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ns-top", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ns-top", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix-default-ns", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix-default-ns", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backup", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backup", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TDocument_ConstructProps)
    _init (config?: TDocument_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TDocument
    static from_path(path: string): TDocument
    static from_uri(uri: string): TDocument
    static from_file(file: Gio.File): TDocument
    static from_stream(stream: Gio.InputStream): TDocument
    static from_string(str: string): TDocument
    static from_path_with_readtype_func(path: string, func: any): TDocument
    static from_uri_with_readtype_func(uri: string, func: any): TDocument
    static from_file_with_readtype_func(file: Gio.File, func: any): TDocument
    static from_stream_with_readtype_func(stream: Gio.InputStream, func: any): TDocument
    static from_string_with_readtype_func(str: string, func: any): TDocument
    static tw_save_as(doc: Document, f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    static write_document(doc: Document, tw: libxml2.TextWriter): void
    static start_node(doc: Document, tw: libxml2.TextWriter, node: Node, root: boolean, declared_ns: Gee.ArrayList): /* declared_ns */ Gee.ArrayList
    static read_doc(doc: Document, file: Gio.File, rtfunc?: any | null): void
    static read_doc_stream(doc: Document, istream: Gio.InputStream, rtfunc?: any | null): void
    static read_node(node: Node, tr: libxml2.TextReader, rntfunc?: any | null): TDocumentReadType
    static new_default(): Document
    static new_default_for_path(path: string): Document
    static new_default_for_file(f: Gio.File): Document
    static $gtype: GObject.Type
}
export interface TElement_ConstructProps extends TNode_ConstructProps {
    content?: string
}
export class TElement {
    /* Properties of GXml-0.10.GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly type_node: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.Element */
    readonly tag_name: string
    content: string
    /* Fields of GXml-0.10.GXml.TElement */
    parent_instance: TNode
    priv: TElementPrivate
    _attrs: Gee.HashMap
    _children: TNodeTChildrenList
    _namespaces: Gee.ArrayList
    /* Fields of GXml-0.10.GXml.TNode */
    _name: string
    _value: string
    _doc: Document
    _parent: Node
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.TNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    set_parent(node: Node): void
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_document(): Document
    get_name(): string
    get_namespaces(): Gee.List
    get_type_node(): NodeType
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Element */
    normalize(): void
    set_attr(name: string, value: string): void
    get_attr(name: string): Node
    remove_attr(name: string): void
    set_ns_attr(ns: Namespace, name: string, value: string): void
    get_ns_attr(name: string, uri: string): Node
    get_tag_name(): string
    get_content(): string
    set_content(value: string): void
    /* Virtual methods of GXml-0.10.GXml.TElement */
    vfunc_normalize(): void
    vfunc_set_attr(name: string, value: string): void
    vfunc_get_attr(name: string): Node
    vfunc_remove_attr(name: string): void
    vfunc_set_ns_attr(ns: Namespace, name: string, value: string): void
    vfunc_get_ns_attr(name: string, uri: string): Node
    vfunc_get_tag_name(): string
    vfunc_get_content(): string
    vfunc_set_content(value: string): void
    /* Virtual methods of GXml-0.10.GXml.TNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_set_parent(node: Node): void
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_document(): Document
    vfunc_get_name(): string
    vfunc_get_namespaces(): Gee.List
    vfunc_get_type_node(): NodeType
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tag-name", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TElement_ConstructProps)
    _init (config?: TElement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(d: Document, name: string): TElement
    static $gtype: GObject.Type
}
export interface TNamespace_ConstructProps extends TNode_ConstructProps {
}
export class TNamespace {
    /* Properties of GXml-0.10.GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly type_node: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.Namespace */
    readonly uri: string
    readonly prefix: string
    /* Fields of GXml-0.10.GXml.TNamespace */
    parent_instance: TNode
    priv: TNamespacePrivate
    /* Fields of GXml-0.10.GXml.TNode */
    _name: string
    _value: string
    _doc: Document
    _parent: Node
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.TNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    set_parent(node: Node): void
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_document(): Document
    get_name(): string
    get_namespaces(): Gee.List
    get_type_node(): NodeType
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Namespace */
    get_uri(): string
    get_prefix(): string
    /* Virtual methods of GXml-0.10.GXml.TNamespace */
    vfunc_get_uri(): string
    vfunc_get_prefix(): string
    /* Virtual methods of GXml-0.10.GXml.TNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_set_parent(node: Node): void
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_document(): Document
    vfunc_get_name(): string
    vfunc_get_namespaces(): Gee.List
    vfunc_get_type_node(): NodeType
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TNamespace_ConstructProps)
    _init (config?: TNamespace_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(d: Document, uri: string, prefix?: string | null): TNamespace
    static $gtype: GObject.Type
}
export interface TNode_ConstructProps extends GObject.Object_ConstructProps {
    value?: string
}
export class TNode {
    /* Properties of GXml-0.10.GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly type_node: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.Node */
    readonly childs: Gee.BidirList
    /* Fields of GXml-0.10.GXml.TNode */
    parent_instance: GObject.Object
    priv: TNodePrivate
    _name: string
    _value: string
    _doc: Document
    _parent: Node
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.TNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    set_parent(node: Node): void
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_document(): Document
    get_name(): string
    get_namespaces(): Gee.List
    get_type_node(): NodeType
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Node */
    get(key: string): Node | null
    get_elements_by_property_value(property: string, value: string): ElementList
    ns_prefix(): string
    ns_uri(): string
    get_childs(): Gee.BidirList
    /* Virtual methods of GXml-0.10.GXml.TNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_set_parent(node: Node): void
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_document(): Document
    vfunc_get_name(): string
    vfunc_get_namespaces(): Gee.List
    vfunc_get_type_node(): NodeType
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::childs", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::childs", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TNode_ConstructProps)
    _init (config?: TNode_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static copy(doc: Document, node: Node, source: Node, deep: boolean): boolean
    static $gtype: GObject.Type
}
export interface TNodeTChildrenList_ConstructProps extends Gee.AbstractBidirList_ConstructProps {
}
export class TNodeTChildrenList {
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly read_only_view: Gee.BidirList
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    /* Fields of GXml-0.10.GXml.TNodeTChildrenList */
    parent_instance: Gee.AbstractBidirList
    priv: TNodeTChildrenListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidir_list_iterator(): Gee.BidirListIterator
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_read_only_view(): Gee.BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    list_iterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    get_read_only_view(): Gee.List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Gee.Collection
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.TNodeTChildrenList */
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractBidirList */
    vfunc_bidir_list_iterator(): Gee.BidirListIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractList */
    vfunc_list_iterator(): Gee.ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): Gee.List | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Gee.Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Gee.Iterator
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Gee.Collection): boolean
    vfunc_contains_all(collection: Gee.Collection): boolean
    vfunc_remove_all(collection: Gee.Collection): boolean
    vfunc_retain_all(collection: Gee.Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Gee.Iterator): boolean
    vfunc_contains_all_iterator(iter: Gee.Iterator): boolean
    vfunc_remove_all_iterator(iter: Gee.Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TNodeTChildrenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TNodeTChildrenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: TNodeTChildrenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TNodeTChildrenList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: TNodeTChildrenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TNodeTChildrenList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: TNodeTChildrenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: TNodeTChildrenList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TNodeTChildrenList_ConstructProps)
    _init (config?: TNodeTChildrenList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(e: Node): TNodeTChildrenList
    static $gtype: GObject.Type
}
export interface TProcessingInstruction_ConstructProps extends TNode_ConstructProps {
}
export class TProcessingInstruction {
    /* Properties of GXml-0.10.GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly type_node: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.ProcessingInstruction */
    readonly target: string
    readonly data: string
    /* Fields of GXml-0.10.GXml.TProcessingInstruction */
    parent_instance: TNode
    priv: TProcessingInstructionPrivate
    /* Fields of GXml-0.10.GXml.TNode */
    _name: string
    _value: string
    _doc: Document
    _parent: Node
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.TNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    set_parent(node: Node): void
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_document(): Document
    get_name(): string
    get_namespaces(): Gee.List
    get_type_node(): NodeType
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.ProcessingInstruction */
    get_target(): string
    get_data(): string
    /* Virtual methods of GXml-0.10.GXml.TProcessingInstruction */
    vfunc_get_target(): string
    vfunc_get_data(): string
    /* Virtual methods of GXml-0.10.GXml.TNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_set_parent(node: Node): void
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_document(): Document
    vfunc_get_name(): string
    vfunc_get_namespaces(): Gee.List
    vfunc_get_type_node(): NodeType
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::target", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::data", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TProcessingInstruction_ConstructProps)
    _init (config?: TProcessingInstruction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: Document, target: string, data: string): TProcessingInstruction
    static $gtype: GObject.Type
}
export interface TText_ConstructProps extends TNode_ConstructProps {
}
export class TText {
    /* Properties of GXml-0.10.GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly type_node: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml-0.10.GXml.Text */
    readonly str: string
    /* Fields of GXml-0.10.GXml.TText */
    parent_instance: TNode
    priv: TTextPrivate
    /* Fields of GXml-0.10.GXml.TNode */
    _name: string
    _value: string
    _doc: Document
    _parent: Node
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.TNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    set_parent(node: Node): void
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_document(): Document
    get_name(): string
    get_namespaces(): Gee.List
    get_type_node(): NodeType
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Text */
    get_str(): string
    /* Virtual methods of GXml-0.10.GXml.TText */
    vfunc_get_str(): string
    /* Virtual methods of GXml-0.10.GXml.TNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_set_parent(node: Node): void
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_document(): Document
    vfunc_get_name(): string
    vfunc_get_namespaces(): Gee.List
    vfunc_get_type_node(): NodeType
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::str", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TText_ConstructProps)
    _init (config?: TText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(d: Document, text: string): TText
    static $gtype: GObject.Type
}
export interface HtmlDocument_ConstructProps extends xDocument_ConstructProps {
}
export class HtmlDocument {
    /* Properties of GXml-0.10.GXml.HtmlDocument */
    readonly default_options: number
    /* Properties of GXml-0.10.GXml.xDocument */
    doctype: xDocumentType
    implementation: Implementation
    document_element: xElement
    readonly root: Node
    /* Properties of GXml-0.10.GXml.xNode */
    namespace_definitions: Gee.List
    namespace_uri: string
    namespace_prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: xNode
    child_nodes: xNodeList
    first_child: xNode
    last_child: xNode
    previous_sibling: xNode
    next_sibling: xNode
    attributes: NamedAttrMap
    owner_document: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Fields of GXml-0.10.GXml.HtmlDocument */
    parent_instance: xDocument
    priv: HtmlDocumentPrivate
    /* Fields of GXml-0.10.GXml.xNode */
    _child_nodes: xNodeList
    _attributes: NamedAttrMap
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.HtmlDocument */
    get_elements_by_class_name(klass: string): ElementList
    get_element_by_id(id: string): Element | null
    /* Methods of GXml-0.10.GXml.xDocument */
    save_to_path(file_path: string): void
    save_to_stream(outstream: Gio.OutputStream, can?: Gio.Cancellable | null): void
    create_document_fragment(): DocumentFragment
    create_text_node(text_data: string): xText
    create_managed_comment(comment_data: string): xComment
    create_cdata_section(cdata_data: string): xCDATASection
    create_processing_instruction(target: string, data: string): xProcessingInstruction
    create_attribute(name: string): xAttr
    create_entity_reference(name: string): EntityReference
    get_elements_by_tag_name(tag_name: string): xNodeList
    copy_node(foreign_node: xNode, deep: boolean): xNode
    get_doctype(): xDocumentType | null
    get_implementation(): Implementation
    get_document_element(): xElement
    get_root(): Node
    /* Methods of GXml-0.10.GXml.xNode */
    add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    set_namespace(uri: string, namespace_prefix?: string | null): boolean
    insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    replace_child(new_child: xNode, old_child: xNode): xNode | null
    remove_child(old_child: xNode): xNode | null
    append_child(new_child: xNode): xNode | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    to_string(): string
    get_namespace_definitions(): Gee.List | null
    get_namespace_uri(): string | null
    get_namespace_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): xNode | null
    get_child_nodes(): xNodeList | null
    get_first_child(): xNode | null
    get_last_child(): xNode | null
    get_previous_sibling(): xNode | null
    get_next_sibling(): xNode | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): xDocument
    get_namespaces(): Gee.List
    get_children(): Gee.BidirList
    get_attrs(): Gee.Map
    get_name(): string
    get_value(): string
    set_value(value: string): void
    get_parent(): Node
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.xDocument */
    vfunc_get_root(): Node
    vfunc_create_element(name: string): Node
    vfunc_create_text(text: string): Node
    vfunc_create_comment(text: string): Node
    vfunc_create_cdata(text: string): Node
    vfunc_create_pi(target: string, data: string): Node
    vfunc_save(cancellable?: Gio.Cancellable | null): boolean
    vfunc_save_as(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_indent(): boolean
    vfunc_set_indent(value: boolean): void
    vfunc_get_ns_top(): boolean
    vfunc_set_ns_top(value: boolean): void
    vfunc_get_prefix_default_ns(): boolean
    vfunc_set_prefix_default_ns(value: boolean): void
    vfunc_get_backup(): boolean
    vfunc_set_backup(value: boolean): void
    vfunc_get_file(): Gio.File
    vfunc_set_file(value: Gio.File): void
    /* Virtual methods of GXml-0.10.GXml.xNode */
    vfunc_add_namespace_attr(uri: string, namespace_prefix?: string | null): NamespaceAttr | null
    vfunc_set_namespace(uri: string, namespace_prefix?: string | null): boolean
    vfunc_insert_before(new_child: xNode, ref_child?: xNode | null): xNode | null
    vfunc_replace_child(new_child: xNode, old_child: xNode): xNode | null
    vfunc_remove_child(old_child: xNode): xNode | null
    vfunc_append_child(new_child: xNode): xNode | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): xNode | null
    vfunc_stringify(format: boolean, level: number): string
    vfunc_to_string(): string
    vfunc_get_namespace_definitions(): Gee.List | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_namespace_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): xNode | null
    vfunc_get_child_nodes(): xNodeList | null
    vfunc_get_first_child(): xNode | null
    vfunc_get_last_child(): xNode | null
    vfunc_get_previous_sibling(): xNode | null
    vfunc_get_next_sibling(): xNode | null
    vfunc_get_attributes(): NamedAttrMap | null
    vfunc_get_namespaces(): Gee.List
    vfunc_get_children(): Gee.BidirList
    vfunc_get_attrs(): Gee.Map
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get_parent(): Node
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    vfunc_get_type_node(): NodeType
    vfunc_get_document(): Document
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-options", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-options", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::doctype", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::implementation", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document-element", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-prefix", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attrs", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HtmlDocument_ConstructProps)
    _init (config?: HtmlDocument_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static from_path(path: string, options: number): HtmlDocument
    static from_path(file_path: string): HtmlDocument
    static from_uri(uri: string, options: number): HtmlDocument
    static from_file(file: Gio.File, options: number, cancel?: Gio.Cancellable | null): HtmlDocument
    static from_string(html: string, options: number): HtmlDocument
    static from_string(xml: string): HtmlDocument
    static new(): HtmlDocument
    static get_default_options(): number
    static $gtype: GObject.Type
}
export interface GAttribute_ConstructProps extends GNode_ConstructProps {
    namespace?: Namespace
}
export class GAttribute {
    /* Properties of GXml-0.10.GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly type_node: NodeType
    readonly name: string
    value: string
    /* Properties of GXml-0.10.GXml.Attribute */
    namespace: Namespace
    readonly prefix: string
    /* Fields of GXml-0.10.GXml.GAttribute */
    parent_instance: GNode
    priv: GAttributePrivate
    /* Fields of GXml-0.10.GXml.GNode */
    _doc: GDocument
    _node: object | null
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.GNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    get_internal_node(): object | null
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_namespaces(): Gee.List
    get_document(): Document
    get_parent(): Node
    get_type_node(): NodeType
    get_name(): string
    get_value(): string
    set_value(value: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Attribute */
    get_namespace(): Namespace
    set_namespace(value: Namespace): void
    get_prefix(): string
    /* Virtual methods of GXml-0.10.GXml.GAttribute */
    vfunc_get_namespace(): Namespace
    vfunc_set_namespace(value: Namespace): void
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_get_prefix(): string
    /* Virtual methods of GXml-0.10.GXml.GNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_namespaces(): Gee.List
    vfunc_get_document(): Document
    vfunc_get_parent(): Node
    vfunc_get_type_node(): NodeType
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GAttribute_ConstructProps)
    _init (config?: GAttribute_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: GDocument, node?: object | null): GAttribute
    static $gtype: GObject.Type
}
export interface GComment_ConstructProps extends GNode_ConstructProps {
}
export class GComment {
    /* Properties of GXml-0.10.GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly type_node: NodeType
    readonly name: string
    value: string
    /* Properties of GXml-0.10.GXml.Comment */
    readonly str: string
    /* Fields of GXml-0.10.GXml.GComment */
    parent_instance: GNode
    priv: GCommentPrivate
    /* Fields of GXml-0.10.GXml.GNode */
    _doc: GDocument
    _node: object | null
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.GNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    get_internal_node(): object | null
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_namespaces(): Gee.List
    get_document(): Document
    get_parent(): Node
    get_type_node(): NodeType
    get_name(): string
    get_value(): string
    set_value(value: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Comment */
    get_str(): string
    /* Virtual methods of GXml-0.10.GXml.GComment */
    vfunc_get_str(): string
    /* Virtual methods of GXml-0.10.GXml.GNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_namespaces(): Gee.List
    vfunc_get_document(): Document
    vfunc_get_parent(): Node
    vfunc_get_type_node(): NodeType
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::str", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GComment_ConstructProps)
    _init (config?: GComment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: GDocument, node?: object | null): GComment
    static $gtype: GObject.Type
}
export interface GCDATA_ConstructProps extends GNode_ConstructProps {
}
export class GCDATA {
    /* Properties of GXml-0.10.GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly type_node: NodeType
    readonly name: string
    value: string
    /* Properties of GXml-0.10.GXml.CDATA */
    readonly str: string
    /* Fields of GXml-0.10.GXml.GCDATA */
    parent_instance: GNode
    priv: GCDATAPrivate
    /* Fields of GXml-0.10.GXml.GNode */
    _doc: GDocument
    _node: object | null
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.GNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    get_internal_node(): object | null
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_namespaces(): Gee.List
    get_document(): Document
    get_parent(): Node
    get_type_node(): NodeType
    get_name(): string
    get_value(): string
    set_value(value: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.CDATA */
    get_str(): string
    /* Virtual methods of GXml-0.10.GXml.GCDATA */
    vfunc_get_str(): string
    /* Virtual methods of GXml-0.10.GXml.GNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_namespaces(): Gee.List
    vfunc_get_document(): Document
    vfunc_get_parent(): Node
    vfunc_get_type_node(): NodeType
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::str", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GCDATA_ConstructProps)
    _init (config?: GCDATA_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: GDocument, node?: object | null): GCDATA
    static $gtype: GObject.Type
}
export interface GDocument_ConstructProps extends GNode_ConstructProps {
    indent?: boolean
    ns_top?: boolean
    prefix_default_ns?: boolean
    backup?: boolean
    file?: Gio.File
}
export class GDocument {
    /* Properties of GXml-0.10.GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly type_node: NodeType
    readonly name: string
    value: string
    /* Properties of GXml-0.10.GXml.Document */
    indent: boolean
    ns_top: boolean
    prefix_default_ns: boolean
    backup: boolean
    readonly root: Node
    file: Gio.File
    /* Fields of GXml-0.10.GXml.GDocument */
    parent_instance: GNode
    priv: GDocumentPrivate
    doc: object | null
    _buffer: any
    /* Fields of GXml-0.10.GXml.GNode */
    _doc: GDocument
    _node: object | null
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.GDocument */
    libxml_to_string(): string
    save(cancellable?: Gio.Cancellable | null): boolean
    save_as(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of GXml-0.10.GXml.GNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    get_internal_node(): object | null
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_namespaces(): Gee.List
    get_document(): Document
    get_parent(): Node
    get_type_node(): NodeType
    get_name(): string
    get_value(): string
    set_value(value: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Document */
    create_element(name: string): Node
    create_text(text: string): Node
    create_comment(text: string): Node
    create_cdata(text: string): Node
    create_pi(target: string, data: string): Node
    get_indent(): boolean
    set_indent(value: boolean): void
    get_ns_top(): boolean
    set_ns_top(value: boolean): void
    get_prefix_default_ns(): boolean
    set_prefix_default_ns(value: boolean): void
    get_backup(): boolean
    set_backup(value: boolean): void
    get_root(): Node
    get_file(): Gio.File
    set_file(value: Gio.File): void
    /* Virtual methods of GXml-0.10.GXml.GDocument */
    vfunc_save(cancellable?: Gio.Cancellable | null): boolean
    vfunc_save_as(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    vfunc_create_element(name: string): Node
    vfunc_create_text(text: string): Node
    vfunc_create_comment(text: string): Node
    vfunc_create_cdata(text: string): Node
    vfunc_create_pi(target: string, data: string): Node
    vfunc_get_indent(): boolean
    vfunc_set_indent(value: boolean): void
    vfunc_get_ns_top(): boolean
    vfunc_set_ns_top(value: boolean): void
    vfunc_get_prefix_default_ns(): boolean
    vfunc_set_prefix_default_ns(value: boolean): void
    vfunc_get_backup(): boolean
    vfunc_set_backup(value: boolean): void
    vfunc_get_root(): Node
    vfunc_get_file(): Gio.File
    vfunc_set_file(value: Gio.File): void
    /* Virtual methods of GXml-0.10.GXml.GNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_namespaces(): Gee.List
    vfunc_get_document(): Document
    vfunc_get_parent(): Node
    vfunc_get_type_node(): NodeType
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::indent", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ns-top", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ns-top", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix-default-ns", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix-default-ns", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backup", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backup", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::file", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GDocument_ConstructProps)
    _init (config?: GDocument_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GDocument
    static from_path(path: string, options: number): GDocument
    static from_uri(uri: string, options: number): GDocument
    static from_file(file: Gio.File, options: number, cancel?: Gio.Cancellable | null): GDocument
    static from_string(str: string, options: number): GDocument
    static from_stream(istream: Gio.InputStream): GDocument
    static from_doc(doc: libxml2.Doc): GDocument
    static new_default(): Document
    static new_default_for_path(path: string): Document
    static new_default_for_file(f: Gio.File): Document
    static $gtype: GObject.Type
}
export interface GElement_ConstructProps extends GNode_ConstructProps {
    content?: string
}
export class GElement {
    /* Properties of GXml-0.10.GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly type_node: NodeType
    readonly name: string
    value: string
    /* Properties of GXml-0.10.GXml.Element */
    readonly tag_name: string
    content: string
    /* Fields of GXml-0.10.GXml.GElement */
    parent_instance: GNode
    priv: GElementPrivate
    /* Fields of GXml-0.10.GXml.GNode */
    _doc: GDocument
    _node: object | null
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.GNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    get_internal_node(): object | null
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_namespaces(): Gee.List
    get_document(): Document
    get_parent(): Node
    get_type_node(): NodeType
    get_name(): string
    get_value(): string
    set_value(value: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Element */
    normalize(): void
    set_attr(name: string, value: string): void
    get_attr(name: string): Node
    remove_attr(name: string): void
    set_ns_attr(ns: Namespace, name: string, value: string): void
    get_ns_attr(name: string, uri: string): Node
    get_tag_name(): string
    get_content(): string
    set_content(value: string): void
    /* Virtual methods of GXml-0.10.GXml.GElement */
    vfunc_normalize(): void
    vfunc_set_attr(name: string, value: string): void
    vfunc_get_attr(name: string): Node
    vfunc_remove_attr(name: string): void
    vfunc_set_ns_attr(ns: Namespace, name: string, value: string): void
    vfunc_get_ns_attr(name: string, uri: string): Node
    vfunc_get_tag_name(): string
    vfunc_get_content(): string
    vfunc_set_content(value: string): void
    /* Virtual methods of GXml-0.10.GXml.GNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_namespaces(): Gee.List
    vfunc_get_document(): Document
    vfunc_get_parent(): Node
    vfunc_get_type_node(): NodeType
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tag-name", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GElement_ConstructProps)
    _init (config?: GElement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: GDocument, node?: object | null): GElement
    static $gtype: GObject.Type
}
export interface GNamespace_ConstructProps extends GNode_ConstructProps {
}
export class GNamespace {
    /* Properties of GXml-0.10.GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly type_node: NodeType
    readonly name: string
    value: string
    /* Properties of GXml-0.10.GXml.Namespace */
    readonly uri: string
    readonly prefix: string
    /* Fields of GXml-0.10.GXml.GNamespace */
    parent_instance: GNode
    priv: GNamespacePrivate
    /* Fields of GXml-0.10.GXml.GNode */
    _doc: GDocument
    _node: object | null
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.GNamespace */
    get_internal_ns(): object | null
    /* Methods of GXml-0.10.GXml.GNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    get_internal_node(): object | null
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_namespaces(): Gee.List
    get_document(): Document
    get_parent(): Node
    get_type_node(): NodeType
    get_name(): string
    get_value(): string
    set_value(value: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Namespace */
    get_uri(): string
    get_prefix(): string
    /* Virtual methods of GXml-0.10.GXml.GNamespace */
    vfunc_get_uri(): string
    vfunc_get_prefix(): string
    /* Virtual methods of GXml-0.10.GXml.GNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_namespaces(): Gee.List
    vfunc_get_document(): Document
    vfunc_get_parent(): Node
    vfunc_get_type_node(): NodeType
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GNamespace_ConstructProps)
    _init (config?: GNamespace_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(ns?: object | null): GNamespace
    static $gtype: GObject.Type
}
export interface GNode_ConstructProps extends GObject.Object_ConstructProps {
    value?: string
}
export class GNode {
    /* Properties of GXml-0.10.GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly type_node: NodeType
    readonly name: string
    value: string
    /* Properties of GXml-0.10.GXml.Node */
    readonly childs: Gee.BidirList
    /* Fields of GXml-0.10.GXml.GNode */
    parent_instance: GObject.Object
    priv: GNodePrivate
    _doc: GDocument
    _node: object | null
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.GNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    get_internal_node(): object | null
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_namespaces(): Gee.List
    get_document(): Document
    get_parent(): Node
    get_type_node(): NodeType
    get_name(): string
    get_value(): string
    set_value(value: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Node */
    get(key: string): Node | null
    get_elements_by_property_value(property: string, value: string): ElementList
    ns_prefix(): string
    ns_uri(): string
    get_childs(): Gee.BidirList
    /* Virtual methods of GXml-0.10.GXml.GNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_namespaces(): Gee.List
    vfunc_get_document(): Document
    vfunc_get_parent(): Node
    vfunc_get_type_node(): NodeType
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::childs", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::childs", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GNode_ConstructProps)
    _init (config?: GNode_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static to_gnode(doc: GDocument, node?: object | null): Node
    static copy(doc: Document, node: Node, source: Node, deep: boolean): boolean
    static $gtype: GObject.Type
}
export interface GProcessingInstruction_ConstructProps extends GNode_ConstructProps {
}
export class GProcessingInstruction {
    /* Properties of GXml-0.10.GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly type_node: NodeType
    readonly name: string
    value: string
    /* Properties of GXml-0.10.GXml.ProcessingInstruction */
    readonly target: string
    readonly data: string
    /* Fields of GXml-0.10.GXml.GProcessingInstruction */
    parent_instance: GNode
    priv: GProcessingInstructionPrivate
    /* Fields of GXml-0.10.GXml.GNode */
    _doc: GDocument
    _node: object | null
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.GNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    get_internal_node(): object | null
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_namespaces(): Gee.List
    get_document(): Document
    get_parent(): Node
    get_type_node(): NodeType
    get_name(): string
    get_value(): string
    set_value(value: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.ProcessingInstruction */
    get_target(): string
    get_data(): string
    /* Virtual methods of GXml-0.10.GXml.GProcessingInstruction */
    vfunc_get_target(): string
    vfunc_get_data(): string
    /* Virtual methods of GXml-0.10.GXml.GNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_namespaces(): Gee.List
    vfunc_get_document(): Document
    vfunc_get_parent(): Node
    vfunc_get_type_node(): NodeType
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::target", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::data", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GProcessingInstruction_ConstructProps)
    _init (config?: GProcessingInstruction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: GDocument, node?: object | null): GProcessingInstruction
    static $gtype: GObject.Type
}
export interface GText_ConstructProps extends GNode_ConstructProps {
}
export class GText {
    /* Properties of GXml-0.10.GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly type_node: NodeType
    readonly name: string
    value: string
    /* Properties of GXml-0.10.GXml.Text */
    readonly str: string
    /* Fields of GXml-0.10.GXml.GText */
    parent_instance: GNode
    priv: GTextPrivate
    /* Fields of GXml-0.10.GXml.GNode */
    _doc: GDocument
    _node: object | null
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml-0.10.GXml.GNode */
    set_namespace(uri: string, prefix?: string | null): boolean
    to_string(): string
    get_internal_node(): object | null
    get_attrs(): Gee.Map
    get_children(): Gee.BidirList
    get_namespaces(): Gee.List
    get_document(): Document
    get_parent(): Node
    get_type_node(): NodeType
    get_name(): string
    get_value(): string
    set_value(value: string): void
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.10.GXml.Text */
    get_str(): string
    /* Virtual methods of GXml-0.10.GXml.GText */
    vfunc_get_str(): string
    /* Virtual methods of GXml-0.10.GXml.GNode */
    vfunc_set_namespace(uri: string, prefix?: string | null): boolean
    vfunc_to_string(): string
    vfunc_get_attrs(): Gee.Map
    vfunc_get_children(): Gee.BidirList
    vfunc_get_namespaces(): Gee.List
    vfunc_get_document(): Document
    vfunc_get_parent(): Node
    vfunc_get_type_node(): NodeType
    vfunc_get_name(): string
    vfunc_get_value(): string
    vfunc_set_value(value: string): void
    vfunc_get(key: string): Node | null
    vfunc_get_elements_by_property_value(property: string, value: string): ElementList
    vfunc_ns_prefix(): string
    vfunc_ns_uri(): string
    vfunc_get_childs(): Gee.BidirList
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attrs", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::children", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespaces", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-node", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::str", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GText_ConstructProps)
    _init (config?: GText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: GDocument, node?: object | null): GText
    static $gtype: GObject.Type
}
export interface GHashMapAttr_ConstructProps extends Gee.AbstractMap_ConstructProps {
}
export class GHashMapAttr {
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    readonly read_only_view: Gee.Map
    /* Fields of GXml-0.10.GXml.GHashMapAttr */
    parent_instance: Gee.AbstractMap
    priv: GHashMapAttrPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractMap */
    has_key(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    map_iterator(): Gee.MapIterator
    clear(): void
    foreach(f: Gee.ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_size(): number
    get_read_only(): boolean
    get_keys(): Gee.Set
    get_values(): Gee.Collection
    get_entries(): Gee.Set
    get_read_only_view(): Gee.Map
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gee-0.8.Gee.AbstractMap */
    vfunc_has_key(key?: object | null): boolean
    vfunc_has(key?: object | null, value?: object | null): boolean
    vfunc_get(key?: object | null): object | null
    vfunc_set(key?: object | null, value?: object | null): void
    vfunc_unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_map_iterator(): Gee.MapIterator
    vfunc_clear(): void
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_keys(): Gee.Set
    vfunc_get_values(): Gee.Collection
    vfunc_get_entries(): Gee.Set
    vfunc_get_read_only_view(): Gee.Map
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_iterator(): Gee.Iterator
    vfunc_set_all(map: Gee.Map): void
    vfunc_unset_all(map: Gee.Map): boolean
    vfunc_has_all(map: Gee.Map): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GHashMapAttr_ConstructProps)
    _init (config?: GHashMapAttr_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: GDocument, node?: object | null): GHashMapAttr
    static $gtype: GObject.Type
}
export interface GHashMapAttrEntry_ConstructProps extends Gee.MapEntry_ConstructProps {
}
export class GHashMapAttrEntry {
    /* Properties of Gee-0.8.Gee.MapEntry */
    readonly key: object
    value: object
    readonly read_only: boolean
    /* Fields of GXml-0.10.GXml.GHashMapAttrEntry */
    parent_instance: Gee.MapEntry
    priv: GHashMapAttrEntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.MapEntry */
    get_key(): object | null
    get_value(): object | null
    set_value(value?: object | null): void
    get_read_only(): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of Gee-0.8.Gee.MapEntry */
    vfunc_get_key(): object | null
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_get_read_only(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::key", callback: (($obj: GHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: GHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: GHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: GHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: GHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GHashMapAttrEntry_ConstructProps)
    _init (config?: GHashMapAttrEntry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: GDocument, attr?: object | null): GHashMapAttrEntry
    static $gtype: GObject.Type
}
export interface GHashMapAttrIterator_ConstructProps extends GObject.Object_ConstructProps {
}
export class GHashMapAttrIterator {
    /* Properties of Gee-0.8.Gee.MapIterator */
    readonly valid: boolean
    readonly mutable: boolean
    readonly read_only: boolean
    /* Fields of GXml-0.10.GXml.GHashMapAttrIterator */
    parent_instance: GObject.Object
    priv: GHashMapAttrIteratorPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Gee-0.8.Gee.MapIterator */
    next(): boolean
    has_next(): boolean
    get_key(): object | null
    get_value(): object | null
    set_value(value?: object | null): void
    unset(): void
    fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldMapFunc, seed?: object | null): object | null
    foreach(f: Gee.ForallMapFunc): boolean
    get_valid(): boolean
    get_mutable(): boolean
    get_read_only(): boolean
    /* Virtual methods of GXml-0.10.GXml.GHashMapAttrIterator */
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get_key(): object | null
    vfunc_get_value(): object | null
    vfunc_set_value(value?: object | null): void
    vfunc_unset(): void
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldMapFunc, seed?: object | null): object | null
    vfunc_foreach(f: Gee.ForallMapFunc): boolean
    vfunc_get_valid(): boolean
    vfunc_get_mutable(): boolean
    vfunc_get_read_only(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::valid", callback: (($obj: GHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: GHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mutable", callback: (($obj: GHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mutable", callback: (($obj: GHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: GHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: GHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GHashMapAttrIterator_ConstructProps)
    _init (config?: GHashMapAttrIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: GDocument, node?: object | null): GHashMapAttrIterator
    static $gtype: GObject.Type
}
export interface GListChildren_ConstructProps extends Gee.AbstractBidirList_ConstructProps {
}
export class GListChildren {
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly read_only_view: Gee.BidirList
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    /* Fields of GXml-0.10.GXml.GListChildren */
    parent_instance: Gee.AbstractBidirList
    priv: GListChildrenPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
    bidir_list_iterator(): Gee.BidirListIterator
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_read_only_view(): Gee.BidirList
    /* Methods of Gee-0.8.Gee.AbstractList */
    list_iterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    get_read_only_view(): Gee.List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Gee.Collection
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.GListChildren */
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractBidirList */
    vfunc_bidir_list_iterator(): Gee.BidirListIterator
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractList */
    vfunc_list_iterator(): Gee.ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): Gee.List | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Gee.Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Gee.Iterator
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Gee.Collection): boolean
    vfunc_contains_all(collection: Gee.Collection): boolean
    vfunc_remove_all(collection: Gee.Collection): boolean
    vfunc_retain_all(collection: Gee.Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Gee.Iterator): boolean
    vfunc_contains_all_iterator(iter: Gee.Iterator): boolean
    vfunc_remove_all_iterator(iter: Gee.Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GListChildren, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: GListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: GListChildren, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: GListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: GListChildren, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: GListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: GListChildren, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GListChildren_ConstructProps)
    _init (config?: GListChildren_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: GDocument, node?: object | null): GListChildren
    static $gtype: GObject.Type
}
export interface GListChildrenIterator_ConstructProps extends GObject.Object_ConstructProps {
}
export class GListChildrenIterator {
    /* Properties of Gee-0.8.Gee.Iterator */
    readonly valid: boolean
    readonly read_only: boolean
    /* Fields of GXml-0.10.GXml.GListChildrenIterator */
    parent_instance: GObject.Object
    priv: GListChildrenIteratorPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Gee-0.8.Gee.Traversable */
    foreach(f: Gee.ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    filter(pred: Gee.Predicate): Gee.Iterator
    chop(offset: number, length: number): Gee.Iterator
    flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    tee(forks: number): Gee.Iterator[]
    first_match(pred: Gee.Predicate): object | null
    any_match(pred: Gee.Predicate): boolean
    all_match(pred: Gee.Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    get_element_type(): GObject.Type
    /* Methods of Gee-0.8.Gee.Iterator */
    next(): boolean
    has_next(): boolean
    get(): object | null
    remove(): void
    get_valid(): boolean
    get_read_only(): boolean
    /* Methods of Gee-0.8.Gee.BidirIterator */
    previous(): boolean
    has_previous(): boolean
    first(): boolean
    last(): boolean
    /* Methods of Gee-0.8.Gee.ListIterator */
    set(item?: object | null): void
    add(item?: object | null): void
    index(): number
    /* Methods of Gee-0.8.Gee.BidirListIterator */
    insert(item?: object | null): void
    /* Virtual methods of GXml-0.10.GXml.GListChildrenIterator */
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    vfunc_get_valid(): boolean
    vfunc_get_read_only(): boolean
    vfunc_previous(): boolean
    vfunc_has_previous(): boolean
    vfunc_first(): boolean
    vfunc_last(): boolean
    vfunc_set(item?: object | null): void
    vfunc_add(item?: object | null): void
    vfunc_index(): number
    vfunc_insert(item?: object | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::valid", callback: (($obj: GListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: GListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: GListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: GListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GListChildrenIterator_ConstructProps)
    _init (config?: GListChildrenIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: GDocument, node?: object | null): GListChildrenIterator
    static unfold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.UnfoldFunc, current?: Gee.Lazy | null): Gee.Iterator
    static concat(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, iters: Gee.Iterator): Gee.Iterator
    static $gtype: GObject.Type
}
export interface GListNamespaces_ConstructProps extends Gee.AbstractList_ConstructProps {
}
export class GListNamespaces {
    /* Properties of Gee-0.8.Gee.AbstractList */
    readonly read_only_view: Gee.List
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    /* Fields of GXml-0.10.GXml.GListNamespaces */
    parent_instance: Gee.AbstractList
    priv: GListNamespacesPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gee-0.8.Gee.AbstractList */
    list_iterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    reserved0(): void
    reserved1(): void
    reserved2(): void
    reserved3(): void
    reserved4(): void
    reserved5(): void
    reserved6(): void
    reserved7(): void
    reserved8(): void
    reserved9(): void
    get_read_only_view(): Gee.List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Gee.Collection
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Virtual methods of GXml-0.10.GXml.GListNamespaces */
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee-0.8.Gee.AbstractList */
    vfunc_list_iterator(): Gee.ListIterator
    vfunc_get(index: number): object | null
    vfunc_set(index: number, item?: object | null): void
    vfunc_index_of(item?: object | null): number
    vfunc_insert(index: number, item?: object | null): void
    vfunc_remove_at(index: number): object | null
    vfunc_slice(start: number, stop: number): Gee.List | null
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_first(): object | null
    vfunc_last(): object | null
    vfunc_insert_all(index: number, collection: Gee.Collection): void
    vfunc_sort(compare_func: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee-0.8.Gee.AbstractCollection */
    vfunc_contains(item?: object | null): boolean
    vfunc_add(item?: object | null): boolean
    vfunc_remove(item?: object | null): boolean
    vfunc_clear(): void
    vfunc_iterator(): Gee.Iterator
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_reserved0(): void
    vfunc_reserved1(): void
    vfunc_reserved2(): void
    vfunc_reserved3(): void
    vfunc_reserved4(): void
    vfunc_reserved5(): void
    vfunc_reserved6(): void
    vfunc_reserved7(): void
    vfunc_reserved8(): void
    vfunc_reserved9(): void
    vfunc_get_size(): number
    vfunc_get_read_only(): boolean
    vfunc_get_read_only_view(): Gee.Collection
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_add_all(collection: Gee.Collection): boolean
    vfunc_contains_all(collection: Gee.Collection): boolean
    vfunc_remove_all(collection: Gee.Collection): boolean
    vfunc_retain_all(collection: Gee.Collection): boolean
    vfunc_to_array(): object[]
    vfunc_add_all_array(array: object[]): boolean
    vfunc_contains_all_array(array: object[]): boolean
    vfunc_remove_all_array(array: object[]): boolean
    vfunc_add_all_iterator(iter: Gee.Iterator): boolean
    vfunc_contains_all_iterator(iter: Gee.Iterator): boolean
    vfunc_remove_all_iterator(iter: Gee.Iterator): boolean
    vfunc_get_is_empty(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GListNamespaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GListNamespaces, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::read-only-view", callback: (($obj: GListNamespaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: GListNamespaces, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: GListNamespaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: GListNamespaces, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: GListNamespaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: GListNamespaces, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GListNamespaces_ConstructProps)
    _init (config?: GListNamespaces_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: GDocument, node?: object | null): GListNamespaces
    static $gtype: GObject.Type
}
export interface GListNamespacesIterator_ConstructProps extends GObject.Object_ConstructProps {
}
export class GListNamespacesIterator {
    /* Properties of Gee-0.8.Gee.Iterator */
    readonly valid: boolean
    readonly read_only: boolean
    /* Fields of GXml-0.10.GXml.GListNamespacesIterator */
    parent_instance: GObject.Object
    priv: GListNamespacesIteratorPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of Gee-0.8.Gee.Traversable */
    foreach(f: Gee.ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    filter(pred: Gee.Predicate): Gee.Iterator
    chop(offset: number, length: number): Gee.Iterator
    flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    tee(forks: number): Gee.Iterator[]
    first_match(pred: Gee.Predicate): object | null
    any_match(pred: Gee.Predicate): boolean
    all_match(pred: Gee.Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    get_element_type(): GObject.Type
    /* Methods of Gee-0.8.Gee.Iterator */
    next(): boolean
    has_next(): boolean
    get(): object | null
    remove(): void
    get_valid(): boolean
    get_read_only(): boolean
    /* Methods of Gee-0.8.Gee.ListIterator */
    set(item?: object | null): void
    add(item?: object | null): void
    index(): number
    /* Virtual methods of GXml-0.10.GXml.GListNamespacesIterator */
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_next(): boolean
    vfunc_has_next(): boolean
    vfunc_get(): object | null
    vfunc_remove(): void
    vfunc_get_valid(): boolean
    vfunc_get_read_only(): boolean
    vfunc_set(item?: object | null): void
    vfunc_add(item?: object | null): void
    vfunc_index(): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GListNamespacesIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GListNamespacesIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::valid", callback: (($obj: GListNamespacesIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: GListNamespacesIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: GListNamespacesIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: GListNamespacesIterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GListNamespacesIterator_ConstructProps)
    _init (config?: GListNamespacesIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node?: object | null): GListNamespacesIterator
    static unfold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.UnfoldFunc, current?: Gee.Lazy | null): Gee.Iterator
    static concat(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, iters: Gee.Iterator): Gee.Iterator
    static $gtype: GObject.Type
}
export abstract class ElementListClass {
    /* Fields of GXml-0.10.GXml.ElementListClass */
    parent_class: Gee.ArrayListClass
    static name: string
}
export class ElementListPrivate {
    static name: string
}
export abstract class NodeListClass {
    /* Fields of GXml-0.10.GXml.NodeListClass */
    parent_class: Gee.ArrayListClass
    static name: string
}
export class NodeListPrivate {
    static name: string
}
export abstract class xAttrClass {
    /* Fields of GXml-0.10.GXml.xAttrClass */
    parent_class: BackedNodeClass
    static name: string
}
export class xAttrPrivate {
    static name: string
}
export abstract class BackedNodeClass {
    /* Fields of GXml-0.10.GXml.BackedNodeClass */
    parent_class: xNodeClass
    static name: string
}
export class BackedNodePrivate {
    static name: string
}
export abstract class xCDATASectionClass {
    /* Fields of GXml-0.10.GXml.xCDATASectionClass */
    parent_class: xTextClass
    static name: string
}
export class xCDATASectionPrivate {
    static name: string
}
export abstract class xCharacterDataClass {
    /* Fields of GXml-0.10.GXml.xCharacterDataClass */
    parent_class: BackedNodeClass
    static name: string
}
export class xCharacterDataPrivate {
    static name: string
}
export abstract class xCommentClass {
    /* Fields of GXml-0.10.GXml.xCommentClass */
    parent_class: xCharacterDataClass
    static name: string
}
export class xCommentPrivate {
    static name: string
}
export abstract class DocumentFragmentClass {
    /* Fields of GXml-0.10.GXml.DocumentFragmentClass */
    parent_class: BackedNodeClass
    static name: string
}
export class DocumentFragmentPrivate {
    static name: string
}
export abstract class xDocumentTypeClass {
    /* Fields of GXml-0.10.GXml.xDocumentTypeClass */
    parent_class: xNodeClass
    static name: string
}
export class xDocumentTypePrivate {
    static name: string
}
export abstract class xDocumentClass {
    /* Fields of GXml-0.10.GXml.xDocumentClass */
    parent_class: xNodeClass
    static name: string
}
export class xDocumentPrivate {
    static name: string
}
export abstract class xElementClass {
    /* Fields of GXml-0.10.GXml.xElementClass */
    parent_class: BackedNodeClass
    static name: string
}
export class xElementPrivate {
    static name: string
}
export abstract class EntityClass {
    /* Fields of GXml-0.10.GXml.EntityClass */
    parent_class: xNodeClass
    static name: string
}
export class EntityPrivate {
    static name: string
}
export abstract class EntityReferenceClass {
    /* Fields of GXml-0.10.GXml.EntityReferenceClass */
    parent_class: xNodeClass
    static name: string
}
export class EntityReferencePrivate {
    static name: string
}
export abstract class ImplementationClass {
    /* Fields of GXml-0.10.GXml.ImplementationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ImplementationPrivate {
    static name: string
}
export abstract class AbstractNamedAttrMapClass {
    /* Fields of GXml-0.10.GXml.AbstractNamedAttrMapClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class AbstractNamedAttrMapPrivate {
    static name: string
}
export abstract class AbstractNamedAttrMapEntryClass {
    /* Fields of GXml-0.10.GXml.AbstractNamedAttrMapEntryClass */
    parent_class: Gee.MapEntryClass
    static name: string
}
export class AbstractNamedAttrMapEntryPrivate {
    static name: string
}
export abstract class AbstractNamedAttrMapIteratorClass {
    /* Fields of GXml-0.10.GXml.AbstractNamedAttrMapIteratorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class AbstractNamedAttrMapIteratorPrivate {
    static name: string
}
export abstract class NamedAttrMapClass {
    /* Fields of GXml-0.10.GXml.NamedAttrMapClass */
    parent_class: AbstractNamedAttrMapClass
    static name: string
}
export class NamedAttrMapPrivate {
    static name: string
}
export abstract class NamespaceAttrClass {
    /* Fields of GXml-0.10.GXml.NamespaceAttrClass */
    parent_class: xNodeClass
    static name: string
}
export class NamespaceAttrPrivate {
    static name: string
}
export abstract class xNodeClass {
    /* Fields of GXml-0.10.GXml.xNodeClass */
    parent_class: GObject.ObjectClass
    add_namespace_attr: (self: xNode, uri: string, namespace_prefix?: string | null) => NamespaceAttr | null
    set_namespace: (self: xNode, uri: string, namespace_prefix?: string | null) => boolean
    insert_before: (self: xNode, new_child: xNode, ref_child?: xNode | null) => xNode | null
    replace_child: (self: xNode, new_child: xNode, old_child: xNode) => xNode | null
    remove_child: (self: xNode, old_child: xNode) => xNode | null
    append_child: (self: xNode, new_child: xNode) => xNode | null
    has_child_nodes: (self: xNode) => boolean
    clone_node: (self: xNode, deep: boolean) => xNode | null
    stringify: (self: xNode, format: boolean, level: number) => string
    to_string: (self: xNode) => string
    static name: string
}
export class xNodePrivate {
    static name: string
}
export abstract class xNotationClass {
    /* Fields of GXml-0.10.GXml.xNotationClass */
    parent_class: xNodeClass
    static name: string
}
export class xNotationPrivate {
    static name: string
}
export abstract class xProcessingInstructionClass {
    /* Fields of GXml-0.10.GXml.xProcessingInstructionClass */
    parent_class: xNodeClass
    static name: string
}
export class xProcessingInstructionPrivate {
    static name: string
}
export abstract class xTextClass {
    /* Fields of GXml-0.10.GXml.xTextClass */
    parent_class: xCharacterDataClass
    static name: string
}
export class xTextPrivate {
    static name: string
}
export abstract class SerializableBoolClass {
    /* Fields of GXml-0.10.GXml.SerializableBoolClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SerializableBoolPrivate {
    static name: string
}
export abstract class SerializableDoubleClass {
    /* Fields of GXml-0.10.GXml.SerializableDoubleClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SerializableDoublePrivate {
    static name: string
}
export abstract class SerializableFloatClass {
    /* Fields of GXml-0.10.GXml.SerializableFloatClass */
    parent_class: SerializableDoubleClass
    static name: string
}
export class SerializableFloatPrivate {
    static name: string
}
export abstract class SerializableEnumClass {
    /* Fields of GXml-0.10.GXml.SerializableEnumClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SerializableEnumPrivate {
    static name: string
}
export abstract class SerializableIntClass {
    /* Fields of GXml-0.10.GXml.SerializableIntClass */
    parent_class: SerializableDoubleClass
    static name: string
}
export class SerializableIntPrivate {
    static name: string
}
export abstract class SerializableValueListClass {
    /* Fields of GXml-0.10.GXml.SerializableValueListClass */
    parent_class: GObject.ObjectClass
    get_values: (self: SerializableValueList) => Gee.List
    add_values: (self: SerializableValueList, vals: string[]) => void
    get_value_at: (self: SerializableValueList, index: number) => string | null
    select_value_at: (self: SerializableValueList, index: number) => void
    get_values_array: (self: SerializableValueList) => string[]
    is_value: (self: SerializableValueList) => boolean
    static name: string
}
export class SerializableValueListPrivate {
    static name: string
}
export class Enumeration {
    static name: string
    static new(): Enumeration
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Enumeration
    static get_nick(enumeration: GObject.Type, val: number): string
    static get_nick_camelcase(enumeration: GObject.Type, val: number): string
    static get_string(enumeration: GObject.Type, val: number, use_nick: boolean, camelcase: boolean): string
    static parse(enumeration: GObject.Type, val: string): GObject.EnumValue | null
    static to_array(enumeration: GObject.Type): GObject.EnumValue[]
    static parse_integer(enumeration: GObject.Type, val: number): GObject.EnumValue | null
    static to_string_array(enumeration: GObject.Type): string[]
}
export abstract class SerializableObjectModelClass {
    /* Fields of GXml-0.10.GXml.SerializableObjectModelClass */
    parent_class: GObject.ObjectClass
    get_enable_unknown_serializable_property: (self: SerializableObjectModel) => boolean
    serialize_use_xml_node_value: (self: SerializableObjectModel) => boolean
    property_use_nick: (self: SerializableObjectModel) => boolean
    set_default_namespace: (self: SerializableObjectModel, node: Node) => boolean
    node_name: (self: SerializableObjectModel) => string
    find_property_spec: (self: SerializableObjectModel, property_name: string) => GObject.ParamSpec | null
    list_serializable_properties: (self: SerializableObjectModel) => GObject.ParamSpec[]
    serialize: (self: SerializableObjectModel, node: Node) => Node | null
    serialize_property: (self: SerializableObjectModel, element: Node, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableObjectModel, node: Node) => boolean
    deserialize_property: (self: SerializableObjectModel, property_node: Node) => boolean
    to_string: (self: SerializableObjectModel) => string
    static name: string
}
export class SerializableObjectModelPrivate {
    static name: string
}
export abstract class SerializableTreeMapClass {
    /* Fields of GXml-0.10.GXml.SerializableTreeMapClass */
    parent_class: Gee.TreeMapClass
    deserialize_proceed: (self: SerializableTreeMap) => boolean
    deserialized: (self: SerializableTreeMap) => boolean
    deserialize_node: (self: SerializableTreeMap, node: Node) => boolean
    deserialize_children: (self: SerializableTreeMap) => boolean
    set_default_namespace: (self: SerializableTreeMap, node: Node) => boolean
    serialize_use_xml_node_value: (self: SerializableTreeMap) => boolean
    property_use_nick: (self: SerializableTreeMap) => boolean
    node_name: (self: SerializableTreeMap) => string
    find_property_spec: (self: SerializableTreeMap, property_name: string) => GObject.ParamSpec | null
    list_serializable_properties: (self: SerializableTreeMap) => GObject.ParamSpec[]
    serialize: (self: SerializableTreeMap, node: Node) => Node | null
    serialize_property: (self: SerializableTreeMap, element: Node, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableTreeMap, node: Node) => boolean
    deserialize_property: (self: SerializableTreeMap, property_node: Node) => boolean
    static name: string
}
export class SerializableTreeMapPrivate {
    static name: string
}
export abstract class SerializableHashMapClass {
    /* Fields of GXml-0.10.GXml.SerializableHashMapClass */
    parent_class: Gee.HashMapClass
    deserialize_proceed: (self: SerializableHashMap) => boolean
    deserialized: (self: SerializableHashMap) => boolean
    deserialize_node: (self: SerializableHashMap, node: Node) => boolean
    deserialize_children: (self: SerializableHashMap) => boolean
    set_default_namespace: (self: SerializableHashMap, node: Node) => boolean
    get_enable_unknown_serializable_property: (self: SerializableHashMap) => boolean
    serialize_use_xml_node_value: (self: SerializableHashMap) => boolean
    property_use_nick: (self: SerializableHashMap) => boolean
    node_name: (self: SerializableHashMap) => string
    find_property_spec: (self: SerializableHashMap, property_name: string) => GObject.ParamSpec | null
    list_serializable_properties: (self: SerializableHashMap) => GObject.ParamSpec[]
    serialize: (self: SerializableHashMap, node: Node) => Node | null
    serialize_property: (self: SerializableHashMap, element: Node, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableHashMap, node: Node) => boolean
    deserialize_property: (self: SerializableHashMap, property_node: Node) => boolean
    static name: string
}
export class SerializableHashMapPrivate {
    static name: string
}
export abstract class SerializableDualKeyMapClass {
    /* Fields of GXml-0.10.GXml.SerializableDualKeyMapClass */
    parent_class: GObject.ObjectClass
    deserialize_proceed: (self: SerializableDualKeyMap) => boolean
    deserialized: (self: SerializableDualKeyMap) => boolean
    deserialize_node: (self: SerializableDualKeyMap, node: Node) => boolean
    deserialize_children: (self: SerializableDualKeyMap) => boolean
    set_default_namespace: (self: SerializableDualKeyMap, node: Node) => boolean
    get_enable_unknown_serializable_property: (self: SerializableDualKeyMap) => boolean
    serialize_use_xml_node_value: (self: SerializableDualKeyMap) => boolean
    property_use_nick: (self: SerializableDualKeyMap) => boolean
    node_name: (self: SerializableDualKeyMap) => string
    find_property_spec: (self: SerializableDualKeyMap, property_name: string) => GObject.ParamSpec | null
    list_serializable_properties: (self: SerializableDualKeyMap) => GObject.ParamSpec[]
    serialize: (self: SerializableDualKeyMap, node: Node) => Node | null
    serialize_property: (self: SerializableDualKeyMap, element: Node, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableDualKeyMap, node: Node) => boolean
    deserialize_property: (self: SerializableDualKeyMap, property_node: Node) => boolean
    static name: string
}
export class SerializableDualKeyMapPrivate {
    static name: string
}
export abstract class SerializableArrayListClass {
    /* Fields of GXml-0.10.GXml.SerializableArrayListClass */
    parent_class: Gee.ArrayListClass
    deserialize_proceed: (self: SerializableArrayList) => boolean
    deserialized: (self: SerializableArrayList) => boolean
    deserialize_node: (self: SerializableArrayList, node: Node) => boolean
    deserialize_children: (self: SerializableArrayList) => boolean
    set_default_namespace: (self: SerializableArrayList, node: Node) => boolean
    serialize_use_xml_node_value: (self: SerializableArrayList) => boolean
    property_use_nick: (self: SerializableArrayList) => boolean
    node_name: (self: SerializableArrayList) => string
    find_property_spec: (self: SerializableArrayList, property_name: string) => GObject.ParamSpec | null
    list_serializable_properties: (self: SerializableArrayList) => GObject.ParamSpec[]
    serialize: (self: SerializableArrayList, node: Node) => Node | null
    serialize_property: (self: SerializableArrayList, element: Node, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableArrayList, node: Node) => boolean
    deserialize_property: (self: SerializableArrayList, property_node: Node) => boolean
    static name: string
}
export class SerializableArrayListPrivate {
    static name: string
}
export abstract class SerializableContainerClass {
    /* Fields of GXml-0.10.GXml.SerializableContainerClass */
    parent_class: SerializableObjectModelClass
    init_containers: (self: SerializableContainer) => void
    static name: string
}
export class SerializableContainerPrivate {
    static name: string
}
export abstract class TAttributeClass {
    /* Fields of GXml-0.10.GXml.TAttributeClass */
    parent_class: TNodeClass
    static name: string
}
export class TAttributePrivate {
    static name: string
}
export abstract class TCommentClass {
    /* Fields of GXml-0.10.GXml.TCommentClass */
    parent_class: TNodeClass
    static name: string
}
export class TCommentPrivate {
    static name: string
}
export abstract class TCDATAClass {
    /* Fields of GXml-0.10.GXml.TCDATAClass */
    parent_class: TNodeClass
    static name: string
}
export class TCDATAPrivate {
    static name: string
}
export abstract class TDocumentClass {
    /* Fields of GXml-0.10.GXml.TDocumentClass */
    parent_class: TNodeClass
    static name: string
}
export class TDocumentPrivate {
    static name: string
}
export abstract class TElementClass {
    /* Fields of GXml-0.10.GXml.TElementClass */
    parent_class: TNodeClass
    static name: string
}
export class TElementPrivate {
    static name: string
}
export abstract class TNamespaceClass {
    /* Fields of GXml-0.10.GXml.TNamespaceClass */
    parent_class: TNodeClass
    static name: string
}
export class TNamespacePrivate {
    static name: string
}
export abstract class TNodeClass {
    /* Fields of GXml-0.10.GXml.TNodeClass */
    parent_class: GObject.ObjectClass
    set_namespace: (self: TNode, uri: string, prefix?: string | null) => boolean
    to_string: (self: TNode) => string
    set_parent: (self: TNode, node: Node) => void
    static name: string
}
export class TNodePrivate {
    static name: string
}
export abstract class TNodeTChildrenListClass {
    /* Fields of GXml-0.10.GXml.TNodeTChildrenListClass */
    parent_class: Gee.AbstractBidirListClass
    static name: string
}
export class TNodeTChildrenListPrivate {
    static name: string
}
export abstract class TProcessingInstructionClass {
    /* Fields of GXml-0.10.GXml.TProcessingInstructionClass */
    parent_class: TNodeClass
    static name: string
}
export class TProcessingInstructionPrivate {
    static name: string
}
export abstract class TTextClass {
    /* Fields of GXml-0.10.GXml.TTextClass */
    parent_class: TNodeClass
    static name: string
}
export class TTextPrivate {
    static name: string
}
export abstract class HtmlDocumentClass {
    /* Fields of GXml-0.10.GXml.HtmlDocumentClass */
    parent_class: xDocumentClass
    static name: string
}
export class HtmlDocumentPrivate {
    static name: string
}
export abstract class GAttributeClass {
    /* Fields of GXml-0.10.GXml.GAttributeClass */
    parent_class: GNodeClass
    static name: string
}
export class GAttributePrivate {
    static name: string
}
export abstract class GCommentClass {
    /* Fields of GXml-0.10.GXml.GCommentClass */
    parent_class: GNodeClass
    static name: string
}
export class GCommentPrivate {
    static name: string
}
export abstract class GCDATAClass {
    /* Fields of GXml-0.10.GXml.GCDATAClass */
    parent_class: GNodeClass
    static name: string
}
export class GCDATAPrivate {
    static name: string
}
export abstract class GDocumentClass {
    /* Fields of GXml-0.10.GXml.GDocumentClass */
    parent_class: GNodeClass
    save: (self: GDocument, cancellable?: Gio.Cancellable | null) => boolean
    save_as: (self: GDocument, f: Gio.File, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
export class GDocumentPrivate {
    static name: string
}
export abstract class GElementClass {
    /* Fields of GXml-0.10.GXml.GElementClass */
    parent_class: GNodeClass
    static name: string
}
export class GElementPrivate {
    static name: string
}
export abstract class GNamespaceClass {
    /* Fields of GXml-0.10.GXml.GNamespaceClass */
    parent_class: GNodeClass
    static name: string
}
export class GNamespacePrivate {
    static name: string
}
export abstract class GNodeClass {
    /* Fields of GXml-0.10.GXml.GNodeClass */
    parent_class: GObject.ObjectClass
    set_namespace: (self: GNode, uri: string, prefix?: string | null) => boolean
    to_string: (self: GNode) => string
    static name: string
}
export class GNodePrivate {
    static name: string
}
export abstract class GProcessingInstructionClass {
    /* Fields of GXml-0.10.GXml.GProcessingInstructionClass */
    parent_class: GNodeClass
    static name: string
}
export class GProcessingInstructionPrivate {
    static name: string
}
export abstract class GTextClass {
    /* Fields of GXml-0.10.GXml.GTextClass */
    parent_class: GNodeClass
    static name: string
}
export class GTextPrivate {
    static name: string
}
export abstract class GHashMapAttrClass {
    /* Fields of GXml-0.10.GXml.GHashMapAttrClass */
    parent_class: Gee.AbstractMapClass
    static name: string
}
export class GHashMapAttrPrivate {
    static name: string
}
export abstract class GHashMapAttrEntryClass {
    /* Fields of GXml-0.10.GXml.GHashMapAttrEntryClass */
    parent_class: Gee.MapEntryClass
    static name: string
}
export class GHashMapAttrEntryPrivate {
    static name: string
}
export abstract class GHashMapAttrIteratorClass {
    /* Fields of GXml-0.10.GXml.GHashMapAttrIteratorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class GHashMapAttrIteratorPrivate {
    static name: string
}
export abstract class GListChildrenClass {
    /* Fields of GXml-0.10.GXml.GListChildrenClass */
    parent_class: Gee.AbstractBidirListClass
    static name: string
}
export class GListChildrenPrivate {
    static name: string
}
export abstract class GListChildrenIteratorClass {
    /* Fields of GXml-0.10.GXml.GListChildrenIteratorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class GListChildrenIteratorPrivate {
    static name: string
}
export abstract class GListNamespacesClass {
    /* Fields of GXml-0.10.GXml.GListNamespacesClass */
    parent_class: Gee.AbstractListClass
    static name: string
}
export class GListNamespacesPrivate {
    static name: string
}
export abstract class GListNamespacesIteratorClass {
    /* Fields of GXml-0.10.GXml.GListNamespacesIteratorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class GListNamespacesIteratorPrivate {
    static name: string
}
export abstract class AttributeIface {
    /* Fields of GXml-0.10.GXml.AttributeIface */
    parent_iface: GObject.TypeInterface
    get_namespace: (self: Attribute) => Namespace
    set_namespace: (self: Attribute, value: Namespace) => void
    get_prefix: (self: Attribute) => string
    static name: string
}
export abstract class CommentIface {
    /* Fields of GXml-0.10.GXml.CommentIface */
    parent_iface: GObject.TypeInterface
    get_str: (self: Comment) => string
    static name: string
}
export abstract class CDATAIface {
    /* Fields of GXml-0.10.GXml.CDATAIface */
    parent_iface: GObject.TypeInterface
    get_str: (self: CDATA) => string
    static name: string
}
export abstract class DocumentIface {
    /* Fields of GXml-0.10.GXml.DocumentIface */
    parent_iface: GObject.TypeInterface
    create_element: (self: Document, name: string) => Node
    create_text: (self: Document, text: string) => Node
    create_comment: (self: Document, text: string) => Node
    create_cdata: (self: Document, text: string) => Node
    create_pi: (self: Document, target: string, data: string) => Node
    save: (self: Document, cancellable?: Gio.Cancellable | null) => boolean
    save_as: (self: Document, f: Gio.File, cancellable?: Gio.Cancellable | null) => boolean
    get_indent: (self: Document) => boolean
    set_indent: (self: Document, value: boolean) => void
    get_ns_top: (self: Document) => boolean
    set_ns_top: (self: Document, value: boolean) => void
    get_prefix_default_ns: (self: Document) => boolean
    set_prefix_default_ns: (self: Document, value: boolean) => void
    get_backup: (self: Document) => boolean
    set_backup: (self: Document, value: boolean) => void
    get_root: (self: Document) => Node
    get_file: (self: Document) => Gio.File
    set_file: (self: Document, value: Gio.File) => void
    static name: string
}
export abstract class DocumentTypeIface {
    /* Fields of GXml-0.10.GXml.DocumentTypeIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class ElementIface {
    /* Fields of GXml-0.10.GXml.ElementIface */
    parent_iface: GObject.TypeInterface
    normalize: (self: Element) => void
    set_attr: (self: Element, name: string, value: string) => void
    get_attr: (self: Element, name: string) => Node
    remove_attr: (self: Element, name: string) => void
    set_ns_attr: (self: Element, ns: Namespace, name: string, value: string) => void
    get_ns_attr: (self: Element, name: string, uri: string) => Node
    get_tag_name: (self: Element) => string
    get_content: (self: Element) => string
    set_content: (self: Element, value: string) => void
    static name: string
}
export abstract class NamespaceIface {
    /* Fields of GXml-0.10.GXml.NamespaceIface */
    parent_iface: GObject.TypeInterface
    get_uri: (self: Namespace) => string
    get_prefix: (self: Namespace) => string
    static name: string
}
export abstract class NodeIface {
    /* Fields of GXml-0.10.GXml.NodeIface */
    parent_iface: GObject.TypeInterface
    get: (self: Node, key: string) => Node | null
    get_elements_by_property_value: (self: Node, property: string, value: string) => ElementList
    to_string: (self: Node) => string
    set_namespace: (self: Node, uri: string, prefix?: string | null) => boolean
    ns_prefix: (self: Node) => string
    ns_uri: (self: Node) => string
    get_namespaces: (self: Node) => Gee.List
    get_childs: (self: Node) => Gee.BidirList
    get_children: (self: Node) => Gee.BidirList
    get_attrs: (self: Node) => Gee.Map
    get_name: (self: Node) => string
    get_value: (self: Node) => string
    set_value: (self: Node, value: string) => void
    get_type_node: (self: Node) => NodeType
    get_document: (self: Node) => Document
    get_parent: (self: Node) => Node
    static name: string
}
export abstract class NotationIface {
    /* Fields of GXml-0.10.GXml.NotationIface */
    parent_iface: GObject.TypeInterface
    get_public_id: (self: Notation) => string | null
    get_external_id: (self: Notation) => string | null
    static name: string
}
export abstract class ProcessingInstructionIface {
    /* Fields of GXml-0.10.GXml.ProcessingInstructionIface */
    parent_iface: GObject.TypeInterface
    get_target: (self: ProcessingInstruction) => string
    get_data: (self: ProcessingInstruction) => string
    static name: string
}
export abstract class TextIface {
    /* Fields of GXml-0.10.GXml.TextIface */
    parent_iface: GObject.TypeInterface
    get_str: (self: Text) => string
    static name: string
}
export abstract class NamedNodeMapIface {
    /* Fields of GXml-0.10.GXml.NamedNodeMapIface */
    parent_iface: GObject.TypeInterface
    get_named_item: (self: NamedNodeMap, name: string) => object | null
    set_named_item: (self: NamedNodeMap, item?: object | null) => object | null
    remove_named_item: (self: NamedNodeMap, name: string) => object | null
    item: (self: NamedNodeMap, index: number) => object | null
    get_length: (self: NamedNodeMap) => number
    static name: string
}
export abstract class xNodeListIface {
    /* Fields of GXml-0.10.GXml.xNodeListIface */
    parent_iface: GObject.TypeInterface
    item: (self: xNodeList, idx: number) => xNode
    insert_before: (self: xNodeList, new_child: xNode, ref_child?: xNode | null) => xNode | null
    replace_child: (self: xNodeList, new_child: xNode, old_child: xNode) => xNode | null
    remove_child: (self: xNodeList, old_child: xNode) => xNode | null
    append_child: (self: xNodeList, new_child: xNode) => xNode | null
    to_string: (self: xNodeList, in_line: boolean) => string
    first: (self: xNodeList) => xNode
    last: (self: xNodeList) => xNode
    get: (self: xNodeList, n: number) => xNode
    get_length: (self: xNodeList) => number
    set_length: (self: xNodeList, value: number) => void
    static name: string
}
export abstract class SerializableIface {
    /* Fields of GXml-0.10.GXml.SerializableIface */
    parent_iface: GObject.TypeInterface
    get_enable_unknown_serializable_property: (self: Serializable) => boolean
    set_default_namespace: (self: Serializable, node: Node) => boolean
    serialize_use_xml_node_value: (self: Serializable) => boolean
    node_name: (self: Serializable) => string
    property_use_nick: (self: Serializable) => boolean
    serialize: (self: Serializable, node: Node) => Node | null
    serialize_property: (self: Serializable, element: Node, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: Serializable, node: Node) => boolean
    deserialize_property: (self: Serializable, property_node: Node) => boolean
    find_property_spec: (self: Serializable, property_name: string) => GObject.ParamSpec | null
    default_find_property_spec: (self: Serializable, property_name: string) => GObject.ParamSpec | null
    list_serializable_properties: (self: Serializable) => GObject.ParamSpec[]
    default_list_serializable_properties: (self: Serializable) => GObject.ParamSpec[]
    get_unknown_serializable_properties: (self: Serializable) => Gee.Map
    get_unknown_serializable_nodes: (self: Serializable) => Gee.Collection
    get_serialized_xml_node_value: (self: Serializable) => string | null
    set_serialized_xml_node_value: (self: Serializable, value?: string | null) => void
    static name: string
}
export abstract class SerializablePropertyIface {
    /* Fields of GXml-0.10.GXml.SerializablePropertyIface */
    parent_iface: GObject.TypeInterface
    get_serializable_property_value: (self: SerializableProperty) => string
    set_serializable_property_value: (self: SerializableProperty, val?: string | null) => void
    deserialize_property: (self: SerializableProperty, property_node: Node, prop: GObject.ParamSpec, nick: boolean) => boolean
    serialize_property: (self: SerializableProperty, property_node: Node, prop: GObject.ParamSpec, nick: boolean) => Node | null
    static name: string
}
export abstract class SerializableMapKeyIface {
    /* Fields of GXml-0.10.GXml.SerializableMapKeyIface */
    parent_iface: GObject.TypeInterface
    get_map_key: (self: SerializableMapKey) => object | null
    static name: string
}
export abstract class SerializableMapDualKeyIface {
    /* Fields of GXml-0.10.GXml.SerializableMapDualKeyIface */
    parent_iface: GObject.TypeInterface
    get_map_primary_key: (self: SerializableMapDualKey) => object | null
    get_map_secondary_key: (self: SerializableMapDualKey) => object | null
    static name: string
}
export abstract class SerializableCollectionIface {
    /* Fields of GXml-0.10.GXml.SerializableCollectionIface */
    parent_iface: GObject.TypeInterface
    deserialize_proceed: (self: SerializableCollection) => boolean
    deserialized: (self: SerializableCollection) => boolean
    deserialize_node: (self: SerializableCollection, node: Node) => boolean
    deserialize_children: (self: SerializableCollection) => boolean
    is_collection: (self: SerializableCollection) => boolean
    static name: string
}