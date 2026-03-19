import type { GirModuleMetadata } from "../types.ts";

const GLIB_COMMON = {
	authors: "GTK Development Team",
	websiteUrl: "https://www.gtk.org",
	browseUrl: "https://gitlab.gnome.org/GNOME/glib/",
	repositoryUrl: "https://gitlab.gnome.org/GNOME/glib.git",
	license: "LGPL-2.1-or-later",
	category: "GLib",
};

export const glib: GirModuleMetadata = {
	...GLIB_COMMON,
	girId: "GLib-2.0",
	displayName: "GLib",
	description:
		"GLib provides the core application building blocks for libraries and applications written in C. It provides the core object system used in GNOME, the main loop implementation, and a large set of utility functions for strings and common data structures.",
	cDocsUrl: "https://docs.gtk.org/glib/",
};

export const gobject: GirModuleMetadata = {
	...GLIB_COMMON,
	girId: "GObject-2.0",
	displayName: "GObject",
	description:
		"The base type system and object class library, providing signal/callback handling, properties, and reference counting.",
	cDocsUrl: "https://docs.gtk.org/gobject/",
};

export const gio: GirModuleMetadata = {
	...GLIB_COMMON,
	girId: "Gio-2.0",
	displayName: "GIO",
	description:
		"GIO provides a modern and easy-to-use VFS API, including file system abstraction, networking, D-Bus support, and application infrastructure.",
	cDocsUrl: "https://docs.gtk.org/gio/",
};

export const gmodule: GirModuleMetadata = {
	...GLIB_COMMON,
	girId: "GModule-2.0",
	displayName: "GModule",
	description: "Portable method for dynamically loading plug-ins.",
	cDocsUrl: "https://docs.gtk.org/gmodule/",
};
