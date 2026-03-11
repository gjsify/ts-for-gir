import { JSX } from "typedoc";
import type { GiDocgenThemeRenderContext } from "../context.ts";

export const giDocgenFooter = (context: GiDocgenThemeRenderContext) => {
	const hideGenerator = context.options.getValue("hideGenerator");
	return JSX.createElement(
		"footer",
		{ class: "gi-docgen-footer" },
		!hideGenerator &&
			JSX.createElement(
				"p",
				{ class: "tsd-generator" },
				"Generated using ",
				JSX.createElement("a", { href: "https://typedoc.org/", target: "_blank" }, "TypeDoc"),
				" with ",
				JSX.createElement("a", { href: "https://github.com/gjsify/ts-for-gir", target: "_blank" }, "ts-for-gir"),
			),
	);
};
