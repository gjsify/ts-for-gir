/**
 * Template-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace Template {

export enum Error {
    INVALID_STATE,
    TEMPLATE_NOT_FOUND,
    CIRCULAR_INCLUDE,
    SYNTAX_ERROR,
    LEXER_FAILURE,
    TYPE_MISMATCH,
    INVALID_OP_CODE,
    DIVIDE_BY_ZERO,
    MISSING_SYMBOL,
    SYMBOL_REDEFINED,
    NOT_AN_OBJECT,
    NULL_POINTER,
    NO_SUCH_PROPERTY,
    GI_FAILURE,
    RUNTIME_ERROR,
    NOT_IMPLEMENTED,
    NOT_A_VALUE,
    NOT_A_FUNCTION,
}
export enum ExprBuiltin {
    ABS,
    CEIL,
    FLOOR,
    HEX,
    LOG,
    PRINT,
    REPR,
    SQRT,
    TYPEOF,
}
export enum ExprType {
    ADD,
    SUB,
    MUL,
    DIV,
    BOOLEAN,
    NUMBER,
    STRING,
    GT,
    LT,
    NE,
    EQ,
    GTE,
    LTE,
    UNARY_MINUS,
    STMT_LIST,
    IF,
    WHILE,
    SYMBOL_REF,
    SYMBOL_ASSIGN,
    FN_CALL,
    USER_FN_CALL,
    GETATTR,
    SETATTR,
    GI_CALL,
    REQUIRE,
    AND,
    OR,
    INVERT_BOOLEAN,
}
export enum SymbolType {
    EXPR,
    VALUE,
}
export const ENABLE_TRACE: number
export const LOG_LEVEL_TRACE: number
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const VERSION_S: string
export function errorQuark(): GLib.Quark
export function exprFromString(str: string): Expr
export interface ScopeResolver {
    (scope: Scope, name: string, symbol: Symbol): boolean
}
export interface Template_ConstructProps extends GObject.Object_ConstructProps {
    locator?: TemplateLocator
}
export class Template {
    /* Properties of Template-1.0.Template.Template */
    locator: TemplateLocator
    /* Fields of Template-1.0.Template.Template */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Template-1.0.Template.Template */
    expand(stream: Gio.OutputStream, scope?: Scope | null, cancellable?: Gio.Cancellable | null): boolean
    expandString(scope?: Scope | null): string
    getLocator(): TemplateLocator
    parse(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    parseFile(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    parsePath(path: string, cancellable?: Gio.Cancellable | null): boolean
    parseResource(path: string, cancellable?: Gio.Cancellable | null): boolean
    parseString(input: string): boolean
    setLocator(locator: TemplateLocator): void
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
    connect(sigName: "notify", callback: (($obj: Template, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locator", callback: (($obj: Template, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locator", callback: (($obj: Template, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Template_ConstructProps)
    _init (config?: Template_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(locator?: TemplateLocator | null): Template
    static $gtype: GObject.Type
}
export interface TemplateLocator_ConstructProps extends GObject.Object_ConstructProps {
}
export class TemplateLocator {
    /* Fields of Template-1.0.Template.TemplateLocator */
    parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Template-1.0.Template.TemplateLocator */
    appendSearchPath(path: string): void
    getSearchPath(): string[]
    locate(path: string): Gio.InputStream
    prependSearchPath(path: string): void
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
    connect(sigName: "notify", callback: (($obj: TemplateLocator, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: TemplateLocator_ConstructProps)
    _init (config?: TemplateLocator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TemplateLocator
    static $gtype: GObject.Type
}
export class Scope {
    /* Methods of Template-1.0.Template.Scope */
    get(name: string): Symbol
    newWithParent(): Scope
    peek(name: string): Symbol | null
    ref(): Scope
    set(name: string, symbol?: Symbol | null): void
    setBoolean(name: string, value: boolean): void
    setDouble(name: string, value: number): void
    setObject(name: string, value?: GObject.Object | null): void
    setResolver(resolver: ScopeResolver): void
    setString(name: string, value?: string | null): void
    setStrv(name: string, value?: string[] | null): void
    setValue(name: string, value?: any | null): void
    setVariant(name: string, value?: GLib.Variant | null): void
    take(name: string, symbol?: Symbol | null): void
    unref(): void
    static name: string
    static new(): Scope
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Scope
}
export class Symbol {
    /* Methods of Template-1.0.Template.Symbol */
    assignBoolean(vBool: boolean): void
    assignDouble(vDouble: number): void
    assignObject(vObject?: GObject.Object | null): void
    assignString(vString: string): void
    assignStrv(strv?: string[] | null): void
    assignValue(value: any): void
    assignVariant(vVariant?: GLib.Variant | null): void
    getExpr(): { returnType: Expr, params: string[] | null }
    getSymbolType(): SymbolType
    getValue(value: any): void
    ref(): Symbol
    unref(): void
    static name: string
    static new(): Symbol
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Symbol
}
export abstract class TemplateClass {
    /* Fields of Template-1.0.Template.TemplateClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class TemplateLocatorClass {
    /* Fields of Template-1.0.Template.TemplateLocatorClass */
    parentInstance: GObject.ObjectClass
    locate: (self: TemplateLocator, path: string) => Gio.InputStream
    static name: string
}
export class Expr {
    /* Methods of Template-1.0.Template.Expr */
    eval(scope: Scope, returnValue: any): boolean
    newGetattr(attr: string): Expr
    newGiCall(name: string, params: Expr): Expr
    newInvertBoolean(): Expr
    newSetattr(attr: string, right: Expr): Expr
    ref(): Expr
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newBoolean(value: boolean): Expr
    static newFlow(type: ExprType, condition: Expr, primary: Expr, secondary: Expr): Expr
    static newFnCall(builtin: ExprBuiltin, param: Expr): Expr
    static newNumber(value: number): Expr
    static newRequire(typelib: string, version: string): Expr
    static newSimple(type: ExprType, left: Expr, right: Expr): Expr
    static newString(value: string, length: number): Expr
    static newSymbolAssign(symbol: string, right: Expr): Expr
    static newSymbolRef(symbol: string): Expr
    static newUserFnCall(name: string, param: Expr): Expr
    static fromString(str: string): Expr
}
}