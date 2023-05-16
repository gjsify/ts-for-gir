// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2009 Red Hat, Inc.
// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/gio-cat.js

/*
 * Make sure you have a non english locale installed, for example fr_FR and run
 * LANGUAGE=fr_FR gjs gettext.js
 * the label should show a translation of 'Print help'
 */

import '@girs/gjs';
import '@girs/gio-2.0';

import Gio from "gi://Gio?version=2.0";

const ByteArray = imports.byteArray;

Gio._promisify(Gio.File.prototype, 'load_contents_async', 'load_contents_finish');

async function cat(filename: string) {
    const file = Gio.file_new_for_path(filename);

    const [contents] = await file.load_contents_async(null);
    print(ByteArray.toString(contents));
}

if (ARGV.length !== 1)
    printerr('Usage: gio-cat.js filename');
else {
    await cat(ARGV[0]);
}