import type { GirModuleMetadata } from "../types.ts";

const PANGO_COMMON = {
	authors: "GNOME",
	websiteUrl: "https://pango.gnome.org",
	browseUrl: "https://gitlab.gnome.org/GNOME/pango/",
	repositoryUrl: "https://gitlab.gnome.org/GNOME/pango.git",
	license: "LGPL-2.1-or-later",
	logoUrl: "https://docs.gtk.org/Pango/pango-name.png",
	category: "Pango",
};

export const pango: GirModuleMetadata = {
	...PANGO_COMMON,
	girId: "Pango-1.0",
	displayName: "Pango",
	description: "Pango is a library for laying out and rendering text, with an emphasis on internationalization.",
	cDocsUrl: "https://docs.gtk.org/Pango/",
};

export const pangoCairo: GirModuleMetadata = {
	...PANGO_COMMON,
	girId: "PangoCairo-1.0",
	displayName: "PangoCairo",
	description: "Cairo rendering support for Pango.",
	cDocsUrl: "https://docs.gtk.org/PangoCairo/",
};
