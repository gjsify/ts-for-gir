/**
 * JavaScriptCore-4.0
 */

/// <reference types="node" />
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace JavaScriptCore {

export enum CheckSyntaxMode {
    SCRIPT,
    MODULE,
}
export enum CheckSyntaxResult {
    SUCCESS,
    RECOVERABLE_ERROR,
    IRRECOVERABLE_ERROR,
    UNTERMINATED_LITERAL_ERROR,
    OUT_OF_MEMORY_ERROR,
    STACK_OVERFLOW_ERROR,
}
export enum OptionType {
    BOOLEAN,
    INT,
    UINT,
    SIZE,
    DOUBLE,
    STRING,
    RANGE_STRING,
}
export enum ValuePropertyFlags {
    CONFIGURABLE,
    ENUMERABLE,
    WRITABLE,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const OPTIONS_USE_DFG: string
export const OPTIONS_USE_FTL: string
export const OPTIONS_USE_JIT: string
export const OPTIONS_USE_LLINT: string
export function getMajorVersion(): number
export function getMicroVersion(): number
export function getMinorVersion(): number
export function optionsForeach(function_: OptionsFunc): void
export function optionsGetBoolean(option: string): [ /* returnType */ boolean, /* value */ boolean ]
export function optionsGetDouble(option: string): [ /* returnType */ boolean, /* value */ number ]
export function optionsGetInt(option: string): [ /* returnType */ boolean, /* value */ number ]
export function optionsGetOptionGroup(): GLib.OptionGroup
export function optionsGetRangeString(option: string): [ /* returnType */ boolean, /* value */ string ]
export function optionsGetSize(option: string): [ /* returnType */ boolean, /* value */ number ]
export function optionsGetString(option: string): [ /* returnType */ boolean, /* value */ string ]
export function optionsGetUint(option: string): [ /* returnType */ boolean, /* value */ number ]
export function optionsSetBoolean(option: string, value: boolean): boolean
export function optionsSetDouble(option: string, value: number): boolean
export function optionsSetInt(option: string, value: number): boolean
export function optionsSetRangeString(option: string, value: string): boolean
export function optionsSetSize(option: string, value: number): boolean
export function optionsSetString(option: string, value: string): boolean
export function optionsSetUint(option: string, value: number): boolean
export interface ClassDeletePropertyFunction {
    (jscClass: Class, context: Context, instance: object | null, name: string): boolean
}
export interface ClassEnumeratePropertiesFunction {
    (jscClass: Class, context: Context, instance?: object | null): string[] | null
}
export interface ClassGetPropertyFunction {
    (jscClass: Class, context: Context, instance: object | null, name: string): Value | null
}
export interface ClassHasPropertyFunction {
    (jscClass: Class, context: Context, instance: object | null, name: string): boolean
}
export interface ClassSetPropertyFunction {
    (jscClass: Class, context: Context, instance: object | null, name: string, value: Value): boolean
}
export interface ExceptionHandler {
    (context: Context, exception: Exception): void
}
export interface OptionsFunc {
    (option: string, type: OptionType, description?: string | null): boolean
}
export interface Class_ConstructProps extends GObject.Object_ConstructProps {
    context?: Context
    name?: string
    parent?: Class
}
export class Class {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of JavaScriptCore.Class */
    addConstructorVariadic(name: string | null, callback: GObject.Callback, returnType: GObject.Type): Value
    addConstructor(name: string | null, callback: GObject.Callback, returnType: GObject.Type, parameterTypes?: GType[] | null): Value
    addMethodVariadic(name: string, callback: GObject.Callback, returnType: GObject.Type): void
    addMethod(name: string, callback: GObject.Callback, returnType: GObject.Type, parameterTypes?: GType[] | null): void
    addProperty(name: string, propertyType: GObject.Type, getter?: GObject.Callback | null, setter?: GObject.Callback | null): void
    getName(): string
    getParent(): Class
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
    connect(sigName: "notify", callback: (($obj: Class, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Class, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Class_ConstructProps)
    _init (config?: Class_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Context_ConstructProps extends GObject.Object_ConstructProps {
    virtualMachine?: VirtualMachine
}
export class Context {
    /* Fields of JavaScriptCore.Context */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of JavaScriptCore.Context */
    checkSyntax(code: string, length: number, mode: CheckSyntaxMode, uri: string, lineNumber: number): [ /* returnType */ CheckSyntaxResult, /* exception */ Exception | null ]
    clearException(): void
    evaluate(code: string, length: number): Value
    evaluateInObject(code: string, length: number, objectInstance: object | null, objectClass: Class | null, uri: string, lineNumber: number): [ /* returnType */ Value, /* object */ Value ]
    evaluateWithSourceUri(code: string, length: number, uri: string, lineNumber: number): Value
    getException(): Exception | null
    getGlobalObject(): Value
    getValue(name: string): Value
    getVirtualMachine(): VirtualMachine
    popExceptionHandler(): void
    pushExceptionHandler(handler: ExceptionHandler): void
    registerClass(name: string, parentClass?: Class | null, vtable?: ClassVTable | null, destroyNotify?: GLib.DestroyNotify | null): Class
    setValue(name: string, value: Value): void
    throw(errorMessage: string): void
    throwException(exception: Exception): void
    throwWithName(errorName: string, errorMessage: string): void
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
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Context
    static newWithVirtualMachine(vm: VirtualMachine): Context
    static getCurrent(): Context | null
    static $gtype: GObject.Type
}
export interface Exception_ConstructProps extends GObject.Object_ConstructProps {
}
export class Exception {
    /* Fields of JavaScriptCore.Exception */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of JavaScriptCore.Exception */
    getBacktraceString(): string | null
    getColumnNumber(): number
    getLineNumber(): number
    getMessage(): string
    getName(): string
    getSourceUri(): string | null
    report(): string
    toString(): string
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
    connect(sigName: "notify", callback: (($obj: Exception, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Exception, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Exception_ConstructProps)
    _init (config?: Exception_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context, message: string): Exception
    static newWithName(context: Context, name: string, message: string): Exception
    static $gtype: GObject.Type
}
export interface Value_ConstructProps extends GObject.Object_ConstructProps {
    context?: Context
}
export class Value {
    /* Fields of JavaScriptCore.Value */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of JavaScriptCore.Value */
    constructorCall(parameters?: Value[] | null): Value
    functionCall(parameters?: Value[] | null): Value
    getContext(): Context
    isArray(): boolean
    isBoolean(): boolean
    isConstructor(): boolean
    isFunction(): boolean
    isNull(): boolean
    isNumber(): boolean
    isObject(): boolean
    isString(): boolean
    isUndefined(): boolean
    objectDefinePropertyAccessor(propertyName: string, flags: ValuePropertyFlags, propertyType: GObject.Type, getter?: GObject.Callback | null, setter?: GObject.Callback | null): void
    objectDefinePropertyData(propertyName: string, flags: ValuePropertyFlags, propertyValue?: Value | null): void
    objectDeleteProperty(name: string): boolean
    objectEnumerateProperties(): string[] | null
    objectGetProperty(name: string): Value
    objectGetPropertyAtIndex(index: number): Value
    objectHasProperty(name: string): boolean
    objectInvokeMethod(name: string, parameters?: Value[] | null): Value
    objectIsInstanceOf(name: string): boolean
    objectSetProperty(name: string, property: Value): void
    objectSetPropertyAtIndex(index: number, property: Value): void
    toBoolean(): boolean
    toDouble(): number
    toInt32(): number
    toJson(indent: number): string
    toString(): string
    toStringAsBytes(): any
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
    connect(sigName: "notify", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Value_ConstructProps)
    _init (config?: Value_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newArrayFromGarray(context: Context, array?: Value[] | null): Value
    static newArrayFromStrv(context: Context, strv: string[]): Value
    static newBoolean(context: Context, value: boolean): Value
    static newFromJson(context: Context, json: string): Value
    static newFunctionVariadic(context: Context, name: string | null, callback: GObject.Callback, returnType: GObject.Type): Value
    static newFunction(context: Context, name: string | null, callback: GObject.Callback, returnType: GObject.Type, parameterTypes?: GType[] | null): Value
    static newNull(context: Context): Value
    static newNumber(context: Context, number: number): Value
    static newObject(context: Context, instance?: object | null, jscClass?: Class | null): Value
    static newString(context: Context, string?: string | null): Value
    static newStringFromBytes(context: Context, bytes?: any): Value
    static newUndefined(context: Context): Value
    static $gtype: GObject.Type
}
export interface VirtualMachine_ConstructProps extends GObject.Object_ConstructProps {
}
export class VirtualMachine {
    /* Fields of JavaScriptCore.VirtualMachine */
    parent: GObject.Object
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
    connect(sigName: "notify", callback: (($obj: VirtualMachine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VirtualMachine, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: VirtualMachine_ConstructProps)
    _init (config?: VirtualMachine_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VirtualMachine
    static $gtype: GObject.Type
}
export interface WeakValue_ConstructProps extends GObject.Object_ConstructProps {
    value?: Value
}
export class WeakValue {
    /* Fields of JavaScriptCore.WeakValue */
    parent: GObject.Object
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of JavaScriptCore.WeakValue */
    getValue(): Value
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
    /* Signals of JavaScriptCore.WeakValue */
    connect(sigName: "cleared", callback: (($obj: WeakValue) => void)): number
    connect_after(sigName: "cleared", callback: (($obj: WeakValue) => void)): number
    emit(sigName: "cleared"): void
    on(sigName: "cleared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "cleared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "cleared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WeakValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WeakValue, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: WeakValue_ConstructProps)
    _init (config?: WeakValue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: Value): WeakValue
    static $gtype: GObject.Type
}
export abstract class ClassClass {
    static name: string
}
export class ClassVTable {
    /* Fields of JavaScriptCore.ClassVTable */
    getProperty: ClassGetPropertyFunction
    setProperty: ClassSetPropertyFunction
    hasProperty: ClassHasPropertyFunction
    deleteProperty: ClassDeletePropertyFunction
    enumerateProperties: ClassEnumeratePropertiesFunction
    static name: string
}
export abstract class ContextClass {
    /* Fields of JavaScriptCore.ContextClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ContextPrivate {
    static name: string
}
export abstract class ExceptionClass {
    /* Fields of JavaScriptCore.ExceptionClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ExceptionPrivate {
    static name: string
}
export abstract class ValueClass {
    /* Fields of JavaScriptCore.ValueClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class ValuePrivate {
    static name: string
}
export abstract class VirtualMachineClass {
    /* Fields of JavaScriptCore.VirtualMachineClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class VirtualMachinePrivate {
    static name: string
}
export abstract class WeakValueClass {
    /* Fields of JavaScriptCore.WeakValueClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class WeakValuePrivate {
    static name: string
}
}