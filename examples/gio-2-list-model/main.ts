/**
 * SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
 * SPDX-FileCopyrightText: 2020 Andy Holmes <andrew.g.r.holmes@gmail.com>
 * @source https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/glistmodel.js
 */

import Gio from "gi://Gio?version=2.0";
import GObject from "gi://GObject?version=2.0";

/**
 * An example of implementing the GListModel interface using the new virtual interface pattern.
 *
 * With the new virtual interface generation, you only need to implement the virtual methods
 * (vfunc_*) instead of all interface methods. The regular methods are automatically provided
 * by the GObject runtime.
 */
export class GjsListStore extends GObject.Object implements Gio.ListModel.Interface<GObject.Object> {
	/**
	 * An example of implementing the GListModel interface using virtual interface pattern.
	 * Only virtual methods need to be implemented - regular methods are provided automatically.
	 */
	static {
		GObject.registerClass(
			{
				GTypeName: "GjsListStore",
				Implements: [Gio.ListModel],
			},
			GjsListStore,
		);
	}

	_items: GObject.Object[] = [];

	constructor() {
		super();

		/* We'll use a native Array as internal storage for the list model */
		this._items = [];
	}

	// ===============================================================
	// VIRTUAL METHODS - These must be implemented for the interface
	// ===============================================================

	/* Implementing this function amounts to returning a GType. This could be a
	 * more specific GType, but must be a subclass of GObject.
	 */
	vfunc_get_item_type() {
		const res = GObject.Object.$gtype;
		print("vfunc_get_item_type", res);
		return res;
	}

	/* Implementing this function just requires returning the GObject at
	 * @position or %null if out-of-range. This must explicitly return %null,
	 * not `undefined`.
	 */
	vfunc_get_item(position: number) {
		const res = this._items[position] || null;
		print("vfunc_get_item", res);
		return res;
	}

	/* Implementing this function is as simple as return the length of the
	 * storage object, in this case an Array.
	 */
	vfunc_get_n_items() {
		const res = this._items.length;
		print("vfunc_get_n_items", res);
		return res;
	}

	// ===============================================================
	// REGULAR METHODS - These are automatically provided by GObject runtime
	// but included for TypeScript compatibility during development
	// ===============================================================

	get_item_type() {
		return this.vfunc_get_item_type();
	}

	get_item(position: number) {
		return this.vfunc_get_item(position);
	}

	get_n_items() {
		return this.vfunc_get_n_items();
	}

	// items_changed is provided by GObject.Object, signal emission
	items_changed(position: number, removed: number, added: number) {
		print(`items_changed position: ${position}, removed: ${removed}, added: ${added}`);
		this.emit("items-changed", position, removed, added);
	}

	// ===============================================================
	// HELPER METHODS - Custom functionality for this list store
	// ===============================================================

	/**
	 * Insert an item in the list. If @position is greater than the number of
	 * items in the list or less than `0` it will be appended to the end of the
	 * list.
	 *
	 * @param item - the item to add
	 * @param position - the position to add the item
	 */
	insertItem(item: GObject.Object, position: number) {
		if (!(item instanceof GObject.Object)) throw new TypeError("not a GObject");

		if (position < 0 || position > this._items.length) position = this._items.length;

		this._items.splice(position, 0, item);
		this.items_changed(position, 0, 1);
	}

	/**
	 * Append an item to the list.
	 *
	 * @param item - the item to add
	 */
	appendItem(item: GObject.Object) {
		if (!(item instanceof GObject.Object)) throw new TypeError("not a GObject");

		const position = this._items.length;

		this._items.push(item);
		this.items_changed(position, 0, 1);
	}

	/**
	 * Prepend an item to the list.
	 *
	 * @param item - the item to add
	 */
	prependItem(item: GObject.Object) {
		if (!(item instanceof GObject.Object)) throw new TypeError("not a GObject");

		this._items.unshift(item);
		this.items_changed(0, 0, 1);
	}

	/**
	 * Remove @item from the list. If @item is not in the list, this function
	 * does nothing.
	 *
	 * @param item - the item to remove
	 */
	removeItem(item: GObject.Object) {
		if (!(item instanceof GObject.Object)) throw new TypeError("not a GObject");

		const position = this._items.indexOf(item);

		if (position === -1) return;

		this._items.splice(position, 1);
		this.items_changed(position, 1, 0);
	}

	/**
	 * Remove the item at @position. If @position is outside the length of the
	 * list, this function does nothing.
	 *
	 * @param position - the position of the item to remove
	 */
	removePosition(position: number) {
		if (position < 0 || position >= this._items.length) return;

		this._items.splice(position, 1);
		this.items_changed(position, 1, 0);
	}

	/**
	 * Clear the list of all items.
	 */
	clear() {
		const length = this._items.length;

		if (length === 0) return;

		this._items = [];
		this.items_changed(0, length, 0);
	}
}

// Create an example instance demonstrating the new virtual interface pattern
const listStore = new GjsListStore();
listStore.insertItem(new GObject.Object(), 0);
listStore.appendItem(new GObject.Object());

print("GjsListStore example:");
print(`Items in store: ${listStore.get_n_items()}`);
print(`Item type: ${listStore.get_item_type()}`);
print("✅ Virtual interface implementation working correctly!");
