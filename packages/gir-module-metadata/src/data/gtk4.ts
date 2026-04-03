import type { GirModuleMetadata } from "../types.ts";

const GTK_LOGO = "https://docs.gtk.org/gsk4/gtk-logo.svg";

const GTK_COMMON = {
	authors: "GTK Development Team",
	websiteUrl: "https://www.gtk.org",
	browseUrl: "https://gitlab.gnome.org/GNOME/gtk/",
	repositoryUrl: "https://gitlab.gnome.org/GNOME/gtk.git",
	license: "LGPL-2.1-or-later",
	docLicense: "GPL-2.1-or-later",
	logoUrl: GTK_LOGO,
	category: "GTK 4",
};

export const gtk4: GirModuleMetadata = {
	...GTK_COMMON,
	girId: "Gtk-4.0",
	displayName: "GTK",
	description: "The GTK toolkit — primary library for constructing user interfaces in GNOME applications.",
	cDocsUrl: "https://docs.gtk.org/gtk4/",
};

export const gdk4: GirModuleMetadata = {
	...GTK_COMMON,
	girId: "Gdk-4.0",
	displayName: "GDK",
	description: "The GTK windowing system abstraction.",
	cDocsUrl: "https://docs.gtk.org/gdk4/",
};

export const gsk4: GirModuleMetadata = {
	...GTK_COMMON,
	girId: "Gsk-4.0",
	displayName: "GSK",
	description: "The GTK rendering API.",
	cDocsUrl: "https://docs.gtk.org/gsk4/",
};

export const gdkMacos: GirModuleMetadata = {
	...GTK_COMMON,
	girId: "GdkMacos-4.0",
	displayName: "GDK macOS",
	description: "GDK backend for macOS.",
	cDocsUrl: "https://docs.gtk.org/gdk4-macos/",
};

export const gdkWin32: GirModuleMetadata = {
	...GTK_COMMON,
	girId: "GdkWin32-4.0",
	displayName: "GDK Win32",
	description: "GDK backend for Windows.",
	cDocsUrl: "https://docs.gtk.org/gdk4-win32/",
};

export const gdkWayland: GirModuleMetadata = {
	...GTK_COMMON,
	girId: "GdkWayland-4.0",
	displayName: "GDK Wayland",
	description: "GDK backend for Wayland.",
	cDocsUrl: "https://docs.gtk.org/gdk4-wayland/",
};

export const gdkX11: GirModuleMetadata = {
	...GTK_COMMON,
	girId: "GdkX11-4.0",
	displayName: "GDK X11",
	description: "GDK backend for X11.",
	cDocsUrl: "https://docs.gtk.org/gdk4-x11/",
};
