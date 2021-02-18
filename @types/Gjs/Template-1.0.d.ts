/**
 * Template-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

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
export function error_quark(): GLib.Quark
export function expr_from_string(str: string): Expr
export interface ScopeResolver {
    (scope: Scope, name: string, symbol: Symbol): boolean
}
export interface Template_ConstructProps extends GObject.Object_ConstructProps {
    locator?: TemplateLocator
}
export class Template {
    /* Properties of Template.Template */
    locator: TemplateLocator
    /* Fields of Template.Template */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Template.Template */
    expand(stream: Gio.OutputStream, scope?: Scope | null, cancellable?: Gio.Cancellable | null): boolean
    expand_string(scope?: Scope | null): string
    get_locator(): TemplateLocator
    parse(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    parse_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    parse_path(path: string, cancellable?: Gio.Cancellable | null): boolean
    parse_resource(path: string, cancellable?: Gio.Cancellable | null): boolean
    parse_string(input: string): boolean
    set_locator(locator: TemplateLocator): void
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
    connect(sigName: "notify", callback: (($obj: Template, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Template, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locator", callback: (($obj: Template, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locator", callback: (($obj: Template, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Fields of Template.TemplateLocator */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Template.TemplateLocator */
    append_search_path(path: string): void
    get_search_path(): string[]
    locate(path: string): Gio.InputStream
    prepend_search_path(path: string): void
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
    /* Virtual methods of Template.TemplateLocator */
    vfunc_locate(path: string): Gio.InputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TemplateLocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TemplateLocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TemplateLocator_ConstructProps)
    _init (config?: TemplateLocator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TemplateLocator
    static $gtype: GObject.Type
}
export class Scope {
    /* Methods of Template.Scope */
    get(name: string): Symbol
    new_with_parent(): Scope
    peek(name: string): Symbol | null
    ref(): Scope
    set(name: string, symbol?: Symbol | null): void
    set_boolean(name: string, value: boolean): void
    set_double(name: string, value: number): void
    set_object(name: string, value?: GObject.Object | null): void
    set_resolver(resolver: ScopeResolver): void
    set_string(name: string, value?: string | null): void
    set_strv(name: string, value?: string[] | null): void
    set_value(name: string, value?: any | null): void
    set_variant(name: string, value?: GLib.Variant | null): void
    take(name: string, symbol?: Symbol | null): void
    unref(): void
    static name: string
    static new(): Scope
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Scope
}
export class Symbol {
    /* Methods of Template.Symbol */
    assign_boolean(v_bool: boolean): void
    assign_double(v_double: number): void
    assign_object(v_object?: GObject.Object | null): void
    assign_string(v_string: string): void
    assign_strv(strv?: string[] | null): void
    assign_value(value: any): void
    assign_variant(v_variant?: GLib.Variant | null): void
    get_expr(): [ /* returnType */ Expr, /* params */ string[] | null ]
    get_symbol_type(): SymbolType
    get_value(value: any): void
    ref(): Symbol
    unref(): void
    static name: string
    static new(): Symbol
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Symbol
}
export abstract class TemplateClass {
    /* Fields of Template.TemplateClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class TemplateLocatorClass {
    /* Fields of Template.TemplateLocatorClass */
    parent_instance: GObject.ObjectClass
    locate: (self: TemplateLocator, path: string) => Gio.InputStream
    static name: string
}
export class Expr {
    /* Methods of Template.Expr */
    eval(scope: Scope, return_value: any): boolean
    new_getattr(attr: string): Expr
    new_gi_call(name: string, params: Expr): Expr
    new_invert_boolean(): Expr
    new_setattr(attr: string, right: Expr): Expr
    ref(): Expr
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_boolean(value: boolean): Expr
    static new_flow(type: ExprType, condition: Expr, primary: Expr, secondary: Expr): Expr
    static new_fn_call(builtin: ExprBuiltin, param: Expr): Expr
    static new_number(value: number): Expr
    static new_require(typelib: string, version: string): Expr
    static new_simple(type: ExprType, left: Expr, right: Expr): Expr
    static new_string(value: string, length: number): Expr
    static new_symbol_assign(symbol: string, right: Expr): Expr
    static new_symbol_ref(symbol: string): Expr
    static new_user_fn_call(name: string, param: Expr): Expr
    static from_string(str: string): Expr
}