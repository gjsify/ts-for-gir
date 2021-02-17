/**
 * GXml-0.10
 */

import "node"
import type { libxml2 } from './libxml2-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gio } from './Gio-2.0';
import type { Gee } from './Gee-0.8';

export declare namespace GXml {

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
    /* Properties of GXml.Attribute */
    namespace: Namespace
    readonly prefix: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Attribute */
    getNamespace(): Namespace
    setNamespace(value: Namespace): void
    getPrefix(): string
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
    /* Virtual methods of GXml.Attribute */
    vfuncGetNamespace(): Namespace
    vfuncSetNamespace(value: Namespace): void
    vfuncGetPrefix(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Attribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Attribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace", callback: (($obj: Attribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace", callback: (($obj: Attribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: Attribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Attribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Attribute_ConstructProps)
    _init (config?: Attribute_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Comment_ConstructProps extends GObject.Object_ConstructProps {
}
export class Comment {
    /* Properties of GXml.Comment */
    readonly str: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Comment */
    getStr(): string
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
    /* Virtual methods of GXml.Comment */
    vfuncGetStr(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::str", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Comment_ConstructProps)
    _init (config?: Comment_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CDATA_ConstructProps extends GObject.Object_ConstructProps {
}
export class CDATA {
    /* Properties of GXml.CDATA */
    readonly str: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.CDATA */
    getStr(): string
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
    /* Virtual methods of GXml.CDATA */
    vfuncGetStr(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CDATA, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::str", callback: (($obj: CDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: CDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CDATA_ConstructProps)
    _init (config?: CDATA_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Document_ConstructProps extends GObject.Object_ConstructProps {
    indent?: boolean
    nsTop?: boolean
    prefixDefaultNs?: boolean
    backup?: boolean
    file?: Gio.File
}
export class Document {
    /* Properties of GXml.Document */
    indent: boolean
    nsTop: boolean
    prefixDefaultNs: boolean
    backup: boolean
    readonly root: Node
    file: Gio.File
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Document */
    createElement(name: string): Node
    createText(text: string): Node
    createComment(text: string): Node
    createCdata(text: string): Node
    createPi(target: string, data: string): Node
    save(cancellable?: Gio.Cancellable | null): boolean
    saveAs(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    getIndent(): boolean
    setIndent(value: boolean): void
    getNsTop(): boolean
    setNsTop(value: boolean): void
    getPrefixDefaultNs(): boolean
    setPrefixDefaultNs(value: boolean): void
    getBackup(): boolean
    setBackup(value: boolean): void
    getRoot(): Node
    getFile(): Gio.File
    setFile(value: Gio.File): void
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
    /* Virtual methods of GXml.Document */
    vfuncCreateElement(name: string): Node
    vfuncCreateText(text: string): Node
    vfuncCreateComment(text: string): Node
    vfuncCreateCdata(text: string): Node
    vfuncCreatePi(target: string, data: string): Node
    vfuncSave(cancellable?: Gio.Cancellable | null): boolean
    vfuncSaveAs(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    vfuncGetIndent(): boolean
    vfuncSetIndent(value: boolean): void
    vfuncGetNsTop(): boolean
    vfuncSetNsTop(value: boolean): void
    vfuncGetPrefixDefaultNs(): boolean
    vfuncSetPrefixDefaultNs(value: boolean): void
    vfuncGetBackup(): boolean
    vfuncSetBackup(value: boolean): void
    vfuncGetRoot(): Node
    vfuncGetFile(): Gio.File
    vfuncSetFile(value: Gio.File): void
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
    connect(sigName: "notify::indent", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ns-top", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ns-top", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ns-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ns-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ns-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix-default-ns", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix-default-ns", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix-default-ns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix-default-ns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix-default-ns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backup", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backup", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static newDefault(): Document
    static newDefaultForPath(path: string): Document
    static newDefaultForFile(f: Gio.File): Document
    static $gtype: GObject.Type
}
export interface DocumentType_ConstructProps extends GObject.Object_ConstructProps {
}
export class DocumentType {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: DocumentType_ConstructProps)
    _init (config?: DocumentType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Element_ConstructProps extends GObject.Object_ConstructProps {
    content?: string
}
export class Element {
    /* Properties of GXml.Element */
    readonly tagName: string
    content: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Element */
    normalize(): void
    setAttr(name: string, value: string): void
    getAttr(name: string): Node
    removeAttr(name: string): void
    setNsAttr(ns: Namespace, name: string, value: string): void
    getNsAttr(name: string, uri: string): Node
    getTagName(): string
    getContent(): string
    setContent(value: string): void
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
    /* Virtual methods of GXml.Element */
    vfuncNormalize(): void
    vfuncSetAttr(name: string, value: string): void
    vfuncGetAttr(name: string): Node
    vfuncRemoveAttr(name: string): void
    vfuncSetNsAttr(ns: Namespace, name: string, value: string): void
    vfuncGetNsAttr(name: string, uri: string): Node
    vfuncGetTagName(): string
    vfuncGetContent(): string
    vfuncSetContent(value: string): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tag-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tag-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tag-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tag-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Element_ConstructProps)
    _init (config?: Element_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Namespace_ConstructProps extends GObject.Object_ConstructProps {
}
export class Namespace {
    /* Properties of GXml.Namespace */
    readonly uri: string
    readonly prefix: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Namespace */
    getUri(): string
    getPrefix(): string
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
    /* Virtual methods of GXml.Namespace */
    vfuncGetUri(): string
    vfuncGetPrefix(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Namespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Namespace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: Namespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Namespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: Namespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Namespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Namespace_ConstructProps)
    _init (config?: Namespace_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Node_ConstructProps extends GObject.Object_ConstructProps {
    value?: string
}
export class Node {
    /* Properties of GXml.Node */
    readonly namespaces: Gee.List
    readonly childs: Gee.BidirList
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly typeNode: NodeType
    readonly document: Document
    readonly parent: Node
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Node */
    get(key: string): Node | null
    getElementsByPropertyValue(property: string, value: string): ElementList
    toString(): string
    setNamespace(uri: string, prefix?: string | null): boolean
    nsPrefix(): string
    nsUri(): string
    getNamespaces(): Gee.List
    getChilds(): Gee.BidirList
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getTypeNode(): NodeType
    getDocument(): Document
    getParent(): Node
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
    /* Virtual methods of GXml.Node */
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncToString(): string
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetNamespaces(): Gee.List
    vfuncGetChilds(): Gee.BidirList
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    vfuncGetParent(): Node
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::childs", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::childs", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::childs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::childs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::childs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of GXml.Notation */
    readonly publicId: string
    readonly externalId: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Notation */
    getPublicId(): string | null
    getExternalId(): string | null
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
    /* Virtual methods of GXml.Notation */
    vfuncGetPublicId(): string | null
    vfuncGetExternalId(): string | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::public-id", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::public-id", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::public-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::public-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::public-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::external-id", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::external-id", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::external-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::external-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::external-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Notation_ConstructProps)
    _init (config?: Notation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ProcessingInstruction_ConstructProps extends GObject.Object_ConstructProps {
}
export class ProcessingInstruction {
    /* Properties of GXml.ProcessingInstruction */
    readonly target: string
    readonly data: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.ProcessingInstruction */
    getTarget(): string
    getData(): string
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
    /* Virtual methods of GXml.ProcessingInstruction */
    vfuncGetTarget(): string
    vfuncGetData(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::target", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProcessingInstruction_ConstructProps)
    _init (config?: ProcessingInstruction_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Text_ConstructProps extends GObject.Object_ConstructProps {
}
export class Text {
    /* Properties of GXml.Text */
    readonly str: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Text */
    getStr(): string
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
    /* Virtual methods of GXml.Text */
    vfuncGetStr(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::str", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Text_ConstructProps)
    _init (config?: Text_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NamedNodeMap_ConstructProps extends GObject.Object_ConstructProps {
}
export class NamedNodeMap {
    /* Properties of GXml.NamedNodeMap */
    readonly length: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.NamedNodeMap */
    getNamedItem(name: string): object | null
    setNamedItem(item?: object | null): object | null
    removeNamedItem(name: string): object | null
    item(index: number): object | null
    getLength(): number
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
    /* Virtual methods of GXml.NamedNodeMap */
    vfuncGetNamedItem(name: string): object | null
    vfuncSetNamedItem(item?: object | null): object | null
    vfuncRemoveNamedItem(name: string): object | null
    vfuncItem(index: number): object | null
    vfuncGetLength(): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: NamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: NamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NamedNodeMap_ConstructProps)
    _init (config?: NamedNodeMap_ConstructProps): void
    static $gtype: GObject.Type
}
export interface xNodeList_ConstructProps extends GObject.Object_ConstructProps {
    length?: number
}
export class xNodeList {
    /* Properties of GXml.xNodeList */
    length: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.xNodeList */
    item(idx: number): xNode
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    toString(inLine: boolean): string
    first(): xNode
    last(): xNode
    get(n: number): xNode
    getLength(): number
    setLength(value: number): void
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
    /* Virtual methods of GXml.xNodeList */
    vfuncItem(idx: number): xNode
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncToString(inLine: boolean): string
    vfuncFirst(): xNode
    vfuncLast(): xNode
    vfuncGet(n: number): xNode
    vfuncGetLength(): number
    vfuncSetLength(value: number): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: xNodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xNodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: xNodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: xNodeList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: xNodeList_ConstructProps)
    _init (config?: xNodeList_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Serializable_ConstructProps extends GObject.Object_ConstructProps {
    serializedXmlNodeValue?: string
}
export class Serializable {
    /* Properties of GXml.Serializable */
    readonly unknownSerializableProperties: Gee.Map
    readonly unknownSerializableNodes: Gee.Collection
    serializedXmlNodeValue: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Serializable */
    getEnableUnknownSerializableProperty(): boolean
    setDefaultNamespace(node: Node): boolean
    serializeUseXmlNodeValue(): boolean
    nodeName(): string
    propertyUseNick(): boolean
    serialize(node: Node): Node | null
    serializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): boolean
    deserializeProperty(propertyNode: Node): boolean
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    listSerializableProperties(): GObject.ParamSpec[]
    defaultListSerializableProperties(): GObject.ParamSpec[]
    getUnknownSerializableProperties(): Gee.Map
    getUnknownSerializableNodes(): Gee.Collection
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
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
    /* Virtual methods of GXml.Serializable */
    vfuncGetEnableUnknownSerializableProperty(): boolean
    vfuncSetDefaultNamespace(node: Node): boolean
    vfuncSerializeUseXmlNodeValue(): boolean
    vfuncNodeName(): string
    vfuncPropertyUseNick(): boolean
    vfuncSerialize(node: Node): Node | null
    vfuncSerializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    vfuncDeserialize(node: Node): boolean
    vfuncDeserializeProperty(propertyNode: Node): boolean
    vfuncFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncDefaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncListSerializableProperties(): GObject.ParamSpec[]
    vfuncDefaultListSerializableProperties(): GObject.ParamSpec[]
    vfuncGetUnknownSerializableProperties(): Gee.Map
    vfuncGetUnknownSerializableNodes(): Gee.Collection
    vfuncGetSerializedXmlNodeValue(): string | null
    vfuncSetSerializedXmlNodeValue(value?: string | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: Serializable, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property", callback: (($obj: Serializable, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    on(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: Serializable, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property_type", callback: (($obj: Serializable, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    on(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deserialize_unknown_property", callback: (($obj: Serializable, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property", callback: (($obj: Serializable, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    on(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: Serializable, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property_type", callback: (($obj: Serializable, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
    on(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unknown-serializable-properties", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-properties", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unknown-serializable-nodes", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-nodes", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialized-xml-node-value", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialized-xml-node-value", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Serializable_ConstructProps)
    _init (config?: Serializable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static stringToGvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    static gvalueToString(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableProperty_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableProperty {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableProperty */
    getSerializablePropertyValue(): string
    setSerializablePropertyValue(val?: string | null): void
    deserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    serializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    defaultSerializablePropertySerializeProperty(element: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    defaultSerializablePropertyDeserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
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
    /* Virtual methods of GXml.SerializableProperty */
    vfuncGetSerializablePropertyValue(): string
    vfuncSetSerializablePropertyValue(val?: string | null): void
    vfuncDeserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    vfuncSerializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableProperty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableProperty, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SerializableProperty_ConstructProps)
    _init (config?: SerializableProperty_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SerializableMapKey_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableMapKey {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableMapKey */
    getMapKey(): object | null
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
    /* Virtual methods of GXml.SerializableMapKey */
    vfuncGetMapKey(): object | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableMapKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableMapKey, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SerializableMapKey_ConstructProps)
    _init (config?: SerializableMapKey_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SerializableMapDualKey_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableMapDualKey {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableMapDualKey */
    getMapPrimaryKey(): object | null
    getMapSecondaryKey(): object | null
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
    /* Virtual methods of GXml.SerializableMapDualKey */
    vfuncGetMapPrimaryKey(): object | null
    vfuncGetMapSecondaryKey(): object | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableMapDualKey, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableMapDualKey, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SerializableMapDualKey_ConstructProps)
    _init (config?: SerializableMapDualKey_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SerializableCollection_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableCollection {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableCollection */
    deserializeProceed(): boolean
    deserialized(): boolean
    deserializeNode(node: Node): boolean
    deserializeChildren(): boolean
    isCollection(): boolean
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
    /* Virtual methods of GXml.SerializableCollection */
    vfuncDeserializeProceed(): boolean
    vfuncDeserialized(): boolean
    vfuncDeserializeNode(node: Node): boolean
    vfuncDeserializeChildren(): boolean
    vfuncIsCollection(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableCollection, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SerializableCollection_ConstructProps)
    _init (config?: SerializableCollection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ElementList_ConstructProps extends Gee.ArrayList_ConstructProps {
}
export class ElementList {
    /* Properties of Gee.AbstractBidirList */
    readonly readOnlyView: Gee.BidirList
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GXml.ElementList */
    parentInstance: Gee.ArrayList
    priv: ElementListPrivate
    /* Fields of Gee.ArrayList */
    items: object[]
    itemsLength1: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.ElementList */
    get(index: number): Element
    toArray(): Element[]
    /* Methods of Gee.ArrayList */
    addAll(collection: Gee.Collection): boolean
    getEqualFunc(): [ /* returnType */ Gee.EqualDataFunc, /* resultTarget */ object | null ]
    /* Methods of Gee.AbstractBidirList */
    bidirListIterator(): Gee.BidirListIterator
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
    getReadOnlyView(): Gee.BidirList
    /* Methods of Gee.AbstractList */
    listIterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    getReadOnlyView(): Gee.List
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Gee.Collection
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
    /* Virtual methods of GXml.ElementList */
    vfuncGetReadOnlyView(): Gee.BidirList
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    /* Virtual methods of Gee.ArrayList */
    vfuncGetReadOnlyView(): Gee.BidirList
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    /* Virtual methods of Gee.AbstractBidirList */
    vfuncBidirListIterator(): Gee.BidirListIterator
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetReadOnlyView(): Gee.BidirList
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    /* Virtual methods of Gee.AbstractList */
    vfuncListIterator(): Gee.ListIterator
    vfuncGet(index: number): object | null
    vfuncSet(index: number, item?: object | null): void
    vfuncIndexOf(item?: object | null): number
    vfuncInsert(index: number, item?: object | null): void
    vfuncRemoveAt(index: number): object | null
    vfuncSlice(start: number, stop: number): Gee.List | null
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    vfuncFirst(): object | null
    vfuncLast(): object | null
    vfuncInsertAll(index: number, collection: Gee.Collection): void
    vfuncSort(compareFunc: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee.AbstractCollection */
    vfuncContains(item?: object | null): boolean
    vfuncAdd(item?: object | null): boolean
    vfuncRemove(item?: object | null): boolean
    vfuncClear(): void
    vfuncIterator(): Gee.Iterator
    vfuncForeach(f: Gee.ForallFunc): boolean
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetSize(): number
    vfuncGetReadOnly(): boolean
    vfuncGetReadOnlyView(): Gee.Collection
    vfuncStream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfuncFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfuncMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfuncScan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfuncFilter(pred: Gee.Predicate): Gee.Iterator
    vfuncChop(offset: number, length: number): Gee.Iterator
    vfuncFlatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfuncTee(forks: number): Gee.Iterator[]
    vfuncFirstMatch(pred: Gee.Predicate): object | null
    vfuncAnyMatch(pred: Gee.Predicate): boolean
    vfuncAllMatch(pred: Gee.Predicate): boolean
    vfuncMax(compare: GLib.CompareDataFunc): object | null
    vfuncMin(compare: GLib.CompareDataFunc): object | null
    vfuncOrderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfuncGetElementType(): GObject.Type
    vfuncAddAll(collection: Gee.Collection): boolean
    vfuncContainsAll(collection: Gee.Collection): boolean
    vfuncRemoveAll(collection: Gee.Collection): boolean
    vfuncRetainAll(collection: Gee.Collection): boolean
    vfuncToArray(): object[]
    vfuncAddAllArray(array: object[]): boolean
    vfuncContainsAllArray(array: object[]): boolean
    vfuncRemoveAllArray(array: object[]): boolean
    vfuncAddAllIterator(iter: Gee.Iterator): boolean
    vfuncContainsAllIterator(iter: Gee.Iterator): boolean
    vfuncRemoveAllIterator(iter: Gee.Iterator): boolean
    vfuncGetIsEmpty(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ElementList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: ElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ElementList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: ElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ElementList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: ElementList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ElementList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ElementList_ConstructProps)
    _init (config?: ElementList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ElementList
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): ElementList
    static $gtype: GObject.Type
}
export interface NodeList_ConstructProps extends Gee.ArrayList_ConstructProps {
}
export class NodeList {
    /* Properties of Gee.AbstractBidirList */
    readonly readOnlyView: Gee.BidirList
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GXml.NodeList */
    parentInstance: Gee.ArrayList
    priv: NodeListPrivate
    /* Fields of Gee.ArrayList */
    items: object[]
    itemsLength1: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.NodeList */
    get(index: number): Node
    toArray(): Node[]
    /* Methods of Gee.ArrayList */
    addAll(collection: Gee.Collection): boolean
    getEqualFunc(): [ /* returnType */ Gee.EqualDataFunc, /* resultTarget */ object | null ]
    /* Methods of Gee.AbstractBidirList */
    bidirListIterator(): Gee.BidirListIterator
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
    getReadOnlyView(): Gee.BidirList
    /* Methods of Gee.AbstractList */
    listIterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    getReadOnlyView(): Gee.List
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Gee.Collection
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
    /* Virtual methods of GXml.NodeList */
    vfuncGetReadOnlyView(): Gee.BidirList
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    /* Virtual methods of Gee.ArrayList */
    vfuncGetReadOnlyView(): Gee.BidirList
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    /* Virtual methods of Gee.AbstractBidirList */
    vfuncBidirListIterator(): Gee.BidirListIterator
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetReadOnlyView(): Gee.BidirList
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    /* Virtual methods of Gee.AbstractList */
    vfuncListIterator(): Gee.ListIterator
    vfuncGet(index: number): object | null
    vfuncSet(index: number, item?: object | null): void
    vfuncIndexOf(item?: object | null): number
    vfuncInsert(index: number, item?: object | null): void
    vfuncRemoveAt(index: number): object | null
    vfuncSlice(start: number, stop: number): Gee.List | null
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    vfuncFirst(): object | null
    vfuncLast(): object | null
    vfuncInsertAll(index: number, collection: Gee.Collection): void
    vfuncSort(compareFunc: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee.AbstractCollection */
    vfuncContains(item?: object | null): boolean
    vfuncAdd(item?: object | null): boolean
    vfuncRemove(item?: object | null): boolean
    vfuncClear(): void
    vfuncIterator(): Gee.Iterator
    vfuncForeach(f: Gee.ForallFunc): boolean
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetSize(): number
    vfuncGetReadOnly(): boolean
    vfuncGetReadOnlyView(): Gee.Collection
    vfuncStream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfuncFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfuncMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfuncScan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfuncFilter(pred: Gee.Predicate): Gee.Iterator
    vfuncChop(offset: number, length: number): Gee.Iterator
    vfuncFlatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfuncTee(forks: number): Gee.Iterator[]
    vfuncFirstMatch(pred: Gee.Predicate): object | null
    vfuncAnyMatch(pred: Gee.Predicate): boolean
    vfuncAllMatch(pred: Gee.Predicate): boolean
    vfuncMax(compare: GLib.CompareDataFunc): object | null
    vfuncMin(compare: GLib.CompareDataFunc): object | null
    vfuncOrderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfuncGetElementType(): GObject.Type
    vfuncAddAll(collection: Gee.Collection): boolean
    vfuncContainsAll(collection: Gee.Collection): boolean
    vfuncRemoveAll(collection: Gee.Collection): boolean
    vfuncRetainAll(collection: Gee.Collection): boolean
    vfuncToArray(): object[]
    vfuncAddAllArray(array: object[]): boolean
    vfuncContainsAllArray(array: object[]): boolean
    vfuncRemoveAllArray(array: object[]): boolean
    vfuncAddAllIterator(iter: Gee.Iterator): boolean
    vfuncContainsAllIterator(iter: Gee.Iterator): boolean
    vfuncRemoveAllIterator(iter: Gee.Iterator): boolean
    vfuncGetIsEmpty(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NodeList_ConstructProps)
    _init (config?: NodeList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NodeList
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): NodeList
    static $gtype: GObject.Type
}
export interface xAttr_ConstructProps extends BackedNode_ConstructProps {
    specified?: boolean
    namespace?: Namespace
}
export class xAttr {
    /* Properties of GXml.xAttr */
    specified: boolean
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml.Attribute */
    namespace: Namespace
    readonly prefix: string
    /* Fields of GXml.xAttr */
    parentInstance: BackedNode
    priv: xAttrPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.xAttr */
    getSpecified(): boolean
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.Attribute */
    getNamespace(): Namespace
    setNamespace(value: Namespace): void
    getPrefix(): string
    /* Virtual methods of GXml.xAttr */
    vfuncGetNamespace(): Namespace
    vfuncSetNamespace(value: Namespace): void
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncGetPrefix(): string
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::specified", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::specified", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::specified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::specified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::specified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: xAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: xAttr_ConstructProps)
    _init (config?: xAttr_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BackedNode_ConstructProps extends xNode_ConstructProps {
}
export class BackedNode {
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Fields of GXml.BackedNode */
    parentInstance: xNode
    priv: BackedNodePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BackedNode_ConstructProps)
    _init (config?: BackedNode_ConstructProps): void
    static $gtype: GObject.Type
}
export interface xCDATASection_ConstructProps extends xText_ConstructProps {
}
export class xCDATASection {
    /* Properties of GXml.xCharacterData */
    data: string
    length: number
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml.CDATA */
    readonly str: string
    /* Fields of GXml.xCDATASection */
    parentInstance: xText
    priv: xCDATASectionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.xText */
    splitText(offset: number): xText
    /* Methods of GXml.xCharacterData */
    substringData(offset: number, count: number): string
    appendData(newSegment: string): void
    insertData(offset: number, newSegment: string): void
    deleteData(offset: number, count: number): void
    replaceData(offset: number, count: number, newSegment: string): void
    getData(): string
    setData(value: string): void
    getLength(): number
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.CDATA */
    getStr(): string
    /* Virtual methods of GXml.xCDATASection */
    vfuncGetStr(): string
    /* Virtual methods of GXml.xText */
    vfuncGetStr(): string
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::str", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: xCDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of GXml.xCharacterData */
    data: string
    length: number
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Fields of GXml.xCharacterData */
    parentInstance: BackedNode
    priv: xCharacterDataPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.xCharacterData */
    substringData(offset: number, count: number): string
    appendData(newSegment: string): void
    insertData(offset: number, newSegment: string): void
    deleteData(offset: number, count: number): void
    replaceData(offset: number, count: number, newSegment: string): void
    getData(): string
    setData(value: string): void
    getLength(): number
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xCharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: xCharacterData_ConstructProps)
    _init (config?: xCharacterData_ConstructProps): void
    static $gtype: GObject.Type
}
export interface xComment_ConstructProps extends xCharacterData_ConstructProps {
}
export class xComment {
    /* Properties of GXml.xCharacterData */
    data: string
    length: number
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml.Comment */
    readonly str: string
    /* Fields of GXml.xComment */
    parentInstance: xCharacterData
    priv: xCommentPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.xCharacterData */
    substringData(offset: number, count: number): string
    appendData(newSegment: string): void
    insertData(offset: number, newSegment: string): void
    deleteData(offset: number, count: number): void
    replaceData(offset: number, count: number, newSegment: string): void
    getData(): string
    setData(value: string): void
    getLength(): number
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.Comment */
    getStr(): string
    /* Virtual methods of GXml.xComment */
    vfuncGetStr(): string
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::str", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: xComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: xComment_ConstructProps)
    _init (config?: xComment_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DocumentFragment_ConstructProps extends BackedNode_ConstructProps {
}
export class DocumentFragment {
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Fields of GXml.DocumentFragment */
    parentInstance: BackedNode
    priv: DocumentFragmentPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of GXml.xDocumentType */
    entities: Gee.Map
    notations: Gee.Map
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Fields of GXml.xDocumentType */
    parentInstance: xNode
    priv: xDocumentTypePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.xDocumentType */
    getEntities(): Gee.Map | null
    getNotations(): Gee.Map | null
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entities", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entities", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::notations", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notations", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::notations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::notations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::notations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xDocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: xDocumentType_ConstructProps)
    _init (config?: xDocumentType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface xDocument_ConstructProps extends xNode_ConstructProps {
    doctype?: xDocumentType
    implementation?: Implementation
    documentElement?: xElement
    indent?: boolean
    nsTop?: boolean
    prefixDefaultNs?: boolean
    backup?: boolean
    file?: Gio.File
}
export class xDocument {
    /* Properties of GXml.xDocument */
    doctype: xDocumentType
    implementation: Implementation
    documentElement: xElement
    readonly root: Node
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml.Document */
    indent: boolean
    nsTop: boolean
    prefixDefaultNs: boolean
    backup: boolean
    file: Gio.File
    /* Fields of GXml.xDocument */
    parentInstance: xNode
    priv: xDocumentPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.xDocument */
    saveToPath(filePath: string): void
    saveToStream(outstream: Gio.OutputStream, can?: Gio.Cancellable | null): void
    createDocumentFragment(): DocumentFragment
    createTextNode(textData: string): xText
    createManagedComment(commentData: string): xComment
    createCdataSection(cdataData: string): xCDATASection
    createProcessingInstruction(target: string, data: string): xProcessingInstruction
    createAttribute(name: string): xAttr
    createEntityReference(name: string): EntityReference
    getElementsByTagName(tagName: string): xNodeList
    copyNode(foreignNode: xNode, deep: boolean): xNode
    getDoctype(): xDocumentType | null
    getImplementation(): Implementation
    getDocumentElement(): xElement
    getRoot(): Node
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.Document */
    createElement(name: string): Node
    createText(text: string): Node
    createComment(text: string): Node
    createCdata(text: string): Node
    createPi(target: string, data: string): Node
    save(cancellable?: Gio.Cancellable | null): boolean
    saveAs(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    getIndent(): boolean
    setIndent(value: boolean): void
    getNsTop(): boolean
    setNsTop(value: boolean): void
    getPrefixDefaultNs(): boolean
    setPrefixDefaultNs(value: boolean): void
    getBackup(): boolean
    setBackup(value: boolean): void
    getFile(): Gio.File
    setFile(value: Gio.File): void
    /* Virtual methods of GXml.xDocument */
    vfuncGetRoot(): Node
    vfuncCreateElement(name: string): Node
    vfuncCreateText(text: string): Node
    vfuncCreateComment(text: string): Node
    vfuncCreateCdata(text: string): Node
    vfuncCreatePi(target: string, data: string): Node
    vfuncSave(cancellable?: Gio.Cancellable | null): boolean
    vfuncSaveAs(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    vfuncGetIndent(): boolean
    vfuncSetIndent(value: boolean): void
    vfuncGetNsTop(): boolean
    vfuncSetNsTop(value: boolean): void
    vfuncGetPrefixDefaultNs(): boolean
    vfuncSetPrefixDefaultNs(value: boolean): void
    vfuncGetBackup(): boolean
    vfuncSetBackup(value: boolean): void
    vfuncGetFile(): Gio.File
    vfuncSetFile(value: Gio.File): void
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::doctype", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::doctype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::doctype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::doctype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::implementation", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::implementation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::implementation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::implementation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document-element", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document-element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document-element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document-element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ns-top", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ns-top", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ns-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ns-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ns-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix-default-ns", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix-default-ns", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix-default-ns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix-default-ns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix-default-ns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backup", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backup", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: xDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: xDocument_ConstructProps)
    _init (config?: xDocument_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fromLibxml2(doc: object | null, requireRoot: boolean): xDocument
    static fromPath(filePath: string): xDocument
    static fromGfile(fin: Gio.File, can?: Gio.Cancellable | null): xDocument
    static fromStream(instream: Gio.InputStream, can?: Gio.Cancellable | null): xDocument
    static fromString(xml: string): xDocument
    static fromStringWithOptions(xml: string, url: string | null, encoding: string | null, options: number): xDocument
    static new(): xDocument
    static newDefault(): Document
    static newDefaultForPath(path: string): Document
    static newDefaultForFile(f: Gio.File): Document
    static $gtype: GObject.Type
}
export interface xElement_ConstructProps extends BackedNode_ConstructProps {
    content?: string
}
export class xElement {
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml.Element */
    readonly tagName: string
    content: string
    /* Fields of GXml.xElement */
    parentInstance: BackedNode
    priv: xElementPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.xElement */
    getAttribute(name: string): string
    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    getAttributeNode(name: string): xAttr | null
    setAttributeNode(newAttr: xAttr): xAttr
    removeAttributeNode(oldAttr: xAttr): xAttr
    getElementsByTagName(tagName: string): xNodeList
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.Element */
    normalize(): void
    setAttr(name: string, value: string): void
    getAttr(name: string): Node
    removeAttr(name: string): void
    setNsAttr(ns: Namespace, name: string, value: string): void
    getNsAttr(name: string, uri: string): Node
    getTagName(): string
    getContent(): string
    setContent(value: string): void
    /* Virtual methods of GXml.xElement */
    vfuncNormalize(): void
    vfuncSetAttr(name: string, value: string): void
    vfuncGetAttr(name: string): Node
    vfuncRemoveAttr(name: string): void
    vfuncSetNsAttr(ns: Namespace, name: string, value: string): void
    vfuncGetNsAttr(name: string, uri: string): Node
    vfuncGetTagName(): string
    vfuncGetContent(): string
    vfuncSetContent(value: string): void
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tag-name", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tag-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tag-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tag-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: xElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: xElement_ConstructProps)
    _init (config?: xElement_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Entity_ConstructProps extends xNode_ConstructProps {
    publicId?: string
    systemId?: string
    notationName?: string
}
export class Entity {
    /* Properties of GXml.Entity */
    publicId: string
    systemId: string
    notationName: string
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Fields of GXml.Entity */
    parentInstance: xNode
    priv: EntityPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Entity */
    getPublicId(): string
    getSystemId(): string
    getNotationName(): string
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::public-id", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::public-id", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::public-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::public-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::public-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::system-id", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-id", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::system-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::system-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::system-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::notation-name", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notation-name", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::notation-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::notation-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::notation-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Entity_ConstructProps)
    _init (config?: Entity_ConstructProps): void
    static $gtype: GObject.Type
}
export interface EntityReference_ConstructProps extends xNode_ConstructProps {
}
export class EntityReference {
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Fields of GXml.EntityReference */
    parentInstance: xNode
    priv: EntityReferencePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EntityReference_ConstructProps)
    _init (config?: EntityReference_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Implementation_ConstructProps extends GObject.Object_ConstructProps {
}
export class Implementation {
    /* Fields of GXml.Implementation */
    parentInstance: GObject.Object
    priv: ImplementationPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Implementation */
    createDocument(namespaceUri?: string | null, qualifiedName?: string | null, doctype?: xDocumentType | null): xDocument
    hasFeature(feature: string, version?: string | null): boolean
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
    connect(sigName: "notify", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Implementation_ConstructProps)
    _init (config?: Implementation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AbstractNamedAttrMap_ConstructProps extends GObject.Object_ConstructProps {
}
export class AbstractNamedAttrMap {
    /* Fields of GXml.AbstractNamedAttrMap */
    parentInstance: GObject.Object
    priv: AbstractNamedAttrMapPrivate
    elem: xElement
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Gee.Traversable */
    foreach(f: Gee.ForallFunc): boolean
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    fold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    map(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    scan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    filter(pred: Gee.Predicate): Gee.Iterator
    chop(offset: number, length: number): Gee.Iterator
    flatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    tee(forks: number): Gee.Iterator[]
    firstMatch(pred: Gee.Predicate): object | null
    anyMatch(pred: Gee.Predicate): boolean
    allMatch(pred: Gee.Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    orderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    getElementType(): GObject.Type
    /* Methods of Gee.Iterable */
    iterator(): Gee.Iterator
    /* Virtual methods of GXml.AbstractNamedAttrMap */
    vfuncForeach(f: Gee.ForallFunc): boolean
    vfuncStream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfuncFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfuncMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfuncScan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfuncFilter(pred: Gee.Predicate): Gee.Iterator
    vfuncChop(offset: number, length: number): Gee.Iterator
    vfuncFlatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfuncTee(forks: number): Gee.Iterator[]
    vfuncFirstMatch(pred: Gee.Predicate): object | null
    vfuncAnyMatch(pred: Gee.Predicate): boolean
    vfuncAllMatch(pred: Gee.Predicate): boolean
    vfuncMax(compare: GLib.CompareDataFunc): object | null
    vfuncMin(compare: GLib.CompareDataFunc): object | null
    vfuncOrderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfuncGetElementType(): GObject.Type
    vfuncIterator(): Gee.Iterator
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractNamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractNamedAttrMap, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: AbstractNamedAttrMap_ConstructProps)
    _init (config?: AbstractNamedAttrMap_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AbstractNamedAttrMapEntry_ConstructProps extends Gee.MapEntry_ConstructProps {
}
export class AbstractNamedAttrMapEntry {
    /* Properties of Gee.MapEntry */
    readonly key: object
    value: object
    readonly readOnly: boolean
    /* Fields of GXml.AbstractNamedAttrMapEntry */
    parentInstance: Gee.MapEntry
    priv: AbstractNamedAttrMapEntryPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee.MapEntry */
    getKey(): object | null
    getValue(): object | null
    setValue(value?: object | null): void
    getReadOnly(): boolean
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
    /* Virtual methods of Gee.MapEntry */
    vfuncGetKey(): object | null
    vfuncGetValue(): object | null
    vfuncSetValue(value?: object | null): void
    vfuncGetReadOnly(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractNamedAttrMapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractNamedAttrMapEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key", callback: (($obj: AbstractNamedAttrMapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: AbstractNamedAttrMapEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: AbstractNamedAttrMapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: AbstractNamedAttrMapEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: AbstractNamedAttrMapEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractNamedAttrMapEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of Gee.Iterator */
    readonly valid: boolean
    readonly readOnly: boolean
    /* Fields of GXml.AbstractNamedAttrMapIterator */
    parentInstance: GObject.Object
    priv: AbstractNamedAttrMapIteratorPrivate
    nm: AbstractNamedAttrMap
    cur: object | null
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Gee.Traversable */
    foreach(f: Gee.ForallFunc): boolean
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    fold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    map(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    scan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    filter(pred: Gee.Predicate): Gee.Iterator
    chop(offset: number, length: number): Gee.Iterator
    flatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    tee(forks: number): Gee.Iterator[]
    firstMatch(pred: Gee.Predicate): object | null
    anyMatch(pred: Gee.Predicate): boolean
    allMatch(pred: Gee.Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    orderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    getElementType(): GObject.Type
    /* Methods of Gee.Iterator */
    next(): boolean
    hasNext(): boolean
    get(): object | null
    remove(): void
    getValid(): boolean
    getReadOnly(): boolean
    /* Virtual methods of GXml.AbstractNamedAttrMapIterator */
    vfuncForeach(f: Gee.ForallFunc): boolean
    vfuncStream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfuncFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfuncMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfuncScan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfuncFilter(pred: Gee.Predicate): Gee.Iterator
    vfuncChop(offset: number, length: number): Gee.Iterator
    vfuncFlatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfuncTee(forks: number): Gee.Iterator[]
    vfuncFirstMatch(pred: Gee.Predicate): object | null
    vfuncAnyMatch(pred: Gee.Predicate): boolean
    vfuncAllMatch(pred: Gee.Predicate): boolean
    vfuncMax(compare: GLib.CompareDataFunc): object | null
    vfuncMin(compare: GLib.CompareDataFunc): object | null
    vfuncOrderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfuncGetElementType(): GObject.Type
    vfuncNext(): boolean
    vfuncHasNext(): boolean
    vfuncGet(): object | null
    vfuncRemove(): void
    vfuncGetValid(): boolean
    vfuncGetReadOnly(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AbstractNamedAttrMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AbstractNamedAttrMapIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valid", callback: (($obj: AbstractNamedAttrMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: AbstractNamedAttrMapIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: AbstractNamedAttrMapIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AbstractNamedAttrMapIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AbstractNamedAttrMapIterator_ConstructProps)
    _init (config?: AbstractNamedAttrMapIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(nm: AbstractNamedAttrMap): AbstractNamedAttrMapIterator
    static unfold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.UnfoldFunc, current?: Gee.Lazy | null): Gee.Iterator
    static concat(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iters: Gee.Iterator): Gee.Iterator
    static $gtype: GObject.Type
}
export interface NamedAttrMap_ConstructProps extends AbstractNamedAttrMap_ConstructProps {
}
export class NamedAttrMap {
    /* Properties of Gee.Map */
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    readonly readOnlyView: Gee.Map
    /* Properties of GXml.NamedNodeMap */
    readonly length: number
    /* Fields of GXml.NamedAttrMap */
    parentInstance: AbstractNamedAttrMap
    priv: NamedAttrMapPrivate
    /* Fields of GXml.AbstractNamedAttrMap */
    elem: xElement
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.NamedAttrMap */
    contains(key: string): boolean
    containsAll(map: Gee.Map): boolean
    remove(key: string): [ /* returnType */ boolean, /* val */ Attribute ]
    removeAll(map: Gee.Map): boolean
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
    /* Methods of Gee.Map */
    hasKey(key?: object | null): boolean
    contains(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    clear(): void
    mapIterator(): Gee.MapIterator
    setAll(map: Gee.Map): void
    unsetAll(map: Gee.Map): boolean
    hasAll(map: Gee.Map): boolean
    getSize(): number
    getIsEmpty(): boolean
    getReadOnly(): boolean
    getKeys(): Gee.Set
    getValues(): Gee.Collection
    getEntries(): Gee.Set
    getReadOnlyView(): Gee.Map
    getKeyType(): GObject.Type
    getValueType(): GObject.Type
    /* Methods of GXml.NamedNodeMap */
    getNamedItem(name: string): object | null
    setNamedItem(item?: object | null): object | null
    removeNamedItem(name: string): object | null
    item(index: number): object | null
    getLength(): number
    /* Virtual methods of GXml.NamedAttrMap */
    vfuncHasKey(key?: object | null): boolean
    vfuncHas(key?: object | null, value?: object | null): boolean
    vfuncGet(key?: object | null): object | null
    vfuncSet(key?: object | null, value?: object | null): void
    vfuncUnset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfuncClear(): void
    vfuncMapIterator(): Gee.MapIterator
    vfuncSetAll(map: Gee.Map): void
    vfuncUnsetAll(map: Gee.Map): boolean
    vfuncHasAll(map: Gee.Map): boolean
    vfuncGetSize(): number
    vfuncGetIsEmpty(): boolean
    vfuncGetReadOnly(): boolean
    vfuncGetKeys(): Gee.Set
    vfuncGetValues(): Gee.Collection
    vfuncGetEntries(): Gee.Set
    vfuncGetReadOnlyView(): Gee.Map
    vfuncGetNamedItem(name: string): object | null
    vfuncSetNamedItem(item?: object | null): object | null
    vfuncRemoveNamedItem(name: string): object | null
    vfuncItem(index: number): object | null
    vfuncGetLength(): number
    /* Virtual methods of GXml.AbstractNamedAttrMap */
    vfuncForeach(f: Gee.ForallFunc): boolean
    vfuncStream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfuncFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfuncMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfuncScan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfuncFilter(pred: Gee.Predicate): Gee.Iterator
    vfuncChop(offset: number, length: number): Gee.Iterator
    vfuncFlatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfuncTee(forks: number): Gee.Iterator[]
    vfuncFirstMatch(pred: Gee.Predicate): object | null
    vfuncAnyMatch(pred: Gee.Predicate): boolean
    vfuncAllMatch(pred: Gee.Predicate): boolean
    vfuncMax(compare: GLib.CompareDataFunc): object | null
    vfuncMin(compare: GLib.CompareDataFunc): object | null
    vfuncOrderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfuncGetElementType(): GObject.Type
    vfuncIterator(): Gee.Iterator
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NamedAttrMap_ConstructProps)
    _init (config?: NamedAttrMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify): Gee.Map
    static $gtype: GObject.Type
}
export interface NamespaceAttr_ConstructProps extends xNode_ConstructProps {
    definedPrefix?: string
    definedNamespaceUri?: string
}
export class NamespaceAttr {
    /* Properties of GXml.NamespaceAttr */
    definedPrefix: string
    definedNamespaceUri: string
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml.Namespace */
    readonly uri: string
    readonly prefix: string
    /* Fields of GXml.NamespaceAttr */
    parentInstance: xNode
    priv: NamespaceAttrPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.NamespaceAttr */
    getDefinedPrefix(): string
    getDefinedNamespaceUri(): string
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.Namespace */
    getUri(): string
    getPrefix(): string
    /* Virtual methods of GXml.NamespaceAttr */
    vfuncGetUri(): string
    vfuncGetPrefix(): string
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::defined-prefix", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::defined-prefix", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::defined-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::defined-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::defined-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::defined-namespace-uri", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::defined-namespace-uri", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::defined-namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::defined-namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::defined-namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NamespaceAttr_ConstructProps)
    _init (config?: NamespaceAttr_ConstructProps): void
    static $gtype: GObject.Type
}
export interface xNode_ConstructProps extends GObject.Object_ConstructProps {
    namespaceDefinitions?: Gee.List
    namespaceUri?: string
    namespacePrefix?: string
    localName?: string
    nodeName?: string
    nodeValue?: string
    nodeType?: NodeType
    parentNode?: xNode
    childNodes?: xNodeList
    firstChild?: xNode
    lastChild?: xNode
    previousSibling?: xNode
    nextSibling?: xNode
    attributes?: NamedAttrMap
    ownerDocument?: xDocument
    value?: string
}
export class xNode {
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml.Node */
    readonly childs: Gee.BidirList
    readonly typeNode: NodeType
    readonly document: Document
    /* Fields of GXml.xNode */
    parentInstance: GObject.Object
    priv: xNodePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.Node */
    get(key: string): Node | null
    getElementsByPropertyValue(property: string, value: string): ElementList
    setNamespace(uri: string, prefix?: string | null): boolean
    nsPrefix(): string
    nsUri(): string
    getChilds(): Gee.BidirList
    getTypeNode(): NodeType
    getDocument(): Document
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::childs", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::childs", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::childs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::childs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::childs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: xNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml.Notation */
    readonly publicId: string
    readonly externalId: string
    /* Fields of GXml.xNotation */
    parentInstance: xNode
    priv: xNotationPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.Notation */
    getPublicId(): string | null
    getExternalId(): string | null
    /* Virtual methods of GXml.xNotation */
    vfuncGetPublicId(): string | null
    vfuncGetExternalId(): string | null
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::public-id", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::public-id", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::public-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::public-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::public-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::external-id", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::external-id", callback: (($obj: xNotation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::external-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::external-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::external-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: xNotation_ConstructProps)
    _init (config?: xNotation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface xProcessingInstruction_ConstructProps extends xNode_ConstructProps {
}
export class xProcessingInstruction {
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml.ProcessingInstruction */
    readonly target: string
    readonly data: string
    /* Fields of GXml.xProcessingInstruction */
    parentInstance: xNode
    priv: xProcessingInstructionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.ProcessingInstruction */
    getTarget(): string
    getData(): string
    /* Virtual methods of GXml.xProcessingInstruction */
    vfuncGetTarget(): string
    vfuncGetData(): string
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::target", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: xProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: xProcessingInstruction_ConstructProps)
    _init (config?: xProcessingInstruction_ConstructProps): void
    static $gtype: GObject.Type
}
export interface xText_ConstructProps extends xCharacterData_ConstructProps {
}
export class xText {
    /* Properties of GXml.xCharacterData */
    data: string
    length: number
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Properties of GXml.Text */
    readonly str: string
    /* Fields of GXml.xText */
    parentInstance: xCharacterData
    priv: xTextPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.xText */
    splitText(offset: number): xText
    /* Methods of GXml.xCharacterData */
    substringData(offset: number, count: number): string
    appendData(newSegment: string): void
    insertData(offset: number, newSegment: string): void
    deleteData(offset: number, count: number): void
    replaceData(offset: number, count: number, newSegment: string): void
    getData(): string
    setData(value: string): void
    getLength(): number
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.Text */
    getStr(): string
    /* Virtual methods of GXml.xText */
    vfuncGetStr(): string
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::str", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: xText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: xText_ConstructProps)
    _init (config?: xText_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SerializableBool_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableBool {
    /* Fields of GXml.SerializableBool */
    parentInstance: GObject.Object
    priv: SerializableBoolPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableBool */
    getValue(): boolean
    setValue(val: boolean): void
    toString(): string
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
    /* Methods of GXml.SerializableProperty */
    getSerializablePropertyValue(): string
    setSerializablePropertyValue(val?: string | null): void
    deserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    serializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    defaultSerializablePropertySerializeProperty(element: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    defaultSerializablePropertyDeserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    /* Virtual methods of GXml.SerializableBool */
    vfuncGetSerializablePropertyValue(): string
    vfuncSetSerializablePropertyValue(val?: string | null): void
    vfuncDeserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    vfuncSerializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableBool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableBool, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SerializableBool_ConstructProps)
    _init (config?: SerializableBool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableBool
    static $gtype: GObject.Type
}
export interface SerializableDouble_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableDouble {
    /* Fields of GXml.SerializableDouble */
    parentInstance: GObject.Object
    priv: SerializableDoublePrivate
    val: string
    fraction: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableDouble */
    getFraction(): number
    setFraction(fraction: number): void
    getValue(): number
    setValue(val: number): void
    toString(): string
    format(f: string): string
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
    /* Methods of GXml.SerializableProperty */
    getSerializablePropertyValue(): string
    setSerializablePropertyValue(val?: string | null): void
    deserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    serializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    defaultSerializablePropertySerializeProperty(element: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    defaultSerializablePropertyDeserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    /* Virtual methods of GXml.SerializableDouble */
    vfuncGetSerializablePropertyValue(): string
    vfuncSetSerializablePropertyValue(val?: string | null): void
    vfuncDeserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    vfuncSerializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableDouble, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableDouble, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SerializableDouble_ConstructProps)
    _init (config?: SerializableDouble_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableDouble
    static $gtype: GObject.Type
}
export interface SerializableFloat_ConstructProps extends SerializableDouble_ConstructProps {
}
export class SerializableFloat {
    /* Fields of GXml.SerializableFloat */
    parentInstance: SerializableDouble
    priv: SerializableFloatPrivate
    /* Fields of GXml.SerializableDouble */
    val: string
    fraction: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableFloat */
    getValue(): number
    setValue(val: number): void
    /* Methods of GXml.SerializableDouble */
    getFraction(): number
    setFraction(fraction: number): void
    toString(): string
    format(f: string): string
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
    /* Virtual methods of GXml.SerializableDouble */
    vfuncGetSerializablePropertyValue(): string
    vfuncSetSerializablePropertyValue(val?: string | null): void
    vfuncDeserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    vfuncSerializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableFloat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableFloat, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SerializableFloat_ConstructProps)
    _init (config?: SerializableFloat_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableFloat
    static $gtype: GObject.Type
}
export interface SerializableEnum_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableEnum {
    /* Fields of GXml.SerializableEnum */
    parentInstance: GObject.Object
    priv: SerializableEnumPrivate
    val: string
    enumtype: GObject.Type
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableEnum */
    setEnumType(type: GObject.Type): void
    getEnumType(): GObject.Type
    parse(str: string): void
    parseInteger(v: number): void
    toInteger(): number
    toString(): string
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
    /* Methods of GXml.SerializableProperty */
    getSerializablePropertyValue(): string
    setSerializablePropertyValue(val?: string | null): void
    deserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    serializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    defaultSerializablePropertySerializeProperty(element: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    defaultSerializablePropertyDeserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    /* Virtual methods of GXml.SerializableEnum */
    vfuncGetSerializablePropertyValue(): string
    vfuncSetSerializablePropertyValue(val?: string | null): void
    vfuncDeserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    vfuncSerializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableEnum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableEnum, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SerializableEnum_ConstructProps)
    _init (config?: SerializableEnum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static withEnum(type: GObject.Type): SerializableEnum
    static new(): SerializableEnum
    static $gtype: GObject.Type
}
export interface SerializableInt_ConstructProps extends SerializableDouble_ConstructProps {
}
export class SerializableInt {
    /* Fields of GXml.SerializableInt */
    parentInstance: SerializableDouble
    priv: SerializableIntPrivate
    /* Fields of GXml.SerializableDouble */
    val: string
    fraction: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableInt */
    getValue(): number
    setValue(val: number): void
    /* Methods of GXml.SerializableDouble */
    getFraction(): number
    setFraction(fraction: number): void
    toString(): string
    format(f: string): string
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
    /* Virtual methods of GXml.SerializableDouble */
    vfuncGetSerializablePropertyValue(): string
    vfuncSetSerializablePropertyValue(val?: string | null): void
    vfuncDeserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    vfuncSerializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableInt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableInt, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SerializableInt_ConstructProps)
    _init (config?: SerializableInt_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableInt
    static $gtype: GObject.Type
}
export interface SerializableValueList_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableValueList {
    /* Fields of GXml.SerializableValueList */
    parentInstance: GObject.Object
    priv: SerializableValueListPrivate
    vals: string[]
    extra: Gee.ArrayList
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableValueList */
    getValues(): Gee.List
    addValues(vals: string[]): void
    getValueAt(index: number): string | null
    selectValueAt(index: number): void
    getValuesArray(): string[]
    isValue(): boolean
    toString(): string
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
    /* Methods of GXml.SerializableProperty */
    getSerializablePropertyValue(): string
    setSerializablePropertyValue(val?: string | null): void
    deserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    serializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    defaultSerializablePropertySerializeProperty(element: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    defaultSerializablePropertyDeserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    /* Virtual methods of GXml.SerializableValueList */
    vfuncGetValues(): Gee.List
    vfuncAddValues(vals: string[]): void
    vfuncGetValueAt(index: number): string | null
    vfuncSelectValueAt(index: number): void
    vfuncGetValuesArray(): string[]
    vfuncIsValue(): boolean
    vfuncGetSerializablePropertyValue(): string
    vfuncSetSerializablePropertyValue(val?: string | null): void
    vfuncDeserializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): boolean
    vfuncSerializeProperty(propertyNode: Node, prop: GObject.ParamSpec, nick: boolean): Node | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableValueList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableValueList, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SerializableValueList_ConstructProps)
    _init (config?: SerializableValueList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableValueList
    static $gtype: GObject.Type
}
export interface SerializableObjectModel_ConstructProps extends GObject.Object_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignoredSerializableProperties?: GLib.HashTable
    serializedXmlNodeValue?: string
}
export class SerializableObjectModel {
    /* Properties of GXml.SerializableObjectModel */
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    /* Properties of GXml.Serializable */
    readonly unknownSerializableProperties: Gee.Map
    readonly unknownSerializableNodes: Gee.Collection
    serializedXmlNodeValue: string
    /* Fields of GXml.SerializableObjectModel */
    parentInstance: GObject.Object
    priv: SerializableObjectModelPrivate
    node: Node
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableObjectModel */
    getEnableUnknownSerializableProperty(): boolean
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    setDefaultNamespace(node: Node): boolean
    nodeName(): string
    defaultNodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    listSerializableProperties(): GObject.ParamSpec[]
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): boolean
    defaultDeserialize(node: Node): boolean
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
    toString(): string
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
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
    /* Methods of GXml.Serializable */
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultListSerializableProperties(): GObject.ParamSpec[]
    getUnknownSerializableProperties(): Gee.Map
    getUnknownSerializableNodes(): Gee.Collection
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
    /* Virtual methods of GXml.SerializableObjectModel */
    vfuncGetEnableUnknownSerializableProperty(): boolean
    vfuncSerializeUseXmlNodeValue(): boolean
    vfuncPropertyUseNick(): boolean
    vfuncSetDefaultNamespace(node: Node): boolean
    vfuncNodeName(): string
    vfuncFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncListSerializableProperties(): GObject.ParamSpec[]
    vfuncSerialize(node: Node): Node | null
    vfuncSerializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    vfuncDeserialize(node: Node): boolean
    vfuncDeserializeProperty(propertyNode: Node): boolean
    vfuncToString(): string
    vfuncDefaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncDefaultListSerializableProperties(): GObject.ParamSpec[]
    vfuncGetUnknownSerializableProperties(): Gee.Map
    vfuncGetUnknownSerializableNodes(): Gee.Collection
    vfuncGetSerializedXmlNodeValue(): string | null
    vfuncSetSerializedXmlNodeValue(value?: string | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableObjectModel, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property", callback: (($obj: SerializableObjectModel, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    on(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableObjectModel, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableObjectModel, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    on(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableObjectModel, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property", callback: (($obj: SerializableObjectModel, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    on(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableObjectModel, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableObjectModel, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
    on(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::properties", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SerializableObjectModel_ConstructProps)
    _init (config?: SerializableObjectModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static stringToGvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    static gvalueToString(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableTreeMap_ConstructProps extends Gee.TreeMap_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignoredSerializableProperties?: GLib.HashTable
    serializedXmlNodeValue?: string
}
export class SerializableTreeMap {
    /* Properties of GXml.SerializableTreeMap */
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    /* Properties of Gee.AbstractBidirSortedMap */
    readonly readOnlyView: Gee.BidirSortedMap
    /* Properties of Gee.AbstractSortedMap */
    readonly ascendingKeys: Gee.SortedSet
    readonly ascendingEntries: Gee.SortedSet
    /* Properties of Gee.AbstractMap */
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    /* Properties of GXml.Serializable */
    readonly unknownSerializableProperties: Gee.Map
    readonly unknownSerializableNodes: Gee.Collection
    serializedXmlNodeValue: string
    /* Fields of GXml.SerializableTreeMap */
    parentInstance: Gee.TreeMap
    priv: SerializableTreeMapPrivate
    node: Node
    deserialized: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableTreeMap */
    deserializeProceed(): boolean
    deserializeNode(node: Node): boolean
    deserializeChildren(): boolean
    setDefaultNamespace(node: Node): boolean
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    nodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    listSerializableProperties(): GObject.ParamSpec[]
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): boolean
    defaultDeserialize(node: Node): boolean
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    /* Methods of Gee.TreeMap */
    getKeyCompareFunc(): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ object | null ]
    getValueEqualFunc(): [ /* returnType */ Gee.EqualDataFunc, /* resultTarget */ object | null ]
    /* Methods of Gee.AbstractBidirSortedMap */
    bidirMapIterator(): Gee.BidirMapIterator
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
    getReadOnlyView(): Gee.BidirSortedMap
    /* Methods of Gee.AbstractSortedMap */
    headMap(before?: object | null): Gee.SortedMap
    tailMap(after?: object | null): Gee.SortedMap
    subMap(before?: object | null, after?: object | null): Gee.SortedMap
    getAscendingKeys(): Gee.SortedSet
    getAscendingEntries(): Gee.SortedSet
    /* Methods of Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    mapIterator(): Gee.MapIterator
    clear(): void
    foreach(f: Gee.ForallFunc): boolean
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    getSize(): number
    getReadOnly(): boolean
    getKeys(): Gee.Set
    getValues(): Gee.Collection
    getEntries(): Gee.Set
    getReadOnlyView(): Gee.Map
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
    /* Methods of GXml.Serializable */
    getEnableUnknownSerializableProperty(): boolean
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultListSerializableProperties(): GObject.ParamSpec[]
    getUnknownSerializableProperties(): Gee.Map
    getUnknownSerializableNodes(): Gee.Collection
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
    /* Methods of GXml.SerializableCollection */
    isCollection(): boolean
    /* Virtual methods of GXml.SerializableTreeMap */
    vfuncDeserializeProceed(): boolean
    vfuncDeserialized(): boolean
    vfuncDeserializeNode(node: Node): boolean
    vfuncDeserializeChildren(): boolean
    vfuncSetDefaultNamespace(node: Node): boolean
    vfuncSerializeUseXmlNodeValue(): boolean
    vfuncPropertyUseNick(): boolean
    vfuncNodeName(): string
    vfuncFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncListSerializableProperties(): GObject.ParamSpec[]
    vfuncSerialize(node: Node): Node | null
    vfuncSerializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    vfuncDeserialize(node: Node): boolean
    vfuncDeserializeProperty(propertyNode: Node): boolean
    vfuncGetEnableUnknownSerializableProperty(): boolean
    vfuncDefaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncDefaultListSerializableProperties(): GObject.ParamSpec[]
    vfuncGetUnknownSerializableProperties(): Gee.Map
    vfuncGetUnknownSerializableNodes(): Gee.Collection
    vfuncGetSerializedXmlNodeValue(): string | null
    vfuncSetSerializedXmlNodeValue(value?: string | null): void
    vfuncIsCollection(): boolean
    vfuncGetReadOnlyView(): Gee.BidirSortedMap
    vfuncGetReadOnlyView(): Gee.SortedMap
    vfuncGetReadOnlyView(): Gee.Map
    /* Virtual methods of Gee.TreeMap */
    vfuncGetReadOnlyView(): Gee.BidirSortedMap
    vfuncGetReadOnlyView(): Gee.SortedMap
    vfuncGetReadOnlyView(): Gee.Map
    /* Virtual methods of Gee.AbstractBidirSortedMap */
    vfuncBidirMapIterator(): Gee.BidirMapIterator
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetReadOnlyView(): Gee.BidirSortedMap
    vfuncGetReadOnlyView(): Gee.SortedMap
    vfuncGetReadOnlyView(): Gee.Map
    /* Virtual methods of Gee.AbstractSortedMap */
    vfuncHeadMap(before?: object | null): Gee.SortedMap
    vfuncTailMap(after?: object | null): Gee.SortedMap
    vfuncSubMap(before?: object | null, after?: object | null): Gee.SortedMap
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetAscendingKeys(): Gee.SortedSet
    vfuncGetAscendingEntries(): Gee.SortedSet
    vfuncGetReadOnlyView(): Gee.SortedMap
    vfuncGetReadOnlyView(): Gee.Map
    /* Virtual methods of Gee.AbstractMap */
    vfuncHasKey(key?: object | null): boolean
    vfuncHas(key?: object | null, value?: object | null): boolean
    vfuncGet(key?: object | null): object | null
    vfuncSet(key?: object | null, value?: object | null): void
    vfuncUnset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfuncMapIterator(): Gee.MapIterator
    vfuncClear(): void
    vfuncForeach(f: Gee.ForallFunc): boolean
    vfuncStream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetSize(): number
    vfuncGetReadOnly(): boolean
    vfuncGetKeys(): Gee.Set
    vfuncGetValues(): Gee.Collection
    vfuncGetEntries(): Gee.Set
    vfuncGetReadOnlyView(): Gee.Map
    vfuncFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfuncMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfuncScan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfuncFilter(pred: Gee.Predicate): Gee.Iterator
    vfuncChop(offset: number, length: number): Gee.Iterator
    vfuncFlatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfuncTee(forks: number): Gee.Iterator[]
    vfuncFirstMatch(pred: Gee.Predicate): object | null
    vfuncAnyMatch(pred: Gee.Predicate): boolean
    vfuncAllMatch(pred: Gee.Predicate): boolean
    vfuncMax(compare: GLib.CompareDataFunc): object | null
    vfuncMin(compare: GLib.CompareDataFunc): object | null
    vfuncOrderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfuncGetElementType(): GObject.Type
    vfuncIterator(): Gee.Iterator
    vfuncSetAll(map: Gee.Map): void
    vfuncUnsetAll(map: Gee.Map): boolean
    vfuncHasAll(map: Gee.Map): boolean
    vfuncGetIsEmpty(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableTreeMap, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property", callback: (($obj: SerializableTreeMap, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    on(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableTreeMap, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableTreeMap, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    on(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableTreeMap, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property", callback: (($obj: SerializableTreeMap, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    on(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableTreeMap, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableTreeMap, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
    on(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::properties", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ascending-keys", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-keys", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ascending-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ascending-entries", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ascending-entries", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ascending-entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SerializableTreeMap_ConstructProps)
    _init (config?: SerializableTreeMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableTreeMap
    static new(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyCompareFunc: GLib.CompareDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): SerializableTreeMap
    static stringToGvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    static gvalueToString(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableHashMap_ConstructProps extends Gee.HashMap_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignoredSerializableProperties?: GLib.HashTable
    serializedXmlNodeValue?: string
}
export class SerializableHashMap {
    /* Properties of GXml.SerializableHashMap */
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    /* Properties of Gee.AbstractMap */
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    readonly readOnlyView: Gee.Map
    /* Properties of GXml.Serializable */
    readonly unknownSerializableProperties: Gee.Map
    readonly unknownSerializableNodes: Gee.Collection
    serializedXmlNodeValue: string
    /* Fields of GXml.SerializableHashMap */
    parentInstance: Gee.HashMap
    priv: SerializableHashMapPrivate
    node: Node
    deserialized: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableHashMap */
    deserializeProceed(): boolean
    deserializeNode(node: Node): boolean
    deserializeChildren(): boolean
    setDefaultNamespace(node: Node): boolean
    getEnableUnknownSerializableProperty(): boolean
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    nodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    listSerializableProperties(): GObject.ParamSpec[]
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): boolean
    defaultDeserialize(node: Node): boolean
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    /* Methods of Gee.HashMap */
    getKeyHashFunc(): [ /* returnType */ Gee.HashDataFunc, /* resultTarget */ object | null ]
    getKeyEqualFunc(): [ /* returnType */ Gee.EqualDataFunc, /* resultTarget */ object | null ]
    getValueEqualFunc(): [ /* returnType */ Gee.EqualDataFunc, /* resultTarget */ object | null ]
    /* Methods of Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    mapIterator(): Gee.MapIterator
    clear(): void
    foreach(f: Gee.ForallFunc): boolean
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
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
    getSize(): number
    getReadOnly(): boolean
    getKeys(): Gee.Set
    getValues(): Gee.Collection
    getEntries(): Gee.Set
    getReadOnlyView(): Gee.Map
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
    /* Methods of GXml.Serializable */
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultListSerializableProperties(): GObject.ParamSpec[]
    getUnknownSerializableProperties(): Gee.Map
    getUnknownSerializableNodes(): Gee.Collection
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
    /* Methods of GXml.SerializableCollection */
    isCollection(): boolean
    /* Virtual methods of GXml.SerializableHashMap */
    vfuncDeserializeProceed(): boolean
    vfuncDeserialized(): boolean
    vfuncDeserializeNode(node: Node): boolean
    vfuncDeserializeChildren(): boolean
    vfuncSetDefaultNamespace(node: Node): boolean
    vfuncGetEnableUnknownSerializableProperty(): boolean
    vfuncSerializeUseXmlNodeValue(): boolean
    vfuncPropertyUseNick(): boolean
    vfuncNodeName(): string
    vfuncFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncListSerializableProperties(): GObject.ParamSpec[]
    vfuncSerialize(node: Node): Node | null
    vfuncSerializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    vfuncDeserialize(node: Node): boolean
    vfuncDeserializeProperty(propertyNode: Node): boolean
    vfuncDefaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncDefaultListSerializableProperties(): GObject.ParamSpec[]
    vfuncGetUnknownSerializableProperties(): Gee.Map
    vfuncGetUnknownSerializableNodes(): Gee.Collection
    vfuncGetSerializedXmlNodeValue(): string | null
    vfuncSetSerializedXmlNodeValue(value?: string | null): void
    vfuncIsCollection(): boolean
    /* Virtual methods of Gee.AbstractMap */
    vfuncHasKey(key?: object | null): boolean
    vfuncHas(key?: object | null, value?: object | null): boolean
    vfuncGet(key?: object | null): object | null
    vfuncSet(key?: object | null, value?: object | null): void
    vfuncUnset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfuncMapIterator(): Gee.MapIterator
    vfuncClear(): void
    vfuncForeach(f: Gee.ForallFunc): boolean
    vfuncStream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetSize(): number
    vfuncGetReadOnly(): boolean
    vfuncGetKeys(): Gee.Set
    vfuncGetValues(): Gee.Collection
    vfuncGetEntries(): Gee.Set
    vfuncGetReadOnlyView(): Gee.Map
    vfuncFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfuncMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfuncScan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfuncFilter(pred: Gee.Predicate): Gee.Iterator
    vfuncChop(offset: number, length: number): Gee.Iterator
    vfuncFlatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfuncTee(forks: number): Gee.Iterator[]
    vfuncFirstMatch(pred: Gee.Predicate): object | null
    vfuncAnyMatch(pred: Gee.Predicate): boolean
    vfuncAllMatch(pred: Gee.Predicate): boolean
    vfuncMax(compare: GLib.CompareDataFunc): object | null
    vfuncMin(compare: GLib.CompareDataFunc): object | null
    vfuncOrderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfuncGetElementType(): GObject.Type
    vfuncIterator(): Gee.Iterator
    vfuncSetAll(map: Gee.Map): void
    vfuncUnsetAll(map: Gee.Map): boolean
    vfuncHasAll(map: Gee.Map): boolean
    vfuncGetIsEmpty(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableHashMap, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property", callback: (($obj: SerializableHashMap, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    on(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableHashMap, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableHashMap, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    on(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableHashMap, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property", callback: (($obj: SerializableHashMap, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    on(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableHashMap, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableHashMap, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
    on(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::properties", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SerializableHashMap_ConstructProps)
    _init (config?: SerializableHashMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableHashMap
    static new(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: Gee.HashDataFunc | null, keyEqualFunc: Gee.EqualDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): SerializableHashMap
    static stringToGvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    static gvalueToString(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableDualKeyMap_ConstructProps extends GObject.Object_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignoredSerializableProperties?: GLib.HashTable
    serializedXmlNodeValue?: string
}
export class SerializableDualKeyMap {
    /* Properties of GXml.SerializableDualKeyMap */
    readonly valueType: GObject.Type
    readonly primaryKeyType: GObject.Type
    readonly secondaryKeyType: GObject.Type
    readonly primaryKeys: Gee.Collection
    readonly size: number
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    /* Properties of GXml.Serializable */
    readonly unknownSerializableProperties: Gee.Map
    readonly unknownSerializableNodes: Gee.Collection
    serializedXmlNodeValue: string
    /* Fields of GXml.SerializableDualKeyMap */
    parentInstance: GObject.Object
    priv: SerializableDualKeyMapPrivate
    storage: Gee.HashMultiMap
    node: Node
    deserialized: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableDualKeyMap */
    deserializeProceed(): boolean
    deserializeNode(node: Node): boolean
    deserializeChildren(): boolean
    secondaryKeys(key?: object | null): Gee.Collection
    valuesForKey(primaryKey?: object | null): Gee.Collection
    values(): Gee.Collection
    set(primaryKey?: object | null, secundaryKey?: object | null, val?: object | null): void
    get(primaryKey?: object | null, secondaryKey?: object | null): object | null
    setDefaultNamespace(node: Node): boolean
    getEnableUnknownSerializableProperty(): boolean
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    nodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    listSerializableProperties(): GObject.ParamSpec[]
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): boolean
    defaultDeserialize(node: Node): boolean
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
    getValueType(): GObject.Type
    getPrimaryKeyType(): GObject.Type
    getSecondaryKeyType(): GObject.Type
    getPrimaryKeys(): Gee.Collection
    getSize(): number
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
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
    /* Methods of Gee.Traversable */
    foreach(f: Gee.ForallFunc): boolean
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    fold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    map(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    scan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    filter(pred: Gee.Predicate): Gee.Iterator
    chop(offset: number, length: number): Gee.Iterator
    flatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    tee(forks: number): Gee.Iterator[]
    firstMatch(pred: Gee.Predicate): object | null
    anyMatch(pred: Gee.Predicate): boolean
    allMatch(pred: Gee.Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    orderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    getElementType(): GObject.Type
    /* Methods of GXml.Serializable */
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultListSerializableProperties(): GObject.ParamSpec[]
    getUnknownSerializableProperties(): Gee.Map
    getUnknownSerializableNodes(): Gee.Collection
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
    /* Methods of GXml.SerializableCollection */
    isCollection(): boolean
    /* Virtual methods of GXml.SerializableDualKeyMap */
    vfuncDeserializeProceed(): boolean
    vfuncDeserialized(): boolean
    vfuncDeserializeNode(node: Node): boolean
    vfuncDeserializeChildren(): boolean
    vfuncSetDefaultNamespace(node: Node): boolean
    vfuncGetEnableUnknownSerializableProperty(): boolean
    vfuncSerializeUseXmlNodeValue(): boolean
    vfuncPropertyUseNick(): boolean
    vfuncNodeName(): string
    vfuncFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncListSerializableProperties(): GObject.ParamSpec[]
    vfuncSerialize(node: Node): Node | null
    vfuncSerializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    vfuncDeserialize(node: Node): boolean
    vfuncDeserializeProperty(propertyNode: Node): boolean
    vfuncForeach(f: Gee.ForallFunc): boolean
    vfuncStream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfuncFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfuncMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfuncScan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfuncFilter(pred: Gee.Predicate): Gee.Iterator
    vfuncChop(offset: number, length: number): Gee.Iterator
    vfuncFlatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfuncTee(forks: number): Gee.Iterator[]
    vfuncFirstMatch(pred: Gee.Predicate): object | null
    vfuncAnyMatch(pred: Gee.Predicate): boolean
    vfuncAllMatch(pred: Gee.Predicate): boolean
    vfuncMax(compare: GLib.CompareDataFunc): object | null
    vfuncMin(compare: GLib.CompareDataFunc): object | null
    vfuncOrderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfuncGetElementType(): GObject.Type
    vfuncDefaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncDefaultListSerializableProperties(): GObject.ParamSpec[]
    vfuncGetUnknownSerializableProperties(): Gee.Map
    vfuncGetUnknownSerializableNodes(): Gee.Collection
    vfuncGetSerializedXmlNodeValue(): string | null
    vfuncSetSerializedXmlNodeValue(value?: string | null): void
    vfuncIsCollection(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableDualKeyMap, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property", callback: (($obj: SerializableDualKeyMap, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    on(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableDualKeyMap, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableDualKeyMap, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    on(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableDualKeyMap, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property", callback: (($obj: SerializableDualKeyMap, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    on(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableDualKeyMap, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableDualKeyMap, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
    on(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-type", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::primary-key-type", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-key-type", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::primary-key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::primary-key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::primary-key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::secondary-key-type", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-key-type", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::secondary-key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::secondary-key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::secondary-key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::primary-keys", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-keys", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::primary-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::primary-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::primary-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::properties", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SerializableDualKeyMap_ConstructProps)
    _init (config?: SerializableDualKeyMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableDualKeyMap
    static stringToGvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    static gvalueToString(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableArrayList_ConstructProps extends Gee.ArrayList_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignoredSerializableProperties?: GLib.HashTable
    serializedXmlNodeValue?: string
}
export class SerializableArrayList {
    /* Properties of GXml.SerializableArrayList */
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    /* Properties of Gee.AbstractBidirList */
    readonly readOnlyView: Gee.BidirList
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Properties of GXml.Serializable */
    readonly unknownSerializableProperties: Gee.Map
    readonly unknownSerializableNodes: Gee.Collection
    serializedXmlNodeValue: string
    /* Fields of GXml.SerializableArrayList */
    parentInstance: Gee.ArrayList
    priv: SerializableArrayListPrivate
    node: Node
    deserialized: boolean
    /* Fields of Gee.ArrayList */
    items: object[]
    itemsLength1: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableArrayList */
    deserializeProceed(): boolean
    deserializeNode(node: Node): boolean
    deserializeChildren(): boolean
    setDefaultNamespace(node: Node): boolean
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    nodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    listSerializableProperties(): GObject.ParamSpec[]
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): boolean
    defaultDeserialize(node: Node): boolean
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    /* Methods of Gee.ArrayList */
    addAll(collection: Gee.Collection): boolean
    getEqualFunc(): [ /* returnType */ Gee.EqualDataFunc, /* resultTarget */ object | null ]
    /* Methods of Gee.AbstractBidirList */
    bidirListIterator(): Gee.BidirListIterator
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
    getReadOnlyView(): Gee.BidirList
    /* Methods of Gee.AbstractList */
    listIterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    getReadOnlyView(): Gee.List
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Gee.Collection
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
    /* Methods of GXml.Serializable */
    getEnableUnknownSerializableProperty(): boolean
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultListSerializableProperties(): GObject.ParamSpec[]
    getUnknownSerializableProperties(): Gee.Map
    getUnknownSerializableNodes(): Gee.Collection
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
    /* Methods of GXml.SerializableCollection */
    isCollection(): boolean
    /* Virtual methods of GXml.SerializableArrayList */
    vfuncDeserializeProceed(): boolean
    vfuncDeserialized(): boolean
    vfuncDeserializeNode(node: Node): boolean
    vfuncDeserializeChildren(): boolean
    vfuncSetDefaultNamespace(node: Node): boolean
    vfuncSerializeUseXmlNodeValue(): boolean
    vfuncPropertyUseNick(): boolean
    vfuncNodeName(): string
    vfuncFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncListSerializableProperties(): GObject.ParamSpec[]
    vfuncSerialize(node: Node): Node | null
    vfuncSerializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    vfuncDeserialize(node: Node): boolean
    vfuncDeserializeProperty(propertyNode: Node): boolean
    vfuncGetEnableUnknownSerializableProperty(): boolean
    vfuncDefaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncDefaultListSerializableProperties(): GObject.ParamSpec[]
    vfuncGetUnknownSerializableProperties(): Gee.Map
    vfuncGetUnknownSerializableNodes(): Gee.Collection
    vfuncGetSerializedXmlNodeValue(): string | null
    vfuncSetSerializedXmlNodeValue(value?: string | null): void
    vfuncIsCollection(): boolean
    vfuncGetReadOnlyView(): Gee.BidirList
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    /* Virtual methods of Gee.ArrayList */
    vfuncGetReadOnlyView(): Gee.BidirList
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    /* Virtual methods of Gee.AbstractBidirList */
    vfuncBidirListIterator(): Gee.BidirListIterator
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetReadOnlyView(): Gee.BidirList
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    /* Virtual methods of Gee.AbstractList */
    vfuncListIterator(): Gee.ListIterator
    vfuncGet(index: number): object | null
    vfuncSet(index: number, item?: object | null): void
    vfuncIndexOf(item?: object | null): number
    vfuncInsert(index: number, item?: object | null): void
    vfuncRemoveAt(index: number): object | null
    vfuncSlice(start: number, stop: number): Gee.List | null
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    vfuncFirst(): object | null
    vfuncLast(): object | null
    vfuncInsertAll(index: number, collection: Gee.Collection): void
    vfuncSort(compareFunc: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee.AbstractCollection */
    vfuncContains(item?: object | null): boolean
    vfuncAdd(item?: object | null): boolean
    vfuncRemove(item?: object | null): boolean
    vfuncClear(): void
    vfuncIterator(): Gee.Iterator
    vfuncForeach(f: Gee.ForallFunc): boolean
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetSize(): number
    vfuncGetReadOnly(): boolean
    vfuncGetReadOnlyView(): Gee.Collection
    vfuncStream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfuncFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfuncMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfuncScan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfuncFilter(pred: Gee.Predicate): Gee.Iterator
    vfuncChop(offset: number, length: number): Gee.Iterator
    vfuncFlatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfuncTee(forks: number): Gee.Iterator[]
    vfuncFirstMatch(pred: Gee.Predicate): object | null
    vfuncAnyMatch(pred: Gee.Predicate): boolean
    vfuncAllMatch(pred: Gee.Predicate): boolean
    vfuncMax(compare: GLib.CompareDataFunc): object | null
    vfuncMin(compare: GLib.CompareDataFunc): object | null
    vfuncOrderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfuncGetElementType(): GObject.Type
    vfuncAddAll(collection: Gee.Collection): boolean
    vfuncContainsAll(collection: Gee.Collection): boolean
    vfuncRemoveAll(collection: Gee.Collection): boolean
    vfuncRetainAll(collection: Gee.Collection): boolean
    vfuncToArray(): object[]
    vfuncAddAllArray(array: object[]): boolean
    vfuncContainsAllArray(array: object[]): boolean
    vfuncRemoveAllArray(array: object[]): boolean
    vfuncAddAllIterator(iter: Gee.Iterator): boolean
    vfuncContainsAllIterator(iter: Gee.Iterator): boolean
    vfuncRemoveAllIterator(iter: Gee.Iterator): boolean
    vfuncGetIsEmpty(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableArrayList, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property", callback: (($obj: SerializableArrayList, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    on(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableArrayList, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableArrayList, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    on(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableArrayList, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property", callback: (($obj: SerializableArrayList, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    on(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableArrayList, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableArrayList, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
    on(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::properties", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-properties", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-nodes", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serialized-xml-node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SerializableArrayList_ConstructProps)
    _init (config?: SerializableArrayList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableArrayList
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): SerializableArrayList
    static stringToGvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    static gvalueToString(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableContainer_ConstructProps extends SerializableObjectModel_ConstructProps {
}
export class SerializableContainer {
    /* Properties of GXml.SerializableObjectModel */
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    /* Fields of GXml.SerializableContainer */
    parentInstance: SerializableObjectModel
    priv: SerializableContainerPrivate
    /* Fields of GXml.SerializableObjectModel */
    node: Node
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableContainer */
    initContainers(): void
    /* Methods of GXml.SerializableObjectModel */
    getEnableUnknownSerializableProperty(): boolean
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    setDefaultNamespace(node: Node): boolean
    nodeName(): string
    defaultNodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    listSerializableProperties(): GObject.ParamSpec[]
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): boolean
    defaultDeserialize(node: Node): boolean
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
    toString(): string
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
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
    /* Virtual methods of GXml.SerializableContainer */
    vfuncInitContainers(): void
    /* Virtual methods of GXml.SerializableObjectModel */
    vfuncGetEnableUnknownSerializableProperty(): boolean
    vfuncSerializeUseXmlNodeValue(): boolean
    vfuncPropertyUseNick(): boolean
    vfuncSetDefaultNamespace(node: Node): boolean
    vfuncNodeName(): string
    vfuncFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncListSerializableProperties(): GObject.ParamSpec[]
    vfuncSerialize(node: Node): Node | null
    vfuncSerializeProperty(element: Node, prop: GObject.ParamSpec): Node | null
    vfuncDeserialize(node: Node): boolean
    vfuncDeserializeProperty(propertyNode: Node): boolean
    vfuncToString(): string
    vfuncDefaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncDefaultListSerializableProperties(): GObject.ParamSpec[]
    vfuncGetUnknownSerializableProperties(): Gee.Map
    vfuncGetUnknownSerializableNodes(): Gee.Collection
    vfuncGetSerializedXmlNodeValue(): string | null
    vfuncSetSerializedXmlNodeValue(value?: string | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::properties", callback: (($obj: SerializableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SerializableContainer_ConstructProps)
    _init (config?: SerializableContainer_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TAttribute_ConstructProps extends TNode_ConstructProps {
    namespace?: Namespace
}
export class TAttribute {
    /* Properties of GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly typeNode: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml.Attribute */
    namespace: Namespace
    readonly prefix: string
    /* Fields of GXml.TAttribute */
    parentInstance: TNode
    priv: TAttributePrivate
    /* Fields of GXml.TNode */
    doc: Document
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.TNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    setParent(node: Node): void
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getDocument(): Document
    getName(): string
    getNamespaces(): Gee.List
    getTypeNode(): NodeType
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.Attribute */
    getNamespace(): Namespace
    setNamespace(value: Namespace): void
    getPrefix(): string
    /* Virtual methods of GXml.TAttribute */
    vfuncGetNamespace(): Namespace
    vfuncSetNamespace(value: Namespace): void
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncGetPrefix(): string
    /* Virtual methods of GXml.TNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncSetParent(node: Node): void
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetDocument(): Document
    vfuncGetName(): string
    vfuncGetNamespaces(): Gee.List
    vfuncGetTypeNode(): NodeType
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: TAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly typeNode: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml.Comment */
    readonly str: string
    /* Fields of GXml.TComment */
    parentInstance: TNode
    priv: TCommentPrivate
    /* Fields of GXml.TNode */
    doc: Document
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.TNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    setParent(node: Node): void
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getDocument(): Document
    getName(): string
    getNamespaces(): Gee.List
    getTypeNode(): NodeType
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.Comment */
    getStr(): string
    /* Virtual methods of GXml.TComment */
    vfuncGetStr(): string
    /* Virtual methods of GXml.TNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncSetParent(node: Node): void
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetDocument(): Document
    vfuncGetName(): string
    vfuncGetNamespaces(): Gee.List
    vfuncGetTypeNode(): NodeType
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::str", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: TComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly typeNode: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml.CDATA */
    readonly str: string
    /* Fields of GXml.TCDATA */
    parentInstance: TNode
    priv: TCDATAPrivate
    /* Fields of GXml.TNode */
    doc: Document
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.TNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    setParent(node: Node): void
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getDocument(): Document
    getName(): string
    getNamespaces(): Gee.List
    getTypeNode(): NodeType
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.CDATA */
    getStr(): string
    /* Virtual methods of GXml.TCDATA */
    vfuncGetStr(): string
    /* Virtual methods of GXml.TNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncSetParent(node: Node): void
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetDocument(): Document
    vfuncGetName(): string
    vfuncGetNamespaces(): Gee.List
    vfuncGetTypeNode(): NodeType
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::str", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: TCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TCDATA_ConstructProps)
    _init (config?: TCDATA_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(d: Document, text: string): TCDATA
    static $gtype: GObject.Type
}
export interface TDocument_ConstructProps extends TNode_ConstructProps {
    indent?: boolean
    nsTop?: boolean
    prefixDefaultNs?: boolean
    backup?: boolean
    file?: Gio.File
}
export class TDocument {
    /* Properties of GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly typeNode: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml.Document */
    indent: boolean
    nsTop: boolean
    prefixDefaultNs: boolean
    backup: boolean
    readonly root: Node
    file: Gio.File
    /* Fields of GXml.TDocument */
    parentInstance: TNode
    priv: TDocumentPrivate
    /* Fields of GXml.TNode */
    doc: Document
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.TDocument */
    saveTo(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of GXml.TNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    setParent(node: Node): void
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getDocument(): Document
    getName(): string
    getNamespaces(): Gee.List
    getTypeNode(): NodeType
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.Document */
    createElement(name: string): Node
    createText(text: string): Node
    createComment(text: string): Node
    createCdata(text: string): Node
    createPi(target: string, data: string): Node
    save(cancellable?: Gio.Cancellable | null): boolean
    saveAs(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    getIndent(): boolean
    setIndent(value: boolean): void
    getNsTop(): boolean
    setNsTop(value: boolean): void
    getPrefixDefaultNs(): boolean
    setPrefixDefaultNs(value: boolean): void
    getBackup(): boolean
    setBackup(value: boolean): void
    getRoot(): Node
    getFile(): Gio.File
    setFile(value: Gio.File): void
    /* Virtual methods of GXml.TDocument */
    vfuncCreateElement(name: string): Node
    vfuncCreateText(text: string): Node
    vfuncCreateComment(text: string): Node
    vfuncCreateCdata(text: string): Node
    vfuncCreatePi(target: string, data: string): Node
    vfuncSave(cancellable?: Gio.Cancellable | null): boolean
    vfuncSaveAs(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    vfuncGetIndent(): boolean
    vfuncSetIndent(value: boolean): void
    vfuncGetNsTop(): boolean
    vfuncSetNsTop(value: boolean): void
    vfuncGetPrefixDefaultNs(): boolean
    vfuncSetPrefixDefaultNs(value: boolean): void
    vfuncGetBackup(): boolean
    vfuncSetBackup(value: boolean): void
    vfuncGetRoot(): Node
    vfuncGetFile(): Gio.File
    vfuncSetFile(value: Gio.File): void
    /* Virtual methods of GXml.TNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncSetParent(node: Node): void
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetDocument(): Document
    vfuncGetName(): string
    vfuncGetNamespaces(): Gee.List
    vfuncGetTypeNode(): NodeType
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ns-top", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ns-top", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ns-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ns-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ns-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix-default-ns", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix-default-ns", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix-default-ns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix-default-ns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix-default-ns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backup", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backup", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: TDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TDocument_ConstructProps)
    _init (config?: TDocument_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TDocument
    static fromPath(path: string): TDocument
    static fromUri(uri: string): TDocument
    static fromFile(file: Gio.File): TDocument
    static fromStream(stream: Gio.InputStream): TDocument
    static fromString(str: string): TDocument
    static fromPathWithReadtypeFunc(path: string, func: TDocumentReadTypeFunc): TDocument
    static fromUriWithReadtypeFunc(uri: string, func: TDocumentReadTypeFunc): TDocument
    static fromFileWithReadtypeFunc(file: Gio.File, func: TDocumentReadTypeFunc): TDocument
    static fromStreamWithReadtypeFunc(stream: Gio.InputStream, func: TDocumentReadTypeFunc): TDocument
    static fromStringWithReadtypeFunc(str: string, func: TDocumentReadTypeFunc): TDocument
    static twSaveAs(doc: Document, f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    static writeDocument(doc: Document, tw: libxml2.TextWriter): void
    static startNode(doc: Document, tw: libxml2.TextWriter, node: Node, root: boolean, declaredNs: Gee.ArrayList): /* declaredNs */ Gee.ArrayList
    static readDoc(doc: Document, file: Gio.File, rtfunc?: TDocumentReadTypeFunc | null): void
    static readDocStream(doc: Document, istream: Gio.InputStream, rtfunc?: TDocumentReadTypeFunc | null): void
    static readNode(node: Node, tr: libxml2.TextReader, rntfunc?: TDocumentReadTypeFunc | null): TDocumentReadType
    static newDefault(): Document
    static newDefaultForPath(path: string): Document
    static newDefaultForFile(f: Gio.File): Document
    static $gtype: GObject.Type
}
export interface TElement_ConstructProps extends TNode_ConstructProps {
    content?: string
}
export class TElement {
    /* Properties of GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly typeNode: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml.Element */
    readonly tagName: string
    content: string
    /* Fields of GXml.TElement */
    parentInstance: TNode
    priv: TElementPrivate
    /* Fields of GXml.TNode */
    doc: Document
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.TNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    setParent(node: Node): void
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getDocument(): Document
    getName(): string
    getNamespaces(): Gee.List
    getTypeNode(): NodeType
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.Element */
    normalize(): void
    setAttr(name: string, value: string): void
    getAttr(name: string): Node
    removeAttr(name: string): void
    setNsAttr(ns: Namespace, name: string, value: string): void
    getNsAttr(name: string, uri: string): Node
    getTagName(): string
    getContent(): string
    setContent(value: string): void
    /* Virtual methods of GXml.TElement */
    vfuncNormalize(): void
    vfuncSetAttr(name: string, value: string): void
    vfuncGetAttr(name: string): Node
    vfuncRemoveAttr(name: string): void
    vfuncSetNsAttr(ns: Namespace, name: string, value: string): void
    vfuncGetNsAttr(name: string, uri: string): Node
    vfuncGetTagName(): string
    vfuncGetContent(): string
    vfuncSetContent(value: string): void
    /* Virtual methods of GXml.TNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncSetParent(node: Node): void
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetDocument(): Document
    vfuncGetName(): string
    vfuncGetNamespaces(): Gee.List
    vfuncGetTypeNode(): NodeType
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tag-name", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tag-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tag-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tag-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: TElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly typeNode: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml.Namespace */
    readonly uri: string
    readonly prefix: string
    /* Fields of GXml.TNamespace */
    parentInstance: TNode
    priv: TNamespacePrivate
    /* Fields of GXml.TNode */
    doc: Document
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.TNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    setParent(node: Node): void
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getDocument(): Document
    getName(): string
    getNamespaces(): Gee.List
    getTypeNode(): NodeType
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.Namespace */
    getUri(): string
    getPrefix(): string
    /* Virtual methods of GXml.TNamespace */
    vfuncGetUri(): string
    vfuncGetPrefix(): string
    /* Virtual methods of GXml.TNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncSetParent(node: Node): void
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetDocument(): Document
    vfuncGetName(): string
    vfuncGetNamespaces(): Gee.List
    vfuncGetTypeNode(): NodeType
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: TNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly typeNode: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml.Node */
    readonly childs: Gee.BidirList
    /* Fields of GXml.TNode */
    parentInstance: GObject.Object
    priv: TNodePrivate
    doc: Document
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.TNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    setParent(node: Node): void
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getDocument(): Document
    getName(): string
    getNamespaces(): Gee.List
    getTypeNode(): NodeType
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.Node */
    get(key: string): Node | null
    getElementsByPropertyValue(property: string, value: string): ElementList
    nsPrefix(): string
    nsUri(): string
    getChilds(): Gee.BidirList
    /* Virtual methods of GXml.TNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncSetParent(node: Node): void
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetDocument(): Document
    vfuncGetName(): string
    vfuncGetNamespaces(): Gee.List
    vfuncGetTypeNode(): NodeType
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::childs", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::childs", callback: (($obj: TNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::childs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::childs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::childs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of Gee.AbstractBidirList */
    readonly readOnlyView: Gee.BidirList
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GXml.TNodeTChildrenList */
    parentInstance: Gee.AbstractBidirList
    priv: TNodeTChildrenListPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee.AbstractBidirList */
    bidirListIterator(): Gee.BidirListIterator
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
    getReadOnlyView(): Gee.BidirList
    /* Methods of Gee.AbstractList */
    listIterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    getReadOnlyView(): Gee.List
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Gee.Collection
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
    /* Virtual methods of GXml.TNodeTChildrenList */
    vfuncGetReadOnlyView(): Gee.BidirList
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    /* Virtual methods of Gee.AbstractBidirList */
    vfuncBidirListIterator(): Gee.BidirListIterator
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetReadOnlyView(): Gee.BidirList
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    /* Virtual methods of Gee.AbstractList */
    vfuncListIterator(): Gee.ListIterator
    vfuncGet(index: number): object | null
    vfuncSet(index: number, item?: object | null): void
    vfuncIndexOf(item?: object | null): number
    vfuncInsert(index: number, item?: object | null): void
    vfuncRemoveAt(index: number): object | null
    vfuncSlice(start: number, stop: number): Gee.List | null
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    vfuncFirst(): object | null
    vfuncLast(): object | null
    vfuncInsertAll(index: number, collection: Gee.Collection): void
    vfuncSort(compareFunc: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee.AbstractCollection */
    vfuncContains(item?: object | null): boolean
    vfuncAdd(item?: object | null): boolean
    vfuncRemove(item?: object | null): boolean
    vfuncClear(): void
    vfuncIterator(): Gee.Iterator
    vfuncForeach(f: Gee.ForallFunc): boolean
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetSize(): number
    vfuncGetReadOnly(): boolean
    vfuncGetReadOnlyView(): Gee.Collection
    vfuncStream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfuncFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfuncMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfuncScan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfuncFilter(pred: Gee.Predicate): Gee.Iterator
    vfuncChop(offset: number, length: number): Gee.Iterator
    vfuncFlatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfuncTee(forks: number): Gee.Iterator[]
    vfuncFirstMatch(pred: Gee.Predicate): object | null
    vfuncAnyMatch(pred: Gee.Predicate): boolean
    vfuncAllMatch(pred: Gee.Predicate): boolean
    vfuncMax(compare: GLib.CompareDataFunc): object | null
    vfuncMin(compare: GLib.CompareDataFunc): object | null
    vfuncOrderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfuncGetElementType(): GObject.Type
    vfuncAddAll(collection: Gee.Collection): boolean
    vfuncContainsAll(collection: Gee.Collection): boolean
    vfuncRemoveAll(collection: Gee.Collection): boolean
    vfuncRetainAll(collection: Gee.Collection): boolean
    vfuncToArray(): object[]
    vfuncAddAllArray(array: object[]): boolean
    vfuncContainsAllArray(array: object[]): boolean
    vfuncRemoveAllArray(array: object[]): boolean
    vfuncAddAllIterator(iter: Gee.Iterator): boolean
    vfuncContainsAllIterator(iter: Gee.Iterator): boolean
    vfuncRemoveAllIterator(iter: Gee.Iterator): boolean
    vfuncGetIsEmpty(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TNodeTChildrenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TNodeTChildrenList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: TNodeTChildrenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: TNodeTChildrenList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: TNodeTChildrenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TNodeTChildrenList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: TNodeTChildrenList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: TNodeTChildrenList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly typeNode: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml.ProcessingInstruction */
    readonly target: string
    readonly data: string
    /* Fields of GXml.TProcessingInstruction */
    parentInstance: TNode
    priv: TProcessingInstructionPrivate
    /* Fields of GXml.TNode */
    doc: Document
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.TNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    setParent(node: Node): void
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getDocument(): Document
    getName(): string
    getNamespaces(): Gee.List
    getTypeNode(): NodeType
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.ProcessingInstruction */
    getTarget(): string
    getData(): string
    /* Virtual methods of GXml.TProcessingInstruction */
    vfuncGetTarget(): string
    vfuncGetData(): string
    /* Virtual methods of GXml.TNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncSetParent(node: Node): void
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetDocument(): Document
    vfuncGetName(): string
    vfuncGetNamespaces(): Gee.List
    vfuncGetTypeNode(): NodeType
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::target", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: TProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of GXml.TNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly document: Document
    readonly name: string
    readonly namespaces: Gee.List
    readonly typeNode: NodeType
    value: string
    readonly parent: Node
    /* Properties of GXml.Text */
    readonly str: string
    /* Fields of GXml.TText */
    parentInstance: TNode
    priv: TTextPrivate
    /* Fields of GXml.TNode */
    doc: Document
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.TNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    setParent(node: Node): void
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getDocument(): Document
    getName(): string
    getNamespaces(): Gee.List
    getTypeNode(): NodeType
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Methods of GXml.Text */
    getStr(): string
    /* Virtual methods of GXml.TText */
    vfuncGetStr(): string
    /* Virtual methods of GXml.TNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncSetParent(node: Node): void
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetDocument(): Document
    vfuncGetName(): string
    vfuncGetNamespaces(): Gee.List
    vfuncGetTypeNode(): NodeType
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::str", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: TText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of GXml.HtmlDocument */
    readonly defaultOptions: number
    /* Properties of GXml.xDocument */
    doctype: xDocumentType
    implementation: Implementation
    documentElement: xElement
    readonly root: Node
    /* Properties of GXml.xNode */
    namespaceDefinitions: Gee.List
    namespaceUri: string
    namespacePrefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: xNode
    childNodes: xNodeList
    firstChild: xNode
    lastChild: xNode
    previousSibling: xNode
    nextSibling: xNode
    attributes: NamedAttrMap
    ownerDocument: xDocument
    readonly namespaces: Gee.List
    readonly children: Gee.BidirList
    readonly attrs: Gee.Map
    readonly name: string
    value: string
    readonly parent: Node
    /* Fields of GXml.HtmlDocument */
    parentInstance: xDocument
    priv: HtmlDocumentPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.HtmlDocument */
    getElementsByClassName(klass: string): ElementList
    getElementById(id: string): Element | null
    /* Methods of GXml.xDocument */
    saveToPath(filePath: string): void
    saveToStream(outstream: Gio.OutputStream, can?: Gio.Cancellable | null): void
    createDocumentFragment(): DocumentFragment
    createTextNode(textData: string): xText
    createManagedComment(commentData: string): xComment
    createCdataSection(cdataData: string): xCDATASection
    createProcessingInstruction(target: string, data: string): xProcessingInstruction
    createAttribute(name: string): xAttr
    createEntityReference(name: string): EntityReference
    getElementsByTagName(tagName: string): xNodeList
    copyNode(foreignNode: xNode, deep: boolean): xNode
    getDoctype(): xDocumentType | null
    getImplementation(): Implementation
    getDocumentElement(): xElement
    getRoot(): Node
    /* Methods of GXml.xNode */
    addNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    setNamespace(uri: string, namespacePrefix?: string | null): boolean
    insertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    replaceChild(newChild: xNode, oldChild: xNode): xNode | null
    removeChild(oldChild: xNode): xNode | null
    appendChild(newChild: xNode): xNode | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): xNode | null
    stringify(format: boolean, level: number): string
    toString(): string
    getNamespaceDefinitions(): Gee.List | null
    getNamespaceUri(): string | null
    getNamespacePrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): xNode | null
    getChildNodes(): xNodeList | null
    getFirstChild(): xNode | null
    getLastChild(): xNode | null
    getPreviousSibling(): xNode | null
    getNextSibling(): xNode | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): xDocument
    getNamespaces(): Gee.List
    getChildren(): Gee.BidirList
    getAttrs(): Gee.Map
    getName(): string
    getValue(): string
    setValue(value: string): void
    getParent(): Node
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
    /* Virtual methods of GXml.xDocument */
    vfuncGetRoot(): Node
    vfuncCreateElement(name: string): Node
    vfuncCreateText(text: string): Node
    vfuncCreateComment(text: string): Node
    vfuncCreateCdata(text: string): Node
    vfuncCreatePi(target: string, data: string): Node
    vfuncSave(cancellable?: Gio.Cancellable | null): boolean
    vfuncSaveAs(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    vfuncGetIndent(): boolean
    vfuncSetIndent(value: boolean): void
    vfuncGetNsTop(): boolean
    vfuncSetNsTop(value: boolean): void
    vfuncGetPrefixDefaultNs(): boolean
    vfuncSetPrefixDefaultNs(value: boolean): void
    vfuncGetBackup(): boolean
    vfuncSetBackup(value: boolean): void
    vfuncGetFile(): Gio.File
    vfuncSetFile(value: Gio.File): void
    /* Virtual methods of GXml.xNode */
    vfuncAddNamespaceAttr(uri: string, namespacePrefix?: string | null): NamespaceAttr | null
    vfuncSetNamespace(uri: string, namespacePrefix?: string | null): boolean
    vfuncInsertBefore(newChild: xNode, refChild?: xNode | null): xNode | null
    vfuncReplaceChild(newChild: xNode, oldChild: xNode): xNode | null
    vfuncRemoveChild(oldChild: xNode): xNode | null
    vfuncAppendChild(newChild: xNode): xNode | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): xNode | null
    vfuncStringify(format: boolean, level: number): string
    vfuncToString(): string
    vfuncGetNamespaceDefinitions(): Gee.List | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetNamespacePrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): xNode | null
    vfuncGetChildNodes(): xNodeList | null
    vfuncGetFirstChild(): xNode | null
    vfuncGetLastChild(): xNode | null
    vfuncGetPreviousSibling(): xNode | null
    vfuncGetNextSibling(): xNode | null
    vfuncGetAttributes(): NamedAttrMap | null
    vfuncGetNamespaces(): Gee.List
    vfuncGetChildren(): Gee.BidirList
    vfuncGetAttrs(): Gee.Map
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGetParent(): Node
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    vfuncGetTypeNode(): NodeType
    vfuncGetDocument(): Document
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-options", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-options", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::doctype", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::doctype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::doctype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::doctype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::implementation", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::implementation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::implementation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::implementation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document-element", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document-element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document-element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document-element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-prefix", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-prefix", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HtmlDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HtmlDocument_ConstructProps)
    _init (config?: HtmlDocument_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fromPath(path: string, options: number): HtmlDocument
    static fromPath(filePath: string): HtmlDocument
    static fromUri(uri: string, options: number): HtmlDocument
    static fromFile(file: Gio.File, options: number, cancel?: Gio.Cancellable | null): HtmlDocument
    static fromString(html: string, options: number): HtmlDocument
    static fromString(xml: string): HtmlDocument
    static new(): HtmlDocument
    static getDefaultOptions(): number
    static $gtype: GObject.Type
}
export interface GAttribute_ConstructProps extends GNode_ConstructProps {
    namespace?: Namespace
}
export class GAttribute {
    /* Properties of GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly typeNode: NodeType
    readonly name: string
    value: string
    /* Properties of GXml.Attribute */
    namespace: Namespace
    readonly prefix: string
    /* Fields of GXml.GAttribute */
    parentInstance: GNode
    priv: GAttributePrivate
    /* Fields of GXml.GNode */
    doc: GDocument
    node: object | null
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.GNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    getInternalNode(): object | null
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getNamespaces(): Gee.List
    getDocument(): Document
    getParent(): Node
    getTypeNode(): NodeType
    getName(): string
    getValue(): string
    setValue(value: string): void
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
    /* Methods of GXml.Attribute */
    getNamespace(): Namespace
    setNamespace(value: Namespace): void
    getPrefix(): string
    /* Virtual methods of GXml.GAttribute */
    vfuncGetNamespace(): Namespace
    vfuncSetNamespace(value: Namespace): void
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncGetPrefix(): string
    /* Virtual methods of GXml.GNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetNamespaces(): Gee.List
    vfuncGetDocument(): Document
    vfuncGetParent(): Node
    vfuncGetTypeNode(): NodeType
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: GAttribute, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly typeNode: NodeType
    readonly name: string
    value: string
    /* Properties of GXml.Comment */
    readonly str: string
    /* Fields of GXml.GComment */
    parentInstance: GNode
    priv: GCommentPrivate
    /* Fields of GXml.GNode */
    doc: GDocument
    node: object | null
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.GNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    getInternalNode(): object | null
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getNamespaces(): Gee.List
    getDocument(): Document
    getParent(): Node
    getTypeNode(): NodeType
    getName(): string
    getValue(): string
    setValue(value: string): void
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
    /* Methods of GXml.Comment */
    getStr(): string
    /* Virtual methods of GXml.GComment */
    vfuncGetStr(): string
    /* Virtual methods of GXml.GNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetNamespaces(): Gee.List
    vfuncGetDocument(): Document
    vfuncGetParent(): Node
    vfuncGetTypeNode(): NodeType
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::str", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: GComment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly typeNode: NodeType
    readonly name: string
    value: string
    /* Properties of GXml.CDATA */
    readonly str: string
    /* Fields of GXml.GCDATA */
    parentInstance: GNode
    priv: GCDATAPrivate
    /* Fields of GXml.GNode */
    doc: GDocument
    node: object | null
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.GNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    getInternalNode(): object | null
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getNamespaces(): Gee.List
    getDocument(): Document
    getParent(): Node
    getTypeNode(): NodeType
    getName(): string
    getValue(): string
    setValue(value: string): void
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
    /* Methods of GXml.CDATA */
    getStr(): string
    /* Virtual methods of GXml.GCDATA */
    vfuncGetStr(): string
    /* Virtual methods of GXml.GNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetNamespaces(): Gee.List
    vfuncGetDocument(): Document
    vfuncGetParent(): Node
    vfuncGetTypeNode(): NodeType
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::str", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: GCDATA, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GCDATA_ConstructProps)
    _init (config?: GCDATA_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: GDocument, node?: object | null): GCDATA
    static $gtype: GObject.Type
}
export interface GDocument_ConstructProps extends GNode_ConstructProps {
    indent?: boolean
    nsTop?: boolean
    prefixDefaultNs?: boolean
    backup?: boolean
    file?: Gio.File
}
export class GDocument {
    /* Properties of GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly typeNode: NodeType
    readonly name: string
    value: string
    /* Properties of GXml.Document */
    indent: boolean
    nsTop: boolean
    prefixDefaultNs: boolean
    backup: boolean
    readonly root: Node
    file: Gio.File
    /* Fields of GXml.GDocument */
    parentInstance: GNode
    priv: GDocumentPrivate
    doc: object | null
    buffer: libxml2.Buffer
    /* Fields of GXml.GNode */
    node: object | null
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.GDocument */
    libxmlToString(): string
    save(cancellable?: Gio.Cancellable | null): boolean
    saveAs(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of GXml.GNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    getInternalNode(): object | null
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getNamespaces(): Gee.List
    getDocument(): Document
    getParent(): Node
    getTypeNode(): NodeType
    getName(): string
    getValue(): string
    setValue(value: string): void
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
    /* Methods of GXml.Document */
    createElement(name: string): Node
    createText(text: string): Node
    createComment(text: string): Node
    createCdata(text: string): Node
    createPi(target: string, data: string): Node
    getIndent(): boolean
    setIndent(value: boolean): void
    getNsTop(): boolean
    setNsTop(value: boolean): void
    getPrefixDefaultNs(): boolean
    setPrefixDefaultNs(value: boolean): void
    getBackup(): boolean
    setBackup(value: boolean): void
    getRoot(): Node
    getFile(): Gio.File
    setFile(value: Gio.File): void
    /* Virtual methods of GXml.GDocument */
    vfuncSave(cancellable?: Gio.Cancellable | null): boolean
    vfuncSaveAs(f: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    vfuncCreateElement(name: string): Node
    vfuncCreateText(text: string): Node
    vfuncCreateComment(text: string): Node
    vfuncCreateCdata(text: string): Node
    vfuncCreatePi(target: string, data: string): Node
    vfuncGetIndent(): boolean
    vfuncSetIndent(value: boolean): void
    vfuncGetNsTop(): boolean
    vfuncSetNsTop(value: boolean): void
    vfuncGetPrefixDefaultNs(): boolean
    vfuncSetPrefixDefaultNs(value: boolean): void
    vfuncGetBackup(): boolean
    vfuncSetBackup(value: boolean): void
    vfuncGetRoot(): Node
    vfuncGetFile(): Gio.File
    vfuncSetFile(value: Gio.File): void
    /* Virtual methods of GXml.GNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetNamespaces(): Gee.List
    vfuncGetDocument(): Document
    vfuncGetParent(): Node
    vfuncGetTypeNode(): NodeType
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ns-top", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ns-top", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ns-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ns-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ns-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix-default-ns", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix-default-ns", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix-default-ns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix-default-ns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix-default-ns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backup", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backup", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: GDocument, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDocument_ConstructProps)
    _init (config?: GDocument_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GDocument
    static fromPath(path: string, options: number): GDocument
    static fromUri(uri: string, options: number): GDocument
    static fromFile(file: Gio.File, options: number, cancel?: Gio.Cancellable | null): GDocument
    static fromString(str: string, options: number): GDocument
    static fromStream(istream: Gio.InputStream): GDocument
    static fromDoc(doc: libxml2.Doc): GDocument
    static newDefault(): Document
    static newDefaultForPath(path: string): Document
    static newDefaultForFile(f: Gio.File): Document
    static $gtype: GObject.Type
}
export interface GElement_ConstructProps extends GNode_ConstructProps {
    content?: string
}
export class GElement {
    /* Properties of GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly typeNode: NodeType
    readonly name: string
    value: string
    /* Properties of GXml.Element */
    readonly tagName: string
    content: string
    /* Fields of GXml.GElement */
    parentInstance: GNode
    priv: GElementPrivate
    /* Fields of GXml.GNode */
    doc: GDocument
    node: object | null
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.GNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    getInternalNode(): object | null
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getNamespaces(): Gee.List
    getDocument(): Document
    getParent(): Node
    getTypeNode(): NodeType
    getName(): string
    getValue(): string
    setValue(value: string): void
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
    /* Methods of GXml.Element */
    normalize(): void
    setAttr(name: string, value: string): void
    getAttr(name: string): Node
    removeAttr(name: string): void
    setNsAttr(ns: Namespace, name: string, value: string): void
    getNsAttr(name: string, uri: string): Node
    getTagName(): string
    getContent(): string
    setContent(value: string): void
    /* Virtual methods of GXml.GElement */
    vfuncNormalize(): void
    vfuncSetAttr(name: string, value: string): void
    vfuncGetAttr(name: string): Node
    vfuncRemoveAttr(name: string): void
    vfuncSetNsAttr(ns: Namespace, name: string, value: string): void
    vfuncGetNsAttr(name: string, uri: string): Node
    vfuncGetTagName(): string
    vfuncGetContent(): string
    vfuncSetContent(value: string): void
    /* Virtual methods of GXml.GNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetNamespaces(): Gee.List
    vfuncGetDocument(): Document
    vfuncGetParent(): Node
    vfuncGetTypeNode(): NodeType
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tag-name", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tag-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tag-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tag-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: GElement, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly typeNode: NodeType
    readonly name: string
    value: string
    /* Properties of GXml.Namespace */
    readonly uri: string
    readonly prefix: string
    /* Fields of GXml.GNamespace */
    parentInstance: GNode
    priv: GNamespacePrivate
    /* Fields of GXml.GNode */
    doc: GDocument
    node: object | null
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.GNamespace */
    getInternalNs(): object | null
    /* Methods of GXml.GNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    getInternalNode(): object | null
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getNamespaces(): Gee.List
    getDocument(): Document
    getParent(): Node
    getTypeNode(): NodeType
    getName(): string
    getValue(): string
    setValue(value: string): void
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
    /* Methods of GXml.Namespace */
    getUri(): string
    getPrefix(): string
    /* Virtual methods of GXml.GNamespace */
    vfuncGetUri(): string
    vfuncGetPrefix(): string
    /* Virtual methods of GXml.GNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetNamespaces(): Gee.List
    vfuncGetDocument(): Document
    vfuncGetParent(): Node
    vfuncGetTypeNode(): NodeType
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: GNamespace, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly typeNode: NodeType
    readonly name: string
    value: string
    /* Properties of GXml.Node */
    readonly childs: Gee.BidirList
    /* Fields of GXml.GNode */
    parentInstance: GObject.Object
    priv: GNodePrivate
    doc: GDocument
    node: object | null
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.GNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    getInternalNode(): object | null
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getNamespaces(): Gee.List
    getDocument(): Document
    getParent(): Node
    getTypeNode(): NodeType
    getName(): string
    getValue(): string
    setValue(value: string): void
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
    /* Methods of GXml.Node */
    get(key: string): Node | null
    getElementsByPropertyValue(property: string, value: string): ElementList
    nsPrefix(): string
    nsUri(): string
    getChilds(): Gee.BidirList
    /* Virtual methods of GXml.GNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetNamespaces(): Gee.List
    vfuncGetDocument(): Document
    vfuncGetParent(): Node
    vfuncGetTypeNode(): NodeType
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::childs", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::childs", callback: (($obj: GNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::childs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::childs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::childs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GNode_ConstructProps)
    _init (config?: GNode_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static toGnode(doc: GDocument, node?: object | null): Node
    static copy(doc: Document, node: Node, source: Node, deep: boolean): boolean
    static $gtype: GObject.Type
}
export interface GProcessingInstruction_ConstructProps extends GNode_ConstructProps {
}
export class GProcessingInstruction {
    /* Properties of GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly typeNode: NodeType
    readonly name: string
    value: string
    /* Properties of GXml.ProcessingInstruction */
    readonly target: string
    readonly data: string
    /* Fields of GXml.GProcessingInstruction */
    parentInstance: GNode
    priv: GProcessingInstructionPrivate
    /* Fields of GXml.GNode */
    doc: GDocument
    node: object | null
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.GNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    getInternalNode(): object | null
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getNamespaces(): Gee.List
    getDocument(): Document
    getParent(): Node
    getTypeNode(): NodeType
    getName(): string
    getValue(): string
    setValue(value: string): void
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
    /* Methods of GXml.ProcessingInstruction */
    getTarget(): string
    getData(): string
    /* Virtual methods of GXml.GProcessingInstruction */
    vfuncGetTarget(): string
    vfuncGetData(): string
    /* Virtual methods of GXml.GNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetNamespaces(): Gee.List
    vfuncGetDocument(): Document
    vfuncGetParent(): Node
    vfuncGetTypeNode(): NodeType
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::target", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: GProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of GXml.GNode */
    readonly attrs: Gee.Map
    readonly children: Gee.BidirList
    readonly namespaces: Gee.List
    readonly document: Document
    readonly parent: Node
    readonly typeNode: NodeType
    readonly name: string
    value: string
    /* Properties of GXml.Text */
    readonly str: string
    /* Fields of GXml.GText */
    parentInstance: GNode
    priv: GTextPrivate
    /* Fields of GXml.GNode */
    doc: GDocument
    node: object | null
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.GNode */
    setNamespace(uri: string, prefix?: string | null): boolean
    toString(): string
    getInternalNode(): object | null
    getAttrs(): Gee.Map
    getChildren(): Gee.BidirList
    getNamespaces(): Gee.List
    getDocument(): Document
    getParent(): Node
    getTypeNode(): NodeType
    getName(): string
    getValue(): string
    setValue(value: string): void
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
    /* Methods of GXml.Text */
    getStr(): string
    /* Virtual methods of GXml.GText */
    vfuncGetStr(): string
    /* Virtual methods of GXml.GNode */
    vfuncSetNamespace(uri: string, prefix?: string | null): boolean
    vfuncToString(): string
    vfuncGetAttrs(): Gee.Map
    vfuncGetChildren(): Gee.BidirList
    vfuncGetNamespaces(): Gee.List
    vfuncGetDocument(): Document
    vfuncGetParent(): Node
    vfuncGetTypeNode(): NodeType
    vfuncGetName(): string
    vfuncGetValue(): string
    vfuncSetValue(value: string): void
    vfuncGet(key: string): Node | null
    vfuncGetElementsByPropertyValue(property: string, value: string): ElementList
    vfuncNsPrefix(): string
    vfuncNsUri(): string
    vfuncGetChilds(): Gee.BidirList
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attrs", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attrs", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::children", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespaces", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespaces", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-node", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-node", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::str", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::str", callback: (($obj: GText, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::str", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of Gee.AbstractMap */
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    readonly readOnlyView: Gee.Map
    /* Fields of GXml.GHashMapAttr */
    parentInstance: Gee.AbstractMap
    priv: GHashMapAttrPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    mapIterator(): Gee.MapIterator
    clear(): void
    foreach(f: Gee.ForallFunc): boolean
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
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
    getSize(): number
    getReadOnly(): boolean
    getKeys(): Gee.Set
    getValues(): Gee.Collection
    getEntries(): Gee.Set
    getReadOnlyView(): Gee.Map
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
    /* Virtual methods of Gee.AbstractMap */
    vfuncHasKey(key?: object | null): boolean
    vfuncHas(key?: object | null, value?: object | null): boolean
    vfuncGet(key?: object | null): object | null
    vfuncSet(key?: object | null, value?: object | null): void
    vfuncUnset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfuncMapIterator(): Gee.MapIterator
    vfuncClear(): void
    vfuncForeach(f: Gee.ForallFunc): boolean
    vfuncStream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetSize(): number
    vfuncGetReadOnly(): boolean
    vfuncGetKeys(): Gee.Set
    vfuncGetValues(): Gee.Collection
    vfuncGetEntries(): Gee.Set
    vfuncGetReadOnlyView(): Gee.Map
    vfuncFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfuncMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfuncScan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfuncFilter(pred: Gee.Predicate): Gee.Iterator
    vfuncChop(offset: number, length: number): Gee.Iterator
    vfuncFlatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfuncTee(forks: number): Gee.Iterator[]
    vfuncFirstMatch(pred: Gee.Predicate): object | null
    vfuncAnyMatch(pred: Gee.Predicate): boolean
    vfuncAllMatch(pred: Gee.Predicate): boolean
    vfuncMax(compare: GLib.CompareDataFunc): object | null
    vfuncMin(compare: GLib.CompareDataFunc): object | null
    vfuncOrderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfuncGetElementType(): GObject.Type
    vfuncIterator(): Gee.Iterator
    vfuncSetAll(map: Gee.Map): void
    vfuncUnsetAll(map: Gee.Map): boolean
    vfuncHasAll(map: Gee.Map): boolean
    vfuncGetIsEmpty(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: GHashMapAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of Gee.MapEntry */
    readonly key: object
    value: object
    readonly readOnly: boolean
    /* Fields of GXml.GHashMapAttrEntry */
    parentInstance: Gee.MapEntry
    priv: GHashMapAttrEntryPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee.MapEntry */
    getKey(): object | null
    getValue(): object | null
    setValue(value?: object | null): void
    getReadOnly(): boolean
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
    /* Virtual methods of Gee.MapEntry */
    vfuncGetKey(): object | null
    vfuncGetValue(): object | null
    vfuncSetValue(value?: object | null): void
    vfuncGetReadOnly(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key", callback: (($obj: GHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: GHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: GHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: GHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: GHashMapAttrEntry, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of Gee.MapIterator */
    readonly valid: boolean
    readonly mutable: boolean
    readonly readOnly: boolean
    /* Fields of GXml.GHashMapAttrIterator */
    parentInstance: GObject.Object
    priv: GHashMapAttrIteratorPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Gee.MapIterator */
    next(): boolean
    hasNext(): boolean
    getKey(): object | null
    getValue(): object | null
    setValue(value?: object | null): void
    unset(): void
    fold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldMapFunc, seed?: object | null): object | null
    foreach(f: Gee.ForallMapFunc): boolean
    getValid(): boolean
    getMutable(): boolean
    getReadOnly(): boolean
    /* Virtual methods of GXml.GHashMapAttrIterator */
    vfuncNext(): boolean
    vfuncHasNext(): boolean
    vfuncGetKey(): object | null
    vfuncGetValue(): object | null
    vfuncSetValue(value?: object | null): void
    vfuncUnset(): void
    vfuncFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldMapFunc, seed?: object | null): object | null
    vfuncForeach(f: Gee.ForallMapFunc): boolean
    vfuncGetValid(): boolean
    vfuncGetMutable(): boolean
    vfuncGetReadOnly(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valid", callback: (($obj: GHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: GHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mutable", callback: (($obj: GHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mutable", callback: (($obj: GHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mutable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mutable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mutable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: GHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: GHashMapAttrIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of Gee.AbstractBidirList */
    readonly readOnlyView: Gee.BidirList
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GXml.GListChildren */
    parentInstance: Gee.AbstractBidirList
    priv: GListChildrenPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee.AbstractBidirList */
    bidirListIterator(): Gee.BidirListIterator
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
    getReadOnlyView(): Gee.BidirList
    /* Methods of Gee.AbstractList */
    listIterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    getReadOnlyView(): Gee.List
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Gee.Collection
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
    /* Virtual methods of GXml.GListChildren */
    vfuncGetReadOnlyView(): Gee.BidirList
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    /* Virtual methods of Gee.AbstractBidirList */
    vfuncBidirListIterator(): Gee.BidirListIterator
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetReadOnlyView(): Gee.BidirList
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    /* Virtual methods of Gee.AbstractList */
    vfuncListIterator(): Gee.ListIterator
    vfuncGet(index: number): object | null
    vfuncSet(index: number, item?: object | null): void
    vfuncIndexOf(item?: object | null): number
    vfuncInsert(index: number, item?: object | null): void
    vfuncRemoveAt(index: number): object | null
    vfuncSlice(start: number, stop: number): Gee.List | null
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    vfuncFirst(): object | null
    vfuncLast(): object | null
    vfuncInsertAll(index: number, collection: Gee.Collection): void
    vfuncSort(compareFunc: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee.AbstractCollection */
    vfuncContains(item?: object | null): boolean
    vfuncAdd(item?: object | null): boolean
    vfuncRemove(item?: object | null): boolean
    vfuncClear(): void
    vfuncIterator(): Gee.Iterator
    vfuncForeach(f: Gee.ForallFunc): boolean
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetSize(): number
    vfuncGetReadOnly(): boolean
    vfuncGetReadOnlyView(): Gee.Collection
    vfuncStream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfuncFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfuncMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfuncScan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfuncFilter(pred: Gee.Predicate): Gee.Iterator
    vfuncChop(offset: number, length: number): Gee.Iterator
    vfuncFlatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfuncTee(forks: number): Gee.Iterator[]
    vfuncFirstMatch(pred: Gee.Predicate): object | null
    vfuncAnyMatch(pred: Gee.Predicate): boolean
    vfuncAllMatch(pred: Gee.Predicate): boolean
    vfuncMax(compare: GLib.CompareDataFunc): object | null
    vfuncMin(compare: GLib.CompareDataFunc): object | null
    vfuncOrderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfuncGetElementType(): GObject.Type
    vfuncAddAll(collection: Gee.Collection): boolean
    vfuncContainsAll(collection: Gee.Collection): boolean
    vfuncRemoveAll(collection: Gee.Collection): boolean
    vfuncRetainAll(collection: Gee.Collection): boolean
    vfuncToArray(): object[]
    vfuncAddAllArray(array: object[]): boolean
    vfuncContainsAllArray(array: object[]): boolean
    vfuncRemoveAllArray(array: object[]): boolean
    vfuncAddAllIterator(iter: Gee.Iterator): boolean
    vfuncContainsAllIterator(iter: Gee.Iterator): boolean
    vfuncRemoveAllIterator(iter: Gee.Iterator): boolean
    vfuncGetIsEmpty(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GListChildren, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: GListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: GListChildren, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: GListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: GListChildren, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: GListChildren, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: GListChildren, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of Gee.Iterator */
    readonly valid: boolean
    readonly readOnly: boolean
    /* Fields of GXml.GListChildrenIterator */
    parentInstance: GObject.Object
    priv: GListChildrenIteratorPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Gee.Traversable */
    foreach(f: Gee.ForallFunc): boolean
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    fold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    map(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    scan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    filter(pred: Gee.Predicate): Gee.Iterator
    chop(offset: number, length: number): Gee.Iterator
    flatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    tee(forks: number): Gee.Iterator[]
    firstMatch(pred: Gee.Predicate): object | null
    anyMatch(pred: Gee.Predicate): boolean
    allMatch(pred: Gee.Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    orderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    getElementType(): GObject.Type
    /* Methods of Gee.Iterator */
    next(): boolean
    hasNext(): boolean
    get(): object | null
    remove(): void
    getValid(): boolean
    getReadOnly(): boolean
    /* Methods of Gee.BidirIterator */
    previous(): boolean
    hasPrevious(): boolean
    first(): boolean
    last(): boolean
    /* Methods of Gee.ListIterator */
    set(item?: object | null): void
    add(item?: object | null): void
    index(): number
    /* Methods of Gee.BidirListIterator */
    insert(item?: object | null): void
    /* Virtual methods of GXml.GListChildrenIterator */
    vfuncForeach(f: Gee.ForallFunc): boolean
    vfuncStream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfuncFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfuncMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfuncScan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfuncFilter(pred: Gee.Predicate): Gee.Iterator
    vfuncChop(offset: number, length: number): Gee.Iterator
    vfuncFlatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfuncTee(forks: number): Gee.Iterator[]
    vfuncFirstMatch(pred: Gee.Predicate): object | null
    vfuncAnyMatch(pred: Gee.Predicate): boolean
    vfuncAllMatch(pred: Gee.Predicate): boolean
    vfuncMax(compare: GLib.CompareDataFunc): object | null
    vfuncMin(compare: GLib.CompareDataFunc): object | null
    vfuncOrderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfuncGetElementType(): GObject.Type
    vfuncNext(): boolean
    vfuncHasNext(): boolean
    vfuncGet(): object | null
    vfuncRemove(): void
    vfuncGetValid(): boolean
    vfuncGetReadOnly(): boolean
    vfuncPrevious(): boolean
    vfuncHasPrevious(): boolean
    vfuncFirst(): boolean
    vfuncLast(): boolean
    vfuncSet(item?: object | null): void
    vfuncAdd(item?: object | null): void
    vfuncIndex(): number
    vfuncInsert(item?: object | null): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valid", callback: (($obj: GListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: GListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: GListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: GListChildrenIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GListChildrenIterator_ConstructProps)
    _init (config?: GListChildrenIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: GDocument, node?: object | null): GListChildrenIterator
    static unfold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.UnfoldFunc, current?: Gee.Lazy | null): Gee.Iterator
    static concat(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iters: Gee.Iterator): Gee.Iterator
    static $gtype: GObject.Type
}
export interface GListNamespaces_ConstructProps extends Gee.AbstractList_ConstructProps {
}
export class GListNamespaces {
    /* Properties of Gee.AbstractList */
    readonly readOnlyView: Gee.List
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Fields of GXml.GListNamespaces */
    parentInstance: Gee.AbstractList
    priv: GListNamespacesPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gee.AbstractList */
    listIterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
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
    getReadOnlyView(): Gee.List
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Gee.Collection
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
    /* Virtual methods of GXml.GListNamespaces */
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    /* Virtual methods of Gee.AbstractList */
    vfuncListIterator(): Gee.ListIterator
    vfuncGet(index: number): object | null
    vfuncSet(index: number, item?: object | null): void
    vfuncIndexOf(item?: object | null): number
    vfuncInsert(index: number, item?: object | null): void
    vfuncRemoveAt(index: number): object | null
    vfuncSlice(start: number, stop: number): Gee.List | null
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetReadOnlyView(): Gee.List
    vfuncGetReadOnlyView(): Gee.Collection
    vfuncFirst(): object | null
    vfuncLast(): object | null
    vfuncInsertAll(index: number, collection: Gee.Collection): void
    vfuncSort(compareFunc: GLib.CompareDataFunc | null): void
    /* Virtual methods of Gee.AbstractCollection */
    vfuncContains(item?: object | null): boolean
    vfuncAdd(item?: object | null): boolean
    vfuncRemove(item?: object | null): boolean
    vfuncClear(): void
    vfuncIterator(): Gee.Iterator
    vfuncForeach(f: Gee.ForallFunc): boolean
    vfuncReserved0(): void
    vfuncReserved1(): void
    vfuncReserved2(): void
    vfuncReserved3(): void
    vfuncReserved4(): void
    vfuncReserved5(): void
    vfuncReserved6(): void
    vfuncReserved7(): void
    vfuncReserved8(): void
    vfuncReserved9(): void
    vfuncGetSize(): number
    vfuncGetReadOnly(): boolean
    vfuncGetReadOnlyView(): Gee.Collection
    vfuncStream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfuncFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfuncMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfuncScan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfuncFilter(pred: Gee.Predicate): Gee.Iterator
    vfuncChop(offset: number, length: number): Gee.Iterator
    vfuncFlatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfuncTee(forks: number): Gee.Iterator[]
    vfuncFirstMatch(pred: Gee.Predicate): object | null
    vfuncAnyMatch(pred: Gee.Predicate): boolean
    vfuncAllMatch(pred: Gee.Predicate): boolean
    vfuncMax(compare: GLib.CompareDataFunc): object | null
    vfuncMin(compare: GLib.CompareDataFunc): object | null
    vfuncOrderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfuncGetElementType(): GObject.Type
    vfuncAddAll(collection: Gee.Collection): boolean
    vfuncContainsAll(collection: Gee.Collection): boolean
    vfuncRemoveAll(collection: Gee.Collection): boolean
    vfuncRetainAll(collection: Gee.Collection): boolean
    vfuncToArray(): object[]
    vfuncAddAllArray(array: object[]): boolean
    vfuncContainsAllArray(array: object[]): boolean
    vfuncRemoveAllArray(array: object[]): boolean
    vfuncAddAllIterator(iter: Gee.Iterator): boolean
    vfuncContainsAllIterator(iter: Gee.Iterator): boolean
    vfuncRemoveAllIterator(iter: Gee.Iterator): boolean
    vfuncGetIsEmpty(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GListNamespaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GListNamespaces, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: GListNamespaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: GListNamespaces, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: GListNamespaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: GListNamespaces, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: GListNamespaces, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: GListNamespaces, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of Gee.Iterator */
    readonly valid: boolean
    readonly readOnly: boolean
    /* Fields of GXml.GListNamespacesIterator */
    parentInstance: GObject.Object
    priv: GListNamespacesIteratorPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Methods of Gee.Traversable */
    foreach(f: Gee.ForallFunc): boolean
    stream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    fold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    map(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    scan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    filter(pred: Gee.Predicate): Gee.Iterator
    chop(offset: number, length: number): Gee.Iterator
    flatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    tee(forks: number): Gee.Iterator[]
    firstMatch(pred: Gee.Predicate): object | null
    anyMatch(pred: Gee.Predicate): boolean
    allMatch(pred: Gee.Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    orderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    getElementType(): GObject.Type
    /* Methods of Gee.Iterator */
    next(): boolean
    hasNext(): boolean
    get(): object | null
    remove(): void
    getValid(): boolean
    getReadOnly(): boolean
    /* Methods of Gee.ListIterator */
    set(item?: object | null): void
    add(item?: object | null): void
    index(): number
    /* Virtual methods of GXml.GListNamespacesIterator */
    vfuncForeach(f: Gee.ForallFunc): boolean
    vfuncStream(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfuncFold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfuncMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfuncScan(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfuncFilter(pred: Gee.Predicate): Gee.Iterator
    vfuncChop(offset: number, length: number): Gee.Iterator
    vfuncFlatMap(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfuncTee(forks: number): Gee.Iterator[]
    vfuncFirstMatch(pred: Gee.Predicate): object | null
    vfuncAnyMatch(pred: Gee.Predicate): boolean
    vfuncAllMatch(pred: Gee.Predicate): boolean
    vfuncMax(compare: GLib.CompareDataFunc): object | null
    vfuncMin(compare: GLib.CompareDataFunc): object | null
    vfuncOrderBy(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfuncGetElementType(): GObject.Type
    vfuncNext(): boolean
    vfuncHasNext(): boolean
    vfuncGet(): object | null
    vfuncRemove(): void
    vfuncGetValid(): boolean
    vfuncGetReadOnly(): boolean
    vfuncSet(item?: object | null): void
    vfuncAdd(item?: object | null): void
    vfuncIndex(): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GListNamespacesIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GListNamespacesIterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valid", callback: (($obj: GListNamespacesIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: GListNamespacesIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: (($obj: GListNamespacesIterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: GListNamespacesIterator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GListNamespacesIterator_ConstructProps)
    _init (config?: GListNamespacesIterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node?: object | null): GListNamespacesIterator
    static unfold(aType: GObject.Type, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.UnfoldFunc, current?: Gee.Lazy | null): Gee.Iterator
    static concat(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iters: Gee.Iterator): Gee.Iterator
    static $gtype: GObject.Type
}
export abstract class ElementListClass {
    /* Fields of GXml.ElementListClass */
    parentClass: Gee.ArrayListClass
    static name: string
}
export class ElementListPrivate {
    static name: string
}
export abstract class NodeListClass {
    /* Fields of GXml.NodeListClass */
    parentClass: Gee.ArrayListClass
    static name: string
}
export class NodeListPrivate {
    static name: string
}
export abstract class xAttrClass {
    /* Fields of GXml.xAttrClass */
    parentClass: BackedNodeClass
    static name: string
}
export class xAttrPrivate {
    static name: string
}
export abstract class BackedNodeClass {
    /* Fields of GXml.BackedNodeClass */
    parentClass: xNodeClass
    static name: string
}
export class BackedNodePrivate {
    static name: string
}
export abstract class xCDATASectionClass {
    /* Fields of GXml.xCDATASectionClass */
    parentClass: xTextClass
    static name: string
}
export class xCDATASectionPrivate {
    static name: string
}
export abstract class xCharacterDataClass {
    /* Fields of GXml.xCharacterDataClass */
    parentClass: BackedNodeClass
    static name: string
}
export class xCharacterDataPrivate {
    static name: string
}
export abstract class xCommentClass {
    /* Fields of GXml.xCommentClass */
    parentClass: xCharacterDataClass
    static name: string
}
export class xCommentPrivate {
    static name: string
}
export abstract class DocumentFragmentClass {
    /* Fields of GXml.DocumentFragmentClass */
    parentClass: BackedNodeClass
    static name: string
}
export class DocumentFragmentPrivate {
    static name: string
}
export abstract class xDocumentTypeClass {
    /* Fields of GXml.xDocumentTypeClass */
    parentClass: xNodeClass
    static name: string
}
export class xDocumentTypePrivate {
    static name: string
}
export abstract class xDocumentClass {
    /* Fields of GXml.xDocumentClass */
    parentClass: xNodeClass
    static name: string
}
export class xDocumentPrivate {
    static name: string
}
export abstract class xElementClass {
    /* Fields of GXml.xElementClass */
    parentClass: BackedNodeClass
    static name: string
}
export class xElementPrivate {
    static name: string
}
export abstract class EntityClass {
    /* Fields of GXml.EntityClass */
    parentClass: xNodeClass
    static name: string
}
export class EntityPrivate {
    static name: string
}
export abstract class EntityReferenceClass {
    /* Fields of GXml.EntityReferenceClass */
    parentClass: xNodeClass
    static name: string
}
export class EntityReferencePrivate {
    static name: string
}
export abstract class ImplementationClass {
    /* Fields of GXml.ImplementationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ImplementationPrivate {
    static name: string
}
export abstract class AbstractNamedAttrMapClass {
    /* Fields of GXml.AbstractNamedAttrMapClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class AbstractNamedAttrMapPrivate {
    static name: string
}
export abstract class AbstractNamedAttrMapEntryClass {
    /* Fields of GXml.AbstractNamedAttrMapEntryClass */
    parentClass: Gee.MapEntryClass
    static name: string
}
export class AbstractNamedAttrMapEntryPrivate {
    static name: string
}
export abstract class AbstractNamedAttrMapIteratorClass {
    /* Fields of GXml.AbstractNamedAttrMapIteratorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class AbstractNamedAttrMapIteratorPrivate {
    static name: string
}
export abstract class NamedAttrMapClass {
    /* Fields of GXml.NamedAttrMapClass */
    parentClass: AbstractNamedAttrMapClass
    static name: string
}
export class NamedAttrMapPrivate {
    static name: string
}
export abstract class NamespaceAttrClass {
    /* Fields of GXml.NamespaceAttrClass */
    parentClass: xNodeClass
    static name: string
}
export class NamespaceAttrPrivate {
    static name: string
}
export abstract class xNodeClass {
    /* Fields of GXml.xNodeClass */
    parentClass: GObject.ObjectClass
    addNamespaceAttr: (self: xNode, uri: string, namespacePrefix?: string | null) => NamespaceAttr | null
    setNamespace: (self: xNode, uri: string, namespacePrefix?: string | null) => boolean
    insertBefore: (self: xNode, newChild: xNode, refChild?: xNode | null) => xNode | null
    replaceChild: (self: xNode, newChild: xNode, oldChild: xNode) => xNode | null
    removeChild: (self: xNode, oldChild: xNode) => xNode | null
    appendChild: (self: xNode, newChild: xNode) => xNode | null
    hasChildNodes: (self: xNode) => boolean
    cloneNode: (self: xNode, deep: boolean) => xNode | null
    stringify: (self: xNode, format: boolean, level: number) => string
    toString: (self: xNode) => string
    static name: string
}
export class xNodePrivate {
    static name: string
}
export abstract class xNotationClass {
    /* Fields of GXml.xNotationClass */
    parentClass: xNodeClass
    static name: string
}
export class xNotationPrivate {
    static name: string
}
export abstract class xProcessingInstructionClass {
    /* Fields of GXml.xProcessingInstructionClass */
    parentClass: xNodeClass
    static name: string
}
export class xProcessingInstructionPrivate {
    static name: string
}
export abstract class xTextClass {
    /* Fields of GXml.xTextClass */
    parentClass: xCharacterDataClass
    static name: string
}
export class xTextPrivate {
    static name: string
}
export abstract class SerializableBoolClass {
    /* Fields of GXml.SerializableBoolClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SerializableBoolPrivate {
    static name: string
}
export abstract class SerializableDoubleClass {
    /* Fields of GXml.SerializableDoubleClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SerializableDoublePrivate {
    static name: string
}
export abstract class SerializableFloatClass {
    /* Fields of GXml.SerializableFloatClass */
    parentClass: SerializableDoubleClass
    static name: string
}
export class SerializableFloatPrivate {
    static name: string
}
export abstract class SerializableEnumClass {
    /* Fields of GXml.SerializableEnumClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SerializableEnumPrivate {
    static name: string
}
export abstract class SerializableIntClass {
    /* Fields of GXml.SerializableIntClass */
    parentClass: SerializableDoubleClass
    static name: string
}
export class SerializableIntPrivate {
    static name: string
}
export abstract class SerializableValueListClass {
    /* Fields of GXml.SerializableValueListClass */
    parentClass: GObject.ObjectClass
    getValues: (self: SerializableValueList) => Gee.List
    addValues: (self: SerializableValueList, vals: string[]) => void
    getValueAt: (self: SerializableValueList, index: number) => string | null
    selectValueAt: (self: SerializableValueList, index: number) => void
    getValuesArray: (self: SerializableValueList) => string[]
    isValue: (self: SerializableValueList) => boolean
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
    static getNick(enumeration: GObject.Type, val: number): string
    static getNickCamelcase(enumeration: GObject.Type, val: number): string
    static getString(enumeration: GObject.Type, val: number, useNick: boolean, camelcase: boolean): string
    static parse(enumeration: GObject.Type, val: string): GObject.EnumValue | null
    static toArray(enumeration: GObject.Type): GObject.EnumValue[]
    static parseInteger(enumeration: GObject.Type, val: number): GObject.EnumValue | null
    static toStringArray(enumeration: GObject.Type): string[]
}
export abstract class SerializableObjectModelClass {
    /* Fields of GXml.SerializableObjectModelClass */
    parentClass: GObject.ObjectClass
    getEnableUnknownSerializableProperty: (self: SerializableObjectModel) => boolean
    serializeUseXmlNodeValue: (self: SerializableObjectModel) => boolean
    propertyUseNick: (self: SerializableObjectModel) => boolean
    setDefaultNamespace: (self: SerializableObjectModel, node: Node) => boolean
    nodeName: (self: SerializableObjectModel) => string
    findPropertySpec: (self: SerializableObjectModel, propertyName: string) => GObject.ParamSpec | null
    listSerializableProperties: (self: SerializableObjectModel) => GObject.ParamSpec[]
    serialize: (self: SerializableObjectModel, node: Node) => Node | null
    serializeProperty: (self: SerializableObjectModel, element: Node, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableObjectModel, node: Node) => boolean
    deserializeProperty: (self: SerializableObjectModel, propertyNode: Node) => boolean
    toString: (self: SerializableObjectModel) => string
    static name: string
}
export class SerializableObjectModelPrivate {
    static name: string
}
export abstract class SerializableTreeMapClass {
    /* Fields of GXml.SerializableTreeMapClass */
    parentClass: Gee.TreeMapClass
    deserializeProceed: (self: SerializableTreeMap) => boolean
    deserialized: (self: SerializableTreeMap) => boolean
    deserializeNode: (self: SerializableTreeMap, node: Node) => boolean
    deserializeChildren: (self: SerializableTreeMap) => boolean
    setDefaultNamespace: (self: SerializableTreeMap, node: Node) => boolean
    serializeUseXmlNodeValue: (self: SerializableTreeMap) => boolean
    propertyUseNick: (self: SerializableTreeMap) => boolean
    nodeName: (self: SerializableTreeMap) => string
    findPropertySpec: (self: SerializableTreeMap, propertyName: string) => GObject.ParamSpec | null
    listSerializableProperties: (self: SerializableTreeMap) => GObject.ParamSpec[]
    serialize: (self: SerializableTreeMap, node: Node) => Node | null
    serializeProperty: (self: SerializableTreeMap, element: Node, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableTreeMap, node: Node) => boolean
    deserializeProperty: (self: SerializableTreeMap, propertyNode: Node) => boolean
    static name: string
}
export class SerializableTreeMapPrivate {
    static name: string
}
export abstract class SerializableHashMapClass {
    /* Fields of GXml.SerializableHashMapClass */
    parentClass: Gee.HashMapClass
    deserializeProceed: (self: SerializableHashMap) => boolean
    deserialized: (self: SerializableHashMap) => boolean
    deserializeNode: (self: SerializableHashMap, node: Node) => boolean
    deserializeChildren: (self: SerializableHashMap) => boolean
    setDefaultNamespace: (self: SerializableHashMap, node: Node) => boolean
    getEnableUnknownSerializableProperty: (self: SerializableHashMap) => boolean
    serializeUseXmlNodeValue: (self: SerializableHashMap) => boolean
    propertyUseNick: (self: SerializableHashMap) => boolean
    nodeName: (self: SerializableHashMap) => string
    findPropertySpec: (self: SerializableHashMap, propertyName: string) => GObject.ParamSpec | null
    listSerializableProperties: (self: SerializableHashMap) => GObject.ParamSpec[]
    serialize: (self: SerializableHashMap, node: Node) => Node | null
    serializeProperty: (self: SerializableHashMap, element: Node, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableHashMap, node: Node) => boolean
    deserializeProperty: (self: SerializableHashMap, propertyNode: Node) => boolean
    static name: string
}
export class SerializableHashMapPrivate {
    static name: string
}
export abstract class SerializableDualKeyMapClass {
    /* Fields of GXml.SerializableDualKeyMapClass */
    parentClass: GObject.ObjectClass
    deserializeProceed: (self: SerializableDualKeyMap) => boolean
    deserialized: (self: SerializableDualKeyMap) => boolean
    deserializeNode: (self: SerializableDualKeyMap, node: Node) => boolean
    deserializeChildren: (self: SerializableDualKeyMap) => boolean
    setDefaultNamespace: (self: SerializableDualKeyMap, node: Node) => boolean
    getEnableUnknownSerializableProperty: (self: SerializableDualKeyMap) => boolean
    serializeUseXmlNodeValue: (self: SerializableDualKeyMap) => boolean
    propertyUseNick: (self: SerializableDualKeyMap) => boolean
    nodeName: (self: SerializableDualKeyMap) => string
    findPropertySpec: (self: SerializableDualKeyMap, propertyName: string) => GObject.ParamSpec | null
    listSerializableProperties: (self: SerializableDualKeyMap) => GObject.ParamSpec[]
    serialize: (self: SerializableDualKeyMap, node: Node) => Node | null
    serializeProperty: (self: SerializableDualKeyMap, element: Node, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableDualKeyMap, node: Node) => boolean
    deserializeProperty: (self: SerializableDualKeyMap, propertyNode: Node) => boolean
    static name: string
}
export class SerializableDualKeyMapPrivate {
    static name: string
}
export abstract class SerializableArrayListClass {
    /* Fields of GXml.SerializableArrayListClass */
    parentClass: Gee.ArrayListClass
    deserializeProceed: (self: SerializableArrayList) => boolean
    deserialized: (self: SerializableArrayList) => boolean
    deserializeNode: (self: SerializableArrayList, node: Node) => boolean
    deserializeChildren: (self: SerializableArrayList) => boolean
    setDefaultNamespace: (self: SerializableArrayList, node: Node) => boolean
    serializeUseXmlNodeValue: (self: SerializableArrayList) => boolean
    propertyUseNick: (self: SerializableArrayList) => boolean
    nodeName: (self: SerializableArrayList) => string
    findPropertySpec: (self: SerializableArrayList, propertyName: string) => GObject.ParamSpec | null
    listSerializableProperties: (self: SerializableArrayList) => GObject.ParamSpec[]
    serialize: (self: SerializableArrayList, node: Node) => Node | null
    serializeProperty: (self: SerializableArrayList, element: Node, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableArrayList, node: Node) => boolean
    deserializeProperty: (self: SerializableArrayList, propertyNode: Node) => boolean
    static name: string
}
export class SerializableArrayListPrivate {
    static name: string
}
export abstract class SerializableContainerClass {
    /* Fields of GXml.SerializableContainerClass */
    parentClass: SerializableObjectModelClass
    initContainers: (self: SerializableContainer) => void
    static name: string
}
export class SerializableContainerPrivate {
    static name: string
}
export abstract class TAttributeClass {
    /* Fields of GXml.TAttributeClass */
    parentClass: TNodeClass
    static name: string
}
export class TAttributePrivate {
    static name: string
}
export abstract class TCommentClass {
    /* Fields of GXml.TCommentClass */
    parentClass: TNodeClass
    static name: string
}
export class TCommentPrivate {
    static name: string
}
export abstract class TCDATAClass {
    /* Fields of GXml.TCDATAClass */
    parentClass: TNodeClass
    static name: string
}
export class TCDATAPrivate {
    static name: string
}
export abstract class TDocumentClass {
    /* Fields of GXml.TDocumentClass */
    parentClass: TNodeClass
    static name: string
}
export class TDocumentPrivate {
    static name: string
}
export abstract class TElementClass {
    /* Fields of GXml.TElementClass */
    parentClass: TNodeClass
    static name: string
}
export class TElementPrivate {
    static name: string
}
export abstract class TNamespaceClass {
    /* Fields of GXml.TNamespaceClass */
    parentClass: TNodeClass
    static name: string
}
export class TNamespacePrivate {
    static name: string
}
export abstract class TNodeClass {
    /* Fields of GXml.TNodeClass */
    parentClass: GObject.ObjectClass
    setNamespace: (self: TNode, uri: string, prefix?: string | null) => boolean
    toString: (self: TNode) => string
    setParent: (self: TNode, node: Node) => void
    static name: string
}
export class TNodePrivate {
    static name: string
}
export abstract class TNodeTChildrenListClass {
    /* Fields of GXml.TNodeTChildrenListClass */
    parentClass: Gee.AbstractBidirListClass
    static name: string
}
export class TNodeTChildrenListPrivate {
    static name: string
}
export abstract class TProcessingInstructionClass {
    /* Fields of GXml.TProcessingInstructionClass */
    parentClass: TNodeClass
    static name: string
}
export class TProcessingInstructionPrivate {
    static name: string
}
export abstract class TTextClass {
    /* Fields of GXml.TTextClass */
    parentClass: TNodeClass
    static name: string
}
export class TTextPrivate {
    static name: string
}
export abstract class HtmlDocumentClass {
    /* Fields of GXml.HtmlDocumentClass */
    parentClass: xDocumentClass
    static name: string
}
export class HtmlDocumentPrivate {
    static name: string
}
export abstract class GAttributeClass {
    /* Fields of GXml.GAttributeClass */
    parentClass: GNodeClass
    static name: string
}
export class GAttributePrivate {
    static name: string
}
export abstract class GCommentClass {
    /* Fields of GXml.GCommentClass */
    parentClass: GNodeClass
    static name: string
}
export class GCommentPrivate {
    static name: string
}
export abstract class GCDATAClass {
    /* Fields of GXml.GCDATAClass */
    parentClass: GNodeClass
    static name: string
}
export class GCDATAPrivate {
    static name: string
}
export abstract class GDocumentClass {
    /* Fields of GXml.GDocumentClass */
    parentClass: GNodeClass
    save: (self: GDocument, cancellable?: Gio.Cancellable | null) => boolean
    saveAs: (self: GDocument, f: Gio.File, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
export class GDocumentPrivate {
    static name: string
}
export abstract class GElementClass {
    /* Fields of GXml.GElementClass */
    parentClass: GNodeClass
    static name: string
}
export class GElementPrivate {
    static name: string
}
export abstract class GNamespaceClass {
    /* Fields of GXml.GNamespaceClass */
    parentClass: GNodeClass
    static name: string
}
export class GNamespacePrivate {
    static name: string
}
export abstract class GNodeClass {
    /* Fields of GXml.GNodeClass */
    parentClass: GObject.ObjectClass
    setNamespace: (self: GNode, uri: string, prefix?: string | null) => boolean
    toString: (self: GNode) => string
    static name: string
}
export class GNodePrivate {
    static name: string
}
export abstract class GProcessingInstructionClass {
    /* Fields of GXml.GProcessingInstructionClass */
    parentClass: GNodeClass
    static name: string
}
export class GProcessingInstructionPrivate {
    static name: string
}
export abstract class GTextClass {
    /* Fields of GXml.GTextClass */
    parentClass: GNodeClass
    static name: string
}
export class GTextPrivate {
    static name: string
}
export abstract class GHashMapAttrClass {
    /* Fields of GXml.GHashMapAttrClass */
    parentClass: Gee.AbstractMapClass
    static name: string
}
export class GHashMapAttrPrivate {
    static name: string
}
export abstract class GHashMapAttrEntryClass {
    /* Fields of GXml.GHashMapAttrEntryClass */
    parentClass: Gee.MapEntryClass
    static name: string
}
export class GHashMapAttrEntryPrivate {
    static name: string
}
export abstract class GHashMapAttrIteratorClass {
    /* Fields of GXml.GHashMapAttrIteratorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class GHashMapAttrIteratorPrivate {
    static name: string
}
export abstract class GListChildrenClass {
    /* Fields of GXml.GListChildrenClass */
    parentClass: Gee.AbstractBidirListClass
    static name: string
}
export class GListChildrenPrivate {
    static name: string
}
export abstract class GListChildrenIteratorClass {
    /* Fields of GXml.GListChildrenIteratorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class GListChildrenIteratorPrivate {
    static name: string
}
export abstract class GListNamespacesClass {
    /* Fields of GXml.GListNamespacesClass */
    parentClass: Gee.AbstractListClass
    static name: string
}
export class GListNamespacesPrivate {
    static name: string
}
export abstract class GListNamespacesIteratorClass {
    /* Fields of GXml.GListNamespacesIteratorClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class GListNamespacesIteratorPrivate {
    static name: string
}
export abstract class AttributeIface {
    /* Fields of GXml.AttributeIface */
    parentIface: GObject.TypeInterface
    getNamespace: (self: Attribute) => Namespace
    setNamespace: (self: Attribute, value: Namespace) => void
    getPrefix: (self: Attribute) => string
    static name: string
}
export abstract class CommentIface {
    /* Fields of GXml.CommentIface */
    parentIface: GObject.TypeInterface
    getStr: (self: Comment) => string
    static name: string
}
export abstract class CDATAIface {
    /* Fields of GXml.CDATAIface */
    parentIface: GObject.TypeInterface
    getStr: (self: CDATA) => string
    static name: string
}
export abstract class DocumentIface {
    /* Fields of GXml.DocumentIface */
    parentIface: GObject.TypeInterface
    createElement: (self: Document, name: string) => Node
    createText: (self: Document, text: string) => Node
    createComment: (self: Document, text: string) => Node
    createCdata: (self: Document, text: string) => Node
    createPi: (self: Document, target: string, data: string) => Node
    save: (self: Document, cancellable?: Gio.Cancellable | null) => boolean
    saveAs: (self: Document, f: Gio.File, cancellable?: Gio.Cancellable | null) => boolean
    getIndent: (self: Document) => boolean
    setIndent: (self: Document, value: boolean) => void
    getNsTop: (self: Document) => boolean
    setNsTop: (self: Document, value: boolean) => void
    getPrefixDefaultNs: (self: Document) => boolean
    setPrefixDefaultNs: (self: Document, value: boolean) => void
    getBackup: (self: Document) => boolean
    setBackup: (self: Document, value: boolean) => void
    getRoot: (self: Document) => Node
    getFile: (self: Document) => Gio.File
    setFile: (self: Document, value: Gio.File) => void
    static name: string
}
export abstract class DocumentTypeIface {
    /* Fields of GXml.DocumentTypeIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class ElementIface {
    /* Fields of GXml.ElementIface */
    parentIface: GObject.TypeInterface
    normalize: (self: Element) => void
    setAttr: (self: Element, name: string, value: string) => void
    getAttr: (self: Element, name: string) => Node
    removeAttr: (self: Element, name: string) => void
    setNsAttr: (self: Element, ns: Namespace, name: string, value: string) => void
    getNsAttr: (self: Element, name: string, uri: string) => Node
    getTagName: (self: Element) => string
    getContent: (self: Element) => string
    setContent: (self: Element, value: string) => void
    static name: string
}
export abstract class NamespaceIface {
    /* Fields of GXml.NamespaceIface */
    parentIface: GObject.TypeInterface
    getUri: (self: Namespace) => string
    getPrefix: (self: Namespace) => string
    static name: string
}
export abstract class NodeIface {
    /* Fields of GXml.NodeIface */
    parentIface: GObject.TypeInterface
    get: (self: Node, key: string) => Node | null
    getElementsByPropertyValue: (self: Node, property: string, value: string) => ElementList
    toString: (self: Node) => string
    setNamespace: (self: Node, uri: string, prefix?: string | null) => boolean
    nsPrefix: (self: Node) => string
    nsUri: (self: Node) => string
    getNamespaces: (self: Node) => Gee.List
    getChilds: (self: Node) => Gee.BidirList
    getChildren: (self: Node) => Gee.BidirList
    getAttrs: (self: Node) => Gee.Map
    getName: (self: Node) => string
    getValue: (self: Node) => string
    setValue: (self: Node, value: string) => void
    getTypeNode: (self: Node) => NodeType
    getDocument: (self: Node) => Document
    getParent: (self: Node) => Node
    static name: string
}
export abstract class NotationIface {
    /* Fields of GXml.NotationIface */
    parentIface: GObject.TypeInterface
    getPublicId: (self: Notation) => string | null
    getExternalId: (self: Notation) => string | null
    static name: string
}
export abstract class ProcessingInstructionIface {
    /* Fields of GXml.ProcessingInstructionIface */
    parentIface: GObject.TypeInterface
    getTarget: (self: ProcessingInstruction) => string
    getData: (self: ProcessingInstruction) => string
    static name: string
}
export abstract class TextIface {
    /* Fields of GXml.TextIface */
    parentIface: GObject.TypeInterface
    getStr: (self: Text) => string
    static name: string
}
export abstract class NamedNodeMapIface {
    /* Fields of GXml.NamedNodeMapIface */
    parentIface: GObject.TypeInterface
    getNamedItem: (self: NamedNodeMap, name: string) => object | null
    setNamedItem: (self: NamedNodeMap, item?: object | null) => object | null
    removeNamedItem: (self: NamedNodeMap, name: string) => object | null
    item: (self: NamedNodeMap, index: number) => object | null
    getLength: (self: NamedNodeMap) => number
    static name: string
}
export abstract class xNodeListIface {
    /* Fields of GXml.xNodeListIface */
    parentIface: GObject.TypeInterface
    item: (self: xNodeList, idx: number) => xNode
    insertBefore: (self: xNodeList, newChild: xNode, refChild?: xNode | null) => xNode | null
    replaceChild: (self: xNodeList, newChild: xNode, oldChild: xNode) => xNode | null
    removeChild: (self: xNodeList, oldChild: xNode) => xNode | null
    appendChild: (self: xNodeList, newChild: xNode) => xNode | null
    toString: (self: xNodeList, inLine: boolean) => string
    first: (self: xNodeList) => xNode
    last: (self: xNodeList) => xNode
    get: (self: xNodeList, n: number) => xNode
    getLength: (self: xNodeList) => number
    setLength: (self: xNodeList, value: number) => void
    static name: string
}
export abstract class SerializableIface {
    /* Fields of GXml.SerializableIface */
    parentIface: GObject.TypeInterface
    getEnableUnknownSerializableProperty: (self: Serializable) => boolean
    setDefaultNamespace: (self: Serializable, node: Node) => boolean
    serializeUseXmlNodeValue: (self: Serializable) => boolean
    nodeName: (self: Serializable) => string
    propertyUseNick: (self: Serializable) => boolean
    serialize: (self: Serializable, node: Node) => Node | null
    serializeProperty: (self: Serializable, element: Node, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: Serializable, node: Node) => boolean
    deserializeProperty: (self: Serializable, propertyNode: Node) => boolean
    findPropertySpec: (self: Serializable, propertyName: string) => GObject.ParamSpec | null
    defaultFindPropertySpec: (self: Serializable, propertyName: string) => GObject.ParamSpec | null
    listSerializableProperties: (self: Serializable) => GObject.ParamSpec[]
    defaultListSerializableProperties: (self: Serializable) => GObject.ParamSpec[]
    getUnknownSerializableProperties: (self: Serializable) => Gee.Map
    getUnknownSerializableNodes: (self: Serializable) => Gee.Collection
    getSerializedXmlNodeValue: (self: Serializable) => string | null
    setSerializedXmlNodeValue: (self: Serializable, value?: string | null) => void
    static name: string
}
export abstract class SerializablePropertyIface {
    /* Fields of GXml.SerializablePropertyIface */
    parentIface: GObject.TypeInterface
    getSerializablePropertyValue: (self: SerializableProperty) => string
    setSerializablePropertyValue: (self: SerializableProperty, val?: string | null) => void
    deserializeProperty: (self: SerializableProperty, propertyNode: Node, prop: GObject.ParamSpec, nick: boolean) => boolean
    serializeProperty: (self: SerializableProperty, propertyNode: Node, prop: GObject.ParamSpec, nick: boolean) => Node | null
    static name: string
}
export abstract class SerializableMapKeyIface {
    /* Fields of GXml.SerializableMapKeyIface */
    parentIface: GObject.TypeInterface
    getMapKey: (self: SerializableMapKey) => object | null
    static name: string
}
export abstract class SerializableMapDualKeyIface {
    /* Fields of GXml.SerializableMapDualKeyIface */
    parentIface: GObject.TypeInterface
    getMapPrimaryKey: (self: SerializableMapDualKey) => object | null
    getMapSecondaryKey: (self: SerializableMapDualKey) => object | null
    static name: string
}
export abstract class SerializableCollectionIface {
    /* Fields of GXml.SerializableCollectionIface */
    parentIface: GObject.TypeInterface
    deserializeProceed: (self: SerializableCollection) => boolean
    deserialized: (self: SerializableCollection) => boolean
    deserializeNode: (self: SerializableCollection, node: Node) => boolean
    deserializeChildren: (self: SerializableCollection) => boolean
    isCollection: (self: SerializableCollection) => boolean
    static name: string
}
}