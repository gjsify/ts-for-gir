/**
 * GObject-2.0
 */

/// <reference types="node" />

declare namespace GObject {

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
export const TYPE_FLAG_RESERVED_ID_BIT:Type
export const TYPE_FUNDAMENTAL_MAX:number
export const TYPE_FUNDAMENTAL_SHIFT:number
export const TYPE_RESERVED_BSE_FIRST:number
export const TYPE_RESERVED_BSE_LAST:number
export const TYPE_RESERVED_GLIB_FIRST:number
export const TYPE_RESERVED_GLIB_LAST:number
export const TYPE_RESERVED_USER_FIRST:number
export const VALUE_NOCOPY_CONTENTS:number
export function boxedCopy(boxed_type: Type, src_boxed: object): object
export function boxedFree(boxed_type: Type, boxed: object): void
export function cclosureMarshalBooleanBoxedBoxed(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalBooleanFlags(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalStringObjectPointer(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidBoolean(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidBoxed(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidChar(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidDouble(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidEnum(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidFlags(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidFloat(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidInt(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidLong(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidObject(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidParam(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidPointer(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidString(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidUchar(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidUint(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidUintPointer(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidUlong(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidVariant(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalVoidVoid(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function cclosureMarshalGeneric(closure: Closure, return_gvalue: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
export function clearSignalHandler(handler_id_ptr: number, instance: Object): void
export function enumCompleteTypeInfo(g_enum_type: Type, const_values: EnumValue): /* info */ TypeInfo
export function enumGetValue(enum_class: EnumClass, value: number): EnumValue
export function enumGetValueByName(enum_class: EnumClass, name: string): EnumValue
export function enumGetValueByNick(enum_class: EnumClass, nick: string): EnumValue
export function enumRegisterStatic(name: string, const_static_values: EnumValue): Type
export function enumToString(g_enum_type: Type, value: number): string
export function flagsCompleteTypeInfo(g_flags_type: Type, const_values: FlagsValue): /* info */ TypeInfo
export function flagsGetFirstValue(flags_class: FlagsClass, value: number): FlagsValue
export function flagsGetValueByName(flags_class: FlagsClass, name: string): FlagsValue
export function flagsGetValueByNick(flags_class: FlagsClass, nick: string): FlagsValue
export function flagsRegisterStatic(name: string, const_static_values: FlagsValue): Type
export function flagsToString(flags_type: Type, value: number): string
export function gtypeGetType(): Type
export function paramSpecBoolean(name: string, nick: string, blurb: string, default_value: boolean, flags: ParamFlags): ParamSpec
export function paramSpecBoxed(name: string, nick: string, blurb: string, boxed_type: Type, flags: ParamFlags): ParamSpec
export function paramSpecChar(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function paramSpecDouble(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function paramSpecEnum(name: string, nick: string, blurb: string, enum_type: Type, default_value: number, flags: ParamFlags): ParamSpec
export function paramSpecFlags(name: string, nick: string, blurb: string, flags_type: Type, default_value: number, flags: ParamFlags): ParamSpec
export function paramSpecFloat(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function paramSpecGtype(name: string, nick: string, blurb: string, is_a_type: Type, flags: ParamFlags): ParamSpec
export function paramSpecInt(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function paramSpecInt64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function paramSpecLong(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function paramSpecObject(name: string, nick: string, blurb: string, object_type: Type, flags: ParamFlags): ParamSpec
export function paramSpecParam(name: string, nick: string, blurb: string, param_type: Type, flags: ParamFlags): ParamSpec
export function paramSpecPointer(name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpec
export function paramSpecPoolNew(type_prefixing: boolean): ParamSpecPool
export function paramSpecString(name: string, nick: string, blurb: string, default_value: string | null, flags: ParamFlags): ParamSpec
export function paramSpecUchar(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function paramSpecUint(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function paramSpecUint64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function paramSpecUlong(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
export function paramSpecUnichar(name: string, nick: string, blurb: string, default_value: number, flags: ParamFlags): ParamSpec
export function paramSpecVariant(name: string, nick: string, blurb: string, type: GLib.VariantType, default_value: GLib.Variant | null, flags: ParamFlags): ParamSpec
export function paramTypeRegisterStatic(name: string, pspec_info: ParamSpecTypeInfo): Type
export function paramValueConvert(pspec: ParamSpec, src_value: Value, dest_value: Value, strict_validation: boolean): boolean
export function paramValueDefaults(pspec: ParamSpec, value: Value): boolean
export function paramValueSetDefault(pspec: ParamSpec, value: Value): void
export function paramValueValidate(pspec: ParamSpec, value: Value): boolean
export function paramValuesCmp(pspec: ParamSpec, value1: Value, value2: Value): number
export function pointerTypeRegisterStatic(name: string): Type
export function signalAccumulatorFirstWins(ihint: SignalInvocationHint, return_accu: Value, handler_return: Value, dummy?: object | null): boolean
export function signalAccumulatorTrueHandled(ihint: SignalInvocationHint, return_accu: Value, handler_return: Value, dummy?: object | null): boolean
export function signalAddEmissionHook(signal_id: number, detail: GLib.Quark, hook_func: SignalEmissionHook): number
export function signalChainFromOverridden(instance_and_params: Value[], return_value: Value): void
export function signalConnectClosure(instance: Object, detailed_signal: string, closure: Closure, after: boolean): number
export function signalConnectClosureById(instance: Object, signal_id: number, detail: GLib.Quark, closure: Closure, after: boolean): number
export function signalEmitv(instance_and_params: Value[], signal_id: number, detail: GLib.Quark, return_value: Value): void
export function signalGetInvocationHint(instance: Object): SignalInvocationHint
export function signalHandlerBlock(instance: Object, handler_id: number): void
export function signalHandlerDisconnect(instance: Object, handler_id: number): void
export function signalHandlerFind(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure?: Closure | null, func?: object | null, data?: object | null): number
export function signalHandlerIsConnected(instance: Object, handler_id: number): boolean
export function signalHandlerUnblock(instance: Object, handler_id: number): void
export function signalHandlersBlockMatched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure?: Closure | null, func?: object | null, data?: object | null): number
export function signalHandlersDestroy(instance: Object): void
export function signalHandlersDisconnectMatched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure?: Closure | null, func?: object | null, data?: object | null): number
export function signalHandlersUnblockMatched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, closure?: Closure | null, func?: object | null, data?: object | null): number
export function signalHasHandlerPending(instance: Object, signal_id: number, detail: GLib.Quark, may_be_blocked: boolean): boolean
export function signalListIds(itype: Type): number[]
export function signalLookup(name: string, itype: Type): number
export function signalName(signal_id: number): string
export function signalOverrideClassClosure(signal_id: number, instance_type: Type, class_closure: Closure): void
export function signalParseName(detailed_signal: string, itype: Type, force_detail_quark: boolean): [ /* returnType */ boolean, /* signal_id_p */ number, /* detail_p */ GLib.Quark ]
export function signalQuery(signal_id: number): /* query */ SignalQuery
export function signalRemoveEmissionHook(signal_id: number, hook_id: number): void
export function signalSetVaMarshaller(signal_id: number, instance_type: Type, va_marshaller: SignalCVaMarshaller): void
export function signalStopEmission(instance: Object, signal_id: number, detail: GLib.Quark): void
export function signalStopEmissionByName(instance: Object, detailed_signal: string): void
export function signalTypeCclosureNew(itype: Type, struct_offset: number): Closure
export function sourceSetClosure(source: GLib.Source, closure: Closure): void
export function sourceSetDummyCallback(source: GLib.Source): void
export function strdupValueContents(value: Value): string
export function typeAddClassPrivate(class_type: Type, private_size: number): void
export function typeAddInstancePrivate(class_type: Type, private_size: number): number
export function typeAddInterfaceDynamic(instance_type: Type, interface_type: Type, plugin: TypePlugin): void
export function typeAddInterfaceStatic(instance_type: Type, interface_type: Type, info: InterfaceInfo): void
export function typeCheckClassIsA(g_class: TypeClass, is_a_type: Type): boolean
export function typeCheckInstance(instance: TypeInstance): boolean
export function typeCheckInstanceIsA(instance: TypeInstance, iface_type: Type): boolean
export function typeCheckInstanceIsFundamentallyA(instance: TypeInstance, fundamental_type: Type): boolean
export function typeCheckIsValueType(type: Type): boolean
export function typeCheckValue(value: Value): boolean
export function typeCheckValueHolds(value: Value, type: Type): boolean
export function typeChildren(type: Type): Type[]
export function typeClassAdjustPrivateOffset(g_class: object | null, private_size_or_offset: number): void
export function typeClassPeek(type: Type): TypeClass
export function typeClassPeekStatic(type: Type): TypeClass
export function typeClassRef(type: Type): TypeClass
export function typeDefaultInterfacePeek(g_type: Type): TypeInterface
export function typeDefaultInterfaceRef(g_type: Type): TypeInterface
export function typeDefaultInterfaceUnref(g_iface: TypeInterface): void
export function typeDepth(type: Type): number
export function typeEnsure(type: Type): void
export function typeFreeInstance(instance: TypeInstance): void
export function typeFromName(name: string): Type
export function typeFundamental(type_id: Type): Type
export function typeFundamentalNext(): Type
export function typeGetInstanceCount(type: Type): number
export function typeGetPlugin(type: Type): TypePlugin
export function typeGetQdata(type: Type, quark: GLib.Quark): object | null
export function typeGetTypeRegistrationSerial(): number
export function typeInit(): void
export function typeInitWithDebugFlags(debug_flags: TypeDebugFlags): void
export function typeInterfaceAddPrerequisite(interface_type: Type, prerequisite_type: Type): void
export function typeInterfaceGetPlugin(instance_type: Type, interface_type: Type): TypePlugin
export function typeInterfacePeek(instance_class: TypeClass, iface_type: Type): TypeInterface
export function typeInterfacePrerequisites(interface_type: Type): Type[]
export function typeInterfaces(type: Type): Type[]
export function typeIsA(type: Type, is_a_type: Type): boolean
export function typeName(type: Type): string
export function typeNameFromClass(g_class: TypeClass): string
export function typeNameFromInstance(instance: TypeInstance): string
export function typeNextBase(leaf_type: Type, root_type: Type): Type
export function typeParent(type: Type): Type
export function typeQname(type: Type): GLib.Quark
export function typeQuery(type: Type): /* query */ TypeQuery
export function typeRegisterDynamic(parent_type: Type, type_name: string, plugin: TypePlugin, flags: TypeFlags): Type
export function typeRegisterFundamental(type_id: Type, type_name: string, info: TypeInfo, finfo: TypeFundamentalInfo, flags: TypeFlags): Type
export function typeRegisterStatic(parent_type: Type, type_name: string, info: TypeInfo, flags: TypeFlags): Type
export function typeSetQdata(type: Type, quark: GLib.Quark, data?: object | null): void
export function typeTestFlags(type: Type, flags: number): boolean
export function valueTypeCompatible(src_type: Type, dest_type: Type): boolean
export function valueTypeTransformable(src_type: Type, dest_type: Type): boolean
export interface BaseFinalizeFunc {
    (g_class: TypeClass): void
}
export interface BaseInitFunc {
    (g_class: TypeClass): void
}
export interface BindingTransformFunc {
    (binding: Binding, from_value: Value, to_value: Value): boolean
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
    (g_class: TypeClass, class_data?: object | null): void
}
export interface ClassInitFunc {
    (g_class: TypeClass, class_data?: object | null): void
}
export interface ClosureMarshal {
    (closure: Closure, return_value: Value | null, param_values: Value[], invocation_hint?: object | null, marshal_data?: object | null): void
}
export interface ClosureNotify {
    (data: object | null, closure: Closure): void
}
export interface InstanceInitFunc {
    (instance: TypeInstance, g_class: TypeClass): void
}
export interface InterfaceFinalizeFunc {
    (g_iface: TypeInterface, iface_data?: object | null): void
}
export interface InterfaceInitFunc {
    (g_iface: TypeInterface, iface_data?: object | null): void
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
    (ihint: SignalInvocationHint, return_accu: Value, handler_return: Value, data?: object | null): boolean
}
export interface SignalEmissionHook {
    (ihint: SignalInvocationHint, param_values: Value[], data?: object | null): boolean
}
export interface ToggleNotify {
    (data: object | null, object: Object, is_last_ref: boolean): void
}
export interface TypeClassCacheFunc {
    (cache_data: object | null, g_class: TypeClass): boolean
}
export interface TypeInterfaceCheckFunc {
    (check_data: object | null, g_iface: TypeInterface): void
}
export interface TypePluginCompleteInterfaceInfo {
    (plugin: TypePlugin, instance_type: Type, interface_type: Type, info: InterfaceInfo): void
}
export interface TypePluginCompleteTypeInfo {
    (plugin: TypePlugin, g_type: Type, info: TypeInfo, value_table: TypeValueTable): void
}
export interface TypePluginUnuse {
    (plugin: TypePlugin): void
}
export interface TypePluginUse {
    (plugin: TypePlugin): void
}
export interface ValueTransform {
    (src_value: Value, dest_value: Value): void
}
export interface WeakNotify {
    (data: object | null, where_the_object_was: Object): void
}
export class TypePlugin {
    /* Methods of GObject.TypePlugin */
    completeInterfaceInfo(instance_type: Type, interface_type: Type, info: InterfaceInfo): void
    completeTypeInfo(g_type: Type, info: TypeInfo, value_table: TypeValueTable): void
    unuse(): void
    use(): void
    static name: string
}
// Extra interfaces used to help define GObject classes in js; these
// aren't part of gi.
export interface SignalDefinition {
    flags?: SignalFlags;
    accumulator: number;
    return_type?: Type;
    param_types?: Type[];
}

export interface MetaInfo {
    GTypeName: string;
    GTypeFlags?: TypeFlags;
    Implements?: Function[];
    Properties?: {[K: string]: ParamSpec};
    Signals?: {[K: string]: SignalDefinition};
    Requires?: Function[];
    CssName?: string;
    Template?: string;
    Children?: string[];
    InternalChildren?: string[];
}

export const GTypeName: symbol;
export const requires: symbol;
export const interfaces: symbol;
export const properties: symbol;
export const signals: symbol;
export function registerClass(metaInfo: MetaInfo, klass: Function): Function;
export function registerClass(klass: Function): Function;
export function registerClass<T extends MetaInfo | Function>(a: T, b?: Function): Function;

export interface Binding_ConstructProps extends Object_ConstructProps {
    flags?:BindingFlags
    source?:Object
    source_property?:string
    target?:Object
    target_property?:string
}
export class Binding {
    /* Properties of GObject.Binding */
    /* Fields of GObject.Object */
    g_type_instance:TypeInstance
    /* Methods of GObject.Binding */
    getFlags(): BindingFlags
    getSource(): Object
    getSourceProperty(): string
    getTarget(): Object
    getTargetProperty(): string
    unbind(): void
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
    bindPropertyFull(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure): Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: ParamSpec): void
    ref(): Object
    refSink(): Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: Value, pspec: ParamSpec): void
    vfuncNotify?(pspec: ParamSpec): void
    vfuncSetProperty?(property_id: number, value: Value, pspec: ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Binding, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Binding, pspec: ParamSpec) => void)): number
    emit(sigName: "notify", pspec: ParamSpec): void
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
    constructor (config?: Binding_ConstructProps)
    _init (config?: Binding_ConstructProps): void
    static $gtype: Type
}
export interface InitiallyUnowned_ConstructProps extends Object_ConstructProps {
}
export class InitiallyUnowned {
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance:TypeInstance
    /* Fields of GObject.Object */
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
    bindPropertyFull(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure): Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: ParamSpec): void
    ref(): Object
    refSink(): Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: Value, pspec: ParamSpec): void
    vfuncNotify?(pspec: ParamSpec): void
    vfuncSetProperty?(property_id: number, value: Value, pspec: ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: InitiallyUnowned, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: InitiallyUnowned, pspec: ParamSpec) => void)): number
    emit(sigName: "notify", pspec: ParamSpec): void
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
    constructor (config?: InitiallyUnowned_ConstructProps)
    _init (config?: InitiallyUnowned_ConstructProps): void
    static $gtype: Type
}
export interface Object_ConstructProps  {
}
export class Object {
    /* Fields of GObject.Object */
    g_type_instance:TypeInstance
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
    bindPropertyFull(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure): Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: ParamSpec): void
    ref(): Object
    refSink(): Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: Value, pspec: ParamSpec): void
    vfuncNotify?(pspec: ParamSpec): void
    vfuncSetProperty?(property_id: number, value: Value, pspec: ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: Object, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: Object, pspec: ParamSpec) => void)): number
    emit(sigName: "notify", pspec: ParamSpec): void
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
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static newv(object_type: Type, parameters: Parameter[]): Object
    static compatControl(what: number, data?: object | null): number
    static interfaceFindProperty(g_iface: TypeInterface, property_name: string): ParamSpec
    static interfaceInstallProperty(g_iface: TypeInterface, pspec: ParamSpec): void
    static interfaceListProperties(g_iface: TypeInterface): ParamSpec[]
    static $gtype: Type
}
export class ParamSpec {
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecBoolean {
    /* Fields of GObject.ParamSpecBoolean */
    parent_instance:ParamSpec
    default_value:boolean
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecBoxed {
    /* Fields of GObject.ParamSpecBoxed */
    parent_instance:ParamSpec
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecChar {
    /* Fields of GObject.ParamSpecChar */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecDouble {
    /* Fields of GObject.ParamSpecDouble */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    epsilon:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecEnum {
    /* Fields of GObject.ParamSpecEnum */
    parent_instance:ParamSpec
    enum_class:EnumClass
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecFlags {
    /* Fields of GObject.ParamSpecFlags */
    parent_instance:ParamSpec
    flags_class:FlagsClass
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecFloat {
    /* Fields of GObject.ParamSpecFloat */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    epsilon:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecGType {
    /* Fields of GObject.ParamSpecGType */
    parent_instance:ParamSpec
    is_a_type:Type
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecInt {
    /* Fields of GObject.ParamSpecInt */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecInt64 {
    /* Fields of GObject.ParamSpecInt64 */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecLong {
    /* Fields of GObject.ParamSpecLong */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecObject {
    /* Fields of GObject.ParamSpecObject */
    parent_instance:ParamSpec
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecOverride {
    /* Fields of GObject.ParamSpecOverride */
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecParam {
    /* Fields of GObject.ParamSpecParam */
    parent_instance:ParamSpec
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecPointer {
    /* Fields of GObject.ParamSpecPointer */
    parent_instance:ParamSpec
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecString {
    /* Fields of GObject.ParamSpecString */
    parent_instance:ParamSpec
    default_value:string
    cset_first:string
    cset_nth:string
    substitutor:number
    null_fold_if_empty:number
    ensure_non_null:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecUChar {
    /* Fields of GObject.ParamSpecUChar */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecUInt {
    /* Fields of GObject.ParamSpecUInt */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecUInt64 {
    /* Fields of GObject.ParamSpecUInt64 */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecULong {
    /* Fields of GObject.ParamSpecULong */
    parent_instance:ParamSpec
    minimum:number
    maximum:number
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecUnichar {
    /* Fields of GObject.ParamSpecUnichar */
    parent_instance:ParamSpec
    default_value:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecValueArray {
    /* Fields of GObject.ParamSpecValueArray */
    parent_instance:ParamSpec
    element_spec:ParamSpec
    fixed_n_elements:number
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export class ParamSpecVariant {
    /* Fields of GObject.ParamSpecVariant */
    parent_instance:ParamSpec
    type:GLib.VariantType
    default_value:GLib.Variant
    /* Fields of GObject.ParamSpec */
    g_type_instance:TypeInstance
    name:string
    flags:ParamFlags
    value_type:Type
    owner_type:Type
    /* Methods of GObject.ParamSpec */
    getBlurb(): string
    getDefaultValue(): Value
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject.ParamSpec */
    vfuncFinalize?(): void
    vfuncValueSetDefault?(value: Value): void
    vfuncValueValidate?(value: Value): boolean
    vfuncValuesCmp?(value1: Value, value2: Value): number
    static name: string
}
export interface TypeModule_ConstructProps extends Object_ConstructProps {
}
export class TypeModule {
    /* Fields of GObject.TypeModule */
    parent_instance:Object
    use_count:number
    type_infos:object[]
    interface_infos:object[]
    name:string
    /* Fields of GObject.Object */
    g_type_instance:TypeInstance
    /* Methods of GObject.TypeModule */
    addInterface(instance_type: Type, interface_type: Type, interface_info: InterfaceInfo): void
    registerEnum(name: string, const_static_values: EnumValue): Type
    registerFlags(name: string, const_static_values: FlagsValue): Type
    registerType(parent_type: Type, type_name: string, type_info: TypeInfo, flags: TypeFlags): Type
    setName(name: string): void
    unuse(): void
    use(): boolean
    /* Methods of GObject.Object */
    bindProperty(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
    bindPropertyFull(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure): Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(property_name: string, value: Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: Value[]): void
    isFloating(): boolean
    notify(property_name: string): void
    notifyByPspec(pspec: ParamSpec): void
    ref(): Object
    refSink(): Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(property_name: string, value: Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Closure): void
    /* Methods of GObject.TypePlugin */
    completeInterfaceInfo(instance_type: Type, interface_type: Type, info: InterfaceInfo): void
    completeTypeInfo(g_type: Type, info: TypeInfo, value_table: TypeValueTable): void
    /* Virtual methods of GObject.TypeModule */
    vfuncLoad?(): boolean
    vfuncUnload?(): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed?(): void
    vfuncDispatchPropertiesChanged?(n_pspecs: number, pspecs: ParamSpec): void
    vfuncDispose?(): void
    vfuncFinalize?(): void
    vfuncGetProperty?(property_id: number, value: Value, pspec: ParamSpec): void
    vfuncNotify?(pspec: ParamSpec): void
    vfuncSetProperty?(property_id: number, value: Value, pspec: ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: ((obj: TypeModule, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: ((obj: TypeModule, pspec: ParamSpec) => void)): number
    emit(sigName: "notify", pspec: ParamSpec): void
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
    constructor (config?: TypeModule_ConstructProps)
    _init (config?: TypeModule_ConstructProps): void
    static $gtype: Type
}
export class CClosure {
    /* Fields of GObject.CClosure */
    closure:Closure
    callback:object
    static name: string
    static marshalBooleanBoxedBoxed(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalBooleanFlags(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalStringObjectPointer(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidBoolean(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidBoxed(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidChar(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidDouble(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidEnum(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidFlags(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidFloat(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidInt(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidLong(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidObject(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidParam(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidPointer(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidString(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidUchar(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidUint(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidUintPointer(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidUlong(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidVariant(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalVoidVoid(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshalGeneric(closure: Closure, return_gvalue: Value, n_param_values: number, param_values: Value, invocation_hint?: object | null, marshal_data?: object | null): void
}
export class Closure {
    /* Fields of GObject.Closure */
    in_marshal:number
    is_invalid:number
    marshal:any
    /* Methods of GObject.Closure */
    invalidate(): void
    invoke(param_values: Value[], invocation_hint?: object | null): /* return_value */ Value | null
    ref(): Closure
    sink(): void
    unref(): void
    static name: string
    static newObject(sizeof_closure: number, object: Object): Closure
    static newSimple(sizeof_closure: number, data?: object | null): Closure
}
export class ClosureNotifyData {
    /* Fields of GObject.ClosureNotifyData */
    data:object
    notify:ClosureNotify
    static name: string
}
export class EnumClass {
    /* Fields of GObject.EnumClass */
    g_type_class:TypeClass
    minimum:number
    maximum:number
    n_values:number
    values:EnumValue
    static name: string
}
export class EnumValue {
    /* Fields of GObject.EnumValue */
    value:number
    value_name:string
    value_nick:string
    static name: string
}
export class FlagsClass {
    /* Fields of GObject.FlagsClass */
    g_type_class:TypeClass
    mask:number
    n_values:number
    values:FlagsValue
    static name: string
}
export class FlagsValue {
    /* Fields of GObject.FlagsValue */
    value:number
    value_name:string
    value_nick:string
    static name: string
}
export class InterfaceInfo {
    /* Fields of GObject.InterfaceInfo */
    interface_init:InterfaceInitFunc
    interface_finalize:InterfaceFinalizeFunc
    interface_data:object
    static name: string
}
export class ObjectConstructParam {
    /* Fields of GObject.ObjectConstructParam */
    pspec:ParamSpec
    value:Value
    static name: string
}
export class ParamSpecPool {
    /* Methods of GObject.ParamSpecPool */
    insert(pspec: ParamSpec, owner_type: Type): void
    list(owner_type: Type): ParamSpec[]
    listOwned(owner_type: Type): ParamSpec[]
    lookup(param_name: string, owner_type: Type, walk_ancestors: boolean): ParamSpec
    remove(pspec: ParamSpec): void
    static name: string
}
export class ParamSpecTypeInfo {
    /* Fields of GObject.ParamSpecTypeInfo */
    instance_size:number
    n_preallocs:number
    instance_init:any
    value_type:Type
    finalize:any
    value_set_default:any
    value_validate:any
    values_cmp:any
    static name: string
}
export class Parameter {
    /* Fields of GObject.Parameter */
    name:string
    value:Value
    static name: string
}
export class SignalInvocationHint {
    /* Fields of GObject.SignalInvocationHint */
    signal_id:number
    detail:GLib.Quark
    run_type:SignalFlags
    static name: string
}
export class SignalQuery {
    /* Fields of GObject.SignalQuery */
    signal_id:number
    signal_name:string
    itype:Type
    signal_flags:SignalFlags
    return_type:Type
    n_params:number
    param_types:Type[]
    static name: string
}
export class TypeClass {
    /* Fields of GObject.TypeClass */
    /* Methods of GObject.TypeClass */
    addPrivate(private_size: number): void
    getPrivate(private_type: Type): object | null
    peekParent(): TypeClass
    unref(): void
    static name: string
    static adjustPrivateOffset(g_class: object | null, private_size_or_offset: number): void
    static peek(type: Type): TypeClass
    static peekStatic(type: Type): TypeClass
    static ref(type: Type): TypeClass
}
export class TypeFundamentalInfo {
    /* Fields of GObject.TypeFundamentalInfo */
    type_flags:TypeFundamentalFlags
    static name: string
}
export class TypeInfo {
    /* Fields of GObject.TypeInfo */
    class_size:number
    base_init:BaseInitFunc
    base_finalize:BaseFinalizeFunc
    class_init:ClassInitFunc
    class_finalize:ClassFinalizeFunc
    class_data:object
    instance_size:number
    n_preallocs:number
    instance_init:InstanceInitFunc
    value_table:TypeValueTable
    static name: string
}
export class TypeInstance {
    /* Fields of GObject.TypeInstance */
    /* Methods of GObject.TypeInstance */
    getPrivate(private_type: Type): object | null
    static name: string
}
export class TypeInterface {
    /* Fields of GObject.TypeInterface */
    /* Methods of GObject.TypeInterface */
    peekParent(): TypeInterface
    static name: string
    static addPrerequisite(interface_type: Type, prerequisite_type: Type): void
    static getPlugin(instance_type: Type, interface_type: Type): TypePlugin
    static peek(instance_class: TypeClass, iface_type: Type): TypeInterface
    static prerequisites(interface_type: Type): Type[]
}
export class TypePluginClass {
    /* Fields of GObject.TypePluginClass */
    use_plugin:TypePluginUse
    unuse_plugin:TypePluginUnuse
    complete_type_info:TypePluginCompleteTypeInfo
    complete_interface_info:TypePluginCompleteInterfaceInfo
    static name: string
}
export class TypeQuery {
    /* Fields of GObject.TypeQuery */
    type:Type
    type_name:string
    class_size:number
    instance_size:number
    static name: string
}
export class TypeValueTable {
    /* Fields of GObject.TypeValueTable */
    value_init:any
    value_free:any
    value_copy:any
    value_peek_pointer:any
    collect_format:string
    collect_value:any
    lcopy_format:string
    lcopy_value:any
    static name: string
}
export class Value {
    /* Fields of GObject.Value */
    data:_Value__data__union[]
    /* Methods of GObject.Value */
    copy(dest_value: Value): void
    dupObject(): Object
    dupString(): string
    dupVariant(): GLib.Variant | null
    fitsPointer(): boolean
    getBoolean(): boolean
    getBoxed(): object | null
    getChar(): number
    getDouble(): number
    getEnum(): number
    getFlags(): number
    getFloat(): number
    getGtype(): Type
    getInt(): number
    getInt64(): number
    getLong(): number
    getObject(): Object
    getParam(): ParamSpec
    getPointer(): object | null
    getSchar(): number
    getString(): string
    getUchar(): number
    getUint(): number
    getUint64(): number
    getUlong(): number
    getVariant(): GLib.Variant | null
    init(g_type: Type): Value
    initFromInstance(instance: TypeInstance): void
    peekPointer(): object | null
    reset(): Value
    setBoolean(v_boolean: boolean): void
    setBoxed(v_boxed?: object | null): void
    setBoxedTakeOwnership(v_boxed?: object | null): void
    setChar(v_char: number): void
    setDouble(v_double: number): void
    setEnum(v_enum: number): void
    setFlags(v_flags: number): void
    setFloat(v_float: number): void
    setGtype(v_gtype: Type): void
    setInstance(instance?: object | null): void
    setInt(v_int: number): void
    setInt64(v_int64: number): void
    setLong(v_long: number): void
    setObject(v_object?: Object | null): void
    setParam(param?: ParamSpec | null): void
    setPointer(v_pointer?: object | null): void
    setSchar(v_char: number): void
    setStaticBoxed(v_boxed?: object | null): void
    setStaticString(v_string?: string | null): void
    setString(v_string?: string | null): void
    setStringTakeOwnership(v_string?: string | null): void
    setUchar(v_uchar: number): void
    setUint(v_uint: number): void
    setUint64(v_uint64: number): void
    setUlong(v_ulong: number): void
    setVariant(variant?: GLib.Variant | null): void
    takeBoxed(v_boxed?: object | null): void
    takeString(v_string?: string | null): void
    takeVariant(variant?: GLib.Variant | null): void
    transform(dest_value: Value): boolean
    unset(): void
    static name: string
    static typeCompatible(src_type: Type, dest_type: Type): boolean
    static typeTransformable(src_type: Type, dest_type: Type): boolean
}
export class ValueArray {
    /* Fields of GObject.ValueArray */
    n_values:number
    values:Value
    /* Methods of GObject.ValueArray */
    append(value?: Value | null): ValueArray
    copy(): ValueArray
    getNth(index_: number): Value
    insert(index_: number, value?: Value | null): ValueArray
    prepend(value?: Value | null): ValueArray
    remove(index_: number): ValueArray
    sort(compare_func: GLib.CompareDataFunc): ValueArray
    static name: string
    static new(n_prealloced: number): ValueArray
    constructor(n_prealloced: number)
    static new(n_prealloced: number): ValueArray
}
export class WeakRef {
    /* Methods of GObject.WeakRef */
    static name: string
}
export class TypeCValue {
    static name: string
}
export class _Value__data__union {
    /* Fields of GObject._Value__data__union */
    v_int:number
    v_uint:number
    v_long:number
    v_ulong:number
    v_int64:number
    v_uint64:number
    v_float:number
    v_double:number
    v_pointer:object
    static name: string
}
type SignalCMarshaller = ClosureMarshal
type SignalCVaMarshaller = any
export interface Type {
    name: string
}
}