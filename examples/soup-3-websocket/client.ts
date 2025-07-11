#!/usr/bin/env gjs -m

// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2019 Sonny Piers <sonny@fastmail.net>

// This is an example of a WebSocket client in Gjs using libsoup
// https://libsoup.org/libsoup-3.0/index.html

// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/websocket-client.js

import type Gio from "gi://Gio?version=2.0";
import GLib from "gi://GLib?version=2.0";
import Soup from "gi://Soup?version=3.0";

const loop = GLib.MainLoop.new(null, false);
const textDecoder = new TextDecoder();

const session = new Soup.Session();
const message = new Soup.Message({
	method: "GET",
	uri: GLib.Uri.parse("wss://echo.websocket.org", GLib.UriFlags.NONE),
});

session.websocket_connect_async(message, "origin", [], 1, null, websocket_connect_async_callback);

function websocket_connect_async_callback(_session: Soup.Session | null, res: Gio.AsyncResult) {
	let connection: Soup.WebsocketConnection;

	try {
		connection = session.websocket_connect_finish(res);
	} catch (e) {
		logError(e);
		loop.quit();
		return;
	}

	connection.connect("closed", () => {
		log("closed");
		loop.quit();
	});

	connection.connect("error", (_self, err) => {
		logError(err);
		loop.quit();
	});

	connection.connect("message", (_self, type, data) => {
		if (type !== Soup.WebsocketDataType.TEXT) return;

		const str = textDecoder.decode(data.toArray());
		log(`message: ${str}`);
		connection.close(Soup.WebsocketCloseCode.NORMAL, null);
	});

	log("open");
	connection.send_text("hello");
}

loop.run();
