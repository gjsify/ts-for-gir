// This example is based on https://github.com/romgrk/node-gtk/blob/master/examples/gtk-4-custom-widget.js
// TODO? https://github.com/romgrk/node-gtk/issues/341

import gi from './@types/node-gtk.js';
import GLib from './@types/node-glib-2.0.js';
import Gtk from './@types/node-gtk-4.0.js';
import Gdk from './@types/node-gdk-4.0.js';
import Graphene from './@types/node-graphene-1.0.js';

Gtk.init()
console.log('Init Gtk DONE')

/* Define our custom widget */

class CustomWidget extends Gtk.Widget {
  customMethod() {
    console.log("Hello from CustomWidget.customMethod")
  }

  measure(orientation: Gtk.Orientation, forSize: number) {
    const [minWidth, natWidth] = [100, 200]
    const [minHeight, natHeight] = [20, 40]
    const isHorizontal = orientation === Gtk.Orientation.HORIZONTAL

    const minimum         =  isHorizontal ? minWidth : minHeight
    const natural         =  isHorizontal ? natWidth : natHeight
    const minimumBaseline = !isHorizontal ? minWidth : minHeight
    const naturalBaseline = !isHorizontal ? natWidth : natHeight

    return [minimum, natural, minimumBaseline, naturalBaseline] as [number, number, number, number]
  }

  snapshot(snapshot: Gtk.Snapshot) {
    const width = this.getAllocatedWidth()
    const color = Gdk.RGBA.create('red')
    const rect = Graphene.Rect.create(10, 10, width / 2, 10)
    snapshot.appendColor(color, rect)
  }
}

gi.registerClass(CustomWidget)
console.log('registerClass DONE')

/* Setup & start the application */

const loop = new GLib.MainLoop(null, false)
const app = new Gtk.Application('com.github.romgrk.node-gtk.demo', 0)
app.on('activate', onActivate)
const status = app.run([])

console.log('Finished with status:', status)

/* Event handlers */

function onActivate() {
  console.log('onActivate...')
  const window = new Gtk.ApplicationWindow(app)
  window.setTitle('Window')
  window.setDefaultSize(200, 200)
  window.on('close-request', onQuit)

  const ui = getUI()
  const builder = Gtk.Builder.newFromString(ui, ui.length)
  const root = builder.getObject('root') as Gtk.Box
  console.log('getObject root:', root)
  const custom = new CustomWidget()
  root.append(custom)

  const actionButton = builder.getObject('actionButton') as Gtk.Button
  actionButton?.on('clicked', () => {
    console.log('actionButton clicked...')
    custom.customMethod()
  })

  const closeButton = builder.getObject('closeButton') as Gtk.Button
  closeButton?.on('clicked', () => {
    console.log('closeButton clicked...')
    window.close()
  })

  window.setChild(root)
  window.present()

  console.log('startLoop...')
  gi.startLoop()
  loop.run()
  console.log('startLoop DONE')
}

function onQuit() {
  console.log('onQuit...')
  loop.quit()
  app.quit()
  console.log('onQuit DONE')
  return false
}

function getUI() {
  return `
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
}
