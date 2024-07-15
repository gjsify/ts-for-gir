import './@types/gjs/gjs'
import './@types/gjs/dom'

import gtk2 from './@types/gtk-2.0/gtk-2.0'

console.log(gtk2.__name__, gtk2.__version__)


import gtk3 from './@types/gtk-3.0/gtk-3.0'
console.log(gtk3.__name__, gtk3.__version__)


import gtk4 from './@types/gtk-4.0/gtk-4.0'
console.log(gtk4.__name__, gtk4.__version__)