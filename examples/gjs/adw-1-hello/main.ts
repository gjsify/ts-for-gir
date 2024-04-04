/**
 * GJS example showing how to build javascript applications using Libadwaita Application.
 * @see https://gitlab.gnome.org/GNOME/libadwaita/-/blob/main/examples/hello-world/hello.c
 */

import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import Gtk from 'gi://Gtk';
import Adw from 'gi://Adw';

const loop = GLib.MainLoop.new(null, false)

const app = new Adw.Application({
    applicationId: 'com.github.jumplink.gjs.adw-1-hello',
    flags: Gio.ApplicationFlags.FLAGS_NONE
});

const onQuit = () => {
    loop.quit()
    app.quit()
}

const onActivate = (app: Adw.Application) => {
    // Should support both camelCase and default property names, see https://github.com/gjsify/ts-for-gir/issues/138
    const label = new Gtk.Label({
        label: "Hello World",
        marginBottom: 11,
        marginTop: 11,
    })

    label.marginTop = 12
    label.marginBottom = 12

    log(`label.marginTop: ${label.marginTop}`)
    log(`label.marginBottom: ${label.marginBottom}`)

    const window = new Gtk.ApplicationWindow({ application: app })
    window.set_title('Hello')
    window.set_default_size(200, 200)

    window.connect('close-request', onQuit)

    window.set_child(label)
    window.present()
}

app.connect('activate', onActivate)
app.run([imports.system.programInvocationName].concat(ARGV));
loop.run()