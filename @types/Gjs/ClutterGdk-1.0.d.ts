/**
 * ClutterGdk-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gdk from './Gdk-3.0';
import type * as cairo from './cairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';
import type * as Clutter from './Clutter-1.0';
import type * as Json from './Json-1.0';
import type * as GL from './GL-1.0';
import type * as CoglPango from './CoglPango-1.0';
import type * as PangoCairo from './PangoCairo-1.0';
import type * as Cogl from './Cogl-1.0';
import type * as Atk from './Atk-1.0';

export function disable_event_retrieval(): void
export function get_default_display(): Gdk.Display
export function get_stage_from_window(window: Gdk.Window): Clutter.Stage
export function get_stage_window(stage: Clutter.Stage): Gdk.Window
export function get_visual(): Gdk.Visual
export function handle_event(event: Gdk.Event): Gdk.FilterReturn
export function set_display(display: Gdk.Display): void
export function set_stage_foreign(stage: Clutter.Stage, window: Gdk.Window): boolean