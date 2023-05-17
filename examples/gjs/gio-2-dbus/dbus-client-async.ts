// This example is based on the original GJS example: https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/dbus-client.js
// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2020 Andy Holmes <andrew.g.r.holmes@gmail.com>

import GLib from 'gi://GLib?version=2.0';
import Gio from 'gi://Gio?version=2.0';
import { DbusIfaceXml, dbusIfaceXml } from './dbus-ifrace-xml.js'

// Pass the XML string to make a re-usable proxy class for an interface proxies.
const TestProxy = Gio.DBusProxy.makeProxyWrapper<DbusIfaceXml>(dbusIfaceXml);

let proxy: (DbusIfaceXml & Gio.DBusProxy) | null = null;

/* Asynchronous Usage
 *
 * Below is the alternative, asynchronous usage of proxy wrappers. If creating
 * a proxy asynchronously, you should not consider the proxy ready to use until
 * the callback is invoked without error.
 */
TestProxy(
    Gio.DBus.session,
    'org.gnome.gjs.Test',
    '/org/gnome/gjs/Test',
    (sourceObj, error) => {
        // If @error is not `null` it will be an Error object indicating the
        // failure. @proxy will be `null` in this case.
        if (error !== null) {
            logError(error);
            return;
        }

        print("sourceObj", sourceObj);
        print("error", error);

        // At this point the proxy is initialized and you can start calling
        // functions, using properties and so on.
        proxy = sourceObj;
        print(`ReadOnlyProperty: ${proxy?.ReadOnlyProperty}`);
    },
    // Optional Gio.Cancellable object. Pass `null` if you need to pass flags.
    null,
    // Optional flags passed to the Gio.DBusProxy constructor
    Gio.DBusProxyFlags.NONE
);

print("Start DBus client (async)");

// Start an event loop
let loop = GLib.MainLoop.new(null, false);
loop.run();