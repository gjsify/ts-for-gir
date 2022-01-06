/**
 * ClutterGdk-1.0
 */

import type * as Gjs from './Gjs';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Clutter from './Clutter-1.0';
import type Json from './Json-1.0';
import type GL from './GL-1.0';
import type CoglPango from './CoglPango-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Cogl from './Cogl-1.0';
import type Atk from './Atk-1.0';

export namespace ClutterGdk {

function disable_event_retrieval(): void
function get_default_display(): Gdk.Display
function get_stage_from_window(window: Gdk.Window): Clutter.Stage
function get_stage_window(stage: Clutter.Stage): Gdk.Window
function get_visual(): Gdk.Visual
function handle_event(event: Gdk.Event): Gdk.FilterReturn
function set_display(display: Gdk.Display): void
function set_stage_foreign(stage: Clutter.Stage, window: Gdk.Window): boolean
}
export default ClutterGdk