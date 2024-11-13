/**
 * IMPORTANT NOTE:
 * This is a demonstration of St.Widget with Layout Manager Generics for GNOME Shell Extensions.
 * St (Shell Toolkit) can only be used within GNOME Shell Extensions and cannot be run as a standalone application.
 * 
 * This example shows how to use the generic types in your extension code.
 * To test this, you would need to integrate it into a proper GNOME Shell Extension.
 */

import Clutter from 'gi://Clutter';
import St from 'gi://St';
import GObject from 'gi://GObject';
import GLib from 'gi://GLib';

// Define a custom widget class with GridLayout
const GridLayoutWidget = GObject.registerClass(
    class GridLayoutWidget extends St.Widget<Clutter.GridLayout> {
        constructor() {
            super({
                layout_manager: new Clutter.GridLayout()
            });

            // Create and add labels in a grid pattern
            const labels = [
                'Top Left', 'Top Right',
                'Bottom Left', 'Bottom Right'
            ];

            labels.forEach((text, index) => {
                const label = new St.Label({ text });
                this.layout_manager.attach(
                    label,
                    index % 2,  // column
                    Math.floor(index / 2),  // row
                    1, 1
                );
            });
        }
    }
);

// Main loop
const loop = new GLib.MainLoop(null, false);

// Create main window
const stage = new Clutter.Stage({
    width: 300,
    height: 200,
});

// Add our widget
const widget = new GridLayoutWidget();
stage.add_child(widget);

// Center the widget
widget.set_position(
    stage.width / 2 - widget.width / 2,
    stage.height / 2 - widget.height / 2
);

// Connect signals
stage.connect('destroy', () => loop.quit());
stage.show();

// Start the main loop
loop.run(); 