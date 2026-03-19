import {
	type ContainerReflection,
	type DeclarationReflection,
	type DocumentReflection,
	JSX,
	type ProjectReflection,
	ReferenceReflection,
	type Reflection,
	ReflectionKind,
} from "typedoc";
import type { GiDocgenThemeRenderContext } from "../context.ts";
import { classNames, type GirNamespaceMetadata, getDisplayName, isCompanionNamespace } from "../utils.ts";

// ---------------------------------------------------------------------------
// Reimplemented helpers from TypeDoc's internal lib.tsx
// ---------------------------------------------------------------------------

export interface MemberSection {
	title: string;
	// biome-ignore lint/suspicious/noExplicitAny: CommentDisplayPart[] from TypeDoc internals
	description?: any;
	children: Array<DocumentReflection | DeclarationReflection>;
}

export function isNoneSection(section: MemberSection): boolean {
	return section.title.toLocaleLowerCase() === "none";
}

function sortNoneSectionFirst(a: MemberSection, b: MemberSection): number {
	if (isNoneSection(a)) return -1;
	if (isNoneSection(b)) return 1;
	return 0;
}

export function getMemberSections(parent: ContainerReflection): MemberSection[] {
	if (parent.categories?.length) {
		return parent.categories
			.filter((cat) => cat.children.length > 0)
			.map((cat) => ({
				title: cat.title,
				description: cat.description,
				children: cat.children,
			}))
			.sort(sortNoneSectionFirst);
	}

	if (parent.groups?.length) {
		return parent.groups
			.flatMap((group) => {
				if (group.categories?.length) {
					return group.categories
						.slice()
						.sort(sortNoneSectionFirst)
						.filter((cat) => cat.children.length > 0)
						.map((cat) => ({
							title: isNoneSection(cat) ? group.title : `${group.title} - ${cat.title}`,
							description: cat.description,
							children: cat.children,
						}));
				}
				if (!group.children.length) return [];
				return [
					{
						title: group.title,
						description: group.description,
						children: group.children,
					},
				];
			})
			.sort(sortNoneSectionFirst);
	}

	if (parent.children?.length) {
		return [{ title: "none", children: parent.children }];
	}

	return [];
}

// ---------------------------------------------------------------------------
// Categorized project homepage
// ---------------------------------------------------------------------------

const CATEGORY_ORDER = [
	"GJS Core",
	"GLib",
	"GTK 4",
	"GTK 3",
	"Pango",
	"Graphics",
	"Text Rendering",
	"Multimedia",
	"Web",
	"GNOME Libraries",
];

export function renderCategorizedProject(
	context: GiDocgenThemeRenderContext,
	mod: DeclarationReflection | ProjectReflection,
	children: DeclarationReflection[],
): JSX.Element {
	// Group children by category from girNamespaceMetadata
	const grouped = new Map<string, DeclarationReflection[]>();
	for (const child of children) {
		const nsMeta = (child as unknown as { girNamespaceMetadata?: GirNamespaceMetadata }).girNamespaceMetadata;
		const cat = nsMeta?.category || "Other";
		const existing = grouped.get(cat);
		if (existing) existing.push(child);
		else grouped.set(cat, [child]);
	}

	// Sort categories: defined order first, then any remaining
	const sortedCategories = [
		...CATEGORY_ORDER.filter((c) => grouped.has(c)),
		...Array.from(grouped.keys()).filter((c) => !CATEGORY_ORDER.includes(c)),
	];

	return JSX.createElement(
		JSX.Fragment,
		null,
		// Comment summary + tags
		mod.hasComment(context.options.getValue("notRenderedTags") as unknown as readonly `@${string}`[]) &&
			JSX.createElement(
				"section",
				{ class: "tsd-panel tsd-comment" },
				context.commentSummary(mod),
				context.commentTags(mod),
			),
		// Categorized module sections
		...sortedCategories.map((category) => {
			const categoryChildren = grouped.get(category) ?? [];
			context.page.startNewSection(category);
			return JSX.createElement(
				"details",
				{ class: "tsd-panel-group tsd-member-group tsd-accordion", open: true },
				JSX.createElement(
					"summary",
					{ class: "tsd-accordion-summary", "data-key": `section-${category}` },
					context.icons.chevronDown(),
					JSX.createElement("h2", null, category),
				),
				JSX.createElement(
					"dl",
					{ class: "tsd-member-summaries" },
					...categoryChildren.map((item) => context.moduleMemberSummary(item)),
				),
			);
		}),
	);
}

