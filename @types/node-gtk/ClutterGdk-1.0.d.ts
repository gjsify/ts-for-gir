/**
 * ClutterGdk-1.0
 */

/// <reference types="node" />
import type { Gdk } from './Gdk-3.0';
import type { cairo } from './cairo-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { Pango } from './Pango-1.0';
import type { HarfBuzz } from './HarfBuzz-0.0';
import type { Gio } from './Gio-2.0';
import type { GdkPixbuf } from './GdkPixbuf-2.0';
import type { GModule } from './GModule-2.0';
import type { Clutter } from './Clutter-1.0';
import type { Json } from './Json-1.0';
import type { GL } from './GL-1.0';
import type { CoglPango } from './CoglPango-1.0';
import type { PangoCairo } from './PangoCairo-1.0';
import type { Cogl } from './Cogl-1.0';
import type { Atk } from './Atk-1.0';

declare namespace ClutterGdk {

export function disableEventRetrieval(): void
export function getDefaultDisplay(): Gdk.Display
export function getStageFromWindow(window: Gdk.Window): Clutter.Stage
export function getStageWindow(stage: Clutter.Stage): Gdk.Window
export function getVisual(): Gdk.Visual
export function handleEvent(event: Gdk.Event): Gdk.FilterReturn
export function setDisplay(display: Gdk.Display): void
export function setStageForeign(stage: Clutter.Stage, window: Gdk.Window): boolean
}