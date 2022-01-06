/**
 * JavaScriptCore-3.0
 */

<<<<<<< HEAD
import "node"
import type { GObject } from './GObject-2.0';

export declare namespace JavaScriptCore {
=======
/// <reference types="node" />
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

declare namespace JavaScriptCore {
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))

export class GlobalContext {
    static name: string
}
export class Value {
    static name: string
}
}