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

export class GridLayoutWidget extends St.Widget<Clutter.GridLayout> {
    static {
        GObject.registerClass({
            GTypeName: 'GridLayoutWidget',
        }, this);
    }

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

/**
 * Example usage in your extension:
 * 
 * class Extension {
 *     enable() {
 *         this._widget = new GridLayoutWidget();
 *         Main.uiGroup.add_child(this._widget);
 *     }
 * 
 *     disable() {
 *         this._widget.destroy();
 *         this._widget = null;
 *     }
 * }
 */