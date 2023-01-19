<% if(useNamespace){ %>
import GObject from './GObject-2.0.js';
import GLib from './GLib-2.0.js';
<% } else { %>
import * as GObject from './GObject-2.0.js';
import * as GLib from './GLib-2.0.js';
<% } %>

// https://gitlab.gnome.org/GNOME/gjs/-/blob/1.72.0/modules/script/package.js
export namespace Package {
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

export namespace System {
    export const programInvocationName: string
    export const version: number
    export const programPath: string | null
    /** Equal to ARGV */
    export const programArgs: string[]
    export function exit(code: number): void
    export function addressOfGObject(o: GObject.Object): object
    export function addressOf(o: any): object
    /** Runs the garbage collector */
    export function gc(): void
    export function refcount(o: GObject.Object): number
    export function dumpHeap(path: string): void
    export function dumpMemoryInfo(path: string): void
}

export namespace byteArray {
    export function fromString(input: string): Uint8Array
    export function fromGBytes(input: GLib.Bytes): Uint8Array
    export function toString(x: Uint8Array): string
    export function toGBytes(x: Uint8Array): GLib.Bytes
}

export namespace console {
    export function interact(): void
}

export namespace Lang {
    // TODO: There is a lot more in Lang
    export function Class(props: any): void
}

export namespace gettext {
    export enum LocaleCategory {
        ALL,
        COLLATE,
        CTYPE,
        MESSAGES,
        MONETARY,
        NUMERIC,
        TIME,
    }
    export function setlocale(category: number, locale: string | null): string
    export function textdomain(domainname: string | null): string
    export function bindtextdomain(domainname: string, dirname: string | null): string
    export function gettext(msgid: string): string
    export function dgettext(domainname: string | null, msgid: string): string
    export function dcgettext(domainname: string | null, msgid: string, category: number): string
    export function ngettext(msgid: string, msgid_plural: string, n: number): string
    export function dngettext(domainname: string, msgid: string, msgid_plural: string, n: number): string
    export function pgettext(context: string, msgid: string): string
    export function dpgettext(dom: string | null, context: string, msgid: string): string
    export function domain(domainName: string): {
        gettext: (msgid: string) => string
        ngettext: (msgid: string, msgid_plural: string, n: number) => string
        pgettext: (context: string, msgid: string) => string
    }
}

export namespace Format {
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

export namespace Mainloop {
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

export namespace Signals {

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
    export interface Methods {
        /**
         * Connects a callback to a signal for an object. Pass the returned ID to
         * `disconect()` to remove the handler.
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

    export function addSignalMethods<T = any>(proto: T): proto is T & Methods;
}
