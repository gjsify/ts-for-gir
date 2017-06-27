import * as Gtk from '../../out/Gtk';
import { FontDescription } from '../../out/Pango';
import * as WebKit from '../../out/WebKit';

function makeBackButton(label: string) {
    let but = new Gtk.Button({ label: label })
    but.get_child().modify_font(FontDescription.from_string('sans bold 16'))
    return but
}

Gtk.init(null)

let wnd = new Gtk.Window({ title: 'Browser Test', default_width: 400, default_height: 300 })
let box = Gtk.Box.new(Gtk.Orientation.VERTICAL, 0)

let hbox = Gtk.Box.new(Gtk.Orientation.HORIZONTAL, 0)
hbox.pack_start(makeBackButton('⇦'), false, false, 5)
hbox.pack_start(makeBackButton('⇨'), false, false, 5)
hbox.pack_start(makeBackButton('↻'), false, false, 5)
hbox.pack_start(new Gtk.Entry({ text: 'http://fds', halign: Gtk.Align.FILL }), true, true, 5)

let scroll = new Gtk.ScrolledWindow({ })
let webview = new WebKit.WebView({  })

webview.load_uri("http://www.google.com")
scroll.add(webview)
box.pack_start(hbox, false, true, 0)
box.pack_start(scroll, true, true, 0)
wnd.add(box)
wnd.show_all()

wnd.connect("delete-event", (obj, event) => {
    Gtk.main_quit()
    return true
})

Gtk.main()

