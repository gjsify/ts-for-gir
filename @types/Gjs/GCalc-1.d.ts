/**
 * GCalc-1
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as Gee from './Gee-0.8';

export enum AssigError {
    INVALID_STRUCTURE_ERROR,
}
export enum FunctionError {
    INVALID_PARAMETERS_ERROR,
    INVOCATION_ERROR,
}
export enum ParserError {
    INVALID_TOKEN_ERROR,
    INVALID_EXPRESSION_ERROR,
}
export enum GroupError {
    INVALID_POLYNOMIAL,
    INVALID_INTERNAL_TERM,
}
export enum SolverError {
    EXPRESSION_ERROR,
}
export enum TermError {
    INVALID_OPERATOR,
    EVALUATION_FAIL,
}
export enum VariableError {
    INVALID_PARENT,
    INVALID_EXPRESSION_DEFINITION,
    EVALUATION_FAIL,
}
export enum GParserTokenType {
    NONE,
    EOF,
    IDENTIFIER,
    INTEGER_LITERAL,
    REAL_LITERAL,
    STAR,
    PLUS,
    DIV,
    MINUS,
    ASSIGN,
    OPEN_PARENS,
    CLOSE_PARENS,
    CARRET,
    CLOSE_BRACE,
    CLOSE_BRACKET,
    OPEN_BRACE,
    OPEN_BRACKET,
    STRING_LITERAL,
    OP_AND,
    OP_COALESCING,
    OP_DEC,
    OP_EQ,
    OP_GE,
    OP_GT,
    OP_INC,
    OP_LE,
    OP_LT,
    OP_NE,
    OP_NEG,
    OP_OR,
    OP_PTR,
    OP_SHIFT_LEFT,
    SEMICOLON,
    TILDE,
    COLON,
    COMMA,
    DOUBLE_COLON,
    DOT,
    ELLIPSIS,
    INTERR,
    HASH,
}
export enum GroupLevel {
    ONE,
    TWO,
    THREE,
}
export interface Assign_ConstructProps extends GObject.Object_ConstructProps {
}
export class Assign {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.Assign */
    evaluate(): Expression
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
    connect(sigName: "notify", callback: (($obj: Assign, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Assign, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Assign_ConstructProps)
    _init (config?: Assign_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BinaryOperator_ConstructProps extends GObject.Object_ConstructProps {
}
export class BinaryOperator {
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
    connect(sigName: "notify", callback: (($obj: BinaryOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BinaryOperator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BinaryOperator_ConstructProps)
    _init (config?: BinaryOperator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Constant_ConstructProps extends GObject.Object_ConstructProps {
}
export class Constant {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.Constant */
    real(): number
    imag(): number
    zero(): void
    add(c: Constant): Constant
    multiply(c: Constant): Constant
    divide(c: Constant): Constant
    neg(): Constant
    pow(c: Constant): Constant
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
    /* Virtual methods of GCalc.Constant */
    vfunc_real(): number
    vfunc_imag(): number
    vfunc_zero(): void
    vfunc_add(c: Constant): Constant
    vfunc_multiply(c: Constant): Constant
    vfunc_divide(c: Constant): Constant
    vfunc_neg(): Constant
    vfunc_pow(c: Constant): Constant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Constant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Constant, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Constant_ConstructProps)
    _init (config?: Constant_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Division_ConstructProps extends GObject.Object_ConstructProps {
}
export class Division {
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
    connect(sigName: "notify", callback: (($obj: Division, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Division, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Division_ConstructProps)
    _init (config?: Division_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Expression_ConstructProps extends GObject.Object_ConstructProps {
    parent?: Expression
}
export class Expression {
    /* Properties of GCalc.Expression */
    parent: Expression
    readonly expressions: ExpressionContainer
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.Expression */
    to_string(): string
    solve(): Result
    get_parent(): Expression
    set_parent(value: Expression): void
    get_expressions(): ExpressionContainer
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
    /* Virtual methods of GCalc.Expression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Expression_ConstructProps)
    _init (config?: Expression_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ErrorExpression_ConstructProps extends GObject.Object_ConstructProps {
}
export class ErrorExpression {
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
    connect(sigName: "notify", callback: (($obj: ErrorExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ErrorExpression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ErrorExpression_ConstructProps)
    _init (config?: ErrorExpression_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Function_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    n_params?: number
    closed?: boolean
}
export class Function {
    /* Properties of GCalc.Function */
    readonly param_types: ExpressionContainer
    name: string
    n_params: number
    closed: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.Function */
    evaluate(): Expression
    verify_params(): boolean
    get_param_types(): ExpressionContainer
    get_name(): string
    set_name(value: string): void
    get_n_params(): number
    set_n_params(value: number): void
    get_closed(): boolean
    set_closed(value: boolean): void
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
    /* Virtual methods of GCalc.Function */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::param-types", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::param-types", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-params", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-params", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Function_ConstructProps)
    _init (config?: Function_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ErrorResult_ConstructProps extends GObject.Object_ConstructProps {
}
export class ErrorResult {
    /* Properties of GCalc.ErrorResult */
    readonly message: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.ErrorResult */
    get_message(): string
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
    /* Virtual methods of GCalc.ErrorResult */
    vfunc_get_message(): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::message", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ErrorResult_ConstructProps)
    _init (config?: ErrorResult_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Group_ConstructProps extends GObject.Object_ConstructProps {
    level?: GroupLevel
    closed?: boolean
}
export class Group {
    /* Properties of GCalc.Group */
    level: GroupLevel
    closed: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.Group */
    evaluate(): Expression
    get_level(): GroupLevel
    set_level(value: GroupLevel): void
    get_closed(): boolean
    set_closed(value: boolean): void
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
    /* Virtual methods of GCalc.Group */
    vfunc_evaluate(): Expression
    vfunc_get_level(): GroupLevel
    vfunc_set_level(value: GroupLevel): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::level", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Group_ConstructProps)
    _init (config?: Group_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Hashable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Hashable {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.Hashable */
    hash(): number
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
    /* Virtual methods of GCalc.Hashable */
    vfunc_hash(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Hashable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Hashable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Hashable_ConstructProps)
    _init (config?: Hashable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MathEquation_ConstructProps extends GObject.Object_ConstructProps {
}
export class MathEquation {
    /* Properties of GCalc.MathEquation */
    readonly variables: ExpressionHashMap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.MathEquation */
    get_variables(): ExpressionHashMap
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
    /* Virtual methods of GCalc.MathEquation */
    vfunc_get_variables(): ExpressionHashMap
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::variables", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variables", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MathEquation_ConstructProps)
    _init (config?: MathEquation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MathEquationManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class MathEquationManager {
    /* Properties of GCalc.MathEquationManager */
    readonly equations: ExpressionContainer
    readonly functions: ExpressionContainer
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.MathEquationManager */
    find_variable(name: string): Variable
    get_equations(): ExpressionContainer
    get_functions(): ExpressionContainer
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
    /* Virtual methods of GCalc.MathEquationManager */
    vfunc_find_variable(name: string): Variable
    vfunc_get_equations(): ExpressionContainer
    vfunc_get_functions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::equations", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equations", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::functions", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::functions", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MathEquationManager_ConstructProps)
    _init (config?: MathEquationManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Minus_ConstructProps extends GObject.Object_ConstructProps {
}
export class Minus {
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
    connect(sigName: "notify", callback: (($obj: Minus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Minus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Minus_ConstructProps)
    _init (config?: Minus_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Multiply_ConstructProps extends GObject.Object_ConstructProps {
}
export class Multiply {
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
    connect(sigName: "notify", callback: (($obj: Multiply, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Multiply, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Multiply_ConstructProps)
    _init (config?: Multiply_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Operator_ConstructProps extends GObject.Object_ConstructProps {
}
export class Operator {
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
    connect(sigName: "notify", callback: (($obj: Operator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Operator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Operator_ConstructProps)
    _init (config?: Operator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Plus_ConstructProps extends GObject.Object_ConstructProps {
}
export class Plus {
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
    connect(sigName: "notify", callback: (($obj: Plus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Plus_ConstructProps)
    _init (config?: Plus_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Polynomial_ConstructProps extends GObject.Object_ConstructProps {
}
export class Polynomial {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.Polynomial */
    evaluate(): Expression
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
    /* Virtual methods of GCalc.Polynomial */
    vfunc_evaluate(): Expression
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Polynomial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Polynomial, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Polynomial_ConstructProps)
    _init (config?: Polynomial_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Pow_ConstructProps extends GObject.Object_ConstructProps {
}
export class Pow {
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
    connect(sigName: "notify", callback: (($obj: Pow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pow_ConstructProps)
    _init (config?: Pow_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Result_ConstructProps extends GObject.Object_ConstructProps {
}
export class Result {
    /* Properties of GCalc.Result */
    readonly expression: Expression
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.Result */
    to_string(): string
    get_expression(): Expression
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
    /* Virtual methods of GCalc.Result */
    vfunc_to_string(): string
    vfunc_get_expression(): Expression
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::expression", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Result_ConstructProps)
    _init (config?: Result_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Solver_ConstructProps extends GObject.Object_ConstructProps {
    equation_manager?: MathEquationManager
}
export class Solver {
    /* Properties of GCalc.Solver */
    equation_manager: MathEquationManager
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.Solver */
    solve(str: string): Result
    get_equation_manager(): MathEquationManager
    set_equation_manager(value: MathEquationManager): void
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
    /* Virtual methods of GCalc.Solver */
    vfunc_solve(str: string): Result
    vfunc_get_equation_manager(): MathEquationManager
    vfunc_set_equation_manager(value: MathEquationManager): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Solver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Solver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::equation-manager", callback: (($obj: Solver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equation-manager", callback: (($obj: Solver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Solver_ConstructProps)
    _init (config?: Solver_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Term_ConstructProps extends GObject.Object_ConstructProps {
}
export class Term {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.Term */
    add(t: Term): Expression
    evaluate(): Expression
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
    /* Virtual methods of GCalc.Term */
    vfunc_add(t: Term): Expression
    vfunc_evaluate(): Expression
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Term, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Term, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Term_ConstructProps)
    _init (config?: Term_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static evaluate_constants(c1: Constant, c2: Constant, op: Operator): Expression
    static $gtype: GObject.Type
}
export interface Variable_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    value?: Constant
    bind?: Variable
}
export class Variable {
    /* Properties of GCalc.Variable */
    name: string
    value: Constant
    bind: Variable
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.Variable */
    evaluate(): Expression
    get_name(): string
    set_name(value: string): void
    get_value(): Constant
    set_value(value: Constant): void
    get_bind(): Variable
    set_bind(value: Variable): void
    get_binded(): boolean
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
    /* Virtual methods of GCalc.Variable */
    vfunc_evaluate(): Expression
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_value(): Constant
    vfunc_set_value(value: Constant): void
    vfunc_get_bind(): Variable
    vfunc_set_bind(value: Variable): void
    vfunc_get_binded(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bind", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Variable_ConstructProps)
    _init (config?: Variable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ExpressionContainer_ConstructProps extends Gee.ArrayList_ConstructProps {
    parent?: Expression
}
export class ExpressionContainer {
    /* Properties of GCalc.ExpressionContainer */
    parent: Expression
    /* Properties of Gee.AbstractBidirList */
    readonly read_only_view: Gee.BidirList
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly read_only: boolean
    /* Fields of GCalc.ExpressionContainer */
    parent_instance: Gee.ArrayList
    priv: ExpressionContainerPrivate
    /* Fields of Gee.ArrayList */
    _items: object[]
    _items_length1: number
    _size: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.ExpressionContainer */
    add(exp: Expression): void
    remove_at(index: number): Expression
    remove(exp: Expression): Expression
    get_object(position: number): GObject.Object | null
    find(exp: Expression): Expression | null
    find_named(name: string): Expression | null
    get_parent(): Expression
    set_parent(value: Expression): void
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
    /* Methods of Gio.ListModel */
    get_item_type(): GObject.Type
    get_n_items(): number
    get_item(position: number): GObject.Object | null
    items_changed(position: number, removed: number, added: number): void
    /* Virtual methods of GCalc.ExpressionContainer */
    vfunc_get_item(position: number): GObject.Object | null
    vfunc_get_item_type(): GObject.Type
    vfunc_get_n_items(): number
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
    connect(sigName: "notify", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.ListModel */
    connect(sigName: "items-changed", callback: (($obj: ExpressionContainer, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: (($obj: ExpressionContainer, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    connect(sigName: "notify::parent", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ExpressionContainer_ConstructProps)
    _init (config?: ExpressionContainer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ExpressionContainer
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, equal_func: Gee.EqualDataFunc | null): ExpressionContainer
    static $gtype: GObject.Type
}
export interface ExpressionHashMap_ConstructProps extends Gee.HashMap_ConstructProps {
    parent?: Expression
}
export class ExpressionHashMap {
    /* Properties of GCalc.ExpressionHashMap */
    parent: Expression
    /* Properties of Gee.AbstractMap */
    readonly size: number
    readonly read_only: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    readonly read_only_view: Gee.Map
    /* Fields of GCalc.ExpressionHashMap */
    parent_instance: Gee.HashMap
    priv: ExpressionHashMapPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.ExpressionHashMap */
    add(exp: Expression): void
    remove(exp: Expression): void
    find_named(name: string): Expression
    get_parent(): Expression
    set_parent(value: Expression): void
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
    connect(sigName: "notify", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keys", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::values", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::entries", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ExpressionHashMap_ConstructProps)
    _init (config?: ExpressionHashMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ExpressionHashMap
    static new(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_hash_func: Gee.HashDataFunc | null, key_equal_func: Gee.EqualDataFunc | null, value_equal_func: Gee.EqualDataFunc | null): ExpressionHashMap
    static $gtype: GObject.Type
}
export interface GFunctionAcos_ConstructProps extends GFunction_ConstructProps {
}
export class GFunctionAcos {
    /* Fields of GCalc.GFunctionAcos */
    parent_instance: GFunction
    priv: GFunctionAcosPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunction */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionAcos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionAcos, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GFunctionAcos_ConstructProps)
    _init (config?: GFunctionAcos_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GFunctionAcos
    static $gtype: GObject.Type
}
export interface GFunctionAcosh_ConstructProps extends GFunction_ConstructProps {
}
export class GFunctionAcosh {
    /* Fields of GCalc.GFunctionAcosh */
    parent_instance: GFunction
    priv: GFunctionAcoshPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunction */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionAcosh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionAcosh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GFunctionAcosh_ConstructProps)
    _init (config?: GFunctionAcosh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GFunctionAcosh
    static $gtype: GObject.Type
}
export interface GFunctionAsin_ConstructProps extends GFunction_ConstructProps {
}
export class GFunctionAsin {
    /* Fields of GCalc.GFunctionAsin */
    parent_instance: GFunction
    priv: GFunctionAsinPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunction */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionAsin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionAsin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GFunctionAsin_ConstructProps)
    _init (config?: GFunctionAsin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GFunctionAsin
    static $gtype: GObject.Type
}
export interface GFunctionAsinh_ConstructProps extends GFunction_ConstructProps {
}
export class GFunctionAsinh {
    /* Fields of GCalc.GFunctionAsinh */
    parent_instance: GFunction
    priv: GFunctionAsinhPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunction */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionAsinh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionAsinh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GFunctionAsinh_ConstructProps)
    _init (config?: GFunctionAsinh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GFunctionAsinh
    static $gtype: GObject.Type
}
export interface GFunctionAtan_ConstructProps extends GFunction_ConstructProps {
}
export class GFunctionAtan {
    /* Fields of GCalc.GFunctionAtan */
    parent_instance: GFunction
    priv: GFunctionAtanPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunction */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionAtan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionAtan, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GFunctionAtan_ConstructProps)
    _init (config?: GFunctionAtan_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GFunctionAtan
    static $gtype: GObject.Type
}
export interface GFunctionAtanh_ConstructProps extends GFunction_ConstructProps {
}
export class GFunctionAtanh {
    /* Fields of GCalc.GFunctionAtanh */
    parent_instance: GFunction
    priv: GFunctionAtanhPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunction */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionAtanh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionAtanh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GFunctionAtanh_ConstructProps)
    _init (config?: GFunctionAtanh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GFunctionAtanh
    static $gtype: GObject.Type
}
export interface GFunctionCos_ConstructProps extends GFunction_ConstructProps {
}
export class GFunctionCos {
    /* Fields of GCalc.GFunctionCos */
    parent_instance: GFunction
    priv: GFunctionCosPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunction */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionCos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionCos, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GFunctionCos_ConstructProps)
    _init (config?: GFunctionCos_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GFunctionCos
    static $gtype: GObject.Type
}
export interface GFunctionCosh_ConstructProps extends GFunction_ConstructProps {
}
export class GFunctionCosh {
    /* Fields of GCalc.GFunctionCosh */
    parent_instance: GFunction
    priv: GFunctionCoshPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunction */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionCosh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionCosh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GFunctionCosh_ConstructProps)
    _init (config?: GFunctionCosh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GFunctionCosh
    static $gtype: GObject.Type
}
export interface GFunctionExp_ConstructProps extends GFunction_ConstructProps {
}
export class GFunctionExp {
    /* Fields of GCalc.GFunctionExp */
    parent_instance: GFunction
    priv: GFunctionExpPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunction */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GFunctionExp_ConstructProps)
    _init (config?: GFunctionExp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GFunctionExp
    static $gtype: GObject.Type
}
export interface GFunctionLog_ConstructProps extends GFunction_ConstructProps {
}
export class GFunctionLog {
    /* Fields of GCalc.GFunctionLog */
    parent_instance: GFunction
    priv: GFunctionLogPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunction */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionLog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionLog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GFunctionLog_ConstructProps)
    _init (config?: GFunctionLog_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GFunctionLog
    static $gtype: GObject.Type
}
export interface GFunctionSin_ConstructProps extends GFunction_ConstructProps {
}
export class GFunctionSin {
    /* Fields of GCalc.GFunctionSin */
    parent_instance: GFunction
    priv: GFunctionSinPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunction */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionSin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionSin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GFunctionSin_ConstructProps)
    _init (config?: GFunctionSin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GFunctionSin
    static $gtype: GObject.Type
}
export interface GFunctionSinh_ConstructProps extends GFunction_ConstructProps {
}
export class GFunctionSinh {
    /* Fields of GCalc.GFunctionSinh */
    parent_instance: GFunction
    priv: GFunctionSinhPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunction */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionSinh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionSinh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GFunctionSinh_ConstructProps)
    _init (config?: GFunctionSinh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GFunctionSinh
    static $gtype: GObject.Type
}
export interface GFunctionSqrt_ConstructProps extends GFunction_ConstructProps {
}
export class GFunctionSqrt {
    /* Fields of GCalc.GFunctionSqrt */
    parent_instance: GFunction
    priv: GFunctionSqrtPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunction */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionSqrt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionSqrt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GFunctionSqrt_ConstructProps)
    _init (config?: GFunctionSqrt_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GFunctionSqrt
    static $gtype: GObject.Type
}
export interface GFunctionTan_ConstructProps extends GFunction_ConstructProps {
}
export class GFunctionTan {
    /* Fields of GCalc.GFunctionTan */
    parent_instance: GFunction
    priv: GFunctionTanPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunction */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionTan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionTan, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GFunctionTan_ConstructProps)
    _init (config?: GFunctionTan_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GFunctionTan
    static $gtype: GObject.Type
}
export interface GFunctionTanh_ConstructProps extends GFunction_ConstructProps {
}
export class GFunctionTanh {
    /* Fields of GCalc.GFunctionTanh */
    parent_instance: GFunction
    priv: GFunctionTanhPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunction */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionTanh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionTanh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GFunctionTanh_ConstructProps)
    _init (config?: GFunctionTanh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GFunctionTanh
    static $gtype: GObject.Type
}
export interface GExpression_ConstructProps extends GObject.Object_ConstructProps {
    parent?: Expression
}
export class GExpression {
    /* Properties of GCalc.Expression */
    parent: Expression
    readonly expressions: ExpressionContainer
    /* Fields of GCalc.GExpression */
    parent_instance: GObject.Object
    priv: GExpressionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Methods of GCalc.Expression */
    get_parent(): Expression
    set_parent(value: Expression): void
    get_expressions(): ExpressionContainer
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GExpression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: GExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GExpression, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expressions", callback: (($obj: GExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GExpression, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GExpression_ConstructProps)
    _init (config?: GExpression_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GExpression
    static $gtype: GObject.Type
}
export interface GErrorExpression_ConstructProps extends GExpression_ConstructProps {
}
export class GErrorExpression {
    /* Fields of GCalc.GErrorExpression */
    parent_instance: GExpression
    priv: GErrorExpressionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GErrorExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GErrorExpression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GErrorExpression_ConstructProps)
    _init (config?: GErrorExpression_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GErrorExpression
    static $gtype: GObject.Type
}
export interface GAssign_ConstructProps extends GExpression_ConstructProps {
}
export class GAssign {
    /* Fields of GCalc.GAssign */
    parent_instance: GExpression
    priv: GAssignPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Methods of GCalc.Assign */
    evaluate(): Expression
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GAssign, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GAssign, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GAssign_ConstructProps)
    _init (config?: GAssign_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GAssign
    static $gtype: GObject.Type
}
export interface GConstant_ConstructProps extends GExpression_ConstructProps {
}
export class GConstant {
    /* Fields of GCalc.GConstant */
    parent_instance: GExpression
    priv: GConstantPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GConstant */
    subtract(c: Constant): Constant
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Methods of GCalc.Constant */
    real(): number
    imag(): number
    zero(): void
    add(c: Constant): Constant
    multiply(c: Constant): Constant
    divide(c: Constant): Constant
    neg(): Constant
    pow(c: Constant): Constant
    /* Virtual methods of GCalc.GConstant */
    vfunc_real(): number
    vfunc_imag(): number
    vfunc_zero(): void
    vfunc_add(c: Constant): Constant
    vfunc_multiply(c: Constant): Constant
    vfunc_divide(c: Constant): Constant
    vfunc_neg(): Constant
    vfunc_pow(c: Constant): Constant
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GConstant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GConstant, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GConstant_ConstructProps)
    _init (config?: GConstant_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static integer(val: number): GConstant
    static unsigned_integer(val: number): GConstant
    static double(val: number): GConstant
    static complex(real: number, imag: number): GConstant
    static new(): GConstant
    static $gtype: GObject.Type
}
export interface GDivision_ConstructProps extends GExpression_ConstructProps {
}
export class GDivision {
    /* Fields of GCalc.GDivision */
    parent_instance: GExpression
    priv: GDivisionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDivision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GDivision, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GDivision_ConstructProps)
    _init (config?: GDivision_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GDivision
    static $gtype: GObject.Type
}
export interface GErrorResult_ConstructProps extends GObject.Object_ConstructProps {
}
export class GErrorResult {
    /* Properties of GCalc.Result */
    readonly expression: Expression
    /* Properties of GCalc.ErrorResult */
    readonly message: string
    /* Fields of GCalc.GErrorResult */
    parent_instance: GObject.Object
    priv: GErrorResultPrivate
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
    /* Methods of GCalc.Result */
    to_string(): string
    get_expression(): Expression
    /* Methods of GCalc.ErrorResult */
    get_message(): string
    /* Virtual methods of GCalc.GErrorResult */
    vfunc_to_string(): string
    vfunc_get_expression(): Expression
    vfunc_get_message(): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GErrorResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::expression", callback: (($obj: GErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: GErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message", callback: (($obj: GErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: GErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GErrorResult_ConstructProps)
    _init (config?: GErrorResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(msg: string): GErrorResult
    static $gtype: GObject.Type
}
export interface GFunction_ConstructProps extends GExpression_ConstructProps {
    name?: string
    n_params?: number
    closed?: boolean
}
export class GFunction {
    /* Properties of GCalc.Function */
    readonly param_types: ExpressionContainer
    name: string
    n_params: number
    closed: boolean
    /* Fields of GCalc.GFunction */
    parent_instance: GExpression
    priv: GFunctionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Methods of GCalc.Function */
    verify_params(): boolean
    get_param_types(): ExpressionContainer
    get_name(): string
    set_name(value: string): void
    get_n_params(): number
    set_n_params(value: number): void
    get_closed(): boolean
    set_closed(value: boolean): void
    /* Methods of GCalc.Hashable */
    hash(): number
    /* Virtual methods of GCalc.GFunction */
    vfunc_evaluate(): Expression
    vfunc_verify_params(): boolean
    vfunc_get_param_types(): ExpressionContainer
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_n_params(): number
    vfunc_set_n_params(value: number): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::param-types", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::param-types", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-params", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-params", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GFunction_ConstructProps)
    _init (config?: GFunction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static with_name(name: string, nparams: number): GFunction
    static new(): GFunction
    static $gtype: GObject.Type
}
export interface GMathEquation_ConstructProps extends GExpression_ConstructProps {
}
export class GMathEquation {
    /* Properties of GCalc.MathEquation */
    readonly variables: ExpressionHashMap
    /* Fields of GCalc.GMathEquation */
    parent_instance: GExpression
    priv: GMathEquationPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Methods of GCalc.MathEquation */
    get_variables(): ExpressionHashMap
    /* Virtual methods of GCalc.GMathEquation */
    vfunc_get_variables(): ExpressionHashMap
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GMathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GMathEquation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::variables", callback: (($obj: GMathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variables", callback: (($obj: GMathEquation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GMathEquation_ConstructProps)
    _init (config?: GMathEquation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GMathEquation
    static $gtype: GObject.Type
}
export interface GMathEquationManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class GMathEquationManager {
    /* Properties of GCalc.MathEquationManager */
    readonly equations: ExpressionContainer
    readonly functions: ExpressionContainer
    /* Fields of GCalc.GMathEquationManager */
    parent_instance: GObject.Object
    priv: GMathEquationManagerPrivate
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
    /* Methods of GCalc.MathEquationManager */
    find_variable(name: string): Variable
    get_equations(): ExpressionContainer
    get_functions(): ExpressionContainer
    /* Virtual methods of GCalc.GMathEquationManager */
    vfunc_find_variable(name: string): Variable
    vfunc_get_equations(): ExpressionContainer
    vfunc_get_functions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GMathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GMathEquationManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::equations", callback: (($obj: GMathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equations", callback: (($obj: GMathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::functions", callback: (($obj: GMathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::functions", callback: (($obj: GMathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GMathEquationManager_ConstructProps)
    _init (config?: GMathEquationManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GMathEquationManager
    static $gtype: GObject.Type
}
export interface GMinus_ConstructProps extends GExpression_ConstructProps {
}
export class GMinus {
    /* Fields of GCalc.GMinus */
    parent_instance: GExpression
    priv: GMinusPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GMinus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GMinus_ConstructProps)
    _init (config?: GMinus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GMinus
    static $gtype: GObject.Type
}
export interface GMultiply_ConstructProps extends GExpression_ConstructProps {
}
export class GMultiply {
    /* Fields of GCalc.GMultiply */
    parent_instance: GExpression
    priv: GMultiplyPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GMultiply, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GMultiply, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GMultiply_ConstructProps)
    _init (config?: GMultiply_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GMultiply
    static $gtype: GObject.Type
}
export interface GParser_ConstructProps extends GObject.Object_ConstructProps {
}
export class GParser {
    /* Fields of GCalc.GParser */
    parent_instance: GObject.Object
    priv: GParserPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GParser */
    parse(str: string, eqman: MathEquationManager): void
    read_token(): GParserTokenType
    token_to_string(): string
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
    connect(sigName: "notify", callback: (($obj: GParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GParser_ConstructProps)
    _init (config?: GParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GParser
    static $gtype: GObject.Type
}
export interface GPlus_ConstructProps extends GExpression_ConstructProps {
}
export class GPlus {
    /* Fields of GCalc.GPlus */
    parent_instance: GExpression
    priv: GPlusPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GPlus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GPlus_ConstructProps)
    _init (config?: GPlus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GPlus
    static $gtype: GObject.Type
}
export interface GPolynomial_ConstructProps extends GExpression_ConstructProps {
}
export class GPolynomial {
    /* Fields of GCalc.GPolynomial */
    parent_instance: GExpression
    priv: GPolynomialPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Methods of GCalc.Polynomial */
    evaluate(): Expression
    /* Virtual methods of GCalc.GPolynomial */
    vfunc_evaluate(): Expression
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GPolynomial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GPolynomial, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GPolynomial_ConstructProps)
    _init (config?: GPolynomial_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GPolynomial
    static $gtype: GObject.Type
}
export interface GPow_ConstructProps extends GExpression_ConstructProps {
}
export class GPow {
    /* Fields of GCalc.GPow */
    parent_instance: GExpression
    priv: GPowPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GPow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GPow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GPow_ConstructProps)
    _init (config?: GPow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GPow
    static $gtype: GObject.Type
}
export interface GResult_ConstructProps extends GObject.Object_ConstructProps {
}
export class GResult {
    /* Properties of GCalc.Result */
    readonly expression: Expression
    /* Fields of GCalc.GResult */
    parent_instance: GObject.Object
    priv: GResultPrivate
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
    /* Methods of GCalc.Result */
    to_string(): string
    get_expression(): Expression
    /* Virtual methods of GCalc.GResult */
    vfunc_to_string(): string
    vfunc_get_expression(): Expression
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::expression", callback: (($obj: GResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: GResult, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GResult_ConstructProps)
    _init (config?: GResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(exp: Expression): GResult
    static $gtype: GObject.Type
}
export interface GGroup_ConstructProps extends GExpression_ConstructProps {
    level?: GroupLevel
    closed?: boolean
}
export class GGroup {
    /* Properties of GCalc.Group */
    level: GroupLevel
    closed: boolean
    /* Fields of GCalc.GGroup */
    parent_instance: GExpression
    priv: GGroupPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Methods of GCalc.Group */
    evaluate(): Expression
    get_level(): GroupLevel
    set_level(value: GroupLevel): void
    get_closed(): boolean
    set_closed(value: boolean): void
    /* Virtual methods of GCalc.GGroup */
    vfunc_evaluate(): Expression
    vfunc_get_level(): GroupLevel
    vfunc_set_level(value: GroupLevel): void
    vfunc_get_closed(): boolean
    vfunc_set_closed(value: boolean): void
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::level", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GGroup_ConstructProps)
    _init (config?: GGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GGroup
    static $gtype: GObject.Type
}
export interface GSolver_ConstructProps extends GObject.Object_ConstructProps {
    equation_manager?: MathEquationManager
}
export class GSolver {
    /* Properties of GCalc.Solver */
    equation_manager: MathEquationManager
    /* Fields of GCalc.GSolver */
    parent_instance: GObject.Object
    priv: GSolverPrivate
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
    /* Methods of GCalc.Solver */
    solve(str: string): Result
    get_equation_manager(): MathEquationManager
    set_equation_manager(value: MathEquationManager): void
    /* Virtual methods of GCalc.GSolver */
    vfunc_solve(str: string): Result
    vfunc_get_equation_manager(): MathEquationManager
    vfunc_set_equation_manager(value: MathEquationManager): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GSolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GSolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::equation-manager", callback: (($obj: GSolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equation-manager", callback: (($obj: GSolver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GSolver_ConstructProps)
    _init (config?: GSolver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GSolver
    static $gtype: GObject.Type
}
export interface GTerm_ConstructProps extends GExpression_ConstructProps {
}
export class GTerm {
    /* Fields of GCalc.GTerm */
    parent_instance: GExpression
    priv: GTermPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Methods of GCalc.Term */
    add(t: Term): Expression
    evaluate(): Expression
    /* Virtual methods of GCalc.GTerm */
    vfunc_add(t: Term): Expression
    vfunc_evaluate(): Expression
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GTerm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GTerm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GTerm_ConstructProps)
    _init (config?: GTerm_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GTerm
    static evaluate_constants(c1: Constant, c2: Constant, op: Operator): Expression
    static $gtype: GObject.Type
}
export interface GVariable_ConstructProps extends GExpression_ConstructProps {
    name?: string
    value?: Constant
    bind?: Variable
}
export class GVariable {
    /* Properties of GCalc.Variable */
    name: string
    value: Constant
    bind: Variable
    /* Fields of GCalc.GVariable */
    parent_instance: GExpression
    priv: GVariablePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    to_string(): string
    solve(): Result
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
    /* Methods of GCalc.Variable */
    evaluate(): Expression
    get_name(): string
    set_name(value: string): void
    get_value(): Constant
    set_value(value: Constant): void
    get_bind(): Variable
    set_bind(value: Variable): void
    get_binded(): boolean
    /* Methods of GCalc.Hashable */
    hash(): number
    /* Virtual methods of GCalc.GVariable */
    vfunc_evaluate(): Expression
    vfunc_get_name(): string
    vfunc_set_name(value: string): void
    vfunc_get_value(): Constant
    vfunc_set_value(value: Constant): void
    vfunc_get_bind(): Variable
    vfunc_set_bind(value: Variable): void
    vfunc_get_binded(): boolean
    vfunc_hash(): number
    /* Virtual methods of GCalc.GExpression */
    vfunc_to_string(): string
    vfunc_solve(): Result
    vfunc_get_parent(): Expression
    vfunc_set_parent(value: Expression): void
    vfunc_get_expressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bind", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GVariable_ConstructProps)
    _init (config?: GVariable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): GVariable
    static new(): GVariable
    static $gtype: GObject.Type
}
export abstract class ExpressionContainerClass {
    /* Fields of GCalc.ExpressionContainerClass */
    parent_class: Gee.ArrayListClass
    static name: string
}
export class ExpressionContainerPrivate {
    static name: string
}
export abstract class ExpressionHashMapClass {
    /* Fields of GCalc.ExpressionHashMapClass */
    parent_class: Gee.HashMapClass
    static name: string
}
export class ExpressionHashMapPrivate {
    static name: string
}
export abstract class GFunctionAcosClass {
    /* Fields of GCalc.GFunctionAcosClass */
    parent_class: GFunctionClass
    static name: string
}
export class GFunctionAcosPrivate {
    static name: string
}
export abstract class GFunctionAcoshClass {
    /* Fields of GCalc.GFunctionAcoshClass */
    parent_class: GFunctionClass
    static name: string
}
export class GFunctionAcoshPrivate {
    static name: string
}
export abstract class GFunctionAsinClass {
    /* Fields of GCalc.GFunctionAsinClass */
    parent_class: GFunctionClass
    static name: string
}
export class GFunctionAsinPrivate {
    static name: string
}
export abstract class GFunctionAsinhClass {
    /* Fields of GCalc.GFunctionAsinhClass */
    parent_class: GFunctionClass
    static name: string
}
export class GFunctionAsinhPrivate {
    static name: string
}
export abstract class GFunctionAtanClass {
    /* Fields of GCalc.GFunctionAtanClass */
    parent_class: GFunctionClass
    static name: string
}
export class GFunctionAtanPrivate {
    static name: string
}
export abstract class GFunctionAtanhClass {
    /* Fields of GCalc.GFunctionAtanhClass */
    parent_class: GFunctionClass
    static name: string
}
export class GFunctionAtanhPrivate {
    static name: string
}
export abstract class GFunctionCosClass {
    /* Fields of GCalc.GFunctionCosClass */
    parent_class: GFunctionClass
    static name: string
}
export class GFunctionCosPrivate {
    static name: string
}
export abstract class GFunctionCoshClass {
    /* Fields of GCalc.GFunctionCoshClass */
    parent_class: GFunctionClass
    static name: string
}
export class GFunctionCoshPrivate {
    static name: string
}
export abstract class GFunctionExpClass {
    /* Fields of GCalc.GFunctionExpClass */
    parent_class: GFunctionClass
    static name: string
}
export class GFunctionExpPrivate {
    static name: string
}
export abstract class GFunctionLogClass {
    /* Fields of GCalc.GFunctionLogClass */
    parent_class: GFunctionClass
    static name: string
}
export class GFunctionLogPrivate {
    static name: string
}
export abstract class GFunctionSinClass {
    /* Fields of GCalc.GFunctionSinClass */
    parent_class: GFunctionClass
    static name: string
}
export class GFunctionSinPrivate {
    static name: string
}
export abstract class GFunctionSinhClass {
    /* Fields of GCalc.GFunctionSinhClass */
    parent_class: GFunctionClass
    static name: string
}
export class GFunctionSinhPrivate {
    static name: string
}
export abstract class GFunctionSqrtClass {
    /* Fields of GCalc.GFunctionSqrtClass */
    parent_class: GFunctionClass
    static name: string
}
export class GFunctionSqrtPrivate {
    static name: string
}
export abstract class GFunctionTanClass {
    /* Fields of GCalc.GFunctionTanClass */
    parent_class: GFunctionClass
    static name: string
}
export class GFunctionTanPrivate {
    static name: string
}
export abstract class GFunctionTanhClass {
    /* Fields of GCalc.GFunctionTanhClass */
    parent_class: GFunctionClass
    static name: string
}
export class GFunctionTanhPrivate {
    static name: string
}
export abstract class GExpressionClass {
    /* Fields of GCalc.GExpressionClass */
    parent_class: GObject.ObjectClass
    to_string: (self: GExpression) => string
    solve: (self: GExpression) => Result
    static name: string
}
export class GExpressionPrivate {
    static name: string
}
export abstract class GErrorExpressionClass {
    /* Fields of GCalc.GErrorExpressionClass */
    parent_class: GExpressionClass
    static name: string
}
export class GErrorExpressionPrivate {
    static name: string
}
export abstract class GAssignClass {
    /* Fields of GCalc.GAssignClass */
    parent_class: GExpressionClass
    static name: string
}
export class GAssignPrivate {
    static name: string
}
export abstract class GConstantClass {
    /* Fields of GCalc.GConstantClass */
    parent_class: GExpressionClass
    static name: string
}
export class GConstantPrivate {
    static name: string
}
export abstract class GDivisionClass {
    /* Fields of GCalc.GDivisionClass */
    parent_class: GExpressionClass
    static name: string
}
export class GDivisionPrivate {
    static name: string
}
export abstract class GErrorResultClass {
    /* Fields of GCalc.GErrorResultClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class GErrorResultPrivate {
    static name: string
}
export abstract class GFunctionClass {
    /* Fields of GCalc.GFunctionClass */
    parent_class: GExpressionClass
    evaluate: (self: GFunction) => Expression
    static name: string
}
export class GFunctionPrivate {
    static name: string
}
export abstract class GMathEquationClass {
    /* Fields of GCalc.GMathEquationClass */
    parent_class: GExpressionClass
    static name: string
}
export class GMathEquationPrivate {
    static name: string
}
export abstract class GMathEquationManagerClass {
    /* Fields of GCalc.GMathEquationManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class GMathEquationManagerPrivate {
    static name: string
}
export abstract class GMinusClass {
    /* Fields of GCalc.GMinusClass */
    parent_class: GExpressionClass
    static name: string
}
export class GMinusPrivate {
    static name: string
}
export abstract class GMultiplyClass {
    /* Fields of GCalc.GMultiplyClass */
    parent_class: GExpressionClass
    static name: string
}
export class GMultiplyPrivate {
    static name: string
}
export abstract class GParserClass {
    /* Fields of GCalc.GParserClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class GParserPrivate {
    static name: string
}
export abstract class GPlusClass {
    /* Fields of GCalc.GPlusClass */
    parent_class: GExpressionClass
    static name: string
}
export class GPlusPrivate {
    static name: string
}
export abstract class GPolynomialClass {
    /* Fields of GCalc.GPolynomialClass */
    parent_class: GExpressionClass
    static name: string
}
export class GPolynomialPrivate {
    static name: string
}
export abstract class GPowClass {
    /* Fields of GCalc.GPowClass */
    parent_class: GExpressionClass
    static name: string
}
export class GPowPrivate {
    static name: string
}
export abstract class GResultClass {
    /* Fields of GCalc.GResultClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class GResultPrivate {
    static name: string
}
export abstract class GGroupClass {
    /* Fields of GCalc.GGroupClass */
    parent_class: GExpressionClass
    static name: string
}
export class GGroupPrivate {
    static name: string
}
export abstract class GSolverClass {
    /* Fields of GCalc.GSolverClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class GSolverPrivate {
    static name: string
}
export abstract class GTermClass {
    /* Fields of GCalc.GTermClass */
    parent_class: GExpressionClass
    static name: string
}
export class GTermPrivate {
    static name: string
}
export abstract class GVariableClass {
    /* Fields of GCalc.GVariableClass */
    parent_class: GExpressionClass
    static name: string
}
export class GVariablePrivate {
    static name: string
}
export abstract class AssignIface {
    /* Fields of GCalc.AssignIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class BinaryOperatorIface {
    /* Fields of GCalc.BinaryOperatorIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class ConstantIface {
    /* Fields of GCalc.ConstantIface */
    parent_iface: GObject.TypeInterface
    real: (self: Constant) => number
    imag: (self: Constant) => number
    zero: (self: Constant) => void
    add: (self: Constant, c: Constant) => Constant
    multiply: (self: Constant, c: Constant) => Constant
    divide: (self: Constant, c: Constant) => Constant
    neg: (self: Constant) => Constant
    pow: (self: Constant, c: Constant) => Constant
    static name: string
}
export abstract class DivisionIface {
    /* Fields of GCalc.DivisionIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class ExpressionIface {
    /* Fields of GCalc.ExpressionIface */
    parent_iface: GObject.TypeInterface
    to_string: (self: Expression) => string
    solve: (self: Expression) => Result
    get_parent: (self: Expression) => Expression
    set_parent: (self: Expression, value: Expression) => void
    get_expressions: (self: Expression) => ExpressionContainer
    static name: string
}
export abstract class ErrorExpressionIface {
    /* Fields of GCalc.ErrorExpressionIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class FunctionIface {
    /* Fields of GCalc.FunctionIface */
    parent_iface: GObject.TypeInterface
    evaluate: (self: Function) => Expression
    verify_params: (self: Function) => boolean
    get_param_types: (self: Function) => ExpressionContainer
    get_name: (self: Function) => string
    set_name: (self: Function, value: string) => void
    get_n_params: (self: Function) => number
    set_n_params: (self: Function, value: number) => void
    get_closed: (self: Function) => boolean
    set_closed: (self: Function, value: boolean) => void
    static name: string
}
export abstract class ErrorResultIface {
    /* Fields of GCalc.ErrorResultIface */
    parent_iface: GObject.TypeInterface
    get_message: (self: ErrorResult) => string
    static name: string
}
export abstract class GroupIface {
    /* Fields of GCalc.GroupIface */
    parent_iface: GObject.TypeInterface
    evaluate: (self: Group) => Expression
    get_level: (self: Group) => GroupLevel
    set_level: (self: Group, value: GroupLevel) => void
    get_closed: (self: Group) => boolean
    set_closed: (self: Group, value: boolean) => void
    static name: string
}
export abstract class HashableIface {
    /* Fields of GCalc.HashableIface */
    parent_iface: GObject.TypeInterface
    hash: (self: Hashable) => number
    static name: string
}
export abstract class MathEquationIface {
    /* Fields of GCalc.MathEquationIface */
    parent_iface: GObject.TypeInterface
    get_variables: (self: MathEquation) => ExpressionHashMap
    static name: string
}
export abstract class MathEquationManagerIface {
    /* Fields of GCalc.MathEquationManagerIface */
    parent_iface: GObject.TypeInterface
    find_variable: (self: MathEquationManager, name: string) => Variable
    get_equations: (self: MathEquationManager) => ExpressionContainer
    get_functions: (self: MathEquationManager) => ExpressionContainer
    static name: string
}
export abstract class MinusIface {
    /* Fields of GCalc.MinusIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class MultiplyIface {
    /* Fields of GCalc.MultiplyIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class OperatorIface {
    /* Fields of GCalc.OperatorIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class PlusIface {
    /* Fields of GCalc.PlusIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class PolynomialIface {
    /* Fields of GCalc.PolynomialIface */
    parent_iface: GObject.TypeInterface
    evaluate: (self: Polynomial) => Expression
    static name: string
}
export abstract class PowIface {
    /* Fields of GCalc.PowIface */
    parent_iface: GObject.TypeInterface
    static name: string
}
export abstract class ResultIface {
    /* Fields of GCalc.ResultIface */
    parent_iface: GObject.TypeInterface
    to_string: (self: Result) => string
    get_expression: (self: Result) => Expression
    static name: string
}
export abstract class SolverIface {
    /* Fields of GCalc.SolverIface */
    parent_iface: GObject.TypeInterface
    solve: (self: Solver, str: string) => Result
    get_equation_manager: (self: Solver) => MathEquationManager
    set_equation_manager: (self: Solver, value: MathEquationManager) => void
    static name: string
}
export abstract class TermIface {
    /* Fields of GCalc.TermIface */
    parent_iface: GObject.TypeInterface
    add: (self: Term, t: Term) => Expression
    evaluate: (self: Term) => Expression
    static name: string
}
export abstract class VariableIface {
    /* Fields of GCalc.VariableIface */
    parent_iface: GObject.TypeInterface
    evaluate: (self: Variable) => Expression
    get_name: (self: Variable) => string
    set_name: (self: Variable, value: string) => void
    get_value: (self: Variable) => Constant
    set_value: (self: Variable, value: Constant) => void
    get_bind: (self: Variable) => Variable
    set_bind: (self: Variable, value: Variable) => void
    get_binded: (self: Variable) => boolean
    static name: string
}