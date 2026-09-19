import type { GirModuleMetadata } from "../types.ts";

const GRILO_COMMON = {
	authors: "GNOME",
	websiteUrl: "https://wiki.gnome.org/Projects/Grilo",
	browseUrl: "https://gitlab.gnome.org/GNOME/grilo/",
	repositoryUrl: "https://gitlab.gnome.org/GNOME/grilo.git",
	license: "LGPL-2.1-or-later",
	category: "Multimedia",
};

export const grl: GirModuleMetadata = {
	...GRILO_COMMON,
	girId: "Grl-0.3",
	displayName: "Grilo",
	description: "Framework for discovering and browsing media content.",
	cDocsUrl: "https://gnome.pages.gitlab.gnome.org/grilo/",
};

export const grlNet: GirModuleMetadata = {
	...GRILO_COMMON,
	girId: "GrlNet-0.3",
	displayName: "Grilo Net",
	description: "Networking support for the Grilo media discovery framework.",
	browseUrl: "https://gitlab.gnome.org/GNOME/grilo-plugins/",
};
