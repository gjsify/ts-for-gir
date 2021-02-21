/* eslint-disable @typescript-eslint/triple-slash-reference */
import type { Gtk as Gtk30 } from "./Gtk-3.0";
import type { xlib as Xlib20 } from "./xlib-2.0";
import type { Gdk as Gdk30 } from "./Gdk-3.0";
import type { Atk as Atk10 } from "./Atk-1.0";
import type { GObject as GObject20 } from "./GObject-2.0";
import type { cairo as Cairo10 } from "./cairo-1.0";
import type { Pango as Pango10 } from "./Pango-1.0";
import type { Gio as Gio20 } from "./Gio-2.0";
import type { GdkPixbuf as GdkPixbuf20 } from "./GdkPixbuf-2.0";
import type { GLib as GLib20 } from "./GLib-2.0";
import type { HarfBuzz as HarfBuzz00 } from "./HarfBuzz-0.0";
import type { GModule as GModule20 } from "./GModule-2.0";

declare module 'node-gtk' {
    export function require(ns: string, ver?: string): any;
        export function require(ns: 'Gtk30', ver?: '3.0'): typeof Gtk30;
        export function require(ns: 'Xlib20', ver?: '2.0'): typeof Xlib20;
        export function require(ns: 'Gdk30', ver?: '3.0'): typeof Gdk30;
        export function require(ns: 'Atk10', ver?: '1.0'): typeof Atk10;
        export function require(ns: 'GObject20', ver?: '2.0'): typeof GObject20;
        export function require(ns: 'Cairo10', ver?: '1.0'): typeof Cairo10;
        export function require(ns: 'Pango10', ver?: '1.0'): typeof Pango10;
        export function require(ns: 'Gio20', ver?: '2.0'): typeof Gio20;
        export function require(ns: 'GdkPixbuf20', ver?: '2.0'): typeof GdkPixbuf20;
        export function require(ns: 'GLib20', ver?: '2.0'): typeof GLib20;
        export function require(ns: 'HarfBuzz00', ver?: '0.0'): typeof HarfBuzz00;
        export function require(ns: 'GModule20', ver?: '2.0'): typeof GModule20;
    export function startLoop(): void;
}
