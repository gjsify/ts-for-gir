// See https://gitlab.gnome.org/ewlsh/gi.ts/-/blob/master/packages/parser/src/xml.ts

import { GirBoolean } from './gir-boolean'

/** Attributes of a Callable (functions, callbacks, closures, etc...) */
export interface GirCallableAttrs {
    /** name of the Callable */
    name: string
    //C identifier in the source code of the Callable
    'c:identifier'?: string
    /** Callable it is shadowed by. For example, in C++, only one version of an overloaded callable will appear */
    'shadowed-by'?: string
    /** Callable it shadows. For example, in C++, only one version of an overloaded callable will appear */
    shadows?: string
    /** Binary attribute, true if the callable can throw an error */
    throws?: GirBoolean
    /** if for backward compatibility reason the callable has a name in the source code but should be known by another one, this attribute contains the new name     */
    'moved-to'?: string[]
}
