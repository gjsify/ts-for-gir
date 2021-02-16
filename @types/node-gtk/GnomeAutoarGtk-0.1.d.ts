/**
 * GnomeAutoarGtk-0.1
 */

/// <reference types="node" />
/// <reference path="Gtk-3.0.d.ts" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="Gdk-3.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="HarfBuzz-0.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />
/// <reference path="GnomeAutoar-0.1.d.ts" />

declare namespace GnomeAutoarGtk {

export function chooserAdvancedGet(advanced: Gtk.Widget, format: number, filter: number): boolean
export function chooserAdvancedNew(defaultFormat: GnomeAutoar.Format, defaultFilter: GnomeAutoar.Filter): Gtk.Widget
export function chooserSimpleGet(simple: Gtk.Widget, format: number, filter: number): boolean
export function chooserSimpleNew(defaultFormat: GnomeAutoar.Format, defaultFilter: GnomeAutoar.Filter): Gtk.Widget
}