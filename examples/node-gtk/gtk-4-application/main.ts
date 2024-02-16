// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/gtk-application.js

import gi from 'node-gtk';
import GLib from './@types/node-glib-2.0.js';
import Gtk from './@types/node-gtk-4.0.js';

const printHello = () => console.log('Hello')

const loop = GLib.MainLoop.new(null, false)
const app = new Gtk.Application('com.github.romgrk.node-gtk.demo', 0)
app.on('activate', onActivate)
const status = app.run([])

console.log('Finished with status:', status)

function onActivate() {
  const window = new Gtk.ApplicationWindow(app)
  window.setTitle('Window')
  window.setDefaultSize(200, 200)
  window.on('close-request', onQuit)

  const ui = `
    <?xml version="1.0" encoding="UTF-8"?>
    <interface>
      <requires lib="gtk" version="4.0"/>
      <object class="GtkBox" id="root">
        <property name="orientation">vertical</property>
        <child>
          <object class="GtkLabel" id="helloLabel">
            <property name="vexpand">1</property>
            <property name="label">Hello World!</property>
          </object>
        </child>
        <child>
          <object class="GtkButton" id="actionButton">
            <property name="label" translatable="yes">Action</property>
            <property name="receives_default">1</property>
          </object>
        </child>
        <child>
          <object class="GtkButton" id="closeButton">
            <property name="label" translatable="yes">Close</property>
            <property name="receives_default">1</property>
          </object>
        </child>
      </object>
    </interface>
  `

  const builder = Gtk.Builder.newFromString(ui, ui.length)
  const root = builder.getObject('root') as Gtk.Box;

  const actionButton = builder.getObject('actionButton')
  actionButton?.on('clicked', printHello)

  const closeButton = builder.getObject('closeButton')
  closeButton?.on('clicked', () => window.close())

  window.setChild(root)
  window.show()
  window.present()

  gi.startLoop()
  loop.run()
}

function onQuit() {
  loop.quit()
  app.quit()
  return false
}