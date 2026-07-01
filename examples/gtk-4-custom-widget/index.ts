// This example is based on https://github.com/romgrk/node-gtk/blob/master/examples/gtk-4-custom-widget.js

import Gdk from "gi://Gdk?version=4.0";
import GLib from "gi://GLib?version=2.0";
import GObject from "gi://GObject?version=2.0";
import Graphene from "gi://Graphene?version=1.0";
import Gtk from "gi://Gtk?version=4.0";

Gtk.init();

/* Define our custom widget */
class CustomWidget extends Gtk.Widget {
  static {
    GObject.registerClass(
      {
        GTypeName: "CustomWidget",
      },
      CustomWidget,
    );
  }

  customMethod() {
    console.log("Hello from CustomWidget.customMethod");
  }

  vfunc_measure(orientation: Gtk.Orientation, _forSize: number) {
    const [minWidth, natWidth] = [100, 200];
    const [minHeight, natHeight] = [20, 40];
    const isHorizontal = orientation === Gtk.Orientation.HORIZONTAL;

    const minimum = isHorizontal ? minWidth : minHeight;
    const natural = isHorizontal ? natWidth : natHeight;
    const minimumBaseline = !isHorizontal ? minWidth : minHeight;
    const naturalBaseline = !isHorizontal ? natWidth : natHeight;

    return [minimum, natural, minimumBaseline, naturalBaseline] as [number, number, number, number];
  }

  vfunc_snapshot(snapshot: Gtk.Snapshot) {
    const width = this.get_allocated_width();
    const color = new Gdk.RGBA();
    color.parse("red");
    const rect = new Graphene.Rect().init(10, 10, width / 2, 10);
    snapshot.append_color(color, rect);
  }
}

/* Setup & start the application */

const loop = GLib.MainLoop.new(null, false);
const app = new Gtk.Application({
  applicationId: "com.github.jumplink.gjs.demo",
  flags: 0,
});
app.connect("activate", onActivate);
const status = app.run([]);

console.log("Finished with status:", status);

/* Event handlers */

function onActivate() {
  const window = new Gtk.ApplicationWindow({ application: app });
  window.set_title("Window");
  window.set_default_size(200, 200);
  window.connect("close-request", onQuit);

  const custom = new CustomWidget();

  // Exercises GJS-only Builder constructor props (`data`, `callbacks`, `objects`)
  // that are typed via the gtk-4.0 template — the `data` source is loaded with
  // `add_from_string`, `<signal handler="...">` is resolved against `callbacks`,
  // and `objects` registers existing widgets for `<object id="..." constructor="">`.
  const builder = new Gtk.Builder({
    data: getUI(),
    callbacks: {
      on_action_clicked: () => {
        console.log("clicked");
        custom.customMethod();
      },
      on_close_clicked: () => window.close(),
    },
    objects: { custom },
  });

  // Demonstrates the `exposeObjects` GJS-only convenience method (registers each
  // entry by name so the UI XML can reference it via `<object constructor="...">`).
  builder.exposeObjects({ window });

  const root = builder.get_object("root") as Gtk.Box;
  root.append(custom);
  custom.show();

  if (root) window.set_child(root);
  window.present();

  loop.run();
}

function onQuit() {
  loop.quit();
  app.quit();
  return false;
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
            <signal name="clicked" handler="on_action_clicked"/>
          </object>
        </child>
        <child>
          <object class="GtkButton" id="closeButton">
            <property name="label" translatable="yes">Close</property>
            <property name="receives_default">1</property>
            <signal name="clicked" handler="on_close_clicked"/>
          </object>
        </child>
      </object>
    </interface>
  `;
}
