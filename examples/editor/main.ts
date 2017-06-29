import * as Gtk from '../../out/Gtk';
import * as GtkSource from '../../out/GtkSource'

Gtk.init(null)

let wnd = new Gtk.Window({ title: "Editor Test", default_width: 600, default_height: 400 })
let box = Gtk.Box.new(Gtk.Orientation.VERTICAL, 0)
let notebook = new Gtk.Notebook({})
let srcView = new GtkSource.View({})

srcView.auto_indent = true
srcView.show_line_numbers = true
srcView.monospace = true

// Downcasting requires the "as any" below, meaning we lose all type safety :(
let buf: GtkSource.Buffer = srcView.buffer as any
let lang = GtkSource.LanguageManager.get_default().get_language("js")
buf.set_language(lang)

notebook.add(srcView)

box.pack_start(notebook, true, true, 0)
wnd.add(box)
wnd.show_all()

wnd.connect("delete-event", (obj, event) => { Gtk.main_quit(); return true })

//print("hello world")
//import { gettext } from '../../out/Gjs'
//let locale = gettext.setlocale(gettext.LocaleCategory.ALL, null);

Gtk.main()