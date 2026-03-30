/// <reference types="@girs/gjs" />

// Validates fix for https://github.com/gjsify/ts-for-gir/issues/303
// ref() and unref() methods on records marked introspectable="0" in GIR should
// still be available in TypeScript types, as GJS exposes them at runtime.

import "@girs/gjs";
import GLib from "@girs/glib-2.0";

// GLib.Uri is a record with ref/unref marked introspectable="0" in the GIR.
const uri = GLib.Uri.parse("https://example.com/path?query=value", GLib.UriFlags.NONE);

// Issue #303: These methods were previously filtered out because the GIR marks
// them with introspectable="0". GJS exposes them at runtime regardless.
uri.ref();
uri.unref();

print("GLib.Uri ref/unref validation passed");
