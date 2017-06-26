import * as Gtk    from '../../out/Gtk'
import * as WebKit from '../../out/WebKit'

Gtk.init(null)

let wnd = new Gtk.Window({ title: 'Browser Test', default_width: 400, default_height: 300 })
let box = new Gtk.Box({ })
let scroll = new Gtk.ScrolledWindow({ })
let webview = new WebKit.WebView({  })

webview.load_uri("http://www.google.com")
scroll.add(webview)
box.pack_start(scroll, true, true, 0)
wnd.add(box)
wnd.show_all()

wnd.connect("delete-event", (obj, event) => {
    Gtk.main_quit()
    return true
})

Gtk.main()

