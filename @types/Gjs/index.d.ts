import * as Gjs from './Gjs'
// /// <reference path="Gtk.d.ts" />
import * as Gtk from './Gtk'
// /// <reference path="Atk.d.ts" />
import * as Atk from './Atk'
// /// <reference path="GObject.d.ts" />
import * as GObject from './GObject'
// /// <reference path="GLib.d.ts" />
import * as GLib from './GLib'
// /// <reference path="Gdk.d.ts" />
import * as Gdk from './Gdk'
// /// <reference path="GdkPixbuf.d.ts" />
import * as GdkPixbuf from './GdkPixbuf'
// /// <reference path="GModule.d.ts" />
import * as GModule from './GModule'
// /// <reference path="Gio.d.ts" />
import * as Gio from './Gio'
// /// <reference path="Pango.d.ts" />
import * as Pango from './Pango'
// /// <reference path="cairo.d.ts" />
import * as cairo from './cairo'
// /// <reference path="xlib.d.ts" />
import * as xlib from './xlib'
// /// <reference path="Soup.d.ts" />
import * as Soup from './Soup'
// /// <reference path="GtkSource.d.ts" />
import * as GtkSource from './GtkSource'
// /// <reference path="WebKit2.d.ts" />
import * as WebKit2 from './WebKit2'
// /// <reference path="JavaScriptCore.d.ts" />
import * as JavaScriptCore from './JavaScriptCore'
// /// <reference path="AppIndicator3.d.ts" />
import * as AppIndicator3 from './AppIndicator3'
// /// <reference path="Gda.d.ts" />
import * as Gda from './Gda'
// /// <reference path="libxml2.d.ts" />
import * as libxml2 from './libxml2'
// /// <reference path="Notify.d.ts" />
import * as Notify from './Notify'

declare global {
    function print(...args: any[]): void
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
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
            Gda: typeof Gda
            libxml2: typeof libxml2
            Notify: typeof Notify
        }
        searchPath: string[]
    }
}

export { imports }
