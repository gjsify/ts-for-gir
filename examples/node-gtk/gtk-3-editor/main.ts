
import gi from './@types/node-gtk'
import * as Gtk from './@types/node-gtk-3.0'
import * as GtkSource from './@types/node-gtksource-3.0'

// const Gtk = gi.require('Gtk', '3.0')
// const GtkSource = gi.require('GtkSource')

gi.startLoop()
Gtk.init(null)

const wnd = new Gtk.Window({ title: 'Editor Test' })
wnd.defaultHeight = 400
wnd.defaultWidth = 600
const box = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL })
const notebook = new Gtk.Notebook()
const srcView = new GtkSource.View()

srcView.autoIndent = true
srcView.showLineNumbers = true
srcView.monospace = true

const buf = srcView.getBuffer() as GtkSource.Buffer
const lang = GtkSource.LanguageManager.getDefault().getLanguage('js')
buf.setLanguage(lang)

notebook.add(srcView)

box.packStart(notebook, true, true, 0)
wnd.add(box)
wnd.showAll()

wnd.connect('delete-event', () => {
    Gtk.mainQuit()
    return true
})

console.log('hello world')

Gtk.main()
