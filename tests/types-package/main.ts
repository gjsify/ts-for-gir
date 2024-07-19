import './@types/gjs.d.ts'
import './@types/dom.d.ts'
import './@types/gtk-2.0.d.ts'
import './@types/gtk-3.0.d.ts'
import './@types/gtk-4.0.d.ts'

import Gettext from 'gettext'
console.log(Gettext.textdomain)

import System from 'system'
console.log(System.programPath, System.programArgs)

import glib2 from 'gi://GLib?version=2.0'
console.log(glib2.__name__, glib2.__version__)

import gtk2 from 'gi://Gtk?version=2.0'
console.log(gtk2.__name__, gtk2.__version__)

import gtk3 from 'gi://Gtk?version=3.0'
console.log(gtk3.__name__, gtk3.__version__)

import gtk4 from 'gi://Gtk?version=4.0'
console.log(gtk4.__name__, gtk4.__version__)

