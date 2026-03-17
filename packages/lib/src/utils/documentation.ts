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
	/** Base URL for gi-docgen content pages (e.g. "https://docs.gtk.org/gtk4/"). */
	docBaseUrl?: string;
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
	text = transformRelativeDocLinks(text, ctx);
	text = transformRelativeImageUrls(text, ctx);
	text = transformClassVfuncRefs(text, ctx);
	text = transformGiDocgenLinks(text);
	text = transformGtkDocMarkers(text, ctx);
	text = transformBacktickTypeRefs(text, ctx);
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
	text = transformRelativeDocLinks(text, ctx);
	text = transformClassVfuncRefs(text, ctx);
	text = transformGiDocgenLinks(text);
	text = transformGtkDocMarkers(text, ctx);
	text = transformBacktickTypeRefs(text, ctx);
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
	text = transformLowercaseCTypeRefs(text, ctx);
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
			const signalKey = signal.replace(/-/g, "_");
			return `{@link ${resolved}.SignalSignatures.${signalKey} | ${resolved}::${signal}}`;
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
 * Known GLib/C primitive type names that should be formatted as code.
 * These don't have underscores, so they need explicit recognition to
 * distinguish them from HTML anchors like #io or #readme.
 */
const GLIB_PRIMITIVES = new Set([
	"gchar",
	"guchar",
	"gboolean",
	"gshort",
	"gushort",
	"gint",
	"guint",
	"glong",
	"gulong",
	"gfloat",
	"gdouble",
	"gint8",
	"guint8",
	"gint16",
	"guint16",
	"gint32",
	"guint32",
	"gint64",
	"guint64",
	"gsize",
	"gssize",
	"goffset",
	"gpointer",
	"gconstpointer",
	"gintptr",
	"guintptr",
]);

/**
 * Convert lowercase C type references: #graphene_frustum_t → {@link Graphene.Frustum}
 *
 * Handles two categories:
 * - Underscore-containing identifiers (e.g. #cairo_surface_t) → resolved or `code`
 * - Known GLib primitives (e.g. #gchar, #gboolean) → `code`
 *
 * Leaves non-C references like #io, #readme unchanged.
 * Must run AFTER transformTypeRefs (uppercase) to avoid conflicts.
 */
