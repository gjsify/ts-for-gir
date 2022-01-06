/**
 * GIRepository-2.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GIRepository {

enum ArrayType {
    C,
    ARRAY,
    PTR_ARRAY,
    BYTE_ARRAY,
}
enum Direction {
    IN,
    OUT,
    INOUT,
}
enum InfoType {
    INVALID,
    FUNCTION,
    CALLBACK,
    STRUCT,
    BOXED,
    ENUM,
    FLAGS,
    OBJECT,
    INTERFACE,
    CONSTANT,
    INVALID_0,
    UNION,
    VALUE,
    SIGNAL,
    VFUNC,
    PROPERTY,
    FIELD,
    ARG,
    TYPE,
    UNRESOLVED,
}
enum RepositoryError {
    TYPELIB_NOT_FOUND,
    NAMESPACE_MISMATCH,
    NAMESPACE_VERSION_CONFLICT,
    LIBRARY_NOT_FOUND,
}
enum ScopeType {
    INVALID,
    CALL,
    ASYNC,
    NOTIFIED,
}
enum Transfer {
    NOTHING,
    CONTAINER,
    EVERYTHING,
}
enum TypeTag {
    VOID,
    BOOLEAN,
    INT8,
    UINT8,
    INT16,
    UINT16,
    INT32,
    UINT32,
    INT64,
    UINT64,
    FLOAT,
    DOUBLE,
    GTYPE,
    UTF8,
    FILENAME,
    ARRAY,
    INTERFACE,
    GLIST,
    GSLIST,
    GHASH,
    ERROR,
    UNICHAR,
}
enum nvokeError {
    FAILED,
    SYMBOL_NOT_FOUND,
    ARGUMENT_MISMATCH,
}
enum FieldInfoFlags {
    READABLE,
    WRITABLE,
}
enum FunctionInfoFlags {
    IS_METHOD,
    IS_CONSTRUCTOR,
    IS_GETTER,
    IS_SETTER,
    WRAPS_VFUNC,
    THROWS,
}
enum RepositoryLoadFlags {
    IREPOSITORY_LOAD_FLAG_LAZY,
}
enum VFuncInfoFlags {
    MUST_CHAIN_UP,
    MUST_OVERRIDE,
    MUST_NOT_OVERRIDE,
    THROWS,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const TYPE_TAG_N_TYPES: number
function arg_info_get_closure(info: ArgInfo): number
function arg_info_get_destroy(info: ArgInfo): number
function arg_info_get_direction(info: ArgInfo): Direction
function arg_info_get_ownership_transfer(info: ArgInfo): Transfer
function arg_info_get_scope(info: ArgInfo): ScopeType
function arg_info_get_type(info: ArgInfo): TypeInfo
function arg_info_is_caller_allocates(info: ArgInfo): boolean
function arg_info_is_optional(info: ArgInfo): boolean
function arg_info_is_return_value(info: ArgInfo): boolean
function arg_info_is_skip(info: ArgInfo): boolean
function arg_info_load_type(info: ArgInfo): /* type */ TypeInfo
function arg_info_may_be_null(info: ArgInfo): boolean
function callable_info_can_throw_gerror(info: CallableInfo): boolean
function callable_info_get_arg(info: CallableInfo, n: number): ArgInfo
function callable_info_get_caller_owns(info: CallableInfo): Transfer
function callable_info_get_instance_ownership_transfer(info: CallableInfo): Transfer
function callable_info_get_n_args(info: CallableInfo): number
function callable_info_get_return_attribute(info: CallableInfo, name: string): string
function callable_info_get_return_type(info: CallableInfo): TypeInfo
function callable_info_invoke(info: CallableInfo, function_: object | null, in_args: Argument[], out_args: Argument[], return_value: Argument, is_method: boolean, throws: boolean): boolean
function callable_info_is_method(info: CallableInfo): boolean
function callable_info_iterate_return_attributes(info: CallableInfo, iterator: AttributeIter): [ /* returnType */ boolean, /* iterator */ AttributeIter, /* name */ string, /* value */ string ]
function callable_info_load_arg(info: CallableInfo, n: number): /* arg */ ArgInfo
function callable_info_load_return_type(info: CallableInfo): /* type */ TypeInfo
function callable_info_may_return_null(info: CallableInfo): boolean
function callable_info_skip_return(info: CallableInfo): boolean
function cclosure_marshal_generic(closure: Function, return_gvalue: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function constant_info_get_type(info: ConstantInfo): TypeInfo
function enum_info_get_error_domain(info: EnumInfo): string
function enum_info_get_method(info: EnumInfo, n: number): FunctionInfo
function enum_info_get_n_methods(info: EnumInfo): number
function enum_info_get_n_values(info: EnumInfo): number
function enum_info_get_storage_type(info: EnumInfo): TypeTag
function enum_info_get_value(info: EnumInfo, n: number): ValueInfo
function field_info_get_flags(info: FieldInfo): FieldInfoFlags
function field_info_get_offset(info: FieldInfo): number
function field_info_get_size(info: FieldInfo): number
function field_info_get_type(info: FieldInfo): TypeInfo
function function_info_get_flags(info: FunctionInfo): FunctionInfoFlags
function function_info_get_property(info: FunctionInfo): PropertyInfo
function function_info_get_symbol(info: FunctionInfo): string
function function_info_get_vfunc(info: FunctionInfo): VFuncInfo
function get_major_version(): number
function get_micro_version(): number
function get_minor_version(): number
function info_new(type: InfoType, container: BaseInfo, typelib: Typelib, offset: number): BaseInfo
function info_type_to_string(type: InfoType): string
function interface_info_find_method(info: InterfaceInfo, name: string): FunctionInfo
function interface_info_find_signal(info: InterfaceInfo, name: string): SignalInfo
function interface_info_find_vfunc(info: InterfaceInfo, name: string): VFuncInfo
function interface_info_get_constant(info: InterfaceInfo, n: number): ConstantInfo
function interface_info_get_iface_struct(info: InterfaceInfo): StructInfo
function interface_info_get_method(info: InterfaceInfo, n: number): FunctionInfo
function interface_info_get_n_constants(info: InterfaceInfo): number
function interface_info_get_n_methods(info: InterfaceInfo): number
function interface_info_get_n_prerequisites(info: InterfaceInfo): number
function interface_info_get_n_properties(info: InterfaceInfo): number
function interface_info_get_n_signals(info: InterfaceInfo): number
function interface_info_get_n_vfuncs(info: InterfaceInfo): number
function interface_info_get_prerequisite(info: InterfaceInfo, n: number): BaseInfo
function interface_info_get_property(info: InterfaceInfo, n: number): PropertyInfo
function interface_info_get_signal(info: InterfaceInfo, n: number): SignalInfo
function interface_info_get_vfunc(info: InterfaceInfo, n: number): VFuncInfo
function invoke_error_quark(): GLib.Quark
function object_info_find_method(info: ObjectInfo, name: string): FunctionInfo | null
function object_info_find_method_using_interfaces(info: ObjectInfo, name: string): [ /* returnType */ FunctionInfo | null, /* implementor */ ObjectInfo ]
function object_info_find_signal(info: ObjectInfo, name: string): SignalInfo | null
function object_info_find_vfunc(info: ObjectInfo, name: string): VFuncInfo | null
function object_info_find_vfunc_using_interfaces(info: ObjectInfo, name: string): [ /* returnType */ VFuncInfo | null, /* implementor */ ObjectInfo ]
function object_info_get_abstract(info: ObjectInfo): boolean
function object_info_get_class_struct(info: ObjectInfo): StructInfo | null
function object_info_get_constant(info: ObjectInfo, n: number): ConstantInfo
function object_info_get_field(info: ObjectInfo, n: number): FieldInfo
function object_info_get_final(info: ObjectInfo): boolean
function object_info_get_fundamental(info: ObjectInfo): boolean
function object_info_get_get_value_function(info: ObjectInfo): string | null
function object_info_get_interface(info: ObjectInfo, n: number): InterfaceInfo
function object_info_get_method(info: ObjectInfo, n: number): FunctionInfo
function object_info_get_n_constants(info: ObjectInfo): number
function object_info_get_n_fields(info: ObjectInfo): number
function object_info_get_n_interfaces(info: ObjectInfo): number
function object_info_get_n_methods(info: ObjectInfo): number
function object_info_get_n_properties(info: ObjectInfo): number
function object_info_get_n_signals(info: ObjectInfo): number
function object_info_get_n_vfuncs(info: ObjectInfo): number
function object_info_get_parent(info: ObjectInfo): ObjectInfo | null
function object_info_get_property(info: ObjectInfo, n: number): PropertyInfo
function object_info_get_ref_function(info: ObjectInfo): string | null
function object_info_get_set_value_function(info: ObjectInfo): string | null
function object_info_get_signal(info: ObjectInfo, n: number): SignalInfo
function object_info_get_type_init(info: ObjectInfo): string
function object_info_get_type_name(info: ObjectInfo): string
function object_info_get_unref_function(info: ObjectInfo): string | null
function object_info_get_vfunc(info: ObjectInfo, n: number): VFuncInfo
function property_info_get_flags(info: PropertyInfo): GObject.ParamFlags
function property_info_get_getter(info: PropertyInfo): FunctionInfo | null
function property_info_get_ownership_transfer(info: PropertyInfo): Transfer
function property_info_get_setter(info: PropertyInfo): FunctionInfo | null
function property_info_get_type(info: PropertyInfo): TypeInfo
function registered_type_info_get_g_type(info: RegisteredTypeInfo): GObject.Type
function registered_type_info_get_type_init(info: RegisteredTypeInfo): string
function registered_type_info_get_type_name(info: RegisteredTypeInfo): string
function signal_info_get_class_closure(info: SignalInfo): VFuncInfo
function signal_info_get_flags(info: SignalInfo): GObject.SignalFlags
function signal_info_true_stops_emit(info: SignalInfo): boolean
function struct_info_find_field(info: StructInfo, name: string): FieldInfo
function struct_info_find_method(info: StructInfo, name: string): FunctionInfo
function struct_info_get_alignment(info: StructInfo): number
function struct_info_get_field(info: StructInfo, n: number): FieldInfo
function struct_info_get_method(info: StructInfo, n: number): FunctionInfo
function struct_info_get_n_fields(info: StructInfo): number
function struct_info_get_n_methods(info: StructInfo): number
function struct_info_get_size(info: StructInfo): number
function struct_info_is_foreign(info: StructInfo): boolean
function struct_info_is_gtype_struct(info: StructInfo): boolean
function type_info_argument_from_hash_pointer(info: TypeInfo, hash_pointer: object | null, arg: Argument): void
function type_info_get_array_fixed_size(info: TypeInfo): number
function type_info_get_array_length(info: TypeInfo): number
function type_info_get_array_type(info: TypeInfo): ArrayType
function type_info_get_interface(info: TypeInfo): BaseInfo
function type_info_get_param_type(info: TypeInfo, n: number): TypeInfo
function type_info_get_storage_type(info: TypeInfo): TypeTag
function type_info_get_tag(info: TypeInfo): TypeTag
function type_info_hash_pointer_from_argument(info: TypeInfo, arg: Argument): object | null
function type_info_is_pointer(info: TypeInfo): boolean
function type_info_is_zero_terminated(info: TypeInfo): boolean
function type_tag_to_string(type: TypeTag): string
function union_info_find_method(info: UnionInfo, name: string): FunctionInfo
function union_info_get_alignment(info: UnionInfo): number
function union_info_get_discriminator(info: UnionInfo, n: number): ConstantInfo
function union_info_get_discriminator_offset(info: UnionInfo): number
function union_info_get_discriminator_type(info: UnionInfo): TypeInfo
function union_info_get_field(info: UnionInfo, n: number): FieldInfo
function union_info_get_method(info: UnionInfo, n: number): FunctionInfo
function union_info_get_n_fields(info: UnionInfo): number
function union_info_get_n_methods(info: UnionInfo): number
function union_info_get_size(info: UnionInfo): number
function union_info_is_discriminated(info: UnionInfo): boolean
function value_info_get_value(info: ValueInfo): number
function vfunc_info_get_address(info: VFuncInfo, implementor_gtype: GObject.Type): object | null
function vfunc_info_get_flags(info: VFuncInfo): VFuncInfoFlags
function vfunc_info_get_invoker(info: VFuncInfo): FunctionInfo
function vfunc_info_get_offset(info: VFuncInfo): number
function vfunc_info_get_signal(info: VFuncInfo): SignalInfo
export interface Repository_ConstructProps extends GObject.Object_ConstructProps {
}
class Repository {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GIRepository-2.0.GIRepository.Repository */
    enumerate_versions(namespace_: string): string[]
    find_by_error_domain(domain: GLib.Quark): EnumInfo
    find_by_gtype(gtype: GObject.Type): BaseInfo
    find_by_name(namespace_: string, name: string): BaseInfo
    get_c_prefix(namespace_: string): string
    get_dependencies(namespace_: string): string[]
    get_immediate_dependencies(namespace_: string): string[]
    get_info(namespace_: string, index: number): BaseInfo
    get_loaded_namespaces(): string[]
    get_n_infos(namespace_: string): number
    get_object_gtype_interfaces(gtype: GObject.Type): /* interfaces_out */ InterfaceInfo[]
    get_shared_library(namespace_: string): string | null
    get_typelib_path(namespace_: string): string
    get_version(namespace_: string): string
    is_registered(namespace_: string, version?: string | null): boolean
    load_typelib(typelib: Typelib, flags: RepositoryLoadFlags): string
    require(namespace_: string, version: string | null, flags: RepositoryLoadFlags): Typelib
    require_private(typelib_dir: string, namespace_: string, version: string | null, flags: RepositoryLoadFlags): Typelib
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Repository_ConstructProps)
    _init (config?: Repository_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static dump(arg: string): boolean
    static error_quark(): GLib.Quark
    static get_default(): Repository
    static get_option_group(): GLib.OptionGroup
    static get_search_path(): string[]
    static prepend_library_path(directory: string): void
    static prepend_search_path(directory: string): void
    static $gtype: GObject.Type
}
class AttributeIter {
    static name: string
}
class BaseInfo {
    /* Methods of GIRepository-2.0.GIRepository.BaseInfo */
    equal(info2: BaseInfo): boolean
    get_attribute(name: string): string
    get_container(): BaseInfo
    get_name(): string
    get_namespace(): string
    get_type(): InfoType
    get_typelib(): Typelib
    is_deprecated(): boolean
    iterate_attributes(iterator: AttributeIter): [ /* returnType */ boolean, /* iterator */ AttributeIter, /* name */ string, /* value */ string ]
    static name: string
}
abstract class RepositoryClass {
    static name: string
}
class RepositoryPrivate {
    static name: string
}
class Typelib {
    /* Methods of GIRepository-2.0.GIRepository.Typelib */
    free(): void
    get_namespace(): string
    symbol(symbol_name: string, symbol?: object | null): boolean
    static name: string
}
class UnresolvedInfo {
    static name: string
}
class Argument {
    /* Fields of GIRepository-2.0.GIRepository.Argument */
    v_boolean: boolean
    v_int8: number
    v_uint8: number
    v_int16: number
    v_uint16: number
    v_int32: number
    v_uint32: number
    v_int64: number
    v_uint64: number
    v_float: number
    v_double: number
    v_short: number
    v_ushort: number
    v_int: number
    v_uint: number
    v_long: number
    v_ulong: number
    v_ssize: number
    v_size: number
    v_string: string
    v_pointer: object
    static name: string
}
type ArgInfo = BaseInfo
type CallableInfo = BaseInfo
type CallbackInfo = BaseInfo
type ConstantInfo = BaseInfo
type EnumInfo = BaseInfo
type FieldInfo = BaseInfo
type FunctionInfo = BaseInfo
type InterfaceInfo = BaseInfo
type ObjectInfo = BaseInfo
type PropertyInfo = BaseInfo
type RegisteredTypeInfo = BaseInfo
type SignalInfo = BaseInfo
type StructInfo = BaseInfo
type TypeInfo = BaseInfo
type UnionInfo = BaseInfo
type VFuncInfo = BaseInfo
type ValueInfo = BaseInfo
}
export default GIRepository