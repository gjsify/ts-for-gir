// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2010 litl, LLC
// Copyright 2022 Pascal Garber <pascal@artandcode.studio>

// This is a simple example of a HTTP server in Gjs using libsoup 3
// https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/http-server.js

import './@types/node-gtk.js';
import GLib from './@types/node-glib-2.0.js';
import Soup from './@types/node-soup-3.0.js';

// GJS version of GLib.HashTable
// TODO fix in ts-for-gir
interface GjsHashTable {
    [key: symbol | string | number]: string | number | boolean;
}

const loop = GLib.MainLoop.new(null, false);

const handler: Soup.ServerCallback = (server, msg, path, query) => {
    msg.setStatus(200, null);

    const body = Buffer.from(`
        <html>
        <body>
            Greetings, visitor from ${msg.getRemoteHost()}</br>
            What is your name?
            <form action="/hello">
                <input name="myname">
            </form>
        </body>
        </html>
    `);

    msg.setResponse('text/html; charset=utf-8', Soup.MemoryUse.COPY, body)
}

const helloHandler: Soup.ServerCallback = (server, msg, path, query) => {
    if (!query) {
        msg.setRedirect(302, '/');
        return;
    }

    msg.setStatus(200, null);

    console.log("query", JSON.stringify(query))

    const body = Buffer.from(`
        <html>
        <body>
            Hello, ${(query as GjsHashTable).myname}! ☺<br>
            <a href="/">Go back</a>
        </body>
        </html>
    `);
    
    msg.setResponse('text/html; charset=utf-8', Soup.MemoryUse.COPY, body)
}

function main() {
    let server = new Soup.Server({});
    server.addHandler('/', handler);
    server.addHandler('/hello', helloHandler);
    server.listenLocal(1080, Soup.ServerListenOptions.IPV4_ONLY);
    console.log("Visit http://localhost:1080")
    loop.run();
}

main();
