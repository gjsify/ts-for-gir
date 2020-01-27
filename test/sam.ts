import * as Gtk from '../@types/Gjs/Gtk-3.0'
import * as WebKit from '../@types/Gjs/WebKit2-4.0'
import { giCast } from '../@types/Gjs/cast'

Gtk.init(null)

const w: WebKit.WebView = WebKit.WebView.new()
if (w.vfunc_map) w.vfunc_map()

w.connect('notify::composite-child', (/*obj, pspec*/) => {
    //
})

export const s: Gtk.Widget = giCast<Gtk.Widget>(w, Gtk.Widget)
