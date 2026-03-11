import type { PageEvent, PageHeading, Reflection } from "typedoc";
import { i18n, JSX } from "typedoc";
import type { GiDocgenThemeRenderContext } from "../context.ts";
import { classNames, wbr } from "../utils.ts";

function buildSectionNavigation(context: GiDocgenThemeRenderContext, headings: PageHeading[]) {
	const levels: JSX.Element[][] = [[]];

	function finalizeLevel(finishedHandlingHeadings: boolean) {
		const level = levels.pop() as JSX.Element[];
		if (levels[levels.length - 1].length === 0 && finishedHandlingHeadings) {
			levels[levels.length - 1] = level;
			return;
		}
		const built = JSX.createElement(
			"ul",
			null,
			level.map((l) => JSX.createElement("li", null, l)),
		);
		levels[levels.length - 1].push(built);
	}

	function getInferredHeadingLevel(heading: PageHeading) {
		if (heading.level) return heading.level + 2;
		if (heading.kind) return 2;
		return 1;
	}

	for (const heading of headings) {
		const inferredLevel = getInferredHeadingLevel(heading);
		while (inferredLevel < levels.length) {
			finalizeLevel(false);
		}
		while (inferredLevel > levels.length) {
			levels.push([]);
		}
		levels[levels.length - 1].push(
			JSX.createElement(
				"a",
				{ href: heading.link, class: classNames({}, heading.classes) },
				heading.icon && (context.icons as Record<string, () => JSX.Element>)[heading.icon]?.(),
				JSX.createElement("span", null, wbr(heading.text)),
			),
		);
	}

	while (levels.length > 1) {
		finalizeLevel(true);
	}
	levels.unshift([]);
	finalizeLevel(true);
	return levels[0];
}

export const giDocgenPageNavigation = (context: GiDocgenThemeRenderContext, props: PageEvent<Reflection>) => {
	if (!props.pageSections.some((sect) => sect.headings.length)) {
		return JSX.createElement(JSX.Fragment, null);
	}

	const sections: JSX.Children = [];
	for (const section of props.pageSections) {
		if (section.title) {
			sections.push(
				JSX.createElement(
					"details",
					{ open: true, class: "tsd-accordion tsd-page-navigation-section" },
					JSX.createElement(
						"summary",
						{ class: "tsd-accordion-summary", "data-key": `section-${section.title}` },
						context.icons.chevronDown(),
						section.title,
					),
					JSX.createElement("div", null, buildSectionNavigation(context, section.headings)),
				),
			);
		} else {
			sections.push(buildSectionNavigation(context, section.headings));
		}
	}

	return JSX.createElement(
		"details",
		{ open: true, class: "tsd-accordion tsd-page-navigation" },
		JSX.createElement(
			"summary",
			{ class: "tsd-accordion-summary" },
			context.icons.chevronDown(),
			JSX.createElement("h3", null, i18n.theme_on_this_page()),
		),
		JSX.createElement("div", { class: "tsd-accordion-details" }, sections),
	);
};
