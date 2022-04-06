// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2019 Sonny Piers <sonny@fastmail.net>
// Copyright 2022 Pascal Garber <pascal@artandcode.studio>

// This is a simple example of a HTTP client in Gjs using libsoup 3
// https://developer.gnome.org/libsoup/stable/libsoup-client-howto.html

import './@types/Gjs/index.js';
import GLib from './@types/Gjs/GLib-2.0.js';
import Soup from './@types/Gjs/Soup-3.0.js';
import Gio from './@types/Gjs/Gio-2.0.js';

const loop = GLib.MainLoop.new(null, false);
const byteArray = imports.byteArray;

const session = new Soup.Session();
const message = new Soup.Message({
    method: 'GET',
    uri: GLib.Uri.parse('http://localhost:1080/hello?myname=gjs', GLib.UriFlags.NONE) ,
});

const read_bytes_async_callback: Gio.AsyncReadyCallback = (inputStream, res) => {
    let data;

    try {
        data = (inputStream as Gio.InputStream).read_bytes_finish(res);
    } catch (e) {
        logError(e);
        loop.quit();
        return;
    }

    log(`body:\n${byteArray.toString(byteArray.fromGBytes(data))}`);

    loop.quit();
}

const send_async_callback: Gio.AsyncReadyCallback = (self, res) => {
    let inputStream;

    try {
        inputStream = session.send_finish(res);
    } catch (e) {
        logError(e);
        loop.quit();
        return;
    }

    log(`status: ${message.status_code} - ${message.reason_phrase}`);
    message.response_headers.foreach((name, value) => {
        log(`${name}: ${value}`);
    });

    inputStream.read_bytes_async(message.response_headers.get_content_length(), 0, null, read_bytes_async_callback);
}

session.send_async(message, 0, null, send_async_callback);

loop.run();
