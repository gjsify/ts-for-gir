import './@types/gjs/gjs'
import './@types/gjs/dom'

import gtk2 from './@types/gtk-2.0/index'
console.log(gtk2.__name__, gtk2.__version__)

import gtk22 from 'gi://Gtk?version=2.0'
console.log(gtk22.__name__, gtk22.__version__)


import gtk3 from './@types/gtk-3.0/index'
console.log(gtk3.__name__, gtk3.__version__)

import gtk32 from 'gi://Gtk?version=3.0'
console.log(gtk32.__name__, gtk32.__version__)


import gtk4 from './@types/gtk-4.0/index'
console.log(gtk4.__name__, gtk4.__version__)

import gtk42 from 'gi://Gtk?version=4.0'
console.log(gtk42.__name__, gtk42.__version__)