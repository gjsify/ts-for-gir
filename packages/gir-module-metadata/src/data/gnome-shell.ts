import type { GirModuleMetadata } from "../types.ts";

const MUTTER_COMMON = {
	authors: "GNOME",
	websiteUrl: "https://mutter.gnome.org",
	browseUrl: "https://gitlab.gnome.org/GNOME/mutter/",
	repositoryUrl: "https://gitlab.gnome.org/GNOME/mutter.git",
	license: "GPL-2.0-or-later",
	category: "GNOME Shell",
};

const SHELL_COMMON = {
	authors: "GNOME",
	websiteUrl: "https://wiki.gnome.org/Projects/GnomeShell",
	browseUrl: "https://gitlab.gnome.org/GNOME/gnome-shell/",
	repositoryUrl: "https://gitlab.gnome.org/GNOME/gnome-shell.git",
	license: "GPL-2.0-or-later",
	category: "GNOME Shell",
};

export const meta: GirModuleMetadata = {
	...MUTTER_COMMON,
	girId: "Meta-18",
	displayName: "Mutter",
	description: "Window management and compositor library for GNOME.",
	cDocsUrl: "https://mutter.gnome.org/meta/",
};

export const clutter: GirModuleMetadata = {
	...MUTTER_COMMON,
	girId: "Clutter-18",
	displayName: "Clutter",
	description: "Scene graph toolkit used by Mutter for rendering.",
	cDocsUrl: "https://mutter.gnome.org/clutter/",
};

export const cogl: GirModuleMetadata = {
	...MUTTER_COMMON,
	girId: "Cogl-18",
	displayName: "Cogl",
	description: "Low-level GPU graphics library used by Mutter.",
	cDocsUrl: "https://mutter.gnome.org/cogl/",
};

export const mtk: GirModuleMetadata = {
	...MUTTER_COMMON,
	girId: "Mtk-18",
	displayName: "Mtk",
	description: "Mutter Toolkit utility library.",
	cDocsUrl: "https://mutter.gnome.org/mtk/",
};

export const st: GirModuleMetadata = {
	...SHELL_COMMON,
	girId: "St-18",
	displayName: "St",
	description: "GNOME Shell UI toolkit for building shell extensions.",
};

export const shell: GirModuleMetadata = {
	...SHELL_COMMON,
	girId: "Shell-18",
	displayName: "Shell",
	description: "Core library of the GNOME Shell desktop.",
};

export const gvc: GirModuleMetadata = {
	...SHELL_COMMON,
	girId: "Gvc-1.0",
	displayName: "Gvc",
	description: "GNOME volume control library.",
	browseUrl: "https://gitlab.gnome.org/GNOME/libgnome-volume-control/",
};

export const shew: GirModuleMetadata = {
	...SHELL_COMMON,
	girId: "Shew-0",
	displayName: "Shew",
	description: "Shell Extensions Helper window library.",
};
