import * as GLib from './GLib'
import * as Gio from './Gio'
import * as Atk from './Atk'
import * as Gtk from './Gtk'
import * as Soup from './Soup'
import * as GtkSource from './GtkSource'
import * as WebKit from './WebKit'

Gtk.init(null)

var w: WebKit.WebView = WebKit.WebView.new() as any
w.vfunc_map()

w.connect("notify::composite-child", (obj, pspec) => {
    
})

var s: Gtk.Widget = w
