// @ts-nocheck

/**
 * Obtain the parameters of a function type in a tuple.
 * Note: This is a copy of the Parameters type from the TypeScript standard library to avoid name conflicts, as some GIR types define `Parameters` as a namespace.
 */
export type GjsParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never

// __type__ forces all GTypes to not match structurally.
export type GType<T = unknown> = {
    __type__(arg: never): T
    name: string
}

// Extra interfaces used to help define GObject classes in js; these
// aren't part of gi.
export interface SignalDefinition {
    flags?: SignalFlags
    accumulator: number
    return_type?: GType
    param_types?: GType[]
}

export interface MetaInfo<Props, Interfaces, Sigs> {
    GTypeName?: string
    GTypeFlags?: TypeFlags
    Properties?: Props
    Signals?: Sigs
    Implements?: Interfaces
    CssName?: string
    Template?: Uint8Array | GLib.Bytes | string
    Children?: string[]
    InternalChildren?: string[]
    Requires?: Object[]
}

<% if (!noAdvancedVariants) { %>
// Advanced Variants types - enhanced type system for better type inference
export type AdvGjsParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never

export type AdvGType<T = unknown> = {
    __type__(arg: never): T
    name: string
}

export interface AdvSignalDefinition {
    flags?: SignalFlags
    accumulator: number
    return_type?: AdvGType
    param_types?: AdvGType[]
}

export interface AdvMetaInfo<Props, Interfaces, Sigs> {
    GTypeName?: string
    GTypeFlags?: TypeFlags
    Properties?: Props
    Signals?: Sigs
    Implements?: Interfaces
    CssName?: string
    Template?: Uint8Array | GLib.Bytes | string
    Children?: string[]
    InternalChildren?: string[]
    Requires?: Object[]
}

export type AdvProperty<K extends ParamSpec> = K extends ParamSpec<infer T> ? T : any

export type AdvProperties<
    Prototype extends {},
    Properties extends { [key: string]: ParamSpec }
> = Omit<{
    [key in keyof Properties | keyof Prototype]: key extends keyof Prototype
        ? never
        : key extends keyof Properties
          ? AdvProperty<Properties[key]>
          : never
}, keyof Prototype>

export type AdvSignalSignatures = {
    [signal: string]: (...args: any[]) => any
}

export type AdvSignalCallback<Emitter, Fn> = Fn extends (...args: infer P) => infer R
    ? (source: Emitter, ...args: P) => R
    : never

// String conversion utilities for property names
type SnakeToUnderscoreCase<S extends string> = S extends `${infer T}-${infer U}`
    ? `${T}_${SnakeToUnderscoreCase<U>}`
    : S extends `${infer T}`
      ? `${T}`
      : never

type SnakeToCamelCase<S extends string> = S extends `${infer T}-${infer U}`
    ? `${Lowercase<T>}${SnakeToPascalCase<U>}`
    : S extends `${infer T}`
      ? `${Lowercase<T>}`
      : SnakeToPascalCase<S>

type SnakeToPascalCase<S extends string> = string extends S
    ? string
    : S extends `${infer T}-${infer U}`
      ? `${Capitalize<Lowercase<T>>}${SnakeToPascalCase<U>}`
      : S extends `${infer T}`
        ? `${Capitalize<Lowercase<T>>}`
        : never

type SnakeToCamel<T> = { [P in keyof T as P extends string ? SnakeToCamelCase<P> : P]: T[P] }
type SnakeToUnderscore<T> = { [P in keyof T as P extends string ? SnakeToUnderscoreCase<P> : P]: T[P] }

// Advanced utility types for class registration
type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any ? R : never

type IFaces<Interfaces extends { $gtype: AdvGType<any> }[]> = {
    [key in keyof Interfaces]: Interfaces[key] extends { $gtype: AdvGType<infer I> } ? I : never
}

export type RegisteredPrototype<
    P extends {},
    Props extends { [key: string]: ParamSpec },
    Interfaces extends any[],
> = AdvProperties<P, SnakeToCamel<Props> & SnakeToUnderscore<Props>> & UnionToIntersection<Interfaces[number]> & P

type Ctor = new (...a: any[]) => object
type Init = { _init(...args: any[]): void }

export type RegisteredClass<
    T extends Ctor,
    Props extends { [key: string]: ParamSpec },
    Interfaces extends { $gtype: AdvGType<any> }[],
> = T extends { prototype: infer P extends {} }
    ? {
          $gtype: AdvGType<RegisteredClass<T, Props, IFaces<Interfaces>>>
          new (
              ...args: P extends Init ? Parameters<P['_init']> : [void]
          ): RegisteredPrototype<P, Props, IFaces<Interfaces>>
          prototype: RegisteredPrototype<P, Props, IFaces<Interfaces>>
      }
    : never

export type AdvSignalDefinitionType = {
    param_types?: readonly AdvGType[]
    [key: string]: any
}
<% } %>

