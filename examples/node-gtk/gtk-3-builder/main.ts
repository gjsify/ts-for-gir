import './global'
import gi from './@types/node-gtk.js'
import { performance } from 'perf_hooks'
import gladeFile from './builderExample.glade'

import Gtk from './@types/node-gtk-3.0.js'
// const Gtk = gi.require('Gtk', '3.0')

gi.startLoop()
Gtk.init(process.argv)

const builder = Gtk.Builder.newFromString(gladeFile, gladeFile.length)
const win = builder.getObject('mainWindow') as Gtk.Window | null

win.setDefaultSize(600, 400)
win.on('show', Gtk.main)
win.on('destroy', Gtk.mainQuit)

const closeButton = builder.getObject('closeButton') as Gtk.Button | null
if (!closeButton) {
    throw new Error('Builder object closeButton not found!')
}

const actionButton = builder.getObject('actionButton') as Gtk.Button | null
if (!actionButton) {
    throw new Error('Builder object actionButton not found!')
}

const label = builder.getObject('helloLabel') as Gtk.Label | null
if (!label) {
    throw new Error('Builder object helloLabel not found!')
}

closeButton.on('clicked', () => {
    win.close()
    console.log('window closed')
})

actionButton.on('clicked', () => {
    const start = performance.now()

    Promise.resolve().then(() => {
        console.log('event promise.then() called, ' + (performance.now() - start))
    })

    process.nextTick(() => {
        console.log('event nextTick() called, ' + (performance.now() - start))
    })
})

label.setText('Hello World!')

const action = function () {
    return new Promise((resolve) => {
        resolve('CHANGED')
        console.log('new Promise(...)  called')
    })
}

const start = performance.now()
action().then((res: string) => {
    console.log('promise.then() called, ' + (performance.now() - start))
    label.setText(res)
})

process.nextTick(() => {
    console.log('nextTick() called')
    Promise.resolve().then(() => console.log('inner promise.then() called'))
})

win.showAll()
