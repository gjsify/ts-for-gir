import { NEW_LINE_REG_EXP } from "../constants.ts";

// ---------------------------------------------------------------------------
// Context interface for resolving C identifiers to TypeScript paths
// ---------------------------------------------------------------------------

/**
 * Minimal interface for resolving GIR C identifiers to TypeScript paths.
 * Keeps documentation.ts decoupled from GirModule to avoid circular deps.
 */
export interface GirDocContext {
	/** Resolve a C type name (e.g. "GBinding") to a TS path (e.g. "GObject.Binding"). */
	resolveType(cTypeName: string): string | null;
	/** Resolve a C enum constant (e.g. "G_BINDING_BIDIRECTIONAL") to a TS path (e.g. "GObject.BindingFlags.BIDIRECTIONAL"). */
	resolveConstant(cIdentifier: string): string | null;
}

// ---------------------------------------------------------------------------
// GTK-Doc constant → JavaScript literal mapping
// ---------------------------------------------------------------------------

const JS_LITERAL_MAP: Record<string, string> = {
	NULL: "null",
	TRUE: "true",
	FALSE: "false",
};

// ---------------------------------------------------------------------------
// Main entry points
// ---------------------------------------------------------------------------

/**
 * Transforms GIR documentation text to markdown/TSDoc format.
 *
 * Handles GTK-Doc sigils (%NULL, #GObject, etc.), parameter highlights,
 * code blocks, and function references.
 *
 * @param text The documentation text to transform
 * @param ctx Optional resolver for converting C identifiers to TS {@link} paths
 * @returns The transformed markdown text
 */
export function transformGirDocText(text: string, ctx?: GirDocContext): string {
	text = transformGtkDocMarkers(text, ctx);
	text = transformGirDocHighlights(text);
	text = transformGirDocCodeBlocks(text);
	return text;
}

/**
 * Cleans TSDoc tag text by removing newlines.
 * Used for @param and @returns descriptions in gir-module.ts.
 *
 * Note: GTK-Doc marker transformation is NOT done here because the
 * GirDocContext is not available at tag creation time. Marker transformation
 * is applied later in addGirDocComment() where context is available.
 *
 * @param text The tag text to transform
 * @returns The cleaned text
 */
export function transformGirDocTagText(text: string): string {
	return text.replace(NEW_LINE_REG_EXP, " ");
}

/**
 * Transforms TSDoc tag text with full GTK-Doc marker resolution.
 * Used in addGirDocComment() where both text and context are available.
 *
 * @param text The tag text to transform
 * @param ctx Optional resolver for converting C identifiers to TS {@link} paths
 * @returns The cleaned and transformed text
 */
export function transformGirDocTagTextWithContext(text: string, ctx?: GirDocContext): string {
	text = transformGtkDocMarkers(text, ctx);
	text = transformGirDocHighlights(text);
	return text.replace(NEW_LINE_REG_EXP, " ");
}

// ---------------------------------------------------------------------------
// GTK-Doc marker transformations
// ---------------------------------------------------------------------------

/**
 * Process GTK-Doc markers in order of specificity (like gi-docgen):
 * signals (#T::s) → properties (#T:p) → types (#T) → constants (%C) → functions f()
 */
function transformGtkDocMarkers(text: string, ctx?: GirDocContext): string {
	text = transformSignalRefs(text, ctx);
	text = transformPropertyRefs(text, ctx);
	text = transformTypeRefs(text, ctx);
	text = transformLiterals(text, ctx);
	text = transformFunctionRefs(text);
	return text;
}

// ---------------------------------------------------------------------------
// Individual marker handlers
// ---------------------------------------------------------------------------

/**
 * Convert signal references: #CType::signal-name
 * Signals aren't direct class members in TS, so we use backtick formatting.
 */
