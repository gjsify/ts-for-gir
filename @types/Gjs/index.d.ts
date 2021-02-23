import type * as Gjs from "./Gjs";
// TODO add support for multiple versions
//// import type * as Gtk30 from "./Gtk-3.0";
//// import type * as Xlib20 from "./xlib-2.0";
//// import type * as Gdk30 from "./Gdk-3.0";
//// import type * as Atk10 from "./Atk-1.0";
//// import type * as GObject20 from "./GObject-2.0";
//// import type * as Cairo10 from "./cairo-1.0";
//// import type * as Pango10 from "./Pango-1.0";
//// import type * as Gio20 from "./Gio-2.0";
//// import type * as GdkPixbuf20 from "./GdkPixbuf-2.0";
//// import type * as GLib20 from "./GLib-2.0";
//// import type * as HarfBuzz00 from "./HarfBuzz-0.0";
//// import type * as GModule20 from "./GModule-2.0";
//

declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]
    const imports: typeof Gjs & {
      [key: string]: any;
      gi: {
        [key: string]: any;
      }
      versions: {
        [key: string]: any;
      }
      searchPath: string[];
    }
    // TODO add support for multiple versions
    // const imports: typeof Gjs & {
    //     [key: string]: any
    //     gi: {
    //    //       : typeof Gtk30
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
    //    //     }
    //     searchPath: string[];
    // }
}

export { imports }
