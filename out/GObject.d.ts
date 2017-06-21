/**
 * GObject-2.0
 */

import * as GLib from './GLib'
export enum BindingFlags {
    DEFAULT,
    BIDIRECTIONAL,
    SYNC_CREATE,
    INVERT_BOOLEAN,
}
export enum ConnectFlags {
    AFTER,
    SWAPPED,
}
export enum ParamFlags {
    READABLE,
    WRITABLE,
    READWRITE,
    CONSTRUCT,
    CONSTRUCT_ONLY,
    LAX_VALIDATION,
    STATIC_NAME,
    PRIVATE,
    STATIC_NICK,
    STATIC_BLURB,
    EXPLICIT_NOTIFY,
    DEPRECATED,
}
export enum SignalFlags {
    RUN_FIRST,
    RUN_LAST,
    RUN_CLEANUP,
    NO_RECURSE,
    DETAILED,
    ACTION,
    NO_HOOKS,
    MUST_COLLECT,
    DEPRECATED,
}
export enum SignalMatchType {
    ID,
    DETAIL,
    CLOSURE,
    FUNC,
    DATA,
    UNBLOCKED,
}
export enum TypeDebugFlags {
    NONE,
    OBJECTS,
    SIGNALS,
    INSTANCE_COUNT,
    MASK,
}
export enum TypeFlags {
    ABSTRACT,
    VALUE_ABSTRACT,
}
export enum TypeFundamentalFlags {
    CLASSED,
    INSTANTIATABLE,
    DERIVABLE,
    DEEP_DERIVABLE,
}
export const PARAM_MASK:number
export const PARAM_STATIC_STRINGS:number
export const PARAM_USER_SHIFT:number
export const SIGNAL_FLAGS_MASK:number
export const SIGNAL_MATCH_MASK:number
export const TYPE_FLAG_RESERVED_ID_BIT:number
export const TYPE_FUNDAMENTAL_MAX:number
export const TYPE_FUNDAMENTAL_SHIFT:number
export const TYPE_RESERVED_BSE_FIRST:number
export const TYPE_RESERVED_BSE_LAST:number
export const TYPE_RESERVED_GLIB_FIRST:number
export const TYPE_RESERVED_GLIB_LAST:number
export const TYPE_RESERVED_USER_FIRST:number
export const VALUE_COLLECT_FORMAT_MAX_LENGTH:number
export const VALUE_NOCOPY_CONTENTS:number
export function boxed_copy(boxed_type: number, src_boxed: object): object
export function boxed_free(boxed_type: number, boxed: object): void
export function cclosure_marshal_BOOLEAN__BOXED_BOXED(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_BOOLEAN__FLAGS(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_STRING__OBJECT_POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__BOOLEAN(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__BOXED(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__CHAR(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__DOUBLE(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__ENUM(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__FLAGS(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__FLOAT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__INT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__LONG(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__OBJECT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__PARAM(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__STRING(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__UCHAR(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__UINT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__UINT_POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__ULONG(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__VARIANT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_VOID__VOID(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function cclosure_marshal_generic(closure: Closure, return_gvalue: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
export function enum_complete_type_info(g_enum_type: number, const_values: EnumValue): /* info */ TypeInfo
export function enum_get_value(enum_class: EnumClass, value: number): EnumValue
export function enum_get_value_by_name(enum_class: EnumClass, name: string): EnumValue
export function enum_get_value_by_nick(enum_class: EnumClass, nick: string): EnumValue
export function enum_register_static(name: string, const_static_values: EnumValue): number
export function flags_complete_type_info(g_flags_type: number, const_values: FlagsValue): /* info */ TypeInfo
export function flags_get_first_value(flags_class: FlagsClass, value: number): FlagsValue
export function flags_get_value_by_name(flags_class: FlagsClass, name: string): FlagsValue
export function flags_get_value_by_nick(flags_class: FlagsClass, nick: string): FlagsValue
export function flags_register_static(name: string, const_static_values: FlagsValue): number
export function gtype_get_type(): number
export function param_spec_boolean(name: string, nick: string, blurb: string, default_value: boolean, flags: ParamFlags): ParamSpec
export function param_spec_boxed(name: string, nick: string, blurb: string, boxed_type: number, flags: ParamFlags): ParamSpec
export function param_spec_char(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_double(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_enum(name: string, nick: string, blurb: string, enum_type: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_flags(name: string, nick: string, blurb: string, flags_type: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_float(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_gtype(name: string, nick: string, blurb: string, is_a_type: number, flags: ParamFlags): ParamSpec
export function param_spec_int(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_int64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_long(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_object(name: string, nick: string, blurb: string, object_type: number, flags: ParamFlags): ParamSpec
export function param_spec_param(name: string, nick: string, blurb: string, param_type: number, flags: ParamFlags): ParamSpec
export function param_spec_pointer(name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpec
export function param_spec_pool_new(type_prefixing: boolean): ParamSpecPool
export function param_spec_string(name: string, nick: string, blurb: string, default_value: string, flags: ParamFlags): ParamSpec
export function param_spec_uchar(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_uint(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_uint64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_ulong(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_unichar(name: string, nick: string, blurb: string, default_value: number, flags: ParamFlags): ParamSpec
export function param_spec_variant(name: string, nick: string, blurb: string, type: GLib.VariantType, default_value: GLib.Variant | null, flags: ParamFlags): ParamSpec
export function param_type_register_static(name: string, pspec_info: ParamSpecTypeInfo): number
export function param_value_convert(pspec: ParamSpec, src_value: Value, dest_value: Value, strict_validation: boolean): boolean
export function param_value_defaults(pspec: ParamSpec, value: Value): boolean
export function param_value_set_default(pspec: ParamSpec, value: Value): void
export function param_value_validate(pspec: ParamSpec, value: Value): boolean
export function param_values_cmp(pspec: ParamSpec, value1: Value, value2: Value): number
export function pointer_type_register_static(name: string): number
export function signal_accumulator_first_wins(ihint: SignalInvocationHint, return_accu: Value, handler_return: Value, dummy: object): boolean
export function signal_accumulator_true_handled(ihint: SignalInvocationHint, return_accu: Value, handler_return: Value, dummy: object): boolean
export function signal_add_emission_hook(signal_id: number, detail: GLib.Quark, hook_func: SignalEmissionHook, hook_data: object, data_destroy: GLib.DestroyNotify): number
export function signal_chain_from_overridden(instance_and_params: Value[], return_value: Value): void
export function signal_connect_closure(instance: Object, detailed_signal: string, closure: Closure, after: boolean): number
export function signal_connect_closure_by_id(instance: Object, signal_id: number, detail: GLib.Quark, closure: Closure, after: boolean): number
export function signal_emitv(instance_and_params: Value[], signal_id: number, detail: GLib.Quark, return_value: Value): void
export function signal_get_invocation_hint(instance: Object): SignalInvocationHint
export function signal_handler_block(instance: Object, handler_id: number): void
export function signal_handler_disconnect(instance: Object, handler_id: number): void
export function signal_handler_find(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object, data: object): number
export function signal_handler_is_connected(instance: Object, handler_id: number): boolean
export function signal_handler_unblock(instance: Object, handler_id: number): void
export function signal_handlers_block_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object, data: object): number
export function signal_handlers_destroy(instance: Object): void
export function signal_handlers_disconnect_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object, data: object): number
export function signal_handlers_unblock_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure: Closure | null, func: object, data: object): number
export function signal_has_handler_pending(instance: Object, signal_id: number, detail: GLib.Quark, may_be_blocked: boolean): boolean
export function signal_list_ids(itype: number): [ /* returnType */ number[], /* n_ids */ number ]
export function signal_lookup(name: string, itype: number): number
export function signal_name(signal_id: number): string
export function signal_override_class_closure(signal_id: number, instance_type: number, class_closure: Closure): void
export function signal_parse_name(detailed_signal: string, itype: number, force_detail_quark: boolean): [ /* returnType */ boolean, /* signal_id_p */ number, /* detail_p */ GLib.Quark ]
export function signal_query(signal_id: number): /* query */ SignalQuery
export function signal_remove_emission_hook(signal_id: number, hook_id: number): void
export function signal_set_va_marshaller(signal_id: number, instance_type: number, va_marshaller: SignalCVaMarshaller): void
export function signal_stop_emission(instance: Object, signal_id: number, detail: GLib.Quark): void
export function signal_stop_emission_by_name(instance: Object, detailed_signal: string): void
export function signal_type_cclosure_new(itype: number, struct_offset: number): Closure
export function source_set_closure(source: GLib.Source, closure: Closure): void
export function source_set_dummy_callback(source: GLib.Source): void
export function strdup_value_contents(value: Value): string
export function type_add_class_private(class_type: number, private_size: number): void
export function type_add_instance_private(class_type: number, private_size: number): number
export function type_add_interface_dynamic(instance_type: number, interface_type: number, plugin: TypePlugin): void
export function type_add_interface_static(instance_type: number, interface_type: number, info: InterfaceInfo): void
export function type_check_class_is_a(g_class: TypeClass, is_a_type: number): boolean
export function type_check_instance(instance: TypeInstance): boolean
export function type_check_instance_is_a(instance: TypeInstance, iface_type: number): boolean
export function type_check_instance_is_fundamentally_a(instance: TypeInstance, fundamental_type: number): boolean
export function type_check_is_value_type(type: number): boolean
export function type_check_value(value: Value): boolean
export function type_check_value_holds(value: Value, type: number): boolean
export function type_children(type: number): [ /* returnType */ number, /* n_children */ number | null ]
export function type_class_add_private(g_class: object, private_size: number): void
export function type_class_adjust_private_offset(g_class: object, private_size_or_offset: number): void
export function type_class_peek(type: number): TypeClass
export function type_class_peek_static(type: number): TypeClass
export function type_class_ref(type: number): TypeClass
export function type_default_interface_peek(g_type: number): TypeInterface
export function type_default_interface_ref(g_type: number): TypeInterface
export function type_default_interface_unref(g_iface: TypeInterface): void
export function type_depth(type: number): number
export function type_ensure(type: number): void
export function type_free_instance(instance: TypeInstance): void
export function type_from_name(name: string): number
export function type_fundamental(type_id: number): number
export function type_fundamental_next(): number
export function type_get_instance_count(type: number): number
export function type_get_plugin(type: number): TypePlugin
export function type_get_qdata(type: number, quark: GLib.Quark): object
export function type_get_type_registration_serial(): number
export function type_init(): void
export function type_init_with_debug_flags(debug_flags: TypeDebugFlags): void
export function type_interface_add_prerequisite(interface_type: number, prerequisite_type: number): void
export function type_interface_get_plugin(instance_type: number, interface_type: number): TypePlugin
export function type_interface_peek(instance_class: TypeClass, iface_type: number): TypeInterface
export function type_interface_prerequisites(interface_type: number): [ /* returnType */ number, /* n_prerequisites */ number | null ]
export function type_interfaces(type: number): [ /* returnType */ number, /* n_interfaces */ number | null ]
export function type_is_a(type: number, is_a_type: number): boolean
export function type_name(type: number): string
export function type_name_from_class(g_class: TypeClass): string
export function type_name_from_instance(instance: TypeInstance): string
export function type_next_base(leaf_type: number, root_type: number): number
export function type_parent(type: number): number
export function type_qname(type: number): GLib.Quark
export function type_query(type: number): /* query */ TypeQuery
export function type_register_dynamic(parent_type: number, type_name: string, plugin: TypePlugin, flags: TypeFlags): number
export function type_register_fundamental(type_id: number, type_name: string, info: TypeInfo, finfo: TypeFundamentalInfo, flags: TypeFlags): number
export function type_register_static(parent_type: number, type_name: string, info: TypeInfo, flags: TypeFlags): number
export function type_set_qdata(type: number, quark: GLib.Quark, data: object): void
export function type_test_flags(type: number, flags: number): boolean
export function value_type_compatible(src_type: number, dest_type: number): boolean
export function value_type_transformable(src_type: number, dest_type: number): boolean
export interface BaseFinalizeFunc {
    (g_class: TypeClass): void
}
export interface BaseInitFunc {
    (g_class: TypeClass): void
}
export interface BindingTransformFunc {
    (binding: Binding, from_value: Value, to_value: Value, user_data: object): boolean
}
export interface BoxedCopyFunc {
    (boxed: object): object
}
export interface BoxedFreeFunc {
    (boxed: object): void
}
export interface Callback {
    (): void
}
export interface ClassFinalizeFunc {
    (g_class: TypeClass, class_data: object): void
}
export interface ClassInitFunc {
    (g_class: TypeClass, class_data: object): void
}
export interface ClosureMarshal {
    (closure: Closure, return_value: Value | null, n_param_values: number, param_values: Value[], invocation_hint: object | null, marshal_data: object | null): void
}
export interface ClosureNotify {
    (data: object, closure: Closure): void
}
export interface InstanceInitFunc {
    (instance: TypeInstance, g_class: TypeClass): void
}
export interface InterfaceFinalizeFunc {
    (g_iface: TypeInterface, iface_data: object): void
}
export interface InterfaceInitFunc {
    (g_iface: TypeInterface, iface_data: object): void
}
export interface ObjectFinalizeFunc {
    (object: Object): void
}
export interface ObjectGetPropertyFunc {
    (object: Object, property_id: number, value: Value, pspec: ParamSpec): void
}
export interface ObjectSetPropertyFunc {
    (object: Object, property_id: number, value: Value, pspec: ParamSpec): void
}
export interface SignalAccumulator {
    (ihint: SignalInvocationHint, return_accu: Value, handler_return: Value, data: object): boolean
}
export interface SignalEmissionHook {
    (ihint: SignalInvocationHint, n_param_values: number, param_values: Value[], data: object): boolean
}
export interface ToggleNotify {
    (data: object, object: Object, is_last_ref: boolean): void
}
export interface TypeClassCacheFunc {
    (cache_data: object, g_class: TypeClass): boolean
}
export interface TypeInterfaceCheckFunc {
    (check_data: object, g_iface: TypeInterface): void
}
export interface TypePluginCompleteInterfaceInfo {
    (plugin: TypePlugin, instance_type: number, interface_type: number, info: InterfaceInfo): void
}
export interface TypePluginCompleteTypeInfo {
    (plugin: TypePlugin, g_type: number, info: TypeInfo, value_table: TypeValueTable): void
}
export interface TypePluginUnuse {
    (plugin: TypePlugin): void
}
export interface TypePluginUse {
    (plugin: TypePlugin): void
}
export interface VaClosureMarshal {
    (closure: Closure, return_value: Value | null, instance: TypeInstance, args: any, marshal_data: object | null, n_params: number, param_types: number): void
}
export interface ValueTransform {
    (src_value: Value, dest_value: Value): void
}
export interface WeakNotify {
    (data: object, where_the_object_was: Object): void
}
export interface TypePlugin_ConstructProps {
}
export interface TypePlugin {
    /* Methods of TypePlugin */
    complete_interface_info(instance_type: number, interface_type: number, info: InterfaceInfo): void
    complete_type_info(g_type: number, info: TypeInfo, value_table: TypeValueTable): void
    unuse(): void
    use(): void
}
export interface TypePlugin_Static {
    new (config: TypePlugin_ConstructProps): TypePlugin
}
export declare var TypePlugin: TypePlugin_Static
export interface Binding_ConstructProps {
    /* Properties of Binding */
    flags?:BindingFlags
    source?:Object
    source_property?:string
    target?:Object
    target_property?:string
}
export interface Binding {
    /* Properties of Binding */
    /* Methods of Binding */
    get_flags(): BindingFlags
    get_source(): Object
    get_source_property(): string
    get_target(): Object
    get_target_property(): string
    unbind(): void
    /* Methods of Object */
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: BindingTransformFunc | null, transform_from: BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): Binding
    bind_property_with_closures(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure): Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: ParamSpec): void
    ref(): Object
    ref_sink(): Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: Value, pspec: ParamSpec): void
    vfunc_notify(pspec: ParamSpec): void
    vfunc_set_property(property_id: number, value: Value, pspec: ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: ParamSpec) => void))
}
export interface Binding_Static {
    new (config: Binding_ConstructProps): Binding
}
export declare var Binding: Binding_Static
export interface InitiallyUnowned_ConstructProps {
}
export interface InitiallyUnowned {
    /* Methods of Object */
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: BindingTransformFunc | null, transform_from: BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): Binding
    bind_property_with_closures(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure): Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: ParamSpec): void
    ref(): Object
    ref_sink(): Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: Value, pspec: ParamSpec): void
    vfunc_notify(pspec: ParamSpec): void
    vfunc_set_property(property_id: number, value: Value, pspec: ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: ParamSpec) => void))
}
export interface InitiallyUnowned_Static {
    new (config: InitiallyUnowned_ConstructProps): InitiallyUnowned
}
export declare var InitiallyUnowned: InitiallyUnowned_Static
export interface Object_ConstructProps {
}
export interface Object {
    /* Methods of Object */
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: BindingTransformFunc | null, transform_from: BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): Binding
    bind_property_with_closures(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure): Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: ParamSpec): void
    ref(): Object
    ref_sink(): Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Closure): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: Value, pspec: ParamSpec): void
    vfunc_notify(pspec: ParamSpec): void
    vfunc_set_property(property_id: number, value: Value, pspec: ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: ParamSpec) => void))
}
export interface Object_Static {
    new (config: Object_ConstructProps): Object
}
export declare class Object_Static {
    compat_control(what: number, data: object): number
    interface_find_property(g_iface: object, property_name: string): ParamSpec
    interface_install_property(g_iface: object, pspec: ParamSpec): void
    interface_list_properties(g_iface: object): [ /* returnType */ ParamSpec[], /* n_properties_p */ number ]
}
export declare var Object: Object_Static
export interface ParamSpec_ConstructProps {
}
export interface ParamSpec {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpec_Static {
    new (config: ParamSpec_ConstructProps): ParamSpec
}
export declare class ParamSpec_Static {
}
export declare var ParamSpec: ParamSpec_Static
export interface ParamSpecBoolean_ConstructProps {
}
export interface ParamSpecBoolean {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecBoolean_Static {
    new (config: ParamSpecBoolean_ConstructProps): ParamSpecBoolean
}
export declare var ParamSpecBoolean: ParamSpecBoolean_Static
export interface ParamSpecBoxed_ConstructProps {
}
export interface ParamSpecBoxed {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecBoxed_Static {
    new (config: ParamSpecBoxed_ConstructProps): ParamSpecBoxed
}
export declare var ParamSpecBoxed: ParamSpecBoxed_Static
export interface ParamSpecChar_ConstructProps {
}
export interface ParamSpecChar {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecChar_Static {
    new (config: ParamSpecChar_ConstructProps): ParamSpecChar
}
export declare var ParamSpecChar: ParamSpecChar_Static
export interface ParamSpecDouble_ConstructProps {
}
export interface ParamSpecDouble {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecDouble_Static {
    new (config: ParamSpecDouble_ConstructProps): ParamSpecDouble
}
export declare var ParamSpecDouble: ParamSpecDouble_Static
export interface ParamSpecEnum_ConstructProps {
}
export interface ParamSpecEnum {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecEnum_Static {
    new (config: ParamSpecEnum_ConstructProps): ParamSpecEnum
}
export declare var ParamSpecEnum: ParamSpecEnum_Static
export interface ParamSpecFlags_ConstructProps {
}
export interface ParamSpecFlags {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecFlags_Static {
    new (config: ParamSpecFlags_ConstructProps): ParamSpecFlags
}
export declare var ParamSpecFlags: ParamSpecFlags_Static
export interface ParamSpecFloat_ConstructProps {
}
export interface ParamSpecFloat {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecFloat_Static {
    new (config: ParamSpecFloat_ConstructProps): ParamSpecFloat
}
export declare var ParamSpecFloat: ParamSpecFloat_Static
export interface ParamSpecGType_ConstructProps {
}
export interface ParamSpecGType {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecGType_Static {
    new (config: ParamSpecGType_ConstructProps): ParamSpecGType
}
export declare var ParamSpecGType: ParamSpecGType_Static
export interface ParamSpecInt_ConstructProps {
}
export interface ParamSpecInt {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecInt_Static {
    new (config: ParamSpecInt_ConstructProps): ParamSpecInt
}
export declare var ParamSpecInt: ParamSpecInt_Static
export interface ParamSpecInt64_ConstructProps {
}
export interface ParamSpecInt64 {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecInt64_Static {
    new (config: ParamSpecInt64_ConstructProps): ParamSpecInt64
}
export declare var ParamSpecInt64: ParamSpecInt64_Static
export interface ParamSpecLong_ConstructProps {
}
export interface ParamSpecLong {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecLong_Static {
    new (config: ParamSpecLong_ConstructProps): ParamSpecLong
}
export declare var ParamSpecLong: ParamSpecLong_Static
export interface ParamSpecObject_ConstructProps {
}
export interface ParamSpecObject {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecObject_Static {
    new (config: ParamSpecObject_ConstructProps): ParamSpecObject
}
export declare var ParamSpecObject: ParamSpecObject_Static
export interface ParamSpecOverride_ConstructProps {
}
export interface ParamSpecOverride {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecOverride_Static {
    new (config: ParamSpecOverride_ConstructProps): ParamSpecOverride
}
export declare var ParamSpecOverride: ParamSpecOverride_Static
export interface ParamSpecParam_ConstructProps {
}
export interface ParamSpecParam {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecParam_Static {
    new (config: ParamSpecParam_ConstructProps): ParamSpecParam
}
export declare var ParamSpecParam: ParamSpecParam_Static
export interface ParamSpecPointer_ConstructProps {
}
export interface ParamSpecPointer {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecPointer_Static {
    new (config: ParamSpecPointer_ConstructProps): ParamSpecPointer
}
export declare var ParamSpecPointer: ParamSpecPointer_Static
export interface ParamSpecString_ConstructProps {
}
export interface ParamSpecString {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecString_Static {
    new (config: ParamSpecString_ConstructProps): ParamSpecString
}
export declare var ParamSpecString: ParamSpecString_Static
export interface ParamSpecUChar_ConstructProps {
}
export interface ParamSpecUChar {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecUChar_Static {
    new (config: ParamSpecUChar_ConstructProps): ParamSpecUChar
}
export declare var ParamSpecUChar: ParamSpecUChar_Static
export interface ParamSpecUInt_ConstructProps {
}
export interface ParamSpecUInt {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecUInt_Static {
    new (config: ParamSpecUInt_ConstructProps): ParamSpecUInt
}
export declare var ParamSpecUInt: ParamSpecUInt_Static
export interface ParamSpecUInt64_ConstructProps {
}
export interface ParamSpecUInt64 {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecUInt64_Static {
    new (config: ParamSpecUInt64_ConstructProps): ParamSpecUInt64
}
export declare var ParamSpecUInt64: ParamSpecUInt64_Static
export interface ParamSpecULong_ConstructProps {
}
export interface ParamSpecULong {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecULong_Static {
    new (config: ParamSpecULong_ConstructProps): ParamSpecULong
}
export declare var ParamSpecULong: ParamSpecULong_Static
export interface ParamSpecUnichar_ConstructProps {
}
export interface ParamSpecUnichar {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecUnichar_Static {
    new (config: ParamSpecUnichar_ConstructProps): ParamSpecUnichar
}
export declare var ParamSpecUnichar: ParamSpecUnichar_Static
export interface ParamSpecValueArray_ConstructProps {
}
export interface ParamSpecValueArray {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecValueArray_Static {
    new (config: ParamSpecValueArray_ConstructProps): ParamSpecValueArray
}
export declare var ParamSpecValueArray: ParamSpecValueArray_Static
export interface ParamSpecVariant_ConstructProps {
}
export interface ParamSpecVariant {
    /* Methods of ParamSpec */
    get_blurb(): string
    get_default_value(): Value
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object
    get_redirect_target(): ParamSpec
    set_qdata(quark: GLib.Quark, data: object): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object
    /* Virtual methods of ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: Value): void
    vfunc_value_validate(value: Value): boolean
    vfunc_values_cmp(value1: Value, value2: Value): number
}
export interface ParamSpecVariant_Static {
    new (config: ParamSpecVariant_ConstructProps): ParamSpecVariant
}
export declare var ParamSpecVariant: ParamSpecVariant_Static
export interface TypeModule_ConstructProps {
}
export interface TypeModule {
    /* Methods of TypeModule */
    add_interface(instance_type: number, interface_type: number, interface_info: InterfaceInfo): void
    register_enum(name: string, const_static_values: EnumValue): number
    register_flags(name: string, const_static_values: FlagsValue): number
    register_type(parent_type: number, type_name: string, type_info: TypeInfo, flags: TypeFlags): number
    set_name(name: string): void
    unuse(): void
    use(): boolean
    /* Methods of Object */
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: BindingTransformFunc | null, transform_from: BindingTransformFunc | null, user_data: object, notify: GLib.DestroyNotify): Binding
    bind_property_with_closures(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure): Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object
    get_property(property_name: string, value: Value): void
    get_qdata(quark: GLib.Quark): object
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: ParamSpec): void
    ref(): Object
    ref_sink(): Object
    replace_data(key: string, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    replace_qdata(quark: GLib.Quark, oldval: object | null, newval: object | null, destroy: GLib.DestroyNotify | null, old_destroy: GLib.DestroyNotify | null): boolean
    run_dispose(): void
    set_data(key: string, data: object): void
    set_property(property_name: string, value: Value): void
    steal_data(key: string): object
    steal_qdata(quark: GLib.Quark): object
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Closure): void
    /* Virtual methods of TypeModule */
    vfunc_load(): boolean
    vfunc_unload(): void
    /* Virtual methods of Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: Value, pspec: ParamSpec): void
    vfunc_notify(pspec: ParamSpec): void
    vfunc_set_property(property_id: number, value: Value, pspec: ParamSpec): void
    /* Signals of Object */
    connect(sigName: "notify", callback: ((pspec: ParamSpec) => void))
}
export interface TypeModule_Static {
    new (config: TypeModule_ConstructProps): TypeModule
}
export declare var TypeModule: TypeModule_Static
export interface CClosure_ConstructProps {
}
export interface CClosure {
}
export interface CClosure_Static {
    new (config: CClosure_ConstructProps): CClosure
}
export declare class CClosure_Static {
    marshal_BOOLEAN__BOXED_BOXED(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_BOOLEAN__FLAGS(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_STRING__OBJECT_POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__BOOLEAN(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__BOXED(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__CHAR(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__DOUBLE(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__ENUM(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__FLAGS(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__FLOAT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__INT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__LONG(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__OBJECT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__PARAM(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__STRING(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__UCHAR(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__UINT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__UINT_POINTER(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__ULONG(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__VARIANT(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_VOID__VOID(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
    marshal_generic(closure: Closure, return_gvalue: Value, n_param_values: number, param_values: Value, invocation_hint: object, marshal_data: object): void
}
export declare var CClosure: CClosure_Static
export interface Closure_ConstructProps {
}
export interface Closure {
    /* Methods of Closure */
    invalidate(): void
    invoke(return_value: Value | null, n_param_values: number, param_values: Value[], invocation_hint: object | null): void
    ref(): Closure
    sink(): void
    unref(): void
}
export interface Closure_Static {
    new (config: Closure_ConstructProps): Closure
}
export declare var Closure: Closure_Static
export interface ClosureNotifyData_ConstructProps {
}
export interface ClosureNotifyData {
}
export interface ClosureNotifyData_Static {
    new (config: ClosureNotifyData_ConstructProps): ClosureNotifyData
}
export declare var ClosureNotifyData: ClosureNotifyData_Static
export interface EnumClass_ConstructProps {
}
export interface EnumClass {
}
export interface EnumClass_Static {
    new (config: EnumClass_ConstructProps): EnumClass
}
export declare var EnumClass: EnumClass_Static
export interface EnumValue_ConstructProps {
}
export interface EnumValue {
}
export interface EnumValue_Static {
    new (config: EnumValue_ConstructProps): EnumValue
}
export declare var EnumValue: EnumValue_Static
export interface FlagsClass_ConstructProps {
}
export interface FlagsClass {
}
export interface FlagsClass_Static {
    new (config: FlagsClass_ConstructProps): FlagsClass
}
export declare var FlagsClass: FlagsClass_Static
export interface FlagsValue_ConstructProps {
}
export interface FlagsValue {
}
export interface FlagsValue_Static {
    new (config: FlagsValue_ConstructProps): FlagsValue
}
export declare var FlagsValue: FlagsValue_Static
export interface InitiallyUnownedClass_ConstructProps {
}
export interface InitiallyUnownedClass {
}
export interface InitiallyUnownedClass_Static {
    new (config: InitiallyUnownedClass_ConstructProps): InitiallyUnownedClass
}
export declare var InitiallyUnownedClass: InitiallyUnownedClass_Static
export interface InterfaceInfo_ConstructProps {
}
export interface InterfaceInfo {
}
export interface InterfaceInfo_Static {
    new (config: InterfaceInfo_ConstructProps): InterfaceInfo
}
export declare var InterfaceInfo: InterfaceInfo_Static
export interface ObjectClass_ConstructProps {
}
export interface ObjectClass {
    /* Methods of ObjectClass */
    find_property(property_name: string): ParamSpec
    install_properties(n_pspecs: number, pspecs: ParamSpec[]): void
    install_property(property_id: number, pspec: ParamSpec): void
    list_properties(): [ /* returnType */ ParamSpec[], /* n_properties */ number ]
    override_property(property_id: number, name: string): void
}
export interface ObjectClass_Static {
    new (config: ObjectClass_ConstructProps): ObjectClass
}
export declare var ObjectClass: ObjectClass_Static
export interface ObjectConstructParam_ConstructProps {
}
export interface ObjectConstructParam {
}
export interface ObjectConstructParam_Static {
    new (config: ObjectConstructParam_ConstructProps): ObjectConstructParam
}
export declare var ObjectConstructParam: ObjectConstructParam_Static
export interface ParamSpecClass_ConstructProps {
}
export interface ParamSpecClass {
}
export interface ParamSpecClass_Static {
    new (config: ParamSpecClass_ConstructProps): ParamSpecClass
}
export declare var ParamSpecClass: ParamSpecClass_Static
export interface ParamSpecPool_ConstructProps {
}
export interface ParamSpecPool {
    /* Methods of ParamSpecPool */
    insert(pspec: ParamSpec, owner_type: number): void
    list(owner_type: number): [ /* returnType */ ParamSpec[], /* n_pspecs_p */ number ]
    list_owned(owner_type: number): GLib.List
    lookup(param_name: string, owner_type: number, walk_ancestors: boolean): ParamSpec
    remove(pspec: ParamSpec): void
}
export interface ParamSpecPool_Static {
    new (config: ParamSpecPool_ConstructProps): ParamSpecPool
}
export declare class ParamSpecPool_Static {
    new(type_prefixing: boolean): ParamSpecPool
}
export declare var ParamSpecPool: ParamSpecPool_Static
export interface ParamSpecTypeInfo_ConstructProps {
}
export interface ParamSpecTypeInfo {
}
export interface ParamSpecTypeInfo_Static {
    new (config: ParamSpecTypeInfo_ConstructProps): ParamSpecTypeInfo
}
export declare var ParamSpecTypeInfo: ParamSpecTypeInfo_Static
export interface Parameter_ConstructProps {
}
export interface Parameter {
}
export interface Parameter_Static {
    new (config: Parameter_ConstructProps): Parameter
}
export declare var Parameter: Parameter_Static
export interface SignalInvocationHint_ConstructProps {
}
export interface SignalInvocationHint {
}
export interface SignalInvocationHint_Static {
    new (config: SignalInvocationHint_ConstructProps): SignalInvocationHint
}
export declare var SignalInvocationHint: SignalInvocationHint_Static
export interface SignalQuery_ConstructProps {
}
export interface SignalQuery {
}
export interface SignalQuery_Static {
    new (config: SignalQuery_ConstructProps): SignalQuery
}
export declare var SignalQuery: SignalQuery_Static
export interface TypeClass_ConstructProps {
}
export interface TypeClass {
    /* Methods of TypeClass */
    peek_parent(): TypeClass
    unref(): void
}
export interface TypeClass_Static {
    new (config: TypeClass_ConstructProps): TypeClass
}
export declare class TypeClass_Static {
    add_private(g_class: object, private_size: number): void
    adjust_private_offset(g_class: object, private_size_or_offset: number): void
    peek(type: number): TypeClass
    peek_static(type: number): TypeClass
    ref(type: number): TypeClass
}
export declare var TypeClass: TypeClass_Static
export interface TypeFundamentalInfo_ConstructProps {
}
export interface TypeFundamentalInfo {
}
export interface TypeFundamentalInfo_Static {
    new (config: TypeFundamentalInfo_ConstructProps): TypeFundamentalInfo
}
export declare var TypeFundamentalInfo: TypeFundamentalInfo_Static
export interface TypeInfo_ConstructProps {
}
export interface TypeInfo {
}
export interface TypeInfo_Static {
    new (config: TypeInfo_ConstructProps): TypeInfo
}
export declare var TypeInfo: TypeInfo_Static
export interface TypeInstance_ConstructProps {
}
export interface TypeInstance {
    /* Methods of TypeInstance */
}
export interface TypeInstance_Static {
    new (config: TypeInstance_ConstructProps): TypeInstance
}
export declare var TypeInstance: TypeInstance_Static
export interface TypeInterface_ConstructProps {
}
export interface TypeInterface {
    /* Methods of TypeInterface */
    peek_parent(): TypeInterface
}
export interface TypeInterface_Static {
    new (config: TypeInterface_ConstructProps): TypeInterface
}
export declare class TypeInterface_Static {
    add_prerequisite(interface_type: number, prerequisite_type: number): void
    get_plugin(instance_type: number, interface_type: number): TypePlugin
    peek(instance_class: TypeClass, iface_type: number): TypeInterface
    prerequisites(interface_type: number): [ /* returnType */ number, /* n_prerequisites */ number | null ]
}
export declare var TypeInterface: TypeInterface_Static
export interface TypeModuleClass_ConstructProps {
}
export interface TypeModuleClass {
}
export interface TypeModuleClass_Static {
    new (config: TypeModuleClass_ConstructProps): TypeModuleClass
}
export declare var TypeModuleClass: TypeModuleClass_Static
export interface TypePluginClass_ConstructProps {
}
export interface TypePluginClass {
}
export interface TypePluginClass_Static {
    new (config: TypePluginClass_ConstructProps): TypePluginClass
}
export declare var TypePluginClass: TypePluginClass_Static
export interface TypeQuery_ConstructProps {
}
export interface TypeQuery {
}
export interface TypeQuery_Static {
    new (config: TypeQuery_ConstructProps): TypeQuery
}
export declare var TypeQuery: TypeQuery_Static
export interface TypeValueTable_ConstructProps {
}
export interface TypeValueTable {
}
export interface TypeValueTable_Static {
    new (config: TypeValueTable_ConstructProps): TypeValueTable
}
export declare class TypeValueTable_Static {
}
export declare var TypeValueTable: TypeValueTable_Static
export interface Value_ConstructProps {
}
export interface Value {
    /* Methods of Value */
    copy(dest_value: Value): void
    dup_object(): Object
    dup_string(): string
    dup_variant(): GLib.Variant
    fits_pointer(): boolean
    get_boolean(): boolean
    get_boxed(): object
    get_char(): number
    get_double(): number
    get_enum(): number
    get_flags(): number
    get_float(): number
    get_gtype(): number
    get_int(): number
    get_int64(): number
    get_long(): number
    get_object(): Object
    get_param(): ParamSpec
    get_pointer(): object
    get_schar(): number
    get_string(): string
    get_uchar(): number
    get_uint(): number
    get_uint64(): number
    get_ulong(): number
    get_variant(): GLib.Variant
    init(g_type: number): Value
    init_from_instance(instance: object): void
    peek_pointer(): object
    reset(): Value
    set_boolean(v_boolean: boolean): void
    set_boxed(v_boxed: object | null): void
    set_boxed_take_ownership(v_boxed: object | null): void
    set_char(v_char: number): void
    set_double(v_double: number): void
    set_enum(v_enum: number): void
    set_flags(v_flags: number): void
    set_float(v_float: number): void
    set_gtype(v_gtype: number): void
    set_instance(instance: object | null): void
    set_int(v_int: number): void
    set_int64(v_int64: number): void
    set_long(v_long: number): void
    set_object(v_object: Object | null): void
    set_param(param: ParamSpec | null): void
    set_pointer(v_pointer: object): void
    set_schar(v_char: number): void
    set_static_boxed(v_boxed: object | null): void
    set_static_string(v_string: string | null): void
    set_string(v_string: string | null): void
    set_string_take_ownership(v_string: string | null): void
    set_uchar(v_uchar: number): void
    set_uint(v_uint: number): void
    set_uint64(v_uint64: number): void
    set_ulong(v_ulong: number): void
    set_variant(variant: GLib.Variant | null): void
    take_boxed(v_boxed: object | null): void
    take_string(v_string: string | null): void
    take_variant(variant: GLib.Variant | null): void
    transform(dest_value: Value): boolean
    unset(): void
}
export interface Value_Static {
    new (config: Value_ConstructProps): Value
}
export declare class Value_Static {
    type_compatible(src_type: number, dest_type: number): boolean
    type_transformable(src_type: number, dest_type: number): boolean
}
export declare var Value: Value_Static
export interface ValueArray_ConstructProps {
}
export interface ValueArray {
    /* Methods of ValueArray */
    append(value: Value | null): ValueArray
    copy(): ValueArray
    free(): void
    get_nth(index_: number): Value
    insert(index_: number, value: Value | null): ValueArray
    prepend(value: Value | null): ValueArray
    remove(index_: number): ValueArray
    sort(compare_func: GLib.CompareFunc): ValueArray
    sort_with_data(compare_func: GLib.CompareDataFunc, user_data: object): ValueArray
}
export interface ValueArray_Static {
    new (config: ValueArray_ConstructProps): ValueArray
}
export declare var ValueArray: ValueArray_Static
export interface WeakRef_ConstructProps {
}
export interface WeakRef {
    /* Methods of WeakRef */
}
export interface WeakRef_Static {
    new (config: WeakRef_ConstructProps): WeakRef
}
export declare var WeakRef: WeakRef_Static
export interface TypeCValue_ConstructProps {
}
export interface TypeCValue {
}
export interface TypeCValue_Static {
    new (config: TypeCValue_ConstructProps): TypeCValue
}
export declare var TypeCValue: TypeCValue_Static
export interface _Value__data__union_ConstructProps {
}
export interface _Value__data__union {
}
export interface _Value__data__union_Static {
    new (config: _Value__data__union_ConstructProps): _Value__data__union
}
export declare var _Value__data__union: _Value__data__union_Static
type InitiallyUnowned_autoptr = object
type Object_autoptr = object
type SignalCMarshaller = ClosureMarshal
type SignalCVaMarshaller = VaClosureMarshal
type Type = number