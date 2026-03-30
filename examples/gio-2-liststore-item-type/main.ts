/// <reference types="@girs/gjs" />

// Validates fix for https://github.com/gjsify/ts-for-gir/issues/192
// GType parameters should accept class constructors with $gtype property.

import "@girs/gjs";
import Gio from "@girs/gio-2.0";
import GObject from "@girs/gobject-2.0";

// Custom GObject class registered with GObject.registerClass
class MyItem extends GObject.Object {
	static {
		GObject.registerClass({ GTypeName: "MyItem" }, MyItem);
	}
}

// Issue #192: Passing a class constructor to a GType parameter.
// Previously this would fail with:
//   Property '__type__' is missing in type 'typeof MyItem' but required in type 'GType'.
const store = new Gio.ListStore({ item_type: MyItem });

// Also validate passing $gtype directly (should still work)
new Gio.ListStore({ item_type: MyItem.$gtype });

// Also validate using GObject.TYPE_* constants (should still work)
new Gio.ListStore({ item_type: GObject.TYPE_OBJECT });

// Runtime validation
const item = new MyItem();
store.append(item);

if (store.get_n_items() !== 1) {
	throw new Error(`Expected 1 item, got ${store.get_n_items()}`);
}

print(`ListStore created with ${store.get_n_items()} item(s) - GTypeInput validation passed`);
