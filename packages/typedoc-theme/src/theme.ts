import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { Renderer } from "typedoc";
import { DefaultTheme, RendererEvent } from "typedoc";
import { GiDocgenThemeRenderContext } from "./context.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export class GiDocgenTheme extends DefaultTheme {
	override ContextClass = GiDocgenThemeRenderContext;

	constructor(renderer: Renderer) {
		super(renderer);

		this.owner.on(RendererEvent.END, (event: RendererEvent) => {
			const assetsDir = join(event.outputDirectory, "assets");

			// Copy custom CSS as additional stylesheet (keeps TypeDoc's base style.css intact)
			copyFileSync(join(__dirname, "static", "style.css"), join(assetsDir, "gi-docgen.css"));

			// Copy custom navigation JS
			copyFileSync(join(__dirname, "static", "gi-docgen-nav.js"), join(assetsDir, "gi-docgen-nav.js"));
		});
	}
}
