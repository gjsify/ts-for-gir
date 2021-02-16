/**
 * GXml-0.4
 */

import type * as Gjs from './Gjs';
import type * as Gee from './Gee-0.8';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

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
    /* Properties of GXml.NamedNodeMap */
    length: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.NamedNodeMap */
    get_named_item(name: string): object | null
    set_named_item(item?: object | null): object | null
    remove_named_item(name: string): object | null
    item(index: number): object | null
    get_length(): number
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
    /* Virtual methods of GXml.NamedNodeMap */
    vfunc_get_named_item(name: string): object | null
    vfunc_set_named_item(item?: object | null): object | null
    vfunc_remove_named_item(name: string): object | null
    vfunc_item(index: number): object | null
    vfunc_get_length(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
export interface NodeList_ConstructProps extends GObject.Object_ConstructProps {
    length?: number
}
export class NodeList {
    /* Properties of GXml.NodeList */
    length: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.NodeList */
    item(idx: number): Node
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    to_string(in_line: boolean): string
    first(): Node
    last(): Node
    get(n: number): Node
    get_length(): number
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
    /* Virtual methods of GXml.NodeList */
    vfunc_item(idx: number): Node
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_to_string(in_line: boolean): string
    vfunc_first(): Node
    vfunc_last(): Node
    vfunc_get(n: number): Node
    vfunc_get_length(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::length", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: NodeList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NodeList_ConstructProps)
    _init (config?: NodeList_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Serializable_ConstructProps extends GObject.Object_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignored_serializable_properties?: GLib.HashTable
    unknown_serializable_property?: GLib.HashTable
    serialized_xml_node_value?: string
}
export class Serializable {
    /* Properties of GXml.Serializable */
    properties: GObject.ParamSpec[]
    ignored_serializable_properties: GLib.HashTable
    unknown_serializable_property: GLib.HashTable
    serialized_xml_node_value: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.Serializable */
    get_enable_unknown_serializable_property(): boolean
    serialize_use_xml_node_value(): boolean
    node_name(): string
    property_use_nick(): boolean
    serialize(node: Node): Node | null
    serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    deserialize_property(property_node: Node): boolean
    find_property_spec(property_name: string): GObject.ParamSpec | null
    default_find_property_spec(property_name: string): GObject.ParamSpec | null
    init_properties(): void
    default_init_properties(): void
    list_serializable_properties(): GObject.ParamSpec[]
    default_list_serializable_properties(): GObject.ParamSpec[]
    get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    default_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    set_property_value(spec: GObject.ParamSpec, val: any): void
    default_set_property_value(spec: GObject.ParamSpec, val: any): void
    transform_from_string(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    transform_to_string(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    get_properties(): GObject.ParamSpec[]
    set_properties(value: GObject.ParamSpec[]): void
    get_ignored_serializable_properties(): GLib.HashTable
    set_ignored_serializable_properties(value: GLib.HashTable): void
    get_unknown_serializable_property(): GLib.HashTable
    set_unknown_serializable_property(value: GLib.HashTable): void
    get_serialized_xml_node_value(): string | null
    set_serialized_xml_node_value(value?: string | null): void
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
    /* Virtual methods of GXml.Serializable */
    vfunc_get_enable_unknown_serializable_property(): boolean
    vfunc_serialize_use_xml_node_value(): boolean
    vfunc_node_name(): string
    vfunc_property_use_nick(): boolean
    vfunc_serialize(node: Node): Node | null
    vfunc_serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    vfunc_deserialize(node: Node): Node | null
    vfunc_deserialize_property(property_node: Node): boolean
    vfunc_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_default_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_init_properties(): void
    vfunc_default_init_properties(): void
    vfunc_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_default_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    vfunc_default_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    vfunc_set_property_value(spec: GObject.ParamSpec, val: any): void
    vfunc_default_set_property_value(spec: GObject.ParamSpec, val: any): void
    vfunc_transform_from_string(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    vfunc_transform_to_string(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    vfunc_get_properties(): GObject.ParamSpec[]
    vfunc_set_properties(value: GObject.ParamSpec[]): void
    vfunc_get_ignored_serializable_properties(): GLib.HashTable
    vfunc_set_ignored_serializable_properties(value: GLib.HashTable): void
    vfunc_get_unknown_serializable_property(): GLib.HashTable
    vfunc_set_unknown_serializable_property(value: GLib.HashTable): void
    vfunc_get_serialized_xml_node_value(): string | null
    vfunc_set_serialized_xml_node_value(value?: string | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GXml.Serializable */
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
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::properties", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unknown-serializable-property", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-property", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
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
export interface SerializableMapKey_ConstructProps extends GObject.Object_ConstructProps {
}
export class SerializableMapKey {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.SerializableMapKey */
    get_map_key(): object | null
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
    /* Virtual methods of GXml.SerializableMapKey */
    vfunc_get_map_key(): object | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.SerializableMapDualKey */
    get_map_primary_key(): object | null
    get_map_secondary_key(): object | null
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
    /* Virtual methods of GXml.SerializableMapDualKey */
    vfunc_get_map_primary_key(): object | null
    vfunc_get_map_secondary_key(): object | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.SerializableCollection */
    is_collection(): boolean
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
    /* Virtual methods of GXml.SerializableCollection */
    vfunc_is_collection(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
export interface Attr_ConstructProps extends BackedNode_ConstructProps {
    name?: string
    specified?: boolean
    value?: string
}
export class Attr {
    /* Properties of GXml.Attr */
    name: string
    specified: boolean
    value: string
    /* Properties of GXml.Node */
    namespace_definitions: NodeList
    namespace_uri: string
    prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: Node
    child_nodes: NodeList
    first_child: Node
    last_child: Node
    previous_sibling: Node
    next_sibling: Node
    attributes: NamedAttrMap
    owner_document: Document
    /* Fields of GXml.Attr */
    parent_instance: BackedNode
    priv: AttrPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.Attr */
    get_name(): string
    get_specified(): boolean
    get_value(): string
    set_value(value: string): void
    /* Methods of GXml.Node */
    add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): Node | null
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    to_string(format: boolean, level: number): string
    get_namespace_definitions(): NodeList | null
    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): Node | null
    get_child_nodes(): NodeList | null
    get_first_child(): Node | null
    get_last_child(): Node | null
    get_previous_sibling(): Node | null
    get_next_sibling(): Node | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): Document
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
    /* Virtual methods of GXml.Node */
    vfunc_add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): Node | null
    vfunc_copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfunc_to_string(format: boolean, level: number): string
    vfunc_get_namespace_definitions(): NodeList | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): Node | null
    vfunc_get_child_nodes(): NodeList | null
    vfunc_get_first_child(): Node | null
    vfunc_get_last_child(): Node | null
    vfunc_get_previous_sibling(): Node | null
    vfunc_get_next_sibling(): Node | null
    vfunc_get_attributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::specified", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::specified", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Attr, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Attr_ConstructProps)
    _init (config?: Attr_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BackedNode_ConstructProps extends Node_ConstructProps {
}
export class BackedNode {
    /* Properties of GXml.Node */
    namespace_definitions: NodeList
    namespace_uri: string
    prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: Node
    child_nodes: NodeList
    first_child: Node
    last_child: Node
    previous_sibling: Node
    next_sibling: Node
    attributes: NamedAttrMap
    owner_document: Document
    /* Fields of GXml.BackedNode */
    parent_instance: Node
    priv: BackedNodePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.Node */
    add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): Node | null
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    to_string(format: boolean, level: number): string
    get_namespace_definitions(): NodeList | null
    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): Node | null
    get_child_nodes(): NodeList | null
    get_first_child(): Node | null
    get_last_child(): Node | null
    get_previous_sibling(): Node | null
    get_next_sibling(): Node | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): Document
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
    /* Virtual methods of GXml.Node */
    vfunc_add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): Node | null
    vfunc_copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfunc_to_string(format: boolean, level: number): string
    vfunc_get_namespace_definitions(): NodeList | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): Node | null
    vfunc_get_child_nodes(): NodeList | null
    vfunc_get_first_child(): Node | null
    vfunc_get_last_child(): Node | null
    vfunc_get_previous_sibling(): Node | null
    vfunc_get_next_sibling(): Node | null
    vfunc_get_attributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::namespace-definitions", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: BackedNode, pspec: GObject.ParamSpec) => void)): number
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BackedNode_ConstructProps)
    _init (config?: BackedNode_ConstructProps): void
    static $gtype: GObject.Type
}
export interface CDATASection_ConstructProps extends Text_ConstructProps {
}
export class CDATASection {
    /* Properties of GXml.CharacterData */
    data: string
    length: number
    /* Properties of GXml.Node */
    namespace_definitions: NodeList
    namespace_uri: string
    prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: Node
    child_nodes: NodeList
    first_child: Node
    last_child: Node
    previous_sibling: Node
    next_sibling: Node
    attributes: NamedAttrMap
    owner_document: Document
    /* Fields of GXml.CDATASection */
    parent_instance: Text
    priv: CDATASectionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.Text */
    split_text(offset: number): Text
    /* Methods of GXml.CharacterData */
    substring_data(offset: number, count: number): string
    append_data(new_segment: string): void
    insert_data(offset: number, new_segment: string): void
    delete_data(offset: number, count: number): void
    replace_data(offset: number, count: number, new_segment: string): void
    get_data(): string
    set_data(value: string): void
    get_length(): number
    /* Methods of GXml.Node */
    add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): Node | null
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    to_string(format: boolean, level: number): string
    get_namespace_definitions(): NodeList | null
    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): Node | null
    get_child_nodes(): NodeList | null
    get_first_child(): Node | null
    get_last_child(): Node | null
    get_previous_sibling(): Node | null
    get_next_sibling(): Node | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): Document
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
    /* Virtual methods of GXml.Node */
    vfunc_add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): Node | null
    vfunc_copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfunc_to_string(format: boolean, level: number): string
    vfunc_get_namespace_definitions(): NodeList | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): Node | null
    vfunc_get_child_nodes(): NodeList | null
    vfunc_get_first_child(): Node | null
    vfunc_get_last_child(): Node | null
    vfunc_get_previous_sibling(): Node | null
    vfunc_get_next_sibling(): Node | null
    vfunc_get_attributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: CDATASection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GXml.CharacterData */
    data: string
    length: number
    /* Properties of GXml.Node */
    namespace_definitions: NodeList
    namespace_uri: string
    prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: Node
    child_nodes: NodeList
    first_child: Node
    last_child: Node
    previous_sibling: Node
    next_sibling: Node
    attributes: NamedAttrMap
    owner_document: Document
    /* Fields of GXml.CharacterData */
    parent_instance: BackedNode
    priv: CharacterDataPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.CharacterData */
    substring_data(offset: number, count: number): string
    append_data(new_segment: string): void
    insert_data(offset: number, new_segment: string): void
    delete_data(offset: number, count: number): void
    replace_data(offset: number, count: number, new_segment: string): void
    get_data(): string
    set_data(value: string): void
    get_length(): number
    /* Methods of GXml.Node */
    add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): Node | null
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    to_string(format: boolean, level: number): string
    get_namespace_definitions(): NodeList | null
    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): Node | null
    get_child_nodes(): NodeList | null
    get_first_child(): Node | null
    get_last_child(): Node | null
    get_previous_sibling(): Node | null
    get_next_sibling(): Node | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): Document
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
    /* Virtual methods of GXml.Node */
    vfunc_add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): Node | null
    vfunc_copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfunc_to_string(format: boolean, level: number): string
    vfunc_get_namespace_definitions(): NodeList | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): Node | null
    vfunc_get_child_nodes(): NodeList | null
    vfunc_get_first_child(): Node | null
    vfunc_get_last_child(): Node | null
    vfunc_get_previous_sibling(): Node | null
    vfunc_get_next_sibling(): Node | null
    vfunc_get_attributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: CharacterData, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CharacterData_ConstructProps)
    _init (config?: CharacterData_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Comment_ConstructProps extends CharacterData_ConstructProps {
}
export class Comment {
    /* Properties of GXml.CharacterData */
    data: string
    length: number
    /* Properties of GXml.Node */
    namespace_definitions: NodeList
    namespace_uri: string
    prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: Node
    child_nodes: NodeList
    first_child: Node
    last_child: Node
    previous_sibling: Node
    next_sibling: Node
    attributes: NamedAttrMap
    owner_document: Document
    /* Fields of GXml.Comment */
    parent_instance: CharacterData
    priv: CommentPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.CharacterData */
    substring_data(offset: number, count: number): string
    append_data(new_segment: string): void
    insert_data(offset: number, new_segment: string): void
    delete_data(offset: number, count: number): void
    replace_data(offset: number, count: number, new_segment: string): void
    get_data(): string
    set_data(value: string): void
    get_length(): number
    /* Methods of GXml.Node */
    add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): Node | null
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    to_string(format: boolean, level: number): string
    get_namespace_definitions(): NodeList | null
    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): Node | null
    get_child_nodes(): NodeList | null
    get_first_child(): Node | null
    get_last_child(): Node | null
    get_previous_sibling(): Node | null
    get_next_sibling(): Node | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): Document
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
    /* Virtual methods of GXml.Node */
    vfunc_add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): Node | null
    vfunc_copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfunc_to_string(format: boolean, level: number): string
    vfunc_get_namespace_definitions(): NodeList | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): Node | null
    vfunc_get_child_nodes(): NodeList | null
    vfunc_get_first_child(): Node | null
    vfunc_get_last_child(): Node | null
    vfunc_get_previous_sibling(): Node | null
    vfunc_get_next_sibling(): Node | null
    vfunc_get_attributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Comment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Comment_ConstructProps)
    _init (config?: Comment_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Document_ConstructProps extends Node_ConstructProps {
    doctype?: DocumentType
    implementation?: Implementation
    document_element?: Element
}
export class Document {
    /* Properties of GXml.Document */
    doctype: DocumentType
    implementation: Implementation
    document_element: Element
    /* Properties of GXml.Node */
    namespace_definitions: NodeList
    namespace_uri: string
    prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: Node
    child_nodes: NodeList
    first_child: Node
    last_child: Node
    previous_sibling: Node
    next_sibling: Node
    attributes: NamedAttrMap
    owner_document: Document
    /* Fields of GXml.Document */
    parent_instance: Node
    priv: DocumentPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.Document */
    save_to_path(file_path: string): void
    save_to_stream(outstream: Gio.OutputStream, can?: Gio.Cancellable | null): void
    create_element(tag_name: string): Element
    create_document_fragment(): DocumentFragment
    create_text_node(text_data: string): Text
    create_comment(comment_data: string): Comment
    create_cdata_section(cdata_data: string): CDATASection
    create_processing_instruction(target: string, data: string): ProcessingInstruction
    create_attribute(name: string): Attr
    create_entity_reference(name: string): EntityReference
    get_elements_by_tag_name(tag_name: string): NodeList
    copy_node(foreign_node: Node, deep: boolean): Node
    get_doctype(): DocumentType | null
    get_implementation(): Implementation
    get_document_element(): Element
    /* Methods of GXml.Node */
    add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): Node | null
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    to_string(format: boolean, level: number): string
    get_namespace_definitions(): NodeList | null
    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): Node | null
    get_child_nodes(): NodeList | null
    get_first_child(): Node | null
    get_last_child(): Node | null
    get_previous_sibling(): Node | null
    get_next_sibling(): Node | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): Document
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
    /* Virtual methods of GXml.Node */
    vfunc_add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): Node | null
    vfunc_copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfunc_to_string(format: boolean, level: number): string
    vfunc_get_namespace_definitions(): NodeList | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): Node | null
    vfunc_get_child_nodes(): NodeList | null
    vfunc_get_first_child(): Node | null
    vfunc_get_last_child(): Node | null
    vfunc_get_previous_sibling(): Node | null
    vfunc_get_next_sibling(): Node | null
    vfunc_get_attributes(): NamedAttrMap | null
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
    connect(sigName: "notify::doctype", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doctype", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::implementation", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implementation", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::document-element", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::document-element", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Document_ConstructProps)
    _init (config?: Document_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static from_libxml2(doc: object | null, require_root: boolean): Document
    static from_path(file_path: string): Document
    static from_gfile(fin: Gio.File, can?: Gio.Cancellable | null): Document
    static from_stream(instream: Gio.InputStream, can?: Gio.Cancellable | null): Document
    static from_string(xml: string): Document
    static from_string_with_options(xml: string, url: string | null, encoding: string | null, options: number): Document
    static new(): Document
    static $gtype: GObject.Type
}
export interface DocumentFragment_ConstructProps extends BackedNode_ConstructProps {
}
export class DocumentFragment {
    /* Properties of GXml.Node */
    namespace_definitions: NodeList
    namespace_uri: string
    prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: Node
    child_nodes: NodeList
    first_child: Node
    last_child: Node
    previous_sibling: Node
    next_sibling: Node
    attributes: NamedAttrMap
    owner_document: Document
    /* Fields of GXml.DocumentFragment */
    parent_instance: BackedNode
    priv: DocumentFragmentPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.Node */
    add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): Node | null
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    to_string(format: boolean, level: number): string
    get_namespace_definitions(): NodeList | null
    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): Node | null
    get_child_nodes(): NodeList | null
    get_first_child(): Node | null
    get_last_child(): Node | null
    get_previous_sibling(): Node | null
    get_next_sibling(): Node | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): Document
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
    /* Virtual methods of GXml.Node */
    vfunc_add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): Node | null
    vfunc_copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfunc_to_string(format: boolean, level: number): string
    vfunc_get_namespace_definitions(): NodeList | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): Node | null
    vfunc_get_child_nodes(): NodeList | null
    vfunc_get_first_child(): Node | null
    vfunc_get_last_child(): Node | null
    vfunc_get_previous_sibling(): Node | null
    vfunc_get_next_sibling(): Node | null
    vfunc_get_attributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::namespace-definitions", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: DocumentFragment, pspec: GObject.ParamSpec) => void)): number
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GXml.DocumentType */
    name: string
    entities: GLib.HashTable
    notations: GLib.HashTable
    /* Properties of GXml.Node */
    namespace_definitions: NodeList
    namespace_uri: string
    prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: Node
    child_nodes: NodeList
    first_child: Node
    last_child: Node
    previous_sibling: Node
    next_sibling: Node
    attributes: NamedAttrMap
    owner_document: Document
    /* Fields of GXml.DocumentType */
    parent_instance: Node
    priv: DocumentTypePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.DocumentType */
    get_name(): string
    get_entities(): GLib.HashTable | null
    get_notations(): GLib.HashTable | null
    /* Methods of GXml.Node */
    add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): Node | null
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    to_string(format: boolean, level: number): string
    get_namespace_definitions(): NodeList | null
    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): Node | null
    get_child_nodes(): NodeList | null
    get_first_child(): Node | null
    get_last_child(): Node | null
    get_previous_sibling(): Node | null
    get_next_sibling(): Node | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): Document
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
    /* Virtual methods of GXml.Node */
    vfunc_add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): Node | null
    vfunc_copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfunc_to_string(format: boolean, level: number): string
    vfunc_get_namespace_definitions(): NodeList | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): Node | null
    vfunc_get_child_nodes(): NodeList | null
    vfunc_get_first_child(): Node | null
    vfunc_get_last_child(): Node | null
    vfunc_get_previous_sibling(): Node | null
    vfunc_get_next_sibling(): Node | null
    vfunc_get_attributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entities", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entities", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::notations", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notations", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: DocumentType, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DocumentType_ConstructProps)
    _init (config?: DocumentType_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Node_ConstructProps extends GObject.Object_ConstructProps {
    namespace_definitions?: NodeList
    namespace_uri?: string
    prefix?: string
    local_name?: string
    node_name?: string
    node_value?: string
    node_type?: NodeType
    parent_node?: Node
    child_nodes?: NodeList
    first_child?: Node
    last_child?: Node
    previous_sibling?: Node
    next_sibling?: Node
    attributes?: NamedAttrMap
    owner_document?: Document
}
export class Node {
    /* Properties of GXml.Node */
    namespace_definitions: NodeList
    namespace_uri: string
    prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: Node
    child_nodes: NodeList
    first_child: Node
    last_child: Node
    previous_sibling: Node
    next_sibling: Node
    attributes: NamedAttrMap
    owner_document: Document
    /* Fields of GXml.Node */
    parent_instance: GObject.Object
    priv: NodePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.Node */
    add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): Node | null
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    to_string(format: boolean, level: number): string
    get_namespace_definitions(): NodeList | null
    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): Node | null
    get_child_nodes(): NodeList | null
    get_first_child(): Node | null
    get_last_child(): Node | null
    get_previous_sibling(): Node | null
    get_next_sibling(): Node | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): Document
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
    /* Virtual methods of GXml.Node */
    vfunc_add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): Node | null
    vfunc_copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfunc_to_string(format: boolean, level: number): string
    vfunc_get_namespace_definitions(): NodeList | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): Node | null
    vfunc_get_child_nodes(): NodeList | null
    vfunc_get_first_child(): Node | null
    vfunc_get_last_child(): Node | null
    vfunc_get_previous_sibling(): Node | null
    vfunc_get_next_sibling(): Node | null
    vfunc_get_attributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::namespace-definitions", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Node, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Node_ConstructProps)
    _init (config?: Node_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Element_ConstructProps extends BackedNode_ConstructProps {
    tag_name?: string
    content?: string
}
export class Element {
    /* Properties of GXml.Element */
    tag_name: string
    content: string
    /* Properties of GXml.Node */
    namespace_definitions: NodeList
    namespace_uri: string
    prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: Node
    child_nodes: NodeList
    first_child: Node
    last_child: Node
    previous_sibling: Node
    next_sibling: Node
    attributes: NamedAttrMap
    owner_document: Document
    /* Fields of GXml.Element */
    parent_instance: BackedNode
    priv: ElementPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.Element */
    get_attribute(name: string): string
    set_attribute(name: string, value: string): void
    remove_attribute(name: string): void
    get_attribute_node(name: string): Attr | null
    set_attribute_node(new_attr: Attr): Attr
    remove_attribute_node(old_attr: Attr): Attr
    get_elements_by_tag_name(tag_name: string): NodeList
    normalize(): void
    get_tag_name(): string
    get_content(): string
    set_content(value: string): void
    /* Methods of GXml.Node */
    add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): Node | null
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    to_string(format: boolean, level: number): string
    get_namespace_definitions(): NodeList | null
    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): Node | null
    get_child_nodes(): NodeList | null
    get_first_child(): Node | null
    get_last_child(): Node | null
    get_previous_sibling(): Node | null
    get_next_sibling(): Node | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): Document
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
    /* Virtual methods of GXml.Node */
    vfunc_add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): Node | null
    vfunc_copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfunc_to_string(format: boolean, level: number): string
    vfunc_get_namespace_definitions(): NodeList | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): Node | null
    vfunc_get_child_nodes(): NodeList | null
    vfunc_get_first_child(): Node | null
    vfunc_get_last_child(): Node | null
    vfunc_get_previous_sibling(): Node | null
    vfunc_get_next_sibling(): Node | null
    vfunc_get_attributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::tag-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Element_ConstructProps)
    _init (config?: Element_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Entity_ConstructProps extends Node_ConstructProps {
    public_id?: string
    system_id?: string
    notation_name?: string
}
export class Entity {
    /* Properties of GXml.Entity */
    public_id: string
    system_id: string
    notation_name: string
    /* Properties of GXml.Node */
    namespace_definitions: NodeList
    namespace_uri: string
    prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: Node
    child_nodes: NodeList
    first_child: Node
    last_child: Node
    previous_sibling: Node
    next_sibling: Node
    attributes: NamedAttrMap
    owner_document: Document
    /* Fields of GXml.Entity */
    parent_instance: Node
    priv: EntityPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.Entity */
    get_public_id(): string
    get_system_id(): string
    get_notation_name(): string
    /* Methods of GXml.Node */
    add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): Node | null
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    to_string(format: boolean, level: number): string
    get_namespace_definitions(): NodeList | null
    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): Node | null
    get_child_nodes(): NodeList | null
    get_first_child(): Node | null
    get_last_child(): Node | null
    get_previous_sibling(): Node | null
    get_next_sibling(): Node | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): Document
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
    /* Virtual methods of GXml.Node */
    vfunc_add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): Node | null
    vfunc_copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfunc_to_string(format: boolean, level: number): string
    vfunc_get_namespace_definitions(): NodeList | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): Node | null
    vfunc_get_child_nodes(): NodeList | null
    vfunc_get_first_child(): Node | null
    vfunc_get_last_child(): Node | null
    vfunc_get_previous_sibling(): Node | null
    vfunc_get_next_sibling(): Node | null
    vfunc_get_attributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    connect(sigName: "notify::prefix", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Entity, pspec: GObject.ParamSpec) => void)): number
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Entity_ConstructProps)
    _init (config?: Entity_ConstructProps): void
    static $gtype: GObject.Type
}
export interface EntityReference_ConstructProps extends Node_ConstructProps {
}
export class EntityReference {
    /* Properties of GXml.Node */
    namespace_definitions: NodeList
    namespace_uri: string
    prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: Node
    child_nodes: NodeList
    first_child: Node
    last_child: Node
    previous_sibling: Node
    next_sibling: Node
    attributes: NamedAttrMap
    owner_document: Document
    /* Fields of GXml.EntityReference */
    parent_instance: Node
    priv: EntityReferencePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.Node */
    add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): Node | null
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    to_string(format: boolean, level: number): string
    get_namespace_definitions(): NodeList | null
    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): Node | null
    get_child_nodes(): NodeList | null
    get_first_child(): Node | null
    get_last_child(): Node | null
    get_previous_sibling(): Node | null
    get_next_sibling(): Node | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): Document
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
    /* Virtual methods of GXml.Node */
    vfunc_add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): Node | null
    vfunc_copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfunc_to_string(format: boolean, level: number): string
    vfunc_get_namespace_definitions(): NodeList | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): Node | null
    vfunc_get_child_nodes(): NodeList | null
    vfunc_get_first_child(): Node | null
    vfunc_get_last_child(): Node | null
    vfunc_get_previous_sibling(): Node | null
    vfunc_get_next_sibling(): Node | null
    vfunc_get_attributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::namespace-definitions", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: EntityReference, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of GXml.Implementation */
    parent_instance: GObject.Object
    priv: ImplementationPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.Implementation */
    create_document(namespace_uri?: string | null, qualified_name?: string | null, doctype?: DocumentType | null): Document
    has_feature(feature: string, version?: string | null): boolean
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
export interface NamedAttrMap_ConstructProps extends GObject.Object_ConstructProps {
    length?: number
}
export class NamedAttrMap {
    /* Properties of GXml.NamedNodeMap */
    length: number
    /* Fields of GXml.NamedAttrMap */
    parent_instance: GObject.Object
    priv: NamedAttrMapPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.NamedAttrMap */
    get_values(): Gee.Collection
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
    /* Methods of GXml.NamedNodeMap */
    get_named_item(name: string): object | null
    set_named_item(item?: object | null): object | null
    remove_named_item(name: string): object | null
    item(index: number): object | null
    get_length(): number
    /* Virtual methods of GXml.NamedAttrMap */
    vfunc_get_named_item(name: string): object | null
    vfunc_set_named_item(item?: object | null): object | null
    vfunc_remove_named_item(name: string): object | null
    vfunc_item(index: number): object | null
    vfunc_get_length(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::length", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: NamedAttrMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NamedAttrMap_ConstructProps)
    _init (config?: NamedAttrMap_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NamespaceAttr_ConstructProps extends Node_ConstructProps {
    defined_prefix?: string
    defined_namespace_uri?: string
}
export class NamespaceAttr {
    /* Properties of GXml.NamespaceAttr */
    defined_prefix: string
    defined_namespace_uri: string
    /* Properties of GXml.Node */
    namespace_definitions: NodeList
    namespace_uri: string
    prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: Node
    child_nodes: NodeList
    first_child: Node
    last_child: Node
    previous_sibling: Node
    next_sibling: Node
    attributes: NamedAttrMap
    owner_document: Document
    /* Fields of GXml.NamespaceAttr */
    parent_instance: Node
    priv: NamespaceAttrPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.NamespaceAttr */
    get_defined_prefix(): string
    get_defined_namespace_uri(): string
    /* Methods of GXml.Node */
    add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): Node | null
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    to_string(format: boolean, level: number): string
    get_namespace_definitions(): NodeList | null
    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): Node | null
    get_child_nodes(): NodeList | null
    get_first_child(): Node | null
    get_last_child(): Node | null
    get_previous_sibling(): Node | null
    get_next_sibling(): Node | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): Document
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
    /* Virtual methods of GXml.Node */
    vfunc_add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): Node | null
    vfunc_copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfunc_to_string(format: boolean, level: number): string
    vfunc_get_namespace_definitions(): NodeList | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): Node | null
    vfunc_get_child_nodes(): NodeList | null
    vfunc_get_first_child(): Node | null
    vfunc_get_last_child(): Node | null
    vfunc_get_previous_sibling(): Node | null
    vfunc_get_next_sibling(): Node | null
    vfunc_get_attributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    connect(sigName: "notify::prefix", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: NamespaceAttr, pspec: GObject.ParamSpec) => void)): number
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NamespaceAttr_ConstructProps)
    _init (config?: NamespaceAttr_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Notation_ConstructProps extends Node_ConstructProps {
    public_id?: string
    system_id?: string
}
export class Notation {
    /* Properties of GXml.Notation */
    public_id: string
    system_id: string
    /* Properties of GXml.Node */
    namespace_definitions: NodeList
    namespace_uri: string
    prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: Node
    child_nodes: NodeList
    first_child: Node
    last_child: Node
    previous_sibling: Node
    next_sibling: Node
    attributes: NamedAttrMap
    owner_document: Document
    /* Fields of GXml.Notation */
    parent_instance: Node
    priv: NotationPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.Notation */
    get_public_id(): string | null
    get_system_id(): string | null
    /* Methods of GXml.Node */
    add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): Node | null
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    to_string(format: boolean, level: number): string
    get_namespace_definitions(): NodeList | null
    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): Node | null
    get_child_nodes(): NodeList | null
    get_first_child(): Node | null
    get_last_child(): Node | null
    get_previous_sibling(): Node | null
    get_next_sibling(): Node | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): Document
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
    /* Virtual methods of GXml.Node */
    vfunc_add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): Node | null
    vfunc_copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfunc_to_string(format: boolean, level: number): string
    vfunc_get_namespace_definitions(): NodeList | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): Node | null
    vfunc_get_child_nodes(): NodeList | null
    vfunc_get_first_child(): Node | null
    vfunc_get_last_child(): Node | null
    vfunc_get_previous_sibling(): Node | null
    vfunc_get_next_sibling(): Node | null
    vfunc_get_attributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::public-id", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::public-id", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::system-id", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-id", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Notation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Properties of GXml.ProcessingInstruction */
    target: string
    data: string
    /* Properties of GXml.Node */
    namespace_definitions: NodeList
    namespace_uri: string
    prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: Node
    child_nodes: NodeList
    first_child: Node
    last_child: Node
    previous_sibling: Node
    next_sibling: Node
    attributes: NamedAttrMap
    owner_document: Document
    /* Fields of GXml.ProcessingInstruction */
    parent_instance: Node
    priv: ProcessingInstructionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.ProcessingInstruction */
    get_target(): string
    get_data(): string
    set_data(value: string): void
    /* Methods of GXml.Node */
    add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): Node | null
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    to_string(format: boolean, level: number): string
    get_namespace_definitions(): NodeList | null
    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): Node | null
    get_child_nodes(): NodeList | null
    get_first_child(): Node | null
    get_last_child(): Node | null
    get_previous_sibling(): Node | null
    get_next_sibling(): Node | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): Document
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
    /* Virtual methods of GXml.Node */
    vfunc_add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): Node | null
    vfunc_copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfunc_to_string(format: boolean, level: number): string
    vfunc_get_namespace_definitions(): NodeList | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): Node | null
    vfunc_get_child_nodes(): NodeList | null
    vfunc_get_first_child(): Node | null
    vfunc_get_last_child(): Node | null
    vfunc_get_previous_sibling(): Node | null
    vfunc_get_next_sibling(): Node | null
    vfunc_get_attributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::target", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::data", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: ProcessingInstruction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProcessingInstruction_ConstructProps)
    _init (config?: ProcessingInstruction_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Text_ConstructProps extends CharacterData_ConstructProps {
}
export class Text {
    /* Properties of GXml.CharacterData */
    data: string
    length: number
    /* Properties of GXml.Node */
    namespace_definitions: NodeList
    namespace_uri: string
    prefix: string
    local_name: string
    node_name: string
    node_value: string
    node_type: NodeType
    parent_node: Node
    child_nodes: NodeList
    first_child: Node
    last_child: Node
    previous_sibling: Node
    next_sibling: Node
    attributes: NamedAttrMap
    owner_document: Document
    /* Fields of GXml.Text */
    parent_instance: CharacterData
    priv: TextPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.Text */
    split_text(offset: number): Text
    /* Methods of GXml.CharacterData */
    substring_data(offset: number, count: number): string
    append_data(new_segment: string): void
    insert_data(offset: number, new_segment: string): void
    delete_data(offset: number, count: number): void
    replace_data(offset: number, count: number, new_segment: string): void
    get_data(): string
    set_data(value: string): void
    get_length(): number
    /* Methods of GXml.Node */
    add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    insert_before(new_child: Node, ref_child?: Node | null): Node | null
    replace_child(new_child: Node, old_child: Node): Node | null
    remove_child(old_child: Node): Node | null
    append_child(new_child: Node): Node | null
    has_child_nodes(): boolean
    clone_node(deep: boolean): Node | null
    copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    to_string(format: boolean, level: number): string
    get_namespace_definitions(): NodeList | null
    get_namespace_uri(): string | null
    get_prefix(): string | null
    get_local_name(): string | null
    get_node_name(): string
    get_node_value(): string | null
    get_node_type(): NodeType
    get_parent_node(): Node | null
    get_child_nodes(): NodeList | null
    get_first_child(): Node | null
    get_last_child(): Node | null
    get_previous_sibling(): Node | null
    get_next_sibling(): Node | null
    get_attributes(): NamedAttrMap | null
    get_owner_document(): Document
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
    /* Virtual methods of GXml.Node */
    vfunc_add_namespace_attr(uri: string, prefix: string): NamespaceAttr | null
    vfunc_insert_before(new_child: Node, ref_child?: Node | null): Node | null
    vfunc_replace_child(new_child: Node, old_child: Node): Node | null
    vfunc_remove_child(old_child: Node): Node | null
    vfunc_append_child(new_child: Node): Node | null
    vfunc_has_child_nodes(): boolean
    vfunc_clone_node(deep: boolean): Node | null
    vfunc_copy(node: Node, deep: boolean): [ /* returnType */ boolean, /* node */ Node ]
    vfunc_to_string(format: boolean, level: number): string
    vfunc_get_namespace_definitions(): NodeList | null
    vfunc_get_namespace_uri(): string | null
    vfunc_get_prefix(): string | null
    vfunc_get_local_name(): string | null
    vfunc_get_node_name(): string
    vfunc_get_node_value(): string | null
    vfunc_get_node_type(): NodeType
    vfunc_get_parent_node(): Node | null
    vfunc_get_child_nodes(): NodeList | null
    vfunc_get_first_child(): Node | null
    vfunc_get_last_child(): Node | null
    vfunc_get_previous_sibling(): Node | null
    vfunc_get_next_sibling(): Node | null
    vfunc_get_attributes(): NamedAttrMap | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-definitions", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-definitions", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::namespace-uri", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::namespace-uri", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefix", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-name", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-value", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-value", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::node-type", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent-node", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-node", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child-nodes", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-nodes", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::first-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::previous-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::previous-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::next-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-sibling", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::owner-document", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::owner-document", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Text_ConstructProps)
    _init (config?: Text_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SerializableObjectModel_ConstructProps extends GObject.Object_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignored_serializable_properties?: GLib.HashTable
    unknown_serializable_property?: GLib.HashTable
    serialized_xml_node_value?: string
}
export class SerializableObjectModel {
    /* Properties of GXml.Serializable */
    properties: GObject.ParamSpec[]
    ignored_serializable_properties: GLib.HashTable
    unknown_serializable_property: GLib.HashTable
    serialized_xml_node_value: string
    /* Fields of GXml.SerializableObjectModel */
    parent_instance: GObject.Object
    priv: SerializableObjectModelPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.SerializableObjectModel */
    get_enable_unknown_serializable_property(): boolean
    serialize_use_xml_node_value(): boolean
    property_use_nick(): boolean
    node_name(): string
    default_node_name(): string
    find_property_spec(property_name: string): GObject.ParamSpec | null
    init_properties(): void
    list_serializable_properties(): GObject.ParamSpec[]
    get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    set_property_value(spec: GObject.ParamSpec, val: any): void
    transform_from_string(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    transform_to_string(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    serialize(node: Node): Node | null
    default_serialize(node: Node): Node | null
    serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    default_serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    default_deserialize(node: Node): Node | null
    deserialize_property(property_node: Node): boolean
    default_deserialize_property(property_node: Node): boolean
    to_string(): string
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
    /* Methods of GXml.Serializable */
    default_find_property_spec(property_name: string): GObject.ParamSpec | null
    default_init_properties(): void
    default_list_serializable_properties(): GObject.ParamSpec[]
    default_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    default_set_property_value(spec: GObject.ParamSpec, val: any): void
    get_properties(): GObject.ParamSpec[]
    set_properties(value: GObject.ParamSpec[]): void
    get_ignored_serializable_properties(): GLib.HashTable
    set_ignored_serializable_properties(value: GLib.HashTable): void
    get_unknown_serializable_property(): GLib.HashTable
    set_unknown_serializable_property(value: GLib.HashTable): void
    get_serialized_xml_node_value(): string | null
    set_serialized_xml_node_value(value?: string | null): void
    /* Virtual methods of GXml.SerializableObjectModel */
    vfunc_get_enable_unknown_serializable_property(): boolean
    vfunc_serialize_use_xml_node_value(): boolean
    vfunc_property_use_nick(): boolean
    vfunc_node_name(): string
    vfunc_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_init_properties(): void
    vfunc_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    vfunc_set_property_value(spec: GObject.ParamSpec, val: any): void
    vfunc_transform_from_string(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    vfunc_transform_to_string(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    vfunc_serialize(node: Node): Node | null
    vfunc_serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    vfunc_deserialize(node: Node): Node | null
    vfunc_deserialize_property(property_node: Node): boolean
    vfunc_to_string(): string
    vfunc_default_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_default_init_properties(): void
    vfunc_default_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_default_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    vfunc_default_set_property_value(spec: GObject.ParamSpec, val: any): void
    vfunc_get_properties(): GObject.ParamSpec[]
    vfunc_set_properties(value: GObject.ParamSpec[]): void
    vfunc_get_ignored_serializable_properties(): GLib.HashTable
    vfunc_set_ignored_serializable_properties(value: GLib.HashTable): void
    vfunc_get_unknown_serializable_property(): GLib.HashTable
    vfunc_set_unknown_serializable_property(value: GLib.HashTable): void
    vfunc_get_serialized_xml_node_value(): string | null
    vfunc_set_serialized_xml_node_value(value?: string | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml.Serializable */
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
    connect(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableObjectModel, pspec: GObject.ParamSpec) => void)): number
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
    static equals(a: SerializableObjectModel, b: SerializableObjectModel): boolean
    static string_to_gvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    static gvalue_to_string(val: any): string
    static $gtype: GObject.Type
}
export interface SerializableJson_ConstructProps extends GObject.Object_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignored_serializable_properties?: GLib.HashTable
    unknown_serializable_property?: GLib.HashTable
    serialized_xml_node_value?: string
}
export class SerializableJson {
    /* Properties of GXml.Serializable */
    properties: GObject.ParamSpec[]
    ignored_serializable_properties: GLib.HashTable
    unknown_serializable_property: GLib.HashTable
    serialized_xml_node_value: string
    /* Fields of GXml.SerializableJson */
    parent_instance: GObject.Object
    priv: SerializableJsonPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.SerializableJson */
    get_enable_unknown_serializable_property(): boolean
    serialize_use_xml_node_value(): boolean
    node_name(): string
    property_use_nick(): boolean
    find_property_spec(property_name: string): GObject.ParamSpec | null
    init_properties(): void
    list_serializable_properties(): GObject.ParamSpec[]
    get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    set_property_value(spec: GObject.ParamSpec, val: any): void
    transform_from_string(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    transform_to_string(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize_property(property_node: Node): boolean
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
    /* Methods of GXml.Serializable */
    serialize(node: Node): Node | null
    deserialize(node: Node): Node | null
    default_find_property_spec(property_name: string): GObject.ParamSpec | null
    default_init_properties(): void
    default_list_serializable_properties(): GObject.ParamSpec[]
    default_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    default_set_property_value(spec: GObject.ParamSpec, val: any): void
    get_properties(): GObject.ParamSpec[]
    set_properties(value: GObject.ParamSpec[]): void
    get_ignored_serializable_properties(): GLib.HashTable
    set_ignored_serializable_properties(value: GLib.HashTable): void
    get_unknown_serializable_property(): GLib.HashTable
    set_unknown_serializable_property(value: GLib.HashTable): void
    get_serialized_xml_node_value(): string | null
    set_serialized_xml_node_value(value?: string | null): void
    /* Virtual methods of GXml.SerializableJson */
    vfunc_get_enable_unknown_serializable_property(): boolean
    vfunc_serialize_use_xml_node_value(): boolean
    vfunc_node_name(): string
    vfunc_property_use_nick(): boolean
    vfunc_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_init_properties(): void
    vfunc_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    vfunc_set_property_value(spec: GObject.ParamSpec, val: any): void
    vfunc_transform_from_string(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    vfunc_transform_to_string(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    vfunc_serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    vfunc_deserialize_property(property_node: Node): boolean
    vfunc_serialize(node: Node): Node | null
    vfunc_deserialize(node: Node): Node | null
    vfunc_default_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_default_init_properties(): void
    vfunc_default_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_default_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    vfunc_default_set_property_value(spec: GObject.ParamSpec, val: any): void
    vfunc_get_properties(): GObject.ParamSpec[]
    vfunc_set_properties(value: GObject.ParamSpec[]): void
    vfunc_get_ignored_serializable_properties(): GLib.HashTable
    vfunc_set_ignored_serializable_properties(value: GLib.HashTable): void
    vfunc_get_unknown_serializable_property(): GLib.HashTable
    vfunc_set_unknown_serializable_property(value: GLib.HashTable): void
    vfunc_get_serialized_xml_node_value(): string | null
    vfunc_set_serialized_xml_node_value(value?: string | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml.Serializable */
    connect(sigName: "serialize_unknown_property", callback: (($obj: SerializableJson, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property", callback: (($obj: SerializableJson, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableJson, element: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "serialize_unknown_property_type", callback: (($obj: SerializableJson, element: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "serialize_unknown_property_type", element: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property", callback: (($obj: SerializableJson, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property", callback: (($obj: SerializableJson, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableJson, node: Node, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deserialize_unknown_property_type", callback: (($obj: SerializableJson, node: Node, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deserialize_unknown_property_type", node: Node, prop: GObject.ParamSpec): void
    connect(sigName: "notify::properties", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serialized-xml-node-value", callback: (($obj: SerializableJson, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableJson_ConstructProps)
    _init (config?: SerializableJson_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SerializableJson
    static string_to_gvalue(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    static gvalue_to_string(val: any): string
    static $gtype: GObject.Type
}
export interface Serialization_ConstructProps extends GObject.Object_ConstructProps {
}
export class Serialization {
    /* Fields of GXml.Serialization */
    parent_instance: GObject.Object
    priv: SerializationPrivate
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
    connect(sigName: "notify", callback: (($obj: Serialization, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Serialization, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Serialization_ConstructProps)
    _init (config?: Serialization_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Serialization
    static serialize_object(object: GObject.Object): Document
    static clear_cache(): void
    static deserialize_object(type: GObject.Type, doc: Document): GObject.Object
    static $gtype: GObject.Type
}
export interface SerializableTreeMap_ConstructProps extends Gee.TreeMap_ConstructProps {
    properties?: GObject.ParamSpec[]
    ignored_serializable_properties?: GLib.HashTable
    unknown_serializable_property?: GLib.HashTable
    serialized_xml_node_value?: string
}
export class SerializableTreeMap {
    /* Properties of Gee.AbstractBidirSortedMap */
    readonly read_only_view: Gee.BidirSortedMap
    /* Properties of Gee.AbstractSortedMap */
    readonly ascending_keys: Gee.SortedSet
    readonly ascending_entries: Gee.SortedSet
    /* Properties of Gee.AbstractMap */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    /* Properties of GXml.Serializable */
    properties: GObject.ParamSpec[]
    ignored_serializable_properties: GLib.HashTable
    unknown_serializable_property: GLib.HashTable
    serialized_xml_node_value: string
    /* Fields of GXml.SerializableTreeMap */
    parent_instance: Gee.TreeMap
    priv: SerializableTreeMapPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.SerializableTreeMap */
    serialize_use_xml_node_value(): boolean
    property_use_nick(): boolean
    node_name(): string
    find_property_spec(property_name: string): GObject.ParamSpec | null
    init_properties(): void
    list_serializable_properties(): GObject.ParamSpec[]
    get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    set_property_value(spec: GObject.ParamSpec, val: any): void
    transform_from_string(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    transform_to_string(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    serialize(node: Node): Node | null
    default_serialize(node: Node): Node | null
    serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    default_serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    default_deserialize(node: Node): Node | null
    deserialize_property(property_node: Node): boolean
    default_deserialize_property(property_node: Node): boolean
    /* Methods of Gee.TreeMap */
    get_key_compare_func(): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null ]
    get_value_equal_func(): [ /* returnType */ Gee.EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee.AbstractBidirSortedMap */
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
    /* Methods of Gee.AbstractSortedMap */
    head_map(before?: object | null): Gee.SortedMap
    tail_map(after?: object | null): Gee.SortedMap
    sub_map(before?: object | null, after?: object | null): Gee.SortedMap
    get_ascending_keys(): Gee.SortedSet
    get_ascending_entries(): Gee.SortedSet
    /* Methods of Gee.AbstractMap */
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
    /* Methods of GXml.Serializable */
    get_enable_unknown_serializable_property(): boolean
    default_find_property_spec(property_name: string): GObject.ParamSpec | null
    default_init_properties(): void
    default_list_serializable_properties(): GObject.ParamSpec[]
    default_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    default_set_property_value(spec: GObject.ParamSpec, val: any): void
    get_properties(): GObject.ParamSpec[]
    set_properties(value: GObject.ParamSpec[]): void
    get_ignored_serializable_properties(): GLib.HashTable
    set_ignored_serializable_properties(value: GLib.HashTable): void
    get_unknown_serializable_property(): GLib.HashTable
    set_unknown_serializable_property(value: GLib.HashTable): void
    get_serialized_xml_node_value(): string | null
    set_serialized_xml_node_value(value?: string | null): void
    /* Methods of GXml.SerializableCollection */
    is_collection(): boolean
    /* Virtual methods of GXml.SerializableTreeMap */
    vfunc_serialize_use_xml_node_value(): boolean
    vfunc_property_use_nick(): boolean
    vfunc_node_name(): string
    vfunc_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_init_properties(): void
    vfunc_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    vfunc_set_property_value(spec: GObject.ParamSpec, val: any): void
    vfunc_transform_from_string(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    vfunc_transform_to_string(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    vfunc_serialize(node: Node): Node | null
    vfunc_serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    vfunc_deserialize(node: Node): Node | null
    vfunc_deserialize_property(property_node: Node): boolean
    vfunc_get_enable_unknown_serializable_property(): boolean
    vfunc_default_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_default_init_properties(): void
    vfunc_default_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_default_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    vfunc_default_set_property_value(spec: GObject.ParamSpec, val: any): void
    vfunc_get_properties(): GObject.ParamSpec[]
    vfunc_set_properties(value: GObject.ParamSpec[]): void
    vfunc_get_ignored_serializable_properties(): GLib.HashTable
    vfunc_set_ignored_serializable_properties(value: GLib.HashTable): void
    vfunc_get_unknown_serializable_property(): GLib.HashTable
    vfunc_set_unknown_serializable_property(value: GLib.HashTable): void
    vfunc_get_serialized_xml_node_value(): string | null
    vfunc_set_serialized_xml_node_value(value?: string | null): void
    vfunc_is_collection(): boolean
    vfunc_get_read_only_view(): Gee.BidirSortedMap
    vfunc_get_read_only_view(): Gee.SortedMap
    vfunc_get_read_only_view(): Gee.Map
    /* Virtual methods of Gee.TreeMap */
    vfunc_get_read_only_view(): Gee.BidirSortedMap
    vfunc_get_read_only_view(): Gee.SortedMap
    vfunc_get_read_only_view(): Gee.Map
    /* Virtual methods of Gee.AbstractBidirSortedMap */
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
    /* Virtual methods of Gee.AbstractSortedMap */
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
    /* Virtual methods of Gee.AbstractMap */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml.Serializable */
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
    connect(sigName: "notify::properties", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableTreeMap, pspec: GObject.ParamSpec) => void)): number
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
    unknown_serializable_property?: GLib.HashTable
    serialized_xml_node_value?: string
}
export class SerializableHashMap {
    /* Properties of Gee.AbstractMap */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    readonly read_only_view: Gee.Map
    /* Properties of GXml.Serializable */
    properties: GObject.ParamSpec[]
    ignored_serializable_properties: GLib.HashTable
    unknown_serializable_property: GLib.HashTable
    serialized_xml_node_value: string
    /* Fields of GXml.SerializableHashMap */
    parent_instance: Gee.HashMap
    priv: SerializableHashMapPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.SerializableHashMap */
    get_enable_unknown_serializable_property(): boolean
    serialize_use_xml_node_value(): boolean
    property_use_nick(): boolean
    node_name(): string
    find_property_spec(property_name: string): GObject.ParamSpec | null
    init_properties(): void
    list_serializable_properties(): GObject.ParamSpec[]
    get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    set_property_value(spec: GObject.ParamSpec, val: any): void
    transform_from_string(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    transform_to_string(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    serialize(node: Node): Node | null
    default_serialize(node: Node): Node | null
    serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    default_serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    default_deserialize(node: Node): Node | null
    deserialize_property(property_node: Node): boolean
    default_deserialize_property(property_node: Node): boolean
    /* Methods of Gee.HashMap */
    get_key_hash_func(): [ /* returnType */ Gee.HashDataFunc, /* result_target */ object | null ]
    get_key_equal_func(): [ /* returnType */ Gee.EqualDataFunc, /* result_target */ object | null ]
    get_value_equal_func(): [ /* returnType */ Gee.EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee.AbstractMap */
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
    /* Methods of GXml.Serializable */
    default_find_property_spec(property_name: string): GObject.ParamSpec | null
    default_init_properties(): void
    default_list_serializable_properties(): GObject.ParamSpec[]
    default_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    default_set_property_value(spec: GObject.ParamSpec, val: any): void
    get_properties(): GObject.ParamSpec[]
    set_properties(value: GObject.ParamSpec[]): void
    get_ignored_serializable_properties(): GLib.HashTable
    set_ignored_serializable_properties(value: GLib.HashTable): void
    get_unknown_serializable_property(): GLib.HashTable
    set_unknown_serializable_property(value: GLib.HashTable): void
    get_serialized_xml_node_value(): string | null
    set_serialized_xml_node_value(value?: string | null): void
    /* Methods of GXml.SerializableCollection */
    is_collection(): boolean
    /* Virtual methods of GXml.SerializableHashMap */
    vfunc_get_enable_unknown_serializable_property(): boolean
    vfunc_serialize_use_xml_node_value(): boolean
    vfunc_property_use_nick(): boolean
    vfunc_node_name(): string
    vfunc_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_init_properties(): void
    vfunc_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    vfunc_set_property_value(spec: GObject.ParamSpec, val: any): void
    vfunc_transform_from_string(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    vfunc_transform_to_string(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    vfunc_serialize(node: Node): Node | null
    vfunc_serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    vfunc_deserialize(node: Node): Node | null
    vfunc_deserialize_property(property_node: Node): boolean
    vfunc_default_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_default_init_properties(): void
    vfunc_default_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_default_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    vfunc_default_set_property_value(spec: GObject.ParamSpec, val: any): void
    vfunc_get_properties(): GObject.ParamSpec[]
    vfunc_set_properties(value: GObject.ParamSpec[]): void
    vfunc_get_ignored_serializable_properties(): GLib.HashTable
    vfunc_set_ignored_serializable_properties(value: GLib.HashTable): void
    vfunc_get_unknown_serializable_property(): GLib.HashTable
    vfunc_set_unknown_serializable_property(value: GLib.HashTable): void
    vfunc_get_serialized_xml_node_value(): string | null
    vfunc_set_serialized_xml_node_value(value?: string | null): void
    vfunc_is_collection(): boolean
    /* Virtual methods of Gee.AbstractMap */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml.Serializable */
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
    connect(sigName: "notify::properties", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableHashMap, pspec: GObject.ParamSpec) => void)): number
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
    unknown_serializable_property?: GLib.HashTable
    serialized_xml_node_value?: string
}
export class SerializableDualKeyMap {
    /* Properties of GXml.SerializableDualKeyMap */
    readonly value_type: GObject.Type
    readonly primary_key_type: GObject.Type
    readonly secondary_key_type: GObject.Type
    readonly primary_keys: Gee.Collection
    readonly size: number
    /* Properties of GXml.Serializable */
    properties: GObject.ParamSpec[]
    ignored_serializable_properties: GLib.HashTable
    unknown_serializable_property: GLib.HashTable
    serialized_xml_node_value: string
    /* Fields of GXml.SerializableDualKeyMap */
    parent_instance: GObject.Object
    priv: SerializableDualKeyMapPrivate
    storage: Gee.HashMultiMap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.SerializableDualKeyMap */
    secondary_keys(key?: object | null): Gee.Collection
    values_for_key(primary_key?: object | null): Gee.Collection
    values(): Gee.Collection
    set(primary_key?: object | null, secundary_key?: object | null, val?: object | null): void
    get(primary_key?: object | null, secondary_key?: object | null): object | null
    get_enable_unknown_serializable_property(): boolean
    serialize_use_xml_node_value(): boolean
    property_use_nick(): boolean
    node_name(): string
    find_property_spec(property_name: string): GObject.ParamSpec | null
    init_properties(): void
    list_serializable_properties(): GObject.ParamSpec[]
    get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    set_property_value(spec: GObject.ParamSpec, val: any): void
    transform_from_string(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    transform_to_string(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    serialize(node: Node): Node | null
    default_serialize(node: Node): Node | null
    serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    default_serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    default_deserialize(node: Node): Node | null
    deserialize_property(property_node: Node): boolean
    default_deserialize_property(property_node: Node): boolean
    get_value_type(): GObject.Type
    get_primary_key_type(): GObject.Type
    get_secondary_key_type(): GObject.Type
    get_primary_keys(): Gee.Collection
    get_size(): number
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
    /* Methods of GXml.Serializable */
    default_find_property_spec(property_name: string): GObject.ParamSpec | null
    default_init_properties(): void
    default_list_serializable_properties(): GObject.ParamSpec[]
    default_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    default_set_property_value(spec: GObject.ParamSpec, val: any): void
    get_properties(): GObject.ParamSpec[]
    set_properties(value: GObject.ParamSpec[]): void
    get_ignored_serializable_properties(): GLib.HashTable
    set_ignored_serializable_properties(value: GLib.HashTable): void
    get_unknown_serializable_property(): GLib.HashTable
    set_unknown_serializable_property(value: GLib.HashTable): void
    get_serialized_xml_node_value(): string | null
    set_serialized_xml_node_value(value?: string | null): void
    /* Methods of GXml.SerializableCollection */
    is_collection(): boolean
    /* Virtual methods of GXml.SerializableDualKeyMap */
    vfunc_get_enable_unknown_serializable_property(): boolean
    vfunc_serialize_use_xml_node_value(): boolean
    vfunc_property_use_nick(): boolean
    vfunc_node_name(): string
    vfunc_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_init_properties(): void
    vfunc_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    vfunc_set_property_value(spec: GObject.ParamSpec, val: any): void
    vfunc_transform_from_string(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    vfunc_transform_to_string(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    vfunc_serialize(node: Node): Node | null
    vfunc_serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    vfunc_deserialize(node: Node): Node | null
    vfunc_deserialize_property(property_node: Node): boolean
    vfunc_default_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_default_init_properties(): void
    vfunc_default_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_default_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    vfunc_default_set_property_value(spec: GObject.ParamSpec, val: any): void
    vfunc_get_properties(): GObject.ParamSpec[]
    vfunc_set_properties(value: GObject.ParamSpec[]): void
    vfunc_get_ignored_serializable_properties(): GLib.HashTable
    vfunc_set_ignored_serializable_properties(value: GLib.HashTable): void
    vfunc_get_unknown_serializable_property(): GLib.HashTable
    vfunc_set_unknown_serializable_property(value: GLib.HashTable): void
    vfunc_get_serialized_xml_node_value(): string | null
    vfunc_set_serialized_xml_node_value(value?: string | null): void
    vfunc_is_collection(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml.Serializable */
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
    connect(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableDualKeyMap, pspec: GObject.ParamSpec) => void)): number
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
    unknown_serializable_property?: GLib.HashTable
    serialized_xml_node_value?: string
}
export class SerializableArrayList {
    /* Properties of Gee.AbstractBidirList */
    readonly read_only_view: Gee.BidirList
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    /* Properties of GXml.Serializable */
    properties: GObject.ParamSpec[]
    ignored_serializable_properties: GLib.HashTable
    unknown_serializable_property: GLib.HashTable
    serialized_xml_node_value: string
    /* Fields of GXml.SerializableArrayList */
    parent_instance: Gee.ArrayList
    priv: SerializableArrayListPrivate
    /* Fields of Gee.ArrayList */
    _items: object[]
    _items_length1: number
    _size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.SerializableArrayList */
    serialize_use_xml_node_value(): boolean
    property_use_nick(): boolean
    node_name(): string
    find_property_spec(property_name: string): GObject.ParamSpec | null
    init_properties(): void
    list_serializable_properties(): GObject.ParamSpec[]
    get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    set_property_value(spec: GObject.ParamSpec, val: any): void
    transform_from_string(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    transform_to_string(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    serialize(node: Node): Node | null
    default_serialize(node: Node): Node | null
    serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    default_serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    default_deserialize(node: Node): Node | null
    deserialize_property(property_node: Node): boolean
    default_deserialize_property(property_node: Node): boolean
    /* Methods of Gee.ArrayList */
    add_all(collection: Gee.Collection): boolean
    get_equal_func(): [ /* returnType */ Gee.EqualDataFunc, /* result_target */ object | null ]
    /* Methods of Gee.AbstractBidirList */
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
    /* Methods of Gee.AbstractList */
    list_iterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    index_of(item?: object | null): number
    insert(index: number, item?: object | null): void
    remove_at(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    get_read_only_view(): Gee.List
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean
    get_size(): number
    get_read_only(): boolean
    get_read_only_view(): Gee.Collection
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
    /* Methods of GXml.Serializable */
    get_enable_unknown_serializable_property(): boolean
    default_find_property_spec(property_name: string): GObject.ParamSpec | null
    default_init_properties(): void
    default_list_serializable_properties(): GObject.ParamSpec[]
    default_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    default_set_property_value(spec: GObject.ParamSpec, val: any): void
    get_properties(): GObject.ParamSpec[]
    set_properties(value: GObject.ParamSpec[]): void
    get_ignored_serializable_properties(): GLib.HashTable
    set_ignored_serializable_properties(value: GLib.HashTable): void
    get_unknown_serializable_property(): GLib.HashTable
    set_unknown_serializable_property(value: GLib.HashTable): void
    get_serialized_xml_node_value(): string | null
    set_serialized_xml_node_value(value?: string | null): void
    /* Methods of GXml.SerializableCollection */
    is_collection(): boolean
    /* Virtual methods of GXml.SerializableArrayList */
    vfunc_serialize_use_xml_node_value(): boolean
    vfunc_property_use_nick(): boolean
    vfunc_node_name(): string
    vfunc_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_init_properties(): void
    vfunc_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    vfunc_set_property_value(spec: GObject.ParamSpec, val: any): void
    vfunc_transform_from_string(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    vfunc_transform_to_string(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    vfunc_serialize(node: Node): Node | null
    vfunc_serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    vfunc_deserialize(node: Node): Node | null
    vfunc_deserialize_property(property_node: Node): boolean
    vfunc_get_enable_unknown_serializable_property(): boolean
    vfunc_default_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_default_init_properties(): void
    vfunc_default_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_default_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    vfunc_default_set_property_value(spec: GObject.ParamSpec, val: any): void
    vfunc_get_properties(): GObject.ParamSpec[]
    vfunc_set_properties(value: GObject.ParamSpec[]): void
    vfunc_get_ignored_serializable_properties(): GLib.HashTable
    vfunc_set_ignored_serializable_properties(value: GLib.HashTable): void
    vfunc_get_unknown_serializable_property(): GLib.HashTable
    vfunc_set_unknown_serializable_property(value: GLib.HashTable): void
    vfunc_get_serialized_xml_node_value(): string | null
    vfunc_set_serialized_xml_node_value(value?: string | null): void
    vfunc_is_collection(): boolean
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee.ArrayList */
    vfunc_get_read_only_view(): Gee.BidirList
    vfunc_get_read_only_view(): Gee.List
    vfunc_get_read_only_view(): Gee.Collection
    /* Virtual methods of Gee.AbstractBidirList */
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
    /* Virtual methods of Gee.AbstractList */
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
    /* Virtual methods of Gee.AbstractCollection */
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
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GXml.Serializable */
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
    connect(sigName: "notify::read-only-view", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::properties", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::properties", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignored-serializable-properties", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unknown-serializable-property", callback: (($obj: SerializableArrayList, pspec: GObject.ParamSpec) => void)): number
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
    /* Fields of GXml.SerializableContainer */
    parent_instance: SerializableObjectModel
    priv: SerializableContainerPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GXml.SerializableContainer */
    init_containers(): void
    /* Methods of GXml.SerializableObjectModel */
    get_enable_unknown_serializable_property(): boolean
    serialize_use_xml_node_value(): boolean
    property_use_nick(): boolean
    node_name(): string
    default_node_name(): string
    find_property_spec(property_name: string): GObject.ParamSpec | null
    init_properties(): void
    list_serializable_properties(): GObject.ParamSpec[]
    get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    set_property_value(spec: GObject.ParamSpec, val: any): void
    transform_from_string(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    transform_to_string(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    serialize(node: Node): Node | null
    default_serialize(node: Node): Node | null
    serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    default_serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    deserialize(node: Node): Node | null
    default_deserialize(node: Node): Node | null
    deserialize_property(property_node: Node): boolean
    default_deserialize_property(property_node: Node): boolean
    to_string(): string
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
    /* Virtual methods of GXml.SerializableContainer */
    vfunc_init_containers(): void
    /* Virtual methods of GXml.SerializableObjectModel */
    vfunc_get_enable_unknown_serializable_property(): boolean
    vfunc_serialize_use_xml_node_value(): boolean
    vfunc_property_use_nick(): boolean
    vfunc_node_name(): string
    vfunc_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_init_properties(): void
    vfunc_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    vfunc_set_property_value(spec: GObject.ParamSpec, val: any): void
    vfunc_transform_from_string(str: string, dest: any): [ /* returnType */ boolean, /* dest */ any ]
    vfunc_transform_to_string(val: any, str: string): [ /* returnType */ boolean, /* str */ string ]
    vfunc_serialize(node: Node): Node | null
    vfunc_serialize_property(element: Element, prop: GObject.ParamSpec): Node | null
    vfunc_deserialize(node: Node): Node | null
    vfunc_deserialize_property(property_node: Node): boolean
    vfunc_to_string(): string
    vfunc_default_find_property_spec(property_name: string): GObject.ParamSpec | null
    vfunc_default_init_properties(): void
    vfunc_default_list_serializable_properties(): GObject.ParamSpec[]
    vfunc_default_get_property_value(spec: GObject.ParamSpec, val: any): /* val */ any
    vfunc_default_set_property_value(spec: GObject.ParamSpec, val: any): void
    vfunc_get_properties(): GObject.ParamSpec[]
    vfunc_set_properties(value: GObject.ParamSpec[]): void
    vfunc_get_ignored_serializable_properties(): GLib.HashTable
    vfunc_set_ignored_serializable_properties(value: GLib.HashTable): void
    vfunc_get_unknown_serializable_property(): GLib.HashTable
    vfunc_set_unknown_serializable_property(value: GLib.HashTable): void
    vfunc_get_serialized_xml_node_value(): string | null
    vfunc_set_serialized_xml_node_value(value?: string | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SerializableContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SerializableContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SerializableContainer_ConstructProps)
    _init (config?: SerializableContainer_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AttrClass {
    /* Fields of GXml.AttrClass */
    parent_class: BackedNodeClass
    static name: string
}
export class AttrPrivate {
    static name: string
}
export abstract class BackedNodeClass {
    /* Fields of GXml.BackedNodeClass */
    parent_class: NodeClass
    static name: string
}
export class BackedNodePrivate {
    static name: string
}
export abstract class CDATASectionClass {
    /* Fields of GXml.CDATASectionClass */
    parent_class: TextClass
    static name: string
}
export class CDATASectionPrivate {
    static name: string
}
export abstract class CharacterDataClass {
    /* Fields of GXml.CharacterDataClass */
    parent_class: BackedNodeClass
    static name: string
}
export class CharacterDataPrivate {
    static name: string
}
export abstract class CommentClass {
    /* Fields of GXml.CommentClass */
    parent_class: CharacterDataClass
    static name: string
}
export class CommentPrivate {
    static name: string
}
export abstract class DocumentClass {
    /* Fields of GXml.DocumentClass */
    parent_class: NodeClass
    static name: string
}
export class DocumentPrivate {
    static name: string
}
export abstract class DocumentFragmentClass {
    /* Fields of GXml.DocumentFragmentClass */
    parent_class: BackedNodeClass
    static name: string
}
export class DocumentFragmentPrivate {
    static name: string
}
export abstract class DocumentTypeClass {
    /* Fields of GXml.DocumentTypeClass */
    parent_class: NodeClass
    static name: string
}
export class DocumentTypePrivate {
    static name: string
}
export abstract class NodeClass {
    /* Fields of GXml.NodeClass */
    parent_class: GObject.ObjectClass
    add_namespace_attr: (self: Node, uri: string, prefix: string) => NamespaceAttr | null
    insert_before: (self: Node, new_child: Node, ref_child?: Node | null) => Node | null
    replace_child: (self: Node, new_child: Node, old_child: Node) => Node | null
    remove_child: (self: Node, old_child: Node) => Node | null
    append_child: (self: Node, new_child: Node) => Node | null
    has_child_nodes: (self: Node) => boolean
    clone_node: (self: Node, deep: boolean) => Node | null
    copy: (self: Node, node: Node, deep: boolean) => [ /* returnType */ boolean, /* node */ Node ]
    to_string: (self: Node, format: boolean, level: number) => string
    static name: string
}
export class NodePrivate {
    static name: string
}
export abstract class ElementClass {
    /* Fields of GXml.ElementClass */
    parent_class: BackedNodeClass
    static name: string
}
export class ElementPrivate {
    static name: string
}
export abstract class EntityClass {
    /* Fields of GXml.EntityClass */
    parent_class: NodeClass
    static name: string
}
export class EntityPrivate {
    static name: string
}
export abstract class EntityReferenceClass {
    /* Fields of GXml.EntityReferenceClass */
    parent_class: NodeClass
    static name: string
}
export class EntityReferencePrivate {
    static name: string
}
export abstract class ImplementationClass {
    /* Fields of GXml.ImplementationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ImplementationPrivate {
    static name: string
}
export abstract class NamedAttrMapClass {
    /* Fields of GXml.NamedAttrMapClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class NamedAttrMapPrivate {
    static name: string
}
export abstract class NamespaceAttrClass {
    /* Fields of GXml.NamespaceAttrClass */
    parent_class: NodeClass
    static name: string
}
export class NamespaceAttrPrivate {
    static name: string
}
export abstract class NotationClass {
    /* Fields of GXml.NotationClass */
    parent_class: NodeClass
    static name: string
}
export class NotationPrivate {
    static name: string
}
export abstract class ProcessingInstructionClass {
    /* Fields of GXml.ProcessingInstructionClass */
    parent_class: NodeClass
    static name: string
}
export class ProcessingInstructionPrivate {
    static name: string
}
export abstract class TextClass {
    /* Fields of GXml.TextClass */
    parent_class: CharacterDataClass
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
    static get_nick(enumeration: GObject.Type, val: number): string
    static get_nick_camelcase(enumeration: GObject.Type, val: number): string
    static get_string(enumeration: GObject.Type, val: number, use_nick: boolean, camelcase: boolean): string
    static parse(enumeration: GObject.Type, val: string): GObject.EnumValue | null
    static to_array(enumeration: GObject.Type): GObject.EnumValue[]
}
export abstract class SerializableObjectModelClass {
    /* Fields of GXml.SerializableObjectModelClass */
    parent_class: GObject.ObjectClass
    get_enable_unknown_serializable_property: (self: SerializableObjectModel) => boolean
    serialize_use_xml_node_value: (self: SerializableObjectModel) => boolean
    property_use_nick: (self: SerializableObjectModel) => boolean
    node_name: (self: SerializableObjectModel) => string
    find_property_spec: (self: SerializableObjectModel, property_name: string) => GObject.ParamSpec | null
    init_properties: (self: SerializableObjectModel) => void
    list_serializable_properties: (self: SerializableObjectModel) => GObject.ParamSpec[]
    get_property_value: (self: SerializableObjectModel, spec: GObject.ParamSpec, val: any) => /* val */ any
    set_property_value: (self: SerializableObjectModel, spec: GObject.ParamSpec, val: any) => void
    transform_from_string: (self: SerializableObjectModel, str: string, dest: any) => [ /* returnType */ boolean, /* dest */ any ]
    transform_to_string: (self: SerializableObjectModel, val: any, str: string) => [ /* returnType */ boolean, /* str */ string ]
    serialize: (self: SerializableObjectModel, node: Node) => Node | null
    serialize_property: (self: SerializableObjectModel, element: Element, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableObjectModel, node: Node) => Node | null
    deserialize_property: (self: SerializableObjectModel, property_node: Node) => boolean
    to_string: (self: SerializableObjectModel) => string
    static name: string
}
export class SerializableObjectModelPrivate {
    static name: string
}
export abstract class SerializableJsonClass {
    /* Fields of GXml.SerializableJsonClass */
    parent_class: GObject.ObjectClass
    get_enable_unknown_serializable_property: (self: SerializableJson) => boolean
    serialize_use_xml_node_value: (self: SerializableJson) => boolean
    node_name: (self: SerializableJson) => string
    property_use_nick: (self: SerializableJson) => boolean
    find_property_spec: (self: SerializableJson, property_name: string) => GObject.ParamSpec | null
    init_properties: (self: SerializableJson) => void
    list_serializable_properties: (self: SerializableJson) => GObject.ParamSpec[]
    get_property_value: (self: SerializableJson, spec: GObject.ParamSpec, val: any) => /* val */ any
    set_property_value: (self: SerializableJson, spec: GObject.ParamSpec, val: any) => void
    transform_from_string: (self: SerializableJson, str: string, dest: any) => [ /* returnType */ boolean, /* dest */ any ]
    transform_to_string: (self: SerializableJson, val: any, str: string) => [ /* returnType */ boolean, /* str */ string ]
    serialize_property: (self: SerializableJson, element: Element, prop: GObject.ParamSpec) => Node | null
    deserialize_property: (self: SerializableJson, property_node: Node) => boolean
    static name: string
}
export class SerializableJsonPrivate {
    static name: string
}
export abstract class SerializationClass {
    /* Fields of GXml.SerializationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SerializationPrivate {
    static name: string
}
export abstract class SerializableTreeMapClass {
    /* Fields of GXml.SerializableTreeMapClass */
    parent_class: Gee.TreeMapClass
    serialize_use_xml_node_value: (self: SerializableTreeMap) => boolean
    property_use_nick: (self: SerializableTreeMap) => boolean
    node_name: (self: SerializableTreeMap) => string
    find_property_spec: (self: SerializableTreeMap, property_name: string) => GObject.ParamSpec | null
    init_properties: (self: SerializableTreeMap) => void
    list_serializable_properties: (self: SerializableTreeMap) => GObject.ParamSpec[]
    get_property_value: (self: SerializableTreeMap, spec: GObject.ParamSpec, val: any) => /* val */ any
    set_property_value: (self: SerializableTreeMap, spec: GObject.ParamSpec, val: any) => void
    transform_from_string: (self: SerializableTreeMap, str: string, dest: any) => [ /* returnType */ boolean, /* dest */ any ]
    transform_to_string: (self: SerializableTreeMap, val: any, str: string) => [ /* returnType */ boolean, /* str */ string ]
    serialize: (self: SerializableTreeMap, node: Node) => Node | null
    serialize_property: (self: SerializableTreeMap, element: Element, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableTreeMap, node: Node) => Node | null
    deserialize_property: (self: SerializableTreeMap, property_node: Node) => boolean
    static name: string
}
export class SerializableTreeMapPrivate {
    static name: string
}
export abstract class SerializableHashMapClass {
    /* Fields of GXml.SerializableHashMapClass */
    parent_class: Gee.HashMapClass
    get_enable_unknown_serializable_property: (self: SerializableHashMap) => boolean
    serialize_use_xml_node_value: (self: SerializableHashMap) => boolean
    property_use_nick: (self: SerializableHashMap) => boolean
    node_name: (self: SerializableHashMap) => string
    find_property_spec: (self: SerializableHashMap, property_name: string) => GObject.ParamSpec | null
    init_properties: (self: SerializableHashMap) => void
    list_serializable_properties: (self: SerializableHashMap) => GObject.ParamSpec[]
    get_property_value: (self: SerializableHashMap, spec: GObject.ParamSpec, val: any) => /* val */ any
    set_property_value: (self: SerializableHashMap, spec: GObject.ParamSpec, val: any) => void
    transform_from_string: (self: SerializableHashMap, str: string, dest: any) => [ /* returnType */ boolean, /* dest */ any ]
    transform_to_string: (self: SerializableHashMap, val: any, str: string) => [ /* returnType */ boolean, /* str */ string ]
    serialize: (self: SerializableHashMap, node: Node) => Node | null
    serialize_property: (self: SerializableHashMap, element: Element, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableHashMap, node: Node) => Node | null
    deserialize_property: (self: SerializableHashMap, property_node: Node) => boolean
    static name: string
}
export class SerializableHashMapPrivate {
    static name: string
}
export abstract class SerializableDualKeyMapClass {
    /* Fields of GXml.SerializableDualKeyMapClass */
    parent_class: GObject.ObjectClass
    get_enable_unknown_serializable_property: (self: SerializableDualKeyMap) => boolean
    serialize_use_xml_node_value: (self: SerializableDualKeyMap) => boolean
    property_use_nick: (self: SerializableDualKeyMap) => boolean
    node_name: (self: SerializableDualKeyMap) => string
    find_property_spec: (self: SerializableDualKeyMap, property_name: string) => GObject.ParamSpec | null
    init_properties: (self: SerializableDualKeyMap) => void
    list_serializable_properties: (self: SerializableDualKeyMap) => GObject.ParamSpec[]
    get_property_value: (self: SerializableDualKeyMap, spec: GObject.ParamSpec, val: any) => /* val */ any
    set_property_value: (self: SerializableDualKeyMap, spec: GObject.ParamSpec, val: any) => void
    transform_from_string: (self: SerializableDualKeyMap, str: string, dest: any) => [ /* returnType */ boolean, /* dest */ any ]
    transform_to_string: (self: SerializableDualKeyMap, val: any, str: string) => [ /* returnType */ boolean, /* str */ string ]
    serialize: (self: SerializableDualKeyMap, node: Node) => Node | null
    serialize_property: (self: SerializableDualKeyMap, element: Element, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableDualKeyMap, node: Node) => Node | null
    deserialize_property: (self: SerializableDualKeyMap, property_node: Node) => boolean
    static name: string
}
export class SerializableDualKeyMapPrivate {
    static name: string
}
export abstract class SerializableArrayListClass {
    /* Fields of GXml.SerializableArrayListClass */
    parent_class: Gee.ArrayListClass
    serialize_use_xml_node_value: (self: SerializableArrayList) => boolean
    property_use_nick: (self: SerializableArrayList) => boolean
    node_name: (self: SerializableArrayList) => string
    find_property_spec: (self: SerializableArrayList, property_name: string) => GObject.ParamSpec | null
    init_properties: (self: SerializableArrayList) => void
    list_serializable_properties: (self: SerializableArrayList) => GObject.ParamSpec[]
    get_property_value: (self: SerializableArrayList, spec: GObject.ParamSpec, val: any) => /* val */ any
    set_property_value: (self: SerializableArrayList, spec: GObject.ParamSpec, val: any) => void
    transform_from_string: (self: SerializableArrayList, str: string, dest: any) => [ /* returnType */ boolean, /* dest */ any ]
    transform_to_string: (self: SerializableArrayList, val: any, str: string) => [ /* returnType */ boolean, /* str */ string ]
    serialize: (self: SerializableArrayList, node: Node) => Node | null
    serialize_property: (self: SerializableArrayList, element: Element, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: SerializableArrayList, node: Node) => Node | null
    deserialize_property: (self: SerializableArrayList, property_node: Node) => boolean
    static name: string
}
export class SerializableArrayListPrivate {
    static name: string
}
export abstract class SerializableContainerClass {
    /* Fields of GXml.SerializableContainerClass */
    parent_class: SerializableObjectModelClass
    init_containers: (self: SerializableContainer) => void
    static name: string
}
export class SerializableContainerPrivate {
    static name: string
}
export abstract class NamedNodeMapIface {
    /* Fields of GXml.NamedNodeMapIface */
    parent_iface: GObject.TypeInterface
    get_named_item: (self: NamedNodeMap, name: string) => object | null
    set_named_item: (self: NamedNodeMap, item?: object | null) => object | null
    remove_named_item: (self: NamedNodeMap, name: string) => object | null
    item: (self: NamedNodeMap, index: number) => object | null
    get_length: (self: NamedNodeMap) => number
    set_length: (self: NamedNodeMap, value: number) => void
    static name: string
}
export abstract class NodeListIface {
    /* Fields of GXml.NodeListIface */
    parent_iface: GObject.TypeInterface
    item: (self: NodeList, idx: number) => Node
    insert_before: (self: NodeList, new_child: Node, ref_child?: Node | null) => Node | null
    replace_child: (self: NodeList, new_child: Node, old_child: Node) => Node | null
    remove_child: (self: NodeList, old_child: Node) => Node | null
    append_child: (self: NodeList, new_child: Node) => Node | null
    to_string: (self: NodeList, in_line: boolean) => string
    first: (self: NodeList) => Node
    last: (self: NodeList) => Node
    get: (self: NodeList, n: number) => Node
    get_length: (self: NodeList) => number
    set_length: (self: NodeList, value: number) => void
    static name: string
}
export abstract class SerializableIface {
    /* Fields of GXml.SerializableIface */
    parent_iface: GObject.TypeInterface
    get_enable_unknown_serializable_property: (self: Serializable) => boolean
    serialize_use_xml_node_value: (self: Serializable) => boolean
    node_name: (self: Serializable) => string
    property_use_nick: (self: Serializable) => boolean
    serialize: (self: Serializable, node: Node) => Node | null
    serialize_property: (self: Serializable, element: Element, prop: GObject.ParamSpec) => Node | null
    deserialize: (self: Serializable, node: Node) => Node | null
    deserialize_property: (self: Serializable, property_node: Node) => boolean
    find_property_spec: (self: Serializable, property_name: string) => GObject.ParamSpec | null
    default_find_property_spec: (self: Serializable, property_name: string) => GObject.ParamSpec | null
    init_properties: (self: Serializable) => void
    default_init_properties: (self: Serializable) => void
    list_serializable_properties: (self: Serializable) => GObject.ParamSpec[]
    default_list_serializable_properties: (self: Serializable) => GObject.ParamSpec[]
    get_property_value: (self: Serializable, spec: GObject.ParamSpec, val: any) => /* val */ any
    default_get_property_value: (self: Serializable, spec: GObject.ParamSpec, val: any) => /* val */ any
    set_property_value: (self: Serializable, spec: GObject.ParamSpec, val: any) => void
    default_set_property_value: (self: Serializable, spec: GObject.ParamSpec, val: any) => void
    transform_from_string: (self: Serializable, str: string, dest: any) => [ /* returnType */ boolean, /* dest */ any ]
    transform_to_string: (self: Serializable, val: any, str: string) => [ /* returnType */ boolean, /* str */ string ]
    get_properties: (self: Serializable) => GObject.ParamSpec[]
    set_properties: (self: Serializable, value: GObject.ParamSpec[]) => void
    get_ignored_serializable_properties: (self: Serializable) => GLib.HashTable
    set_ignored_serializable_properties: (self: Serializable, value: GLib.HashTable) => void
    get_unknown_serializable_property: (self: Serializable) => GLib.HashTable
    set_unknown_serializable_property: (self: Serializable, value: GLib.HashTable) => void
    get_serialized_xml_node_value: (self: Serializable) => string | null
    set_serialized_xml_node_value: (self: Serializable, value?: string | null) => void
    static name: string
}
export abstract class SerializableMapKeyIface {
    /* Fields of GXml.SerializableMapKeyIface */
    parent_iface: GObject.TypeInterface
    get_map_key: (self: SerializableMapKey) => object | null
    static name: string
}
export abstract class SerializableMapDualKeyIface {
    /* Fields of GXml.SerializableMapDualKeyIface */
    parent_iface: GObject.TypeInterface
    get_map_primary_key: (self: SerializableMapDualKey) => object | null
    get_map_secondary_key: (self: SerializableMapDualKey) => object | null
    static name: string
}
export abstract class SerializableCollectionIface {
    /* Fields of GXml.SerializableCollectionIface */
    parent_iface: GObject.TypeInterface
    is_collection: (self: SerializableCollection) => boolean
    static name: string
}