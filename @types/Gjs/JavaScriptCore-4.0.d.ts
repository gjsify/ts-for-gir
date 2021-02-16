/**
 * JavaScriptCore-4.0
 */

import * as Gjs from './Gjs';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';

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
export function get_major_version(): number
export function get_micro_version(): number
export function get_minor_version(): number
export function options_foreach(function_: OptionsFunc): void
export function options_get_boolean(option: string): [ /* returnType */ boolean, /* value */ boolean ]
export function options_get_double(option: string): [ /* returnType */ boolean, /* value */ number ]
export function options_get_int(option: string): [ /* returnType */ boolean, /* value */ number ]
export function options_get_option_group(): GLib.OptionGroup
export function options_get_range_string(option: string): [ /* returnType */ boolean, /* value */ string ]
export function options_get_size(option: string): [ /* returnType */ boolean, /* value */ number ]
export function options_get_string(option: string): [ /* returnType */ boolean, /* value */ string ]
export function options_get_uint(option: string): [ /* returnType */ boolean, /* value */ number ]
export function options_set_boolean(option: string, value: boolean): boolean
export function options_set_double(option: string, value: number): boolean
export function options_set_int(option: string, value: number): boolean
export function options_set_range_string(option: string, value: string): boolean
export function options_set_size(option: string, value: number): boolean
export function options_set_string(option: string, value: string): boolean
export function options_set_uint(option: string, value: number): boolean
export interface ClassDeletePropertyFunction {
    (jsc_class: Class, context: Context, instance: object | null, name: string): boolean
}
export interface ClassEnumeratePropertiesFunction {
    (jsc_class: Class, context: Context, instance?: object | null): string[] | null
}
export interface ClassGetPropertyFunction {
    (jsc_class: Class, context: Context, instance: object | null, name: string): Value | null
}
export interface ClassHasPropertyFunction {
    (jsc_class: Class, context: Context, instance: object | null, name: string): boolean
}
export interface ClassSetPropertyFunction {
    (jsc_class: Class, context: Context, instance: object | null, name: string, value: Value): boolean
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
    g_type_instance: GObject.TypeInstance
    /* Methods of JavaScriptCore.Class */
    add_constructor_variadic(name: string | null, callback: GObject.Callback, return_type: GObject.Type): Value
    add_constructor(name: string | null, callback: GObject.Callback, return_type: GObject.Type, parameter_types?: any[]): Value
    add_method_variadic(name: string, callback: GObject.Callback, return_type: GObject.Type): void
    add_method(name: string, callback: GObject.Callback, return_type: GObject.Type, parameter_types?: any[]): void
    add_property(name: string, property_type: GObject.Type, getter?: GObject.Callback | null, setter?: GObject.Callback | null): void
    get_name(): string
    get_parent(): Class
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
    connect(sigName: "notify", callback: (($obj: Class, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Class, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Class_ConstructProps)
    _init (config?: Class_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Context_ConstructProps extends GObject.Object_ConstructProps {
    virtual_machine?: VirtualMachine
}
export class Context {
    /* Fields of JavaScriptCore.Context */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of JavaScriptCore.Context */
    check_syntax(code: string, length: number, mode: CheckSyntaxMode, uri: string, line_number: number): [ /* returnType */ CheckSyntaxResult, /* exception */ Exception | null ]
    clear_exception(): void
    evaluate(code: string, length: number): Value
    evaluate_in_object(code: string, length: number, object_instance: object | null, object_class: Class | null, uri: string, line_number: number): [ /* returnType */ Value, /* object */ Value ]
    evaluate_with_source_uri(code: string, length: number, uri: string, line_number: number): Value
    get_exception(): Exception | null
    get_global_object(): Value
    get_value(name: string): Value
    get_virtual_machine(): VirtualMachine
    pop_exception_handler(): void
    push_exception_handler(handler: ExceptionHandler): void
    register_class(name: string, parent_class?: Class | null, vtable?: ClassVTable | null, destroy_notify?: GLib.DestroyNotify | null): Class
    set_value(name: string, value: Value): void
    throw(error_message: string): void
    throw_exception(exception: Exception): void
    throw_with_name(error_name: string, error_message: string): void
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
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Context
    static new_with_virtual_machine(vm: VirtualMachine): Context
    static get_current(): Context | null
    static $gtype: GObject.Type
}
export interface Exception_ConstructProps extends GObject.Object_ConstructProps {
}
export class Exception {
    /* Fields of JavaScriptCore.Exception */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of JavaScriptCore.Exception */
    get_backtrace_string(): string | null
    get_column_number(): number
    get_line_number(): number
    get_message(): string
    get_name(): string
    get_source_uri(): string | null
    report(): string
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: Exception, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Exception, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Exception_ConstructProps)
    _init (config?: Exception_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context, message: string): Exception
    static new_with_name(context: Context, name: string, message: string): Exception
    static $gtype: GObject.Type
}
export interface Value_ConstructProps extends GObject.Object_ConstructProps {
    context?: Context
}
export class Value {
    /* Fields of JavaScriptCore.Value */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of JavaScriptCore.Value */
    constructor_call(parameters?: Value[] | null): Value
    function_call(parameters?: Value[] | null): Value
    get_context(): Context
    is_array(): boolean
    is_boolean(): boolean
    is_constructor(): boolean
    is_function(): boolean
    is_null(): boolean
    is_number(): boolean
    is_object(): boolean
    is_string(): boolean
    is_undefined(): boolean
    object_define_property_accessor(property_name: string, flags: ValuePropertyFlags, property_type: GObject.Type, getter?: GObject.Callback | null, setter?: GObject.Callback | null): void
    object_define_property_data(property_name: string, flags: ValuePropertyFlags, property_value?: Value | null): void
    object_delete_property(name: string): boolean
    object_enumerate_properties(): string[] | null
    object_get_property(name: string): Value
    object_get_property_at_index(index: number): Value
    object_has_property(name: string): boolean
    object_invoke_method(name: string, parameters?: Value[] | null): Value
    object_is_instance_of(name: string): boolean
    object_set_property(name: string, property: Value): void
    object_set_property_at_index(index: number, property: Value): void
    to_boolean(): boolean
    to_double(): number
    to_int32(): number
    to_json(indent: number): string
    to_string(): string
    to_string_as_bytes(): GLib.Bytes
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
    connect(sigName: "notify", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Value_ConstructProps)
    _init (config?: Value_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_array_from_garray(context: Context, array?: Value[] | null): Value
    static new_array_from_strv(context: Context, strv: string[]): Value
    static new_boolean(context: Context, value: boolean): Value
    static new_from_json(context: Context, json: string): Value
    static new_function_variadic(context: Context, name: string | null, callback: GObject.Callback, return_type: GObject.Type): Value
    static new_function(context: Context, name: string | null, callback: GObject.Callback, return_type: GObject.Type, parameter_types?: any[]): Value
    static new_null(context: Context): Value
    static new_number(context: Context, number: number): Value
    static new_object(context: Context, instance?: object | null, jsc_class?: Class | null): Value
    static new_string(context: Context, string?: string | null): Value
    static new_string_from_bytes(context: Context, bytes?: GLib.Bytes | null): Value
    static new_undefined(context: Context): Value
    static $gtype: GObject.Type
}
export interface VirtualMachine_ConstructProps extends GObject.Object_ConstructProps {
}
export class VirtualMachine {
    /* Fields of JavaScriptCore.VirtualMachine */
    parent: GObject.Object
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
    connect(sigName: "notify", callback: (($obj: VirtualMachine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VirtualMachine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    g_type_instance: GObject.TypeInstance
    /* Methods of JavaScriptCore.WeakValue */
    get_value(): Value
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
    /* Signals of JavaScriptCore.WeakValue */
    connect(sigName: "cleared", callback: (($obj: WeakValue) => void)): number
    connect_after(sigName: "cleared", callback: (($obj: WeakValue) => void)): number
    emit(sigName: "cleared"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WeakValue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WeakValue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    get_property: ClassGetPropertyFunction
    set_property: ClassSetPropertyFunction
    has_property: ClassHasPropertyFunction
    delete_property: ClassDeletePropertyFunction
    enumerate_properties: ClassEnumeratePropertiesFunction
    static name: string
}
export abstract class ContextClass {
    /* Fields of JavaScriptCore.ContextClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ContextPrivate {
    static name: string
}
export abstract class ExceptionClass {
    /* Fields of JavaScriptCore.ExceptionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ExceptionPrivate {
    static name: string
}
export abstract class ValueClass {
    /* Fields of JavaScriptCore.ValueClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ValuePrivate {
    static name: string
}
export abstract class VirtualMachineClass {
    /* Fields of JavaScriptCore.VirtualMachineClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class VirtualMachinePrivate {
    static name: string
}
export abstract class WeakValueClass {
    /* Fields of JavaScriptCore.WeakValueClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class WeakValuePrivate {
    static name: string
}