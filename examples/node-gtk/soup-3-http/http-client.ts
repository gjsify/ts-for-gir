// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2019 Sonny Piers <sonny@fastmail.net>
// Copyright 2022 Pascal Garber <pascal@artandcode.studio>

// This is a simple example of a HTTP client in Gjs using libsoup 3
// https://developer.gnome.org/libsoup/stable/libsoup-client-howto.html
// https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/http-client.js

import './@types/node-gtk.js';
import GLib from './@types/node-glib-2.0.js';
import Soup from './@types/node-soup-3.0.js';
import Gio from './@types/node-gio-2.0.js';

const loop = GLib.MainLoop.new(null, false);

const gBytesToString = (data: GLib.Bytes) => {
    return Buffer.from(data.getData() || []).toString()
}

const session = new Soup.Session();
const message = new Soup.Message({
    method: 'GET',
    uri: GLib.Uri.parse('http://localhost:1080/hello?myname=gjs', GLib.UriFlags.NONE),
});

const readBytesAsyncCallback: Gio.AsyncReadyCallback = (inputStream, res) => {
    let data;

    try {
        data = (inputStream as Gio.InputStream).readBytesFinish(res);
    } catch (e) {
        console.error(e);
        loop.quit();
        return;
    }

    console.log(`body:\n${gBytesToString(data)}`);

    loop.quit();
}

const send_async_callback: Gio.AsyncReadyCallback = (self, res) => {
    let inputStream;

    try {
        inputStream = session.sendFinish(res);
    } catch (e) {
        console.error(e);
        loop.quit();
        return;
    }

    console.log(`status: ${message.statusCode} - ${message.reasonPhrase}`);
    message.responseHeaders.foreach((name, value) => {
        console.log(`${name}: ${value}`);
    });

    inputStream.readBytesAsync(message.responseHeaders.getContentLength(), 0, null, readBytesAsyncCallback);
}

session.sendAsync(message, 0, null, send_async_callback);

loop.run()
