import * as Gjs from './Gjs'
import * as Gtk from './Gtk-3.0'
import * as Atk from './Atk-1.0'
import * as GObject from './GObject-2.0'
import * as GLib from './GLib-2.0'
import * as Gdk from './Gdk-3.0'
import * as GdkPixbuf from './GdkPixbuf-2.0'
import * as GModule from './GModule-2.0'
import * as Gio from './Gio-2.0'
import * as Pango from './Pango-1.0'
import * as cairo from './cairo-1.0'
import * as xlib from './xlib-2.0'
import * as Soup from './Soup-2.4'
import * as GtkSource from './GtkSource-3.0'
import * as WebKit2 from './WebKit2-4.0'
import * as JavaScriptCore from './JavaScriptCore-4.0'
import * as AppIndicator3 from './AppIndicator3-0.1'
import * as Gda from './Gda-5.0'
import * as libxml2 from './libxml2-2.0'
import * as Notify from './Notify-0.7'

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
