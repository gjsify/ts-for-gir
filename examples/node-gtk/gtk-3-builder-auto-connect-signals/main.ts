import './global'
import gi from './@types/node-gtk.js'
import gladeFile from './builder-auto-connect-signals.glade'
import * as Gtk from './@types/node-gtk-3.0.js'

gi.startLoop()
Gtk.init(process.argv)

const builder = Gtk.Builder.newFromString(gladeFile, gladeFile.length)
const win = builder.getObject('mainWindow') as Gtk.Window

win.setDefaultSize(600, 400)

const handlers = {
    onWindowShow: Gtk.main,
    onWindowDestroy: Gtk.mainQuit,
    onCloseBtnClicked: function () {
        win.close()
        console.log('window closed')
    },
    onActionBtnClicked: function () {
        console.log('button clicked')
    },
}

// Connect to signals that specified on glade file
builder.connectSignals(handlers)

const label = builder.getObject('helloLabel') as Gtk.Label
label.setText('Hello World!')

win.showAll()