function transformLowercaseCTypeRefs(text: string, ctx?: GirDocContext): string {
	return text.replace(/(^|\W)#([a-z][a-z0-9_]+)\b/gm, (match, prefix, cType) => {
		// Try to resolve as a known C type via context
		const resolved = ctx?.resolveType(cType);
		if (resolved) {
			return `${prefix}{@link ${resolved}}`;
		}
		// Format as code if it contains underscores (strong C identifier signal)
		if (cType.includes("_")) {
			return `${prefix}\`${cType}\``;
		}
		// Format known GLib primitives as code
		if (GLIB_PRIMITIVES.has(cType)) {
			return `${prefix}\`${cType}\``;
		}
		// Leave unknown single-word refs unchanged (might be anchors/headings)
		return match;
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
// Relative documentation link resolution
// ---------------------------------------------------------------------------

/**
 * Convert relative gi-docgen HTML links to absolute URLs.
 *
 * GIR docs contain markdown links to gi-docgen content pages like
 * `[coordinate system](coordinates.html)` or `[Widget](class.Widget.html)`.
 * These are converted to absolute URLs when a base URL is available.
 */
function transformRelativeDocLinks(text: string, ctx?: GirDocContext): string {
	const baseUrl = ctx?.docBaseUrl;
	if (!baseUrl) return text;
	return text.replace(
		/\]\(([a-zA-Z][\w.-]*\.html(?:[#?][^\s)]*)?)\)/g,
		(_match, relUrl: string) => `](${baseUrl}${relUrl})`,
	);
}

/**
 * Convert relative image URLs in HTML <img> and <source> tags to absolute URLs.
 *
 * GIR docs contain inline HTML with relative image paths like
 * `<img src="about-dialog.png">` or `<source srcset="about-dialog-dark.png">`.
 * These are converted to absolute URLs when a base URL is available.
 */
function transformRelativeImageUrls(text: string, ctx?: GirDocContext): string {
	const baseUrl = ctx?.docBaseUrl;
	if (!baseUrl) return text;
	// Match src="relative.png" and srcset="relative.png" in HTML tags
	return text.replace(
		/((?:src|srcset)\s*=\s*")([a-zA-Z][\w.-]+\.(?:png|jpg|jpeg|gif|svg|webp))(")/gi,
		(_match, before: string, relUrl: string, after: string) => `${before}${baseUrl}${relUrl}${after}`,
	);
}

// ---------------------------------------------------------------------------
// C class vfunc reference transformations
// ---------------------------------------------------------------------------

/**
 * Convert C class vfunc references to {@link} or cleaned backtick format.
 *
 * Handles patterns from GIR docs (both correct and broken backtick variants):
 * - `` `GtkWidgetClass.snapshot()` `` → {@link Gtk.Widget.snapshot}
 * - `` `GtkWidget`Class.snapshot() `` → {@link Gtk.Widget.snapshot}
 * - `GtkLayoutManagerClass.create_layout_child()` → {@link Gtk.LayoutManager.create_layout_child}
 *
 * Must run BEFORE other transformations to prevent partial matches.
 */
function transformClassVfuncRefs(text: string, ctx?: GirDocContext): string {
	return text.replace(/`([A-Z]\w+)`?Class\.(\w+)\(\)`?/g, (_match, cType: string, method: string) => {
		const resolved = ctx?.resolveType(cType);
		if (resolved) {
			return `{@link ${resolved}.${method}}`;
		}
		return `\`${cType}Class.${method}()\``;
	});
}

// ---------------------------------------------------------------------------
// gi-docgen link transformations
// ---------------------------------------------------------------------------

/** Fragment types that represent types → {@link Ns.Type} */
const TYPE_FRAGMENTS = new Set(["alias", "callback", "class", "const", "iface", "struct", "type"]);

/** Fragment types that represent enumerations (may have member suffix) */
const ENUM_FRAGMENTS = new Set(["enum", "error", "flags"]);

/** Fragment types that represent callable members → {@link Ns.Type.method} */
const CALLABLE_FRAGMENTS = new Set(["method", "ctor", "vfunc", "func"]);

/**
 * Convert gi-docgen link syntax [fragment@Namespace.Type] to TSDoc.
 *
 * Handles all fragment types: alias, callback, class, const, ctor, enum,
 * error, flags, func, id, iface, method, property, signal, struct, type, vfunc.
 *
 * Must run BEFORE transformGtkDocMarkers and transformGirDocHighlights to
 * prevent corruption of the @ symbol inside [fragment@...] patterns.
 */
function transformGiDocgenLinks(text: string): string {
	return text.replace(/\[`?(\w+)@([\w.\-:]+)`?\]/g, (_match, fragment: string, endpoint: string) => {
		// Type references: [class@Gtk.Widget] → {@link Gtk.Widget}
		if (TYPE_FRAGMENTS.has(fragment)) {
			return `{@link ${endpoint}}`;
		}

		// Enum/flags/error: [enum@Gtk.AccessibleRole.window] → {@link Gtk.AccessibleRole.WINDOW}
		if (ENUM_FRAGMENTS.has(fragment)) {
			const parts = endpoint.split(".");
			if (parts.length >= 3) {
				// Last part is enum member — uppercase for TS convention
				const member = parts[parts.length - 1].toUpperCase();
				const typePath = parts.slice(0, -1).join(".");
				return `{@link ${typePath}.${member}}`;
			}
			return `{@link ${endpoint}}`;
		}

		// Signal references: [signal@Gtk.Widget::query-tooltip] → `Gtk.Widget::query-tooltip`
		if (fragment === "signal") {
			return `\`${endpoint}\``;
		}

		// Property references: [property@Gtk.Widget:visible] → {@link Gtk.Widget.visible}
		if (fragment === "property") {
			const colonIdx = endpoint.indexOf(":");
			if (colonIdx !== -1) {
				const typePart = endpoint.substring(0, colonIdx);
				const propPart = endpoint.substring(colonIdx + 1).replace(/-/g, "_");
				return `{@link ${typePart}.${propPart}}`;
			}
			return `\`${endpoint}\``;
		}

		// Method/ctor/vfunc/func: [method@Gtk.Widget.show] → {@link Gtk.Widget.show}
		if (CALLABLE_FRAGMENTS.has(fragment)) {
			return `{@link ${endpoint}}`;
		}

		// id and unknown fragments: [id@gtk_widget_show] → `gtk_widget_show`
		return `\`${endpoint}\``;
	});
}

// ---------------------------------------------------------------------------
// Backtick-wrapped C type name resolution
// ---------------------------------------------------------------------------

/**
 * Convert backtick-wrapped C type references to TSDoc links when resolvable.
 *
 * GIR docs often contain C type names in backticks instead of GTK-Doc `#` notation.
 * Handles three patterns:
 * - `` `GtkWidget` `` → {@link Gtk.Widget}
 * - `` `GtkWidget:visible` `` → {@link Gtk.Widget.visible} (property)
 * - `` `GtkWidget::notify` `` → `Gtk.Widget::notify` (signal, backtick-quoted)
 *
 * Only converts names the resolver recognizes — unknown names keep backtick formatting.
 * Must run AFTER transformGtkDocMarkers (which handles `#CType`) to avoid double-processing.
 */
function transformBacktickTypeRefs(text: string, ctx?: GirDocContext): string {
	if (!ctx) return text;

	// Signal refs: `CType::signal-name` → `Ns.Type::signal-name`
	text = text.replace(/`([A-Z][A-Za-z0-9]+)::([a-z0-9_-]+)`/g, (match, cType: string, signal: string) => {
		const resolved = ctx.resolveType(cType);
		if (resolved) {
			return `\`${resolved}::${signal}\``;
		}
		return match;
	});

	// Property refs: `CType:prop-name` → {@link Ns.Type.prop_name}
	text = text.replace(/`([A-Z][A-Za-z0-9]+):([a-z0-9_-]+)`/g, (match, cType: string, prop: string) => {
		const resolved = ctx.resolveType(cType);
		if (resolved) {
			const propName = prop.replace(/-/g, "_");
			return `{@link ${resolved}.${propName}}`;
		}
		return match;
	});

	// Plain type refs: `CType` → {@link Ns.Type}
	text = text.replace(/`([A-Z][A-Za-z0-9]+)`/g, (match, cType: string) => {
		const resolved = ctx.resolveType(cType);
		if (resolved) {
			return `{@link ${resolved}}`;
		}
		return match;
	});

	return text;
}

// ---------------------------------------------------------------------------
// Existing transformations (parameter highlights + code blocks)
// ---------------------------------------------------------------------------

/**
 * Replaces "@any_property" with "`any_property`" for GIR parameter references.
 * Skips TSDoc inline tags like {@link ...} (@ preceded by {) and any remaining
 * gi-docgen fragments like [enum@...] (@ preceded by word char).
 *
 * @param description E.g. "Creates a binding between @source_property on @source and @target_property on @target."
 * @returns E.g. "Creates a binding between `source_property` on `source` and `target_property` on `target`."
 */
function transformGirDocHighlights(description: string): string {
	return description.replace(/(?<!\{)(?<!\w)@([A-Za-z_][A-Za-z0-9_]*)/g, "`$1`");
}

/**
 * Replaces GIR code blocks with markdown code fences.
 *
 * Handles two formats found in GIR documentation:
 *
 * 1. GTK-Doc style (older):
 *    |[<!-- language="C" -->
 *      g_object_notify_by_pspec (self, properties[PROP_FOO]);
 *    ]|
 *
 * 2. Pandoc-style (newer, e.g. GLib 2.80+):
 *    ``` { .c }
 *      const char *pattern = ".*GLib.*";
 *    ```
 *
 * Both are converted to standard markdown fences, e.g. ```c … ```.
 * The language "plain" is mapped to no language (no syntax highlighting).
 *
 * @param description The description containing code blocks
 * @returns The description with markdown code fences
 */
function transformGirDocCodeBlocks(description: string): string {
	description = description
		// Pandoc-style: ``` { .c } → ```c  (or ``` { .xml } → ```xml etc.)
		.replaceAll(/```\s*\{\s*\.(\w+)[^}]*\}/gm, "```$1")
		// GTK-Doc style with language annotation (generic handler)
		.replaceAll(/\|\[<!-- language="([^"]+)" -->/gm, (_match, lang: string) => {
			if (lang === "plain" || lang === "text") return "\n```";
			return `\n\`\`\`${lang.toLowerCase()}`;
		})
		.replaceAll(/\|\[/gm, "\n```") // GTK-Doc without language
		.replaceAll(/\]\|/gm, "```\n"); // End of GTK-Doc code block
	return description;
}
