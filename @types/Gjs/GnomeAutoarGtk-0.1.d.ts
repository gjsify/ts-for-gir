/**
 * GnomeAutoarGtk-0.1
 */

import type * as Gjs from './Gjs';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';
import type GnomeAutoar from './GnomeAutoar-0.1';

export namespace GnomeAutoarGtk {

function chooser_advanced_get(advanced: Gtk.Widget, format: number, filter: number): boolean
function chooser_advanced_new(default_format: GnomeAutoar.Format, default_filter: GnomeAutoar.Filter): Gtk.Widget
function chooser_simple_get(simple: Gtk.Widget, format: number, filter: number): boolean
function chooser_simple_new(default_format: GnomeAutoar.Format, default_filter: GnomeAutoar.Filter): Gtk.Widget
}
export default GnomeAutoarGtk