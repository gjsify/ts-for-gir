#!/usr/bin/env gjs -m
// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2021 Andy Holmes <andyholmes@gnome.org>
// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/gtk3-template.js

import "@girs/gjs";
import "@girs/gtk-3.0";

import Gio from "gi://Gio?version=2.0";
import GObject from "gi://GObject?version=2.0";
import Gtk from "gi://Gtk?version=3.0";

Gtk.init(null);

/* In this example the template contents are loaded from the file as a string.
 *
 * The `Template` property of the class definition will accept:
 *   - a `Uint8Array` or `GLib.Bytes` of XML
 *   - an absolute file URI, such as `file:///home/user/window.ui`
 *   - a GResource URI, such as `resource:///org/gnome/AppName/window.ui`
 */
const file = Gio.File.new_for_path("gtk3-template.ui");
const [, Template] = file.load_contents(null);

class ExampleWindow extends Gtk.Window {
	public declare box: Gtk.Box | null;
	protected declare _button: Gtk.Button | null;

	static {
		GObject.registerClass(
			{
				GTypeName: "ExampleWindow",
				Template,
				Children: ["box"],
				InternalChildren: ["button"],
			},
			ExampleWindow,
		);
	}

	constructor(params: Partial<Gtk.Window.ConstructorProps> = {}) {
		super(params);

		// The template has been initialized and you can access the children
		if (this.box) this.box.visible = true;

		// Internal children are set on the instance prefixed with a `_`
		if (this._button) this._button.visible = true;
	}

	// The signal handler bound in the UI file
	_onButtonClicked(button: Gtk.Button) {
		if (this instanceof Gtk.Window) log("Callback scope is bound to `ExampleWindow`");

		button.label = "Button was clicked!";
	}
}

// Create a window that stops the program when it is closed
const win = new ExampleWindow();
win.connect("destroy", () => Gtk.main_quit());
win.present();

Gtk.main();
