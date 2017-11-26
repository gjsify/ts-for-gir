/// <reference path="print.d.ts" />

import * as Gjs from "./Gjs";
import * as Gtk from "./Gtk";
import * as Atk from "./Atk";
import * as GObject from "./GObject";
import * as GLib from "./GLib";
import * as Gdk from "./Gdk";
import * as GdkPixbuf from "./GdkPixbuf";
import * as GModule from "./GModule";
import * as Gio from "./Gio";
import * as Pango from "./Pango";
import * as cairo from "./cairo";
import * as xlib from "./xlib";
import * as Soup from "./Soup";
import * as GtkSource from "./GtkSource";
import * as WebKit2 from "./WebKit2";
import * as JavaScriptCore from "./JavaScriptCore";
import * as AppIndicator3 from "./AppIndicator3";
import * as Notify from "./Notify";

declare global {
    function printerr(...args: any[]): void
    function log(message?: string)
    function logError(exception: any, message?: string)
    const ARGV: string[]
    const imports: typeof Gjs & {
        [key: string]: any
        gi: {
            Gtk: typeof Gtk
            Atk: typeof Atk
            GObject: typeof GObject
            GLib: typeof GLib
            Gdk: typeof Gdk
            GdkPixbuf: typeof GdkPixbuf
            GModule: typeof GModule
            Gio: typeof Gio
            Pango: typeof Pango
            cairo: typeof cairo
            xlib: typeof xlib
            Soup: typeof Soup
            GtkSource: typeof GtkSource
            WebKit2: typeof WebKit2
            JavaScriptCore: typeof JavaScriptCore
            AppIndicator3: typeof AppIndicator3
            Notify: typeof Notify
        }
        searchPath: string[]
    }
}

export { }