import './@types/Gjs/index'
import * as Gtk from './@types/Gjs/Gtk-3.0'

Gtk.init(null)

const settings = Gtk.Settings.get_default()
if (!settings) {
    throw new Error('Can\t load default settings!')
}

settings.gtk_application_prefer_dark_theme = true
settings.gtk_theme_name = 'Adwaita'

print(settings.gtk_enable_accels)

const win = new Gtk.Window()
win.set_title('gjs-gtk')
win.set_position(Gtk.WindowPosition.CENTER)
win.set_default_size(200, 80)

win.connect('show', () => {
    Gtk.main()
})
win.connect('destroy', () => {
    Gtk.main_quit()
    return true
})

win.add(new Gtk.Label({ label: 'Hello Gtk+' }))
win.show_all()