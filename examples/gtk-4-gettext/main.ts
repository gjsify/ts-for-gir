// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2009 Red Hat, Inc.
// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/gettext.js

/*
 * Make sure you have a non english locale installed, for example fr_FR and run
 * LANGUAGE=fr_FR gjs gettext.js
 * the label should show a translation of 'Print help'
 */

import Gtk from 'gi://Gtk?version=4.0';
import GLib from 'gi://GLib';
const { gettext } = imports;

imports.package.init({
  name: "ts-for-gir-example",
  version: "0.0.1",
  prefix: "@ts-for-gir-example",
  libdir: "/usr/lib",
});

pkg.initGettext();

gettext.bindtextdomain('gnome-shell', '/usr/share/locale');
gettext.textdomain('gnome-shell');

Gtk.init();

const w = new Gtk.Window({});
w.set_default_size(250, 250);
w.set_child(new Gtk.Label({label: gettext.gettext('Print help')}));
w.present();

// Simple test to check if the gettext function works
print(gettext.gettext('Print help') === _!('Print help'))

const loop = new GLib.MainLoop(null, false);
loop.run();