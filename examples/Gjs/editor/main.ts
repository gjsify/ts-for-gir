import './@types/Gjs/index'
import * as Gtk from './@types/Gjs/Gtk-3.0'
import * as GtkSource from './@types/Gjs/GtkSource-3.0'
import { giCast } from './@types/Gjs/cast'

Gtk.init(null)

const wnd = new Gtk.Window({ title: 'Editor Test', default_width: 600, default_height: 400 })
const box = Gtk.Box.new(Gtk.Orientation.VERTICAL, 0)
const notebook = new Gtk.Notebook({})
const srcView = new GtkSource.View()

srcView.auto_indent = true
srcView.show_line_numbers = true
srcView.monospace = true

// Unfortunately the "buffer" property is not GtkSource.Buffer so we need to downcast
// it. giCast gives us a type-check at runtime.
const buf = giCast<GtkSource.Buffer>(srcView.buffer, GtkSource.Buffer)
const lang = GtkSource.LanguageManager.get_default().get_language('js')
print('lang', lang)
buf.set_language(lang)

notebook.add(srcView)

box.pack_start(notebook, true, true, 0)
wnd.add(box)
wnd.show_all()

wnd.connect('delete-event', () => {
    Gtk.main_quit()
    return true
})

print('hello world')
import { gettext } from './@types/Gjs/Gjs'
const locale = gettext.setlocale(gettext.LocaleCategory.ALL, null)
print('locale', locale)

Gtk.main()
