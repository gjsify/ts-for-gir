// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2019 Sonny Piers <sonny@fastmail.net>
// Copyright 2022 Pascal Garber <pascal@artandcode.studio>

// This is a simple example of a HTTP client in GJS using libsoup 3
// https://developer.gnome.org/libsoup/stable/libsoup-client-howto.html
// https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/http-client.js

import "@girs/gjs";
import "@girs/gjs/dom";
import "@girs/soup-3.0";

import type Gio from "gi://Gio?version=2.0";
import GLib from "gi://GLib?version=2.0";
import Soup from "gi://Soup?version=3.0";

const loop = GLib.MainLoop.new(null, false);
const textDecoder = new TextDecoder();

const session = new Soup.Session();
const message = new Soup.Message({
	method: "GET",
	uri: GLib.Uri.parse("http://localhost:1080/hello?myname=node-gtk", GLib.UriFlags.NONE),
});

const readBytesAsyncCallback: Gio.AsyncReadyCallback = (inputStream, res) => {
	let data: GLib.Bytes | null = null;

	try {
		data = (inputStream as Gio.InputStream).read_bytes_finish(res);
		if (!data) {
			throw new Error("data is null");
		}
	} catch (e) {
		logError(e);
		loop.quit();
		return;
	}

	log(`body:\n${textDecoder.decode(data.toArray())}`);

	loop.quit();
};

const send_async_callback: Gio.AsyncReadyCallback = (_self, res) => {
	let inputStream: Gio.InputStream | null = null;

	try {
		inputStream = session.send_finish(res);
		if (!inputStream) {
			throw new Error("inputStream is null");
		}
	} catch (e) {
		logError(e);
		loop.quit();
		return;
	}

	log(`status: ${message.statusCode} - ${message.reasonPhrase}`);
	message.responseHeaders.foreach((name, value) => {
		log(`${name}: ${value}`);
	});

	inputStream.read_bytes_async(message.responseHeaders.get_content_length(), 0, null, readBytesAsyncCallback);
};

session.send_async(message, 0, null, send_async_callback);

loop.run();
