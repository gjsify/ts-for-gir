import Gdk from "gi://Gdk";
import Gio from "gi://Gio";
import GObject from "gi://GObject";

/**
 * Example demonstrating the new virtual interface functionality.
 *
 * With the new virtual interface generation, you can implement GObject interfaces
 * by only implementing the virtual methods (vfunc_*) instead of all methods.
 */

/**
 * Custom list model implementation using the new virtual interface approach.
 *
 * Before: Had to implement ALL methods of Gio.ListModel
 * Now: Only need to implement the virtual methods in Gio.ListModel.Interface
 */
class CustomListModel extends GObject.Object implements Gio.ListModel.Interface<GObject.Object> {
	private items: GObject.Object[] = [];

	// Regular methods are automatically provided by GObject runtime
	// but we add them for TypeScript compatibility during development
	declare get_item: Gio.ListModel["get_item"];
	declare get_item_type: Gio.ListModel["get_item_type"];
	declare get_n_items: Gio.ListModel["get_n_items"];

	static {
		GObject.registerClass(
			{
				GTypeName: "CustomListModel",
				Implements: [Gio.ListModel],
			},
			CustomListModel,
		);
	}

	constructor() {
		super();

		// Add some test items
		this.items = [new GObject.Object(), new GObject.Object(), new GObject.Object()];
	}

	// ONLY virtual methods need to be implemented!
	vfunc_get_item(this: this & Gio.ListModel, position: number): GObject.Object | null {
		if (position < 0 || position >= this.items.length) {
			return null;
		}
		return this.items[position];
	}

	vfunc_get_item_type(this: this & Gio.ListModel): GObject.GType {
		return GObject.Object.$gtype;
	}

	vfunc_get_n_items(this: this & Gio.ListModel): number {
		return this.items.length;
	}

	// items_changed is provided by GObject.Object, but we need to declare it
	items_changed(position: number, removed: number, added: number): void {
		// This will be automatically handled by GObject runtime
		this.emit("items-changed", position, removed, added);
	}

	// Helper method to add items
	addItem(item: GObject.Object): void {
		this.items.push(item);
		this.items_changed(this.items.length - 1, 0, 1);
	}
}

/**
 * Custom paintable implementation using the new virtual interface approach.
 *
 * Before: Had to implement ALL methods of Gdk.Paintable
 * Now: Only need to implement the virtual methods in Gdk.Paintable.Interface
 */
class CustomPaintable extends GObject.Object implements Gdk.Paintable.Interface {
	private width: number = 100;
	private height: number = 100;

	// Regular methods are automatically provided by GObject runtime
	// but we add them for TypeScript compatibility during development
	declare get_current_image: Gdk.Paintable["get_current_image"];
	declare get_flags: Gdk.Paintable["get_flags"];
	declare get_intrinsic_aspect_ratio: Gdk.Paintable["get_intrinsic_aspect_ratio"];
	declare get_intrinsic_height: Gdk.Paintable["get_intrinsic_height"];
	declare get_intrinsic_width: Gdk.Paintable["get_intrinsic_width"];
	declare snapshot: Gdk.Paintable["snapshot"];

	static {
		GObject.registerClass(
			{
				GTypeName: "CustomPaintable",
				Implements: [Gdk.Paintable],
			},
			CustomPaintable,
		);
	}

	constructor(width = 100, height = 100) {
		super();
		this.width = width;
		this.height = height;
	}

	// ONLY virtual methods need to be implemented!
	vfunc_get_current_image(this: this & Gdk.Paintable): Gdk.Paintable {
		return this;
	}

	vfunc_get_flags(): Gdk.PaintableFlags {
		return Gdk.PaintableFlags.STATIC_SIZE | Gdk.PaintableFlags.STATIC_CONTENTS;
	}

	vfunc_get_intrinsic_aspect_ratio(): number {
		return this.width / this.height;
	}

	vfunc_get_intrinsic_height(): number {
		return this.height;
	}

	vfunc_get_intrinsic_width(): number {
		return this.width;
	}

