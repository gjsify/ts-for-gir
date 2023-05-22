// A few things here are inspired by gi.ts 
// See https://gitlab.gnome.org/ewlsh/gi.ts/-/blob/master/packages/lib/src/generators/dts/gobject.ts
// Copyright Evan Welsh

export type GType<T = unknown> = {
    __type__(arg: never): T
    name: string
};

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
}

/** Interface of GObject Interface should be implemented by all GObject interfaces */
export class Interface<T = unknown> {
    static _classInit: (cls: any) => any;
    __name__: string;
    _construct: (params: any, ...otherArgs: any[]) => any;
    _init: (params: any) => void;
    $gtype?: GType<T>;
}

/**
 * Use this to signify a function that must be overridden in an
 * implementation of the interface.
 */
export class NotImplementedError extends Error {
    get name(): 'NotImplementedError'
}

// Expose GObject static properties for ES6 classes

export const GTypeName: unique symbol;
export const requires: unique symbol;
export const interfaces: unique symbol;
export const properties: unique symbol;
export const signals: unique symbol;

export let gtypeNameBasedOnJSPath: boolean;

export let TYPE_BOOLEAN: GType<boolean>;
export let Boolean: BooleanConstructor;

export let TYPE_ENUM: GType<number>;
export let TYPE_FLAGS: GType<number>;

export let TYPE_DOUBLE: GType<number>;
export let Double: NumberConstructor;

export let TYPE_STRING: GType<string>;
export let String: StringConstructor;

export let TYPE_NONE: GType<undefined>;
export let TYPE_POINTER: GType<undefined>;
export let TYPE_BOXED: GType<unknown>;
export let TYPE_PARAM: GType<unknown>;
export let TYPE_INTERFACE: GType<unknown>;
export let TYPE_OBJECT: GType<object>;
export let TYPE_VARIANT: GType<GLib.Variant>;
export let TYPE_INT: GType<number>;
export let TYPE_UINT: GType<number>;
export let TYPE_INT64: GType<number>;
export let TYPE_UINT64: GType<number>;

// fake enum for signal accumulators, keep in sync with gi/object.c
export enum AccumulatorType {
    NONE=0,
    FIRST_WINS=1,
    TRUE_HANDLED=2,
}

// A simple workaround if you have a class with .connect, .disconnect or .emit
// methods (such as Gio.Socket.connect or NMClient.Device.disconnect)
// The original g_signal_* functions are not introspectable anyway, because
// we need our own handling of signal argument marshalling
export function signal_connect(object: Object, name: string, handler: (...args: any[]) => any): number
export function signal_connect_after(object: Object, name: string, handler: (...args: any[]) => any): number
export function signal_emit_by_name(object: Object, ...nameAndArgs: any[]): void

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
export function signal_handler_find(instance: Object, match: {signalId: string, detail: string, func: (...args: any[]) => any}): number | bigint | object | null

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
export function signal_handlers_block_matched(instance: Object, match: {signalId: string, detail: string, func: (...args: any[]) => any}): number

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
export function signal_handlers_unblock_matched(instance: Object, match: {signalId: string, detail: string, func: (...args: any[]) => any}): number

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
export function signal_handlers_disconnect_matched(instance: Object, match: {signalId: string, detail: string, func: (...args: any[]) => any}): number

// Also match the macros used in C APIs, even though they're not introspected

/**
 * Blocks all handlers on an instance that match `func`.
 *
 * @param instance the instance to block handlers from.
 * @param func the callback function the handler will invoke.
 * @returns The number of handlers that matched.
 */
export function signal_handlers_block_by_func(instance: Object, func: (...args: any[]) => any): number;

/**
 * Unblocks all handlers on an instance that match `func`.
 *
 * @function
 * @param instance the instance to unblock handlers from.
 * @param func the callback function the handler will invoke.
 * @returns The number of handlers that matched.
 */
export function signal_handlers_unblock_by_func(instance: Object, func: (...args: any[]) => any): number;

/**
 * Disconnects all handlers on an instance that match `func`.
 *
 * @param instance the instance to remove handlers from.
 * @param func the callback function the handler will invoke.
 * @returns The number of handlers that matched.
 */
export function signal_handlers_disconnect_by_func(instance: Object, func: (...args: any[]) => any): number;
export function signal_handlers_disconnect_by_data(): void;

export type Property<K extends ParamSpec> = K extends ParamSpecBoolean
    ? boolean
    : K extends ParamSpecDouble | ParamSpecInt | ParamSpecUInt | ParamSpecFloat | ParamSpecLong
    ? number
    : K extends ParamSpecInt64 | ParamSpecUInt64 | ParamSpecULong
    ? number
    : K extends ParamSpecFlags
    ? number
    : K extends ParamSpecString | ParamSpecUnichar
    ? string
    : K extends ParamSpecValueArray
    ? any[]
    : K extends ParamSpecObject // TODO?: <infer T>
    ? ParamSpecObject // T
    : K extends ParamSpecEnum // TODO?: <infer T><infer E>
    ? ParamSpecEnum // E
    : K extends ParamSpecBoxed // TODO?: <infer T><infer B>
    ? ParamSpecBoxed //B
    : K extends ParamSpecVariant
    ? GLib.Variant
    : any;

// TODO: What about the generated class Closure 
export type TClosure<R = any, P = any> = (...args: P[]) => R;

// This should be replaces by a class of GObject.Object as soon as once we have implemented inheritance
export class AnyClass {}

export function registerClass<
    T extends AnyClass,
    Props extends { [key: string]: ParamSpec },
    Interfaces extends { $gtype: GType }[],
    Sigs extends {
        [key: string]: {
            param_types?: readonly GType[];
            [key: string]: any;
        };
    }
>(
    options: MetaInfo<Props, Interfaces, Sigs>,
    cls: T
): T;

export function registerClass<T extends AnyClass>(cls: T): T
