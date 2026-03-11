import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { NavigationElement, ProjectReflection, Renderer } from "typedoc";
import { DefaultTheme, RendererEvent } from "typedoc";
import { GiDocgenThemeRenderContext } from "./context.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Trims the navigation tree to 2 levels deep and filters out "default" entries.
 * Also skips a single scope-wrapper root (e.g. "@girs").
 */
function buildShallowNavigation(elements: NavigationElement[]): NavigationElement[] {
	// Skip a single scope-wrapper root like "@girs"
	let roots = elements;
	if (roots.length === 1 && roots[0].text.startsWith("@") && !roots[0].path) {
		roots = roots[0].children ?? [];
	}

	return roots.map((pkg) => {
		const children = (pkg.children ?? [])
			.filter((c) => c.text !== "default")
			.map(({ text, path, kind, class: cls, icon }) => ({ text, path, kind, class: cls, icon }));

		return { ...pkg, children: children.length ? children : undefined };
	});
}

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

	override getNavigation(project: ProjectReflection): NavigationElement[] {
		return buildShallowNavigation(super.getNavigation(project));
	}
}
