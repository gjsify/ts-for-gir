/**
 * GObject.registerClass property-inference example.
 *
 * Exercises the inference path that becomes reachable after the standard
 * overloads are no longer emitted alongside the enhanced ones. Property
 * types declared in the `Properties` block are surfaced on the registered
 * class via `RegisteredPrototype`.
 *
 * The companion `gobject-param-spec` example covers the idiomatic
 * `static { GObject.registerClass(...) }` pattern, which is unaffected.
 */

import GObject from "gi://GObject?version=2.0";

const Counter = GObject.registerClass(
	{
		GTypeName: "ExampleCounter",
		Properties: {
			count: GObject.ParamSpec.int("count", null, null, GObject.ParamFlags.READWRITE, 0, Number.MAX_SAFE_INTEGER, 0),
			label: GObject.ParamSpec.string("label", null, null, GObject.ParamFlags.READWRITE, "counter"),
		},
	},
	class extends GObject.Object {},
);

const c = new Counter();

// Property types from the Properties block are surfaced on the instance.
c.count = 5;
c.label = "hello";

print(`count=${c.count} label=${c.label}`);

// Regression assertion: wrong property type is rejected.
// @ts-expect-error: count is typed as number, not string
c.count = "still wrong";
