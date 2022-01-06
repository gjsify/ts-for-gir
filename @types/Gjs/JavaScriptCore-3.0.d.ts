/**
 * JavaScriptCore-3.0
 */

<<<<<<< HEAD
<<<<<<< HEAD
import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';
=======
import * as Gjs from './Gjs';
import * as GObject from './GObject-2.0';
>>>>>>> e7399ae (Do not ignore type definitions anymore (to make it compareable in git to check new generation features))
=======
import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
>>>>>>> 2968f8b (Update types)

export class GlobalContext {
    static name: string
}
export class Value {
    static name: string
}