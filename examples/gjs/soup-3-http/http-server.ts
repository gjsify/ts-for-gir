// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2010 litl, LLC
// Copyright 2022 Pascal Garber <pascal@artandcode.studio>

// This is a simple example of a HTTP server in GJS using libsoup 3
// https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/http-server.js

import GLib from 'gi://GLib?version=2.0';
import Soup from 'gi://Soup?version=3.0';

// GJS version of GLib.HashTable
// TODO fix in ts-for-gir
interface GjsHashTable {
    [key: symbol | string | number]: string | number | boolean;
}

const loop = GLib.MainLoop.new(null, false);
const byteArray = imports.byteArray;

const handler: Soup.ServerCallback = (server, msg, path, query) => {
    if(!msg) {
        throw new Error("msg is null");
    }

    msg.set_status(200, null);

    const body = byteArray.fromString(`
        <html>
        <body>
            Greetings, visitor from ${msg.get_remote_host()}</br>
            What is your name?
            <form action="/hello">
                <input name="myname">
            </form>
        </body>
        </html>
    `);

    msg.set_response('text/html; charset=utf-8', Soup.MemoryUse.COPY, body)
}

const helloHandler: Soup.ServerCallback = (server, msg, path, query) => {
    if(!msg) {
        throw new Error("msg is null");
    }

    if (!query) {
        msg.set_redirect(302, '/');
        return;
    }

    msg.set_status(200, null);

    print("query", JSON.stringify(query))

    const body = byteArray.fromString(`
        <html>
        <body>
            Hello, ${(query as GjsHashTable).myname}! ☺<br>
            <a href="/">Go back</a>
        </body>
        </html>
    `);
    
    msg.set_response('text/html; charset=utf-8', Soup.MemoryUse.COPY, body)
}

function main() {
    let server = new Soup.Server({});
    server.add_handler('/', handler);
    server.add_handler('/hello', helloHandler);
    server.listen_local(1080, Soup.ServerListenOptions.IPV4_ONLY);
    print("Visit http://localhost:1080")
    loop.run();
}

main();
