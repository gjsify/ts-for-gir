import type { GirModuleMetadata } from "../types.ts";

export const harfBuzz: GirModuleMetadata = {
	girId: "HarfBuzz-0.0",
	displayName: "HarfBuzz",
	description: "A text shaping engine — converts Unicode text to glyph indices and positions.",
	authors: "Behdad Esfahbod",
	websiteUrl: "https://harfbuzz.github.io",
	browseUrl: "https://github.com/harfbuzz/harfbuzz/",
	repositoryUrl: "https://github.com/harfbuzz/harfbuzz.git",
	license: "MIT",
	cDocsUrl: "https://harfbuzz.github.io/",
	logoUrl: "https://harfbuzz.github.io/HarfBuzz.png",
	category: "Text Rendering",
};

export const freetype2: GirModuleMetadata = {
	girId: "freetype2-2.0",
	displayName: "FreeType",
	description: "A freely available software library to render fonts.",
	authors: "David Turner, Robert Wilhelm, Werner Lemberg",
	websiteUrl: "https://freetype.org",
	browseUrl: "https://gitlab.freedesktop.org/freetype/freetype/",
	repositoryUrl: "https://gitlab.freedesktop.org/freetype/freetype.git",
	license: "FTL OR GPL-2.0-or-later",
	cDocsUrl: "https://freetype.org/freetype2/docs/reference/",
	category: "Text Rendering",
};
