import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { DeclarationReflection, PageEvent, Reflection } from "typedoc";
import { i18n, JSX, ReflectionKind } from "typedoc";
import type { GiDocgenThemeRenderContext } from "../context.ts";
import {
	findOwningModule,
	type GirNamespaceMetadata,
	getGirNamespaceMetadata,
	isCompanionNamespace,
} from "../utils.ts";

declare const __TS_FOR_GIR_VERSION__: string;

function getTsForGirVersion(): string {
	if (typeof __TS_FOR_GIR_VERSION__ !== "undefined") {
		return __TS_FOR_GIR_VERSION__;
	}
	const __dirname = dirname(fileURLToPath(import.meta.url));
	return JSON.parse(readFileSync(join(__dirname, "..", "..", "package.json"), "utf8")).version as string;
}

const TSFOR_GIR_VERSION = getTsForGirVersion();

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

	// Namespaces or sub-modules exported by this module (exclude "default")
	const childNamespaces = mod.children?.filter(
		(child) => child.kindOf(ReflectionKind.Namespace) && child.name !== "default" && !isCompanionNamespace(child),
	);
	const childModules = mod.children?.filter((child) => child.kindOf(ReflectionKind.Module) && child.name !== "default");
	// Package version: prefer TypeDoc reflection, fallback to metadata
	const packageVersion = (mod as unknown as { packageVersion?: string }).packageVersion || nsMeta.packageVersion;

	// Determine active child: walk from current page model up to find a direct child of this module
	const pageModel = context.page.model;
	const isChildActive = (child: DeclarationReflection): boolean => {
		let current: Reflection | undefined = pageModel;
		while (current) {
			if (current === child) return true;
			current = current.parent;
		}
		return false;
	};

	const renderChildSection = (children: typeof childNamespaces, title: string) =>
		children &&
		children.length > 0 &&
		JSX.createElement(
			"div",
			{ class: "gi-docgen-sidebar-section" },
			JSX.createElement("h5", { class: "gi-docgen-section-heading" }, title),
			JSX.createElement(
				"ul",
				{ class: "gi-docgen-module-list" },
				...children.map((child) =>
					JSX.createElement(
						"li",
						null,
						JSX.createElement(
							"a",
							{ href: context.urlTo(child), class: isChildActive(child) ? "current" : undefined },
							child.name,
						),
					),
				),
			),
		);

	const displayName = nsMeta.displayName || nsMeta.namespace;

	return JSX.createElement(
		"div",
		{ class: "gi-docgen-module-info" },
		JSX.createElement("h3", null, JSX.createElement("a", { href: context.urlTo(mod) }, displayName)),
		JSX.createElement(
			"div",
			{ class: "gi-docgen-module-versions" },
			nsMeta.version && JSX.createElement("p", null, `API Version: ${nsMeta.version}`),
			nsMeta.libraryVersion && JSX.createElement("p", null, `Library Version: ${nsMeta.libraryVersion}`),
			packageVersion &&
				packageVersion !== nsMeta.libraryVersion &&
				JSX.createElement("p", null, `Package Version: ${packageVersion}`),
		),
		renderChildSection(childNamespaces, "Namespaces"),
		renderChildSection(childModules, "Modules"),
		depElements.length > 0 &&
			JSX.createElement(
				"div",
				{ class: "gi-docgen-sidebar-section" },
				JSX.createElement("h5", { class: "gi-docgen-section-heading" }, "Dependencies"),
				JSX.createElement("ul", { class: "gi-docgen-module-list" }, ...depElements),
			),
	);
}

export const giDocgenSidebar = (context: GiDocgenThemeRenderContext, props: PageEvent<Reflection>) => {
	const owningModule = findOwningModule(props.model);
	const nsMeta = owningModule ? getGirNamespaceMetadata(props.model) : undefined;

	// Logo: use module logo if available, otherwise default project logo
	const logoUrl = nsMeta?.logoUrl || context.relativeURL("assets/logo_x4.png", true);
	const logoAlt = nsMeta?.displayName || nsMeta?.namespace || "GJS TypeScript Definitions";
	const logoHref = owningModule ? context.urlTo(owningModule) : context.relativeURL("index.html", true);

	// Subtitle: "TypeScript API Documentation for <MODULE>" or "GJS"
	const subtitleTarget = nsMeta ? (nsMeta.displayName || nsMeta.packageName).toUpperCase() : "GJS";
	const subtitle = `TypeScript API Documentation for ${subtitleTarget}`;

	// Are we inside a module page or on the overview (index/modules)?
	const isModulePage = !!owningModule;

	return JSX.createElement(
		JSX.Fragment,
		null,
		context.sidebarLinks(),
		/* Header: back button (module pages only) + subtitle — always present */
		JSX.createElement(
			"div",
			{ class: "gi-docgen-sidebar-header" },
			isModulePage &&
				JSX.createElement(
					"a",
					{
						href: context.relativeURL("index.html", true),
						class: "gi-docgen-back-button",
						"aria-label": "Back to overview",
						title: "Back to overview",
					},
					JSX.createElement(
						"svg",
						{ width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true" },
						JSX.createElement("path", {
							d: "M12.5 15L7.5 10L12.5 5",
							stroke: "currentColor",
							"stroke-width": "2",
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
						}),
					),
				),
			JSX.createElement("p", { class: "gi-docgen-logo-subtitle" }, subtitle),
		),
		/* Logo — centered, below header */
		JSX.createElement(
			"div",
			{ class: "gi-docgen-module-logo" },
			JSX.createElement(
				"a",
				{ href: logoHref },
				JSX.createElement("img", { src: logoUrl, alt: logoAlt, class: "logo" }),
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
		isModulePage && nsMeta && giDocgenModuleInfo(context, owningModule as DeclarationReflection, nsMeta),
		/* Overview page: References + All Modules */
		!isModulePage &&
			JSX.createElement(
				"nav",
				{ class: "tsd-navigation gi-docgen-sidebar-section" },
				JSX.createElement("h5", { class: "gi-docgen-section-heading" }, "References"),
				JSX.createElement(
					"ul",
					{ class: "tsd-small-nested-navigation gi-docgen-module-list" },
					JSX.createElement(
						"li",
						null,
						JSX.createElement("a", { href: "https://gjs.guide/", target: "_blank" }, "GJS Guide"),
					),
					JSX.createElement(
						"li",
						null,
						JSX.createElement(
							"a",
							{ href: "https://gjs-docs.gnome.org/", target: "_blank" },
							"JavaScript API References",
						),
					),
					JSX.createElement(
						"li",
						null,
						JSX.createElement("a", { href: "https://docs.gtk.org/", target: "_blank" }, "GTK Documentation"),
					),
					JSX.createElement(
						"li",
						null,
						JSX.createElement("a", { href: "https://github.com/gjsify/ts-for-gir", target: "_blank" }, "ts-for-gir"),
					),
				),
			),
		!isModulePage && context.navigation(props),
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
				` v${TSFOR_GIR_VERSION}`,
			),
		),
	);
};
