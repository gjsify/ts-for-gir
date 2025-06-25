/// <reference types="@girs/gjs" />
/// <reference types="@girs/gjs/dom" />

// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2009 Red Hat, Inc.
// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/gio-cat.js

/*
 * Make sure you have a non english locale installed, for example fr_FR and run
 * LANGUAGE=fr_FR gjs gettext.js
 * the label should show a translation of 'Print help'
 */

import "@girs/gjs";
import "@girs/gjs/dom";
import Gio from "@girs/gio-2.0";
import GLib from "@girs/glib-2.0";

const loop = GLib.MainLoop.new(null, false);
const textDecoder = new TextDecoder();

function cat(filename: string) {
	const file = Gio.file_new_for_path(filename);

	file.load_contents_async(null, (obj, res) => {
		let contents: Uint8Array;
		try {
			contents = obj?.load_contents_finish(res)?.[1];
		} catch (e) {
			logError(e);
			loop.quit();
			return;
		}
		print(textDecoder.decode(contents));
		loop.quit();
	});

	// Tests instanceof, see https://github.com/gjsify/ts-for-gir/issues/195
	if (!(file instanceof Gio.File)) {
		throw new Error("file is not an instance of Gio.File");
	}

	loop.run();
}

if (ARGV.length !== 1) printerr("Usage: gio-cat.js filename");
else cat(ARGV[0]);
