/**
 * GObject-2.0
 */

import "node"
import type { GLib } from './GLib-2.0';

export declare namespace GObject {

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
    ACCUMULATOR_FIRST_RUN,
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
    FINAL,
}
export enum TypeFundamentalFlags {
    CLASSED,
    INSTANTIATABLE,
    DERIVABLE,
    DEEP_DERIVABLE,
}
export const PARAM_MASK: number
export const PARAM_STATIC_STRINGS: number
export const PARAM_USER_SHIFT: number
export const SIGNAL_FLAGS_MASK: number
export const SIGNAL_MATCH_MASK: number
export const TYPE_FLAG_RESERVED_ID_BIT: GLib.Type
export const TYPE_FUNDAMENTAL_MAX: number
export const TYPE_FUNDAMENTAL_SHIFT: number
export const TYPE_RESERVED_BSE_FIRST: number
export const TYPE_RESERVED_BSE_LAST: number
export const TYPE_RESERVED_GLIB_FIRST: number
export const TYPE_RESERVED_GLIB_LAST: number
export const TYPE_RESERVED_USER_FIRST: number
export const VALUE_INTERNED_STRING: number
export const VALUE_NOCOPY_CONTENTS: number
export function boxedCopy(boxedType: Type, srcBoxed: object): object
export function boxedFree(boxedType: Type, boxed: object): void
export function cclosureMarshalBOOLEANBOXEDBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalBOOLEANFLAGS(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalSTRINGOBJECTPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDBOOLEAN(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDCHAR(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDDOUBLE(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDENUM(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDFLAGS(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDFLOAT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDLONG(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDPARAM(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDSTRING(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDUCHAR(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDUINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDUINTPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDULONG(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDVARIANT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalVOIDVOID(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function cclosureMarshalGeneric(closure: Function, returnGvalue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function clearSignalHandler(handlerIdPtr: number, instance: Object): void
export function enumCompleteTypeInfo(gEnumType: Type, constValues: EnumValue): { info: TypeInfo }
export function enumGetValue(enumClass: EnumClass, value: number): EnumValue | null
export function enumGetValueByName(enumClass: EnumClass, name: string): EnumValue | null
export function enumGetValueByNick(enumClass: EnumClass, nick: string): EnumValue | null
export function enumRegisterStatic(name: string, constStaticValues: EnumValue): Type
export function enumToString(gEnumType: Type, value: number): string
export function flagsCompleteTypeInfo(gFlagsType: Type, constValues: FlagsValue): { info: TypeInfo }
export function flagsGetFirstValue(flagsClass: FlagsClass, value: number): FlagsValue | null
export function flagsGetValueByName(flagsClass: FlagsClass, name: string): FlagsValue | null
export function flagsGetValueByNick(flagsClass: FlagsClass, nick: string): FlagsValue | null
export function flagsRegisterStatic(name: string, constStaticValues: FlagsValue): Type
export function flagsToString(flagsType: Type, value: number): string
export function gtypeGetType(): Type
export function paramSpecBoolean(name: string, nick: string, blurb: string, defaultValue: boolean, flags: ParamFlags): ParamSpec
export function paramSpecBoxed(name: string, nick: string, blurb: string, boxedType: Type, flags: ParamFlags): ParamSpec
export function paramSpecChar(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
export function paramSpecDouble(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
export function paramSpecEnum(name: string, nick: string, blurb: string, enumType: Type, defaultValue: number, flags: ParamFlags): ParamSpec
export function paramSpecFlags(name: string, nick: string, blurb: string, flagsType: Type, defaultValue: number, flags: ParamFlags): ParamSpec
export function paramSpecFloat(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
export function paramSpecGtype(name: string, nick: string, blurb: string, isAType: Type, flags: ParamFlags): ParamSpec
export function paramSpecInt(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
export function paramSpecInt64(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
export function paramSpecLong(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
export function paramSpecObject(name: string, nick: string, blurb: string, objectType: Type, flags: ParamFlags): ParamSpec
export function paramSpecParam(name: string, nick: string, blurb: string, paramType: Type, flags: ParamFlags): ParamSpec
export function paramSpecPointer(name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpec
export function paramSpecString(name: string, nick: string, blurb: string, defaultValue: string | null, flags: ParamFlags): ParamSpec
export function paramSpecUchar(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
export function paramSpecUint(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
export function paramSpecUint64(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
export function paramSpecUlong(name: string, nick: string, blurb: string, minimum: number, maximum: number, defaultValue: number, flags: ParamFlags): ParamSpec
export function paramSpecUnichar(name: string, nick: string, blurb: string, defaultValue: number, flags: ParamFlags): ParamSpec
export function paramSpecVariant(name: string, nick: string, blurb: string, type: GLib.VariantType, defaultValue: GLib.Variant | null, flags: ParamFlags): ParamSpec
export function paramTypeRegisterStatic(name: string, pspecInfo: ParamSpecTypeInfo): Type
export function paramValueConvert(pspec: ParamSpec, srcValue: any, destValue: any, strictValidation: boolean): boolean
export function paramValueDefaults(pspec: ParamSpec, value: any): boolean
export function paramValueSetDefault(pspec: ParamSpec, value: any): void
export function paramValueValidate(pspec: ParamSpec, value: any): boolean
export function paramValuesCmp(pspec: ParamSpec, value1: any, value2: any): number
export function pointerTypeRegisterStatic(name: string): Type
export function signalAccumulatorFirstWins(ihint: SignalInvocationHint, returnAccu: any, handlerReturn: any, dummy?: object | null): boolean
export function signalAccumulatorTrueHandled(ihint: SignalInvocationHint, returnAccu: any, handlerReturn: any, dummy?: object | null): boolean
export function signalAddEmissionHook(signalId: number, detail: GLib.Quark): number
export function signalChainFromOverridden(instanceAndParams: any[], returnValue: any): void
export function signalConnectClosure(instance: Object, detailedSignal: string, closure: Function, after: boolean): number
export function signalConnectClosureById(instance: Object, signalId: number, detail: GLib.Quark, closure: Function, after: boolean): number
export function signalEmitv(instanceAndParams: any[], signalId: number, detail: GLib.Quark, returnValue?: any | null): { returnValue: any | null }
export function signalGetInvocationHint(instance: Object): SignalInvocationHint | null
export function signalHandlerBlock(instance: Object, handlerId: number): void
export function signalHandlerDisconnect(instance: Object, handlerId: number): void
export function signalHandlerFind(instance: Object, mask: SignalMatchType, signalId: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
export function signalHandlerIsConnected(instance: Object, handlerId: number): boolean
export function signalHandlerUnblock(instance: Object, handlerId: number): void
export function signalHandlersBlockMatched(instance: Object, mask: SignalMatchType, signalId: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
export function signalHandlersDestroy(instance: Object): void
export function signalHandlersDisconnectMatched(instance: Object, mask: SignalMatchType, signalId: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
export function signalHandlersUnblockMatched(instance: Object, mask: SignalMatchType, signalId: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
export function signalHasHandlerPending(instance: Object, signalId: number, detail: GLib.Quark, mayBeBlocked: boolean): boolean
export function signalIsValidName(name: string): boolean
export function signalListIds(itype: Type): number[]
export function signalLookup(name: string, itype: Type): number
export function signalName(signalId: number): string | null
export function signalOverrideClassClosure(signalId: number, instanceType: Type, classClosure: Function): void
export function signalParseName(detailedSignal: string, itype: Type, forceDetailQuark: boolean): { returnType: boolean, signalIdP: number, detailP: GLib.Quark }
export function signalQuery(signalId: number): { query: SignalQuery }
export function signalRemoveEmissionHook(signalId: number, hookId: number): void
export function signalSetVaMarshaller(signalId: number, instanceType: Type, vaMarshaller: SignalCVaMarshaller): void
export function signalStopEmission(instance: Object, signalId: number, detail: GLib.Quark): void
export function signalStopEmissionByName(instance: Object, detailedSignal: string): void
export function signalTypeCclosureNew(itype: Type, structOffset: number): Function
export function sourceSetClosure(source: GLib.Source, closure: Function): void
export function sourceSetDummyCallback(source: GLib.Source): void
export function strdupValueContents(value: any): string
export function typeAddClassPrivate(classType: Type, privateSize: number): void
export function typeAddInstancePrivate(classType: Type, privateSize: number): number
export function typeAddInterfaceDynamic(instanceType: Type, interfaceType: Type, plugin: TypePlugin): void
export function typeAddInterfaceStatic(instanceType: Type, interfaceType: Type, info: InterfaceInfo): void
export function typeCheckClassIsA(gClass: TypeClass, isAType: Type): boolean
export function typeCheckInstance(instance: TypeInstance): boolean
export function typeCheckInstanceIsA(instance: TypeInstance, ifaceType: Type): boolean
export function typeCheckInstanceIsFundamentallyA(instance: TypeInstance, fundamentalType: Type): boolean
export function typeCheckIsValueType(type: Type): boolean
export function typeCheckValue(value: any): boolean
export function typeCheckValueHolds(value: any, type: Type): boolean
export function typeChildren(type: Type): Type[]
export function typeClassAdjustPrivateOffset(gClass: object | null, privateSizeOrOffset: number): void
export function typeClassPeek(type: Type): TypeClass
export function typeClassPeekStatic(type: Type): TypeClass
export function typeClassRef(type: Type): TypeClass
export function typeDefaultInterfacePeek(gType: Type): TypeInterface
export function typeDefaultInterfaceRef(gType: Type): TypeInterface
export function typeDefaultInterfaceUnref(gIface: TypeInterface): void
export function typeDepth(type: Type): number
export function typeEnsure(type: Type): void
export function typeFreeInstance(instance: TypeInstance): void
export function typeFromName(name: string): Type
export function typeFundamental(typeId: Type): Type
export function typeFundamentalNext(): Type
export function typeGetInstanceCount(type: Type): number
export function typeGetPlugin(type: Type): TypePlugin
export function typeGetQdata(type: Type, quark: GLib.Quark): object | null
export function typeGetTypeRegistrationSerial(): number
export function typeInit(): void
export function typeInitWithDebugFlags(debugFlags: TypeDebugFlags): void
export function typeInterfaceAddPrerequisite(interfaceType: Type, prerequisiteType: Type): void
export function typeInterfaceGetPlugin(instanceType: Type, interfaceType: Type): TypePlugin
export function typeInterfaceInstantiatablePrerequisite(interfaceType: Type): Type
export function typeInterfacePeek(instanceClass: TypeClass, ifaceType: Type): TypeInterface
export function typeInterfacePrerequisites(interfaceType: Type): Type[]
export function typeInterfaces(type: Type): Type[]
export function typeIsA(type: Type, isAType: Type): boolean
export function typeName(type: Type): string
export function typeNameFromClass(gClass: TypeClass): string
export function typeNameFromInstance(instance: TypeInstance): string
export function typeNextBase(leafType: Type, rootType: Type): Type
export function typeParent(type: Type): Type
export function typeQname(type: Type): GLib.Quark
export function typeQuery(type: Type): { query: TypeQuery }
export function typeRegisterDynamic(parentType: Type, typeName: string, plugin: TypePlugin, flags: TypeFlags): Type
export function typeRegisterFundamental(typeId: Type, typeName: string, info: TypeInfo, finfo: TypeFundamentalInfo, flags: TypeFlags): Type
export function typeRegisterStatic(parentType: Type, typeName: string, info: TypeInfo, flags: TypeFlags): Type
export function typeSetQdata(type: Type, quark: GLib.Quark, data?: object | null): void
export function typeTestFlags(type: Type, flags: number): boolean
export function valueTypeCompatible(srcType: Type, destType: Type): boolean
export function valueTypeTransformable(srcType: Type, destType: Type): boolean
export interface BaseFinalizeFunc {
    (gClass: TypeClass): void
}
export interface BaseInitFunc {
    (gClass: TypeClass): void
}
export interface BindingTransformFunc {
    (binding: Binding, fromValue: any, toValue: any): boolean
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
    (gClass: TypeClass, classData?: object | null): void
}
export interface ClassInitFunc {
    (gClass: TypeClass, classData?: object | null): void
}
export interface ClosureMarshal {
    (closure: Function, returnValue: any | null, paramValues: any[], invocationHint?: object | null, marshalData?: object | null): void
}
export interface ClosureNotify {
    (data: object | null, closure: Function): void
}
export interface InstanceInitFunc {
    (instance: TypeInstance, gClass: TypeClass): void
}
export interface InterfaceFinalizeFunc {
    (gIface: TypeInterface, ifaceData?: object | null): void
}
export interface InterfaceInitFunc {
    (gIface: TypeInterface, ifaceData?: object | null): void
}
export interface ObjectFinalizeFunc {
    (object: Object): void
}
export interface ObjectGetPropertyFunc {
    (object: Object, propertyId: number, value: any, pspec: ParamSpec): void
}
export interface ObjectSetPropertyFunc {
    (object: Object, propertyId: number, value: any, pspec: ParamSpec): void
}
export interface SignalAccumulator {
    (ihint: SignalInvocationHint, returnAccu: any, handlerReturn: any, data?: object | null): boolean
}
export interface SignalEmissionHook {
    (ihint: SignalInvocationHint, paramValues: any[], data?: object | null): boolean
}
export interface ToggleNotify {
    (data: object | null, object: Object, isLastRef: boolean): void
}
export interface TypeClassCacheFunc {
    (cacheData: object | null, gClass: TypeClass): boolean
}
export interface TypeInterfaceCheckFunc {
    (checkData: object | null, gIface: TypeInterface): void
}
export interface TypePluginCompleteInterfaceInfo {
    (plugin: TypePlugin, instanceType: Type, interfaceType: Type, info: InterfaceInfo): void
}
export interface TypePluginCompleteTypeInfo {
    (plugin: TypePlugin, gType: Type, info: TypeInfo, valueTable: TypeValueTable): void
}
export interface TypePluginUnuse {
    (plugin: TypePlugin): void
}
export interface TypePluginUse {
    (plugin: TypePlugin): void
}
export interface ValueTransform {
    (srcValue: any, destValue: any): void
}
export interface WeakNotify {
    (data: object | null, whereTheObjectWas: Object): void
}
export class TypePlugin {
    /* Methods of GObject-2.0.GObject.TypePlugin */
    completeInterfaceInfo(instanceType: Type, interfaceType: Type, info: InterfaceInfo): void
    completeTypeInfo(gType: Type, info: TypeInfo, valueTable: TypeValueTable): void
    unuse(): void
    use(): void
    static name: string
}
// Extra interfaces used to help define GObject classes in js; these
// aren't part of gi.
export interface SignalDefinition {
    flags?: SignalFlags
    accumulator: number
    return_type?: Type
    param_types?: Type[]
}

export interface MetaInfo {
    GTypeName: string
    GTypeFlags?: TypeFlags
    Implements?: Function[]
    Properties?: { [K: string]: ParamSpec }
    Signals?: { [K: string]: SignalDefinition }
    Requires?: Function[]
    CssName?: string
    Template?: string
    Children?: string[]
    InternalChildren?: string[]
}

export const GTypeName: symbol
export const requires: symbol
export const interfaces: symbol
export const properties: symbol
export const signals: symbol
export function registerClass(metaInfo: MetaInfo, cls: Function): Function
export function registerClass(cls: Function): Function
export function registerClass<T extends MetaInfo | Function>(a: T, b?: Function): Function

export interface Binding_ConstructProps extends Object_ConstructProps {
    flags?: BindingFlags
    source?: Object
    sourceProperty?: string
    target?: Object
    targetProperty?: string
}
export class Binding {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: TypeInstance
    /* Methods of GObject-2.0.GObject.Binding */
    dupSource(): Object | null
    dupTarget(): Object | null
    getFlags(): BindingFlags
    getSource(): Object | null
    getSourceProperty(): string
    getTarget(): Object | null
    getTargetProperty(): string
    unbind(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags): Binding
    bindPropertyFull(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo: Function, transformFrom: Function): Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: ParamSpec): void
    ref(): Object
    refSink(): Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Binding, pspec: ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: ParamSpec): void
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
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags): Binding
    bindPropertyFull(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo: Function, transformFrom: Function): Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: ParamSpec): void
    ref(): Object
    refSink(): Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: InitiallyUnowned, pspec: ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: ParamSpec): void
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
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags): Binding
    bindPropertyFull(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo: Function, transformFrom: Function): Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: ParamSpec): void
    ref(): Object
    refSink(): Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: ParamSpec): void
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
    /* Static methods and pseudo-constructors */
    static newv(objectType: Type, parameters: Parameter[]): Object
    static compatControl(what: number, data?: object | null): number
    static interfaceFindProperty(gIface: TypeInterface, propertyName: string): ParamSpec
    static interfaceInstallProperty(gIface: TypeInterface, pspec: ParamSpec): void
    static interfaceListProperties(gIface: TypeInterface): ParamSpec[]
    static findProperty(oclass: Object | Function | Type, propertyName: string): ParamSpec
    static installProperties(oclass: Object | Function | Type, pspecs: ParamSpec[]): void
    static installProperty(oclass: Object | Function | Type, propertyId: number, pspec: ParamSpec): void
    static listProperties(oclass: Object | Function | Type): ParamSpec[]
    static overrideProperty(oclass: Object | Function | Type, propertyId: number, name: string): void
    static $gtype: Type
}
export class ParamSpec {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
    /* Static methods and pseudo-constructors */
    static isValidName(name: string): boolean
}
export class ParamSpecBoolean {
    /* Fields of GObject-2.0.GObject.ParamSpecBoolean */
    parentInstance: ParamSpec
    defaultValue: boolean
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecBoxed {
    /* Fields of GObject-2.0.GObject.ParamSpecBoxed */
    parentInstance: ParamSpec
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecChar {
    /* Fields of GObject-2.0.GObject.ParamSpecChar */
    parentInstance: ParamSpec
    minimum: number
    maximum: number
    defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecDouble {
    /* Fields of GObject-2.0.GObject.ParamSpecDouble */
    parentInstance: ParamSpec
    minimum: number
    maximum: number
    defaultValue: number
    epsilon: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecEnum {
    /* Fields of GObject-2.0.GObject.ParamSpecEnum */
    parentInstance: ParamSpec
    enumClass: EnumClass
    defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecFlags {
    /* Fields of GObject-2.0.GObject.ParamSpecFlags */
    parentInstance: ParamSpec
    flagsClass: FlagsClass
    defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecFloat {
    /* Fields of GObject-2.0.GObject.ParamSpecFloat */
    parentInstance: ParamSpec
    minimum: number
    maximum: number
    defaultValue: number
    epsilon: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecGType {
    /* Fields of GObject-2.0.GObject.ParamSpecGType */
    parentInstance: ParamSpec
    isAType: Type
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecInt {
    /* Fields of GObject-2.0.GObject.ParamSpecInt */
    parentInstance: ParamSpec
    minimum: number
    maximum: number
    defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecInt64 {
    /* Fields of GObject-2.0.GObject.ParamSpecInt64 */
    parentInstance: ParamSpec
    minimum: number
    maximum: number
    defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecLong {
    /* Fields of GObject-2.0.GObject.ParamSpecLong */
    parentInstance: ParamSpec
    minimum: number
    maximum: number
    defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecObject {
    /* Fields of GObject-2.0.GObject.ParamSpecObject */
    parentInstance: ParamSpec
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecOverride {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecParam {
    /* Fields of GObject-2.0.GObject.ParamSpecParam */
    parentInstance: ParamSpec
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecPointer {
    /* Fields of GObject-2.0.GObject.ParamSpecPointer */
    parentInstance: ParamSpec
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecString {
    /* Fields of GObject-2.0.GObject.ParamSpecString */
    parentInstance: ParamSpec
    defaultValue: string
    csetFirst: string
    csetNth: string
    substitutor: number
    nullFoldIfEmpty: number
    ensureNonNull: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecUChar {
    /* Fields of GObject-2.0.GObject.ParamSpecUChar */
    parentInstance: ParamSpec
    minimum: number
    maximum: number
    defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecUInt {
    /* Fields of GObject-2.0.GObject.ParamSpecUInt */
    parentInstance: ParamSpec
    minimum: number
    maximum: number
    defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecUInt64 {
    /* Fields of GObject-2.0.GObject.ParamSpecUInt64 */
    parentInstance: ParamSpec
    minimum: number
    maximum: number
    defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecULong {
    /* Fields of GObject-2.0.GObject.ParamSpecULong */
    parentInstance: ParamSpec
    minimum: number
    maximum: number
    defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecUnichar {
    /* Fields of GObject-2.0.GObject.ParamSpecUnichar */
    parentInstance: ParamSpec
    defaultValue: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecValueArray {
    /* Fields of GObject-2.0.GObject.ParamSpecValueArray */
    parentInstance: ParamSpec
    elementSpec: ParamSpec
    fixedNElements: number
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export class ParamSpecVariant {
    /* Fields of GObject-2.0.GObject.ParamSpecVariant */
    parentInstance: ParamSpec
    type: GLib.VariantType
    defaultValue: GLib.Variant
    /* Fields of GObject-2.0.GObject.ParamSpec */
    gTypeInstance: TypeInstance
    name: string
    flags: ParamFlags
    valueType: Type
    ownerType: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
export interface TypeModule_ConstructProps extends Object_ConstructProps {
}
export class TypeModule {
    /* Fields of GObject-2.0.GObject.TypeModule */
    parentInstance: Object
    useCount: number
    typeInfos: object[]
    interfaceInfos: object[]
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: TypeInstance
    /* Methods of GObject-2.0.GObject.TypeModule */
    addInterface(instanceType: Type, interfaceType: Type, interfaceInfo: InterfaceInfo): void
    registerEnum(name: string, constStaticValues: EnumValue): Type
    registerFlags(name: string, constStaticValues: FlagsValue): Type
    registerType(parentType: Type, typeName: string, typeInfo: TypeInfo, flags: TypeFlags): Type
    setName(name: string): void
    unuse(): void
    use(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags): Binding
    bindPropertyFull(sourceProperty: string, target: Object, targetProperty: string, flags: BindingFlags, transformTo: Function, transformFrom: Function): Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: ParamSpec): void
    ref(): Object
    refSink(): Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GObject-2.0.GObject.TypePlugin */
    completeInterfaceInfo(instanceType: Type, interfaceType: Type, info: InterfaceInfo): void
    completeTypeInfo(gType: Type, info: TypeInfo, valueTable: TypeValueTable): void
    use(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TypeModule, pspec: ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: ParamSpec): void
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
    /* Fields of GObject-2.0.GObject.CClosure */
    closure: Function
    callback: object
    static name: string
    /* Static methods and pseudo-constructors */
    static marshalBOOLEANBOXEDBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalBOOLEANFLAGS(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalSTRINGOBJECTPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDBOOLEAN(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDBOXED(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDCHAR(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDDOUBLE(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDENUM(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDFLAGS(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDFLOAT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDLONG(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDOBJECT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDPARAM(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDSTRING(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDUCHAR(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDUINT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDUINTPOINTER(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDULONG(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDVARIANT(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalVOIDVOID(closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
    static marshalGeneric(closure: Function, returnGvalue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
}
export class Closure {
    /* Fields of GObject-2.0.GObject.Closure */
    inMarshal: number
    isInvalid: number
    marshal: (closure: Function, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object, marshalData: object) => void
    /* Methods of GObject-2.0.GObject.Closure */
    invalidate(): void
    invoke(paramValues: any[], invocationHint?: object | null): { returnValue: any | null }
    ref(): Function
    sink(): void
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newObject(sizeofClosure: number, object: Object): Closure
    static newSimple(sizeofClosure: number, data?: object | null): Closure
}
export class ClosureNotifyData {
    /* Fields of GObject-2.0.GObject.ClosureNotifyData */
    data: object
    notify: ClosureNotify
    static name: string
}
export class EnumClass {
    /* Fields of GObject-2.0.GObject.EnumClass */
    gTypeClass: TypeClass
    minimum: number
    maximum: number
    nValues: number
    values: EnumValue
    static name: string
}
export class EnumValue {
    /* Fields of GObject-2.0.GObject.EnumValue */
    value: number
    valueName: string
    valueNick: string
    static name: string
}
export class FlagsClass {
    /* Fields of GObject-2.0.GObject.FlagsClass */
    gTypeClass: TypeClass
    mask: number
    nValues: number
    values: FlagsValue
    static name: string
}
export class FlagsValue {
    /* Fields of GObject-2.0.GObject.FlagsValue */
    value: number
    valueName: string
    valueNick: string
    static name: string
}
export abstract class InitiallyUnownedClass {
    /* Fields of GObject-2.0.GObject.InitiallyUnownedClass */
    gTypeClass: TypeClass
    setProperty: (object: Object, propertyId: number, value: any, pspec: ParamSpec) => void
    getProperty: (object: Object, propertyId: number, value: any, pspec: ParamSpec) => void
    dispose: (object: Object) => void
    finalize: (object: Object) => void
    dispatchPropertiesChanged: (object: Object, nPspecs: number, pspecs: ParamSpec) => void
    notify: (object: Object, pspec: ParamSpec) => void
    constructed: (object: Object) => void
    static name: string
}
export class InterfaceInfo {
    /* Fields of GObject-2.0.GObject.InterfaceInfo */
    interfaceInit: InterfaceInitFunc
    interfaceFinalize: InterfaceFinalizeFunc
    interfaceData: object
    static name: string
}
export abstract class ObjectClass {
    /* Fields of GObject-2.0.GObject.ObjectClass */
    gTypeClass: TypeClass
    setProperty: (object: Object, propertyId: number, value: any, pspec: ParamSpec) => void
    getProperty: (object: Object, propertyId: number, value: any, pspec: ParamSpec) => void
    dispose: (object: Object) => void
    finalize: (object: Object) => void
    dispatchPropertiesChanged: (object: Object, nPspecs: number, pspecs: ParamSpec) => void
    notify: (object: Object, pspec: ParamSpec) => void
    constructed: (object: Object) => void
    /* Methods of GObject-2.0.GObject.ObjectClass */
    findProperty(oclass: Object | Function | Type, propertyName: string): ParamSpec
    installProperties(oclass: Object | Function | Type, pspecs: ParamSpec[]): void
    installProperty(oclass: Object | Function | Type, propertyId: number, pspec: ParamSpec): void
    listProperties(oclass: Object | Function | Type): ParamSpec[]
    overrideProperty(oclass: Object | Function | Type, propertyId: number, name: string): void
    static name: string
}
export class ObjectConstructParam {
    /* Fields of GObject-2.0.GObject.ObjectConstructParam */
    pspec: ParamSpec
    value: any
    static name: string
}
export abstract class ParamSpecClass {
    /* Fields of GObject-2.0.GObject.ParamSpecClass */
    gTypeClass: TypeClass
    valueType: Type
    finalize: (pspec: ParamSpec) => void
    valueSetDefault: (pspec: ParamSpec, value: any) => void
    valueValidate: (pspec: ParamSpec, value: any) => boolean
    valuesCmp: (pspec: ParamSpec, value1: any, value2: any) => number
    static name: string
}
export class ParamSpecPool {
    /* Methods of GObject-2.0.GObject.ParamSpecPool */
    insert(pspec: ParamSpec, ownerType: Type): void
    list(ownerType: Type): ParamSpec[]
    listOwned(ownerType: Type): ParamSpec[]
    lookup(paramName: string, ownerType: Type, walkAncestors: boolean): ParamSpec | null
    remove(pspec: ParamSpec): void
    static name: string
}
export class ParamSpecTypeInfo {
    /* Fields of GObject-2.0.GObject.ParamSpecTypeInfo */
    instanceSize: number
    nPreallocs: number
    instanceInit: (pspec: ParamSpec) => void
    valueType: Type
    finalize: (pspec: ParamSpec) => void
    valueSetDefault: (pspec: ParamSpec, value: any) => void
    valueValidate: (pspec: ParamSpec, value: any) => boolean
    valuesCmp: (pspec: ParamSpec, value1: any, value2: any) => number
    static name: string
}
export class Parameter {
    /* Fields of GObject-2.0.GObject.Parameter */
    name: string
    value: any
    static name: string
}
export class SignalInvocationHint {
    /* Fields of GObject-2.0.GObject.SignalInvocationHint */
    signalId: number
    detail: GLib.Quark
    runType: SignalFlags
    static name: string
}
export class SignalQuery {
    /* Fields of GObject-2.0.GObject.SignalQuery */
    signalId: number
    signalName: string
    itype: Type
    signalFlags: SignalFlags
    returnType: Type
    nParams: number
    paramTypes: Type[]
    static name: string
}
export class TypeClass {
    /* Methods of GObject-2.0.GObject.TypeClass */
    addPrivate(privateSize: number): void
    getPrivate(privateType: Type): object | null
    peekParent(): TypeClass
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static adjustPrivateOffset(gClass: object | null, privateSizeOrOffset: number): void
    static peek(type: Type): TypeClass
    static peekStatic(type: Type): TypeClass
    static ref(type: Type): TypeClass
}
export class TypeFundamentalInfo {
    /* Fields of GObject-2.0.GObject.TypeFundamentalInfo */
    typeFlags: TypeFundamentalFlags
    static name: string
}
export class TypeInfo {
    /* Fields of GObject-2.0.GObject.TypeInfo */
    classSize: number
    baseInit: BaseInitFunc
    baseFinalize: BaseFinalizeFunc
    classInit: ClassInitFunc
    classFinalize: ClassFinalizeFunc
    classData: object
    instanceSize: number
    nPreallocs: number
    instanceInit: InstanceInitFunc
    valueTable: TypeValueTable
    static name: string
}
export class TypeInstance {
    /* Methods of GObject-2.0.GObject.TypeInstance */
    getPrivate(privateType: Type): object | null
    static name: string
}
export class TypeInterface {
    /* Methods of GObject-2.0.GObject.TypeInterface */
    peekParent(): TypeInterface
    static name: string
    /* Static methods and pseudo-constructors */
    static addPrerequisite(interfaceType: Type, prerequisiteType: Type): void
    static getPlugin(instanceType: Type, interfaceType: Type): TypePlugin
    static instantiatablePrerequisite(interfaceType: Type): Type
    static peek(instanceClass: TypeClass, ifaceType: Type): TypeInterface
    static prerequisites(interfaceType: Type): Type[]
}
export abstract class TypeModuleClass {
    /* Fields of GObject-2.0.GObject.TypeModuleClass */
    parentClass: ObjectClass
    load: (module: TypeModule) => boolean
    unload: (module: TypeModule) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    static name: string
}
export class TypePluginClass {
    /* Fields of GObject-2.0.GObject.TypePluginClass */
    usePlugin: TypePluginUse
    unusePlugin: TypePluginUnuse
    completeTypeInfo: TypePluginCompleteTypeInfo
    completeInterfaceInfo: TypePluginCompleteInterfaceInfo
    static name: string
}
export class TypeQuery {
    /* Fields of GObject-2.0.GObject.TypeQuery */
    type: Type
    typeName: string
    classSize: number
    instanceSize: number
    static name: string
}
export class TypeValueTable {
    /* Fields of GObject-2.0.GObject.TypeValueTable */
    valueInit: (value: any) => void
    valueFree: (value: any) => void
    valueCopy: (srcValue: any, destValue: any) => void
    valuePeekPointer: (value: any) => object
    collectFormat: string
    collectValue: (value: any, nCollectValues: number, collectValues: TypeCValue, collectFlags: number) => string
    lcopyFormat: string
    lcopyValue: (value: any, nCollectValues: number, collectValues: TypeCValue, collectFlags: number) => string
    static name: string
}
export class Value {
    /* Fields of GObject-2.0.GObject.Value */
    data: _Value__data__union[]
    /* Methods of GObject-2.0.GObject.Value */
    copy(destValue: any): void
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
    init(gType: Type): any
    initFromInstance(instance: TypeInstance): void
    peekPointer(): object | null
    reset(): any
    setBoolean(vBoolean: boolean): void
    setBoxed(vBoxed?: object | null): void
    setBoxedTakeOwnership(vBoxed?: object | null): void
    setChar(vChar: number): void
    setDouble(vDouble: number): void
    setEnum(vEnum: number): void
    setFlags(vFlags: number): void
    setFloat(vFloat: number): void
    setGtype(vGtype: Type): void
    setInstance(instance?: object | null): void
    setInt(vInt: number): void
    setInt64(vInt64: number): void
    setInternedString(vString?: string | null): void
    setLong(vLong: number): void
    setObject(vObject?: Object | null): void
    setParam(param?: ParamSpec | null): void
    setPointer(vPointer?: object | null): void
    setSchar(vChar: number): void
    setStaticBoxed(vBoxed?: object | null): void
    setStaticString(vString?: string | null): void
    setString(vString?: string | null): void
    setStringTakeOwnership(vString?: string | null): void
    setUchar(vUchar: number): void
    setUint(vUint: number): void
    setUint64(vUint64: number): void
    setUlong(vUlong: number): void
    setVariant(variant?: GLib.Variant | null): void
    takeBoxed(vBoxed?: object | null): void
    takeString(vString?: string | null): void
    takeVariant(variant?: GLib.Variant | null): void
    transform(destValue: any): boolean
    unset(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static typeCompatible(srcType: Type, destType: Type): boolean
    static typeTransformable(srcType: Type, destType: Type): boolean
}
export class ValueArray {
    /* Fields of GObject-2.0.GObject.ValueArray */
    nValues: number
    values: any
    /* Methods of GObject-2.0.GObject.ValueArray */
    append(value?: any | null): ValueArray
    copy(): ValueArray
    getNth(index: number): any
    insert(index: number, value?: any | null): ValueArray
    prepend(value?: any | null): ValueArray
    remove(index: number): ValueArray
    sort(compareFunc: GLib.CompareDataFunc): ValueArray
    static name: string
    static new(nPrealloced: number): ValueArray
    constructor(nPrealloced: number)
    /* Static methods and pseudo-constructors */
    static new(nPrealloced: number): ValueArray
}
export class WeakRef {
    static name: string
}
export class TypeCValue {
    static name: string
}
export class _Value__data__union {
    /* Fields of GObject-2.0.GObject._Value__data__union */
    vInt: number
    vUint: number
    vLong: number
    vUlong: number
    vInt64: number
    vUint64: number
    vFloat: number
    vDouble: number
    vPointer: object
    static name: string
}
export type SignalCMarshaller = ClosureMarshal
export type SignalCVaMarshaller = any
export interface Type {
    name: string
}
}