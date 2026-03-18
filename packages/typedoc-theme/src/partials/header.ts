import type { PageEvent, Reflection } from "typedoc";
import { JSX, ReflectionKind } from "typedoc";
import type { GiDocgenThemeRenderContext } from "../context.ts";
import {
	type GirNamespaceMetadata,
	getGirNamespaceMetadata,
	getGirTypeFromComment,
	girKindInfoFromTag,
	shouldShowGirParenthetical,
} from "../utils.ts";

/** Helper: create a table row with label and value. */
function metaRow(label: string, value: JSX.Element | string): JSX.Element {
	return JSX.createElement(
		"tr",
		null,
		JSX.createElement("td", null, JSX.createElement("em", null, label)),
		JSX.createElement("td", null, value),
	);
}

/** Helper: create a linked table row. */
function metaLinkRow(label: string, url: string): JSX.Element {
	return metaRow(label, JSX.createElement("a", { href: url, target: "_blank" }, url));
}

/** Render metadata info block for module pages, consistent with sidebar and gi-docgen style. */
function renderModuleMetadata(
	context: GiDocgenThemeRenderContext,
	nsMeta: GirNamespaceMetadata,
	packageVersion?: string,
): JSX.Element {
	const tableRows: JSX.Element[] = [];
	if (nsMeta.version) tableRows.push(metaRow("API Version", nsMeta.version));
	if (nsMeta.libraryVersion) tableRows.push(metaRow("Library Version", nsMeta.libraryVersion));
	if (packageVersion && packageVersion !== nsMeta.libraryVersion) {
		tableRows.push(metaRow("Package Version", packageVersion));
	}

	if (nsMeta.license) tableRows.push(metaRow("License", nsMeta.license));
	if (nsMeta.websiteUrl) tableRows.push(metaLinkRow("Website", nsMeta.websiteUrl));
	if (nsMeta.cDocsUrl) tableRows.push(metaLinkRow("Original Docs", nsMeta.cDocsUrl));

	// Dependencies — as comma-separated links in a single table row
	if (nsMeta.dependencies.length > 0) {
		const depElements = nsMeta.dependencies.map((dep, i) => {
			const depName = `${dep.namespace}-${dep.version}`;
			const depMod = context.page.project.children?.find(
				(c) => c.name === depName || c.name === `@girs/${depName.toLowerCase()}`,
			);
			const link = depMod
				? JSX.createElement("a", { href: context.urlTo(depMod) }, `${dep.namespace} ${dep.version}`)
				: JSX.createElement(JSX.Fragment, null, `${dep.namespace} ${dep.version}`);
			return JSX.createElement(JSX.Fragment, null, i > 0 && ", ", link);
		});
		tableRows.push(metaRow("Dependencies", JSX.createElement(JSX.Fragment, null, ...depElements)));
	}

	return JSX.createElement(
		"div",
		{ class: "gi-docgen-module-metadata" },
		nsMeta.description && JSX.createElement("p", { class: "gi-docgen-meta-description" }, nsMeta.description),
		JSX.createElement("table", null, JSX.createElement("tbody", null, ...tableRows)),
	);
}

/** Strip NPM scope prefix from a package name, e.g. "@girs/glib-2.0" → "glib-2.0". */
function stripScope(name: string): string {
	return name.replace(/^@[^/]+\//, "");
}

/** Render a reflection's display name (scope prefix stripped if requested). */
function renderReflName(refl: Reflection, stripScopePrefix = false): JSX.Element {
	let name = refl.name === "default" ? "default" : refl.name;
	if (stripScopePrefix && name.startsWith("@")) name = stripScope(name);
	return JSX.createElement(JSX.Fragment, null, name);
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

	// Append GIR kind in parentheses when it differs from the TypeScript kind,
	// e.g. "Class (Struct)" for a GIR record exposed as a TS class.
	if (kindString) {
		const girType = getGirTypeFromComment(props.model);
		if (girType) {
			const girInfo = girKindInfoFromTag(girType);
			if (girInfo && shouldShowGirParenthetical(kindString, girInfo.label)) {
				kindString = `${kindString} (${girInfo.label})`;
			}
		}
	}

	// Build full breadcrumb path (same as TypeDoc's breadcrumb: walk up until no parent, exclude root project)
	const path: Reflection[] = [];
	let refl: Reflection = props.model;
	while (refl.parent) {
		path.push(refl);
		refl = refl.parent;
	}
	path.reverse(); // now [topModule, ..., currentItem]

	// Show metadata info block on module pages (between header and README)
	const isModulePage =
		!props.model.isProject() && props.model.kindOf(ReflectionKind.Module) && !props.model.parent?.parent;
	const nsMeta = isModulePage ? getGirNamespaceMetadata(props.model) : undefined;

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
									? renderReflName(r, true)
									: JSX.createElement("a", { href: url }, renderReflName(r, true)),
							);
						})
					: renderReflName(props.model),
				context.reflectionFlags(props.model),
			),
		nsMeta &&
			renderModuleMetadata(
				context,
				nsMeta,
				(props.model as unknown as { packageVersion?: string }).packageVersion || nsMeta.packageVersion,
			),
	);
};
