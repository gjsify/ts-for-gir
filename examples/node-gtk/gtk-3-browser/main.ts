import { inspect } from 'util'

import { Gtk } from './@types/node-gtk-3.0'
import { Pango } from './@types/node-pango-1.0'
import { WebKit2 } from './@types/node-webkit2-4.0'

// import gi from 'node-gtk';
// const Gtk = gi.require('Gtk', '3.0')
// const Pango = gi.require('Pango', '1.0')
// const WebKit2 = gi.require('WebKit2', '4.0')

function makeButton(label: string, callback: () => void) {
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
const webview = new WebKit2.WebView({})
const scrolledWindow = new Gtk.ScrolledWindow({})
const box = Gtk.Box.new(Gtk.Orientation.VERTICAL, 0)
const entry = new Gtk.Entry({ text: 'about:none', halign: Gtk.Align.FILL })
const spinner = new Gtk.Spinner({});

const hbox = Gtk.Box.new(Gtk.Orientation.HORIZONTAL, 0)
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
    return false
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

// TODO what is the name if the `is-loading` property?
console.log('webview', inspect(webview.isLoading))

scrolledWindow.add(webview as Gtk.Widget)
box.packStart(hbox, false, true, 0)
box.packStart(scrolledWindow, true, true, 0)
wnd.add(box)
wnd.showAll()

webview.loadUri('https://duckduckgo.com/')

Gtk.main()
