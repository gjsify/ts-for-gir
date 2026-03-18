import type { DeclarationReflection, PageEvent, Reflection } from "typedoc";
import { i18n, JSX } from "typedoc";
import type { GiDocgenThemeRenderContext } from "../context.ts";
import { findOwningModule, type GirNamespaceMetadata, getGirNamespaceMetadata } from "../utils.ts";

/** Render the module info section (namespace name, versions, dependencies). */
function giDocgenModuleInfo(
	context: GiDocgenThemeRenderContext,
	mod: DeclarationReflection,
	nsMeta: GirNamespaceMetadata,
): JSX.Element {
	const depElements = nsMeta.dependencies.map((dep) => {
		const depPackageName = `${dep.namespace}-${dep.version}`;
		const depModule = context.page.project.children?.find(
			(child) => child.name === depPackageName || child.name === `@girs/${depPackageName.toLowerCase()}`,
		);
		const url = depModule ? context.urlTo(depModule) : undefined;
		const label = `${dep.namespace} ${dep.version}`;
		return JSX.createElement(
			"li",
			null,
			url
				? JSX.createElement("a", { href: url }, label)
				: JSX.createElement("span", { class: "gi-docgen-dep-external" }, label),
		);
	});

	const displayName = nsMeta.displayName || nsMeta.namespace;

	return JSX.createElement(
		"div",
		{ class: "gi-docgen-module-info" },
		JSX.createElement("h3", null, JSX.createElement("a", { href: context.urlTo(mod) }, displayName)),
		JSX.createElement("p", null, `API Version: ${nsMeta.version}`),
		JSX.createElement("p", null, `Library Version: ${nsMeta.libraryVersion}`),
		depElements.length > 0 &&
			JSX.createElement(
				"div",
				{ class: "gi-docgen-dependencies" },
				JSX.createElement("h5", { class: "gi-docgen-section-heading" }, "Dependencies"),
				JSX.createElement("ul", { class: "gi-docgen-module-list" }, ...depElements),
			),
	);
}

export const giDocgenSidebar = (context: GiDocgenThemeRenderContext, props: PageEvent<Reflection>) => {
	const owningModule = findOwningModule(props.model);
	const nsMeta = owningModule ? getGirNamespaceMetadata(props.model) : undefined;

	return JSX.createElement(
		JSX.Fragment,
		null,
		context.sidebarLinks(),
		/* Logo — above search, like gi-docgen */
		nsMeta?.logoUrl &&
			JSX.createElement(
				"div",
				{ class: "gi-docgen-module-logo" },
				JSX.createElement(
					"a",
					{ href: owningModule ? context.urlTo(owningModule) : undefined },
					JSX.createElement("img", { src: nsMeta.logoUrl, alt: nsMeta.displayName || nsMeta.namespace, class: "logo" }),
				),
			),
		/* Search input in the sidebar, gi-docgen style */
		JSX.createElement(
			"div",
			{ class: "gi-docgen-search" },
			JSX.createElement(
				"button",
				{
					id: "tsd-search-trigger",
					class: "gi-docgen-search-button",
					"aria-label": i18n.theme_search(),
				},
				context.icons.search(),
				JSX.createElement("span", null, i18n.theme_search_placeholder()),
			),
			JSX.createElement(
				"dialog",
				{ id: "tsd-search", "aria-label": i18n.theme_search() },
				JSX.createElement("input", {
					role: "combobox",
					id: "tsd-search-input",
					"aria-controls": "tsd-search-results",
					"aria-autocomplete": "list",
					"aria-expanded": "true",
					spellcheck: false,
					autocapitalize: "off",
					autocomplete: "off",
					placeholder: i18n.theme_search_placeholder(),
					maxLength: 100,
				}),
				JSX.createElement("ul", { role: "listbox", id: "tsd-search-results" }),
				JSX.createElement(
					"div",
					{ id: "tsd-search-status", "aria-live": "polite", "aria-atomic": "true" },
					JSX.createElement("div", null, i18n.theme_preparing_search_index()),
				),
			),
		),
		/* Module info section — only when viewing a module's pages */
		nsMeta && giDocgenModuleInfo(context, owningModule as DeclarationReflection, nsMeta),
		context.navigation(props),
		context.settings(),
		JSX.createElement(
			"div",
			{ class: "gi-docgen-generator" },
			JSX.createElement(
				"p",
				null,
				"Generated with ",
				JSX.createElement("a", { href: "https://typedoc.org/", target: "_blank" }, "TypeDoc"),
				" via ",
				JSX.createElement("a", { href: "https://github.com/gjsify/ts-for-gir", target: "_blank" }, "ts-for-gir"),
			),
		),
	);
};
