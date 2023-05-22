import Gtk from 'gi://Gtk?version=3.0';
import Pango from 'gi://Pango?version=1.0'
import WebKit2 from 'gi://WebKit2?version=4.0'

function makeButton(label: string, callback: () => void) {
    const but = new Gtk.Button()
    but.set_label(label)
    but.get_child()?.modify_font(Pango.FontDescription.from_string('sans bold 16'))
    but.connect('clicked', () => {
        callback()
    })
    return but
}

Gtk.init(null)

const wnd = new Gtk.Window({})
wnd.set_title('Browser Test')
wnd.set_default_size(800, 600)
const webview = new WebKit2.WebView()
const scrolledWindow = new Gtk.ScrolledWindow()
const box = Gtk.Box.new(Gtk.Orientation.VERTICAL, 0)
const entry = new Gtk.Entry()
entry.set_text('about:none')
entry.set_alignment(Gtk.Align.FILL)
const spinner = new Gtk.Spinner()

const hbox = new Gtk.Box({orientation: Gtk.Orientation.HORIZONTAL, spacing: 0})
hbox.pack_start(
    makeButton('⇦', () => {
        webview.go_back()
    }),
    false,
    false,
    5,
)
hbox.pack_start(
    makeButton('⇨', () => {
        webview.go_forward()
    }),
    false,
    false,
    5,
)
hbox.pack_start(
    makeButton('↻', () => {
        webview.reload()
    }),
    false,
    false,
    5,
)
hbox.pack_start(entry, true, true, 5)
hbox.pack_start(spinner, false, false, 5)

wnd.connect('delete-event', () => {
    Gtk.main_quit()
    return true
})
entry.connect('activate', (self) => {
    let uri = self.text
    if (uri && !(uri.startsWith('http://') || uri.startsWith('https://') || uri.startsWith('ftp://'))) uri = 'http://' + uri
    webview.load_uri(uri)
})
webview.connect('notify::uri', () => {
    entry.text = webview.uri
})
webview.connect('notify::is-loading', () => {
    spinner.active = webview.is_loading
})

scrolledWindow.add(webview)
box.pack_start(hbox, false, true, 0)
box.pack_start(scrolledWindow, true, true, 0)
wnd.add(box)
wnd.show_all()

webview.load_uri('https://duckduckgo.com/')

Gtk.main()
