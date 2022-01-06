import type * as Gjs from "./Gjs";
// TODO add support for multiple versions
import type * as Gtk30 from "./Gtk-3.0";
import type * as Soup24 from "./Soup-2.4";
import type * as GtkSource30 from "./GtkSource-3.0";
import type * as WebKit240 from "./WebKit2-4.0";
import type * as AppIndicator301 from "./AppIndicator3-0.1";
import type * as Gda50 from "./Gda-5.0";
import type * as Notify07 from "./Notify-0.7";
import type * as Xlib20 from "./xlib-2.0";
import type * as Gdk30 from "./Gdk-3.0";
import type * as Atk10 from "./Atk-1.0";
import type * as GObject20 from "./GObject-2.0";
import type * as Cairo10 from "./cairo-1.0";
import type * as Pango10 from "./Pango-1.0";
import type * as Gio20 from "./Gio-2.0";
import type * as GdkPixbuf20 from "./GdkPixbuf-2.0";
import type * as GLib20 from "./GLib-2.0";
import type * as HarfBuzz00 from "./HarfBuzz-0.0";
import type * as GModule20 from "./GModule-2.0";
import type * as JavaScriptCore40 from "./JavaScriptCore-4.0";
import type * as Libxml220 from "./libxml2-2.0";


declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]

    const imports: typeof Gjs & {
        gi: {
            Gtk:              typeof Gtk30
            Soup:              typeof Soup24
            GtkSource:              typeof GtkSource30
            WebKit2:              typeof WebKit240
            AppIndicator3:              typeof AppIndicator301
            Gda:              typeof Gda50
            Notify:              typeof Notify07
            xlib:              typeof Xlib20
            Gdk:              typeof Gdk30
            Atk:              typeof Atk10
            GObject:              typeof GObject20
            cairo:              typeof Cairo10
            Pango:              typeof Pango10
            Gio:              typeof Gio20
            GdkPixbuf:              typeof GdkPixbuf20
            GLib:              typeof GLib20
            HarfBuzz:              typeof HarfBuzz00
            GModule:              typeof GModule20
            JavaScriptCore:              typeof JavaScriptCore40
            libxml2:              typeof Libxml220
        }
        versions: {
            Gtk:              '3.0'
            Soup:              '2.4'
            GtkSource:              '3.0'
            WebKit2:              '4.0'
            AppIndicator3:              '0.1'
            Gda:              '5.0'
            Notify:              '0.7'
            xlib:              '2.0'
            Gdk:              '3.0'
            Atk:              '1.0'
            GObject:              '2.0'
            cairo:              '1.0'
            Pango:              '1.0'
            Gio:              '2.0'
            GdkPixbuf:              '2.0'
            GLib:              '2.0'
            HarfBuzz:              '0.0'
            GModule:              '2.0'
            JavaScriptCore:              '4.0'
            libxml2:              '2.0'
        }
        searchPath: string[];
    }
    // TODO add support for multiple versions
    // const imports: typeof Gjs & {
    //     [key: string]: any
    //     gi: {
    //    //       : typeof Gtk30
    //    //       : typeof Soup24
    //    //       : typeof GtkSource30
    //    //       : typeof WebKit240
    //    //       : typeof AppIndicator301
    //    //       : typeof Gda50
    //    //       : typeof Notify07
    //    //       : typeof Xlib20
    //    //       : typeof Gdk30
    //    //       : typeof Atk10
    //    //       : typeof GObject20
    //    //       : typeof Cairo10
    //    //       : typeof Pango10
    //    //       : typeof Gio20
    //    //       : typeof GdkPixbuf20
    //    //       : typeof GLib20
    //    //       : typeof HarfBuzz00
    //    //       : typeof GModule20
    //    //       : typeof JavaScriptCore40
    //    //       : typeof Libxml220
    //    //     }
    //     versions: {
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //     }
    //     searchPath: string[];
    // }
}

export { imports }
