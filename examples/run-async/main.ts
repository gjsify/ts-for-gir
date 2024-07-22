// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2009 Red Hat, Inc.
// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/gio-cat.js

import Gio from "gi://Gio";

const gioApp = new Gio.Application();
gioApp.runAsync(ARGV).then((exitStatus: number) => {
  log(`Exited with status: ${exitStatus}`);
}).catch((error: unknown) => {
  logError(error);
});

setTimeout(() => {
  gioApp.quit();
}, 1000);