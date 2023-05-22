// See https://github.com/romgrk/node-gtk/blob/master/lib/overrides/GObject.js

export type GType<T = unknown> = {
    __type__(arg: never): T
    name: string
};

// TODO: What about the generated class Closure 
export type TClosure<R = any, P = any> = (...args: P[]) => R;

export let TYPE_INVALID   : 0n
export let TYPE_NONE      : GType<undefined>;
export let TYPE_INTERFACE : GType<unknown>;
export let TYPE_CHAR      : GType<string>;
export let TYPE_UCHAR     : GType<string>;
export let TYPE_BOOLEAN   : GType<boolean>;
export let TYPE_INT       : GType<number>;
export let TYPE_UINT      : GType<number>;
export let TYPE_LONG      : GType<number>;
export let TYPE_ULONG     : GType<number>;
export let TYPE_INT64     : GType<number>;
export let TYPE_UINT64    : GType<number>;
export let TYPE_ENUM      : GType<number>;
export let TYPE_FLAGS     : GType<number>;
export let TYPE_FLOAT     : GType<number>;
export let TYPE_DOUBLE    : GType<number>;
export let TYPE_STRING    : GType<string>;
export let TYPE_POINTER   : GType<undefined>;
export let TYPE_BOXED     : GType<unknown>;
export let TYPE_PARAM     : GType<unknown>;
export let TYPE_OBJECT    : GType<object>;
export let TYPE_GTYPE     : GType<unknown>;
export let TYPE_VARIANT   : GType<unknown>;
export let TYPE_UNICHAR   : GType<number>;

export function typeFromName(name: 'void'): typeof TYPE_INVALID
export function typeFromName(name: 'GInterface'): typeof TYPE_INTERFACE
export function typeFromName(name: 'gchar'): typeof TYPE_CHAR
export function typeFromName(name: 'guchar'): typeof TYPE_UCHAR
export function typeFromName(name: 'gboolean'): typeof TYPE_BOOLEAN
export function typeFromName(name: 'gint'): typeof TYPE_INT
export function typeFromName(name: 'guint'): typeof TYPE_UINT
export function typeFromName(name: 'glong'): typeof TYPE_LONG
export function typeFromName(name: 'gulong'): typeof TYPE_ULONG
export function typeFromName(name: 'gint64'): typeof TYPE_INT64
export function typeFromName(name: 'guint64'): typeof TYPE_UINT64
export function typeFromName(name: 'GEnum'): typeof TYPE_ENUM
export function typeFromName(name: 'GFlags'): typeof TYPE_FLAGS
export function typeFromName(name: 'gfloat'): typeof TYPE_FLOAT
export function typeFromName(name: 'gdouble'): typeof TYPE_DOUBLE
export function typeFromName(name: 'gchararray'): typeof TYPE_STRING
export function typeFromName(name: 'gpointer'): typeof TYPE_POINTER
export function typeFromName(name: 'GBoxed'): typeof TYPE_BOXED
export function typeFromName(name: 'GParam'): typeof TYPE_PARAM
export function typeFromName(name: 'GObject'): typeof TYPE_OBJECT
export function typeFromName(name: 'GType'): typeof TYPE_GTYPE
export function typeFromName(name: 'GVariant'): typeof TYPE_VARIANT
