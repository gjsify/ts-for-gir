/**
 * GnomeAutoarGtk-0.1
 */

import "node"
import type { Gtk } from './Gtk-3.0';
import type { xlib } from './xlib-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gdk } from './Gdk-3.0';
import type { cairo } from './cairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { Gio } from './Gio-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { Atk } from './Atk-1.0';
import type { GnomeAutoar } from './GnomeAutoar-0.1';

export declare namespace GnomeAutoarGtk {

export function chooserAdvancedGet(advanced: Gtk.Widget, format: number, filter: number): boolean
export function chooserAdvancedNew(defaultFormat: GnomeAutoar.Format, defaultFilter: GnomeAutoar.Filter): Gtk.Widget
export function chooserSimpleGet(simple: Gtk.Widget, format: number, filter: number): boolean
export function chooserSimpleNew(defaultFormat: GnomeAutoar.Format, defaultFilter: GnomeAutoar.Filter): Gtk.Widget
}