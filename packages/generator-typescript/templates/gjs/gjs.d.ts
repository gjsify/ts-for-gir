/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in <%= APP_NAME %> itself or create a bug report on <%= APP_SOURCE %>
 */
import './ambient.d.ts';

<%_ const GObject = dep.find('GObject') _%>
<%_ const GLib = dep.find('GLib') _%>
<%- GObject ? GObject.importDef : '' %>
<%- GLib ? GLib.importDef : '' %>
import gettext from './gettext.js';
import system from './system.js';
import cairo from './cairo.js';

// https://gitlab.gnome.org/GNOME/gjs/-/blob/1.72.0/modules/script/package.js
declare namespace package {
    /**
     * Although there are references in the documentation of more properties that
     * this object should accepts, only the following are actually used in the init code,
     * and all the other have their values derived from them.
     */
    interface PackageInitParams {
        name: string
        version: string
        prefix: string
        libdir: string
    }

    export const name: string | undefined
    export const version: string | undefined
    export const prefix: string | undefined
    export const datadir: string | undefined
    export const libdir: string | undefined
    export const pkgdatadir: string | undefined
    export const pkglibdir: string | undefined
    export const moduledir: string | undefined
    export const localedir: string | undefined

    export function init(params: PackageInitParams): void
    export function run(module: { main: (argv: string[]) => void }): void
    /** shortcut to init+run */
    export function start(params: PackageInitParams): void
    export function require(libs: Record<string, string>): void
    export function requireSymbol(lib: string, ver: string, symbol: string): void
    export function checkSymbol(lib: string, ver: string, symbol: string): void
    export function initGettext(): void
    /** @deprecated Use JS string interpolation */
    export function initFormat(): void
    export function initSubmodule(module: string): void
}

declare namespace byteArray {
    export class ByteArray {
        static get(target: any, property: string, receiver: any): any
        static set(target: any, property: string, value: any, receiver: any): boolean

        length: number
        protected _array: Uint8Array

        constructor(x: Uint8Array | number)
        toString(encoding?: TextDecoderEncoding): string
        fromString(input: string, encoding?: TextDecoderEncoding): ByteArray
        toGBytes(): GLib.Bytes
    }

    /** @deprecated Use {@link TextEncoder.encode} instead */
    export function fromString(input: string, encoding?: TextDecoderEncoding): Uint8Array

    /** @deprecated Use {@link GLib.Bytes.toArray} instead */
    export function fromGBytes(input: GLib.Bytes): Uint8Array

    /** @deprecated Use {@link TextEncoder.encode} instead */
    export function toString(x: Uint8Array, encoding?: TextDecoderEncoding): string

    /** @deprecated Use {@link GLib.Bytes new GLib.Bytes() } instead */
    export function toGBytes(x: Uint8Array): GLib.Bytes

    /** @deprecated Use {@link ByteArray new ByteArray()} instead */
    export function fromArray(array: Iterable<number>): ByteArray
}

declare namespace lang {
    // TODO: There is a lot more in Lang
    export function Class(props: any): void
}

declare namespace format {
    export function vprintf(str: string, args: string[]): string
    export function printf(fmt: string, ...args: any[]): void
    // Following docs from gjs/modules/format.js
    /**
     * This function is intended to extend the String object and provide
     * an String.format API for string formatting.
     * It has to be set up using String.prototype.format = Format.format;
     * Usage:
     * "somestring %s %d".format('hello', 5);
     * It supports %s, %d, %x and %f, for %f it also support precisions like
     * "%.2f".format(1.526). All specifiers can be prefixed with a minimum
     * field width, e.g. "%5s".format("foo"). Unless the width is prefixed
     * with '0', the formatted string will be padded with spaces.
     */
    export function format(fmt: string, ...args: any[]): string
}

declare namespace mainloop {
    export function quit(name: string): void
    export function idle_source(handler: any, priority?: number): any
    export function idle_add(handler: any, priority?: number): any
    export function timeout_source(timeout: any, handler: any, priority?: number): any
    export function timeout_seconds_source(timeout: any, handler: any, priority?: number): any
    export function timeout_add(timeout: any, handler: any, priority?: number): any
    export function timeout_add_seconds(timeout: any, handler: any, priority?: number): any
    export function source_remove(id: any): any
    export function run(name: string): void
}

/**
 * You can use the `Signals.addSignalMethods` method to apply the `Signals` convenience methods to an `Object`.
 * Generally, this is called on an object prototype, but may also be called on an object instance.
 * You can use this Interface for this object or prototype to make the methods in typescript known
 * @example
 * ```ts
 * const Signals = imports.signals;
 * 
 * // Define an interface with the same name of your class to make the methods known
 * interface Events extends Signals.Methods {}
 * 
 * class Events {}
 * Signals.addSignalMethods(Events.prototype);
 * 
 * const events = new Events();
 * 
 * // Typescript will not complain here
 * events.emit("test-signal", "test argument");
 * ```
 */
export interface SignalMethods {
    /**
     * Connects a callback to a signal for an object. Pass the returned ID to
     * `disconnect()` to remove the handler.
     * 
     * If `callback` returns `true`, emission will stop and no other handlers will be
     * invoked.
     * 
     * > Warning: Unlike GObject signals, `this` within a signal callback will always
     * > refer to the global object (ie. `globalThis`).
     * 
     * @param sigName A signal name
     * @param callback A callback function
     * @returns A handler ID
     */
    connect(sigName: string, callback: (self: any, ...args: any[]) => void): number;
    /**
     * Emits a signal for an object. Emission stops if a signal handler returns `true`.
     * 
     * Unlike GObject signals, it is not necessary to declare signals or define their
     * signature. Simply call `emit()` with whatever signal name you wish, with
     * whatever arguments you wish.
     * @param sigName A signal name
     * @param args Any number of arguments, of any type
     */
    emit(sigName: string, ...args: any[]): void;
    /**
     * Disconnects a handler for a signal.
     * @param id The ID of the handler to be disconnected
     */
    disconnect(id: number): void;
    /**
     * Disconnects all signal handlers for an object.
     */
    disconnectAll(): void
    /**
     * Checks if a handler ID is connected.
     * @param id The ID of the handler to be disconnected
     * @returns `true` if connected, or `false` if not
     */
    signalHandlerIsConnected(id: number): boolean;
}

declare namespace signals {
    export function addSignalMethods<T = any>(proto: T): proto is T & SignalMethods;
}

declare global {

    interface GjsGiImports {
        // Will be extended by the import of more gir types
        versions: {
            [namespace: string]: string
        }
    }
    
    interface GjsImports {
        gi: GjsGiImports
        lang: typeof lang
        system: typeof system
        signals: typeof signals
        package: typeof package
        mainloop: typeof mainloop
        searchPath: string[]
        gettext: typeof gettext
        byteArray: typeof byteArray
        format: typeof format
        cairo: typeof cairo
    }

    function print(...args: any[]): void
    function printerr(...args: any[]): void
    function log(message: any): void
    function logError(exception: object, message?: any): void
    function logError(message?: any): void

    const pkg: typeof package

    interface BooleanConstructor {
        $gtype: GObject.GType<boolean>
    }

    interface NumberConstructor {
        $gtype: GObject.GType<number>
    }

    interface StringConstructor {
        $gtype: GObject.GType<string>
    }

    const imports: GjsImports
}

declare const _imports: GjsImports
export default _imports
export { _imports as imports }