// ---------------------------------------------------------------------------
// Module reflection override: metadata → members → README (at bottom)
// ---------------------------------------------------------------------------

export function giDocgenModuleReflection(
	context: GiDocgenThemeRenderContext,
	mod: DeclarationReflection | ProjectReflection,
): JSX.Element {
	// Redirect companion namespace pages to the class page
	if (mod.isDeclaration() && isCompanionNamespace(mod as DeclarationReflection)) {
		const parent = mod.parent;
		const siblings = parent && "children" in parent ? (parent as DeclarationReflection).children : undefined;
		const companionClass = siblings?.find(
			(child) => child !== mod && child.kindOf(ReflectionKind.Class) && child.name === mod.name,
		);
		if (companionClass) {
			const classUrl = context.urlTo(companionClass);
			return JSX.createElement(
				JSX.Fragment,
				null,
				JSX.createElement(
					"p",
					null,
					"This namespace is a companion to the ",
					JSX.createElement("a", { href: classUrl }, companionClass.name),
					" class. See the class page for full documentation.",
				),
				JSX.createElement(
					"script",
					null,
					JSX.createElement(JSX.Raw, { html: `window.location.replace("${classUrl}");` }),
				),
			);
		}
	}

	// For the project homepage, group modules by category
	if (mod.isProject()) {
		const children = (mod as ProjectReflection).children ?? [];
		return renderCategorizedProject(context, mod, children);
	}

	// Filter companion namespaces from member sections
	const sections = getMemberSections(mod)
		.map((section) => ({
			...section,
			children: section.children.filter(
				(child) => !child.isDeclaration() || !isCompanionNamespace(child as DeclarationReflection),
			),
		}))
		.filter((section) => section.children.length > 0);

	return JSX.createElement(
		JSX.Fragment,
		null,
		// 1. Comment summary + tags
		mod.hasComment(context.options.getValue("notRenderedTags") as unknown as readonly `@${string}`[]) &&
			JSX.createElement(
				"section",
				{ class: "tsd-panel tsd-comment" },
				context.commentSummary(mod),
				context.commentTags(mod),
			),
		// 2. Member sections (namespaces, references, etc.)
		...sections.map((section) => {
			if (!isNoneSection(section)) {
				context.page.startNewSection(section.title);
			}

			const content = JSX.createElement(
				JSX.Fragment,
				null,
				section.description &&
					JSX.createElement(
						"div",
						{ class: "tsd-comment tsd-typography" },
						JSX.createElement(JSX.Raw, { html: context.markdown(section.description) }),
					),
				JSX.createElement(
					"dl",
					{ class: "tsd-member-summaries" },
					...section.children.map((item) => context.moduleMemberSummary(item)),
				),
			);

			if (isNoneSection(section)) {
				return JSX.createElement("section", { class: "tsd-panel-group tsd-member-group" }, content);
			}

			return JSX.createElement(
				"details",
				{ class: "tsd-panel-group tsd-member-group tsd-accordion", open: true },
				JSX.createElement(
					"summary",
					{ class: "tsd-accordion-summary", "data-key": `section-${section.title}` },
					context.icons.chevronDown(),
					JSX.createElement("h2", null, section.title),
				),
				content,
			);
		}),
		// 3. README content — rendered at the bottom in a collapsible section
		mod.isDeclaration() &&
			mod.kind === ReflectionKind.Module &&
			!!mod.readme?.length &&
			(() => {
				const readmeTitle = "Readme";
				context.page.startNewSection(readmeTitle);
				return JSX.createElement(
					"details",
					{ class: "tsd-panel-group tsd-member-group tsd-accordion", open: true },
					JSX.createElement(
						"summary",
						{ class: "tsd-accordion-summary", "data-key": `section-${readmeTitle}` },
						context.icons.chevronDown(),
						JSX.createElement("h2", null, readmeTitle),
					),
					JSX.createElement(
						"section",
						{ class: "tsd-panel tsd-typography" },
						JSX.createElement(JSX.Raw, { html: context.markdown(mod.readme) }),
					),
				);
			})(),
	);
}

