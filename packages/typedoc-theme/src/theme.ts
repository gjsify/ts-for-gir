import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { NavigationElement, ProjectReflection, Renderer } from "typedoc";
import { DefaultTheme, RendererEvent } from "typedoc";
import { GiDocgenThemeRenderContext } from "./context.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Flattens navigation to top-level modules/packages only (no children).
 * Skips a single scope-wrapper root (e.g. "@girs") and strips icon/kind data.
 */
function buildShallowNavigation(elements: NavigationElement[]): NavigationElement[] {
	// Skip a single scope-wrapper root like "@girs"
	let roots = elements;
	if (roots.length === 1 && roots[0].text.startsWith("@") && !roots[0].path) {
		roots = roots[0].children ?? [];
	}

	return roots.map(({ text, path }) => {
		// Strip " - vX.Y.Z" version suffix added by TypeDoc's getDisplayName;
		// version is now shown in the sidebar module info section.
		const sepIdx = text.indexOf(" - ");
		return { text: sepIdx > 0 ? text.slice(0, sepIdx) : text, path };
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

			// Copy inherited member toggle script
			copyFileSync(join(__dirname, "static", "gi-docgen-inherited.js"), join(assetsDir, "gi-docgen-inherited.js"));
		});
	}

	override getNavigation(project: ProjectReflection): NavigationElement[] {
		return buildShallowNavigation(super.getNavigation(project));
	}
}
