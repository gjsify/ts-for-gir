/**
 * SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
 * SPDX-FileCopyrightText: 2020 Andy Holmes <andrew.g.r.holmes@gmail.com>
 * @source https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/glistmodel.js
 * 
 * This file is currently not used in this example and just for and is just another example and helpful to test the generated types
 */

import GObject from './@types/Gjs/GObject-2.0.js';
import Gio from './@types/Gjs/Gio-2.0.js';

/**
 * An example of implementing the GListModel interface in GJS. The only real
 * requirement here is that the class be derived from some GObject.
 */
export class _GjsListStore extends GObject.Object /* TODO implements Gio.ListModel */ {

    _items: GObject.Object[] = [];

    _init() {
        super._init();

        /* We'll use a native Array as internal storage for the list model */
        this._items = [];
    }

    /* Implementing this function amounts to returning a GType. This could be a
     * more specific GType, but must be a subclass of GObject. */
    vfunc_get_item_type() {
        return GObject.Object.$gtype;
    }

    /* Implementing this function just requires returning the GObject at
     * @position or %null if out-of-range. This must explicitly return %null,
     * not `undefined`. */
    vfunc_get_item(position: number) {
        return this._items[position] || null;
    }

    /* Implementing this function is as simple as return the length of the
     * storage object, in this case an Array. */
    vfunc_get_n_items() {
        return this._items.length;
    }

    /**
     * Insert an item in the list. If @position is greater than the number of
     * items in the list or less than `0` it will be appended to the end of the
     * list.
     *
     * @param item - the item to add
     * @param position - the position to add the item
     */
    insertItem(item: GObject.Object, position: number) {
        if (!(item instanceof GObject.Object))
            throw new TypeError('not a GObject');

        if (position < 0 || position > this._items.length)
            position = this._items.length;

        this._items.splice(position, 0, item);
        (this as any).items_changed(position, 0, 1); // TODO
    }

    /**
     * Append an item to the list.
     *
     * @param item - the item to add
     */
    appendItem(item: GObject.Object) {
        if (!(item instanceof GObject.Object))
            throw new TypeError('not a GObject');

        let position = this._items.length;

        this._items.push(item);
        (this as any).items_changed(position, 0, 1);
    }

    /**
     * Prepend an item to the list.
     *
     * @param item - the item to add
     */
    prependItem(item: GObject.Object) {
        if (!(item instanceof GObject.Object))
            throw new TypeError('not a GObject');

        this._items.unshift(item);
        (this as any).items_changed(0, 0, 1);
    }

    /**
     * Remove @item from the list. If @item is not in the list, this function
     * does nothing.
     *
     * @param item - the item to remove
     */
    removeItem(item: GObject.Object) {
        if (!(item instanceof GObject.Object))
            throw new TypeError('not a GObject');

        let position = this._items.indexOf(item);

        if (position === -1)
            return;

        this._items.splice(position, 1);
        (this as any).items_changed(position, 1, 0);
    }

    /**
     * Remove the item at @position. If @position is outside the length of the
     * list, this function does nothing.
     *
     * @param position - the position of the item to remove
     */
    removePosition(position: number) {
        if (position < 0 || position >= this._items.length)
            return;

        this._items.splice(position, 1);
        (this as any).items_changed(position, 1, 0);
    }

    /**
     * Clear the list of all items.
     */
    clear() {
        let length = this._items.length;

        if (length === 0)
            return;

        this._items = [];
        (this as any).items_changed(0, length, 0);
    }
}

/**
 * An example of implementing the GListModel interface in GJS. The only real
 * requirement here is that the class be derived from some GObject.
 */
export const GjsListStore = GObject.registerClass({
    GTypeName: 'GjsListStore',
    Implements: [Gio.ListModel as any], // TODO
}, _GjsListStore);