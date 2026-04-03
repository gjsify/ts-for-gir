import type { GirModuleMetadata } from "../types.ts";

const WEBKIT_COMMON = {
	authors: "WebKitGTK Team",
	websiteUrl: "https://webkitgtk.org",
	browseUrl: "https://github.com/nicotinadeb/WebKit/",
	license: "LGPL-2.1-or-later",
	category: "Web",
};

export const webkit6: GirModuleMetadata = {
	...WEBKIT_COMMON,
	girId: "WebKit-6.0",
	displayName: "WebKitGTK",
	description: "A full-featured port of the WebKit rendering engine for GTK.",
	cDocsUrl: "https://webkitgtk.org/reference/webkit2gtk/unstable/",
};

export const webkitWebExtension6: GirModuleMetadata = {
	...WEBKIT_COMMON,
	girId: "WebKitWebExtension-6.0",
	displayName: "WebKit Web Extension",
	description: "Library for building extensions running in the separated web process.",
	cDocsUrl: "https://webkitgtk.org/reference/webkit2gtk-web-extension/unstable/",
};

export const javaScriptCore6: GirModuleMetadata = {
	...WEBKIT_COMMON,
	girId: "JavaScriptCore-6.0",
	displayName: "JavaScriptCore",
	description: "JavaScript engine used by WebKitGTK.",
	cDocsUrl: "https://webkitgtk.org/reference/jsc-glib/unstable/",
};

export const webkitWebProcessExtension6: GirModuleMetadata = {
	...WEBKIT_COMMON,
	girId: "WebKitWebProcessExtension-6.0",
	displayName: "WebKit Web Process Extension",
	description: "Library for extensions running in WebKit's web process.",
	cDocsUrl: "https://webkitgtk.org/reference/webkit2gtk-web-process-extension/unstable/",
};
