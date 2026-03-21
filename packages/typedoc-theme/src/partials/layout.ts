import type { PageEvent, Reflection, RenderTemplate } from "typedoc";
import { JSX } from "typedoc";
import type { GiDocgenThemeRenderContext } from "../context.ts";
import { sanitizeModuleName } from "../search-splitter.ts";
import { findOwningModule, getDisplayName, getHierarchyRoots } from "../utils.ts";

/** Determine which search chunk file to load for this page. */
function getSearchScript(props: PageEvent<Reflection>): string {
	const owningModule = findOwningModule(props.model);
	if (owningModule) {
		return `assets/search-${sanitizeModuleName(owningModule.name)}.js`;
	}
	return "assets/search-modules.js";
}

export const giDocgenLayout = (
	context: GiDocgenThemeRenderContext,
	template: RenderTemplate<PageEvent<Reflection>>,
	props: PageEvent<Reflection>,
) =>
	JSX.createElement(
		"html",
		{ class: "default", lang: context.options.getValue("lang"), "data-base": context.relativeURL("./") },
		JSX.createElement(
			"head",
			null,
			JSX.createElement("meta", { charset: "utf-8" }),
			context.hook("head.begin", context),
			JSX.createElement("meta", { "http-equiv": "x-ua-compatible", content: "IE=edge" }),
			JSX.createElement(
				"title",
				null,
				props.model.isProject()
					? getDisplayName(props.model)
					: `${getDisplayName(props.model)} | ${getDisplayName(props.project)}`,
			),
			JSX.createElement("meta", { name: "description", content: `Documentation for ${props.project.name}` }),
			JSX.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),

			JSX.createElement("link", {
				rel: "icon",
				type: "image/png",
				href: context.relativeURL("assets/favicon-96x96.png", true),
				sizes: "96x96",
			}),
			JSX.createElement("link", {
				rel: "shortcut icon",
				href: context.relativeURL("assets/favicon.ico", true),
			}),
			JSX.createElement("link", {
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: context.relativeURL("assets/apple-touch-icon.png", true),
			}),
			JSX.createElement("meta", { name: "apple-mobile-web-app-title", content: props.project.name || "TS for GIR" }),
			JSX.createElement("link", {
				rel: "manifest",
				href: context.relativeURL("assets/site.webmanifest", true),
			}),

			JSX.createElement("link", { rel: "stylesheet", href: context.relativeURL("assets/style.css", true) }),
			JSX.createElement("link", { rel: "stylesheet", href: context.relativeURL("assets/highlight.css", true) }),
			JSX.createElement("link", { rel: "stylesheet", href: context.relativeURL("assets/gi-docgen.css", true) }),
			context.options.getValue("customCss") &&
				JSX.createElement("link", { rel: "stylesheet", href: context.relativeURL("assets/custom.css", true) }),
			JSX.createElement("script", { defer: true, src: context.relativeURL("assets/main.js", true) }),
			JSX.createElement("script", { defer: true, src: context.relativeURL("assets/gi-docgen-inherited.js", true) }),
			context.options.getValue("customJs") &&
				JSX.createElement("script", { defer: true, src: context.relativeURL("assets/custom.js", true) }),
			JSX.createElement("script", {
				async: true,
				src: context.relativeURL("assets/icons.js", true),
				id: "tsd-icons-script",
			}),
			JSX.createElement("script", {
				async: true,
				src: context.relativeURL(getSearchScript(props), true),
				id: "tsd-search-script",
			}),
			JSX.createElement("script", {
				async: true,
				src: context.relativeURL("assets/navigation.js", true),
				id: "tsd-nav-script",
			}),
			!!getHierarchyRoots(props.project).length &&
				JSX.createElement("script", {
					async: true,
					src: context.relativeURL("assets/hierarchy.js", true),
					id: "tsd-hierarchy-script",
				}),
			context.hook("head.end", context),
		),
		JSX.createElement(
			"body",
			null,
			context.hook("body.begin", context),
			JSX.createElement(
				"script",
				null,
				JSX.createElement(JSX.Raw, {
					html: 'document.documentElement.dataset.theme = localStorage.getItem("tsd-theme") || "os";',
				}),
				JSX.createElement(JSX.Raw, { html: 'document.body.style.display="none";' }),
				JSX.createElement(JSX.Raw, {
					html: 'setTimeout(() => window.app?app.showPage():document.body.style.removeProperty("display"),500)',
				}),
			),

			JSX.createElement(
				"div",
				{ id: "gi-docgen-body-wrapper" },
				JSX.createElement("nav", { id: "gi-docgen-sidebar" }, context.sidebar(props)),
				JSX.createElement(
					"section",
					{ id: "gi-docgen-main" },
					JSX.createElement(
						"div",
						{ class: "gi-docgen-content" },
						context.toolbar(props),
						context.hook("content.begin", context),
						context.header(props),
						template(props),
						context.hook("content.end", context),
						context.footer(),
					),
				),
				JSX.createElement("nav", { id: "gi-docgen-toc" }, context.pageSidebar(props)),
			),

			JSX.createElement("div", { class: "overlay" }),
			context.hook("body.end", context),
		),
	);
