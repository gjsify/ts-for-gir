/**
 * GXml-0.4
 */

import "node"
import type { Gee } from './Gee-0.8';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

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
    /* Properties of GXml-0.4.GXml.NamedNodeMap */
    length: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.NamedNodeMap */
    getNamedItem(name: string): object | null
    setNamedItem(item?: object | null): object | null
    removeNamedItem(name: string): object | null
    item(index: number): object | null
    getLength(): number
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NamedNodeMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.NodeList */
    length: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.NodeList */
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.Serializable */
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    unknownSerializableProperty: GLib.HashTable
    serializedXmlNodeValue: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Serializable */
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
    getPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    defaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): { returnType: boolean, dest: any }
    transformToString(val: any, str: string): { returnType: boolean, str: string }
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    getUnknownSerializableProperty(): GLib.HashTable
    setUnknownSerializableProperty(value: GLib.HashTable): void
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
    /* Methods of GObject-2.0.GObject.Object */
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
    static stringToGvalue(str: string, dest: any): { returnType: boolean, dest: any }
    static gvalueToString(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableMapKey_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableMapKey {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableMapKey */
    getMapKey(): object | null
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableMapKey, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableMapDualKey */
    getMapPrimaryKey(): object | null
    getMapSecondaryKey(): object | null
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableMapDualKey, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableCollection */
    isCollection(): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableCollection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.Attr */
    name: string
    specified: boolean
    value: string
    /* Properties of GXml-0.4.GXml.Node */
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
    /* Fields of GXml-0.4.GXml.Attr */
    parentInstance: BackedNode
    priv: AttrPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Attr */
    getName(): string
    getSpecified(): boolean
    getValue(): string
    setValue(value: string): void
    /* Methods of GXml-0.4.GXml.Node */
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.Node */
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
    /* Fields of GXml-0.4.GXml.BackedNode */
    parentInstance: Node
    priv: BackedNodePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Node */
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.CharacterData */
    data: string
    length: number
    /* Properties of GXml-0.4.GXml.Node */
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
    /* Fields of GXml-0.4.GXml.CDATASection */
    parentInstance: Text
    priv: CDATASectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Text */
    splitText(offset: number): Text
    /* Methods of GXml-0.4.GXml.CharacterData */
    substringData(offset: number, count: number): string
    appendData(newSegment: string): void
    insertData(offset: number, newSegment: string): void
    deleteData(offset: number, count: number): void
    replaceData(offset: number, count: number, newSegment: string): void
    getData(): string
    setData(value: string): void
    getLength(): number
    /* Methods of GXml-0.4.GXml.Node */
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.CharacterData */
    data: string
    length: number
    /* Properties of GXml-0.4.GXml.Node */
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
    /* Fields of GXml-0.4.GXml.CharacterData */
    parentInstance: BackedNode
    priv: CharacterDataPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.CharacterData */
    substringData(offset: number, count: number): string
    appendData(newSegment: string): void
    insertData(offset: number, newSegment: string): void
    deleteData(offset: number, count: number): void
    replaceData(offset: number, count: number, newSegment: string): void
    getData(): string
    setData(value: string): void
    getLength(): number
    /* Methods of GXml-0.4.GXml.Node */
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.CharacterData */
    data: string
    length: number
    /* Properties of GXml-0.4.GXml.Node */
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
    /* Fields of GXml-0.4.GXml.Comment */
    parentInstance: CharacterData
    priv: CommentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.CharacterData */
    substringData(offset: number, count: number): string
    appendData(newSegment: string): void
    insertData(offset: number, newSegment: string): void
    deleteData(offset: number, count: number): void
    replaceData(offset: number, count: number, newSegment: string): void
    getData(): string
    setData(value: string): void
    getLength(): number
    /* Methods of GXml-0.4.GXml.Node */
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.Document */
    doctype: DocumentType
    implementation: Implementation
    documentElement: Element
    /* Properties of GXml-0.4.GXml.Node */
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
    /* Fields of GXml-0.4.GXml.Document */
    parentInstance: Node
    priv: DocumentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Document */
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
    /* Methods of GXml-0.4.GXml.Node */
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.Node */
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
    /* Fields of GXml-0.4.GXml.DocumentFragment */
    parentInstance: BackedNode
    priv: DocumentFragmentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Node */
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.DocumentType */
    name: string
    entities: GLib.HashTable
    notations: GLib.HashTable
    /* Properties of GXml-0.4.GXml.Node */
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
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.Node */
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
    /* Fields of GXml-0.4.GXml.Node */
    parentInstance: GObject.Object
    priv: NodePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Node */
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.Element */
    tagName: string
    content: string
    /* Properties of GXml-0.4.GXml.Node */
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
    /* Fields of GXml-0.4.GXml.Element */
    parentInstance: BackedNode
    priv: ElementPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Element */
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
    /* Methods of GXml-0.4.GXml.Node */
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.Entity */
    publicId: string
    systemId: string
    notationName: string
    /* Properties of GXml-0.4.GXml.Node */
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
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.Node */
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
    /* Fields of GXml-0.4.GXml.EntityReference */
    parentInstance: Node
    priv: EntityReferencePrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Node */
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Implementation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Methods of GXml-0.4.GXml.NamedNodeMap */
    getNamedItem(name: string): object | null
    setNamedItem(item?: object | null): object | null
    removeNamedItem(name: string): object | null
    item(index: number): object | null
    getLength(): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.NamespaceAttr */
    definedPrefix: string
    definedNamespaceUri: string
    /* Properties of GXml-0.4.GXml.Node */
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
    /* Fields of GXml-0.4.GXml.NamespaceAttr */
    parentInstance: Node
    priv: NamespaceAttrPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.NamespaceAttr */
    getDefinedPrefix(): string
    getDefinedNamespaceUri(): string
    /* Methods of GXml-0.4.GXml.Node */
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.Notation */
    publicId: string
    systemId: string
    /* Properties of GXml-0.4.GXml.Node */
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
    /* Fields of GXml-0.4.GXml.Notation */
    parentInstance: Node
    priv: NotationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Notation */
    getPublicId(): string | null
    getSystemId(): string | null
    /* Methods of GXml-0.4.GXml.Node */
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.ProcessingInstruction */
    target: string
    data: string
    /* Properties of GXml-0.4.GXml.Node */
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
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.CharacterData */
    data: string
    length: number
    /* Properties of GXml-0.4.GXml.Node */
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
    /* Fields of GXml-0.4.GXml.Text */
    parentInstance: CharacterData
    priv: TextPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.Text */
    splitText(offset: number): Text
    /* Methods of GXml-0.4.GXml.CharacterData */
    substringData(offset: number, count: number): string
    appendData(newSegment: string): void
    insertData(offset: number, newSegment: string): void
    deleteData(offset: number, count: number): void
    replaceData(offset: number, count: number, newSegment: string): void
    getData(): string
    setData(value: string): void
    getLength(): number
    /* Methods of GXml-0.4.GXml.Node */
    addNamespaceAttr(uri: string, prefix: string): NamespaceAttr | null
    insertBefore(newChild: Node, refChild?: Node | null): Node | null
    replaceChild(newChild: Node, oldChild: Node): Node | null
    removeChild(oldChild: Node): Node | null
    appendChild(newChild: Node): Node | null
    hasChildNodes(): boolean
    cloneNode(deep: boolean): Node | null
    copy(node: Node, deep: boolean): { returnType: boolean, node: Node }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Properties of GXml-0.4.GXml.Serializable */
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    unknownSerializableProperty: GLib.HashTable
    serializedXmlNodeValue: string
    /* Fields of GXml-0.4.GXml.SerializableObjectModel */
    parentInstance: GObject.Object
    priv: SerializableObjectModelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableObjectModel */
    getEnableUnknownSerializableProperty(): boolean
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    nodeName(): string
    defaultNodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    initProperties(): void
    listSerializableProperties(): GObject.ParamSpec[]
    getPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): { returnType: boolean, dest: any }
    transformToString(val: any, str: string): { returnType: boolean, str: string }
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    defaultDeserialize(node: Node): Node | null
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.4.GXml.Serializable */
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultInitProperties(): void
    defaultListSerializableProperties(): GObject.ParamSpec[]
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    defaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    getUnknownSerializableProperty(): GLib.HashTable
    setUnknownSerializableProperty(value: GLib.HashTable): void
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
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
    static stringToGvalue(str: string, dest: any): { returnType: boolean, dest: any }
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
    /* Properties of GXml-0.4.GXml.Serializable */
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    unknownSerializableProperty: GLib.HashTable
    serializedXmlNodeValue: string
    /* Fields of GXml-0.4.GXml.SerializableJson */
    parentInstance: GObject.Object
    priv: SerializableJsonPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableJson */
    getEnableUnknownSerializableProperty(): boolean
    serializeUseXmlNodeValue(): boolean
    nodeName(): string
    propertyUseNick(): boolean
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    initProperties(): void
    listSerializableProperties(): GObject.ParamSpec[]
    getPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): { returnType: boolean, dest: any }
    transformToString(val: any, str: string): { returnType: boolean, str: string }
    serializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserializeProperty(propertyNode: Node): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.4.GXml.Serializable */
    serialize(node: Node): Node | null
    deserialize(node: Node): Node | null
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultInitProperties(): void
    defaultListSerializableProperties(): GObject.ParamSpec[]
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    defaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    getUnknownSerializableProperty(): GLib.HashTable
    setUnknownSerializableProperty(value: GLib.HashTable): void
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
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
    static stringToGvalue(str: string, dest: any): { returnType: boolean, dest: any }
    static gvalueToString(val: any): string
    static $gtype: GObject.Type
}
export interface Serialization_ConstructProps extends GObject.Object_ConstructProps {
}
export class Serialization {
    /* Fields of GXml-0.4.GXml.Serialization */
    parentInstance: GObject.Object
    priv: SerializationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Serialization, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    unknownSerializableProperty: GLib.HashTable
    serializedXmlNodeValue: string
    /* Fields of GXml-0.4.GXml.SerializableTreeMap */
    parentInstance: Gee.TreeMap
    priv: SerializableTreeMapPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableTreeMap */
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    nodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    initProperties(): void
    listSerializableProperties(): GObject.ParamSpec[]
    getPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): { returnType: boolean, dest: any }
    transformToString(val: any, str: string): { returnType: boolean, str: string }
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    defaultDeserialize(node: Node): Node | null
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
    /* Methods of Gee-0.8.Gee.TreeMap */
    getKeyCompareFunc(): { returnType: GLib.CompareDataFunc, resultTarget: object | null }
    getValueEqualFunc(): { returnType: Gee.EqualDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractBidirSortedMap */
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
    /* Methods of Gee-0.8.Gee.AbstractSortedMap */
    headMap(before?: object | null): Gee.SortedMap
    tailMap(after?: object | null): Gee.SortedMap
    subMap(before?: object | null, after?: object | null): Gee.SortedMap
    getAscendingKeys(): Gee.SortedSet
    getAscendingEntries(): Gee.SortedSet
    /* Methods of Gee-0.8.Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
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
    /* Methods of GXml-0.4.GXml.Serializable */
    getEnableUnknownSerializableProperty(): boolean
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultInitProperties(): void
    defaultListSerializableProperties(): GObject.ParamSpec[]
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    defaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    getUnknownSerializableProperty(): GLib.HashTable
    setUnknownSerializableProperty(value: GLib.HashTable): void
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
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
    static new(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyCompareFunc: GLib.CompareDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): SerializableTreeMap
    static stringToGvalue(str: string, dest: any): { returnType: boolean, dest: any }
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
    /* Properties of Gee-0.8.Gee.AbstractMap */
    readonly size: number
    readonly readOnly: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    readonly readOnlyView: Gee.Map
    /* Properties of GXml-0.4.GXml.Serializable */
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    unknownSerializableProperty: GLib.HashTable
    serializedXmlNodeValue: string
    /* Fields of GXml-0.4.GXml.SerializableHashMap */
    parentInstance: Gee.HashMap
    priv: SerializableHashMapPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableHashMap */
    getEnableUnknownSerializableProperty(): boolean
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    nodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    initProperties(): void
    listSerializableProperties(): GObject.ParamSpec[]
    getPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): { returnType: boolean, dest: any }
    transformToString(val: any, str: string): { returnType: boolean, str: string }
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    defaultDeserialize(node: Node): Node | null
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
    /* Methods of Gee-0.8.Gee.HashMap */
    getKeyHashFunc(): { returnType: Gee.HashDataFunc, resultTarget: object | null }
    getKeyEqualFunc(): { returnType: Gee.EqualDataFunc, resultTarget: object | null }
    getValueEqualFunc(): { returnType: Gee.EqualDataFunc, resultTarget: object | null }
    /* Methods of Gee-0.8.Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
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
    /* Methods of GXml-0.4.GXml.Serializable */
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultInitProperties(): void
    defaultListSerializableProperties(): GObject.ParamSpec[]
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    defaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    getUnknownSerializableProperty(): GLib.HashTable
    setUnknownSerializableProperty(value: GLib.HashTable): void
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
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
    static new(kType: GObject.Type, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.Type, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: Gee.HashDataFunc | null, keyEqualFunc: Gee.EqualDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): SerializableHashMap
    static stringToGvalue(str: string, dest: any): { returnType: boolean, dest: any }
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
    /* Properties of GXml-0.4.GXml.SerializableDualKeyMap */
    readonly valueType: GObject.Type
    readonly primaryKeyType: GObject.Type
    readonly secondaryKeyType: GObject.Type
    readonly primaryKeys: Gee.Collection
    readonly size: number
    /* Properties of GXml-0.4.GXml.Serializable */
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    unknownSerializableProperty: GLib.HashTable
    serializedXmlNodeValue: string
    /* Fields of GXml-0.4.GXml.SerializableDualKeyMap */
    parentInstance: GObject.Object
    priv: SerializableDualKeyMapPrivate
    storage: Gee.HashMultiMap
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableDualKeyMap */
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
    getPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): { returnType: boolean, dest: any }
    transformToString(val: any, str: string): { returnType: boolean, str: string }
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
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.4.GXml.Serializable */
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultInitProperties(): void
    defaultListSerializableProperties(): GObject.ParamSpec[]
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    defaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    getUnknownSerializableProperty(): GLib.HashTable
    setUnknownSerializableProperty(value: GLib.HashTable): void
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
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
    static stringToGvalue(str: string, dest: any): { returnType: boolean, dest: any }
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
    /* Properties of Gee-0.8.Gee.AbstractBidirList */
    readonly readOnlyView: Gee.BidirList
    /* Properties of Gee-0.8.Gee.AbstractCollection */
    readonly size: number
    readonly readOnly: boolean
    /* Properties of GXml-0.4.GXml.Serializable */
    properties: GObject.ParamSpec[]
    ignoredSerializableProperties: GLib.HashTable
    unknownSerializableProperty: GLib.HashTable
    serializedXmlNodeValue: string
    /* Fields of GXml-0.4.GXml.SerializableArrayList */
    parentInstance: Gee.ArrayList
    priv: SerializableArrayListPrivate
    /* Fields of Gee-0.8.Gee.ArrayList */
    items: object[]
    itemsLength1: number
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableArrayList */
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    nodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    initProperties(): void
    listSerializableProperties(): GObject.ParamSpec[]
    getPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): { returnType: boolean, dest: any }
    transformToString(val: any, str: string): { returnType: boolean, str: string }
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    defaultDeserialize(node: Node): Node | null
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
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
    listIterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    getReadOnlyView(): Gee.List
    /* Methods of Gee-0.8.Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    getSize(): number
    getReadOnly(): boolean
    getReadOnlyView(): Gee.Collection
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Methods of GXml-0.4.GXml.Serializable */
    getEnableUnknownSerializableProperty(): boolean
    defaultFindPropertySpec(propertyName: string): GObject.ParamSpec | null
    defaultInitProperties(): void
    defaultListSerializableProperties(): GObject.ParamSpec[]
    defaultGetPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    defaultSetPropertyValue(spec: GObject.ParamSpec, val: any): void
    getProperties(): GObject.ParamSpec[]
    setProperties(value: GObject.ParamSpec[]): void
    getIgnoredSerializableProperties(): GLib.HashTable
    setIgnoredSerializableProperties(value: GLib.HashTable): void
    getUnknownSerializableProperty(): GLib.HashTable
    setUnknownSerializableProperty(value: GLib.HashTable): void
    getSerializedXmlNodeValue(): string | null
    setSerializedXmlNodeValue(value?: string | null): void
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
    static new(gType: GObject.Type, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): SerializableArrayList
    static stringToGvalue(str: string, dest: any): { returnType: boolean, dest: any }
    static gvalueToString(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableContainer_ConstructProps extends SerializableObjectModel_ConstructProps {
}
export class SerializableContainer {
    /* Fields of GXml-0.4.GXml.SerializableContainer */
    parentInstance: SerializableObjectModel
    priv: SerializableContainerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GXml-0.4.GXml.SerializableContainer */
    initContainers(): void
    /* Methods of GXml-0.4.GXml.SerializableObjectModel */
    getEnableUnknownSerializableProperty(): boolean
    serializeUseXmlNodeValue(): boolean
    propertyUseNick(): boolean
    nodeName(): string
    defaultNodeName(): string
    findPropertySpec(propertyName: string): GObject.ParamSpec | null
    initProperties(): void
    listSerializableProperties(): GObject.ParamSpec[]
    getPropertyValue(spec: GObject.ParamSpec, val: any): { val: any }
    setPropertyValue(spec: GObject.ParamSpec, val: any): void
    transformFromString(str: string, dest: any): { returnType: boolean, dest: any }
    transformToString(val: any, str: string): { returnType: boolean, str: string }
    serialize(node: Node): Node | null
    defaultSerialize(node: Node): Node | null
    serializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    defaultSerializeProperty(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    defaultDeserialize(node: Node): Node | null
    deserializeProperty(propertyNode: Node): boolean
    defaultDeserializeProperty(propertyNode: Node): boolean
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    /* Fields of GXml-0.4.GXml.AttrClass */
    parentClass: BackedNodeClass
    static name: string
}
export class AttrPrivate {
    static name: string
}
export abstract class BackedNodeClass {
    /* Fields of GXml-0.4.GXml.BackedNodeClass */
    parentClass: NodeClass
    static name: string
}
export class BackedNodePrivate {
    static name: string
}
export abstract class CDATASectionClass {
    /* Fields of GXml-0.4.GXml.CDATASectionClass */
    parentClass: TextClass
    static name: string
}
export class CDATASectionPrivate {
    static name: string
}
export abstract class CharacterDataClass {
    /* Fields of GXml-0.4.GXml.CharacterDataClass */
    parentClass: BackedNodeClass
    static name: string
}
export class CharacterDataPrivate {
    static name: string
}
export abstract class CommentClass {
    /* Fields of GXml-0.4.GXml.CommentClass */
    parentClass: CharacterDataClass
    static name: string
}
export class CommentPrivate {
    static name: string
}
export abstract class DocumentClass {
    /* Fields of GXml-0.4.GXml.DocumentClass */
    parentClass: NodeClass
    static name: string
}
export class DocumentPrivate {
    static name: string
}
export abstract class DocumentFragmentClass {
    /* Fields of GXml-0.4.GXml.DocumentFragmentClass */
    parentClass: BackedNodeClass
    static name: string
}
export class DocumentFragmentPrivate {
    static name: string
}
export abstract class DocumentTypeClass {
    /* Fields of GXml-0.4.GXml.DocumentTypeClass */
    parentClass: NodeClass
    static name: string
}
export class DocumentTypePrivate {
    static name: string
}
export abstract class NodeClass {
    /* Fields of GXml-0.4.GXml.NodeClass */
    parentClass: GObject.ObjectClass
    addNamespaceAttr: (self: Node, uri: string, prefix: string) => NamespaceAttr | null
    insertBefore: (self: Node, newChild: Node, refChild?: Node | null) => Node | null
    replaceChild: (self: Node, newChild: Node, oldChild: Node) => Node | null
    removeChild: (self: Node, oldChild: Node) => Node | null
    appendChild: (self: Node, newChild: Node) => Node | null
    hasChildNodes: (self: Node) => boolean
    cloneNode: (self: Node, deep: boolean) => Node | null
    copy: (self: Node, node: Node, deep: boolean) => { returnType: boolean, node: Node }
    toString: (self: Node, format: boolean, level: number) => string
    static name: string
}
export class NodePrivate {
    static name: string
}
export abstract class ElementClass {
    /* Fields of GXml-0.4.GXml.ElementClass */
    parentClass: BackedNodeClass
    static name: string
}
export class ElementPrivate {
    static name: string
}
export abstract class EntityClass {
    /* Fields of GXml-0.4.GXml.EntityClass */
    parentClass: NodeClass
    static name: string
}
export class EntityPrivate {
    static name: string
}
export abstract class EntityReferenceClass {
    /* Fields of GXml-0.4.GXml.EntityReferenceClass */
    parentClass: NodeClass
    static name: string
}
export class EntityReferencePrivate {
    static name: string
}
export abstract class ImplementationClass {
    /* Fields of GXml-0.4.GXml.ImplementationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ImplementationPrivate {
    static name: string
}
export abstract class NamedAttrMapClass {
    /* Fields of GXml-0.4.GXml.NamedAttrMapClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class NamedAttrMapPrivate {
    static name: string
}
export abstract class NamespaceAttrClass {
    /* Fields of GXml-0.4.GXml.NamespaceAttrClass */
    parentClass: NodeClass
    static name: string
}
export class NamespaceAttrPrivate {
    static name: string
}
export abstract class NotationClass {
    /* Fields of GXml-0.4.GXml.NotationClass */
    parentClass: NodeClass
    static name: string
}
export class NotationPrivate {
    static name: string
}
export abstract class ProcessingInstructionClass {
    /* Fields of GXml-0.4.GXml.ProcessingInstructionClass */
    parentClass: NodeClass
    static name: string
}
export class ProcessingInstructionPrivate {
    static name: string
}
export abstract class TextClass {
    /* Fields of GXml-0.4.GXml.TextClass */
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
    /* Fields of GXml-0.4.GXml.SerializableObjectModelClass */
    parentClass: GObject.ObjectClass
    getEnableUnknownSerializableProperty: (self: SerializableObjectModel) => boolean
    serializeUseXmlNodeValue: (self: SerializableObjectModel) => boolean
    propertyUseNick: (self: SerializableObjectModel) => boolean
    nodeName: (self: SerializableObjectModel) => string
    findPropertySpec: (self: SerializableObjectModel, propertyName: string) => GObject.ParamSpec | null
    initProperties: (self: SerializableObjectModel) => void
    listSerializableProperties: (self: SerializableObjectModel) => GObject.ParamSpec[]
    getPropertyValue: (self: SerializableObjectModel, spec: GObject.ParamSpec, val: any) => { val: any }
    setPropertyValue: (self: SerializableObjectModel, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableObjectModel, str: string, dest: any) => { returnType: boolean, dest: any }
    transformToString: (self: SerializableObjectModel, val: any, str: string) => { returnType: boolean, str: string }
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
    /* Fields of GXml-0.4.GXml.SerializableJsonClass */
    parentClass: GObject.ObjectClass
    getEnableUnknownSerializableProperty: (self: SerializableJson) => boolean
    serializeUseXmlNodeValue: (self: SerializableJson) => boolean
    nodeName: (self: SerializableJson) => string
    propertyUseNick: (self: SerializableJson) => boolean
    findPropertySpec: (self: SerializableJson, propertyName: string) => GObject.ParamSpec | null
    initProperties: (self: SerializableJson) => void
    listSerializableProperties: (self: SerializableJson) => GObject.ParamSpec[]
    getPropertyValue: (self: SerializableJson, spec: GObject.ParamSpec, val: any) => { val: any }
    setPropertyValue: (self: SerializableJson, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableJson, str: string, dest: any) => { returnType: boolean, dest: any }
    transformToString: (self: SerializableJson, val: any, str: string) => { returnType: boolean, str: string }
    serializeProperty: (self: SerializableJson, element: Element, prop: GObject.ParamSpec) => Node | null
    deserializeProperty: (self: SerializableJson, propertyNode: Node) => boolean
    static name: string
}
export class SerializableJsonPrivate {
    static name: string
}
export abstract class SerializationClass {
    /* Fields of GXml-0.4.GXml.SerializationClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class SerializationPrivate {
    static name: string
}
export abstract class SerializableTreeMapClass {
    /* Fields of GXml-0.4.GXml.SerializableTreeMapClass */
    parentClass: Gee.TreeMapClass
    serializeUseXmlNodeValue: (self: SerializableTreeMap) => boolean
    propertyUseNick: (self: SerializableTreeMap) => boolean
    nodeName: (self: SerializableTreeMap) => string
    findPropertySpec: (self: SerializableTreeMap, propertyName: string) => GObject.ParamSpec | null
    initProperties: (self: SerializableTreeMap) => void
    listSerializableProperties: (self: SerializableTreeMap) => GObject.ParamSpec[]
    getPropertyValue: (self: SerializableTreeMap, spec: GObject.ParamSpec, val: any) => { val: any }
    setPropertyValue: (self: SerializableTreeMap, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableTreeMap, str: string, dest: any) => { returnType: boolean, dest: any }
    transformToString: (self: SerializableTreeMap, val: any, str: string) => { returnType: boolean, str: string }
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
    /* Fields of GXml-0.4.GXml.SerializableHashMapClass */
    parentClass: Gee.HashMapClass
    getEnableUnknownSerializableProperty: (self: SerializableHashMap) => boolean
    serializeUseXmlNodeValue: (self: SerializableHashMap) => boolean
    propertyUseNick: (self: SerializableHashMap) => boolean
    nodeName: (self: SerializableHashMap) => string
    findPropertySpec: (self: SerializableHashMap, propertyName: string) => GObject.ParamSpec | null
    initProperties: (self: SerializableHashMap) => void
    listSerializableProperties: (self: SerializableHashMap) => GObject.ParamSpec[]
    getPropertyValue: (self: SerializableHashMap, spec: GObject.ParamSpec, val: any) => { val: any }
    setPropertyValue: (self: SerializableHashMap, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableHashMap, str: string, dest: any) => { returnType: boolean, dest: any }
    transformToString: (self: SerializableHashMap, val: any, str: string) => { returnType: boolean, str: string }
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
    /* Fields of GXml-0.4.GXml.SerializableDualKeyMapClass */
    parentClass: GObject.ObjectClass
    getEnableUnknownSerializableProperty: (self: SerializableDualKeyMap) => boolean
    serializeUseXmlNodeValue: (self: SerializableDualKeyMap) => boolean
    propertyUseNick: (self: SerializableDualKeyMap) => boolean
    nodeName: (self: SerializableDualKeyMap) => string
    findPropertySpec: (self: SerializableDualKeyMap, propertyName: string) => GObject.ParamSpec | null
    initProperties: (self: SerializableDualKeyMap) => void
    listSerializableProperties: (self: SerializableDualKeyMap) => GObject.ParamSpec[]
    getPropertyValue: (self: SerializableDualKeyMap, spec: GObject.ParamSpec, val: any) => { val: any }
    setPropertyValue: (self: SerializableDualKeyMap, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableDualKeyMap, str: string, dest: any) => { returnType: boolean, dest: any }
    transformToString: (self: SerializableDualKeyMap, val: any, str: string) => { returnType: boolean, str: string }
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
    /* Fields of GXml-0.4.GXml.SerializableArrayListClass */
    parentClass: Gee.ArrayListClass
    serializeUseXmlNodeValue: (self: SerializableArrayList) => boolean
    propertyUseNick: (self: SerializableArrayList) => boolean
    nodeName: (self: SerializableArrayList) => string
    findPropertySpec: (self: SerializableArrayList, propertyName: string) => GObject.ParamSpec | null
    initProperties: (self: SerializableArrayList) => void
    listSerializableProperties: (self: SerializableArrayList) => GObject.ParamSpec[]
    getPropertyValue: (self: SerializableArrayList, spec: GObject.ParamSpec, val: any) => { val: any }
    setPropertyValue: (self: SerializableArrayList, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: SerializableArrayList, str: string, dest: any) => { returnType: boolean, dest: any }
    transformToString: (self: SerializableArrayList, val: any, str: string) => { returnType: boolean, str: string }
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
    /* Fields of GXml-0.4.GXml.SerializableContainerClass */
    parentClass: SerializableObjectModelClass
    initContainers: (self: SerializableContainer) => void
    static name: string
}
export class SerializableContainerPrivate {
    static name: string
}
export abstract class NamedNodeMapIface {
    /* Fields of GXml-0.4.GXml.NamedNodeMapIface */
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
    /* Fields of GXml-0.4.GXml.NodeListIface */
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
    /* Fields of GXml-0.4.GXml.SerializableIface */
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
    getPropertyValue: (self: Serializable, spec: GObject.ParamSpec, val: any) => { val: any }
    defaultGetPropertyValue: (self: Serializable, spec: GObject.ParamSpec, val: any) => { val: any }
    setPropertyValue: (self: Serializable, spec: GObject.ParamSpec, val: any) => void
    defaultSetPropertyValue: (self: Serializable, spec: GObject.ParamSpec, val: any) => void
    transformFromString: (self: Serializable, str: string, dest: any) => { returnType: boolean, dest: any }
    transformToString: (self: Serializable, val: any, str: string) => { returnType: boolean, str: string }
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
    /* Fields of GXml-0.4.GXml.SerializableMapKeyIface */
    parentIface: GObject.TypeInterface
    getMapKey: (self: SerializableMapKey) => object | null
    static name: string
}
export abstract class SerializableMapDualKeyIface {
    /* Fields of GXml-0.4.GXml.SerializableMapDualKeyIface */
    parentIface: GObject.TypeInterface
    getMapPrimaryKey: (self: SerializableMapDualKey) => object | null
    getMapSecondaryKey: (self: SerializableMapDualKey) => object | null
    static name: string
}
export abstract class SerializableCollectionIface {
    /* Fields of GXml-0.4.GXml.SerializableCollectionIface */
    parentIface: GObject.TypeInterface
    isCollection: (self: SerializableCollection) => boolean
    static name: string
}
}