/**
 * GCalc-1
 */

/// <reference types="node" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="Gee-0.8.d.ts" />

declare namespace GCalc {

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
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.Assign */
    evaluate(): Expression
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
    connect(sigName: "notify", callback: (($obj: Assign, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Assign, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Assign_ConstructProps)
    _init (config?: Assign_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BinaryOperator_ConstructProps extends GObject.Object_ConstructProps {
}
export class BinaryOperator {
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
    connect(sigName: "notify", callback: (($obj: BinaryOperator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BinaryOperator, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: BinaryOperator_ConstructProps)
    _init (config?: BinaryOperator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Constant_ConstructProps extends GObject.Object_ConstructProps {
}
export class Constant {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
    /* Virtual methods of GCalc.Constant */
    vfuncReal(): number
    vfuncImag(): number
    vfuncZero(): void
    vfuncAdd(c: Constant): Constant
    vfuncMultiply(c: Constant): Constant
    vfuncDivide(c: Constant): Constant
    vfuncNeg(): Constant
    vfuncPow(c: Constant): Constant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Constant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Constant, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Constant_ConstructProps)
    _init (config?: Constant_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Division_ConstructProps extends GObject.Object_ConstructProps {
}
export class Division {
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
    connect(sigName: "notify", callback: (($obj: Division, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Division, pspec: GObject.ParamSpec) => void)): number
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.Expression */
    toString(): string
    solve(): Result
    getParent(): Expression
    setParent(value: Expression): void
    getExpressions(): ExpressionContainer
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
    /* Virtual methods of GCalc.Expression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncGetParent(): Expression
    vfuncSetParent(value: Expression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: Expression, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Expression_ConstructProps)
    _init (config?: Expression_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ErrorExpression_ConstructProps extends GObject.Object_ConstructProps {
}
export class ErrorExpression {
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
    connect(sigName: "notify", callback: (($obj: ErrorExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ErrorExpression, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: ErrorExpression_ConstructProps)
    _init (config?: ErrorExpression_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Function_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    nParams?: number
    closed?: boolean
}
export class Function {
    /* Properties of GCalc.Function */
    readonly paramTypes: ExpressionContainer
    name: string
    nParams: number
    closed: boolean
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.Function */
    evaluate(): Expression
    verifyParams(): boolean
    getParamTypes(): ExpressionContainer
    getName(): string
    setName(value: string): void
    getNParams(): number
    setNParams(value: number): void
    getClosed(): boolean
    setClosed(value: boolean): void
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
    /* Virtual methods of GCalc.Function */
    vfuncEvaluate(): Expression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::param-types", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::param-types", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::param-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::param-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::param-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-params", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-params", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: Function, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.ErrorResult */
    getMessage(): string
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
    /* Virtual methods of GCalc.ErrorResult */
    vfuncGetMessage(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: ErrorResult, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.Group */
    evaluate(): Expression
    getLevel(): GroupLevel
    setLevel(value: GroupLevel): void
    getClosed(): boolean
    setClosed(value: boolean): void
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
    /* Virtual methods of GCalc.Group */
    vfuncEvaluate(): Expression
    vfuncGetLevel(): GroupLevel
    vfuncSetLevel(value: GroupLevel): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::level", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: Group, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Group_ConstructProps)
    _init (config?: Group_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Hashable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Hashable {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.Hashable */
    hash(): number
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
    /* Virtual methods of GCalc.Hashable */
    vfuncHash(): number
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Hashable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Hashable, pspec: GObject.ParamSpec) => void)): number
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.MathEquation */
    getVariables(): ExpressionHashMap
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
    /* Virtual methods of GCalc.MathEquation */
    vfuncGetVariables(): ExpressionHashMap
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::variables", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variables", callback: (($obj: MathEquation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::variables", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::variables", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::variables", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.MathEquationManager */
    findVariable(name: string): Variable
    getEquations(): ExpressionContainer
    getFunctions(): ExpressionContainer
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
    /* Virtual methods of GCalc.MathEquationManager */
    vfuncFindVariable(name: string): Variable
    vfuncGetEquations(): ExpressionContainer
    vfuncGetFunctions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::equations", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equations", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::functions", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::functions", callback: (($obj: MathEquationManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::functions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::functions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::functions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MathEquationManager_ConstructProps)
    _init (config?: MathEquationManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Minus_ConstructProps extends GObject.Object_ConstructProps {
}
export class Minus {
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
    connect(sigName: "notify", callback: (($obj: Minus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Minus, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Minus_ConstructProps)
    _init (config?: Minus_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Multiply_ConstructProps extends GObject.Object_ConstructProps {
}
export class Multiply {
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
    connect(sigName: "notify", callback: (($obj: Multiply, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Multiply, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Multiply_ConstructProps)
    _init (config?: Multiply_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Operator_ConstructProps extends GObject.Object_ConstructProps {
}
export class Operator {
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
    connect(sigName: "notify", callback: (($obj: Operator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Operator, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Operator_ConstructProps)
    _init (config?: Operator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Plus_ConstructProps extends GObject.Object_ConstructProps {
}
export class Plus {
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
    connect(sigName: "notify", callback: (($obj: Plus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plus, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Plus_ConstructProps)
    _init (config?: Plus_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Polynomial_ConstructProps extends GObject.Object_ConstructProps {
}
export class Polynomial {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.Polynomial */
    evaluate(): Expression
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
    /* Virtual methods of GCalc.Polynomial */
    vfuncEvaluate(): Expression
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Polynomial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Polynomial, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Polynomial_ConstructProps)
    _init (config?: Polynomial_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Pow_ConstructProps extends GObject.Object_ConstructProps {
}
export class Pow {
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
    connect(sigName: "notify", callback: (($obj: Pow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pow, pspec: GObject.ParamSpec) => void)): number
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.Result */
    toString(): string
    getExpression(): Expression
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
    /* Virtual methods of GCalc.Result */
    vfuncToString(): string
    vfuncGetExpression(): Expression
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expression", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Result_ConstructProps)
    _init (config?: Result_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Solver_ConstructProps extends GObject.Object_ConstructProps {
    equationManager?: MathEquationManager
}
export class Solver {
    /* Properties of GCalc.Solver */
    equationManager: MathEquationManager
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.Solver */
    solve(str: string): Result
    getEquationManager(): MathEquationManager
    setEquationManager(value: MathEquationManager): void
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
    /* Virtual methods of GCalc.Solver */
    vfuncSolve(str: string): Result
    vfuncGetEquationManager(): MathEquationManager
    vfuncSetEquationManager(value: MathEquationManager): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Solver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Solver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::equation-manager", callback: (($obj: Solver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equation-manager", callback: (($obj: Solver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equation-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equation-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equation-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Solver_ConstructProps)
    _init (config?: Solver_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Term_ConstructProps extends GObject.Object_ConstructProps {
}
export class Term {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.Term */
    add(t: Term): Expression
    evaluate(): Expression
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
    /* Virtual methods of GCalc.Term */
    vfuncAdd(t: Term): Expression
    vfuncEvaluate(): Expression
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Term, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Term, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: Term_ConstructProps)
    _init (config?: Term_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static evaluateConstants(c1: Constant, c2: Constant, op: Operator): Expression
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
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.Variable */
    evaluate(): Expression
    getName(): string
    setName(value: string): void
    getValue(): Constant
    setValue(value: Constant): void
    getBind(): Variable
    setBind(value: Variable): void
    getBinded(): boolean
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
    /* Virtual methods of GCalc.Variable */
    vfuncEvaluate(): Expression
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetValue(): Constant
    vfuncSetValue(value: Constant): void
    vfuncGetBind(): Variable
    vfuncSetBind(value: Variable): void
    vfuncGetBinded(): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bind", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind", callback: (($obj: Variable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    /* Properties of Gee.ArrayList */
    equalFunc: GLib.EqualFunc
    /* Properties of Gee.AbstractList */
    readonly readOnlyView: Gee.List
    /* Properties of Gee.AbstractCollection */
    readonly size: number
    readonly isEmpty: boolean
    /* Fields of GCalc.ExpressionContainer */
    parentInstance: Gee.ArrayList
    priv: ExpressionContainerPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.ExpressionContainer */
    add(exp: Expression): void
    removeAt(index: number): Expression
    remove(exp: Expression): Expression
    getObject(position: number): GObject.Object | null
    find(exp: Expression): Expression | null
    findNamed(name: string): Expression | null
    getParent(): Expression
    setParent(value: Expression): void
    /* Methods of Gee.ArrayList */
    sortWithData(compare: GLib.CompareDataFunc): void
    /* Methods of Gee.AbstractList */
    listIterator(): Gee.ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    first(): object | null
    last(): object | null
    insertAll(index: number, collection: Gee.Collection): void
    /* Methods of Gee.AbstractCollection */
    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    toArray(): object[]
    addAll(collection: Gee.Collection): boolean
    containsAll(collection: Gee.Collection): boolean
    removeAll(collection: Gee.Collection): boolean
    retainAll(collection: Gee.Collection): boolean
    iterator(): Gee.Iterator
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
    /* Methods of Gio.ListModel */
    getItemType(): GObject.Type
    getNItems(): number
    getItem(position: number): GObject.Object | null
    itemsChanged(position: number, removed: number, added: number): void
    /* Virtual methods of GCalc.ExpressionContainer */
    vfuncGetItem(position: number): GObject.Object | null
    vfuncGetItemType(): GObject.Type
    vfuncGetNItems(): number
    /* Virtual methods of Gee.AbstractList */
    vfuncListIterator(): Gee.ListIterator
    vfuncGet(index: number): object | null
    vfuncSet(index: number, item?: object | null): void
    vfuncIndexOf(item?: object | null): number
    vfuncInsert(index: number, item?: object | null): void
    vfuncRemoveAt(index: number): object | null
    vfuncSlice(start: number, stop: number): Gee.List | null
    vfuncFirst(): object | null
    vfuncLast(): object | null
    vfuncInsertAll(index: number, collection: Gee.Collection): void
    vfuncSort(compareFunc?: GLib.CompareFunc | null): void
    /* Virtual methods of Gee.AbstractCollection */
    vfuncContains(item?: object | null): boolean
    vfuncAdd(item?: object | null): boolean
    vfuncRemove(item?: object | null): boolean
    vfuncClear(): void
    vfuncToArray(): object[]
    vfuncAddAll(collection: Gee.Collection): boolean
    vfuncContainsAll(collection: Gee.Collection): boolean
    vfuncRemoveAll(collection: Gee.Collection): boolean
    vfuncRetainAll(collection: Gee.Collection): boolean
    vfuncIterator(): Gee.Iterator
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gio.ListModel */
    connect(sigName: "items-changed", callback: (($obj: ExpressionContainer, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: (($obj: ExpressionContainer, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    on(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "items-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::equal-func", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equal-func", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: ExpressionContainer, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ExpressionContainer_ConstructProps)
    _init (config?: ExpressionContainer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ExpressionContainer
    static new(equalFunc?: GLib.EqualFunc | null): ExpressionContainer
    static $gtype: GObject.Type
}
export interface ExpressionHashMap_ConstructProps extends Gee.HashMap_ConstructProps {
    parent?: Expression
}
export class ExpressionHashMap {
    /* Properties of GCalc.ExpressionHashMap */
    parent: Expression
    /* Properties of Gee.HashMap */
    keyHashFunc: GLib.HashFunc
    keyEqualFunc: GLib.EqualFunc
    valueEqualFunc: GLib.EqualFunc
    /* Properties of Gee.AbstractMap */
    readonly size: number
    readonly isEmpty: boolean
    readonly keys: Gee.Set
    readonly values: Gee.Collection
    readonly entries: Gee.Set
    readonly readOnlyView: Gee.Map
    /* Fields of GCalc.ExpressionHashMap */
    parentInstance: Gee.HashMap
    priv: ExpressionHashMapPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.ExpressionHashMap */
    add(exp: Expression): void
    remove(exp: Expression): void
    findNamed(name: string): Expression
    getParent(): Expression
    setParent(value: Expression): void
    /* Methods of Gee.AbstractMap */
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    mapIterator(): Gee.MapIterator
    clear(): void
    setAll(map: Gee.Map): void
    unsetAll(map: Gee.Map): boolean
    hasAll(map: Gee.Map): boolean
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
    /* Virtual methods of Gee.AbstractMap */
    vfuncHasKey(key?: object | null): boolean
    vfuncHas(key?: object | null, value?: object | null): boolean
    vfuncGet(key?: object | null): object | null
    vfuncSet(key?: object | null, value?: object | null): void
    vfuncUnset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfuncMapIterator(): Gee.MapIterator
    vfuncClear(): void
    vfuncSetAll(map: Gee.Map): void
    vfuncUnsetAll(map: Gee.Map): boolean
    vfuncHasAll(map: Gee.Map): boolean
    vfuncIterator(): Gee.Iterator
    vfuncContains(key?: object | null): boolean
    vfuncRemove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    vfuncRemoveAll(map: Gee.Map): boolean
    vfuncContainsAll(map: Gee.Map): boolean
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-hash-func", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-hash-func", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-hash-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-equal-func", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-equal-func", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-equal-func", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-equal-func", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-equal-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-empty", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-empty", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keys", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keys", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::values", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::values", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::entries", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::entries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only-view", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: ExpressionHashMap, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ExpressionHashMap_ConstructProps)
    _init (config?: ExpressionHashMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ExpressionHashMap
    static new(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueEqualFunc?: GLib.EqualFunc | null): ExpressionHashMap
    static $gtype: GObject.Type
}
export interface GFunctionAcos_ConstructProps extends GFunction_ConstructProps {
}
export class GFunctionAcos {
    /* Fields of GCalc.GFunctionAcos */
    parentInstance: GFunction
    priv: GFunctionAcosPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunctionAcos */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GFunction */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionAcos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionAcos, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GFunction
    priv: GFunctionAcoshPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunctionAcosh */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GFunction */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionAcosh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionAcosh, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GFunction
    priv: GFunctionAsinPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunctionAsin */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GFunction */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionAsin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionAsin, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GFunction
    priv: GFunctionAsinhPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunctionAsinh */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GFunction */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionAsinh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionAsinh, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GFunction
    priv: GFunctionAtanPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunctionAtan */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GFunction */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionAtan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionAtan, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GFunction
    priv: GFunctionAtanhPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunctionAtanh */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GFunction */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionAtanh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionAtanh, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GFunction
    priv: GFunctionCosPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunctionCos */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GFunction */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionCos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionCos, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GFunction
    priv: GFunctionCoshPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunctionCosh */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GFunction */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionCosh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionCosh, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GFunction
    priv: GFunctionExpPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunctionExp */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GFunction */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionExp, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GFunction
    priv: GFunctionLogPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunctionLog */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GFunction */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionLog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionLog, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GFunction
    priv: GFunctionSinPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunctionSin */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GFunction */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionSin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionSin, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GFunction
    priv: GFunctionSinhPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunctionSinh */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GFunction */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionSinh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionSinh, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GFunction
    priv: GFunctionSqrtPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunctionSqrt */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GFunction */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionSqrt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionSqrt, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GFunction
    priv: GFunctionTanPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunctionTan */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GFunction */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionTan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionTan, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GFunction
    priv: GFunctionTanhPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GFunctionTanh */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GFunction */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunctionTanh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunctionTanh, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GFunctionTanh_ConstructProps)
    _init (config?: GFunctionTanh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GFunctionTanh
    static $gtype: GObject.Type
}
export interface GExpression_ConstructProps extends GObject.Object_ConstructProps {
    parent?: MathExpression
}
export class GExpression {
    /* Properties of GCalc.MathExpression */
    parent: MathExpression
    readonly expressions: ExpressionContainer
    /* Fields of GCalc.GExpression */
    parentInstance: GObject.Object
    priv: GExpressionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Methods of GCalc.Expression */
    solve(): MathResult
    /* Methods of GCalc.MathExpression */
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GExpression, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: (($obj: GExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: GExpression, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expressions", callback: (($obj: GExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expressions", callback: (($obj: GExpression, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expressions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    parentInstance: GExpression
    priv: GErrorExpressionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GErrorExpression */
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GErrorExpression, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GErrorExpression, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GExpression
    priv: GAssignPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Methods of GCalc.MathAssign */
    evaluate(): MathExpression
    /* Virtual methods of GCalc.GAssign */
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GAssign, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GAssign, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GExpression
    priv: GConstantPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GConstant */
    subtract(c: Constant): Constant
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Methods of GCalc.MathConstant */
    add(c: MathConstant): MathConstant
    subtract(c: MathConstant): MathConstant
    multiply(c: MathConstant): MathConstant
    divide(c: MathConstant): MathConstant
    neg(): MathConstant
    pow(c: MathConstant): MathConstant
    /* Methods of GCalc.MathConstantNumber */
    value(): number
    /* Methods of GCalc.MathConstantComplex */
    real(): number
    imag(): number
    zero(): void
    /* Virtual methods of GCalc.GConstant */
    vfuncAdd(c: MathConstant): MathConstant
    vfuncSubtract(c: MathConstant): MathConstant
    vfuncMultiply(c: MathConstant): MathConstant
    vfuncDivide(c: MathConstant): MathConstant
    vfuncNeg(): MathConstant
    vfuncPow(c: MathConstant): MathConstant
    vfuncValue(): number
    vfuncReal(): number
    vfuncImag(): number
    vfuncZero(): void
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GConstant, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GConstant, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GConstant_ConstructProps)
    _init (config?: GConstant_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static integer(val: number): GConstant
    static unsignedInteger(val: number): GConstant
    static double(val: number): GConstant
    static complex(real: number, imag: number): GConstant
    static new(): GConstant
    static $gtype: GObject.Type
}
export interface GDivision_ConstructProps extends GExpression_ConstructProps {
}
export class GDivision {
    /* Fields of GCalc.GDivision */
    parentInstance: GExpression
    priv: GDivisionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GDivision */
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDivision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GDivision, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GDivision_ConstructProps)
    _init (config?: GDivision_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GDivision
    static $gtype: GObject.Type
}
export interface GErrorResult_ConstructProps extends GObject.Object_ConstructProps {
}
export class GErrorResult {
    /* Properties of GCalc.MathResult */
    readonly expression: MathExpression
    /* Properties of GCalc.MathErrorResult */
    readonly message: string
    /* Fields of GCalc.GErrorResult */
    parentInstance: GObject.Object
    priv: GErrorResultPrivate
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
    /* Methods of GCalc.MathResult */
    toString(): string
    getExpression(): MathExpression
    /* Methods of GCalc.MathErrorResult */
    getMessage(): string
    /* Virtual methods of GCalc.GErrorResult */
    vfuncToString(): string
    vfuncGetExpression(): MathExpression
    vfuncGetMessage(): string
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GErrorResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expression", callback: (($obj: GErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: GErrorResult, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message", callback: (($obj: GErrorResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: GErrorResult, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GErrorResult_ConstructProps)
    _init (config?: GErrorResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(msg: string): GErrorResult
    static new(exp: MathExpression): GErrorResult
    static $gtype: GObject.Type
}
export interface GFunction_ConstructProps extends GExpression_ConstructProps {
    name?: string
    nParams?: number
    closed?: boolean
}
export class GFunction {
    /* Properties of GCalc.MathFunction */
    readonly paramTypes: ExpressionContainer
    name: string
    nParams: number
    closed: boolean
    /* Fields of GCalc.GFunction */
    parentInstance: GExpression
    priv: GFunctionPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GFunction */
    evaluate(): Expression
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Methods of GCalc.Function */
    evaluate(): MathExpression
    /* Methods of GCalc.MathFunction */
    verifyParams(): boolean
    getParamTypes(): ExpressionContainer
    getName(): string
    setName(value: string): void
    getNParams(): number
    setNParams(value: number): void
    getClosed(): boolean
    setClosed(value: boolean): void
    /* Methods of GCalc.Hashable */
    hash(): number
    /* Virtual methods of GCalc.GFunction */
    vfuncEvaluate(): Expression
    vfuncEvaluate(): MathExpression
    vfuncVerifyParams(): boolean
    vfuncGetParamTypes(): ExpressionContainer
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetNParams(): number
    vfuncSetNParams(value: number): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::param-types", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::param-types", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::param-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::param-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::param-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-params", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-params", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: GFunction, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GFunction_ConstructProps)
    _init (config?: GFunction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static withName(name: string, nparams: number): GFunction
    static new(): GFunction
    static $gtype: GObject.Type
}
export interface GMathEquation_ConstructProps extends GExpression_ConstructProps {
}
export class GMathEquation {
    /* Properties of GCalc.MathEquation */
    readonly variables: ExpressionHashMap
    /* Fields of GCalc.GMathEquation */
    parentInstance: GExpression
    priv: GMathEquationPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Methods of GCalc.MathEquation */
    getVariables(): ExpressionHashMap
    /* Virtual methods of GCalc.GMathEquation */
    vfuncGetVariables(): ExpressionHashMap
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GMathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GMathEquation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::variables", callback: (($obj: GMathEquation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variables", callback: (($obj: GMathEquation, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::variables", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::variables", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::variables", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    parentInstance: GObject.Object
    priv: GMathEquationManagerPrivate
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
    /* Methods of GCalc.MathEquationManager */
    findVariable(name: string): MathVariable
    getEquations(): ExpressionContainer
    getFunctions(): ExpressionContainer
    /* Virtual methods of GCalc.GMathEquationManager */
    vfuncFindVariable(name: string): MathVariable
    vfuncGetEquations(): ExpressionContainer
    vfuncGetFunctions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GMathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GMathEquationManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::equations", callback: (($obj: GMathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equations", callback: (($obj: GMathEquationManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equations", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::functions", callback: (($obj: GMathEquationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::functions", callback: (($obj: GMathEquationManager, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::functions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::functions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::functions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    parentInstance: GExpression
    priv: GMinusPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GMinus */
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GMinus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GMinus, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GExpression
    priv: GMultiplyPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GMultiply */
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GMultiply, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GMultiply, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GObject.Object
    priv: GParserPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GParser */
    parse(str: string, eqman: MathEquationManager): void
    readToken(): GParserTokenType
    tokenToString(): string
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
    connect(sigName: "notify", callback: (($obj: GParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GParser, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GExpression
    priv: GPlusPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GPlus */
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GPlus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GPlus, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GExpression
    priv: GPolynomialPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Methods of GCalc.MathPolynomial */
    evaluate(): MathExpression
    /* Virtual methods of GCalc.GPolynomial */
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GPolynomial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GPolynomial, pspec: GObject.ParamSpec) => void)): number
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
    parentInstance: GExpression
    priv: GPowPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Virtual methods of GCalc.GPow */
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GPow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GPow, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GPow_ConstructProps)
    _init (config?: GPow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GPow
    static $gtype: GObject.Type
}
export interface GResult_ConstructProps extends GObject.Object_ConstructProps {
}
export class GResult {
    /* Properties of GCalc.MathResult */
    readonly expression: MathExpression
    /* Fields of GCalc.GResult */
    parentInstance: GObject.Object
    priv: GResultPrivate
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
    /* Methods of GCalc.MathResult */
    toString(): string
    getExpression(): MathExpression
    /* Virtual methods of GCalc.GResult */
    vfuncToString(): string
    vfuncGetExpression(): MathExpression
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expression", callback: (($obj: GResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: (($obj: GResult, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GResult_ConstructProps)
    _init (config?: GResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(exp: Expression): GResult
    static new(exp: MathExpression): GResult
    static $gtype: GObject.Type
}
export interface GGroup_ConstructProps extends GExpression_ConstructProps {
    level?: MathGroupLevel
    closed?: boolean
}
export class GGroup {
    /* Properties of GCalc.MathGroup */
    level: MathGroupLevel
    closed: boolean
    /* Fields of GCalc.GGroup */
    parentInstance: GExpression
    priv: GGroupPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Methods of GCalc.MathGroup */
    evaluate(): MathExpression
    getLevel(): MathGroupLevel
    setLevel(value: MathGroupLevel): void
    getClosed(): boolean
    setClosed(value: boolean): void
    /* Virtual methods of GCalc.GGroup */
    vfuncEvaluate(): MathExpression
    vfuncGetLevel(): MathGroupLevel
    vfuncSetLevel(value: MathGroupLevel): void
    vfuncGetClosed(): boolean
    vfuncSetClosed(value: boolean): void
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::level", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::closed", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: GGroup, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GGroup_ConstructProps)
    _init (config?: GGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GGroup
    static $gtype: GObject.Type
}
export interface GSolver_ConstructProps extends GObject.Object_ConstructProps {
    equationManager?: MathEquationManager
}
export class GSolver {
    /* Properties of GCalc.Solver */
    equationManager: MathEquationManager
    /* Fields of GCalc.GSolver */
    parentInstance: GObject.Object
    priv: GSolverPrivate
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
    /* Methods of GCalc.Solver */
    addExpression(exp: string): void
    solve(str: string): MathResult
    getEquationManager(): MathEquationManager
    setEquationManager(value: MathEquationManager): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GSolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GSolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::equation-manager", callback: (($obj: GSolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::equation-manager", callback: (($obj: GSolver, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::equation-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::equation-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::equation-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    parentInstance: GExpression
    priv: GTermPrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Methods of GCalc.MathTerm */
    add(t: MathTerm): MathExpression
    evaluate(): MathExpression
    /* Virtual methods of GCalc.GTerm */
    vfuncAdd(t: MathTerm): MathExpression
    vfuncEvaluate(): MathExpression
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GTerm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GTerm, pspec: GObject.ParamSpec) => void)): number
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
    constructor (config?: GTerm_ConstructProps)
    _init (config?: GTerm_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GTerm
    static evaluateConstants(c1: MathConstant, c2: MathConstant, op: MathOperator): MathExpression
    static $gtype: GObject.Type
}
export interface GVariable_ConstructProps extends GExpression_ConstructProps {
    name?: string
    value?: MathConstant
    bind?: MathVariable
}
export class GVariable {
    /* Properties of GCalc.MathVariable */
    name: string
    value: MathConstant
    bind: MathVariable
    /* Fields of GCalc.GVariable */
    parentInstance: GExpression
    priv: GVariablePrivate
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GCalc.GExpression */
    toString(): string
    solve(): Result
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
    /* Methods of GCalc.MathVariable */
    evaluate(): MathExpression
    getName(): string
    setName(value: string): void
    getValue(): MathConstant
    setValue(value: MathConstant): void
    getBind(): MathVariable
    setBind(value: MathVariable): void
    getBinded(): boolean
    /* Methods of GCalc.Hashable */
    hash(): number
    /* Virtual methods of GCalc.GVariable */
    vfuncEvaluate(): MathExpression
    vfuncGetName(): string
    vfuncSetName(value: string): void
    vfuncGetValue(): MathConstant
    vfuncSetValue(value: MathConstant): void
    vfuncGetBind(): MathVariable
    vfuncSetBind(value: MathVariable): void
    vfuncGetBinded(): boolean
    vfuncHash(): number
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    /* Virtual methods of GCalc.GExpression */
    vfuncToString(): string
    vfuncSolve(): Result
    vfuncSolve(): MathResult
    vfuncGetParent(): MathExpression
    vfuncSetParent(value: MathExpression): void
    vfuncGetExpressions(): ExpressionContainer
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bind", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bind", callback: (($obj: GVariable, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    parentClass: Gee.ArrayListClass
    static name: string
}
export class ExpressionContainerPrivate {
    static name: string
}
export abstract class ExpressionHashMapClass {
    /* Fields of GCalc.ExpressionHashMapClass */
    parentClass: Gee.HashMapClass
    static name: string
}
export class ExpressionHashMapPrivate {
    static name: string
}
export abstract class GFunctionAcosClass {
    /* Fields of GCalc.GFunctionAcosClass */
    parentClass: GFunctionClass
    static name: string
}
export class GFunctionAcosPrivate {
    static name: string
}
export abstract class GFunctionAcoshClass {
    /* Fields of GCalc.GFunctionAcoshClass */
    parentClass: GFunctionClass
    static name: string
}
export class GFunctionAcoshPrivate {
    static name: string
}
export abstract class GFunctionAsinClass {
    /* Fields of GCalc.GFunctionAsinClass */
    parentClass: GFunctionClass
    static name: string
}
export class GFunctionAsinPrivate {
    static name: string
}
export abstract class GFunctionAsinhClass {
    /* Fields of GCalc.GFunctionAsinhClass */
    parentClass: GFunctionClass
    static name: string
}
export class GFunctionAsinhPrivate {
    static name: string
}
export abstract class GFunctionAtanClass {
    /* Fields of GCalc.GFunctionAtanClass */
    parentClass: GFunctionClass
    static name: string
}
export class GFunctionAtanPrivate {
    static name: string
}
export abstract class GFunctionAtanhClass {
    /* Fields of GCalc.GFunctionAtanhClass */
    parentClass: GFunctionClass
    static name: string
}
export class GFunctionAtanhPrivate {
    static name: string
}
export abstract class GFunctionCosClass {
    /* Fields of GCalc.GFunctionCosClass */
    parentClass: GFunctionClass
    static name: string
}
export class GFunctionCosPrivate {
    static name: string
}
export abstract class GFunctionCoshClass {
    /* Fields of GCalc.GFunctionCoshClass */
    parentClass: GFunctionClass
    static name: string
}
export class GFunctionCoshPrivate {
    static name: string
}
export abstract class GFunctionExpClass {
    /* Fields of GCalc.GFunctionExpClass */
    parentClass: GFunctionClass
    static name: string
}
export class GFunctionExpPrivate {
    static name: string
}
export abstract class GFunctionLogClass {
    /* Fields of GCalc.GFunctionLogClass */
    parentClass: GFunctionClass
    static name: string
}
export class GFunctionLogPrivate {
    static name: string
}
export abstract class GFunctionSinClass {
    /* Fields of GCalc.GFunctionSinClass */
    parentClass: GFunctionClass
    static name: string
}
export class GFunctionSinPrivate {
    static name: string
}
export abstract class GFunctionSinhClass {
    /* Fields of GCalc.GFunctionSinhClass */
    parentClass: GFunctionClass
    static name: string
}
export class GFunctionSinhPrivate {
    static name: string
}
export abstract class GFunctionSqrtClass {
    /* Fields of GCalc.GFunctionSqrtClass */
    parentClass: GFunctionClass
    static name: string
}
export class GFunctionSqrtPrivate {
    static name: string
}
export abstract class GFunctionTanClass {
    /* Fields of GCalc.GFunctionTanClass */
    parentClass: GFunctionClass
    static name: string
}
export class GFunctionTanPrivate {
    static name: string
}
export abstract class GFunctionTanhClass {
    /* Fields of GCalc.GFunctionTanhClass */
    parentClass: GFunctionClass
    static name: string
}
export class GFunctionTanhPrivate {
    static name: string
}
export abstract class GExpressionClass {
    /* Fields of GCalc.GExpressionClass */
    parentClass: GObject.ObjectClass
    toString: (self: GExpression) => string
    solve: (self: GExpression) => Result
    static name: string
}
export class GExpressionPrivate {
    static name: string
}
export abstract class GErrorExpressionClass {
    /* Fields of GCalc.GErrorExpressionClass */
    parentClass: GExpressionClass
    static name: string
}
export class GErrorExpressionPrivate {
    static name: string
}
export abstract class GAssignClass {
    /* Fields of GCalc.GAssignClass */
    parentClass: GExpressionClass
    static name: string
}
export class GAssignPrivate {
    static name: string
}
export abstract class GConstantClass {
    /* Fields of GCalc.GConstantClass */
    parentClass: GExpressionClass
    static name: string
}
export class GConstantPrivate {
    static name: string
}
export abstract class GDivisionClass {
    /* Fields of GCalc.GDivisionClass */
    parentClass: GExpressionClass
    static name: string
}
export class GDivisionPrivate {
    static name: string
}
export abstract class GErrorResultClass {
    /* Fields of GCalc.GErrorResultClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class GErrorResultPrivate {
    static name: string
}
export abstract class GFunctionClass {
    /* Fields of GCalc.GFunctionClass */
    parentClass: GExpressionClass
    evaluate: (self: GFunction) => Expression
    static name: string
}
export class GFunctionPrivate {
    static name: string
}
export abstract class GMathEquationClass {
    /* Fields of GCalc.GMathEquationClass */
    parentClass: GExpressionClass
    static name: string
}
export class GMathEquationPrivate {
    static name: string
}
export abstract class GMathEquationManagerClass {
    /* Fields of GCalc.GMathEquationManagerClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class GMathEquationManagerPrivate {
    static name: string
}
export abstract class GMinusClass {
    /* Fields of GCalc.GMinusClass */
    parentClass: GExpressionClass
    static name: string
}
export class GMinusPrivate {
    static name: string
}
export abstract class GMultiplyClass {
    /* Fields of GCalc.GMultiplyClass */
    parentClass: GExpressionClass
    static name: string
}
export class GMultiplyPrivate {
    static name: string
}
export abstract class GParserClass {
    /* Fields of GCalc.GParserClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class GParserPrivate {
    static name: string
}
export abstract class GPlusClass {
    /* Fields of GCalc.GPlusClass */
    parentClass: GExpressionClass
    static name: string
}
export class GPlusPrivate {
    static name: string
}
export abstract class GPolynomialClass {
    /* Fields of GCalc.GPolynomialClass */
    parentClass: GExpressionClass
    static name: string
}
export class GPolynomialPrivate {
    static name: string
}
export abstract class GPowClass {
    /* Fields of GCalc.GPowClass */
    parentClass: GExpressionClass
    static name: string
}
export class GPowPrivate {
    static name: string
}
export abstract class GResultClass {
    /* Fields of GCalc.GResultClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class GResultPrivate {
    static name: string
}
export abstract class GGroupClass {
    /* Fields of GCalc.GGroupClass */
    parentClass: GExpressionClass
    static name: string
}
export class GGroupPrivate {
    static name: string
}
export abstract class GSolverClass {
    /* Fields of GCalc.GSolverClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export class GSolverPrivate {
    static name: string
}
export abstract class GTermClass {
    /* Fields of GCalc.GTermClass */
    parentClass: GExpressionClass
    static name: string
}
export class GTermPrivate {
    static name: string
}
export abstract class GVariableClass {
    /* Fields of GCalc.GVariableClass */
    parentClass: GExpressionClass
    static name: string
}
export class GVariablePrivate {
    static name: string
}
export abstract class AssignIface {
    /* Fields of GCalc.AssignIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class BinaryOperatorIface {
    /* Fields of GCalc.BinaryOperatorIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class ConstantIface {
    /* Fields of GCalc.ConstantIface */
    parentIface: GObject.TypeInterface
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
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class ExpressionIface {
    /* Fields of GCalc.ExpressionIface */
    parentIface: GObject.TypeInterface
    toString: (self: Expression) => string
    solve: (self: Expression) => Result
    getParent: (self: Expression) => Expression
    setParent: (self: Expression, value: Expression) => void
    getExpressions: (self: Expression) => ExpressionContainer
    static name: string
}
export abstract class ErrorExpressionIface {
    /* Fields of GCalc.ErrorExpressionIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class FunctionIface {
    /* Fields of GCalc.FunctionIface */
    parentIface: GObject.TypeInterface
    evaluate: (self: Function) => Expression
    verifyParams: (self: Function) => boolean
    getParamTypes: (self: Function) => ExpressionContainer
    getName: (self: Function) => string
    setName: (self: Function, value: string) => void
    getNParams: (self: Function) => number
    setNParams: (self: Function, value: number) => void
    getClosed: (self: Function) => boolean
    setClosed: (self: Function, value: boolean) => void
    static name: string
}
export abstract class ErrorResultIface {
    /* Fields of GCalc.ErrorResultIface */
    parentIface: GObject.TypeInterface
    getMessage: (self: ErrorResult) => string
    static name: string
}
export abstract class GroupIface {
    /* Fields of GCalc.GroupIface */
    parentIface: GObject.TypeInterface
    evaluate: (self: Group) => Expression
    getLevel: (self: Group) => GroupLevel
    setLevel: (self: Group, value: GroupLevel) => void
    getClosed: (self: Group) => boolean
    setClosed: (self: Group, value: boolean) => void
    static name: string
}
export abstract class HashableIface {
    /* Fields of GCalc.HashableIface */
    parentIface: GObject.TypeInterface
    hash: (self: Hashable) => number
    static name: string
}
export abstract class MathEquationIface {
    /* Fields of GCalc.MathEquationIface */
    parentIface: GObject.TypeInterface
    getVariables: (self: MathEquation) => ExpressionHashMap
    static name: string
}
export abstract class MathEquationManagerIface {
    /* Fields of GCalc.MathEquationManagerIface */
    parentIface: GObject.TypeInterface
    findVariable: (self: MathEquationManager, name: string) => Variable
    getEquations: (self: MathEquationManager) => ExpressionContainer
    getFunctions: (self: MathEquationManager) => ExpressionContainer
    static name: string
}
export abstract class MinusIface {
    /* Fields of GCalc.MinusIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class MultiplyIface {
    /* Fields of GCalc.MultiplyIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class OperatorIface {
    /* Fields of GCalc.OperatorIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class PlusIface {
    /* Fields of GCalc.PlusIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class PolynomialIface {
    /* Fields of GCalc.PolynomialIface */
    parentIface: GObject.TypeInterface
    evaluate: (self: Polynomial) => Expression
    static name: string
}
export abstract class PowIface {
    /* Fields of GCalc.PowIface */
    parentIface: GObject.TypeInterface
    static name: string
}
export abstract class ResultIface {
    /* Fields of GCalc.ResultIface */
    parentIface: GObject.TypeInterface
    toString: (self: Result) => string
    getExpression: (self: Result) => Expression
    static name: string
}
export abstract class SolverIface {
    /* Fields of GCalc.SolverIface */
    parentIface: GObject.TypeInterface
    solve: (self: Solver, str: string) => Result
    getEquationManager: (self: Solver) => MathEquationManager
    setEquationManager: (self: Solver, value: MathEquationManager) => void
    static name: string
}
export abstract class TermIface {
    /* Fields of GCalc.TermIface */
    parentIface: GObject.TypeInterface
    add: (self: Term, t: Term) => Expression
    evaluate: (self: Term) => Expression
    static name: string
}
export abstract class VariableIface {
    /* Fields of GCalc.VariableIface */
    parentIface: GObject.TypeInterface
    evaluate: (self: Variable) => Expression
    getName: (self: Variable) => string
    setName: (self: Variable, value: string) => void
    getValue: (self: Variable) => Constant
    setValue: (self: Variable, value: Constant) => void
    getBind: (self: Variable) => Variable
    setBind: (self: Variable, value: Variable) => void
    getBinded: (self: Variable) => boolean
    static name: string
}
}