#!/usr/bin/env node
// Based on https://github.com/romgrk/node-gtk/blob/master/examples/hello-gtk.js

import gi from './@types/node-gtk.js'
import * as Gtk from './@types/node-gtk-3.0.js'

gi.startLoop()
Gtk.init(process.argv)

const settings = Gtk.Settings.getDefault()
settings.gtkApplicationPreferDarkTheme = true
settings.gtkThemeName = 'Adwaita'

console.log(settings.gtkEnableAccels)

const win = new Gtk.Window()
win.setTitle('node-gtk')
win.setPosition(Gtk.WindowPosition.CENTER)
win.setDefaultSize(200, 80)

win.on('show', Gtk.main)
win.on('destroy', Gtk.mainQuit)

win.add(new Gtk.Label({ label: 'Hello Gtk+' }))
win.showAll()
