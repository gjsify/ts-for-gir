// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2009 Red Hat, Inc.
// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/gio-cat.js

/*
 * Make sure you have a non english locale installed, for example fr_FR and run
 * LANGUAGE=fr_FR gjs gettext.js
 * the label should show a translation of 'Print help'
 */

import '@girs/gjs';
import '@girs/gjs/dom';
import '@girs/gio-2.0';
import '@girs/gtk-4.0';
import '@girs/adw-1';

// import Adw from "gi://Adw";
// import GLib from "gi://GLib";
import Gio from "gi://Gio";
// import Gtk from "gi://Gtk?version=4.0";

// const mainLoop = new GLib.MainLoop(null, false);
// mainLoop.runAsync().then(() => {
//   log(`Exited main loop`);
// }).catch((error) => {
//   logError(error);
// });

const gioApp = new Gio.Application();
gioApp.runAsync(ARGV).then((exitStatus: number) => {
  log(`Exited with status: ${exitStatus}`);
}).catch((error) => {
  logError(error);
});

// const gtkApp = new Gtk.Application();
// gtkApp.runAsync(ARGV).then((exitStatus: number) => {
//   log(`Exited with status: ${exitStatus}`);
// }).catch((error) => {
//   logError(error);
// });

// const adwApp = new Adw.Application();
// adwApp.runAsync(ARGV).then((exitStatus: number) => {
//   log(`Exited with status: ${exitStatus}`);
// }).catch((error) => {
//   logError(error);
// });

setTimeout(() => {
  // mainLoop.quit();
  gioApp.quit();
  // gtkApp.quit();
  // adwApp.quit();
}, 1000);