function transformSignalRefs(text: string, ctx?: GirDocContext): string {
	return text.replace(/#([A-Z][A-Za-z0-9]+)::([a-z0-9_-]+)/g, (_match, cType, signal) => {
		const resolved = ctx?.resolveType(cType);
		if (resolved) {
			return `\`${resolved}::${signal}\``;
		}
		return `\`${cType}::${signal}\``;
	});
}

/**
 * Convert property references: #CType:prop-name
 * Properties ARE class members in TS, so we use {@link} when resolvable.
 */
function transformPropertyRefs(text: string, ctx?: GirDocContext): string {
	return text.replace(/#([A-Z][A-Za-z0-9]+):([a-z0-9_-]+)/g, (_match, cType, prop) => {
		const resolved = ctx?.resolveType(cType);
		// Convert kebab-case to snake_case for TS property names
		const propName = prop.replace(/-/g, "_");
		if (resolved) {
			return `{@link ${resolved}.${propName}}`;
		}
		return `\`${cType}:${prop}\``;
	});
}

/**
 * Convert type references: #CType → {@link Ns.Type} or `CType`
 * Must run AFTER signal/property refs to avoid partial matches.
 */
function transformTypeRefs(text: string, ctx?: GirDocContext): string {
	return text.replace(/(^|\W)#([A-Z][A-Za-z0-9]+)\b/gm, (_match, prefix, cType) => {
		const resolved = ctx?.resolveType(cType);
		if (resolved) {
			return `${prefix}{@link ${resolved}}`;
		}
		return `${prefix}\`${cType}\``;
	});
}

/**
 * Convert literal/constant references:
 * - %NULL → `null`, %TRUE → `true`, %FALSE → `false`
 * - %G_CONSTANT_NAME → {@link Ns.Enum.MEMBER} or `G_CONSTANT_NAME`
 */
function transformLiterals(text: string, ctx?: GirDocContext): string {
	return text.replace(/(^|\W)%([A-Z][A-Z0-9_]*)\b/gm, (_match, prefix, constant) => {
		// Check for JS literal equivalents first
		const jsLiteral = JS_LITERAL_MAP[constant];
		if (jsLiteral) {
			return `${prefix}\`${jsLiteral}\``;
		}
		// Try to resolve as enum constant
		const resolved = ctx?.resolveConstant(constant);
		if (resolved) {
			return `${prefix}{@link ${resolved}}`;
		}
		return `${prefix}\`${constant}\``;
	});
}

/**
 * Convert C function call references: c_func_name() → `c_func_name()`
 * Only matches lowercase identifiers followed by () to avoid false positives.
 */
function transformFunctionRefs(text: string): string {
	return text.replace(/(^|\s)([a-z][a-z0-9_]*)\(\)/gm, (_match, prefix, func) => {
		return `${prefix}\`${func}()\``;
	});
}

// ---------------------------------------------------------------------------
// Existing transformations (parameter highlights + code blocks)
// ---------------------------------------------------------------------------

/**
 * Replaces "@any_property" with "`any_property`" for GIR parameter references.
 * Skips TSDoc inline tags like {@link ...} by requiring that @ is NOT preceded by {.
 *
 * @param description E.g. "Creates a binding between @source_property on @source and @target_property on @target."
 * @returns E.g. "Creates a binding between `source_property` on `source` and `target_property` on `target`."
 */
function transformGirDocHighlights(description: string): string {
	return description.replace(/(?<!\{)@([A-Za-z_][A-Za-z0-9_]*)/g, "`$1`");
}

/**
 * Replaces GIR code blocks with markdown code fences
 *
 * Replaces:
 * |[<!-- language="C" -->
 *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
 * ]|
 *
 * with:
 * ```c
 *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
 * ```
 *
 * @param description The description containing code blocks
 * @returns The description with markdown code fences
 */
function transformGirDocCodeBlocks(description: string): string {
	description = description
		.replaceAll(/\|\[<!-- language="C" -->/gm, "\n```c") // C-Code
		.replaceAll(/\|\[/gm, "\n```") // Other code
		.replaceAll(/\]\|/gm, "```\n"); // End of code
	return description;
}
