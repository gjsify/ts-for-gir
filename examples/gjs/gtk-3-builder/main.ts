import './@types/gjs.js'
import gladeFile from './builderExample.glade'
import * as Gtk from './@types/gtk-3.0'

Gtk.init(null)

const builder = Gtk.Builder.new_from_string(gladeFile, gladeFile.length)
const win = builder.get_object('mainWindow') as Gtk.Window

win.set_default_size(600, 400)
win.connect('show', () => {
    Gtk.main()
})
win.connect('destroy', () => {
    Gtk.main_quit()
    return true
})

const closeButton = builder.get_object('closeButton')
if (!closeButton) {
    throw new Error('Builder object closeButton not found!')
}

const actionButton = builder.get_object('actionButton')
if (!actionButton) {
    throw new Error('Builder object actionButton not found!')
}

const label = builder.get_object('helloLabel') as Gtk.Label | null
if (!label) {
    throw new Error('Builder object helloLabel not found!')
}

closeButton.connect('clicked', () => {
    win.close()
    print('window closed')
})

actionButton.connect('clicked', () => {
    Promise.resolve().then(() => {
        print('event promise.then() called')
    })
})

label.set_text('Hello World!')

const action = function () {
    return new Promise((resolve) => {
        resolve('CHANGED')
        print('new Promise(...)  called')
    })
}

action().then((res) => {
    print('promise.then() called ')
    label.set_text(res as string)
})

win.show_all()
