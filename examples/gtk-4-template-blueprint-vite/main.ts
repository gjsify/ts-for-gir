#!/usr/bin/env gjs -m

// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2021 Andy Holmes <andyholmes@gnome.org>
// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/gtk4-template.js

import Gdk from "gi://Gdk?version=4.0";
import GLib from "gi://GLib?version=2.0";
import GObject from "gi://GObject?version=2.0";
import Gtk from "gi://Gtk?version=4.0";
import Template from "./gtk4-template.blp";
import Style from "./gtk4-template.css?inline";

Gtk.init();

/* The child names of a template, named once and shared with the type declarations below.
 *
 * GJS only ever READS `Children` / `InternalChildren` -- `registerClass` stores the array on the
 * class and iterates it when the template is bound -- so `MetaInfo` types them as
 * `readonly string[]`. A tool that emits a typed export for a `.blp` template produces exactly
 * this shape, so it is written here as the `as const` list a generator would hand over.
 */
const CHILD_NAMES = ["box"] as const;
const INTERNAL_CHILD_NAMES = ["button"] as const;

class ExampleWindow extends Gtk.Window {
	public declare box: Gtk.Box | null;
	protected declare _button: Gtk.Button | null;

	static {
		GObject.registerClass(
			{
				GTypeName: "ExampleWindow",
				Template,
				Children: CHILD_NAMES,
				InternalChildren: INTERNAL_CHILD_NAMES,
			},
			ExampleWindow,
		);
	}

	constructor() {
		super();

		// The template has been initialized and you can access the children
		if (this.box) this.box.visible = true;

		// Internal children are set on the instance prefixed with a `_`
		if (this._button) this._button.visible = true;

		this.initStyles();
	}

	// The signal handler bound in the UI file
	_onButtonClicked(button: Gtk.Button) {
		if (this instanceof Gtk.Window) log("Callback scope is bound to `ExampleWindow`");

		button.label = "Button was clicked!";
	}

	/** Load the stylesheet in a CssProvider and add it to the Gtk.StyleContext */
	protected initStyles() {
		const provider = new Gtk.CssProvider();
		console.log("Style", Style);
		provider.load_from_string(Style);
		const display = Gdk.Display.get_default();

		if (!display) {
			console.error("No display found");
			return;
		}

		Gtk.StyleContext.add_provider_for_display(display, provider, Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION);
	}
}

// Create a window that stops the program when it is closed
const loop = GLib.MainLoop.new(null, false);

const win = new ExampleWindow();
win.connect("close-request", () => loop.quit());
win.present();

loop.run();
