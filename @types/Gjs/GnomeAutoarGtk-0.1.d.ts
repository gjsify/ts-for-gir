/**
 * GnomeAutoarGtk-0.1
 */

import * as Gjs from './Gjs';
import * as Gtk from './Gtk-3.0';
import * as xlib from './xlib-2.0';
import * as Gdk from './Gdk-3.0';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gio from './Gio-2.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';
import * as Atk from './Atk-1.0';
import * as GnomeAutoar from './GnomeAutoar-0.1';

export function chooser_advanced_get(advanced: Gtk.Widget, format: number, filter: number): boolean
export function chooser_advanced_new(default_format: GnomeAutoar.Format, default_filter: GnomeAutoar.Filter): Gtk.Widget
export function chooser_simple_get(simple: Gtk.Widget, format: number, filter: number): boolean
export function chooser_simple_new(default_format: GnomeAutoar.Format, default_filter: GnomeAutoar.Filter): Gtk.Widget