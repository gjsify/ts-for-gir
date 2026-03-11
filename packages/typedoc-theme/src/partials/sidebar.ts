import type { PageEvent, Reflection } from "typedoc";
import { i18n, JSX } from "typedoc";
import type { GiDocgenThemeRenderContext } from "../context.ts";

export const giDocgenSidebar = (context: GiDocgenThemeRenderContext, props: PageEvent<Reflection>) =>
	JSX.createElement(
		JSX.Fragment,
		null,
		context.sidebarLinks(),
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
