/**
 * XdpGtk4-1.0
 */

import "node"
import type { Xdp } from './Xdp-1.0';
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Gtk } from './Gtk-4.0';
import type { Gsk } from './Gsk-4.0';
import type { Graphene } from './Graphene-1.0';
import type { Gdk } from './Gdk-4.0';
import type { cairo } from './cairo-1.0';
import type { PangoCairo } from './PangoCairo-1.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';

declare namespace XdpGtk4 {

function parentNewGtk(window: Gtk.Window): Xdp.Parent
}
export default XdpGtk4