// This example is based on https://github.com/romgrk/node-gtk/blob/master/examples/gtk-4-custom-widget.js

import GObject from 'gi://GObject?version=2.0';
import GLib from 'gi://GLib?version=2.0';
import Gtk from 'gi://Gtk?version=4.0';
import Gdk from 'gi://Gdk?version=4.0';
import Graphene from 'gi://Graphene?version=1.0';

Gtk.init();

/* Define our custom widget */

class ICustomWidget extends Gtk.Widget {
  customMethod() {
    console.log("Hello from CustomWidget.customMethod")
  }

  vfunc_measure(orientation: Gtk.Orientation, forSize: number) {
    const [minWidth, natWidth] = [100, 200]
    const [minHeight, natHeight] = [20, 40]
    const isHorizontal = orientation === Gtk.Orientation.HORIZONTAL

    const minimum         =  isHorizontal ? minWidth : minHeight
    const natural         =  isHorizontal ? natWidth : natHeight
    const minimumBaseline = !isHorizontal ? minWidth : minHeight
    const naturalBaseline = !isHorizontal ? natWidth : natHeight

    return [minimum, natural, minimumBaseline, naturalBaseline] as [number, number, number, number]
  }

  vfunc_snapshot(snapshot: Gtk.Snapshot) {
    const width = this.get_allocated_width()
    const color = new Gdk.RGBA()
    color.parse('red');
    const rect = new Graphene.Rect().init(10, 10, width / 2, 10)
    snapshot.append_color(color, rect)
  }
}

const CustomWidget = GObject.registerClass({
  GTypeName: 'CustomWidget',
}, ICustomWidget );



/* Setup & start the application */

const loop = GLib.MainLoop.new(null, false)
const app = new Gtk.Application({
  application_id: 'com.github.jumplink.gjs.demo',
  flags: 0
})
app.connect('activate', onActivate)
const status = app.run([])

console.log('Finished with status:', status)

/* Event handlers */

function onActivate() {
  const window = new Gtk.ApplicationWindow(app)
  window.set_title('Window')
  window.set_default_size(200, 200)
  window.connect('close-request', onQuit)

  const ui = getUI()
  const builder = Gtk.Builder.new_from_string(ui, ui.length)
  const root = builder.get_object('root') as Gtk.Box
  const custom = new CustomWidget()
  root.append(custom)
  custom.show();

  const actionButton = builder.get_object('actionButton') as Gtk.Button
  actionButton?.connect('clicked', () => {
    console.log('clicked')
    custom.customMethod()
  })

  const closeButton = builder.get_object('closeButton') as Gtk.Button
  closeButton?.connect('clicked', () => window.close())

  if(root) window.set_child(root)
  window.present()

  loop.run()
}

function onQuit() {
  loop.quit()
  app.quit()
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
