/**
 * GdkX11-2.0
 */

import * as Gjs from './Gjs';
import * as xlib from './xlib-2.0';
import * as Pango from './Pango-1.0';
import * as cairo from './cairo-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gio from './Gio-2.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';
import * as Gdk from './Gdk-2.0';

export function net_wm_supports(property: Gdk.Atom): boolean
export function x11_atom_to_xatom(atom: Gdk.Atom): xlib.Atom
export function x11_atom_to_xatom_for_display(display: Gdk.Display, atom: Gdk.Atom): xlib.Atom
export function x11_colormap_get_xcolormap(colormap: Gdk.Colormap): xlib.Colormap
export function x11_cursor_get_xcursor(cursor: Gdk.Cursor): xlib.Cursor
export function x11_display_get_startup_notification_id(display: Gdk.Display): string
export function x11_display_get_user_time(display: Gdk.Display): number
export function x11_display_grab(display: Gdk.Display): void
export function x11_display_set_cursor_theme(display: Gdk.Display, theme: string, size: number): void
export function x11_display_string_to_compound_text(display: Gdk.Display, str: string, encoding: Gdk.Atom, format: number, ctext: number, length: number): number
export function x11_display_text_property_to_text_list(display: Gdk.Display, encoding: Gdk.Atom, format: number, text: number, length: number, list: string): number
export function x11_display_ungrab(display: Gdk.Display): void
export function x11_display_utf8_to_compound_text(display: Gdk.Display, str: string, encoding: Gdk.Atom, format: number, ctext: number, length: number): boolean
export function x11_drawable_get_xid(drawable: Gdk.Drawable): xlib.XID
export function x11_font_get_name(font: Gdk.Font): string
export function x11_font_get_xfont(font: Gdk.Font): object | null
export function x11_free_compound_text(ctext: number): void
export function x11_free_text_list(list: string): void
export function x11_get_default_root_xwindow(): xlib.Window
export function x11_get_default_screen(): number
export function x11_get_server_time(window: Gdk.Window): number
export function x11_get_xatom_by_name(atom_name: string): xlib.Atom
export function x11_get_xatom_by_name_for_display(display: Gdk.Display, atom_name: string): xlib.Atom
export function x11_get_xatom_name(xatom: xlib.Atom): string
export function x11_get_xatom_name_for_display(display: Gdk.Display, xatom: xlib.Atom): string
export function x11_grab_server(): void
export function x11_register_standard_event_type(display: Gdk.Display, event_base: number, n_events: number): void
export function x11_screen_get_monitor_output(screen: Gdk.Screen, monitor_num: number): xlib.XID
export function x11_screen_get_screen_number(screen: Gdk.Screen): number
export function x11_screen_get_window_manager_name(screen: Gdk.Screen): string
export function x11_screen_get_xscreen(screen: Gdk.Screen): xlib.Screen
export function x11_screen_lookup_visual(screen: Gdk.Screen, xvisualid: xlib.VisualID): Gdk.Visual
export function x11_screen_supports_net_wm_hint(screen: Gdk.Screen, property: Gdk.Atom): boolean
export function x11_set_sm_client_id(sm_client_id: string): void
export function x11_ungrab_server(): void
export function x11_window_move_to_current_desktop(window: Gdk.Window): void
export function x11_window_set_user_time(window: Gdk.Window, timestamp: number): void
export function xid_table_lookup(xid: xlib.XID): object | null
export function xid_table_lookup_for_display(display: Gdk.Display, xid: xlib.XID): object | null