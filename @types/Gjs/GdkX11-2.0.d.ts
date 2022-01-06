/**
 * GdkX11-2.0
 */

import type * as Gjs from './Gjs';
import type xlib from './xlib-2.0';
import type Pango from './Pango-1.0';
import type cairo from './cairo-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Gdk from './Gdk-2.0';

export namespace GdkX11 {

function net_wm_supports(property: Gdk.Atom): boolean
function x11_atom_to_xatom(atom: Gdk.Atom): xlib.Atom
function x11_atom_to_xatom_for_display(display: Gdk.Display, atom: Gdk.Atom): xlib.Atom
function x11_colormap_get_xcolormap(colormap: Gdk.Colormap): xlib.Colormap
function x11_cursor_get_xcursor(cursor: Gdk.Cursor): xlib.Cursor
function x11_display_get_startup_notification_id(display: Gdk.Display): string
function x11_display_get_user_time(display: Gdk.Display): number
function x11_display_grab(display: Gdk.Display): void
function x11_display_set_cursor_theme(display: Gdk.Display, theme: string, size: number): void
function x11_display_string_to_compound_text(display: Gdk.Display, str: string, encoding: Gdk.Atom, format: number, ctext: number, length: number): number
function x11_display_text_property_to_text_list(display: Gdk.Display, encoding: Gdk.Atom, format: number, text: number, length: number, list: string): number
function x11_display_ungrab(display: Gdk.Display): void
function x11_display_utf8_to_compound_text(display: Gdk.Display, str: string, encoding: Gdk.Atom, format: number, ctext: number, length: number): boolean
function x11_drawable_get_xid(drawable: Gdk.Drawable): xlib.XID
function x11_font_get_name(font: Gdk.Font): string
function x11_font_get_xfont(font: Gdk.Font): object | null
function x11_free_compound_text(ctext: number): void
function x11_free_text_list(list: string): void
function x11_get_default_root_xwindow(): xlib.Window
function x11_get_default_screen(): number
function x11_get_server_time(window: Gdk.Window): number
function x11_get_xatom_by_name(atom_name: string): xlib.Atom
function x11_get_xatom_by_name_for_display(display: Gdk.Display, atom_name: string): xlib.Atom
function x11_get_xatom_name(xatom: xlib.Atom): string
function x11_get_xatom_name_for_display(display: Gdk.Display, xatom: xlib.Atom): string
function x11_grab_server(): void
function x11_register_standard_event_type(display: Gdk.Display, event_base: number, n_events: number): void
function x11_screen_get_monitor_output(screen: Gdk.Screen, monitor_num: number): xlib.XID
function x11_screen_get_screen_number(screen: Gdk.Screen): number
function x11_screen_get_window_manager_name(screen: Gdk.Screen): string
function x11_screen_get_xscreen(screen: Gdk.Screen): xlib.Screen
function x11_screen_lookup_visual(screen: Gdk.Screen, xvisualid: xlib.VisualID): Gdk.Visual
function x11_screen_supports_net_wm_hint(screen: Gdk.Screen, property: Gdk.Atom): boolean
function x11_set_sm_client_id(sm_client_id: string): void
function x11_ungrab_server(): void
function x11_window_move_to_current_desktop(window: Gdk.Window): void
function x11_window_set_user_time(window: Gdk.Window, timestamp: number): void
function xid_table_lookup(xid: xlib.XID): object | null
function xid_table_lookup_for_display(display: Gdk.Display, xid: xlib.XID): object | null
}
export default GdkX11