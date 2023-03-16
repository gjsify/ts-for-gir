#!/usr/bin/env gjs -m
// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2017 Andy Holmes <andrew.g.r.holmes@gmail.com>
// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/gtk-application.js

// Include this in case both GTK3 and GTK4 installed, otherwise an exception
// will be thrown
imports.gi.versions.Gtk = '3.0';

// See the note about Application.run() at the bottom of the script
const System = imports.system;

const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const GObject = imports.gi.GObject;
const Gtk = imports.gi.Gtk;

// An example GtkApplication with a few bells and whistles, see also:
//     https://wiki.gnome.org/HowDoI/GtkApplication
var ExampleApplication = GObject.registerClass({
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

    exampleprop = '';

    constructor() {
        super({
            application_id: 'org.gnome.gjs.ExampleApplication',
            flags: Gio.ApplicationFlags.FLAGS_NONE,
        });
    }

    // Example signal emission
    emitExamplesig(number: number) {
        this.emit('examplesig', number);
    }

    vfunc_startup() {
        print('called vfunc_startup');
        super.vfunc_startup();

        // An example GAction, see: https://wiki.gnome.org/HowDoI/GAction
        let exampleAction = new Gio.SimpleAction({
            name: 'exampleAction',
            parameter_type: new GLib.VariantType('s'),
        });

        exampleAction.connect('activate', (action, param) => {
            const paramStr = param?.deepUnpack<string>().toString();

            if (paramStr === 'exampleParameter')
                log('Yes!');
        });

        this.add_action(exampleAction);
    }

    vfunc_activate() {
        print('called vfunc_activate');
        super.vfunc_activate();

        this.hold();

        // Example ApplicationWindow
        let win = new Gtk.ApplicationWindow({
            application: this,
            title: 'Example Application Window',
            default_width: 300,
            default_height: 200,
        });

        let label = new Gtk.Label({label: this.exampleprop});
        win.add(label);

        win.connect('delete-event', () => {
            this.quit();
        });

        win.show_all();

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