// ---------------------------------------------------------------------------
// moduleMemberSummary — reimplemented from TypeDoc's moduleReflection.tsx
// ---------------------------------------------------------------------------

function uniqueName(context: GiDocgenThemeRenderContext, reflection: Reflection): JSX.Element {
	const parts: JSX.Element[] = [];
	let current: Reflection | undefined = reflection;
	const seen: Reflection[] = [];
	while (current && !current.isProject()) {
		seen.push(current);
		current = current.parent;
	}
	seen.reverse();
	for (let i = 0; i < seen.length; i++) {
		if (i > 0) parts.push(JSX.createElement(JSX.Fragment, null, "."));
		const item = seen[i];
		parts.push(
			JSX.createElement(
				"a",
				{
					href: context.urlTo(item),
					class: classNames({ deprecated: item.isDeprecated() }),
				},
				item.name,
			),
		);
	}
	return JSX.createElement(JSX.Fragment, null, ...parts);
}

export function giDocgenModuleMemberSummary(
	context: GiDocgenThemeRenderContext,
	member: DeclarationReflection | DocumentReflection,
): JSX.Element {
	const id = member.isReference()
		? (context.getAnchor(member) ?? context.slugger.slug(member.name))
		: context.slugger.slug(member.name);
	context.page.pageHeadings.push({
		link: `#${id}`,
		text: getDisplayName(member),
		kind: member instanceof ReferenceReflection ? member.getTargetReflectionDeep().kind : member.kind,
		classes: context.getReflectionClasses(member),
		icon: context.theme.getReflectionIcon(member),
	});

	let name: JSX.Element;
	if (member instanceof ReferenceReflection) {
		const target = member.getTargetReflectionDeep();
		name = JSX.createElement(
			"span",
			{ class: "tsd-member-summary-name" },
			context.reflectionIcon(target),
			JSX.createElement("span", { class: classNames({ deprecated: member.isDeprecated() }) }, member.name),
			JSX.createElement("span", null, " \u2192 "),
			uniqueName(context, target),
			JSX.createElement(
				"a",
				{ href: `#${id}`, "aria-label": "Permalink", class: "tsd-anchor-icon" },
				JSX.createElement(
					"svg",
					{ viewBox: "0 0 24 24", "aria-hidden": "true" },
					JSX.createElement("use", { href: `${context.relativeURL("assets/icons.svg", true)}#icon-anchor` }),
				),
			),
		);
	} else {
		name = JSX.createElement(
			"span",
			{ class: "tsd-member-summary-name" },
			context.reflectionIcon(member),
			JSX.createElement(
				"a",
				{ class: classNames({ deprecated: member.isDeprecated() }), href: context.urlTo(member) },
				member.name,
			),
			JSX.createElement(
				"a",
				{ href: `#${id}`, "aria-label": "Permalink", class: "tsd-anchor-icon" },
				JSX.createElement(
					"svg",
					{ viewBox: "0 0 24 24", "aria-hidden": "true" },
					JSX.createElement("use", { href: `${context.relativeURL("assets/icons.svg", true)}#icon-anchor` }),
				),
			),
		);
	}

	// Description: prefer TSDoc comment summary, fallback to girNamespaceMetadata.description
	const nsMeta = (member as unknown as { girNamespaceMetadata?: GirNamespaceMetadata }).girNamespaceMetadata;
	const commentSummary = context.commentShortSummary(member);
	const description = commentSummary || (nsMeta?.description ? JSX.createElement("p", null, nsMeta.description) : null);

	return JSX.createElement(
		JSX.Fragment,
		null,
		JSX.createElement(
			"dt",
			{ class: classNames({ "tsd-member-summary": true }, context.getReflectionClasses(member)), id },
			name,
		),
		JSX.createElement(
			"dd",
			{ class: classNames({ "tsd-member-summary": true }, context.getReflectionClasses(member)) },
			description,
		),
	);
}
