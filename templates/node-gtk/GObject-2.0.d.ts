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
export let TYPE_UNICHAR   : TYPE_UINT

export function typeFromName(name: 'void'): TYPE_INVALID
export function typeFromName(name: 'GInterface'): TYPE_INTERFACE
export function typeFromName(name: 'gchar'): TYPE_CHAR
export function typeFromName(name: 'guchar'): TYPE_UCHAR
export function typeFromName(name: 'gboolean'): TYPE_BOOLEAN
export function typeFromName(name: 'gint'): TYPE_INT
export function typeFromName(name: 'guint'): TYPE_UINT
export function typeFromName(name: 'glong'): TYPE_LONG
export function typeFromName(name: 'gulong'): TYPE_ULONG
export function typeFromName(name: 'gint64'): TYPE_INT64
export function typeFromName(name: 'guint64'): TYPE_UINT64
export function typeFromName(name: 'GEnum'): TYPE_ENUM
export function typeFromName(name: 'GFlags'): TYPE_FLAGS
export function typeFromName(name: 'gfloat'): TYPE_FLOAT
export function typeFromName(name: 'gdouble'): TYPE_DOUBLE
export function typeFromName(name: 'gchararray'): TYPE_STRING
export function typeFromName(name: 'gpointer'): TYPE_POINTER
export function typeFromName(name: 'GBoxed'): TYPE_BOXED
export function typeFromName(name: 'GParam'): TYPE_PARAM
export function typeFromName(name: 'GObject'): TYPE_OBJECT
export function typeFromName(name: 'GType'): TYPE_GTYPE
export function typeFromName(name: 'GVariant'): TYPE_VARIANT
