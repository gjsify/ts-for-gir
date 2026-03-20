import {
	type ContainerReflection,
	DeclarationReflection,
	type DocumentReflection,
	JSX,
	type PageEvent,
	ReflectionKind,
	type SignatureReflection,
	type TypeParameterReflection,
	i18n,
} from "typedoc";
import type { GiDocgenThemeRenderContext } from "../context.ts";
import { findCompanionNamespace } from "../utils.ts";
import { getMemberSections, isNoneSection } from "../partials/module-reflection.ts";

// ---------------------------------------------------------------------------
// Reimplemented helpers from TypeDoc's internal lib.tsx
// ---------------------------------------------------------------------------

function hasTypeParameters(
	reflection: ContainerReflection,
): reflection is ContainerReflection & { typeParameters: TypeParameterReflection[] } {
	return (
		reflection instanceof DeclarationReflection &&
		reflection.typeParameters != null &&
		reflection.typeParameters.length > 0
	);
}

function renderIndexSignature(context: GiDocgenThemeRenderContext, index: SignatureReflection): JSX.Element {
	return JSX.createElement(
		"li",
		{ class: "tsd-index-signature" },
		JSX.createElement(
			"div",
			{ class: "tsd-signature" },
			index.flags.isReadonly &&
				JSX.createElement(JSX.Fragment, null, JSX.createElement("span", { class: "tsd-signature-keyword" }, "readonly"), " "),
			JSX.createElement("span", { class: "tsd-signature-symbol" }, "["),
			...(index.parameters ?? []).map((item) =>
				JSX.createElement(
					JSX.Fragment,
					null,
					JSX.createElement("span", null, item.name),
					": ",
					context.type(item.type),
				),
			),
			JSX.createElement("span", { class: "tsd-signature-symbol" }, "]:"),
			" ",
			context.type(index.type),
		),
		context.commentSummary(index),
		context.commentTags(index),
		context.typeDetailsIfUseful(index, index.type),
	);
}

// ---------------------------------------------------------------------------
// Companion namespace section rendering
// ---------------------------------------------------------------------------

function renderCompanionNamespaceSection(
	context: GiDocgenThemeRenderContext,
	companionNs: DeclarationReflection,
): JSX.Element {
	const sections = getMemberSections(companionNs);
	if (!sections.length) return JSX.createElement(JSX.Fragment, null);

	return JSX.createElement(
		JSX.Fragment,
		null,
		...sections.map((section) => {
			const sectionTitle = isNoneSection(section) ? "Type Definitions" : section.title;
			context.page.startNewSection(sectionTitle);

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
					...section.children.map((item: DeclarationReflection | DocumentReflection) =>
						context.moduleMemberSummary(item),
					),
				),
			);

			return JSX.createElement(
				"details",
				{ class: "tsd-panel-group tsd-member-group tsd-accordion", open: true },
				JSX.createElement(
					"summary",
					{ class: "tsd-accordion-summary", "data-key": `section-${sectionTitle}` },
					context.icons.chevronDown(),
					JSX.createElement("h2", null, sectionTitle),
				),
				content,
			);
		}),
	);
}

// ---------------------------------------------------------------------------
// Custom reflection template — extends TypeDoc's default with companion NS
// ---------------------------------------------------------------------------

export function giDocgenReflectionTemplate(
	context: GiDocgenThemeRenderContext,
	props: PageEvent<ContainerReflection>,
): JSX.Element {
	// TypeAlias / Variable → delegate to memberDeclaration
	if (
		props.model.kindOf(ReflectionKind.TypeAlias | ReflectionKind.Variable) &&
		props.model instanceof DeclarationReflection &&
		props.model.type
	) {
		return context.memberDeclaration(props.model);
	}

	// Module / Namespace → delegate to moduleReflection
	if (props.model.kindOf(ReflectionKind.ExportContainer) && (props.model.isDeclaration() || props.model.isProject())) {
		return context.moduleReflection(props.model as DeclarationReflection);
	}

	// Find companion namespace for class pages
	const companionNs =
		props.model instanceof DeclarationReflection ? findCompanionNamespace(props.model) : undefined;

	// Default class/interface rendering (replicates TypeDoc's reflectionTemplate)
	return JSX.createElement(
		JSX.Fragment,
		null,
		// Comment summary + tags
		props.model.hasComment(context.options.getValue("notRenderedTags") as unknown as readonly `@${string}`[]) &&
			JSX.createElement(
				"section",
				{ class: "tsd-panel tsd-comment" },
				context.commentSummary(props.model),
				context.commentTags(props.model),
			),
		// Reflection preview (signature)
		context.reflectionPreview(props.model),
		// Type parameters
		hasTypeParameters(props.model) && context.typeParameters(props.model.typeParameters),
		// Declaration-specific sections
		props.model instanceof DeclarationReflection &&
			JSX.createElement(
				JSX.Fragment,
				null,
				// Type hierarchy
				context.hierarchy(props.model.typeHierarchy),
				// Implements
				!!props.model.implementedTypes &&
					JSX.createElement(
						"section",
						{ class: "tsd-panel" },
						JSX.createElement("h4", null, i18n.theme_implements()),
						JSX.createElement(
							"ul",
							{ class: "tsd-hierarchy" },
							...props.model.implementedTypes.map((item) =>
								JSX.createElement("li", null, context.type(item)),
							),
						),
					),
				// Implemented by
				!!props.model.implementedBy &&
					JSX.createElement(
						"section",
						{ class: "tsd-panel" },
						JSX.createElement("h4", null, i18n.theme_implemented_by()),
						JSX.createElement(
							"ul",
							{ class: "tsd-hierarchy" },
							...props.model.implementedBy.map((item) =>
								JSX.createElement("li", null, context.type(item)),
							),
						),
					),
				// Callable signatures
				!!props.model.signatures?.length &&
					JSX.createElement("section", { class: "tsd-panel" }, context.memberSignatures(props.model)),
				// Index signatures
				!!props.model.indexSignatures?.length &&
					JSX.createElement(
						"section",
						{ class: "tsd-panel" },
						JSX.createElement("h4", { class: "tsd-before-signature" }, i18n.theme_indexable()),
						JSX.createElement(
							"ul",
							{ class: "tsd-signatures" },
							...props.model.indexSignatures.map((index) => renderIndexSignature(context, index)),
						),
					),
				// Member sources
				!props.model.signatures && context.memberSources(props.model),
			),
		// Index + Members
		!!props.model.childrenIncludingDocuments?.length && context.index(props.model),
		context.members(props.model),
		// Companion namespace section (ConstructorProps, SignalSignatures, etc.)
		companionNs && renderCompanionNamespaceSection(context, companionNs),
	);
}