// Correctly types interface checks.
export function type_is_a<T extends Object>(obj: Object, is_a_type: { $gtype: GType<T> }): obj is T

export class Interface<T = unknown> {
    static _classInit: (cls: any) => any
    __name__: string
    _construct: (params: any, ...otherArgs: any[]) => any
    _init: (params: any) => void
    $gtype?: GType<T>
}

/**
 * Use this to signify a function that must be overridden in an
 * implementation of the interface.
 */
export class NotImplementedError extends Error {
    get name(): 'NotImplementedError'
}

export const __gtkCssName__: unique symbol
export const __gtkTemplate__: unique symbol
export const __gtkChildren__: unique symbol
export const __gtkInternalChildren__: unique symbol

// Expose GObject static properties for ES6 classes

export const GTypeName: unique symbol
export const requires: unique symbol
export const interfaces: unique symbol
export const properties: unique symbol
export const signals: unique symbol

export let gtypeNameBasedOnJSPath: boolean

export let TYPE_BOOLEAN: GType<boolean>
export let Boolean: BooleanConstructor

export let TYPE_ENUM: GType<number>
export let TYPE_FLAGS: GType<number>

export let TYPE_DOUBLE: GType<number>
export let Double: NumberConstructor

export let TYPE_STRING: GType<string>
export let String: StringConstructor

export let TYPE_NONE: GType<undefined>
export let TYPE_POINTER: GType<undefined>
export let TYPE_BOXED: GType<unknown>
export let TYPE_PARAM: GType<unknown>
export let TYPE_INTERFACE: GType<unknown>
export let TYPE_OBJECT: GType<object>
export let TYPE_JSOBJECT: GType<Object>
export let TYPE_VARIANT: GType<GLib.Variant>
export let TYPE_INT: GType<number>
export let TYPE_UINT: GType<number>
export let TYPE_INT64: GType<number>
export let TYPE_UINT64: GType<number>
export let TYPE_FLOAT: GType<number>

// fake enum for signal accumulators, keep in sync with gi/object.c
export enum AccumulatorType {
    NONE = 0,
    FIRST_WINS = 1,
    TRUE_HANDLED = 2,
}

// A simple workaround if you have a class with .connect, .disconnect or .emit
// methods (such as Gio.Socket.connect or NMClient.Device.disconnect)
// The original g_signal_* functions are not introspectable anyway, because
// we need our own handling of signal argument marshalling
export function signal_connect(object: Object, name: string, handler: (...args: any[]) => any): number
export function signal_connect_after(object: Object, name: string, handler: (...args: any[]) => any): number
export function signal_emit_by_name(object: Object, name: string, ...args: any[]): void

/**
 * Finds the first signal handler that matches certain selection criteria.
 * The criteria are passed as properties of a match object.
 * The match object has to be non-empty for successful matches.
 * If no handler was found, a falsy value is returned.
 *
 * @param instance the instance owning the signal handler to be found.
 * @param match a properties object indicating whether to match by signal ID, detail, or callback function.
 * @param match.signalId signal the handler has to be connected to.
 * @param match.detail signal detail the handler has to be connected to.
 * @param match.func the callback function the handler will invoke.
 * @returns A valid non-0 signal handler ID for a successful match.
 */
export function signal_handler_find(
    instance: Object,
    match: { signalId: string; detail: string; func: (...args: any[]) => any },
): number | bigint | object | null

/**
 * Blocks all handlers on an instance that match certain selection criteria.
 * The criteria are passed as properties of a match object.
 * The match object has to have at least `func` for successful matches.
 * If no handlers were found, 0 is returned, the number of blocked handlers
 * otherwise.
 *
 * @param instance the instance owning the signal handler to be found.
 * @param match a properties object indicating whether to match by signal ID, detail, or callback function.
 * @param match.signalId signal the handler has to be connected to.
 * @param match.detail signal detail the handler has to be connected to.
 * @param match.func the callback function the handler will invoke.
 * @returns The number of handlers that matched.
 */
export function signal_handlers_block_matched(
    instance: Object,
    match: { signalId: string; detail: string; func: (...args: any[]) => any },
): number

