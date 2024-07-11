#!/usr/bin/env gjs -m
// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2021 Andy Holmes <andyholmes@gnome.org>
// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/gtk4-template.js

import '@girs/gjs';
import '@girs/gjs/dom';

import GObject from '@girs/gobject-2.0';
import GLib from '@girs/glib-2.0';
import Gtk from '@girs/gtk-4.0';
import Gdk from '@girs/gdk-4.0'

import Template from './gtk4-template.ui?raw';
import Style from './gtk4-template.css?inline';

Gtk.init();

const ExampleWindow = GObject.registerClass({
    GTypeName: 'ExampleWindow',
    Template: Template,
    Children: [
        'box',
    ],
    InternalChildren: [
        'button',
    ],
}, class ExampleWindow extends Gtk.Window {

    box: Gtk.Box | null = null;
    _button: Gtk.Button | null = null;

    constructor() {
        super();

        this.onStartup = this.onStartup.bind(this)

        // The template has been initialized and you can access the children
        if (this.box) this.box.visible = true;

        // Internal children are set on the instance prefixed with a `_`
        if (this._button) this._button.visible = true;

        // this.connect('startup', this.onStartup)
        this.initStyles()
    }

    // The signal handler bound in the UI file
    _onButtonClicked(button: Gtk.Button) {
        if (this instanceof Gtk.Window)
            log('Callback scope is bound to `ExampleWindow`');

        button.label = 'Button was clicked!';
    }

    protected onStartup(): void {
        this.initStyles()
    }

    /** Load the stylesheet in a CssProvider and add it to the Gtk.StyleContext */
    protected initStyles() {
        const provider = new Gtk.CssProvider();
        console.log("Style", Style)
        provider.load_from_string(Style)
        const display = Gdk.Display.get_default()

        if (!display) {
            console.error('No display found')
            return
        }

        Gtk.StyleContext.add_provider_for_display(
            display,
            provider,
            Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
        );
    }
});


// Create a window that stops the program when it is closed
const loop = GLib.MainLoop.new(null, false);

const win = new ExampleWindow();
win.connect('close-request', () => loop.quit());
win.present();

loop.run();

