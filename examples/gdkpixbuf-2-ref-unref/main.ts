/// <reference types="@girs/gjs" />

// Validates fix for https://github.com/gjsify/ts-for-gir/issues/303
// ref() and unref() methods marked introspectable="0" in GIR should still be
// available in TypeScript types, as GJS exposes them at runtime.

import "@girs/gjs";
import GdkPixbuf from "@girs/gdkpixbuf-2.0";

// Create a simple 1x1 pixbuf for testing
const pixbuf = GdkPixbuf.Pixbuf.new(GdkPixbuf.Colorspace.RGB, true, 8, 1, 1);

if (!pixbuf) {
	throw new Error("Failed to create pixbuf");
}

// Issue #303: These methods were previously filtered out because the GIR marks
// them with introspectable="0". GJS exposes them at runtime regardless.
const refResult: GdkPixbuf.Pixbuf = pixbuf.ref();
pixbuf.unref();

print("GdkPixbuf ref/unref validation passed");
