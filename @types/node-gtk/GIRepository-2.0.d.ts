/**
 * GIRepository-2.0
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />

declare namespace GIRepository {

export enum ArrayType {
    C,
    ARRAY,
    PTR_ARRAY,
    BYTE_ARRAY,
}
export enum Direction {
    IN,
    OUT,
    INOUT,
}
export enum InfoType {
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
export enum RepositoryError {
    TYPELIB_NOT_FOUND,
    NAMESPACE_MISMATCH,
    NAMESPACE_VERSION_CONFLICT,
    LIBRARY_NOT_FOUND,
}
export enum ScopeType {
    INVALID,
    CALL,
    ASYNC,
    NOTIFIED,
}
export enum Transfer {
    NOTHING,
    CONTAINER,
    EVERYTHING,
}
export enum TypeTag {
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
export enum nvokeError {
    FAILED,
    SYMBOL_NOT_FOUND,
    ARGUMENT_MISMATCH,
}
export enum FieldInfoFlags {
    READABLE,
    WRITABLE,
}
export enum FunctionInfoFlags {
    IS_METHOD,
    IS_CONSTRUCTOR,
    IS_GETTER,
    IS_SETTER,
    WRAPS_VFUNC,
    THROWS,
}
export enum RepositoryLoadFlags {
    IREPOSITORY_LOAD_FLAG_LAZY,
}
export enum VFuncInfoFlags {
    MUST_CHAIN_UP,
    MUST_OVERRIDE,
    MUST_NOT_OVERRIDE,
    THROWS,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const TYPE_TAG_N_TYPES: number
export function argInfoGetClosure(info: ArgInfo): number
export function argInfoGetDestroy(info: ArgInfo): number
export function argInfoGetDirection(info: ArgInfo): Direction
export function argInfoGetOwnershipTransfer(info: ArgInfo): Transfer
export function argInfoGetScope(info: ArgInfo): ScopeType
export function argInfoGetType(info: ArgInfo): TypeInfo
export function argInfoIsCallerAllocates(info: ArgInfo): boolean
export function argInfoIsOptional(info: ArgInfo): boolean
export function argInfoIsReturnValue(info: ArgInfo): boolean
export function argInfoIsSkip(info: ArgInfo): boolean
export function argInfoLoadType(info: ArgInfo): /* type */ TypeInfo
export function argInfoMayBeNull(info: ArgInfo): boolean
export function callableInfoCanThrowGerror(info: CallableInfo): boolean
export function callableInfoGetArg(info: CallableInfo, n: number): ArgInfo
export function callableInfoGetCallerOwns(info: CallableInfo): Transfer
export function callableInfoGetInstanceOwnershipTransfer(info: CallableInfo): Transfer
export function callableInfoGetNArgs(info: CallableInfo): number
export function callableInfoGetReturnAttribute(info: CallableInfo, name: string): string
export function callableInfoGetReturnType(info: CallableInfo): TypeInfo
export function callableInfoInvoke(info: CallableInfo, function_: object | null, inArgs: Argument[], outArgs: Argument[], returnValue: Argument, isMethod: boolean, throws: boolean): boolean
export function callableInfoIsMethod(info: CallableInfo): boolean
export function callableInfoIterateReturnAttributes(info: CallableInfo, iterator: AttributeIter): [ /* returnType */ boolean, /* iterator */ AttributeIter, /* name */ string, /* value */ string ]
export function callableInfoLoadArg(info: CallableInfo, n: number): /* arg */ ArgInfo
export function callableInfoLoadReturnType(info: CallableInfo): /* type */ TypeInfo
export function callableInfoMayReturnNull(info: CallableInfo): boolean
export function callableInfoSkipReturn(info: CallableInfo): boolean
export function cclosureMarshalGeneric(closure: Function, returnGvalue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
export function constantInfoGetType(info: ConstantInfo): TypeInfo
export function enumInfoGetErrorDomain(info: EnumInfo): string
export function enumInfoGetMethod(info: EnumInfo, n: number): FunctionInfo
export function enumInfoGetNMethods(info: EnumInfo): number
export function enumInfoGetNValues(info: EnumInfo): number
export function enumInfoGetStorageType(info: EnumInfo): TypeTag
export function enumInfoGetValue(info: EnumInfo, n: number): ValueInfo
export function fieldInfoGetFlags(info: FieldInfo): FieldInfoFlags
export function fieldInfoGetOffset(info: FieldInfo): number
export function fieldInfoGetSize(info: FieldInfo): number
export function fieldInfoGetType(info: FieldInfo): TypeInfo
export function functionInfoGetFlags(info: FunctionInfo): FunctionInfoFlags
export function functionInfoGetProperty(info: FunctionInfo): PropertyInfo
export function functionInfoGetSymbol(info: FunctionInfo): string
export function functionInfoGetVfunc(info: FunctionInfo): VFuncInfo
export function getMajorVersion(): number
export function getMicroVersion(): number
export function getMinorVersion(): number
export function infoNew(type: InfoType, container: BaseInfo, typelib: Typelib, offset: number): BaseInfo
export function infoTypeToString(type: InfoType): string
export function interfaceInfoFindMethod(info: InterfaceInfo, name: string): FunctionInfo
export function interfaceInfoFindSignal(info: InterfaceInfo, name: string): SignalInfo
export function interfaceInfoFindVfunc(info: InterfaceInfo, name: string): VFuncInfo
export function interfaceInfoGetConstant(info: InterfaceInfo, n: number): ConstantInfo
export function interfaceInfoGetIfaceStruct(info: InterfaceInfo): StructInfo
export function interfaceInfoGetMethod(info: InterfaceInfo, n: number): FunctionInfo
export function interfaceInfoGetNConstants(info: InterfaceInfo): number
export function interfaceInfoGetNMethods(info: InterfaceInfo): number
export function interfaceInfoGetNPrerequisites(info: InterfaceInfo): number
export function interfaceInfoGetNProperties(info: InterfaceInfo): number
export function interfaceInfoGetNSignals(info: InterfaceInfo): number
export function interfaceInfoGetNVfuncs(info: InterfaceInfo): number
export function interfaceInfoGetPrerequisite(info: InterfaceInfo, n: number): BaseInfo
export function interfaceInfoGetProperty(info: InterfaceInfo, n: number): PropertyInfo
export function interfaceInfoGetSignal(info: InterfaceInfo, n: number): SignalInfo
export function interfaceInfoGetVfunc(info: InterfaceInfo, n: number): VFuncInfo
export function invokeErrorQuark(): GLib.Quark
export function objectInfoFindMethod(info: ObjectInfo, name: string): FunctionInfo | null
export function objectInfoFindMethodUsingInterfaces(info: ObjectInfo, name: string): [ /* returnType */ FunctionInfo | null, /* implementor */ ObjectInfo ]
export function objectInfoFindSignal(info: ObjectInfo, name: string): SignalInfo | null
export function objectInfoFindVfunc(info: ObjectInfo, name: string): VFuncInfo | null
export function objectInfoFindVfuncUsingInterfaces(info: ObjectInfo, name: string): [ /* returnType */ VFuncInfo | null, /* implementor */ ObjectInfo ]
export function objectInfoGetAbstract(info: ObjectInfo): boolean
export function objectInfoGetClassStruct(info: ObjectInfo): StructInfo | null
export function objectInfoGetConstant(info: ObjectInfo, n: number): ConstantInfo
export function objectInfoGetField(info: ObjectInfo, n: number): FieldInfo
export function objectInfoGetFundamental(info: ObjectInfo): boolean
export function objectInfoGetGetValueFunction(info: ObjectInfo): string | null
export function objectInfoGetInterface(info: ObjectInfo, n: number): InterfaceInfo
export function objectInfoGetMethod(info: ObjectInfo, n: number): FunctionInfo
export function objectInfoGetNConstants(info: ObjectInfo): number
export function objectInfoGetNFields(info: ObjectInfo): number
export function objectInfoGetNInterfaces(info: ObjectInfo): number
export function objectInfoGetNMethods(info: ObjectInfo): number
export function objectInfoGetNProperties(info: ObjectInfo): number
export function objectInfoGetNSignals(info: ObjectInfo): number
export function objectInfoGetNVfuncs(info: ObjectInfo): number
export function objectInfoGetParent(info: ObjectInfo): ObjectInfo | null
export function objectInfoGetProperty(info: ObjectInfo, n: number): PropertyInfo
export function objectInfoGetRefFunction(info: ObjectInfo): string | null
export function objectInfoGetSetValueFunction(info: ObjectInfo): string | null
export function objectInfoGetSignal(info: ObjectInfo, n: number): SignalInfo
export function objectInfoGetTypeInit(info: ObjectInfo): string
export function objectInfoGetTypeName(info: ObjectInfo): string
export function objectInfoGetUnrefFunction(info: ObjectInfo): string | null
export function objectInfoGetVfunc(info: ObjectInfo, n: number): VFuncInfo
export function propertyInfoGetFlags(info: PropertyInfo): GObject.ParamFlags
export function propertyInfoGetOwnershipTransfer(info: PropertyInfo): Transfer
export function propertyInfoGetType(info: PropertyInfo): TypeInfo
export function registeredTypeInfoGetGType(info: RegisteredTypeInfo): GObject.Type
export function registeredTypeInfoGetTypeInit(info: RegisteredTypeInfo): string
export function registeredTypeInfoGetTypeName(info: RegisteredTypeInfo): string
export function signalInfoGetClassClosure(info: SignalInfo): VFuncInfo
export function signalInfoGetFlags(info: SignalInfo): GObject.SignalFlags
export function signalInfoTrueStopsEmit(info: SignalInfo): boolean
export function structInfoFindField(info: StructInfo, name: string): FieldInfo
export function structInfoFindMethod(info: StructInfo, name: string): FunctionInfo
export function structInfoGetAlignment(info: StructInfo): number
export function structInfoGetField(info: StructInfo, n: number): FieldInfo
export function structInfoGetMethod(info: StructInfo, n: number): FunctionInfo
export function structInfoGetNFields(info: StructInfo): number
export function structInfoGetNMethods(info: StructInfo): number
export function structInfoGetSize(info: StructInfo): number
export function structInfoIsForeign(info: StructInfo): boolean
export function structInfoIsGtypeStruct(info: StructInfo): boolean
export function typeInfoArgumentFromHashPointer(info: TypeInfo, hashPointer: object | null, arg: Argument): void
export function typeInfoGetArrayFixedSize(info: TypeInfo): number
export function typeInfoGetArrayLength(info: TypeInfo): number
export function typeInfoGetArrayType(info: TypeInfo): ArrayType
export function typeInfoGetInterface(info: TypeInfo): BaseInfo
export function typeInfoGetParamType(info: TypeInfo, n: number): TypeInfo
export function typeInfoGetStorageType(info: TypeInfo): TypeTag
export function typeInfoGetTag(info: TypeInfo): TypeTag
export function typeInfoHashPointerFromArgument(info: TypeInfo, arg: Argument): object | null
export function typeInfoIsPointer(info: TypeInfo): boolean
export function typeInfoIsZeroTerminated(info: TypeInfo): boolean
export function typeTagToString(type: TypeTag): string
export function unionInfoFindMethod(info: UnionInfo, name: string): FunctionInfo
export function unionInfoGetAlignment(info: UnionInfo): number
export function unionInfoGetDiscriminator(info: UnionInfo, n: number): ConstantInfo
export function unionInfoGetDiscriminatorOffset(info: UnionInfo): number
export function unionInfoGetDiscriminatorType(info: UnionInfo): TypeInfo
export function unionInfoGetField(info: UnionInfo, n: number): FieldInfo
export function unionInfoGetMethod(info: UnionInfo, n: number): FunctionInfo
export function unionInfoGetNFields(info: UnionInfo): number
export function unionInfoGetNMethods(info: UnionInfo): number
export function unionInfoGetSize(info: UnionInfo): number
export function unionInfoIsDiscriminated(info: UnionInfo): boolean
export function valueInfoGetValue(info: ValueInfo): number
export function vfuncInfoGetAddress(info: VFuncInfo, implementorGtype: GObject.Type): object | null
export function vfuncInfoGetFlags(info: VFuncInfo): VFuncInfoFlags
export function vfuncInfoGetInvoker(info: VFuncInfo): FunctionInfo
export function vfuncInfoGetOffset(info: VFuncInfo): number
export function vfuncInfoGetSignal(info: VFuncInfo): SignalInfo
export interface Repository_ConstructProps extends GObject.Object_ConstructProps {
}
export class Repository {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GIRepository.Repository */
    enumerateVersions(namespace: string): string[]
    findByErrorDomain(domain: GLib.Quark): EnumInfo
    findByGtype(gtype: GObject.Type): BaseInfo
    findByName(namespace: string, name: string): BaseInfo
    getCPrefix(namespace: string): string
    getDependencies(namespace: string): string[]
    getImmediateDependencies(namespace: string): string[]
    getInfo(namespace: string, index: number): BaseInfo
    getLoadedNamespaces(): string[]
    getNInfos(namespace: string): number
    getObjectGtypeInterfaces(gtype: GObject.Type): /* interfacesOut */ InterfaceInfo[]
    getSharedLibrary(namespace: string): string | null
    getTypelibPath(namespace: string): string
    getVersion(namespace: string): string
    isRegistered(namespace: string, version?: string | null): boolean
    loadTypelib(typelib: Typelib, flags: RepositoryLoadFlags): string
    require(namespace: string, version: string | null, flags: RepositoryLoadFlags): Typelib
    requirePrivate(typelibDir: string, namespace: string, version: string | null, flags: RepositoryLoadFlags): Typelib
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
    connect(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Repository_ConstructProps)
    _init (config?: Repository_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static dump(arg: string): boolean
    static errorQuark(): GLib.Quark
    static getDefault(): Repository
    static getOptionGroup(): GLib.OptionGroup
    static getSearchPath(): string[]
    static prependLibraryPath(directory: string): void
    static prependSearchPath(directory: string): void
    static $gtype: GObject.Type
}
export class AttributeIter {
    static name: string
}
export class BaseInfo {
    /* Methods of GIRepository.BaseInfo */
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string
    getContainer(): BaseInfo
    getName(): string
    getNamespace(): string
    getType(): InfoType
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): [ /* returnType */ boolean, /* iterator */ AttributeIter, /* name */ string, /* value */ string ]
    static name: string
}
export abstract class RepositoryClass {
    static name: string
}
export class RepositoryPrivate {
    static name: string
}
export class Typelib {
    /* Methods of GIRepository.Typelib */
    free(): void
    getNamespace(): string
    symbol(symbolName: string, symbol?: object | null): boolean
    static name: string
}
export class UnresolvedInfo {
    static name: string
}
export class Argument {
    /* Fields of GIRepository.Argument */
    vBoolean: boolean
    vInt8: number
    vUint8: number
    vInt16: number
    vUint16: number
    vInt32: number
    vUint32: number
    vInt64: number
    vUint64: number
    vFloat: number
    vDouble: number
    vShort: number
    vUshort: number
    vInt: number
    vUint: number
    vLong: number
    vUlong: number
    vSsize: number
    vSize: number
    vString: string
    vPointer: object
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