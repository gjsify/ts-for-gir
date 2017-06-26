import * as Gtk    from '../../out/Gtk'
import * as WebKit from '../../out/WebKit'

Gtk.init(null)

let wnd = new Gtk.Window({ title: 'Browser Test', default_width: 400, default_height: 300 })
let box = new Gtk.Box({ valign: Gtk.Align.FILL, halign: Gtk.Align.FILL })
let scroll = new Gtk.ScrolledWindow({ valign: Gtk.Align.FILL, halign: Gtk.Align.FILL })
let webview = new WebKit.WebView({ valign: Gtk.Align.FILL, halign: Gtk.Align.FILL })

webview.load_uri("http://www.google.com")
scroll.add(webview)
box.add(scroll)
wnd.add(box)
wnd.show_all()

wnd.connect("delete-event", (obj, event) => {
    Gtk.main_quit()
    return true
})

Gtk.main()

