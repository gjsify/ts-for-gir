/**
 * ClutterGdk-1.0
 */

import * as Gjs from './Gjs';
import * as Gdk from './Gdk-3.0';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gio from './Gio-2.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';
import * as Clutter from './Clutter-1.0';
import * as Json from './Json-1.0';
import * as GL from './GL-1.0';
import * as CoglPango from './CoglPango-1.0';
import * as PangoCairo from './PangoCairo-1.0';
import * as Cogl from './Cogl-1.0';
import * as Atk from './Atk-1.0';

export function disable_event_retrieval(): void
export function get_default_display(): Gdk.Display
export function get_stage_from_window(window: Gdk.Window): Clutter.Stage
export function get_stage_window(stage: Clutter.Stage): Gdk.Window
export function get_visual(): Gdk.Visual
export function handle_event(event: Gdk.Event): Gdk.FilterReturn
export function set_display(display: Gdk.Display): void
export function set_stage_foreign(stage: Clutter.Stage, window: Gdk.Window): boolean