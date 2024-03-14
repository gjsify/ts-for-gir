/// <reference path="./@types/gjs/gjs.d.ts" />
/// <reference path="./@types/gjs/dom.d.ts" />

// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2009 Red Hat, Inc.
// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/gio-cat.js

/*
 * Make sure you have a non english locale installed, for example fr_FR and run
 * LANGUAGE=fr_FR gjs gettext.js
 * the label should show a translation of 'Print help'
 */

import GLib from './@types/glib-2.0/glib-2.0';
import Gio from './@types/gio-2.0/gio-2.0';

const loop = GLib.MainLoop.new(null, false);
const textDecoder = new TextDecoder()

function cat(filename: string) {
    const file = Gio.file_new_for_path(filename);
    file.load_contents_async(null, (obj, res) => {
        let contents: Uint8Array;
        try {
            contents = obj.load_contents_finish(res)[1];
        } catch (e) {
            logError(e);
            loop.quit();
            return;
        }
        print(textDecoder.decode(contents));
        loop.quit();
    });

    loop.run();
}

if (ARGV.length !== 1)
    printerr('Usage: gio-cat.js filename');
else
    cat(ARGV[0]);
