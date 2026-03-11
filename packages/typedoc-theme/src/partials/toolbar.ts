import type { PageEvent, Reflection } from "typedoc";
import { JSX } from "typedoc";
import type { GiDocgenThemeRenderContext } from "../context.ts";

/**
 * Toolbar: only navigation links and mobile menu trigger.
 * Search is in the sidebar; breadcrumbs come from context.header().
 */
export const giDocgenToolbar = (context: GiDocgenThemeRenderContext, _props: PageEvent<Reflection>) => {
	const navLinks = Object.entries(context.options.getValue("navigationLinks"));
	if (navLinks.length === 0) {
		return JSX.createElement(JSX.Fragment, null);
	}
	return JSX.createElement(
		"div",
		{ id: "tsd-toolbar-links" },
		navLinks.map(([label, url]) => JSX.createElement("a", { href: url }, label)),
	);
};
