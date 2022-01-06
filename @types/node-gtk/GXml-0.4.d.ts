/**
 * GXml-0.4
 */

<<<<<<< HEAD
import "node"
import type { Gee } from './Gee-0.8';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace GXml {
=======
/// <reference types="node" />
import type { Gee } from './Gee-0.8';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace GXml {
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))

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
export enum Error {
    NOT_SUPPORTED,
    PARSER,
    WRITER,
}
export enum SerializableError {
    UNSUPPORTED_TYPE_ERROR,
    STR_TO_VALUE_ERROR,
}
export enum EnumerationError {
    INVALID_VALUE,
    INVALID_TEXT,
}
export enum SerializationError {
    UNKNOWN_TYPE,
    UNKNOWN_PROPERTY,
    UNSUPPORTED_OBJECT_TYPE,
    UNSUPPORTED_PROPERTY_TYPE,
    UNSUPPORTED_TYPE,
    UNSUPPORTED_FILE_FORMAT,
}
export function warning(exception: DomException, message: string): void
export interface NamedNodeMap_ConstructProps extends GObject.Object_ConstructProps {
    length?: number
}
export class NamedNodeMap {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.NamedNodeMap */
    length: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.NamedNodeMap */
=======
    /* Properties of GXml.NamedNodeMap */
    length: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.NamedNodeMap */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getNamedItem(name: string): object | null
    setNamedItem(item?: object | null): object | null
    removeNamedItem(name: string): object | null
    item(index: number): object | null
    getLength(): number
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export interface NodeList_ConstructProps extends GObject.Object_ConstructProps {
    length?: number
}
export class NodeList {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.NodeList */
    length: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.NodeList */
=======
    /* Properties of GXml.NodeList */
    length: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.NodeList */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    item(idx: number): Node
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    toString(inLine: boolean): string
    first(): Node
    last(): Node
    get(n: number): Node
    getLength(): number
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.NodeList */
    vfuncItem(idx: number): Node
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncToString(inLine: boolean): string
    vfuncFirst(): Node
    vfuncLast(): Node
    vfuncGet(n: number): Node
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
    connect(sigName: "notify", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify::length", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: NodeList_ConstructProps)
    _init (config?: NodeList_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Serializable_ConstructProps extends GObject.Object_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignoredSerializableProperties?: GLib.HashTable
    unknownSerializableProperty?: GLib.HashTable
    serializedXmlNodeValue?: string
}
export class Serializable {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.Serializable */
=======
    /* Properties of GXml.Serializable */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    unknownSerializableProperty: GLib.HashTable
    serializedXmlNodeValue: string
<<<<<<< HEAD
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Serializable */
=======
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Serializable */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getEnableUnknownSerializableProperty(): boolean
    serializeUseXmlNodeValue(): boolean
    nodeName(): string
    propertyUseNick(): boolean
    serialize(node: Node): Node | null
    serializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    deserializeProperty(propertyNode: Node): boolean
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    initProperties(): void
    defaultInitProperties(): void
    listSerializableProperties(): GObject.ParamSpec[]
    defaultListSerializableProperties(): GObject.ParamSpec[]
<<<<<<< HEAD
    getPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    defaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): { returnType: boolean, dest: any }
    transformToString(val: any, str: string): { returnType: boolean, str: string }
=======
    getPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    defaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    transformToString(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    getUnknownSerializableProperty(): GLib.HashTable
    setUnknownSerializableProperty(value: GLib.HashTable): void
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GXml-0.4.GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: Serializable, element: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: Serializable, element: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property", callback: (($obj: Serializable, node: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: Serializable, node: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Serializable */
    vfuncGetEnableUnknownSerializableProperty(): boolean
    vfuncSerializeUseXmlNodeValue(): boolean
    vfuncNodeName(): string
    vfuncPropertyUseNick(): boolean
    vfuncSerialize(node: Node): Node | null
    vfuncSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    vfuncDeserialize(node: Node): Node | null
    vfuncDeserializeProperty(propertyNode: Node): boolean
    vfuncFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncDefaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncInitProperties(): void
    vfuncDefaultInitProperties(): void
    vfuncListSerializableProperties(): GObject.ParamSpec[]
    vfuncDefaultListSerializableProperties(): GObject.ParamSpec[]
    vfuncGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    vfuncDefaultGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    vfuncSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    vfuncDefaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    vfuncTransformFromString(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    vfuncTransformToString(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    vfuncGetProperties(): GObject.ParamSpec[]
    vfuncSetProperties(value: GObject.ParamSpec[]): void
    vfuncGetIgnoredSerializableProperties(): GLib.HashTable
    vfuncSetIgnoredSerializableProperties(value: GLib.HashTable): void
    vfuncGetUnknownSerializableProperty(): GLib.HashTable
    vfuncSetUnknownSerializableProperty(value: GLib.HashTable): void
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify::properties", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unknown-serializable-property", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-property", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
<<<<<<< HEAD
    static stringToGvalue(str: string, dest: any): { returnType: boolean, dest: any }
=======
    static stringToGvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    static gvalueToString(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableMapKey_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableMapKey {
<<<<<<< HEAD
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableMapKey */
    getMapKey(): object | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableMapKey, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
<<<<<<< HEAD
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableMapDualKey */
    getMapPrimaryKey(): object | null
    getMapSecondaryKey(): object | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableMapDualKey, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
<<<<<<< HEAD
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableCollection */
    isCollection(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableCollection */
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableCollection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.SerializableCollection */
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export interface Attr_ConstructProps extends BackedNode_ConstructProps {
    name?: string
    specified?: boolean
    value?: string
}
export class Attr {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.Attr */
    name: string
    specified: boolean
    value: string
    /* Properties of GXml-0.4.GXml.Node */
=======
    /* Properties of GXml.Attr */
    name: string
    specified: boolean
    value: string
    /* Properties of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    namespaceDefinitions: NodeList
    namespaceUri: string
    prefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: Node
    childNodes: NodeList
    firstChild: Node
    lastChild: Node
    previousSibling: Node
    nextSibling: Node
    attributes: NamedAttrMap
    ownerDocument: Document
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.Attr */
    parentInstance: BackedNode
    priv: AttrPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Attr */
=======
    /* Fields of GXml.Attr */
    parentInstance: BackedNode
    priv: AttrPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Attr */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getName(): string
    getSpecified(): boolean
    getValue(): string
    setValue(value: string): void
<<<<<<< HEAD
    /* Methods of GXml-0.4.GXml.Node */
=======
    /* Methods of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
<<<<<<< HEAD
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
=======
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString(format: boolean, level: number): string
    getNamespaceDefinitions(): NodeList | null
    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): Node | null
    getChildNodes(): NodeList | null
    getFirstChild(): Node | null
    getLastChild(): Node | null
    getPreviousSibling(): Node | null
    getNextSibling(): Node | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): Document
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Node */
    vfuncAddNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): Node | null
    vfuncCopy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfuncToString(format: boolean, level: number): string
    vfuncGetNamespaceDefinitions(): NodeList | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetPrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): Node | null
    vfuncGetChildNodes(): NodeList | null
    vfuncGetFirstChild(): Node | null
    vfuncGetLastChild(): Node | null
    vfuncGetPreviousSibling(): Node | null
    vfuncGetNextSibling(): Node | null
    vfuncGetAttributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify::name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::specified", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::specified", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::specified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::specified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::specified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Attr_ConstructProps)
    _init (config?: Attr_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BackedNode_ConstructProps extends Node_ConstructProps {
}
export class BackedNode {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.Node */
=======
    /* Properties of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    namespaceDefinitions: NodeList
    namespaceUri: string
    prefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: Node
    childNodes: NodeList
    firstChild: Node
    lastChild: Node
    previousSibling: Node
    nextSibling: Node
    attributes: NamedAttrMap
    ownerDocument: Document
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.BackedNode */
    parentInstance: Node
    priv: BackedNodePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Node */
=======
    /* Fields of GXml.BackedNode */
    parentInstance: Node
    priv: BackedNodePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
<<<<<<< HEAD
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
=======
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString(format: boolean, level: number): string
    getNamespaceDefinitions(): NodeList | null
    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): Node | null
    getChildNodes(): NodeList | null
    getFirstChild(): Node | null
    getLastChild(): Node | null
    getPreviousSibling(): Node | null
    getNextSibling(): Node | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): Document
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Node */
    vfuncAddNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): Node | null
    vfuncCopy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfuncToString(format: boolean, level: number): string
    vfuncGetNamespaceDefinitions(): NodeList | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetPrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): Node | null
    vfuncGetChildNodes(): NodeList | null
    vfuncGetFirstChild(): Node | null
    vfuncGetLastChild(): Node | null
    vfuncGetPreviousSibling(): Node | null
    vfuncGetNextSibling(): Node | null
    vfuncGetAttributes(): NamedAttrMap | null
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
    connect(sigName: "notify::prefix", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface CDATASection_ConstructProps extends Text_ConstructProps {
}
export class CDATASection {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.CharacterData */
    data: string
    length: number
    /* Properties of GXml-0.4.GXml.Node */
=======
    /* Properties of GXml.CharacterData */
    data: string
    length: number
    /* Properties of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    namespaceDefinitions: NodeList
    namespaceUri: string
    prefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: Node
    childNodes: NodeList
    firstChild: Node
    lastChild: Node
    previousSibling: Node
    nextSibling: Node
    attributes: NamedAttrMap
    ownerDocument: Document
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.CDATASection */
    parentInstance: Text
    priv: CDATASectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Text */
    splitText(offset: number): Text
    /* Methods of GXml-0.4.GXml.CharacterData */
=======
    /* Fields of GXml.CDATASection */
    parentInstance: Text
    priv: CDATASectionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Text */
    splitText(offset: number): Text
    /* Methods of GXml.CharacterData */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    substringData(offset: number, count: number): string
    appendData(newSegment: string): void
    insertData(offset: number, newSegment: string): void
    deleteData(offset: number, count: number): void
    replaceData(offset: number, count: number, newSegment: string): void
    getData(): string
    setData(value: string): void
    getLength(): number
<<<<<<< HEAD
    /* Methods of GXml-0.4.GXml.Node */
=======
    /* Methods of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
<<<<<<< HEAD
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
=======
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString(format: boolean, level: number): string
    getNamespaceDefinitions(): NodeList | null
    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): Node | null
    getChildNodes(): NodeList | null
    getFirstChild(): Node | null
    getLastChild(): Node | null
    getPreviousSibling(): Node | null
    getNextSibling(): Node | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): Document
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Node */
    vfuncAddNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): Node | null
    vfuncCopy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfuncToString(format: boolean, level: number): string
    vfuncGetNamespaceDefinitions(): NodeList | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetPrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): Node | null
    vfuncGetChildNodes(): NodeList | null
    vfuncGetFirstChild(): Node | null
    vfuncGetLastChild(): Node | null
    vfuncGetPreviousSibling(): Node | null
    vfuncGetNextSibling(): Node | null
    vfuncGetAttributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify::data", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CDATASection_ConstructProps)
    _init (config?: CDATASection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CharacterData_ConstructProps extends BackedNode_ConstructProps {
    data?: string
    length?: number
}
export class CharacterData {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.CharacterData */
    data: string
    length: number
    /* Properties of GXml-0.4.GXml.Node */
=======
    /* Properties of GXml.CharacterData */
    data: string
    length: number
    /* Properties of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    namespaceDefinitions: NodeList
    namespaceUri: string
    prefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: Node
    childNodes: NodeList
    firstChild: Node
    lastChild: Node
    previousSibling: Node
    nextSibling: Node
    attributes: NamedAttrMap
    ownerDocument: Document
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.CharacterData */
    parentInstance: BackedNode
    priv: CharacterDataPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.CharacterData */
=======
    /* Fields of GXml.CharacterData */
    parentInstance: BackedNode
    priv: CharacterDataPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.CharacterData */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    substringData(offset: number, count: number): string
    appendData(newSegment: string): void
    insertData(offset: number, newSegment: string): void
    deleteData(offset: number, count: number): void
    replaceData(offset: number, count: number, newSegment: string): void
    getData(): string
    setData(value: string): void
    getLength(): number
<<<<<<< HEAD
    /* Methods of GXml-0.4.GXml.Node */
=======
    /* Methods of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
<<<<<<< HEAD
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
=======
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString(format: boolean, level: number): string
    getNamespaceDefinitions(): NodeList | null
    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): Node | null
    getChildNodes(): NodeList | null
    getFirstChild(): Node | null
    getLastChild(): Node | null
    getPreviousSibling(): Node | null
    getNextSibling(): Node | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): Document
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Node */
    vfuncAddNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): Node | null
    vfuncCopy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfuncToString(format: boolean, level: number): string
    vfuncGetNamespaceDefinitions(): NodeList | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetPrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): Node | null
    vfuncGetChildNodes(): NodeList | null
    vfuncGetFirstChild(): Node | null
    vfuncGetLastChild(): Node | null
    vfuncGetPreviousSibling(): Node | null
    vfuncGetNextSibling(): Node | null
    vfuncGetAttributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify::data", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CharacterData_ConstructProps)
    _init (config?: CharacterData_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Comment_ConstructProps extends CharacterData_ConstructProps {
}
export class Comment {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.CharacterData */
    data: string
    length: number
    /* Properties of GXml-0.4.GXml.Node */
=======
    /* Properties of GXml.CharacterData */
    data: string
    length: number
    /* Properties of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    namespaceDefinitions: NodeList
    namespaceUri: string
    prefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: Node
    childNodes: NodeList
    firstChild: Node
    lastChild: Node
    previousSibling: Node
    nextSibling: Node
    attributes: NamedAttrMap
    ownerDocument: Document
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.Comment */
    parentInstance: CharacterData
    priv: CommentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.CharacterData */
=======
    /* Fields of GXml.Comment */
    parentInstance: CharacterData
    priv: CommentPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.CharacterData */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    substringData(offset: number, count: number): string
    appendData(newSegment: string): void
    insertData(offset: number, newSegment: string): void
    deleteData(offset: number, count: number): void
    replaceData(offset: number, count: number, newSegment: string): void
    getData(): string
    setData(value: string): void
    getLength(): number
<<<<<<< HEAD
    /* Methods of GXml-0.4.GXml.Node */
=======
    /* Methods of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
<<<<<<< HEAD
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
=======
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString(format: boolean, level: number): string
    getNamespaceDefinitions(): NodeList | null
    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): Node | null
    getChildNodes(): NodeList | null
    getFirstChild(): Node | null
    getLastChild(): Node | null
    getPreviousSibling(): Node | null
    getNextSibling(): Node | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): Document
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Node */
    vfuncAddNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): Node | null
    vfuncCopy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfuncToString(format: boolean, level: number): string
    vfuncGetNamespaceDefinitions(): NodeList | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetPrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): Node | null
    vfuncGetChildNodes(): NodeList | null
    vfuncGetFirstChild(): Node | null
    vfuncGetLastChild(): Node | null
    vfuncGetPreviousSibling(): Node | null
    vfuncGetNextSibling(): Node | null
    vfuncGetAttributes(): NamedAttrMap | null
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify::data", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface Document_ConstructProps extends Node_ConstructProps {
    doctype?: DocumentType
    implementation?: Implementation
    documentElement?: Element
}
export class Document {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.Document */
    doctype: DocumentType
    implementation: Implementation
    documentElement: Element
    /* Properties of GXml-0.4.GXml.Node */
=======
    /* Properties of GXml.Document */
    doctype: DocumentType
    implementation: Implementation
    documentElement: Element
    /* Properties of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    namespaceDefinitions: NodeList
    namespaceUri: string
    prefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: Node
    childNodes: NodeList
    firstChild: Node
    lastChild: Node
    previousSibling: Node
    nextSibling: Node
    attributes: NamedAttrMap
    ownerDocument: Document
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.Document */
    parentInstance: Node
    priv: DocumentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Document */
=======
    /* Fields of GXml.Document */
    parentInstance: Node
    priv: DocumentPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Document */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    saveToPath(filePath: string): void
    saveToStream(outstream: Gio.OutputStream, can?: Gio.Cancellable | null): void
    createElement(tagName: string): Element
    createDocumentFragment(): DocumentFragment
    createTextNode(textData: string): Text
    createComment(commentData: string): Comment
    createCdataSection(cdataData: string): CDATASection
    createProcessingInstruction(target: string, data: string): ProcessingInstruction
    createAttribute(name: string): Attr
    createEntityReference(name: string): EntityReference
    getElementsByTagName(tagName: string): NodeList
    copyNode(foreignNode: Node, deep: boolean): Node
    getDoctype(): DocumentType | null
    getImplementation(): Implementation
    getDocumentElement(): Element
<<<<<<< HEAD
    /* Methods of GXml-0.4.GXml.Node */
=======
    /* Methods of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
<<<<<<< HEAD
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
=======
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString(format: boolean, level: number): string
    getNamespaceDefinitions(): NodeList | null
    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): Node | null
    getChildNodes(): NodeList | null
    getFirstChild(): Node | null
    getLastChild(): Node | null
    getPreviousSibling(): Node | null
    getNextSibling(): Node | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): Document
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Node */
    vfuncAddNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): Node | null
    vfuncCopy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfuncToString(format: boolean, level: number): string
    vfuncGetNamespaceDefinitions(): NodeList | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetPrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): Node | null
    vfuncGetChildNodes(): NodeList | null
    vfuncGetFirstChild(): Node | null
    vfuncGetLastChild(): Node | null
    vfuncGetPreviousSibling(): Node | null
    vfuncGetNextSibling(): Node | null
    vfuncGetAttributes(): NamedAttrMap | null
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify::doctype", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::doctype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::doctype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::doctype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::implementation", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::implementation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::implementation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::implementation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::document-element", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::document-element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::document-element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::document-element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static fromLibxml2(doc: object | null, requireRoot: boolean): Document
    static fromPath(filePath: string): Document
    static fromGfile(fin: Gio.File, can?: Gio.Cancellable | null): Document
    static fromStream(instream: Gio.InputStream, can?: Gio.Cancellable | null): Document
    static fromString(xml: string): Document
    static fromStringWithOptions(xml: string, url: string | null, encoding: string | null, options: number): Document
    static new(): Document
    static $gtype: GObject.Type
}
export interface DocumentFragment_ConstructProps extends BackedNode_ConstructProps {
}
export class DocumentFragment {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.Node */
=======
    /* Properties of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    namespaceDefinitions: NodeList
    namespaceUri: string
    prefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: Node
    childNodes: NodeList
    firstChild: Node
    lastChild: Node
    previousSibling: Node
    nextSibling: Node
    attributes: NamedAttrMap
    ownerDocument: Document
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.DocumentFragment */
    parentInstance: BackedNode
    priv: DocumentFragmentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Node */
=======
    /* Fields of GXml.DocumentFragment */
    parentInstance: BackedNode
    priv: DocumentFragmentPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
<<<<<<< HEAD
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
=======
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString(format: boolean, level: number): string
    getNamespaceDefinitions(): NodeList | null
    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): Node | null
    getChildNodes(): NodeList | null
    getFirstChild(): Node | null
    getLastChild(): Node | null
    getPreviousSibling(): Node | null
    getNextSibling(): Node | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): Document
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Node */
    vfuncAddNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): Node | null
    vfuncCopy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfuncToString(format: boolean, level: number): string
    vfuncGetNamespaceDefinitions(): NodeList | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetPrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): Node | null
    vfuncGetChildNodes(): NodeList | null
    vfuncGetFirstChild(): Node | null
    vfuncGetLastChild(): Node | null
    vfuncGetPreviousSibling(): Node | null
    vfuncGetNextSibling(): Node | null
    vfuncGetAttributes(): NamedAttrMap | null
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
    connect(sigName: "notify::prefix", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface DocumentType_ConstructProps extends Node_ConstructProps {
    name?: string
    entities?: GLib.HashTable
    notations?: GLib.HashTable
}
export class DocumentType {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.DocumentType */
    name: string
    entities: GLib.HashTable
    notations: GLib.HashTable
    /* Properties of GXml-0.4.GXml.Node */
=======
    /* Properties of GXml.DocumentType */
    name: string
    entities: GLib.HashTable
    notations: GLib.HashTable
    /* Properties of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    namespaceDefinitions: NodeList
    namespaceUri: string
    prefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: Node
    childNodes: NodeList
    firstChild: Node
    lastChild: Node
    previousSibling: Node
    nextSibling: Node
    attributes: NamedAttrMap
    ownerDocument: Document
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.DocumentType */
    parentInstance: Node
    priv: DocumentTypePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.DocumentType */
    getName(): string
    getEntities(): GLib.HashTable | null
    getNotations(): GLib.HashTable | null
    /* Methods of GXml-0.4.GXml.Node */
=======
    /* Fields of GXml.DocumentType */
    parentInstance: Node
    priv: DocumentTypePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.DocumentType */
    getName(): string
    getEntities(): GLib.HashTable | null
    getNotations(): GLib.HashTable | null
    /* Methods of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
<<<<<<< HEAD
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
=======
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString(format: boolean, level: number): string
    getNamespaceDefinitions(): NodeList | null
    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): Node | null
    getChildNodes(): NodeList | null
    getFirstChild(): Node | null
    getLastChild(): Node | null
    getPreviousSibling(): Node | null
    getNextSibling(): Node | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): Document
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Node */
    vfuncAddNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): Node | null
    vfuncCopy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfuncToString(format: boolean, level: number): string
    vfuncGetNamespaceDefinitions(): NodeList | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetPrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): Node | null
    vfuncGetChildNodes(): NodeList | null
    vfuncGetFirstChild(): Node | null
    vfuncGetLastChild(): Node | null
    vfuncGetPreviousSibling(): Node | null
    vfuncGetNextSibling(): Node | null
    vfuncGetAttributes(): NamedAttrMap | null
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify::name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entities", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entities", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::notations", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notations", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::notations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::notations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::notations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface Node_ConstructProps extends GObject.Object_ConstructProps {
    namespaceDefinitions?: NodeList
    namespaceUri?: string
    prefix?: string
    localName?: string
    nodeName?: string
    nodeValue?: string
    nodeType?: NodeType
    parentNode?: Node
    childNodes?: NodeList
    firstChild?: Node
    lastChild?: Node
    previousSibling?: Node
    nextSibling?: Node
    attributes?: NamedAttrMap
    ownerDocument?: Document
}
export class Node {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.Node */
=======
    /* Properties of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    namespaceDefinitions: NodeList
    namespaceUri: string
    prefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: Node
    childNodes: NodeList
    firstChild: Node
    lastChild: Node
    previousSibling: Node
    nextSibling: Node
    attributes: NamedAttrMap
    ownerDocument: Document
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.Node */
    parentInstance: GObject.Object
    priv: NodePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Node */
=======
    /* Fields of GXml.Node */
    parentInstance: GObject.Object
    priv: NodePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
<<<<<<< HEAD
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
=======
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString(format: boolean, level: number): string
    getNamespaceDefinitions(): NodeList | null
    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): Node | null
    getChildNodes(): NodeList | null
    getFirstChild(): Node | null
    getLastChild(): Node | null
    getPreviousSibling(): Node | null
    getNextSibling(): Node | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): Document
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Node */
    vfuncAddNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): Node | null
    vfuncCopy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfuncToString(format: boolean, level: number): string
    vfuncGetNamespaceDefinitions(): NodeList | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetPrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): Node | null
    vfuncGetChildNodes(): NodeList | null
    vfuncGetFirstChild(): Node | null
    vfuncGetLastChild(): Node | null
    vfuncGetPreviousSibling(): Node | null
    vfuncGetNextSibling(): Node | null
    vfuncGetAttributes(): NamedAttrMap | null
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify::namespace-definitions", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
export interface Element_ConstructProps extends BackedNode_ConstructProps {
    tagName?: string
    content?: string
}
export class Element {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.Element */
    tagName: string
    content: string
    /* Properties of GXml-0.4.GXml.Node */
=======
    /* Properties of GXml.Element */
    tagName: string
    content: string
    /* Properties of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    namespaceDefinitions: NodeList
    namespaceUri: string
    prefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: Node
    childNodes: NodeList
    firstChild: Node
    lastChild: Node
    previousSibling: Node
    nextSibling: Node
    attributes: NamedAttrMap
    ownerDocument: Document
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.Element */
    parentInstance: BackedNode
    priv: ElementPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Element */
=======
    /* Fields of GXml.Element */
    parentInstance: BackedNode
    priv: ElementPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Element */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getAttribute(name: string): string
    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    getAttributeNode(name: string): Attr | null
    setAttributeNode(newAttr: Attr): Attr
    removeAttributeNode(oldAttr: Attr): Attr
    getElementsByTagName(tagName: string): NodeList
    normalize(): void
    getTagName(): string
    getContent(): string
    setContent(value: string): void
<<<<<<< HEAD
    /* Methods of GXml-0.4.GXml.Node */
=======
    /* Methods of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
<<<<<<< HEAD
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
=======
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString(format: boolean, level: number): string
    getNamespaceDefinitions(): NodeList | null
    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): Node | null
    getChildNodes(): NodeList | null
    getFirstChild(): Node | null
    getLastChild(): Node | null
    getPreviousSibling(): Node | null
    getNextSibling(): Node | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): Document
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Node */
    vfuncAddNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): Node | null
    vfuncCopy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfuncToString(format: boolean, level: number): string
    vfuncGetNamespaceDefinitions(): NodeList | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetPrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): Node | null
    vfuncGetChildNodes(): NodeList | null
    vfuncGetFirstChild(): Node | null
    vfuncGetLastChild(): Node | null
    vfuncGetPreviousSibling(): Node | null
    vfuncGetNextSibling(): Node | null
    vfuncGetAttributes(): NamedAttrMap | null
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
    connect(sigName: "notify::namespace-definitions", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface Entity_ConstructProps extends Node_ConstructProps {
    publicId?: string
    systemId?: string
    notationName?: string
}
export class Entity {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.Entity */
    publicId: string
    systemId: string
    notationName: string
    /* Properties of GXml-0.4.GXml.Node */
=======
    /* Properties of GXml.Entity */
    publicId: string
    systemId: string
    notationName: string
    /* Properties of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    namespaceDefinitions: NodeList
    namespaceUri: string
    prefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: Node
    childNodes: NodeList
    firstChild: Node
    lastChild: Node
    previousSibling: Node
    nextSibling: Node
    attributes: NamedAttrMap
    ownerDocument: Document
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.Entity */
    parentInstance: Node
    priv: EntityPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Entity */
    getPublicId(): string
    getSystemId(): string
    getNotationName(): string
    /* Methods of GXml-0.4.GXml.Node */
=======
    /* Fields of GXml.Entity */
    parentInstance: Node
    priv: EntityPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Entity */
    getPublicId(): string
    getSystemId(): string
    getNotationName(): string
    /* Methods of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
<<<<<<< HEAD
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
=======
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString(format: boolean, level: number): string
    getNamespaceDefinitions(): NodeList | null
    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): Node | null
    getChildNodes(): NodeList | null
    getFirstChild(): Node | null
    getLastChild(): Node | null
    getPreviousSibling(): Node | null
    getNextSibling(): Node | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): Document
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Node */
    vfuncAddNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): Node | null
    vfuncCopy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfuncToString(format: boolean, level: number): string
    vfuncGetNamespaceDefinitions(): NodeList | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetPrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): Node | null
    vfuncGetChildNodes(): NodeList | null
    vfuncGetFirstChild(): Node | null
    vfuncGetLastChild(): Node | null
    vfuncGetPreviousSibling(): Node | null
    vfuncGetNextSibling(): Node | null
    vfuncGetAttributes(): NamedAttrMap | null
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
    connect(sigName: "notify::prefix", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface EntityReference_ConstructProps extends Node_ConstructProps {
}
export class EntityReference {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.Node */
=======
    /* Properties of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    namespaceDefinitions: NodeList
    namespaceUri: string
    prefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: Node
    childNodes: NodeList
    firstChild: Node
    lastChild: Node
    previousSibling: Node
    nextSibling: Node
    attributes: NamedAttrMap
    ownerDocument: Document
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.EntityReference */
    parentInstance: Node
    priv: EntityReferencePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Node */
=======
    /* Fields of GXml.EntityReference */
    parentInstance: Node
    priv: EntityReferencePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
<<<<<<< HEAD
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
=======
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString(format: boolean, level: number): string
    getNamespaceDefinitions(): NodeList | null
    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): Node | null
    getChildNodes(): NodeList | null
    getFirstChild(): Node | null
    getLastChild(): Node | null
    getPreviousSibling(): Node | null
    getNextSibling(): Node | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): Document
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Node */
    vfuncAddNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): Node | null
    vfuncCopy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfuncToString(format: boolean, level: number): string
    vfuncGetNamespaceDefinitions(): NodeList | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetPrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): Node | null
    vfuncGetChildNodes(): NodeList | null
    vfuncGetFirstChild(): Node | null
    vfuncGetLastChild(): Node | null
    vfuncGetPreviousSibling(): Node | null
    vfuncGetNextSibling(): Node | null
    vfuncGetAttributes(): NamedAttrMap | null
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
    connect(sigName: "notify::prefix", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.Implementation */
    parentInstance: GObject.Object
    priv: ImplementationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Implementation */
    createDocument(namespaceUri?: string | null, qualifiedName?: string | null, doctype?: DocumentType | null): Document
    hasFeature(feature: string, version?: string | null): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Fields of GXml.Implementation */
    parentInstance: GObject.Object
    priv: ImplementationPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Implementation */
    createDocument(namespaceUri?: string | null, qualifiedName?: string | null, doctype?: DocumentType | null): Document
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export interface NamedAttrMap_ConstructProps extends GObject.Object_ConstructProps {
    length?: number
}
export class NamedAttrMap {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.NamedNodeMap */
    length: number
    /* Fields of GXml-0.4.GXml.NamedAttrMap */
    parentInstance: GObject.Object
    priv: NamedAttrMapPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.NamedAttrMap */
    getValues(): Gee.Collection
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Properties of GXml.NamedNodeMap */
    length: number
    /* Fields of GXml.NamedAttrMap */
    parentInstance: GObject.Object
    priv: NamedAttrMapPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.NamedAttrMap */
    getValues(): Gee.Collection
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Methods of GXml-0.4.GXml.NamedNodeMap */
=======
    watchClosure(closure: GObject.Closure): void
    /* Methods of GXml.NamedNodeMap */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getNamedItem(name: string): object | null
    setNamedItem(item?: object | null): object | null
    removeNamedItem(name: string): object | null
    item(index: number): object | null
    getLength(): number
<<<<<<< HEAD
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    /* Virtual methods of GXml.NamedAttrMap */
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
    connect(sigName: "notify", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
    static $gtype: GObject.Type
}
export interface NamespaceAttr_ConstructProps extends Node_ConstructProps {
    definedPrefix?: string
    definedNamespaceUri?: string
}
export class NamespaceAttr {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.NamespaceAttr */
    definedPrefix: string
    definedNamespaceUri: string
    /* Properties of GXml-0.4.GXml.Node */
=======
    /* Properties of GXml.NamespaceAttr */
    definedPrefix: string
    definedNamespaceUri: string
    /* Properties of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    namespaceDefinitions: NodeList
    namespaceUri: string
    prefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: Node
    childNodes: NodeList
    firstChild: Node
    lastChild: Node
    previousSibling: Node
    nextSibling: Node
    attributes: NamedAttrMap
    ownerDocument: Document
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.NamespaceAttr */
    parentInstance: Node
    priv: NamespaceAttrPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.NamespaceAttr */
    getDefinedPrefix(): string
    getDefinedNamespaceUri(): string
    /* Methods of GXml-0.4.GXml.Node */
=======
    /* Fields of GXml.NamespaceAttr */
    parentInstance: Node
    priv: NamespaceAttrPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.NamespaceAttr */
    getDefinedPrefix(): string
    getDefinedNamespaceUri(): string
    /* Methods of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
<<<<<<< HEAD
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
=======
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString(format: boolean, level: number): string
    getNamespaceDefinitions(): NodeList | null
    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): Node | null
    getChildNodes(): NodeList | null
    getFirstChild(): Node | null
    getLastChild(): Node | null
    getPreviousSibling(): Node | null
    getNextSibling(): Node | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): Document
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Node */
    vfuncAddNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): Node | null
    vfuncCopy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfuncToString(format: boolean, level: number): string
    vfuncGetNamespaceDefinitions(): NodeList | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetPrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): Node | null
    vfuncGetChildNodes(): NodeList | null
    vfuncGetFirstChild(): Node | null
    vfuncGetLastChild(): Node | null
    vfuncGetPreviousSibling(): Node | null
    vfuncGetNextSibling(): Node | null
    vfuncGetAttributes(): NamedAttrMap | null
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
    connect(sigName: "notify::prefix", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface Notation_ConstructProps extends Node_ConstructProps {
    publicId?: string
    systemId?: string
}
export class Notation {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.Notation */
    publicId: string
    systemId: string
    /* Properties of GXml-0.4.GXml.Node */
=======
    /* Properties of GXml.Notation */
    publicId: string
    systemId: string
    /* Properties of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    namespaceDefinitions: NodeList
    namespaceUri: string
    prefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: Node
    childNodes: NodeList
    firstChild: Node
    lastChild: Node
    previousSibling: Node
    nextSibling: Node
    attributes: NamedAttrMap
    ownerDocument: Document
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.Notation */
    parentInstance: Node
    priv: NotationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Notation */
    getPublicId(): string | null
    getSystemId(): string | null
    /* Methods of GXml-0.4.GXml.Node */
=======
    /* Fields of GXml.Notation */
    parentInstance: Node
    priv: NotationPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Notation */
    getPublicId(): string | null
    getSystemId(): string | null
    /* Methods of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
<<<<<<< HEAD
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
=======
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString(format: boolean, level: number): string
    getNamespaceDefinitions(): NodeList | null
    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): Node | null
    getChildNodes(): NodeList | null
    getFirstChild(): Node | null
    getLastChild(): Node | null
    getPreviousSibling(): Node | null
    getNextSibling(): Node | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): Document
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Node */
    vfuncAddNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): Node | null
    vfuncCopy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfuncToString(format: boolean, level: number): string
    vfuncGetNamespaceDefinitions(): NodeList | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetPrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): Node | null
    vfuncGetChildNodes(): NodeList | null
    vfuncGetFirstChild(): Node | null
    vfuncGetLastChild(): Node | null
    vfuncGetPreviousSibling(): Node | null
    vfuncGetNextSibling(): Node | null
    vfuncGetAttributes(): NamedAttrMap | null
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify::public-id", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::public-id", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::public-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::public-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::public-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::system-id", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-id", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::system-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::system-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::system-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface ProcessingInstruction_ConstructProps extends Node_ConstructProps {
    target?: string
    data?: string
}
export class ProcessingInstruction {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.ProcessingInstruction */
    target: string
    data: string
    /* Properties of GXml-0.4.GXml.Node */
=======
    /* Properties of GXml.ProcessingInstruction */
    target: string
    data: string
    /* Properties of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    namespaceDefinitions: NodeList
    namespaceUri: string
    prefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: Node
    childNodes: NodeList
    firstChild: Node
    lastChild: Node
    previousSibling: Node
    nextSibling: Node
    attributes: NamedAttrMap
    ownerDocument: Document
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.ProcessingInstruction */
    parentInstance: Node
    priv: ProcessingInstructionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.ProcessingInstruction */
    getTarget(): string
    getData(): string
    setData(value: string): void
    /* Methods of GXml-0.4.GXml.Node */
=======
    /* Fields of GXml.ProcessingInstruction */
    parentInstance: Node
    priv: ProcessingInstructionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.ProcessingInstruction */
    getTarget(): string
    getData(): string
    setData(value: string): void
    /* Methods of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
<<<<<<< HEAD
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
=======
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString(format: boolean, level: number): string
    getNamespaceDefinitions(): NodeList | null
    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): Node | null
    getChildNodes(): NodeList | null
    getFirstChild(): Node | null
    getLastChild(): Node | null
    getPreviousSibling(): Node | null
    getNextSibling(): Node | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): Document
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Node */
    vfuncAddNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): Node | null
    vfuncCopy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfuncToString(format: boolean, level: number): string
    vfuncGetNamespaceDefinitions(): NodeList | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetPrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): Node | null
    vfuncGetChildNodes(): NodeList | null
    vfuncGetFirstChild(): Node | null
    vfuncGetLastChild(): Node | null
    vfuncGetPreviousSibling(): Node | null
    vfuncGetNextSibling(): Node | null
    vfuncGetAttributes(): NamedAttrMap | null
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
    connect(sigName: "notify::namespace-definitions", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface Text_ConstructProps extends CharacterData_ConstructProps {
}
export class Text {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.CharacterData */
    data: string
    length: number
    /* Properties of GXml-0.4.GXml.Node */
=======
    /* Properties of GXml.CharacterData */
    data: string
    length: number
    /* Properties of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    namespaceDefinitions: NodeList
    namespaceUri: string
    prefix: string
    localName: string
    nodeName: string
    nodeValue: string
    nodeType: NodeType
    parentNode: Node
    childNodes: NodeList
    firstChild: Node
    lastChild: Node
    previousSibling: Node
    nextSibling: Node
    attributes: NamedAttrMap
    ownerDocument: Document
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.Text */
    parentInstance: CharacterData
    priv: TextPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Text */
    splitText(offset: number): Text
    /* Methods of GXml-0.4.GXml.CharacterData */
=======
    /* Fields of GXml.Text */
    parentInstance: CharacterData
    priv: TextPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.Text */
    splitText(offset: number): Text
    /* Methods of GXml.CharacterData */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    substringData(offset: number, count: number): string
    appendData(newSegment: string): void
    insertData(offset: number, newSegment: string): void
    deleteData(offset: number, count: number): void
    replaceData(offset: number, count: number, newSegment: string): void
    getData(): string
    setData(value: string): void
    getLength(): number
<<<<<<< HEAD
    /* Methods of GXml-0.4.GXml.Node */
=======
    /* Methods of GXml.Node */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
<<<<<<< HEAD
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
=======
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString(format: boolean, level: number): string
    getNamespaceDefinitions(): NodeList | null
    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string | null
    getNodeName(): string
    getNodeValue(): string | null
    getNodeType(): NodeType
    getParentNode(): Node | null
    getChildNodes(): NodeList | null
    getFirstChild(): Node | null
    getLastChild(): Node | null
    getPreviousSibling(): Node | null
    getNextSibling(): Node | null
    getAttributes(): NamedAttrMap | null
    getOwnerDocument(): Document
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.Node */
    vfuncAddNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    vfuncInsertBefore(newChild: Node, refChild?: Node | null): Node | null
    vfuncReplaceChild(newChild: Node, oldChild: Node): Node | null
    vfuncRemoveChild(oldChild: Node): Node | null
    vfuncAppendChild(newChild: Node): Node | null
    vfuncHasChildNodes(): boolean
    vfuncCloneNode(deep: boolean): Node | null
    vfuncCopy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfuncToString(format: boolean, level: number): string
    vfuncGetNamespaceDefinitions(): NodeList | null
    vfuncGetNamespaceUri(): string | null
    vfuncGetPrefix(): string | null
    vfuncGetLocalName(): string | null
    vfuncGetNodeName(): string
    vfuncGetNodeValue(): string | null
    vfuncGetNodeType(): NodeType
    vfuncGetParentNode(): Node | null
    vfuncGetChildNodes(): NodeList | null
    vfuncGetFirstChild(): Node | null
    vfuncGetLastChild(): Node | null
    vfuncGetPreviousSibling(): Node | null
    vfuncGetNextSibling(): Node | null
    vfuncGetAttributes(): NamedAttrMap | null
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify::data", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-definitions", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-definitions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::namespace-uri", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::namespace-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-value", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::node-type", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent-node", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-nodes", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-nodes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::previous-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::previous-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-sibling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attributes", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::owner-document", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::owner-document", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
export interface SerializableObjectModel_ConstructProps extends GObject.Object_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignoredSerializableProperties?: GLib.HashTable
    unknownSerializableProperty?: GLib.HashTable
    serializedXmlNodeValue?: string
}
export class SerializableObjectModel {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.Serializable */
=======
    /* Properties of GXml.Serializable */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    unknownSerializableProperty: GLib.HashTable
    serializedXmlNodeValue: string
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableObjectModel */
    parentInstance: GObject.Object
    priv: SerializableObjectModelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableObjectModel */
=======
    /* Fields of GXml.SerializableObjectModel */
    parentInstance: GObject.Object
    priv: SerializableObjectModelPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableObjectModel */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getEnableUnknownSerializableProperty(): boolean
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    nodeName(): string
    defaultNodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    initProperties(): void
    listSerializableProperties(): GObject.ParamSpec[]
<<<<<<< HEAD
    getPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): { returnType: boolean, dest: any }
    transformToString(val: any, str: string): { returnType: boolean, str: string }
=======
    getPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    transformToString(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    defaultDeserialize(node: Node): Node | null
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
    toString(): string
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Methods of GXml-0.4.GXml.Serializable */
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultInitProperties(): void
    defaultListSerializableProperties(): GObject.ParamSpec[]
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
=======
    watchClosure(closure: GObject.Closure): void
    /* Methods of GXml.Serializable */
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultInitProperties(): void
    defaultListSerializableProperties(): GObject.ParamSpec[]
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    defaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    getUnknownSerializableProperty(): GLib.HashTable
    setUnknownSerializableProperty(value: GLib.HashTable): void
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
<<<<<<< HEAD
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml-0.4.GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableObjectModel, element: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableObjectModel, element: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableObjectModel, node: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableObjectModel, node: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
=======
    /* Virtual methods of GXml.SerializableObjectModel */
    vfuncGetEnableUnknownSerializableProperty(): boolean
    vfuncSerializeUseXmlNodeValue(): boolean
    vfuncPropertyUseNick(): boolean
    vfuncNodeName(): string
    vfuncFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncInitProperties(): void
    vfuncListSerializableProperties(): GObject.ParamSpec[]
    vfuncGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    vfuncSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    vfuncTransformFromString(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    vfuncTransformToString(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    vfuncSerialize(node: Node): Node | null
    vfuncSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    vfuncDeserialize(node: Node): Node | null
    vfuncDeserializeProperty(propertyNode: Node): boolean
    vfuncToString(): string
    vfuncDefaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncDefaultInitProperties(): void
    vfuncDefaultListSerializableProperties(): GObject.ParamSpec[]
    vfuncDefaultGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    vfuncDefaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    vfuncGetProperties(): GObject.ParamSpec[]
    vfuncSetProperties(value: GObject.ParamSpec[]): void
    vfuncGetIgnoredSerializableProperties(): GLib.HashTable
    vfuncSetIgnoredSerializableProperties(value: GLib.HashTable): void
    vfuncGetUnknownSerializableProperty(): GLib.HashTable
    vfuncSetUnknownSerializableProperty(value: GLib.HashTable): void
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
    connect(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static equals(a: SerializableObjectModel, b: SerializableObjectModel): boolean
<<<<<<< HEAD
    static stringToGvalue(str: string, dest: any): { returnType: boolean, dest: any }
=======
    static stringToGvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    static gvalueToString(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableJson_ConstructProps extends GObject.Object_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignoredSerializableProperties?: GLib.HashTable
    unknownSerializableProperty?: GLib.HashTable
    serializedXmlNodeValue?: string
}
export class SerializableJson {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.Serializable */
=======
    /* Properties of GXml.Serializable */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    unknownSerializableProperty: GLib.HashTable
    serializedXmlNodeValue: string
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableJson */
    parentInstance: GObject.Object
    priv: SerializableJsonPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableJson */
=======
    /* Fields of GXml.SerializableJson */
    parentInstance: GObject.Object
    priv: SerializableJsonPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableJson */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getEnableUnknownSerializableProperty(): boolean
    serializeUseXmlNodeValue(): boolean
    nodeName(): string
    propertyUseNick(): boolean
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    initProperties(): void
    listSerializableProperties(): GObject.ParamSpec[]
<<<<<<< HEAD
    getPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): { returnType: boolean, dest: any }
    transformToString(val: any, str: string): { returnType: boolean, str: string }
    serializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserializeProperty(propertyNode: Node): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    getPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    transformToString(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    serializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserializeProperty(propertyNode: Node): boolean
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Methods of GXml-0.4.GXml.Serializable */
=======
    watchClosure(closure: GObject.Closure): void
    /* Methods of GXml.Serializable */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    serialize(node: Node): Node | null
    deserialize(node: Node): Node | null
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultInitProperties(): void
    defaultListSerializableProperties(): GObject.ParamSpec[]
<<<<<<< HEAD
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
=======
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    defaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    getUnknownSerializableProperty(): GLib.HashTable
    setUnknownSerializableProperty(value: GLib.HashTable): void
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
<<<<<<< HEAD
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml-0.4.GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableJson, element: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableJson, element: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableJson, node: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableJson, node: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
=======
    /* Virtual methods of GXml.SerializableJson */
    vfuncGetEnableUnknownSerializableProperty(): boolean
    vfuncSerializeUseXmlNodeValue(): boolean
    vfuncNodeName(): string
    vfuncPropertyUseNick(): boolean
    vfuncFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncInitProperties(): void
    vfuncListSerializableProperties(): GObject.ParamSpec[]
    vfuncGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    vfuncSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    vfuncTransformFromString(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    vfuncTransformToString(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    vfuncSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    vfuncDeserializeProperty(propertyNode: Node): boolean
    vfuncSerialize(node: Node): Node | null
    vfuncDeserialize(node: Node): Node | null
    vfuncDefaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncDefaultInitProperties(): void
    vfuncDefaultListSerializableProperties(): GObject.ParamSpec[]
    vfuncDefaultGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    vfuncDefaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    vfuncGetProperties(): GObject.ParamSpec[]
    vfuncSetProperties(value: GObject.ParamSpec[]): void
    vfuncGetIgnoredSerializableProperties(): GLib.HashTable
    vfuncSetIgnoredSerializableProperties(value: GLib.HashTable): void
    vfuncGetUnknownSerializableProperty(): GLib.HashTable
    vfuncSetUnknownSerializableProperty(value: GLib.HashTable): void
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
    connect(sigName: "notify", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableJson, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property", callback: (($obj: SerializableJson, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    on(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableJson, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableJson, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    on(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableJson, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property", callback: (($obj: SerializableJson, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    on(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableJson, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableJson, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
    on(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property_type", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: "notify::properties", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignored-serializable-properties", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: SerializableJson_ConstructProps)
    _init (config?: SerializableJson_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableJson
<<<<<<< HEAD
    static stringToGvalue(str: string, dest: any): { returnType: boolean, dest: any }
=======
    static stringToGvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    static gvalueToString(val: any): string
    static $gtype: GObject.Type
}
export interface Serialization_ConstructProps extends GObject.Object_ConstructProps {
}
export class Serialization {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.Serialization */
    parentInstance: GObject.Object
    priv: SerializationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Fields of GXml.Serialization */
    parentInstance: GObject.Object
    priv: SerializationPrivate
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Serialization, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
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
    connect(sigName: "notify", callback: (($obj: Serialization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Serialization, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Serialization_ConstructProps)
    _init (config?: Serialization_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Serialization
    static serializeObject(object: GObject.Object): Document
    static clearCache(): void
    static deserializeObject(type: GObject.Type, doc: Document): GObject.Object
    static $gtype: GObject.Type
}
export interface SerializableTreeMap_ConstructProps extends Gee.TreeMap_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignoredSerializableProperties?: GLib.HashTable
    unknownSerializableProperty?: GLib.HashTable
    serializedXmlNodeValue?: string
}
export class SerializableTreeMap {
<<<<<<< HEAD
<<<<<<< HEAD
    /* Properties of Gee-0.8.Gee.AbstractBidirSortedMap */
    readonly readOnlyView: Gee.BidirSortedMap
    /* Properties of Gee-0.8.Gee.AbstractSortedMap */
    readonly ascendingKeys: Gee.SortedSet
    readonly ascendingEntries: Gee.SortedSet
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    /* Properties of GXml-0.4.GXml.Serializable */
=======
    /* Properties of Gee.TreeMap */
    keyCompareFunc: GLib.CompareFunc
    valueEqualFunc: GLib.EqualFunc
=======
    /* Properties of Gee.AbstractBidirSortedMap */
    readonly readOnlyView: Gee.BidirSortedMap
    /* Properties of Gee.AbstractSortedMap */
    readonly ascendingKeys: Gee.SortedSet
    readonly ascendingEntries: Gee.SortedSet
>>>>>>> 2968f8b (Update types)
    /* Properties of Gee.AbstractMap */
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    /* Properties of GXml.Serializable */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    unknownSerializableProperty: GLib.HashTable
    serializedXmlNodeValue: string
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableTreeMap */
    parentInstance: Gee.TreeMap
    priv: SerializableTreeMapPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableTreeMap */
=======
    /* Fields of GXml.SerializableTreeMap */
    parentInstance: Gee.TreeMap
    priv: SerializableTreeMapPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableTreeMap */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    nodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    initProperties(): void
    listSerializableProperties(): GObject.ParamSpec[]
<<<<<<< HEAD
    getPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): { returnType: boolean, dest: any }
    transformToString(val: any, str: string): { returnType: boolean, str: string }
=======
    getPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    transformToString(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    defaultDeserialize(node: Node): Node | null
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
<<<<<<< HEAD
<<<<<<< HEAD
    /* Methods of Gee-0.8.Gee.TreeMap */
    getKeyCompareFunc(): { returnType: GLib.CompareDataFunc, resultTarget: object | null }
    getValueEqualFunc(): { returnType: Gee.EqualDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractBidirSortedMap */
=======
    /* Methods of Gee.TreeMap */
    getKeyCompareFunc(): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ object | null ]
    getValueEqualFunc(): [ /* returnType */ Gee.EqualDataFunc, /* resultTarget */ object | null ]
    /* Methods of Gee.AbstractBidirSortedMap */
>>>>>>> 2968f8b (Update types)
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
<<<<<<< HEAD
    /* Methods of Gee-0.8.Gee.AbstractSortedMap */
=======
    /* Methods of Gee.AbstractSortedMap */
>>>>>>> 2968f8b (Update types)
    headMap(before?: object | null): Gee.SortedMap
    tailMap(after?: object | null): Gee.SortedMap
    subMap(before?: object | null, after?: object | null): Gee.SortedMap
    getAscendingKeys(): Gee.SortedSet
    getAscendingEntries(): Gee.SortedSet
<<<<<<< HEAD
    /* Methods of Gee-0.8.Gee.AbstractMap */
=======
=======
>>>>>>> 2968f8b (Update types)
    /* Methods of Gee.AbstractMap */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
<<<<<<< HEAD
    unset(key?: object | null): { returnType: boolean, value: object | null }
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Methods of GXml-0.4.GXml.Serializable */
=======
    watchClosure(closure: GObject.Closure): void
    /* Methods of GXml.Serializable */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getEnableUnknownSerializableProperty(): boolean
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultInitProperties(): void
    defaultListSerializableProperties(): GObject.ParamSpec[]
<<<<<<< HEAD
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
=======
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    defaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    getUnknownSerializableProperty(): GLib.HashTable
    setUnknownSerializableProperty(value: GLib.HashTable): void
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
<<<<<<< HEAD
    /* Methods of GXml-0.4.GXml.SerializableCollection */
    isCollection(): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml-0.4.GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableTreeMap, element: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableTreeMap, element: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableTreeMap, node: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableTreeMap, node: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
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
=======
    /* Methods of GXml.SerializableCollection */
    isCollection(): boolean
    /* Virtual methods of GXml.SerializableTreeMap */
    vfuncSerializeUseXmlNodeValue(): boolean
    vfuncPropertyUseNick(): boolean
    vfuncNodeName(): string
    vfuncFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncInitProperties(): void
    vfuncListSerializableProperties(): GObject.ParamSpec[]
    vfuncGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    vfuncSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    vfuncTransformFromString(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    vfuncTransformToString(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    vfuncSerialize(node: Node): Node | null
    vfuncSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    vfuncDeserialize(node: Node): Node | null
    vfuncDeserializeProperty(propertyNode: Node): boolean
    vfuncGetEnableUnknownSerializableProperty(): boolean
    vfuncDefaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncDefaultInitProperties(): void
    vfuncDefaultListSerializableProperties(): GObject.ParamSpec[]
    vfuncDefaultGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    vfuncDefaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    vfuncGetProperties(): GObject.ParamSpec[]
    vfuncSetProperties(value: GObject.ParamSpec[]): void
    vfuncGetIgnoredSerializableProperties(): GLib.HashTable
    vfuncSetIgnoredSerializableProperties(value: GLib.HashTable): void
    vfuncGetUnknownSerializableProperty(): GLib.HashTable
    vfuncSetUnknownSerializableProperty(value: GLib.HashTable): void
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
<<<<<<< HEAD
    connect(sigName: "notify::key-compare-func", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-compare-func", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-compare-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-equal-func", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-equal-func", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
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
>>>>>>> 2968f8b (Update types)
    connect(sigName: "notify::size", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2968f8b (Update types)
    connect(sigName: "notify::read-only", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
<<<<<<< HEAD
=======
    connect(sigName: "notify::is-empty", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
>>>>>>> 2968f8b (Update types)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
    connect(sigName: "notify::read-only-view", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
>>>>>>> 2968f8b (Update types)
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
    connect(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
<<<<<<< HEAD
<<<<<<< HEAD
    static new(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyCompareFunc: GLib.CompareDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): SerializableTreeMap
    static stringToGvalue(str: string, dest: any): { returnType: boolean, dest: any }
=======
    static new(keyCompareFunc?: GLib.CompareFunc | null, valueEqualFunc?: GLib.EqualFunc | null): SerializableTreeMap
=======
    static new(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyCompareFunc: GLib.CompareDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): SerializableTreeMap
>>>>>>> 2968f8b (Update types)
    static stringToGvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    static gvalueToString(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableHashMap_ConstructProps extends Gee.HashMap_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignoredSerializableProperties?: GLib.HashTable
    unknownSerializableProperty?: GLib.HashTable
    serializedXmlNodeValue?: string
}
export class SerializableHashMap {
<<<<<<< HEAD
<<<<<<< HEAD
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly readOnly: boolean
=======
    /* Properties of Gee.HashMap */
    keyHashFunc: GLib.HashFunc
    keyEqualFunc: GLib.EqualFunc
    valueEqualFunc: GLib.EqualFunc
    /* Properties of Gee.AbstractMap */
    readonly size: number
    readonly isEmpty: boolean
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
    /* Properties of Gee.AbstractMap */
    readonly size: number
    readonly readOnly: boolean
>>>>>>> 2968f8b (Update types)
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    readonly readOnlyView: Gee.Map
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.Serializable */
=======
    /* Properties of GXml.Serializable */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    unknownSerializableProperty: GLib.HashTable
    serializedXmlNodeValue: string
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableHashMap */
    parentInstance: Gee.HashMap
    priv: SerializableHashMapPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableHashMap */
=======
    /* Fields of GXml.SerializableHashMap */
    parentInstance: Gee.HashMap
    priv: SerializableHashMapPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableHashMap */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getEnableUnknownSerializableProperty(): boolean
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    nodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    initProperties(): void
    listSerializableProperties(): GObject.ParamSpec[]
<<<<<<< HEAD
    getPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): { returnType: boolean, dest: any }
    transformToString(val: any, str: string): { returnType: boolean, str: string }
=======
    getPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    transformToString(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    defaultDeserialize(node: Node): Node | null
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
<<<<<<< HEAD
<<<<<<< HEAD
    /* Methods of Gee-0.8.Gee.HashMap */
    getKeyHashFunc(): { returnType: Gee.HashDataFunc, resultTarget: object | null }
    getKeyEqualFunc(): { returnType: Gee.EqualDataFunc, resultTarget: object | null }
    getValueEqualFunc(): { returnType: Gee.EqualDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractMap */
=======
=======
    /* Methods of Gee.HashMap */
    getKeyHashFunc(): [ /* returnType */ Gee.HashDataFunc, /* resultTarget */ object | null ]
    getKeyEqualFunc(): [ /* returnType */ Gee.EqualDataFunc, /* resultTarget */ object | null ]
    getValueEqualFunc(): [ /* returnType */ Gee.EqualDataFunc, /* resultTarget */ object | null ]
>>>>>>> 2968f8b (Update types)
    /* Methods of Gee.AbstractMap */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
<<<<<<< HEAD
    unset(key?: object | null): { returnType: boolean, value: object | null }
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
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Methods of GXml-0.4.GXml.Serializable */
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultInitProperties(): void
    defaultListSerializableProperties(): GObject.ParamSpec[]
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
=======
    watchClosure(closure: GObject.Closure): void
    /* Methods of GXml.Serializable */
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultInitProperties(): void
    defaultListSerializableProperties(): GObject.ParamSpec[]
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    defaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    getUnknownSerializableProperty(): GLib.HashTable
    setUnknownSerializableProperty(value: GLib.HashTable): void
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
<<<<<<< HEAD
    /* Methods of GXml-0.4.GXml.SerializableCollection */
    isCollection(): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml-0.4.GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableHashMap, element: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableHashMap, element: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableHashMap, node: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableHashMap, node: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
=======
    /* Methods of GXml.SerializableCollection */
    isCollection(): boolean
    /* Virtual methods of GXml.SerializableHashMap */
    vfuncGetEnableUnknownSerializableProperty(): boolean
    vfuncSerializeUseXmlNodeValue(): boolean
    vfuncPropertyUseNick(): boolean
    vfuncNodeName(): string
    vfuncFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncInitProperties(): void
    vfuncListSerializableProperties(): GObject.ParamSpec[]
    vfuncGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    vfuncSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    vfuncTransformFromString(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    vfuncTransformToString(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    vfuncSerialize(node: Node): Node | null
    vfuncSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    vfuncDeserialize(node: Node): Node | null
    vfuncDeserializeProperty(propertyNode: Node): boolean
    vfuncDefaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncDefaultInitProperties(): void
    vfuncDefaultListSerializableProperties(): GObject.ParamSpec[]
    vfuncDefaultGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    vfuncDefaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    vfuncGetProperties(): GObject.ParamSpec[]
    vfuncSetProperties(value: GObject.ParamSpec[]): void
    vfuncGetIgnoredSerializableProperties(): GLib.HashTable
    vfuncSetIgnoredSerializableProperties(value: GLib.HashTable): void
    vfuncGetUnknownSerializableProperty(): GLib.HashTable
    vfuncSetUnknownSerializableProperty(value: GLib.HashTable): void
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
<<<<<<< HEAD
    connect(sigName: "notify::key-hash-func", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-hash-func", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-equal-func", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-equal-func", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-equal-func", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-equal-func", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
>>>>>>> 2968f8b (Update types)
    connect(sigName: "notify::size", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2968f8b (Update types)
    connect(sigName: "notify::read-only", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
<<<<<<< HEAD
=======
    connect(sigName: "notify::is-empty", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
>>>>>>> 2968f8b (Update types)
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
    connect(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
<<<<<<< HEAD
<<<<<<< HEAD
    static new(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: Gee.HashDataFunc | null, keyEqualFunc: Gee.EqualDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): SerializableHashMap
    static stringToGvalue(str: string, dest: any): { returnType: boolean, dest: any }
=======
    static new(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueEqualFunc?: GLib.EqualFunc | null): SerializableHashMap
=======
    static new(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: Gee.HashDataFunc | null, keyEqualFunc: Gee.EqualDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): SerializableHashMap
>>>>>>> 2968f8b (Update types)
    static stringToGvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    static gvalueToString(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableDualKeyMap_ConstructProps extends GObject.Object_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignoredSerializableProperties?: GLib.HashTable
    unknownSerializableProperty?: GLib.HashTable
    serializedXmlNodeValue?: string
}
export class SerializableDualKeyMap {
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.SerializableDualKeyMap */
=======
    /* Properties of GXml.SerializableDualKeyMap */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    readonly valueType: GObject.Type
    readonly primaryKeyType: GObject.Type
    readonly secondaryKeyType: GObject.Type
    readonly primaryKeys: Gee.Collection
    readonly size: number
<<<<<<< HEAD
    /* Properties of GXml-0.4.GXml.Serializable */
=======
    /* Properties of GXml.Serializable */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    unknownSerializableProperty: GLib.HashTable
    serializedXmlNodeValue: string
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableDualKeyMap */
    parentInstance: GObject.Object
    priv: SerializableDualKeyMapPrivate
    storage: Gee.HashMultiMap
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableDualKeyMap */
=======
    /* Fields of GXml.SerializableDualKeyMap */
    parentInstance: GObject.Object
    priv: SerializableDualKeyMapPrivate
    storage: Gee.HashMultiMap
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableDualKeyMap */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    secondaryKeys(key?: object | null): Gee.Collection
    valuesForKey(primaryKey?: object | null): Gee.Collection
    values(): Gee.Collection
    set(primaryKey?: object | null, secundaryKey?: object | null, val?: object | null): void
    get(primaryKey?: object | null, secondaryKey?: object | null): object | null
    getEnableUnknownSerializableProperty(): boolean
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    nodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    initProperties(): void
    listSerializableProperties(): GObject.ParamSpec[]
<<<<<<< HEAD
    getPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): { returnType: boolean, dest: any }
    transformToString(val: any, str: string): { returnType: boolean, str: string }
=======
    getPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    transformToString(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    defaultDeserialize(node: Node): Node | null
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
    getValueType(): GObject.Type
    getPrimaryKeyType(): GObject.Type
    getSecondaryKeyType(): GObject.Type
    getPrimaryKeys(): Gee.Collection
    getSize(): number
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Methods of GXml-0.4.GXml.Serializable */
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultInitProperties(): void
    defaultListSerializableProperties(): GObject.ParamSpec[]
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
=======
    watchClosure(closure: GObject.Closure): void
    /* Methods of GXml.Serializable */
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultInitProperties(): void
    defaultListSerializableProperties(): GObject.ParamSpec[]
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    defaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    getUnknownSerializableProperty(): GLib.HashTable
    setUnknownSerializableProperty(value: GLib.HashTable): void
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
<<<<<<< HEAD
    /* Methods of GXml-0.4.GXml.SerializableCollection */
    isCollection(): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml-0.4.GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableDualKeyMap, element: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableDualKeyMap, element: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableDualKeyMap, node: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableDualKeyMap, node: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
=======
    /* Methods of GXml.SerializableCollection */
    isCollection(): boolean
    /* Virtual methods of GXml.SerializableDualKeyMap */
    vfuncGetEnableUnknownSerializableProperty(): boolean
    vfuncSerializeUseXmlNodeValue(): boolean
    vfuncPropertyUseNick(): boolean
    vfuncNodeName(): string
    vfuncFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncInitProperties(): void
    vfuncListSerializableProperties(): GObject.ParamSpec[]
    vfuncGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    vfuncSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    vfuncTransformFromString(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    vfuncTransformToString(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    vfuncSerialize(node: Node): Node | null
    vfuncSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    vfuncDeserialize(node: Node): Node | null
    vfuncDeserializeProperty(propertyNode: Node): boolean
    vfuncDefaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncDefaultInitProperties(): void
    vfuncDefaultListSerializableProperties(): GObject.ParamSpec[]
    vfuncDefaultGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    vfuncDefaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    vfuncGetProperties(): GObject.ParamSpec[]
    vfuncSetProperties(value: GObject.ParamSpec[]): void
    vfuncGetIgnoredSerializableProperties(): GLib.HashTable
    vfuncSetIgnoredSerializableProperties(value: GLib.HashTable): void
    vfuncGetUnknownSerializableProperty(): GLib.HashTable
    vfuncSetUnknownSerializableProperty(value: GLib.HashTable): void
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
    connect(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
<<<<<<< HEAD
    static stringToGvalue(str: string, dest: any): { returnType: boolean, dest: any }
=======
    static stringToGvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    static gvalueToString(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableArrayList_ConstructProps extends Gee.ArrayList_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignoredSerializableProperties?: GLib.HashTable
    unknownSerializableProperty?: GLib.HashTable
    serializedXmlNodeValue?: string
}
export class SerializableArrayList {
<<<<<<< HEAD
<<<<<<< HEAD
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly readOnlyView: Gee.BidirList
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Properties of GXml-0.4.GXml.Serializable */
=======
    /* Properties of Gee.ArrayList */
    equalFunc: GLib.EqualFunc
    /* Properties of Gee.AbstractList */
    readonly readOnlyView: Gee.List
=======
    /* Properties of Gee.AbstractBidirList */
    readonly readOnlyView: Gee.BidirList
>>>>>>> 2968f8b (Update types)
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Properties of GXml.Serializable */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    unknownSerializableProperty: GLib.HashTable
    serializedXmlNodeValue: string
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableArrayList */
    parentInstance: Gee.ArrayList
    priv: SerializableArrayListPrivate
    /* Fields of Gee-0.8.Gee.ArrayList */
    items: object[]
    itemsLength1: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableArrayList */
=======
    /* Fields of GXml.SerializableArrayList */
    parentInstance: Gee.ArrayList
    priv: SerializableArrayListPrivate
    /* Fields of Gee.ArrayList */
    items: object[]
    itemsLength1: number
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableArrayList */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    nodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    initProperties(): void
    listSerializableProperties(): GObject.ParamSpec[]
<<<<<<< HEAD
    getPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): { returnType: boolean, dest: any }
    transformToString(val: any, str: string): { returnType: boolean, str: string }
=======
    getPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    transformToString(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    defaultDeserialize(node: Node): Node | null
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
<<<<<<< HEAD
    /* Methods of Gee-0.8.Gee.ArrayList */
    addAll(collection: Gee.Collection): boolean
    getEqualFunc(): { returnType: Gee.EqualDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractBidirList */
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
    /* Methods of Gee-0.8.Gee.AbstractList */
=======
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    listIterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
<<<<<<< HEAD
<<<<<<< HEAD
    getReadOnlyView(): Gee.List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
=======
    first(): object | null
    last(): object | null
    insertAll(index: number, collection: Gee.Collection): void
=======
    getReadOnlyView(): Gee.List
>>>>>>> 2968f8b (Update types)
    /* Methods of Gee.AbstractCollection */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
<<<<<<< HEAD
<<<<<<< HEAD
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Gee.Collection
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    toArray(): object[]
    addAll(collection: Gee.Collection): boolean
    containsAll(collection: Gee.Collection): boolean
    removeAll(collection: Gee.Collection): boolean
    retainAll(collection: Gee.Collection): boolean
=======
>>>>>>> 2968f8b (Update types)
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Methods of GXml-0.4.GXml.Serializable */
=======
    watchClosure(closure: GObject.Closure): void
    /* Methods of GXml.Serializable */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getEnableUnknownSerializableProperty(): boolean
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultInitProperties(): void
    defaultListSerializableProperties(): GObject.ParamSpec[]
<<<<<<< HEAD
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
=======
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    defaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    getUnknownSerializableProperty(): GLib.HashTable
    setUnknownSerializableProperty(value: GLib.HashTable): void
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
<<<<<<< HEAD
    /* Methods of GXml-0.4.GXml.SerializableCollection */
    isCollection(): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml-0.4.GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableArrayList, element: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property", callback: (element: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableArrayList, element: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "serialize_unknown_property_type", callback: (element: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableArrayList, node: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property", callback: (node: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableArrayList, node: Node, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deserialize_unknown_property_type", callback: (node: Node, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
=======
    /* Methods of GXml.SerializableCollection */
    isCollection(): boolean
    /* Virtual methods of GXml.SerializableArrayList */
    vfuncSerializeUseXmlNodeValue(): boolean
    vfuncPropertyUseNick(): boolean
    vfuncNodeName(): string
    vfuncFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncInitProperties(): void
    vfuncListSerializableProperties(): GObject.ParamSpec[]
    vfuncGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    vfuncSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    vfuncTransformFromString(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    vfuncTransformToString(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    vfuncSerialize(node: Node): Node | null
    vfuncSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    vfuncDeserialize(node: Node): Node | null
    vfuncDeserializeProperty(propertyNode: Node): boolean
    vfuncGetEnableUnknownSerializableProperty(): boolean
    vfuncDefaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncDefaultInitProperties(): void
    vfuncDefaultListSerializableProperties(): GObject.ParamSpec[]
    vfuncDefaultGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    vfuncDefaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    vfuncGetProperties(): GObject.ParamSpec[]
    vfuncSetProperties(value: GObject.ParamSpec[]): void
    vfuncGetIgnoredSerializableProperties(): GLib.HashTable
    vfuncSetIgnoredSerializableProperties(value: GLib.HashTable): void
    vfuncGetUnknownSerializableProperty(): GLib.HashTable
    vfuncSetUnknownSerializableProperty(value: GLib.HashTable): void
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
<<<<<<< HEAD
    connect(sigName: "notify::equal-func", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equal-func", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
>>>>>>> 2968f8b (Update types)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2968f8b (Update types)
    connect(sigName: "notify::read-only", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
<<<<<<< HEAD
=======
    connect(sigName: "notify::is-empty", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
>>>>>>> 2968f8b (Update types)
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
    connect(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unknown-serializable-property", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
<<<<<<< HEAD
<<<<<<< HEAD
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): SerializableArrayList
    static stringToGvalue(str: string, dest: any): { returnType: boolean, dest: any }
=======
    static new(equalFunc?: GLib.EqualFunc | null): SerializableArrayList
=======
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): SerializableArrayList
>>>>>>> 2968f8b (Update types)
    static stringToGvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    static gvalueToString(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableContainer_ConstructProps extends SerializableObjectModel_ConstructProps {
}
export class SerializableContainer {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableContainer */
    parentInstance: SerializableObjectModel
    priv: SerializableContainerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableContainer */
    initContainers(): void
    /* Methods of GXml-0.4.GXml.SerializableObjectModel */
=======
    /* Fields of GXml.SerializableContainer */
    parentInstance: SerializableObjectModel
    priv: SerializableContainerPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml.SerializableContainer */
    initContainers(): void
    /* Methods of GXml.SerializableObjectModel */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getEnableUnknownSerializableProperty(): boolean
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    nodeName(): string
    defaultNodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    initProperties(): void
    listSerializableProperties(): GObject.ParamSpec[]
<<<<<<< HEAD
    getPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): { returnType: boolean, dest: any }
    transformToString(val: any, str: string): { returnType: boolean, str: string }
=======
    getPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    transformToString(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    defaultDeserialize(node: Node): Node | null
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
    toString(): string
<<<<<<< HEAD
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
=======
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
<<<<<<< HEAD
    setProperty(propertyName: string, value: any): void
=======
    setProperty(propertyName: string, value: GObject.Value): void
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
<<<<<<< HEAD
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
=======
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GXml.SerializableContainer */
    vfuncInitContainers(): void
    /* Virtual methods of GXml.SerializableObjectModel */
    vfuncGetEnableUnknownSerializableProperty(): boolean
    vfuncSerializeUseXmlNodeValue(): boolean
    vfuncPropertyUseNick(): boolean
    vfuncNodeName(): string
    vfuncFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncInitProperties(): void
    vfuncListSerializableProperties(): GObject.ParamSpec[]
    vfuncGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    vfuncSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    vfuncTransformFromString(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    vfuncTransformToString(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    vfuncSerialize(node: Node): Node | null
    vfuncSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    vfuncDeserialize(node: Node): Node | null
    vfuncDeserializeProperty(propertyNode: Node): boolean
    vfuncToString(): string
    vfuncDefaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    vfuncDefaultInitProperties(): void
    vfuncDefaultListSerializableProperties(): GObject.ParamSpec[]
    vfuncDefaultGetPropertyValue(spec: GObject.ParamSpec, val: any): /* val */ any
    vfuncDefaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    vfuncGetProperties(): GObject.ParamSpec[]
    vfuncSetProperties(value: GObject.ParamSpec[]): void
    vfuncGetIgnoredSerializableProperties(): GLib.HashTable
    vfuncSetIgnoredSerializableProperties(value: GLib.HashTable): void
    vfuncGetUnknownSerializableProperty(): GLib.HashTable
    vfuncSetUnknownSerializableProperty(value: GLib.HashTable): void
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
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
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
export abstract class AttrClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.AttrClass */
=======
    /* Fields of GXml.AttrClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: BackedNodeClass
    static name: string
}
export class AttrPrivate {
    static name: string
}
export abstract class BackedNodeClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.BackedNodeClass */
=======
    /* Fields of GXml.BackedNodeClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: NodeClass
    static name: string
}
export class BackedNodePrivate {
    static name: string
}
export abstract class CDATASectionClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.CDATASectionClass */
=======
    /* Fields of GXml.CDATASectionClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: TextClass
    static name: string
}
export class CDATASectionPrivate {
    static name: string
}
export abstract class CharacterDataClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.CharacterDataClass */
=======
    /* Fields of GXml.CharacterDataClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: BackedNodeClass
    static name: string
}
export class CharacterDataPrivate {
    static name: string
}
export abstract class CommentClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.CommentClass */
=======
    /* Fields of GXml.CommentClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: CharacterDataClass
    static name: string
}
export class CommentPrivate {
    static name: string
}
export abstract class DocumentClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.DocumentClass */
=======
    /* Fields of GXml.DocumentClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: NodeClass
    static name: string
}
export class DocumentPrivate {
    static name: string
}
export abstract class DocumentFragmentClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.DocumentFragmentClass */
=======
    /* Fields of GXml.DocumentFragmentClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: BackedNodeClass
    static name: string
}
export class DocumentFragmentPrivate {
    static name: string
}
export abstract class DocumentTypeClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.DocumentTypeClass */
=======
    /* Fields of GXml.DocumentTypeClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: NodeClass
    static name: string
}
export class DocumentTypePrivate {
    static name: string
}
export abstract class NodeClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.NodeClass */
=======
    /* Fields of GXml.NodeClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    addNamespaceAttr: (self: Node, uri: string, prefix: string) => NamespaceAttr | null
    insertBefore: (self: Node, newChild: Node, refChild?: Node | null) => Node | null
    replaceChild: (self: Node, newChild: Node, oldChild: Node) => Node | null
    removeChild: (self: Node, oldChild: Node) => Node | null
    appendChild: (self: Node, newChild: Node) => Node | null
    hasChildNodes: (self: Node) => boolean
    cloneNode: (self: Node, deep: boolean) => Node | null
<<<<<<< HEAD
    copy: (self: Node, node: Node, deep: boolean) => { returnType: boolean, node: Node }
=======
    copy: (self: Node, node: Node, deep: boolean) => [ /* returnType */ boolean, /* node */ Node ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    toString: (self: Node, format: boolean, level: number) => string
    static name: string
}
export class NodePrivate {
    static name: string
}
export abstract class ElementClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.ElementClass */
=======
    /* Fields of GXml.ElementClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: BackedNodeClass
    static name: string
}
export class ElementPrivate {
    static name: string
}
export abstract class EntityClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.EntityClass */
=======
    /* Fields of GXml.EntityClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: NodeClass
    static name: string
}
export class EntityPrivate {
    static name: string
}
export abstract class EntityReferenceClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.EntityReferenceClass */
=======
    /* Fields of GXml.EntityReferenceClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: NodeClass
    static name: string
}
export class EntityReferencePrivate {
    static name: string
}
export abstract class ImplementationClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.ImplementationClass */
=======
    /* Fields of GXml.ImplementationClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    static name: string
}
export class ImplementationPrivate {
    static name: string
}
export abstract class NamedAttrMapClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.NamedAttrMapClass */
=======
    /* Fields of GXml.NamedAttrMapClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    static name: string
}
export class NamedAttrMapPrivate {
    static name: string
}
export abstract class NamespaceAttrClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.NamespaceAttrClass */
=======
    /* Fields of GXml.NamespaceAttrClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: NodeClass
    static name: string
}
export class NamespaceAttrPrivate {
    static name: string
}
export abstract class NotationClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.NotationClass */
=======
    /* Fields of GXml.NotationClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: NodeClass
    static name: string
}
export class NotationPrivate {
    static name: string
}
export abstract class ProcessingInstructionClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.ProcessingInstructionClass */
=======
    /* Fields of GXml.ProcessingInstructionClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: NodeClass
    static name: string
}
export class ProcessingInstructionPrivate {
    static name: string
}
export abstract class TextClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.TextClass */
=======
    /* Fields of GXml.TextClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: CharacterDataClass
    static name: string
}
export class TextPrivate {
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
}
export abstract class SerializableObjectModelClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableObjectModelClass */
=======
    /* Fields of GXml.SerializableObjectModelClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    getEnableUnknownSerializableProperty: (self: SerializableObjectModel) => boolean
    serializeUseXmlNodeValue: (self: SerializableObjectModel) => boolean
    propertyUseNick: (self: SerializableObjectModel) => boolean
    nodeName: (self: SerializableObjectModel) => string
    findPropertySpec: (self: SerializableObjectModel, propertyName: string) => GObject.ParamSpec | null
    initProperties: (self: SerializableObjectModel) => void
    listSerializableProperties: (self: SerializableObjectModel) => GObject.ParamSpec[]
<<<<<<< HEAD
    getPropertyValue: (self: SerializableObjectModel, spec: GObject.ParamSpec, val: any) => { val: any }
    setPropertyValue: (self: SerializableObjectModel, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableObjectModel, str: string, dest: any) => { returnType: boolean, dest: any }
    transformToString: (self: SerializableObjectModel, val: any, str: string) => { returnType: boolean, str: string }
=======
    getPropertyValue: (self: SerializableObjectModel, spec: GObject.ParamSpec, val: any) => /* val */ any
    setPropertyValue: (self: SerializableObjectModel, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableObjectModel, str: string, dest: any) => [ /* returnType */ boolean, /* dest */ any ]
    transformToString: (self: SerializableObjectModel, val: any, str: string) => [ /* returnType */ boolean, /* str */ string ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    serialize: (self: SerializableObjectModel, node: Node) => Node | null
    serializeProperty: (self: SerializableObjectModel, element: Element, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableObjectModel, node: Node) => Node | null
    deserializeProperty: (self: SerializableObjectModel, propertyNode: Node) => boolean
    toString: (self: SerializableObjectModel) => string
    static name: string
}
export class SerializableObjectModelPrivate {
    static name: string
}
export abstract class SerializableJsonClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableJsonClass */
=======
    /* Fields of GXml.SerializableJsonClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    getEnableUnknownSerializableProperty: (self: SerializableJson) => boolean
    serializeUseXmlNodeValue: (self: SerializableJson) => boolean
    nodeName: (self: SerializableJson) => string
    propertyUseNick: (self: SerializableJson) => boolean
    findPropertySpec: (self: SerializableJson, propertyName: string) => GObject.ParamSpec | null
    initProperties: (self: SerializableJson) => void
    listSerializableProperties: (self: SerializableJson) => GObject.ParamSpec[]
<<<<<<< HEAD
    getPropertyValue: (self: SerializableJson, spec: GObject.ParamSpec, val: any) => { val: any }
    setPropertyValue: (self: SerializableJson, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableJson, str: string, dest: any) => { returnType: boolean, dest: any }
    transformToString: (self: SerializableJson, val: any, str: string) => { returnType: boolean, str: string }
=======
    getPropertyValue: (self: SerializableJson, spec: GObject.ParamSpec, val: any) => /* val */ any
    setPropertyValue: (self: SerializableJson, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableJson, str: string, dest: any) => [ /* returnType */ boolean, /* dest */ any ]
    transformToString: (self: SerializableJson, val: any, str: string) => [ /* returnType */ boolean, /* str */ string ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    serializeProperty: (self: SerializableJson, element: Element, prop: GObject.ParamSpec) => Node | null
    deserializeProperty: (self: SerializableJson, propertyNode: Node) => boolean
    static name: string
}
export class SerializableJsonPrivate {
    static name: string
}
export abstract class SerializationClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializationClass */
=======
    /* Fields of GXml.SerializationClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    static name: string
}
export class SerializationPrivate {
    static name: string
}
export abstract class SerializableTreeMapClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableTreeMapClass */
=======
    /* Fields of GXml.SerializableTreeMapClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: Gee.TreeMapClass
    serializeUseXmlNodeValue: (self: SerializableTreeMap) => boolean
    propertyUseNick: (self: SerializableTreeMap) => boolean
    nodeName: (self: SerializableTreeMap) => string
    findPropertySpec: (self: SerializableTreeMap, propertyName: string) => GObject.ParamSpec | null
    initProperties: (self: SerializableTreeMap) => void
    listSerializableProperties: (self: SerializableTreeMap) => GObject.ParamSpec[]
<<<<<<< HEAD
    getPropertyValue: (self: SerializableTreeMap, spec: GObject.ParamSpec, val: any) => { val: any }
    setPropertyValue: (self: SerializableTreeMap, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableTreeMap, str: string, dest: any) => { returnType: boolean, dest: any }
    transformToString: (self: SerializableTreeMap, val: any, str: string) => { returnType: boolean, str: string }
=======
    getPropertyValue: (self: SerializableTreeMap, spec: GObject.ParamSpec, val: any) => /* val */ any
    setPropertyValue: (self: SerializableTreeMap, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableTreeMap, str: string, dest: any) => [ /* returnType */ boolean, /* dest */ any ]
    transformToString: (self: SerializableTreeMap, val: any, str: string) => [ /* returnType */ boolean, /* str */ string ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    serialize: (self: SerializableTreeMap, node: Node) => Node | null
    serializeProperty: (self: SerializableTreeMap, element: Element, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableTreeMap, node: Node) => Node | null
    deserializeProperty: (self: SerializableTreeMap, propertyNode: Node) => boolean
    static name: string
}
export class SerializableTreeMapPrivate {
    static name: string
}
export abstract class SerializableHashMapClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableHashMapClass */
=======
    /* Fields of GXml.SerializableHashMapClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: Gee.HashMapClass
    getEnableUnknownSerializableProperty: (self: SerializableHashMap) => boolean
    serializeUseXmlNodeValue: (self: SerializableHashMap) => boolean
    propertyUseNick: (self: SerializableHashMap) => boolean
    nodeName: (self: SerializableHashMap) => string
    findPropertySpec: (self: SerializableHashMap, propertyName: string) => GObject.ParamSpec | null
    initProperties: (self: SerializableHashMap) => void
    listSerializableProperties: (self: SerializableHashMap) => GObject.ParamSpec[]
<<<<<<< HEAD
    getPropertyValue: (self: SerializableHashMap, spec: GObject.ParamSpec, val: any) => { val: any }
    setPropertyValue: (self: SerializableHashMap, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableHashMap, str: string, dest: any) => { returnType: boolean, dest: any }
    transformToString: (self: SerializableHashMap, val: any, str: string) => { returnType: boolean, str: string }
=======
    getPropertyValue: (self: SerializableHashMap, spec: GObject.ParamSpec, val: any) => /* val */ any
    setPropertyValue: (self: SerializableHashMap, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableHashMap, str: string, dest: any) => [ /* returnType */ boolean, /* dest */ any ]
    transformToString: (self: SerializableHashMap, val: any, str: string) => [ /* returnType */ boolean, /* str */ string ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    serialize: (self: SerializableHashMap, node: Node) => Node | null
    serializeProperty: (self: SerializableHashMap, element: Element, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableHashMap, node: Node) => Node | null
    deserializeProperty: (self: SerializableHashMap, propertyNode: Node) => boolean
    static name: string
}
export class SerializableHashMapPrivate {
    static name: string
}
export abstract class SerializableDualKeyMapClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableDualKeyMapClass */
=======
    /* Fields of GXml.SerializableDualKeyMapClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: GObject.ObjectClass
    getEnableUnknownSerializableProperty: (self: SerializableDualKeyMap) => boolean
    serializeUseXmlNodeValue: (self: SerializableDualKeyMap) => boolean
    propertyUseNick: (self: SerializableDualKeyMap) => boolean
    nodeName: (self: SerializableDualKeyMap) => string
    findPropertySpec: (self: SerializableDualKeyMap, propertyName: string) => GObject.ParamSpec | null
    initProperties: (self: SerializableDualKeyMap) => void
    listSerializableProperties: (self: SerializableDualKeyMap) => GObject.ParamSpec[]
<<<<<<< HEAD
    getPropertyValue: (self: SerializableDualKeyMap, spec: GObject.ParamSpec, val: any) => { val: any }
    setPropertyValue: (self: SerializableDualKeyMap, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableDualKeyMap, str: string, dest: any) => { returnType: boolean, dest: any }
    transformToString: (self: SerializableDualKeyMap, val: any, str: string) => { returnType: boolean, str: string }
=======
    getPropertyValue: (self: SerializableDualKeyMap, spec: GObject.ParamSpec, val: any) => /* val */ any
    setPropertyValue: (self: SerializableDualKeyMap, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableDualKeyMap, str: string, dest: any) => [ /* returnType */ boolean, /* dest */ any ]
    transformToString: (self: SerializableDualKeyMap, val: any, str: string) => [ /* returnType */ boolean, /* str */ string ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    serialize: (self: SerializableDualKeyMap, node: Node) => Node | null
    serializeProperty: (self: SerializableDualKeyMap, element: Element, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableDualKeyMap, node: Node) => Node | null
    deserializeProperty: (self: SerializableDualKeyMap, propertyNode: Node) => boolean
    static name: string
}
export class SerializableDualKeyMapPrivate {
    static name: string
}
export abstract class SerializableArrayListClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableArrayListClass */
=======
    /* Fields of GXml.SerializableArrayListClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: Gee.ArrayListClass
    serializeUseXmlNodeValue: (self: SerializableArrayList) => boolean
    propertyUseNick: (self: SerializableArrayList) => boolean
    nodeName: (self: SerializableArrayList) => string
    findPropertySpec: (self: SerializableArrayList, propertyName: string) => GObject.ParamSpec | null
    initProperties: (self: SerializableArrayList) => void
    listSerializableProperties: (self: SerializableArrayList) => GObject.ParamSpec[]
<<<<<<< HEAD
    getPropertyValue: (self: SerializableArrayList, spec: GObject.ParamSpec, val: any) => { val: any }
    setPropertyValue: (self: SerializableArrayList, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableArrayList, str: string, dest: any) => { returnType: boolean, dest: any }
    transformToString: (self: SerializableArrayList, val: any, str: string) => { returnType: boolean, str: string }
=======
    getPropertyValue: (self: SerializableArrayList, spec: GObject.ParamSpec, val: any) => /* val */ any
    setPropertyValue: (self: SerializableArrayList, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableArrayList, str: string, dest: any) => [ /* returnType */ boolean, /* dest */ any ]
    transformToString: (self: SerializableArrayList, val: any, str: string) => [ /* returnType */ boolean, /* str */ string ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    serialize: (self: SerializableArrayList, node: Node) => Node | null
    serializeProperty: (self: SerializableArrayList, element: Element, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableArrayList, node: Node) => Node | null
    deserializeProperty: (self: SerializableArrayList, propertyNode: Node) => boolean
    static name: string
}
export class SerializableArrayListPrivate {
    static name: string
}
export abstract class SerializableContainerClass {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableContainerClass */
=======
    /* Fields of GXml.SerializableContainerClass */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentClass: SerializableObjectModelClass
    initContainers: (self: SerializableContainer) => void
    static name: string
}
export class SerializableContainerPrivate {
    static name: string
}
export abstract class NamedNodeMapIface {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.NamedNodeMapIface */
=======
    /* Fields of GXml.NamedNodeMapIface */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentIface: GObject.TypeInterface
    getNamedItem: (self: NamedNodeMap, name: string) => object | null
    setNamedItem: (self: NamedNodeMap, item?: object | null) => object | null
    removeNamedItem: (self: NamedNodeMap, name: string) => object | null
    item: (self: NamedNodeMap, index: number) => object | null
    getLength: (self: NamedNodeMap) => number
    setLength: (self: NamedNodeMap, value: number) => void
    static name: string
}
export abstract class NodeListIface {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.NodeListIface */
=======
    /* Fields of GXml.NodeListIface */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentIface: GObject.TypeInterface
    item: (self: NodeList, idx: number) => Node
    insertBefore: (self: NodeList, newChild: Node, refChild?: Node | null) => Node | null
    replaceChild: (self: NodeList, newChild: Node, oldChild: Node) => Node | null
    removeChild: (self: NodeList, oldChild: Node) => Node | null
    appendChild: (self: NodeList, newChild: Node) => Node | null
    toString: (self: NodeList, inLine: boolean) => string
    first: (self: NodeList) => Node
    last: (self: NodeList) => Node
    get: (self: NodeList, n: number) => Node
    getLength: (self: NodeList) => number
    setLength: (self: NodeList, value: number) => void
    static name: string
}
export abstract class SerializableIface {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableIface */
=======
    /* Fields of GXml.SerializableIface */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentIface: GObject.TypeInterface
    getEnableUnknownSerializableProperty: (self: Serializable) => boolean
    serializeUseXmlNodeValue: (self: Serializable) => boolean
    nodeName: (self: Serializable) => string
    propertyUseNick: (self: Serializable) => boolean
    serialize: (self: Serializable, node: Node) => Node | null
    serializeProperty: (self: Serializable, element: Element, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: Serializable, node: Node) => Node | null
    deserializeProperty: (self: Serializable, propertyNode: Node) => boolean
    findPropertySpec: (self: Serializable, propertyName: string) => GObject.ParamSpec | null
    defaultFindPropertySpec: (self: Serializable, propertyName: string) => GObject.ParamSpec | null
    initProperties: (self: Serializable) => void
    defaultInitProperties: (self: Serializable) => void
    listSerializableProperties: (self: Serializable) => GObject.ParamSpec[]
    defaultListSerializableProperties: (self: Serializable) => GObject.ParamSpec[]
<<<<<<< HEAD
    getPropertyValue: (self: Serializable, spec: GObject.ParamSpec, val: any) => { val: any }
    defaultGetPropertyValue: (self: Serializable, spec: GObject.ParamSpec, val: any) => { val: any }
    setPropertyValue: (self: Serializable, spec: GObject.ParamSpec, val: any) => void
    defaultSetPropertyValue: (self: Serializable, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: Serializable, str: string, dest: any) => { returnType: boolean, dest: any }
    transformToString: (self: Serializable, val: any, str: string) => { returnType: boolean, str: string }
=======
    getPropertyValue: (self: Serializable, spec: GObject.ParamSpec, val: any) => /* val */ any
    defaultGetPropertyValue: (self: Serializable, spec: GObject.ParamSpec, val: any) => /* val */ any
    setPropertyValue: (self: Serializable, spec: GObject.ParamSpec, val: any) => void
    defaultSetPropertyValue: (self: Serializable, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: Serializable, str: string, dest: any) => [ /* returnType */ boolean, /* dest */ any ]
    transformToString: (self: Serializable, val: any, str: string) => [ /* returnType */ boolean, /* str */ string ]
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    getProperties: (self: Serializable) => GObject.ParamSpec[]
    setProperties: (self: Serializable, value: GObject.ParamSpec[]) => void
    getIgnoredSerializableProperties: (self: Serializable) => GLib.HashTable
    setIgnoredSerializableProperties: (self: Serializable, value: GLib.HashTable) => void
    getUnknownSerializableProperty: (self: Serializable) => GLib.HashTable
    setUnknownSerializableProperty: (self: Serializable, value: GLib.HashTable) => void
    getSerializedXmlNodeValue: (self: Serializable) => string | null
    setSerializedXmlNodeValue: (self: Serializable, value?: string | null) => void
    static name: string
}
export abstract class SerializableMapKeyIface {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableMapKeyIface */
=======
    /* Fields of GXml.SerializableMapKeyIface */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentIface: GObject.TypeInterface
    getMapKey: (self: SerializableMapKey) => object | null
    static name: string
}
export abstract class SerializableMapDualKeyIface {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableMapDualKeyIface */
=======
    /* Fields of GXml.SerializableMapDualKeyIface */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentIface: GObject.TypeInterface
    getMapPrimaryKey: (self: SerializableMapDualKey) => object | null
    getMapSecondaryKey: (self: SerializableMapDualKey) => object | null
    static name: string
}
export abstract class SerializableCollectionIface {
<<<<<<< HEAD
    /* Fields of GXml-0.4.GXml.SerializableCollectionIface */
=======
    /* Fields of GXml.SerializableCollectionIface */
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
    parentIface: GObject.TypeInterface
    isCollection: (self: SerializableCollection) => boolean
    static name: string
}
}