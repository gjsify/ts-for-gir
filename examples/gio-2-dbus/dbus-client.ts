// This example is based on the original GJS example: https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/dbus-client.js
// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2020 Andy Holmes <andrew.g.r.holmes@gmail.com>

import Gio from "gi://Gio?version=2.0";
import GLib from "gi://GLib?version=2.0";
import { type DbusIfaceXml, dbusIfaceXml } from "./dbus-ifrace-xml.ts";

// Pass the XML string to make a re-usable proxy class for an interface proxies.
const TestProxy = Gio.DBusProxy.makeProxyWrapper<DbusIfaceXml>(dbusIfaceXml);

let proxy: (DbusIfaceXml & Gio.DBusProxy) | null = null;
let proxySignalId = 0;
let proxyPropId = 0;

// Watching a name on DBus. Another option is to create a proxy with the
// `Gio.DBusProxyFlags.DO_NOT_AUTO_START` flag and watch the `g-name-owner`
// property.
function onNameAppeared(_connection: Gio.DBusConnection, name: string, _owner: unknown) {
	print(`"${name}" appeared on the session bus`);

	// If creating a proxy synchronously, errors will be thrown as normal
	try {
		proxy = TestProxy(Gio.DBus.session, "org.gnome.gjs.Test", "/org/gnome/gjs/Test");
	} catch (e) {
		logError(e);
		return;
	}

	// Proxy wrapper signals use the special functions `connectSignal()` and
	// `disconnectSignal()` to avoid conflicting with regular GObject signals.
	proxySignalId = proxy.connectSignal("TestSignal", (_proxy_, _name_, args) => {
		print(`TestSignal: ${args[0]}, ${args[1]}`);
		return true;
	});

	// To watch property changes, you can connect to the `g-properties-changed`
	// GObject signal with `connect()`
	proxyPropId = proxy.connect(
		"g-properties-changed",
		(_proxy_: Gio.DBusProxy, changed: GLib.Variant<"a{sv}">, invalidated) => {
			// Test both approaches:
			// 1. New automatic type inference (with advanced variants)
			const changedAuto = changed.deepUnpack();
			print(`Type inferred automatically: ${typeof changedAuto}`);

			// 2. Old explicit type parameter approach (for backward compatibility)
			const changedExplicit = changed.deepUnpack<{ [key: string]: GLib.Variant }>();

			// Both should work the same way
			for (const [prop, value] of Object.entries(changedExplicit))
				print(`Property '${prop}' changed to '${value.deepUnpack()}'`);

			for (const prop of invalidated) print(`Property '${prop}' invalidated`);
		},
	);

	// Reading and writing properties is straight-forward
	print(`ReadOnlyProperty: ${proxy.ReadOnlyProperty}`);

	print(`ReadWriteProperty: ${proxy.ReadWriteProperty}`);

	proxy.ReadWriteProperty = !proxy.ReadWriteProperty;
	print(`ReadWriteProperty: ${proxy.ReadWriteProperty}`);

	// Both synchronous and asynchronous functions will be generated
	try {
		const value = proxy.SimpleMethodSync();

		print(`SimpleMethod: ${value}`);
	} catch (e: unknown) {
		logError(`SimpleMethod: ${e instanceof Error || e instanceof GLib.Error ? e.message : "Unknown error"}`);
	}

	proxy.ComplexMethodRemote("input string", (value, error, fdList) => {
		// If @error is not `null`, then an error occurred
		if (error !== null) {
			logError(error);
			return;
		}

		print(`ComplexMethod value: ${value}`);

		// Methods that return file descriptors are fairly rare, so you should
		// know to expect one or not.
		if (fdList !== null) {
			//
		}
	});

	proxy.SimpleMethodRemote((value, error, fdList) => {
		// If @error is not `null`, then an error occurred
		if (error !== null) {
			logError(error);
			return;
		}

		print(`SimpleMethod value: "${value}"`);

		// Methods that return file descriptors are fairly rare, so you should
		// know to expect one or not.
		if (fdList !== null) {
			//
		}
	});
}

function onNameVanished(_connection: Gio.DBusConnection, name: string) {
	print(`"${name}" vanished from the session bus`);

	if (proxy !== null) {
		proxy.disconnectSignal(proxySignalId);
		proxy.disconnect(proxyPropId);
		proxy = null;
	}
}

print("Start DBus client");
const busWatchId = Gio.bus_watch_name(
	Gio.BusType.SESSION,
	"org.gnome.gjs.Test",
	Gio.BusNameWatcherFlags.NONE,
	onNameAppeared,
	onNameVanished,
);

// Start an event loop
const loop = GLib.MainLoop.new(null, false);
loop.run();

// Unwatching names works just like disconnecting signal handlers.
Gio.bus_unown_name(busWatchId);
