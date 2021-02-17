/**
 * GnomeAutoarGtk-0.1
 */

import type * as Gjs from './Gjs';
import type * as Gtk from './Gtk-3.0';
import type * as xlib from './xlib-2.0';
import type * as Gdk from './Gdk-3.0';
import type * as cairo from './cairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';
import type * as Atk from './Atk-1.0';
import type * as GnomeAutoar from './GnomeAutoar-0.1';

export function chooser_advanced_get(advanced: Gtk.Widget, format: number, filter: number): boolean
export function chooser_advanced_new(default_format: GnomeAutoar.Format, default_filter: GnomeAutoar.Filter): Gtk.Widget
export function chooser_simple_get(simple: Gtk.Widget, format: number, filter: number): boolean
export function chooser_simple_new(default_format: GnomeAutoar.Format, default_filter: GnomeAutoar.Filter): Gtk.Widget