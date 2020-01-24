/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="Gtk-3.0.d.ts" />
/// <reference path="Atk-1.0.d.ts" />
/// <reference path="GObject-2.0.d.ts" />
/// <reference path="GLib-2.0.d.ts" />
/// <reference path="Gdk-3.0.d.ts" />
/// <reference path="GdkPixbuf-2.0.d.ts" />
/// <reference path="GModule-2.0.d.ts" />
/// <reference path="Gio-2.0.d.ts" />
/// <reference path="Pango-1.0.d.ts" />
/// <reference path="cairo-1.0.d.ts" />
/// <reference path="xlib-2.0.d.ts" />
/// <reference path="Soup-2.4.d.ts" />
/// <reference path="GtkSource-3.0.d.ts" />
/// <reference path="WebKit2-4.0.d.ts" />
/// <reference path="JavaScriptCore-4.0.d.ts" />
/// <reference path="AppIndicator3-0.1.d.ts" />
/// <reference path="Gda-5.0.d.ts" />
/// <reference path="libxml2-2.0.d.ts" />
/// <reference path="Notify-0.7.d.ts" />

declare module 'node-gtk' {
    export function require(ns: string, ver?: string): any
    export function require(ns: 'Gtk'): typeof Gtk
    export function require(ns: 'Gtk', ver?: '3.0'): typeof Gtk
    export function require(ns: 'Atk'): typeof Atk
    export function require(ns: 'Atk', ver?: '1.0'): typeof Atk
    export function require(ns: 'GObject'): typeof GObject
    export function require(ns: 'GObject', ver?: '2.0'): typeof GObject
    export function require(ns: 'GLib'): typeof GLib
    export function require(ns: 'GLib', ver?: '2.0'): typeof GLib
    export function require(ns: 'Gdk'): typeof Gdk
    export function require(ns: 'Gdk', ver?: '3.0'): typeof Gdk
    export function require(ns: 'GdkPixbuf'): typeof GdkPixbuf
    export function require(ns: 'GdkPixbuf', ver?: '2.0'): typeof GdkPixbuf
    export function require(ns: 'GModule'): typeof GModule
    export function require(ns: 'GModule', ver?: '2.0'): typeof GModule
    export function require(ns: 'Gio'): typeof Gio
    export function require(ns: 'Gio', ver?: '2.0'): typeof Gio
    export function require(ns: 'Pango'): typeof Pango
    export function require(ns: 'Pango', ver?: '1.0'): typeof Pango
    export function require(ns: 'cairo'): typeof cairo
    export function require(ns: 'cairo', ver?: '1.0'): typeof cairo
    export function require(ns: 'xlib'): typeof xlib
    export function require(ns: 'xlib', ver?: '2.0'): typeof xlib
    export function require(ns: 'Soup'): typeof Soup
    export function require(ns: 'Soup', ver?: '2.4'): typeof Soup
    export function require(ns: 'GtkSource'): typeof GtkSource
    export function require(ns: 'GtkSource', ver?: '3.0'): typeof GtkSource
    export function require(ns: 'WebKit2'): typeof WebKit2
    export function require(ns: 'WebKit2', ver?: '4.0'): typeof WebKit2
    export function require(ns: 'JavaScriptCore'): typeof JavaScriptCore
    export function require(ns: 'JavaScriptCore', ver?: '4.0'): typeof JavaScriptCore
    export function require(ns: 'AppIndicator3'): typeof AppIndicator3
    export function require(ns: 'AppIndicator3', ver?: '0.1'): typeof AppIndicator3
    export function require(ns: 'Gda'): typeof Gda
    export function require(ns: 'Gda', ver?: '5.0'): typeof Gda
    export function require(ns: 'libxml2'): typeof libxml2
    export function require(ns: 'libxml2', ver?: '2.0'): typeof libxml2
    export function require(ns: 'Notify'): typeof Notify
    export function require(ns: 'Notify', ver?: '0.7'): typeof Notify
    export function startLoop(): void
}
