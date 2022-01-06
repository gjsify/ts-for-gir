/**
 * Json-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace Json {

enum NodeType {
    OBJECT,
    ARRAY,
    VALUE,
    NULL,
}
enum ParserError {
    PARSE,
    TRAILING_COMMA,
    MISSING_COMMA,
    MISSING_COLON,
    INVALID_BAREWORD,
    EMPTY_MEMBER_NAME,
    INVALID_DATA,
    UNKNOWN,
}
enum PathError {
    QUERY,
}
enum ReaderError {
    NO_ARRAY,
    INVALID_INDEX,
    NO_OBJECT,
    INVALID_MEMBER,
    INVALID_NODE,
    NO_VALUE,
    INVALID_TYPE,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const VERSION_S: string
function boxedCanDeserialize(gboxedType: GObject.Type, nodeType: NodeType): boolean
function boxedCanSerialize(gboxedType: GObject.Type): { returnType: boolean, nodeType: NodeType | null }
function boxedDeserialize(gboxedType: GObject.Type, node: Node): object | null
function boxedSerialize(gboxedType: GObject.Type, boxed?: object | null): Node | null
function constructGobject(gtype: GObject.Type, data: string, length: number): GObject.Object | null
function fromString(str: string): Node | null
function gobjectDeserialize(gtype: GObject.Type, node: Node): GObject.Object
function gobjectFromData(gtype: GObject.Type, data: string, length: number): GObject.Object | null
function gobjectSerialize(gobject: GObject.Object): Node
function gobjectToData(gobject: GObject.Object): { returnType: string, length: number | null }
function gvariantDeserialize(jsonNode: Node, signature?: string | null): GLib.Variant | null
function gvariantDeserializeData(json: string, length: number, signature?: string | null): GLib.Variant | null
function gvariantSerialize(variant: GLib.Variant): Node
function gvariantSerializeData(variant: GLib.Variant): { returnType: string, length: number | null }
function parserErrorQuark(): GLib.Quark
function pathErrorQuark(): GLib.Quark
function readerErrorQuark(): GLib.Quark
function serializeGobject(gobject: GObject.Object): { returnType: string, length: number | null }
function stringCompare(a: string, b: string): number
function stringEqual(a: string, b: string): boolean
function stringHash(key: string): number
function toString(node: Node, pretty: boolean): string
interface ArrayForeach {
    (array: Array, index: number, elementNode: Node): void
}
interface BoxedDeserializeFunc {
    (node: Node): object | null
}
interface BoxedSerializeFunc {
    (boxed?: object | null): Node
}
interface ObjectForeach {
    (object: Object, memberName: string, memberNode: Node): void
}
class Serializable {
    /* Methods of Json-1.0.Json.Serializable */
    defaultDeserializeProperty(propertyName: string, value: any, pspec: GObject.ParamSpec, propertyNode: Node): boolean
    defaultSerializeProperty(propertyName: string, value: any, pspec: GObject.ParamSpec): Node | null
    deserializeProperty(propertyName: string, pspec: GObject.ParamSpec, propertyNode: Node): { returnType: boolean, value: any }
    findProperty(name: string): GObject.ParamSpec | null
    getProperty(pspec: GObject.ParamSpec): { value: any }
    listProperties(): GObject.ParamSpec[]
    serializeProperty(propertyName: string, value: any, pspec: GObject.ParamSpec): Node
    setProperty(pspec: GObject.ParamSpec, value: any): void
    static name: string
}
export interface Builder_ConstructProps extends GObject.Object_ConstructProps {
    immutable?: boolean
}
class Builder {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Json-1.0.Json.Builder */
    addBooleanValue(value: boolean): Builder | null
    addDoubleValue(value: number): Builder | null
    addIntValue(value: number): Builder | null
    addNullValue(): Builder | null
    addStringValue(value: string): Builder | null
    addValue(node: Node): Builder | null
    beginArray(): Builder | null
    beginObject(): Builder | null
    endArray(): Builder | null
    endObject(): Builder | null
    getRoot(): Node | null
    reset(): void
    setMemberName(memberName: string): Builder | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Builder, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Builder_ConstructProps)
    _init (config?: Builder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Builder
    static newImmutable(): Builder
    static $gtype: GObject.Type
}
export interface Generator_ConstructProps extends GObject.Object_ConstructProps {
    indent?: number
    indentChar?: number
    pretty?: boolean
    root?: Node
}
class Generator {
    /* Properties of Json-1.0.Json.Generator */
    indent: number
    indentChar: number
    pretty: boolean
    root: Node
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Json-1.0.Json.Generator */
    getIndent(): number
    getIndentChar(): number
    getPretty(): boolean
    getRoot(): Node | null
    setIndent(indentLevel: number): void
    setIndentChar(indentChar: number): void
    setPretty(isPretty: boolean): void
    setRoot(node: Node): void
    toData(): { returnType: string, length: number | null }
    toFile(filename: string): boolean
    toGstring(string: GLib.String): GLib.String
    toStream(stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::indent", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent-char", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-char", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent-char", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent-char", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent-char", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pretty", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pretty", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pretty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pretty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pretty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Generator_ConstructProps)
    _init (config?: Generator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Generator
    static $gtype: GObject.Type
}
export interface Parser_ConstructProps extends GObject.Object_ConstructProps {
    immutable?: boolean
}
class Parser {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Json-1.0.Json.Parser */
    getCurrentLine(): number
    getCurrentPos(): number
    getRoot(): Node | null
    hasAssignment(): { returnType: boolean, variableName: string | null }
    loadFromData(data: string, length: number): boolean
    loadFromFile(filename: string): boolean
    loadFromMappedFile(filename: string): boolean
    loadFromStream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    loadFromStreamAsync(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFromStreamFinish(result: Gio.AsyncResult): boolean
    stealRoot(): Node | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Json-1.0.Json.Parser */
    connect(sigName: "array-element", callback: (($obj: Parser, array: Array, index: number) => void)): number
    on(sigName: "array-element", callback: (array: Array, index: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "array-element", callback: (array: Array, index: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "array-element", callback: (array: Array, index: number) => void): NodeJS.EventEmitter
    emit(sigName: "array-element", array: Array, index: number): void
    connect(sigName: "array-end", callback: (($obj: Parser, array: Array) => void)): number
    on(sigName: "array-end", callback: (array: Array) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "array-end", callback: (array: Array) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "array-end", callback: (array: Array) => void): NodeJS.EventEmitter
    emit(sigName: "array-end", array: Array): void
    connect(sigName: "array-start", callback: (($obj: Parser) => void)): number
    on(sigName: "array-start", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "array-start", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "array-start", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "array-start"): void
    connect(sigName: "error", callback: (($obj: Parser, error?: object | null) => void)): number
    on(sigName: "error", callback: (error?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (error?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (error?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "error", error?: object | null): void
    connect(sigName: "object-end", callback: (($obj: Parser, object: Object) => void)): number
    on(sigName: "object-end", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-end", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-end", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "object-end", object: Object): void
    connect(sigName: "object-member", callback: (($obj: Parser, object: Object, memberName: string) => void)): number
    on(sigName: "object-member", callback: (object: Object, memberName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-member", callback: (object: Object, memberName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-member", callback: (object: Object, memberName: string) => void): NodeJS.EventEmitter
    emit(sigName: "object-member", object: Object, memberName: string): void
    connect(sigName: "object-start", callback: (($obj: Parser) => void)): number
    on(sigName: "object-start", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-start", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-start", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "object-start"): void
    connect(sigName: "parse-end", callback: (($obj: Parser) => void)): number
    on(sigName: "parse-end", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parse-end", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parse-end", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "parse-end"): void
    connect(sigName: "parse-start", callback: (($obj: Parser) => void)): number
    on(sigName: "parse-start", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parse-start", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parse-start", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "parse-start"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Parser_ConstructProps)
    _init (config?: Parser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Parser
    static newImmutable(): Parser
    static $gtype: GObject.Type
}
export interface Path_ConstructProps extends GObject.Object_ConstructProps {
}
class Path {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Json-1.0.Json.Path */
    compile(expression: string): boolean
    match(root: Node): Node
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Path, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Path_ConstructProps)
    _init (config?: Path_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Path
    static query(expression: string, root: Node): Node
    static $gtype: GObject.Type
}
export interface Reader_ConstructProps extends GObject.Object_ConstructProps {
    root?: Node
}
class Reader {
    /* Properties of Json-1.0.Json.Reader */
    root: Node
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Json-1.0.Json.Reader */
    countElements(): number
    countMembers(): number
    endElement(): void
    endMember(): void
    getBooleanValue(): boolean
    getDoubleValue(): number
    getError(): GLib.Error | null
    getIntValue(): number
    getMemberName(): string | null
    getNullValue(): boolean
    getStringValue(): string
    getValue(): Node | null
    isArray(): boolean
    isObject(): boolean
    isValue(): boolean
    listMembers(): string[]
    readElement(index: number): boolean
    readMember(memberName: string): boolean
    setRoot(root?: Node | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Reader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::root", callback: (($obj: Reader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Reader, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Reader_ConstructProps)
    _init (config?: Reader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node?: Node | null): Reader
    static $gtype: GObject.Type
}
class Array {
    /* Methods of Json-1.0.Json.Array */
    addArrayElement(value?: Array | null): void
    addBooleanElement(value: boolean): void
    addDoubleElement(value: number): void
    addElement(node: Node): void
    addIntElement(value: number): void
    addNullElement(): void
    addObjectElement(value?: Object | null): void
    addStringElement(value: string): void
    dupElement(index: number): Node
    equal(b: Array): boolean
    foreachElement(func: ArrayForeach): void
    getArrayElement(index: number): Array
    getBooleanElement(index: number): boolean
    getDoubleElement(index: number): number
    getElement(index: number): Node
    getElements(): Node[] | null
    getIntElement(index: number): number
    getLength(): number
    getNullElement(index: number): boolean
    getObjectElement(index: number): Object
    getStringElement(index: number): string
    hash(): number
    isImmutable(): boolean
    ref(): Array
    removeElement(index: number): void
    seal(): void
    unref(): void
    static name: string
    static new(): Array
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Array
    static sizedNew(nElements: number): Array
}
abstract class BuilderClass {
    static name: string
}
class BuilderPrivate {
    static name: string
}
abstract class GeneratorClass {
    static name: string
}
class GeneratorPrivate {
    static name: string
}
class Node {
    /* Methods of Json-1.0.Json.Node */
    copy(): Node
    dupArray(): Array | null
    dupObject(): Object | null
    dupString(): string | null
    equal(b: Node): boolean
    free(): void
    getArray(): Array | null
    getBoolean(): boolean
    getDouble(): number
    getInt(): number
    getNodeType(): NodeType
    getObject(): Object | null
    getParent(): Node | null
    getString(): string | null
    getValue(): { value: any }
    getValueType(): GObject.Type
    hash(): number
    init(type: NodeType): Node
    initArray(array?: Array | null): Node
    initBoolean(value: boolean): Node
    initDouble(value: number): Node
    initInt(value: number): Node
    initNull(): Node
    initObject(object?: Object | null): Node
    initString(value?: string | null): Node
    isImmutable(): boolean
    isNull(): boolean
    ref(): Node
    seal(): void
    setArray(array: Array): void
    setBoolean(value: boolean): void
    setDouble(value: number): void
    setInt(value: number): void
    setObject(object?: Object | null): void
    setParent(parent?: Node | null): void
    setString(value: string): void
    setValue(value: any): void
    takeArray(array: Array): void
    takeObject(object: Object): void
    typeName(): string
    unref(): void
    static name: string
    static new(type: NodeType): Node
    constructor(type: NodeType)
    /* Static methods and pseudo-constructors */
    static alloc(): Node
    static new(type: NodeType): Node
}
class Object {
    /* Methods of Json-1.0.Json.Object */
    addMember(memberName: string, node: Node): void
    dupMember(memberName: string): Node | null
    equal(b: Object): boolean
    foreachMember(func: ObjectForeach): void
    getArrayMember(memberName: string): Array | null
    getBooleanMember(memberName: string): boolean
    getBooleanMemberWithDefault(memberName: string, defaultValue: boolean): boolean
    getDoubleMember(memberName: string): number
    getDoubleMemberWithDefault(memberName: string, defaultValue: number): number
    getIntMember(memberName: string): number
    getIntMemberWithDefault(memberName: string, defaultValue: number): number
    getMember(memberName: string): Node | null
    getMembers(): string[] | null
    getNullMember(memberName: string): boolean
    getObjectMember(memberName: string): Object | null
    getSize(): number
    getStringMember(memberName: string): string
    getStringMemberWithDefault(memberName: string, defaultValue: string): string
    getValues(): Node[] | null
    hasMember(memberName: string): boolean
    hash(): number
    isImmutable(): boolean
    ref(): Object
    removeMember(memberName: string): void
    seal(): void
    setArrayMember(memberName: string, value: Array): void
    setBooleanMember(memberName: string, value: boolean): void
    setDoubleMember(memberName: string, value: number): void
    setIntMember(memberName: string, value: number): void
    setMember(memberName: string, node: Node): void
    setNullMember(memberName: string): void
    setObjectMember(memberName: string, value: Object): void
    setStringMember(memberName: string, value: string): void
    unref(): void
    static name: string
    static new(): Object
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Object
}
class ObjectIter {
    /* Methods of Json-1.0.Json.ObjectIter */
    init(object: Object): void
    initOrdered(object: Object): void
    next(): { returnType: boolean, memberName: string | null, memberNode: Node | null }
    nextOrdered(): { returnType: boolean, memberName: string | null, memberNode: Node | null }
    static name: string
}
abstract class ParserClass {
    /* Fields of Json-1.0.Json.ParserClass */
    parseStart: (parser: Parser) => void
    objectStart: (parser: Parser) => void
    objectMember: (parser: Parser, object: Object, memberName: string) => void
    objectEnd: (parser: Parser, object: Object) => void
    arrayStart: (parser: Parser) => void
    arrayElement: (parser: Parser, array: Array, index: number) => void
    arrayEnd: (parser: Parser, array: Array) => void
    parseEnd: (parser: Parser) => void
    error: (parser: Parser, error: GLib.Error) => void
    static name: string
}
class ParserPrivate {
    static name: string
}
abstract class PathClass {
    static name: string
}
abstract class ReaderClass {
    static name: string
}
class ReaderPrivate {
    static name: string
}
abstract class SerializableIface {
    /* Fields of Json-1.0.Json.SerializableIface */
    serializeProperty: (serializable: Serializable, propertyName: string, value: any, pspec: GObject.ParamSpec) => Node
    deserializeProperty: (serializable: Serializable, propertyName: string, pspec: GObject.ParamSpec, propertyNode: Node) => { returnType: boolean, value: any }
    findProperty: (serializable: Serializable, name: string) => GObject.ParamSpec | null
    setProperty: (serializable: Serializable, pspec: GObject.ParamSpec, value: any) => void
    getProperty: (serializable: Serializable, pspec: GObject.ParamSpec) => { value: any }
    static name: string
}
}
export default Json