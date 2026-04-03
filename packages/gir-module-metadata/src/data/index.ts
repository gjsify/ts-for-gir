import type { GirModuleMetadata } from "../types.ts";
import { cairo } from "./cairo.ts";
import { gdkPixbuf } from "./gdk-pixbuf.ts";
import { gjs } from "./gjs.ts";
import { gio, gioUnix, gioWin32, glib, glibUnix, glibWin32, gmodule, gobject } from "./glib.ts";
import { clutter, cogl, gvc, meta, mtk, shell, shew, st } from "./gnome-shell.ts";
import { graphene } from "./graphene.ts";
import { grl, grlNet } from "./grilo.ts";
import {
	ges,
	gst,
	gstApp,
	gstAudio,
	gstBase,
	gstController,
	gstGL,
	gstPbutils,
	gstPlayer,
	gstTag,
	gstVideo,
	gstWebRTC,
} from "./gstreamer.ts";
import { gdk3, gtk3 } from "./gtk3.ts";
import { gdk4, gdkMacos, gdkWayland, gdkWin32, gdkX11, gsk4, gtk4 } from "./gtk4.ts";
import { gwebgl } from "./gwebgl.ts";
import { freetype2, harfBuzz } from "./harfbuzz.ts";
import {
	adw,
	appStream,
	atk,
	atspi,
	dbus,
	dex,
	flatpak,
	gck,
	gcr,
	gdesktopEnums,
	geocodeGlib,
	gl,
	goa,
	gssdp,
	gstSdp,
	gtksource5,
	gudev,
	gupnp,
	gweather,
	json,
	jsonrpc,
	libosinfo,
	libxml2,
	nm,
	notify,
	panel,
	peas,
	polkit,
	polkitAgent,
	poppler,
	rest,
	rsvg,
	secret,
	shumate,
	spelling,
	template,
	tsparql,
	vte,
	win32,
	wnck,
	xdp,
	xdpGtk4,
	xfixes,
	xlib,
} from "./misc.ts";
import { pango, pangoCairo } from "./pango.ts";
import { soup3 } from "./soup.ts";
import { javaScriptCore6, webkit6, webkitWebExtension6, webkitWebProcessExtension6 } from "./webkit.ts";

const ALL_ENTRIES: GirModuleMetadata[] = [
	// GJS core
	gjs,
	gwebgl,
	// GLib family
	glib,
	gobject,
	gio,
	gmodule,
	glibUnix,
	glibWin32,
	gioUnix,
	gioWin32,
	// GTK 4
	gtk4,
	gdk4,
	gsk4,
	gdkMacos,
	gdkWin32,
	gdkWayland,
	gdkX11,
	// GTK 3
	gtk3,
	gdk3,
	// Pango
	pango,
	pangoCairo,
	// Pixel formats & graphics
	gdkPixbuf,
	graphene,
	cairo,
	rsvg,
	// Text rendering
	harfBuzz,
	freetype2,
	// Multimedia
	gst,
	gstBase,
	gstAudio,
	gstVideo,
	gstPbutils,
	gstTag,
	gstApp,
	gstController,
	gstPlayer,
	gstGL,
	gstWebRTC,
	ges,
	grl,
	grlNet,
	// GNOME Shell
	meta,
	clutter,
	cogl,
	mtk,
	st,
	shell,
	gvc,
	shew,
	// Web
	webkit6,
	webkitWebExtension6,
	webkitWebProcessExtension6,
	javaScriptCore6,
	goa,
	// Networking
	soup3,
	rest,
	nm,
	gupnp,
	gssdp,
	// Data & Markup
	json,
	libxml2,
	tsparql,
	template,
	jsonrpc,
	// Security
	secret,
	gcr,
	gck,
	polkit,
	polkitAgent,
	// System
	gudev,
	flatpak,
	appStream,
	libosinfo,
	xdp,
	xdpGtk4,
	// GNOME Desktop
	adw,
	gtksource5,
	shumate,
	notify,
	vte,
	panel,
	peas,
	spelling,
	gweather,
	geocodeGlib,
	poppler,
	wnck,
	dex,
	atspi,
	atk,
	gdesktopEnums,
	// Low-level / transitive
	dbus,
	gl,
	gstSdp,
	win32,
	xfixes,
	xlib,
];

const METADATA = new Map<string, GirModuleMetadata>();
for (const entry of ALL_ENTRIES) {
	METADATA.set(entry.girId, entry);
}

/** Look up metadata by GIR namespace ID (e.g. "Gtk-4.0"). */
export function getModuleMetadata(girId: string): GirModuleMetadata | undefined {
	return METADATA.get(girId);
}

/** Get all registered metadata entries. */
export function getAllModuleMetadata(): ReadonlyMap<string, GirModuleMetadata> {
	return METADATA;
}
