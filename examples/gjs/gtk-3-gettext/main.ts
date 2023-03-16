// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2009 Red Hat, Inc.
// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/gettext.js

/*
 * Make sure you have a non english locale installed, for example fr_FR and run
 * LANGUAGE=fr_FR gjs gettext.js
 * the label should show a translation of 'Print help'
 */
import Gtk from 'gi://Gtk?version=3.0';
const { gettext } = imports;

gettext.bindtextdomain('gnome-shell', '/usr/share/locale');
gettext.textdomain('gnome-shell');

Gtk.init(null);

const w = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
w.resize(250, 250);
w.add(new Gtk.Label({label: gettext.gettext('Print help')}));
w.show_all();

Gtk.main();