	vfunc_snapshot(_snapshot: Gdk.Snapshot, width: number, height: number): void {
		// Simple rectangle drawing
		const _rect = new Gdk.Rectangle({
			x: 0,
			y: 0,
			width: width,
			height: height,
		});

		// In a real implementation, you would draw something here
		console.log(`Drawing rectangle: ${width}x${height}`);
	}
}

/**
 * Regression for https://github.com/gjsify/ts-for-gir/issues/222
 *
 * Before the fix, a class that extended GObject.Object and implemented an
 * interface whose `<prerequisite>` was GObject.Object (e.g. Gdk.Paintable) had
 * every GObject.Object member duplicated into its body. The conflict resolver
 * then emitted a `(...args: never[]): any` overload alongside each duplicate,
 * which broke real call sites such as `bind_property_full(...)`. This class
 * exercises the previously broken methods to lock in the fix.
 */
class IssueGh222Regression extends GObject.Object implements Gdk.Paintable.Interface {
	declare get_current_image: Gdk.Paintable["get_current_image"];
	declare get_flags: Gdk.Paintable["get_flags"];
	declare get_intrinsic_aspect_ratio: Gdk.Paintable["get_intrinsic_aspect_ratio"];
	declare get_intrinsic_height: Gdk.Paintable["get_intrinsic_height"];
	declare get_intrinsic_width: Gdk.Paintable["get_intrinsic_width"];

	declare value: number;

	static {
		GObject.registerClass(
			{
				GTypeName: "IssueGh222Regression",
				Implements: [Gdk.Paintable],
				Properties: {
					value: GObject.ParamSpec.int("value", "Value", "A test property", GObject.ParamFlags.READWRITE, 0, 100, 0),
				},
			},
			IssueGh222Regression,
		);
	}

	vfunc_get_current_image(this: this & Gdk.Paintable): Gdk.Paintable {
		return this;
	}
	vfunc_get_flags(): Gdk.PaintableFlags {
		return Gdk.PaintableFlags.STATIC_SIZE;
	}
	vfunc_get_intrinsic_aspect_ratio(): number {
		return 1;
	}
	vfunc_get_intrinsic_height(): number {
		return 0;
	}
	vfunc_get_intrinsic_width(): number {
		return 0;
	}
	vfunc_snapshot(_snapshot: Gdk.Snapshot, _width: number, _height: number): void {}
}

function main() {
	console.log("=== Virtual Interface Demo ===");

	// Test CustomListModel
	console.log("\n1. Testing CustomListModel:");
	const listModel = new CustomListModel();

	console.log(`Items count: ${listModel.get_n_items()}`);
	console.log(`Item type: ${listModel.get_item_type().name}`);
	console.log(`First item: ${listModel.get_item(0)?.constructor.name || "null"}`);

	// Add an item and test
	listModel.addItem(new GObject.Object());
	console.log(`Items count after adding: ${listModel.get_n_items()}`);

	// Test CustomPaintable
	console.log("\n2. Testing CustomPaintable:");
	const paintable = new CustomPaintable(200, 150);

	console.log(`Intrinsic width: ${paintable.get_intrinsic_width()}`);
	console.log(`Intrinsic height: ${paintable.get_intrinsic_height()}`);
	console.log(`Aspect ratio: ${paintable.get_intrinsic_aspect_ratio()}`);
	console.log(`Flags: ${paintable.get_flags()}`);

	// Issue #222 regression: methods inherited from GObject.Object must be
	// callable with their real signatures rather than `(...args: never[]): any`.
	console.log("\n3. Testing issue #222 regression (Gdk.Paintable + GObject.Object methods):");
	const subject = new IssueGh222Regression();
	const target = new IssueGh222Regression();
	const binding = subject.bind_property_full("value", target, "value", GObject.BindingFlags.DEFAULT, null, null);
	subject.freeze_notify();
	subject.value = 42;
	subject.thaw_notify();
	subject.notify("value");
	const propagated = target.value;
	binding.unbind();
	console.log(`  bind_property_full + notify roundtrip OK on ${subject.constructor.name}, target.value=${propagated}`);
}

// Run the test
main();
