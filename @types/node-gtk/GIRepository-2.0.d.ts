/**
 * GIRepository-2.0
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace GIRepository {

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
function argInfoGetClosure(info: ArgInfo): number
function argInfoGetDestroy(info: ArgInfo): number
function argInfoGetDirection(info: ArgInfo): Direction
function argInfoGetOwnershipTransfer(info: ArgInfo): Transfer
function argInfoGetScope(info: ArgInfo): ScopeType
function argInfoGetType(info: ArgInfo): TypeInfo
function argInfoIsCallerAllocates(info: ArgInfo): boolean
function argInfoIsOptional(info: ArgInfo): boolean
function argInfoIsReturnValue(info: ArgInfo): boolean
function argInfoIsSkip(info: ArgInfo): boolean
function argInfoLoadType(info: ArgInfo): { type: TypeInfo }
function argInfoMayBeNull(info: ArgInfo): boolean
function callableInfoCanThrowGerror(info: CallableInfo): boolean
function callableInfoGetArg(info: CallableInfo, n: number): ArgInfo
function callableInfoGetCallerOwns(info: CallableInfo): Transfer
function callableInfoGetInstanceOwnershipTransfer(info: CallableInfo): Transfer
function callableInfoGetNArgs(info: CallableInfo): number
function callableInfoGetReturnAttribute(info: CallableInfo, name: string): string
function callableInfoGetReturnType(info: CallableInfo): TypeInfo
function callableInfoInvoke(info: CallableInfo, function_: object | null, inArgs: Argument[], outArgs: Argument[], returnValue: Argument, isMethod: boolean, throws: boolean): boolean
function callableInfoIsMethod(info: CallableInfo): boolean
function callableInfoIterateReturnAttributes(info: CallableInfo, iterator: AttributeIter): { returnType: boolean, iterator: AttributeIter, name: string, value: string }
function callableInfoLoadArg(info: CallableInfo, n: number): { arg: ArgInfo }
function callableInfoLoadReturnType(info: CallableInfo): { type: TypeInfo }
function callableInfoMayReturnNull(info: CallableInfo): boolean
function callableInfoSkipReturn(info: CallableInfo): boolean
function cclosureMarshalGeneric(closure: Function, returnGvalue: any, nParamValues: number, paramValues: any, invocationHint?: object | null, marshalData?: object | null): void
function constantInfoGetType(info: ConstantInfo): TypeInfo
function enumInfoGetErrorDomain(info: EnumInfo): string
function enumInfoGetMethod(info: EnumInfo, n: number): FunctionInfo
function enumInfoGetNMethods(info: EnumInfo): number
function enumInfoGetNValues(info: EnumInfo): number
function enumInfoGetStorageType(info: EnumInfo): TypeTag
function enumInfoGetValue(info: EnumInfo, n: number): ValueInfo
function fieldInfoGetFlags(info: FieldInfo): FieldInfoFlags
function fieldInfoGetOffset(info: FieldInfo): number
function fieldInfoGetSize(info: FieldInfo): number
function fieldInfoGetType(info: FieldInfo): TypeInfo
function functionInfoGetFlags(info: FunctionInfo): FunctionInfoFlags
function functionInfoGetProperty(info: FunctionInfo): PropertyInfo
function functionInfoGetSymbol(info: FunctionInfo): string
function functionInfoGetVfunc(info: FunctionInfo): VFuncInfo
function getMajorVersion(): number
function getMicroVersion(): number
function getMinorVersion(): number
function infoNew(type: InfoType, container: BaseInfo, typelib: Typelib, offset: number): BaseInfo
function infoTypeToString(type: InfoType): string
function interfaceInfoFindMethod(info: InterfaceInfo, name: string): FunctionInfo
function interfaceInfoFindSignal(info: InterfaceInfo, name: string): SignalInfo
function interfaceInfoFindVfunc(info: InterfaceInfo, name: string): VFuncInfo
function interfaceInfoGetConstant(info: InterfaceInfo, n: number): ConstantInfo
function interfaceInfoGetIfaceStruct(info: InterfaceInfo): StructInfo
function interfaceInfoGetMethod(info: InterfaceInfo, n: number): FunctionInfo
function interfaceInfoGetNConstants(info: InterfaceInfo): number
function interfaceInfoGetNMethods(info: InterfaceInfo): number
function interfaceInfoGetNPrerequisites(info: InterfaceInfo): number
function interfaceInfoGetNProperties(info: InterfaceInfo): number
function interfaceInfoGetNSignals(info: InterfaceInfo): number
function interfaceInfoGetNVfuncs(info: InterfaceInfo): number
function interfaceInfoGetPrerequisite(info: InterfaceInfo, n: number): BaseInfo
function interfaceInfoGetProperty(info: InterfaceInfo, n: number): PropertyInfo
function interfaceInfoGetSignal(info: InterfaceInfo, n: number): SignalInfo
function interfaceInfoGetVfunc(info: InterfaceInfo, n: number): VFuncInfo
function invokeErrorQuark(): GLib.Quark
function objectInfoFindMethod(info: ObjectInfo, name: string): FunctionInfo | null
function objectInfoFindMethodUsingInterfaces(info: ObjectInfo, name: string): { returnType: FunctionInfo | null, implementor: ObjectInfo }
function objectInfoFindSignal(info: ObjectInfo, name: string): SignalInfo | null
function objectInfoFindVfunc(info: ObjectInfo, name: string): VFuncInfo | null
function objectInfoFindVfuncUsingInterfaces(info: ObjectInfo, name: string): { returnType: VFuncInfo | null, implementor: ObjectInfo }
function objectInfoGetAbstract(info: ObjectInfo): boolean
function objectInfoGetClassStruct(info: ObjectInfo): StructInfo | null
function objectInfoGetConstant(info: ObjectInfo, n: number): ConstantInfo
function objectInfoGetField(info: ObjectInfo, n: number): FieldInfo
function objectInfoGetFinal(info: ObjectInfo): boolean
function objectInfoGetFundamental(info: ObjectInfo): boolean
function objectInfoGetGetValueFunction(info: ObjectInfo): string | null
function objectInfoGetInterface(info: ObjectInfo, n: number): InterfaceInfo
function objectInfoGetMethod(info: ObjectInfo, n: number): FunctionInfo
function objectInfoGetNConstants(info: ObjectInfo): number
function objectInfoGetNFields(info: ObjectInfo): number
function objectInfoGetNInterfaces(info: ObjectInfo): number
function objectInfoGetNMethods(info: ObjectInfo): number
function objectInfoGetNProperties(info: ObjectInfo): number
function objectInfoGetNSignals(info: ObjectInfo): number
function objectInfoGetNVfuncs(info: ObjectInfo): number
function objectInfoGetParent(info: ObjectInfo): ObjectInfo | null
function objectInfoGetProperty(info: ObjectInfo, n: number): PropertyInfo
function objectInfoGetRefFunction(info: ObjectInfo): string | null
function objectInfoGetSetValueFunction(info: ObjectInfo): string | null
function objectInfoGetSignal(info: ObjectInfo, n: number): SignalInfo
function objectInfoGetTypeInit(info: ObjectInfo): string
function objectInfoGetTypeName(info: ObjectInfo): string
function objectInfoGetUnrefFunction(info: ObjectInfo): string | null
function objectInfoGetVfunc(info: ObjectInfo, n: number): VFuncInfo
function propertyInfoGetFlags(info: PropertyInfo): GObject.ParamFlags
function propertyInfoGetGetter(info: PropertyInfo): FunctionInfo | null
function propertyInfoGetOwnershipTransfer(info: PropertyInfo): Transfer
function propertyInfoGetSetter(info: PropertyInfo): FunctionInfo | null
function propertyInfoGetType(info: PropertyInfo): TypeInfo
function registeredTypeInfoGetGType(info: RegisteredTypeInfo): GObject.Type
function registeredTypeInfoGetTypeInit(info: RegisteredTypeInfo): string
function registeredTypeInfoGetTypeName(info: RegisteredTypeInfo): string
function signalInfoGetClassClosure(info: SignalInfo): VFuncInfo
function signalInfoGetFlags(info: SignalInfo): GObject.SignalFlags
function signalInfoTrueStopsEmit(info: SignalInfo): boolean
function structInfoFindField(info: StructInfo, name: string): FieldInfo
function structInfoFindMethod(info: StructInfo, name: string): FunctionInfo
function structInfoGetAlignment(info: StructInfo): number
function structInfoGetField(info: StructInfo, n: number): FieldInfo
function structInfoGetMethod(info: StructInfo, n: number): FunctionInfo
function structInfoGetNFields(info: StructInfo): number
function structInfoGetNMethods(info: StructInfo): number
function structInfoGetSize(info: StructInfo): number
function structInfoIsForeign(info: StructInfo): boolean
function structInfoIsGtypeStruct(info: StructInfo): boolean
function typeInfoArgumentFromHashPointer(info: TypeInfo, hashPointer: object | null, arg: Argument): void
function typeInfoGetArrayFixedSize(info: TypeInfo): number
function typeInfoGetArrayLength(info: TypeInfo): number
function typeInfoGetArrayType(info: TypeInfo): ArrayType
function typeInfoGetInterface(info: TypeInfo): BaseInfo
function typeInfoGetParamType(info: TypeInfo, n: number): TypeInfo
function typeInfoGetStorageType(info: TypeInfo): TypeTag
function typeInfoGetTag(info: TypeInfo): TypeTag
function typeInfoHashPointerFromArgument(info: TypeInfo, arg: Argument): object | null
function typeInfoIsPointer(info: TypeInfo): boolean
function typeInfoIsZeroTerminated(info: TypeInfo): boolean
function typeTagToString(type: TypeTag): string
function unionInfoFindMethod(info: UnionInfo, name: string): FunctionInfo
function unionInfoGetAlignment(info: UnionInfo): number
function unionInfoGetDiscriminator(info: UnionInfo, n: number): ConstantInfo
function unionInfoGetDiscriminatorOffset(info: UnionInfo): number
function unionInfoGetDiscriminatorType(info: UnionInfo): TypeInfo
function unionInfoGetField(info: UnionInfo, n: number): FieldInfo
function unionInfoGetMethod(info: UnionInfo, n: number): FunctionInfo
function unionInfoGetNFields(info: UnionInfo): number
function unionInfoGetNMethods(info: UnionInfo): number
function unionInfoGetSize(info: UnionInfo): number
function unionInfoIsDiscriminated(info: UnionInfo): boolean
function valueInfoGetValue(info: ValueInfo): number
function vfuncInfoGetAddress(info: VFuncInfo, implementorGtype: GObject.Type): object | null
function vfuncInfoGetFlags(info: VFuncInfo): VFuncInfoFlags
function vfuncInfoGetInvoker(info: VFuncInfo): FunctionInfo
function vfuncInfoGetOffset(info: VFuncInfo): number
function vfuncInfoGetSignal(info: VFuncInfo): SignalInfo
export interface Repository_ConstructProps extends GObject.Object_ConstructProps {
}
class Repository {
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GIRepository-2.0.GIRepository.Repository */
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
    getObjectGtypeInterfaces(gtype: GObject.Type): { interfacesOut: InterfaceInfo[] }
    getSharedLibrary(namespace: string): string | null
    getTypelibPath(namespace: string): string
    getVersion(namespace: string): string
    isRegistered(namespace: string, version?: string | null): boolean
    loadTypelib(typelib: Typelib, flags: RepositoryLoadFlags): string
    require(namespace: string, version: string | null, flags: RepositoryLoadFlags): Typelib
    requirePrivate(typelibDir: string, namespace: string, version: string | null, flags: RepositoryLoadFlags): Typelib
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
    connect(sigName: "notify", callback: (($obj: Repository, pspec: GObject.ParamSpec) => void)): number
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
class AttributeIter {
    static name: string
}
class BaseInfo {
    /* Methods of GIRepository-2.0.GIRepository.BaseInfo */
    equal(info2: BaseInfo): boolean
    getAttribute(name: string): string
    getContainer(): BaseInfo
    getName(): string
    getNamespace(): string
    getType(): InfoType
    getTypelib(): Typelib
    isDeprecated(): boolean
    iterateAttributes(iterator: AttributeIter): { returnType: boolean, iterator: AttributeIter, name: string, value: string }
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
    getNamespace(): string
    symbol(symbolName: string, symbol?: object | null): boolean
    static name: string
}
class UnresolvedInfo {
    static name: string
}
class Argument {
    /* Fields of GIRepository-2.0.GIRepository.Argument */
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
export default GIRepository