// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/gtk-application.js

// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2017 Andy Holmes <andrew.g.r.holmes@gmail.com>

import '@girs/gjs';
import '@girs/gjs/ambient';
import '@girs/gio-2.0';
import '@girs/glib-2.0';
import '@girs/gtk-4.0';

// See the note about Application.run() at the bottom of the script
import System from 'system';
import Gio from 'gi://Gio?version=2.0';
import GLib from 'gi://GLib?version=2.0';
import GObject from 'gi://GObject?version=2.0';
// Include the version in case both GTK3 and GTK4 installed
// otherwise an exception will be thrown
import Gtk from 'gi://Gtk?version=4.0';

// An example GtkApplication with a few bells and whistles, see also:
//     https://wiki.gnome.org/HowDoI/GtkApplication
let ExampleApplication = GObject.registerClass({
    Properties: {
        'exampleprop': GObject.ParamSpec.string(
            'exampleprop',                      // property name
            'ExampleProperty',                  // nickname
            'An example read write property',   // description
            GObject.ParamFlags.READWRITE,       // read/write/construct...
            'a default value'
        ),
    },
    Signals: {'examplesig': {param_types: [GObject.TYPE_INT]}},
}, class ExampleApplication extends Gtk.Application {
    constructor() {
        super({
            applicationId: 'org.gnome.gjs.ExampleApplication',
            flags: Gio.ApplicationFlags.FLAGS_NONE,
        });
    }

    exampleprop: string = 'a default value';

    // Example signal emission
    emitExamplesig(number: number): void {
        this.emit('examplesig', number);
    }

    vfunc_startup() {
        super.vfunc_startup();

        // An example GAction, see: https://wiki.gnome.org/HowDoI/GAction
        let exampleAction = new Gio.SimpleAction({
            name: 'exampleAction',
            parameterType: new GLib.VariantType('s'),
        });

        exampleAction.connect('activate', (action, param) => {
            const paramStr = param?.deepUnpack()?.toString() ?? '';

            if (paramStr === 'exampleParameter')
                log('Yes!');
        });

        this.add_action(exampleAction);
    }

    vfunc_activate() {
        super.vfunc_activate();

        this.hold();

        // Example ApplicationWindow
        let window = new Gtk.ApplicationWindow({
            application: this,
            title: 'Example Application Window',
            defaultWidth: 300,
            defaultHeight: 200,
        });

        let label = new Gtk.Label({label: this.exampleprop});
        window.set_child(label);

        window.connect('close-request', () => {
            this.quit();
        });

        window.present();

        // Example GNotification, see: https://developer.gnome.org/GNotification/
        let notif = new Gio.Notification();
        notif.set_title('Example Notification');
        notif.set_body('Example Body');
        notif.set_icon(
            new Gio.ThemedIcon({name: 'dialog-information-symbolic'})
        );

        // A default action for when the body of the notification is clicked
        notif.set_default_action("app.exampleAction('exampleParameter')");

        // A button for the notification
        notif.add_button(
            'Button Text',
            "app.exampleAction('exampleParameter')"
        );

        // This won't actually be shown, since an application needs a .desktop
        // file with a base name matching the application id
        this.send_notification('example-notification', notif);

        // Withdraw
        this.withdraw_notification('example-notification');
    }
});

// The proper way to run a Gtk.Application or Gio.Application is take ARGV and
// prepend the program name to it, and pass that to run()
let app = new ExampleApplication();
app.run([System.programInvocationName].concat(ARGV));

// Or a one-liner...
// (new ExampleApplication()).run([System.programInvocationName].concat(ARGV));

