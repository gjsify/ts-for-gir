import type { DeclarationReflection, PageEvent, Reflection } from "typedoc";
import { JSX, ReflectionKind } from "typedoc";
import type { GiDocgenThemeRenderContext } from "../context.ts";
import { classNames, getDisplayName } from "../utils.ts";

/**
 * Walk up the parent chain to find the owning Module reflection.
 * Returns undefined for project-level pages.
 */
export function findOwningModule(reflection: Reflection): DeclarationReflection | undefined {
	let current: Reflection | undefined = reflection;
	while (current) {
		if (current.kindOf(ReflectionKind.Module)) {
			return current as DeclarationReflection;
		}
		if (current.isProject()) {
			return undefined;
		}
		current = current.parent;
	}
	return undefined;
}

/**
 * Navigation partial that renders `#tsd-nav-container` with a `data-module` attribute.
 *
 * The actual navigation DOM is built client-side by `gi-docgen-nav.js`, which reads
 * the `data-module` attribute to filter `navigation.js` data to the current module only.
 */
export const giDocgenNavigation = (context: GiDocgenThemeRenderContext, props: PageEvent<Reflection>) => {
	const owningModule = findOwningModule(props.model);
	return JSX.createElement(
		"nav",
		{ class: "tsd-navigation" },
		JSX.createElement(
			"a",
			{
				href: context.urlTo(props.project),
				class: classNames({
					current: props.model.isProject(),
				}),
			},
			getDisplayName(props.project),
		),
		JSX.createElement(
			"ul",
			{
				class: "tsd-small-nested-navigation",
				id: "tsd-nav-container",
				"data-module": owningModule?.name || "",
			},
			JSX.createElement("li", null, "Loading..."),
		),
	);
};
