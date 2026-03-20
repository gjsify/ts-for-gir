import type { GirModuleMetadata } from "../types.ts";

const GTK3_COMMON = {
	authors: "GTK Development Team",
	websiteUrl: "https://www.gtk.org",
	browseUrl: "https://gitlab.gnome.org/GNOME/gtk/",
	repositoryUrl: "https://gitlab.gnome.org/GNOME/gtk.git",
	license: "LGPL-2.1-or-later",
	docLicense: "GPL-2.1-or-later",
	category: "GTK 3",
};

export const gtk3: GirModuleMetadata = {
	...GTK3_COMMON,
	girId: "Gtk-3.0",
	displayName: "GTK",
	description: "The GTK toolkit — primary library for constructing user interfaces in GNOME applications.",
	cDocsUrl: "https://docs.gtk.org/gtk3/",
};

export const gdk3: GirModuleMetadata = {
	...GTK3_COMMON,
	girId: "Gdk-3.0",
	displayName: "GDK",
	description: "The GTK windowing system abstraction.",
	cDocsUrl: "https://docs.gtk.org/gdk3/",
};
