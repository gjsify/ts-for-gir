#!/usr/bin/env gjs -m
// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2008 litl, LLC
// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/gtk.js

import imports from './@types/gjs.js';

// Include this in case both GTK3 and GTK4 installed, otherwise an exception
// will be thrown
imports.gi.versions.Gtk = '3.0';
const Gtk = imports.gi.Gtk;

// Initialize Gtk before you start calling anything from the import
Gtk.init(null);

// Construct a top-level window
let win = new Gtk.Window({
    type: Gtk.WindowType.TOPLEVEL,
    title: 'A default title',
    default_width: 300,
    default_height: 250,
    // A decent example of how constants are mapped:
    //     'Gtk' and 'WindowPosition' from the enum name GtkWindowPosition,
    //     'CENTER' from the enum's constant GTK_WIN_POS_CENTER
    window_position: Gtk.WindowPosition.CENTER,
});

// Object properties can also be set or changed after construction, unless they
// are marked construct-only.
win.title = 'Hello World!';

// This is a callback function
function onDeleteEvent() {
    log('delete-event emitted');
    // If you return false in the "delete_event" signal handler, Gtk will emit
    // the "destroy" signal.
    //
    // Returning true gives you a chance to pop up 'are you sure you want to
    // quit?' type dialogs.
    return false;
}

// When the window is given the "delete_event" signal (this is given by the
// window manager, usually by the "close" option, or on the titlebar), we ask
// it to call the onDeleteEvent() function as defined above.
win.connect('delete-event', onDeleteEvent);

// GJS will warn when calling a C function with unexpected arguments...
//
//     window.connect("destroy", Gtk.main_quit);
//
// ...so use arrow functions for inline callbacks with arguments to adjust
win.connect('destroy', () => {
    Gtk.main_quit();
});

// Create a button to close the window
let button = new Gtk.Button({
    label: 'Close the Window',
    // Set visible to 'true' if you don't want to call button.show() later
    visible: true,
    // Another example of constant mapping:
    //     'Gtk' and 'Align' are taken from the GtkAlign enum,
    //     'CENTER' from the constant GTK_ALIGN_CENTER
    valign: Gtk.Align.CENTER,
    halign: Gtk.Align.CENTER,
});

// Connect to the 'clicked' signal, using another way to call an arrow function
button.connect('clicked', () => win.destroy());

// Add the button to the window
win.add(button);

// Show the window
win.show();

// All gtk applications must have a Gtk.main(). Control will end here and wait
// for an event to occur (like a key press or mouse event). The main loop will
// run until Gtk.main_quit is called.
Gtk.main();
