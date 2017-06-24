import * as GLib from './GLib'
import * as Gio from './Gio'
import * as Atk from './Atk'
import * as Gtk from './Gtk'
import * as Soup from './Soup'
import * as GtkSource from './GtkSource'
import * as WebKit from './WebKit'

Gtk.init(null)

var w = WebKit.WebView.new()
w.vfunc_map()

w.connect("notify::composite-child", (obj, pspec) => {
    
})
