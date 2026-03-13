import type { PageEvent, Reflection } from "typedoc";
import { JSX, ReflectionKind } from "typedoc";
import type { GiDocgenThemeRenderContext } from "../context.ts";
import { getDisplayName } from "../utils.ts";

/** Strip NPM scope prefix from a package name, e.g. "@girs/glib-2.0" → "glib-2.0". */
function stripScope(name: string): string {
	return name.replace(/^@[^/]+\//, "");
}

function getBreadcrumbName(refl: Reflection): string {
	const name = getDisplayName(refl);
	// Strip scope only from module-level reflections whose name looks like an npm package
	return name.startsWith("@") ? stripScope(name) : name;
}

export const giDocgenHeader = (context: GiDocgenThemeRenderContext, props: PageEvent<Reflection>) => {
	const isSpecialPage = props.url === "index.html" || props.url === "hierarchy.html";

	let kindString = "";
	let renderTitle = true;

	const headings = context.options.getValue("headings") as { readme: boolean; document: boolean };

	if (props.model.isProject()) {
		if (props.url === "index.html" && "readme" in props.model && props.model.readme) {
			renderTitle = headings.readme;
		}
	} else if ("isDocument" in props.model && typeof props.model.isDocument === "function" && props.model.isDocument()) {
		renderTitle = headings.document;
	} else {
		kindString = ReflectionKind.singularString(props.model.kind);
	}

	// Build full breadcrumb path (same as TypeDoc's breadcrumb: walk up until no parent, exclude root project)
	const path: Reflection[] = [];
	let refl: Reflection = props.model;
	while (refl.parent) {
		path.push(refl);
		refl = refl.parent;
	}
	path.reverse(); // now [topModule, ..., currentItem]

	return JSX.createElement(
		"div",
		{ class: "gi-docgen-page-title" },
		kindString && JSX.createElement("span", { class: "gi-docgen-object-type" }, kindString),
		renderTitle &&
			JSX.createElement(
				"h1",
				null,
				!isSpecialPage && path.length > 1
					? path.map((r, i) => {
							const isLast = i === path.length - 1;
							const url = context.urlTo(r);
							return JSX.createElement(
								JSX.Fragment,
								null,
								i > 0 && JSX.createElement("span", { class: "gi-docgen-breadcrumb-sep" }, " ▶ "),
								isLast || !url
									? getBreadcrumbName(r)
									: JSX.createElement("a", { href: url }, getBreadcrumbName(r)),
							);
						})
					: getDisplayName(props.model),
				context.reflectionFlags(props.model),
			),
	);
};