/**
 * Disconnects all handlers on an instance that match certain selection
 * criteria.
 * The criteria are passed as properties of a match object.
 * The match object has to have at least `func` for successful matches.
 * If no handlers were found, 0 is returned, the number of disconnected
 * handlers otherwise.
 *
 * @param instance the instance owning the signal handler
 *   to be found.
 * @param match a properties object indicating whether to match by signal ID, detail, or callback function.
 * @param match.signalId signal the handler has to be connected to.
 * @param match.detail signal detail the handler has to be connected to.
 * @param match.func the callback function the handler will invoke.
 * @returns The number of handlers that matched.
 */
export function signal_handlers_unblock_matched(
    instance: Object,
    match: { signalId: string; detail: string; func: (...args: any[]) => any },
): number

/**
 * Disconnects all handlers on an instance that match certain selection
 * criteria.
 * The criteria are passed as properties of a match object.
 * The match object has to have at least `func` for successful matches.
 * If no handlers were found, 0 is returned, the number of disconnected
 * handlers otherwise.
 *
 * @param instance the instance owning the signal handler
 *   to be found.
 * @param match a properties object indicating whether to match by signal ID, detail, or callback function.
 * @param match.signalId signal the handler has to be connected to.
 * @param match.detail signal detail the handler has to be connected to.
 * @param match.func the callback function the handler will invoke.
 * @returns The number of handlers that matched.
 */
export function signal_handlers_disconnect_matched(
    instance: Object,
    match: { signalId: string; detail: string; func: (...args: any[]) => any },
): number

// Also match the macros used in C APIs, even though they're not introspected

/**
 * Blocks all handlers on an instance that match `func`.
 *
 * @param instance the instance to block handlers from.
 * @param func the callback function the handler will invoke.
 * @returns The number of handlers that matched.
 */
export function signal_handlers_block_by_func(instance: Object, func: (...args: any[]) => any): number

/**
 * Unblocks all handlers on an instance that match `func`.
 *
 * @function
 * @param instance the instance to unblock handlers from.
 * @param func the callback function the handler will invoke.
 * @returns The number of handlers that matched.
 */
export function signal_handlers_unblock_by_func(instance: Object, func: (...args: any[]) => any): number

/**
 * Disconnects all handlers on an instance that match `func`.
 *
 * @param instance the instance to remove handlers from.
 * @param func the callback function the handler will invoke.
 * @returns The number of handlers that matched.
 */
export function signal_handlers_disconnect_by_func(instance: Object, func: (...args: any[]) => any): number
export function signal_handlers_disconnect_by_data(): void

export type Property<K extends ParamSpec> = K extends ParamSpec<infer T> ? T : any

// Helper types for type-safe signal handling
export interface SignalSignatures {
    /** Fallback for dynamic signals and type compatibility */
    [signal: string]: (...args: any[]) => any
}

/**
 * Helper to prepend the emitter (`source`) to an existing callback type.
 */
export type SignalCallback<Emitter, Fn> = Fn extends (...args: infer P) => infer R
    ? (source: Emitter, ...args: P) => R
    : never

// TODO: What about the generated class Closure
export type TClosure<R = any, P = any> = (...args: P[]) => R

type ObjectConstructor = { new (...args: any[]): Object }

export function registerClass<
    T extends ObjectConstructor,
    Props extends { [key: string]: ParamSpec },
    Interfaces extends { $gtype: GType }[],
    Sigs extends {
        [key: string]: {
            param_types?: readonly GType[]
            [key: string]: any
        }
    },
>(options: MetaInfo<Props, Interfaces, Sigs>, cls: T): T

export function registerClass<T extends ObjectConstructor>(cls: T): T

<% if (!noAdvancedVariants) { %>
// Advanced Variants registerClass overloads with enhanced type inference

export function registerClass<P extends {}, T extends new (...args: any[]) => P>(
    klass: T,
): RegisteredClass<T, {}, []>

export function registerClass<
    T extends Ctor,
    Props extends { [key: string]: ParamSpec },
    Interfaces extends { $gtype: AdvGType }[],
    Sigs extends {
        [key: string]: {
            param_types?: readonly AdvGType[]
            [key: string]: any
        }
    },
>(
    options: {
        GTypeName?: string
        GTypeFlags?: TypeFlags
        Properties?: Props
        Signals?: Sigs
        Implements?: Interfaces
        CssName?: string
        Template?: string
        Children?: string[]
        InternalChildren?: string[]
    },
    klass: T,
): RegisteredClass<T, Props, Interfaces>
<% } %>
