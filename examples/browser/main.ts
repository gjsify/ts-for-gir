import * as Gtk from '../../out/Gtk';
import { FontDescription } from '../../out/Pango';
import * as WebKit from '../../out/WebKit';

function makeButton(label: string, callback) {
    let but = new Gtk.Button({ label: label })
    const child = but.get_child()
    if(!child) throw new Error('Gtk.Button child is undefined')
    child.modify_font(FontDescription.from_string('sans bold 16'))
    but.connect("clicked", (obj) => { callback() })
    return but
}

Gtk.init(null)

let wnd = new Gtk.Window({ title: 'Browser Test', default_width: 400, default_height: 300 })
let webview = new WebKit.WebView({  })
let scroll = new Gtk.ScrolledWindow({ })
let box = Gtk.Box.new(Gtk.Orientation.VERTICAL, 0)
let entry = new Gtk.Entry({ text: 'about:none', halign: Gtk.Align.FILL })
let spinner = new Gtk.Spinner({})

let hbox = Gtk.Box.new(Gtk.Orientation.HORIZONTAL, 0)
hbox.pack_start(makeButton('⇦', () => { webview.go_back() }), false, false, 5)
hbox.pack_start(makeButton('⇨', () => { webview.go_forward() }), false, false, 5)
hbox.pack_start(makeButton('↻', () => { webview.reload() }), false, false, 5)
hbox.pack_start(entry, true, true, 5)
hbox.pack_start(spinner, false, false, 5)

wnd.connect("delete-event", (obj, event) => { Gtk.main_quit(); return true })
entry.connect("activate", (self) => {
    let uri = self.text
    if (!(uri.startsWith("http://") || uri.startsWith("https://") ||
          uri.startsWith("ftp://")))
        uri = "http://" + uri
    webview.load_uri(uri) 
})
webview.connect("notify::uri", (obj, pspec) => { entry.text = webview.uri })
webview.connect("notify::load-status", (obj, pspec) => {
     switch (webview.load_status) {
         case WebKit.LoadStatus.PROVISIONAL:
            spinner.active = true
            break
        case WebKit.LoadStatus.FINISHED:
            spinner.active = false
            break
     }
})

scroll.add(webview)
box.pack_start(hbox, false, true, 0)
box.pack_start(scroll, true, true, 0)
wnd.add(box)
wnd.show_all()

webview.load_uri("http://www.google.com")


Gtk.main()

