// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2009 Red Hat, Inc.
// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/gio-cat.js

/*
 * Make sure you have a non english locale installed, for example fr_FR and run
 * LANGUAGE=fr_FR gjs gettext.js
 * the label should show a translation of 'Print help'
 */

import gi from "@gir/node-gtk";
import Gio from "@gir/gio-2.0";

function cat(filename: string) {
    const file = Gio.fileNewForPath(filename);

    // @ts-ignore
    file.__proto__= Gio.File.prototype
    
    const [success, contents] = file.loadContents(null);
    if (!success) {
        console.error("Failed to read file", filename);
        process.exit(1);
    }

    console.debug("contents", contents);

    console.log(Buffer.from(contents).toString());
    process.exit(0);
}

if (process.argv.length !== 3)
    console.error('Usage: node gio-cat.js filename', process.argv);
else {
    gi.startLoop()
    cat(process.argv[2]);
}
