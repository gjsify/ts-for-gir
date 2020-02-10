import * as gi from 'node-gtk'

const Gtk = gi.require('Gtk', '3.0')
const Pango = gi.require('Pango', '1.0')
const WebKit = gi.require('WebKit2', '4.0')

function makeButton(label: string, callback: () => void): Gtk.Button {
    const but = new Gtk.Button({ label: label })
    but.getChild()?.modifyFont(Pango.FontDescription.fromString('sans bold 16'))
    but.on('clicked', () => {
        callback()
    })
    return but
}

Gtk.init(null)

const wnd = new Gtk.Window()
// TODO const wnd = new Gtk.Window({ title: 'Browser Test', defaultWidth: 800, defaultHeight: 600 })
wnd.setDefaultSize(800, 600)
wnd.setTitle('Browser Test')
const webview = new WebKit.WebView({})
const scrolledWindow = new Gtk.ScrolledWindow({})
const box = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL } as any) // TODO
const entry = new Gtk.Entry({ text: 'about:none', halign: Gtk.Align.FILL })
const spinner = new Gtk.Spinner({})

const hbox = new Gtk.Box({ orientation: Gtk.Orientation.HORIZONTAL } as any) // TODO
hbox.packStart(
    makeButton('⇦', () => {
        webview.goBack()
    }),
    false,
    false,
    5,
)
hbox.packStart(
    makeButton('⇨', () => {
        webview.goForward()
    }),
    false,
    false,
    5,
)
hbox.packStart(
    makeButton('↻', () => {
        webview.reload()
    }),
    false,
    false,
    5,
)
hbox.packStart(entry, true, true, 5)
hbox.packStart(spinner, false, false, 5)

wnd.on('delete-event', () => {
    Gtk.mainQuit()
})
entry.on('activate', () => {
    let uri = entry.text
    if (!(uri.startsWith('http://') || uri.startsWith('https://') || uri.startsWith('ftp://'))) uri = 'http://' + uri
    webview.loadUri(uri)
})
webview.on('notify::uri', () => {
    entry.text = webview.uri
})
webview.on('notify::is-loading', () => {
    spinner.active = (webview as any).isLoading() // TODO
})

scrolledWindow.add((webview as unknown) as Gtk.Widget) // TODO
box.packStart(hbox, false, true, 0)
box.packStart(scrolledWindow, true, true, 0)
wnd.add(box)
wnd.showAll()

webview.loadUri('http://www.google.com')

Gtk.main()
