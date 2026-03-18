import type { GirModuleMetadata } from "../types.ts";
import { adw } from "./adw.ts";
import { cairo } from "./cairo.ts";
import { gdkPixbuf } from "./gdk-pixbuf.ts";
import { gio, glib, gmodule, gobject } from "./glib.ts";
import { graphene } from "./graphene.ts";
import { gst, gstApp, gstAudio, gstBase, gstController, gstPbutils, gstTag, gstVideo } from "./gstreamer.ts";
import { gdk3, gtk3 } from "./gtk3.ts";
import { gdk4, gsk4, gtk4 } from "./gtk4.ts";
import { freetype2, harfBuzz } from "./harfbuzz.ts";
import { gtksource5, json, nm, notify, polkit, secret, shumate } from "./misc.ts";
import { pango, pangoCairo } from "./pango.ts";
import { soup3 } from "./soup.ts";
import { javaScriptCore6, webkit6, webkitWebExtension6 } from "./webkit.ts";

const ALL_ENTRIES: GirModuleMetadata[] = [
	// GLib family
	glib,
	gobject,
	gio,
	gmodule,
	// GTK 4
	gtk4,
	gdk4,
	gsk4,
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
	// Web
	webkit6,
	webkitWebExtension6,
	javaScriptCore6,
	// GNOME libraries
	adw,
	soup3,
	gtksource5,
	shumate,
	notify,
	secret,
	json,
	nm,
	polkit,
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
