/**
 * Build the GIR-derived widget VOCABULARY for one namespace.
 *
 * What this is for, in one line: a renderer that builds GTK trees needs to know,
 * per widget, which properties are settable, which of them can only be set at
 * construction, what strings an enum property accepts, and which methods might
 * adopt a child. None of that is about any particular UI framework, and all of it
 * is in the GIR — so it belongs here, next to the types, and not in each renderer.
 *
 * WHY NOT `X.ConstructorProps`, which already exists. It is the wrong shape on
 * three axes and the first is a correctness bug:
 *
 *  - It offers READ-ONLY properties as settable. Measured on Gtk-4.0: 150 read-only
 *    property declarations across 68 classes, all present in `ConstructorProps` —
 *    `Gtk.Widget` alone contributes `has_default`, `has_focus`, `parent`, `root`
 *    and `scale_factor`. GTK's failure mode for writing one is exit 0: no throw, no
 *    warning, the value silently discarded.
 *  - Its members are REQUIRED, so every consumer wraps it in `Partial<>`.
 *  - It spells snake_case and camelCase and never the name GObject actually
 *    registered. `g_object_set(o, "top-bar-style", …)`, GtkBuilder XML and
 *    Blueprint all want the dashed spelling, and nothing in `@girs/*` had it.
 *
 * WHAT IS DELIBERATELY NOT HERE: tag spellings, `on<Signal>` handler prop names,
 * `JSX.IntrinsicElements`, a Vue `GlobalComponents` interface, camelCase property
 * keys. Each of those is a DIALECT — every framework answers it differently, and a
 * JSX namespace in particular is a GLOBAL declaration, so two consumers declaring
 * one is a merge rather than two dialects. The vocabulary ships; the dialect stays
 * with the consumer.
 *
 * Signal handler types are not re-derived either: `X.SignalSignatures` is already
 * emitted for every class, inheriting the parent chain and every implemented
 * interface with `notify::<prop>` keys included, so the widget map POINTS AT it.
 */

import {
	ArrayType,
	type Generic,
	GenericType,
	type GirModule,
	IntrospectedClass,
	IntrospectedEnum,
	IntrospectedInterface,
	type IntrospectedBaseClass,
	type IntrospectedProperty,
	NativeType,
	NullType,
	type OptionsGeneration,
	OrType,
	TypeIdentifier,
	type TypeExpression,
} from "@ts-for-gir/lib";
import { type AriaValueTypes, buildAriaValueTypes } from "./aria.ts";
import { VocabularyError } from "./errors.ts";

/** The GType every widget descends from. Matched by GType, so Gtk-3.0 qualifies too. */
const WIDGET_ROOT_GTYPE = "GtkWidget";

/**
 * A property whose printed type accepts no value at all.
 *
 * There are three ways a property can end up unusable, and they have three different
 * fixes, so the provenance line keeps them apart. A RESOLVABLE type TypeScript cannot
 * express is this one: `GcrTreeSelector:columns` is a writable `gpointer` and
 * `GimpDialog:help-func` is a C callback, and the model prints both as `never` on purpose
 * — a caller cannot pass one from GJS either. An identifier the model cannot resolve
 * ACROSS namespaces is the second, and it is named in `unresolvedProps` instead. An
 * identifier it cannot resolve WITHIN one namespace is the third, and it is a defect in
 * that GIR or in this generator, so {@link printPropType} throws. See there.
 *
 * So `never` stays in the interface rather than being dropped (dropping shrinks the
 * vocabulary by a property nobody would notice was missing, and the name is still a
 * real writable ParamSpec a consumer's runtime check must find in `OWN_PROPS`), and
 * every occurrence is NAMED in the provenance line.
 *
 * No count is written down here, deliberately. The first pass measured five namespaces
 * and said "two"; widening to fourteen said four; widening to forty-four found more than
 * twenty, eleven of them on `AgsGui.Cartesian` alone — a widget that loses most of its
 * settable properties and, before the provenance line existed, said nothing about it.
 * Any number here is a number that is already wrong.
 *
 * The RULE does not drift, and it is the useful half: every case measured is a writable
 * `gpointer` — `GcrTreeSelector:columns`, `Gtk.Object:user-data`, `Gtk.Notebook:group`,
 * `Wnck.ActionMenu:window`, `Phosh.LayerSurface:wl-output` — plus one C callback,
 * `GimpDialog:help-func`. Nothing EXPRESSIBLE is being flattened. Each surface names its
 * own in its own provenance line, which is the answer that cannot go stale, and is what
 * makes the next one a diff instead of a property that silently stopped taking values.
 */
const acceptsNothing = (ts: string): boolean => /\bnever\b/.test(ts);

export interface VocabularyProp {
	/** The name GObject registered — `icon-name`, dashed. */
	readonly girName: string;
	/**
	 * The GType of this property's enum or bitfield type, where it has one.
	 *
	 * The join a host without GI cannot make for itself: it knows a property name and a nick
	 * and needs a number, `ENUM_VALUES` is keyed by ENUM GType, and nothing else says which
	 * enum a property is. Deriving it by searching the nick lists is not available — `never`
	 * is a member of several Gtk enums, and picking between them is a wrong number rather than
	 * a missing one.
	 */
	readonly enumType?: string;
	/**
	 * The GType of this property's own type, enum-typed or not.
	 *
	 * The join {@link VocabularyProp.enumType} makes for one kind of type, made for every kind:
	 * a host that has to infer a type FROM a property — Blueprint does it in two positions, the
	 * middle of an uncast lookup chain and an uncast closure's return type — needs the GType of
	 * `GtkLabel:label` as much as of `GtkLabel:justify`, and only the second was ever carried.
	 *
	 * Absent means this generator can state none: the GIR names a fundamental spelling outside
	 * {@link FUNDAMENTAL_GTYPES}, or a registered type with no `glib:type-name`, or the property
	 * has no `<type>` child at all. Absence is therefore readable as "unknown", which is the one
	 * thing it must not be confused with — a scalar property whose row were simply left out
	 * would be indistinguishable from a type nobody could resolve.
	 */
	readonly gtype?: string;
	readonly ts: string;
	/**
	 * The identifiers the printed type could not resolve, where it holds `never` for that
	 * reason rather than because nothing in TypeScript satisfies the type. See
	 * {@link printPropType}; the provenance line separates the two.
	 */
	readonly unresolvedTypes?: readonly string[];
	readonly constructOnly: boolean;
	readonly since?: string;
	readonly doc?: string;
	readonly deprecated: boolean;
	/** Upstream's reason and version, rendered as `@deprecated since X: reason`. */
	readonly deprecatedSince?: string;
	readonly deprecatedDoc?: string;
	/** GIR's `default-value`. The vocabulary is where a JSX or template author hovers. */
	readonly defaultValue?: string;
}

export interface VocabularyDecl {
	/** `Gtk.Box` — the key the graph is walked on, the way GIR references. */
	readonly key: string;
	readonly namespace: string;
	readonly local: string;
	readonly gtype: string;
	/** This surface emits the interface — its own declaration, or an inlined foreign one. */
	readonly emitted: boolean;
	/**
	 * Emitted here despite belonging to another namespace, because that namespace has no
	 * surface of its own to import it from. See {@link buildWidgetVocabulary}.
	 */
	readonly inlined: boolean;
	readonly bases: readonly string[];
	readonly props: readonly VocabularyProp[];
	/**
	 * The signals THIS declaration registers, dashed as GObject spells them.
	 *
	 * Keyed per declaration for the same reason {@link VocabularyDecl.props} is: `DECLS`
	 * publishes a chain, and a consumer unions the chain's entries to answer "what can I
	 * connect to on a `GtkButton`". The first version keyed signals by CONCRETE WIDGET
	 * instead, which dropped every signal an abstract base owns without saying so —
	 * measured on Gtk-4.0, where `GtkWidget` registers 13 (`destroy`, `map`, `realize`,
	 * `unrealize`, `show`, `state-flags-changed`, …): all 53 widgets in the namespace were
	 * missing all 13, while `OWN_PROPS` had carried `GtkWidget`'s properties all along.
	 * The two halves of one vocabulary disagreed about which GTypes it describes.
	 *
	 * INTERFACE signals are here too, and were not always: until `IntrospectedInterface`
	 * learned to read `<glib:signal>`, `Gtk.Editable::changed`, `Gtk.CellEditable::editing-done`,
	 * `Gtk.ColorChooser::color-activated` and `Gtk.FontChooser::font-activated` — 7 signals over
	 * 4 interfaces in Gtk-4.0 — reached neither this vocabulary nor the main `.d.ts`. Through
	 * `implements` that was 41 handler slots across 17 concrete widget types, `gtk-entry`'s
	 * `changed` among them. The chain in `DECLS` already carried the interfaces, so a consumer
	 * unioning it got the right answer the moment the model had the data.
	 */
	readonly signals: readonly string[];
	/**
	 * The release that introduced the TYPE itself — GIR's `version` on `<class>`/`<interface>`.
	 *
	 * Absent where the GIR states none, and never inferred: a wrong version here is worse
	 * than no version, because the whole point of the value is to let a consumer forgive
	 * an absence, and a forgiven absence that is actually a defect is a defect that stops
	 * being reported.
	 */
	readonly since?: string;
	readonly doc?: string;
}

export interface VocabularyWidget {
	readonly key: string;
	readonly namespace: string;
	readonly local: string;
	readonly gtype: string;
	/** Slot name -> the method that might adopt a child there. Candidates only. */
	readonly slotCandidates: ReadonlyMap<string, string>;
}

export interface VocabularyEnum {
	readonly gtype: string;
	/** `Gtk.Orientation` as the surface spells it. */
	readonly reference: string;
	readonly nicks: readonly string[];
	/**
	 * Nick -> the integer GObject registers for it, straight from GIR's `value`.
	 *
	 * Position in `nicks` is NOT this number and never was. Counting is wrong on 6 of the
	 * 137 enums a GTK 4 vocabulary carries -- 112 in Gtk-4.0 and 25 in Adw-1 -- and
	 * `GtkConstraintStrength.required` is why
	 * "off by one" is the wrong mental model for it: counting answers 0 where the library
	 * means 1001001000.
	 */
	readonly values: ReadonlyMap<string, number>;
	/**
	 * The nicks GIR marks `deprecated="1"`.
	 *
	 * NOT "the alias halves": the flag and the alias are independent, and measured over the
	 * 718 GIRs they barely meet. Four registered-enum members carry the flag at all --
	 * `GtkAlign.baseline`, `GstValidateActionReturn.interlaced`, `NotifyClosedReason.undefiend`
	 * and `FolksIndividualAggregatorError.no-writeable-store`, the last of which shares its
	 * value with nothing -- while 179 of the 182 value-sharing pairs carry it on NEITHER half.
	 * So an absent entry means "GIR does not say", never "this is the current name".
	 */
	readonly deprecated: readonly string[];
	/** Nick -> the raw GIR `value` for the members no number could be read from. */
	readonly unreadable: ReadonlyMap<string, string>;
}

/**
 * One registered, non-flag enum as the vocabulary carries it.
 *
 * Both callers below build the same entry from the same members, so they build it here:
 * the runtime table and the nick union describe one enum, and two constructions of it
 * would be two answers with nothing comparing them.
 */
function vocabularyEnumOf(gtype: string, reference: string, enumeration: IntrospectedEnum): VocabularyEnum {
	const members = [...enumeration.members.values()];
	const values = new Map<string, number>();
	const unreadable = new Map<string, string>();
	for (const member of members) {
		const value = member.numericValue;
		if (value === null) unreadable.set(member.nick, member.value);
		else values.set(member.nick, value);
	}
	return {
		gtype,
		reference,
		nicks: members.map((member) => member.nick),
		values,
		deprecated: members.filter((member) => member.deprecated).map((member) => member.nick),
		unreadable,
	};
}

/** Where a vocabulary came from, in a shape a check can read. */
export interface VocabularyProvenance {
	readonly namespace: string;
	readonly version: string;
	/** The version the LIBRARY states, or null where it states none — never the namespace's. */
	readonly libraryVersion: string | null;
	readonly childHolders: number;
	readonly droppedBases: readonly string[];
	readonly inlinedBases: readonly string[];
	readonly unsettableProps: readonly string[];
	readonly unresolvedProps: readonly string[];
	/**
	 * `c:identifier-prefixes` from the GIR, verbatim and in order.
	 *
	 * The C prefix of a namespace is the missing half of a type REFERENCE. A consumer that
	 * resolves `Gio.Icon` has to produce `GIcon`, and nothing else in this package says that
	 * `Gio` spells itself `G`: not the package name (`@girs/gtksource-5` is `GtkSource`), not
	 * `namespace`, not a GType key. Until the namespace gate widened, the only vocabularies
	 * that existed were ones a consumer could hard-code, so the fact was never missed.
	 *
	 * It is carried rather than derived because GIR carries it. Deriving it — longest common
	 * prefix over the `DECLS` keys — is what a consumer reaches for next, and it is wrong
	 * wherever the C prefix is not a prefix of the type NAMES. Read straight off the shipped
	 * vocabularies: `gdkx11-4.0` and `gdkwayland-4.0` both state `Gdk` while every one of
	 * their `DECLS` keys begins `GdkX11`/`GdkWayland`; `gstgl-1.0` and `gstva-1.0` state
	 * `Gst` against keys beginning `GstGL`/`GstVa`. None of those was reachable while 142
	 * namespaces emitted; all four are now, which is why this ships with the gate.
	 *
	 * A LIST, not a string, because the attribute is comma-separated and 20 of the 627
	 * emitting namespaces state more than one (`camel-1.2` is `Camel,camel`, `ecal-2.0` is
	 * `ECal,E`) — which no single-string derivation can express at all. Empty where the GIR states none — silence,
	 * not a default: inventing `namespace` here would hand a consumer a confident wrong
	 * answer in place of a missing one.
	 */
	readonly identifierPrefixes: readonly string[];
	/**
	 * Sibling vocabularies this one's DECLARATIONS come from, as import specifiers.
	 *
	 * The other half of the division this file makes between carrying a fact and importing
	 * it, and it exists because the two halves fail differently. A `PROP_ENUMS` row naming a
	 * GType whose numbers live elsewhere fails INVISIBLY: the row says `GdkGLAPI` and nothing
	 * says which package holds it, and a `.ui` file instantiating a `GtkGLArea` never names
	 * `Gdk`, so no consumer rule reaches it. Those numbers are therefore CARRIED — see
	 * {@link WidgetVocabulary.foreignEnums}.
	 *
	 * A declaration is the opposite: `DECLS` NAMES the foreign link (`GtkApplication` chains
	 * through `GApplication`), so the gap is visible — but not attributable, because a link
	 * with no `OWN_PROPS` row reads the same whether it has no settable property or lives in
	 * a package the consumer has not loaded. `GtkSeparator` is the first, `GApplication` the
	 * second, and this list is what tells them apart. Measured on gtk-4.0 + adw-1: 9 chain
	 * links became foreign and 2 of them carry properties, 21 property slots in total.
	 *
	 * Import specifiers, not namespace names, because that is what a consumer has to act on.
	 */
	readonly requiredVocabularies: readonly string[];
}

export interface WidgetVocabulary {
	readonly namespace: string;
	readonly version: string;
	readonly importName: string;
	readonly provenance: string;
	/**
	 * The same facts, structured.
	 *
	 * `provenance` is prose for the file header, which is the right shape for a reader and
	 * the wrong one for a check: a consumer comparing this vocabulary against the library it
	 * is running has to know the version, and pulling it out of a sentence is a parser
	 * nobody should have to write. Measured need — that comparison is exactly what a
	 * runtime cross-check does with `SINCE`.
	 */
	readonly provenanceData: VocabularyProvenance;
	readonly widgets: readonly VocabularyWidget[];
	/**
	 * Objects that hold a widget without being one — see `childHoldersOf`. Same shape as
	 * `widgets` and deliberately a SEPARATE list: a consumer wanting both concatenates
	 * them, and one that means "is a widget" is not quietly handed four that are not.
	 */
	readonly childHolders: readonly VocabularyWidget[];
	/** Key -> declaration, own and foreign, in emit order. */
	readonly declarations: ReadonlyMap<string, VocabularyDecl>;
	/**
	 * Instantiable GType -> every declaration it draws members from, self first.
	 *
	 * The whole covered population, which is WIDER than `widgets` + `childHolders`: a
	 * `.ui` file instantiates `GtkSizeGroup`, `GtkTextTag` and every `GtkEventController`
	 * without any of them being a widget or holding one. Keyed by GType because that is
	 * the name a UI file writes and the key `OWN_PROPS`, `OWN_SIGNALS` and `PROP_ENUMS`
	 * are read at.
	 */
	readonly chains: ReadonlyMap<string, readonly string[]>;
	/** Nick unions this surface must emit itself, by enum GType. */
	readonly enums: ReadonlyMap<string, VocabularyEnum>;
	/**
	 * Foreign enums whose NUMBERS this vocabulary carries and whose nick UNION it imports.
	 *
	 * Types are imported, data is carried, and the line between them is nominal identity: a
	 * second `GtkPackTypeNick` beside the owner's is a second TYPE for one GObject enum, while
	 * a second `{'PangoStyle.italic': 2}` is the same fact written twice. `ENUM_NICKS` and
	 * `ENUM_VALUES` take both this and {@link enums}; the `.d.ts` nick alias takes only
	 * {@link enums}.
	 *
	 * Why the owner cannot be left to answer: a consumer's vocabulary set is a CURATED LIST,
	 * not a dependency closure. A `.ui` file instantiating a `GtkGLArea` never names `Gdk`, so
	 * no rule of the form "load every namespace the file mentions" reaches `GdkGLAPI`.
	 * Measured on gjsify's own shape — gtk-4.0 + adw-1 and nothing else — 176 joins resolve
	 * with the numbers carried and 26 across 14 GTypes do not without them.
	 */
	readonly foreignEnums: ReadonlyMap<string, VocabularyEnum>;
	/**
	 * Registered BITFIELDS this namespace declares, by GType — values only, no nicks.
	 *
	 * A separate table from `enums` and not a widening of it, because the two answer
	 * different questions and one of them has to stay narrow. `ENUM_NICKS` refuses a
	 * bitfield on purpose: GObject cannot resolve a nick SET, so a union of nicks would
	 * type something every host rejects. That reason says nothing about a single member's
	 * NUMBER, and the number is what a host without GI needs — 23 settable properties in
	 * Gtk-4.0 and Adw-1 are bitfield-typed (`GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
	 * `AdwTabView:shortcuts`, `GtkDropTarget:actions`, …), typed bare `number` with nothing
	 * to compute one from. Counting is worst exactly here: 119 of the 156 Gtk-4.0 bitfield
	 * members this vocabulary carries disagree with their declaration position, against
	 * 29 of 672 enumeration members.
	 */
	readonly flags: ReadonlyMap<string, VocabularyEnum>;
	/**
	 * The ARIA value-type table, empty for every namespace that does not declare it.
	 *
	 * The one part of a widget vocabulary that is not a fact about a ParamSpec: an
	 * `accessibility { … }` block is typed by GTK's ARIA table instead, and the two
	 * disagree — `orientation` is settable on any widget there, `checked` is a
	 * `GtkAccessibleTristate` rather than a boolean. Read from GIR documentation and
	 * refused where GIR is silent; see `./aria.ts`.
	 */
	readonly aria: AriaValueTypes;
	/** GIR namespace -> the import this surface needs for its VALUE types. */
	readonly namespaceImports: ReadonlyMap<string, string>;
	/** `@girs/<pkg>/vocabulary` -> the names imported from another namespace's vocabulary. */
	readonly surfaceImports: ReadonlyMap<string, readonly string[]>;
	/** Base -> members it must not contribute, because a nearer declaration disagrees. */
	readonly omissions: ReadonlyMap<string, ReadonlyMap<string, readonly string[]>>;
	/** GType, `GType.property` and `GType::signal` -> since versions, for the skew rule. */
	readonly since: ReadonlyMap<string, string>;
}

export const propsInterfaceOf = (gtype: string): string => `${gtype}Props`;
export const constructOnlyAliasOf = (gtype: string): string => `${gtype}ConstructOnly`;
export const nickAliasOf = (gtype: string): string => `${gtype}Nick`;

const isClassLike = (member: unknown): member is IntrospectedBaseClass =>
	member instanceof IntrospectedClass || member instanceof IntrospectedInterface;

/** Every class and interface the module declares, deterministically ordered. */
function classLikeMembers(module: GirModule): IntrospectedBaseClass[] {
	const out: IntrospectedBaseClass[] = [];
	for (const member of module.members.values()) {
		const candidates = Array.isArray(member) ? member : [member];
		for (const candidate of candidates) if (isClassLike(candidate)) out.push(candidate);
	}
	return out.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
}

/**
 * Resolve one type identifier to the class or interface it names, or null.
 *
 * Deliberately NOT `resolveParents()`: its `implements()` THROWS on an interface it
 * cannot resolve, which would take down a whole 705-namespace run for one namespace
 * with a missing dependency.
 *
 * The trade is real and stated rather than papered over: an unresolvable base is simply
 * absent from the chain, so the widget loses whatever it declared and NOTHING here says
 * so — and if the root `GtkWidget` itself were the unresolvable one, the namespace would
 * emit no surface at all, silently. What bounds it is a measurement, not a guard: over
 * Gtk-4.0, Gtk-3.0, Adw-1, GtkSource-5, WebKit-6.0, Handy-1, Shumate-1.0, GimpUi-3.0 and
 * GcrUi-3 — every widget chain in them — the count of unresolvable supers and interfaces
 * is ZERO, and every one of those namespaces emits its surface. A guard for a case with
 * no instance is a cost with no finding; the backstop is the committed `types-*` diff,
 * where a surface that stopped being emitted is a deleted file.
 */
function resolveClassLike(module: GirModule, id: TypeIdentifier): IntrospectedBaseClass | null {
	const target = module.getInstalledImport(id.namespace);
	if (!target) return null;
	const found = target.getClass(id.name);
	return found && isClassLike(found) ? found : null;
}

const keyOf = (cls: IntrospectedBaseClass): string => `${cls.namespace.namespace}.${cls.name}`;

function ancestorsOf(module: GirModule, cls: IntrospectedBaseClass): IntrospectedBaseClass[] {
	const out: IntrospectedBaseClass[] = [];
	const seen = new Set<string>([keyOf(cls)]);
	let current = cls;
	while (current.superType) {
		const parent = resolveClassLike(module, current.superType);
		if (!parent) break;
		const key = keyOf(parent);
		if (seen.has(key)) break;
		seen.add(key);
		out.push(parent);
		current = parent;
	}
	return out;
}

const implementedBy = (cls: IntrospectedBaseClass): readonly TypeIdentifier[] =>
	cls instanceof IntrospectedClass || cls instanceof IntrospectedInterface ? cls.interfaces : [];

/**
 * Self, then the parent chain, then every interface reached from either.
 *
 * The interfaces are not optional. `GtkBox` declares four properties of its own and
 * `orientation` is not among them — it lives on `Gtk.Orientable`, an `<implements>`
 * of GtkBox, because GObject installs interface properties on the implementor at
 * runtime while GIR keeps them once, on the interface. A class-only walk emits a
 * vocabulary in which the most-written GtkBox property does not exist.
 */
function declarationChain(module: GirModule, cls: IntrospectedBaseClass): IntrospectedBaseClass[] {
	const out: IntrospectedBaseClass[] = [];
	const seen = new Set<string>();
	const push = (candidate: IntrospectedBaseClass) => {
		const key = keyOf(candidate);
		if (seen.has(key)) return;
		seen.add(key);
		out.push(candidate);
	};
	push(cls);
	for (const ancestor of ancestorsOf(module, cls)) push(ancestor);
	for (let i = 0; i < out.length; i++) {
		for (const id of implementedBy(out[i]!)) {
			const resolved = resolveClassLike(module, id);
			if (resolved) push(resolved);
		}
	}
	return out;
}

const isWidgetClass = (module: GirModule, cls: IntrospectedBaseClass): boolean =>
	cls.glibTypeName === WIDGET_ROOT_GTYPE || ancestorsOf(module, cls).some((a) => a.glibTypeName === WIDGET_ROOT_GTYPE);

/**
 * Everything a UI description file can INSTANTIATE in one namespace.
 *
 * This is the coverage rule, and it is the consumer's question rather than the
 * renderer's: a GtkBuilder or Blueprint file names a GType and sets properties on it,
 * and GtkBuilder resolves that name through `g_type_from_name`, which knows nothing
 * about widgets. So the set is every registered, non-abstract, introspectable class —
 * abstract because `g_object_new` refuses one, registered because an unregistered class
 * has no name for a UI file to write.
 *
 * "Registered" is read as `glib:type-name`, and the two GIR attributes are the same
 * fact: over the 719 GIRs in `girs/`, all 16209 `<class>` and `<interface>` elements
 * carry BOTH `glib:type-name` and `glib:get-type`, and none carries one without the
 * other. So there is no third state to decide, and no second attribute to read.
 *
 * WHAT THIS REPLACES, and why the narrower rule was wrong. The first version covered
 * declarations reachable from a concrete WIDGET, plus the child holders. It is a
 * renderer's rule — "what can I put on screen" — and a UI file asks something wider.
 * Measured on Gtk-4.0, which has 301 registered declarations: 127 were covered and 174
 * were not, and the uncovered set is not a tail. It is every `GtkCellRenderer*`, every
 * `GtkEventController*` / `GtkGesture*`, `GtkDragSource`, `GtkDropTarget*`, `GtkTextTag`,
 * the layout managers, `GtkSizeGroup`, `GtkTreeSelection`, `GtkTreeViewColumn`,
 * `GtkIMContext`, `AdwToast`, `AdwStyleManager`, `AdwTimedAnimation` — the objects a
 * `.ui` file is FULL of. The cost was measurable at the consumer:
 * `Gtk.SizeGroup { mode: horizontal; }` compiled to the string `horizontal` where
 * `blueprint-compiler` writes `1`, because `GtkSizeGroup` reached no `PROP_ENUMS` row.
 *
 * The NAMESPACE gate asks this same question of the namespace — see {@link emitsVocabulary},
 * which is this predicate applied to the module rather than to a declaration. It used to be
 * a separate test ("declares a concrete `GtkWidget` descendant") and the two could disagree;
 * they no longer can, because there is only one rule.
 *
 * `Widgets` and `CHILD_HOLDERS` are NOT widened — they are the index of what IS a
 * widget, and a consumer asking that question gets the same answer as before.
 */
function instantiableClassesOf(module: GirModule): IntrospectedClass[] {
	return classLikeMembers(module).filter(
		(cls): cls is IntrospectedClass =>
			cls instanceof IntrospectedClass &&
			// `g_object_new` on an abstract type warns and returns NULL, so no UI file names
			// one. It still reaches the vocabulary as a BASE of something concrete — that is
			// the chain's job, not this list's.
			!cls.isAbstract &&
			cls.isIntrospectable &&
			typeof cls.glibTypeName === "string",
	);
}

/**
 * The concrete widgets of one namespace — the set a renderer can put on screen.
 *
 * A strict subset of {@link instantiableClassesOf}, and it stays separate because
 * `Widgets` answers "is this a widget" and nothing else in the vocabulary does.
 */
function concreteWidgetsOf(module: GirModule): IntrospectedClass[] {
	return instantiableClassesOf(module).filter((cls) => isWidgetClass(module, cls));
}

/**
 * The CHILD HOLDERS of one namespace — objects that carry a widget without being one.
 *
 * `GtkListItem`, `GtkListHeader`, `GtkColumnViewCell` and `AdwToggle` hold a widget
 * through `set_child`/`get_child` and descend from `GObject.Object`, not from
 * `GtkWidget`. A renderer that places children addresses them exactly like a container,
 * so leaving them out leaves the consumer re-reading the GIR for four types — which is
 * the second reader this subpath exists to remove.
 *
 * THE ACCESSOR NAMES ARE NOT ENOUGH, and that was measured the expensive way. A
 * name-only rule (`set_child` + `get_child`, no type test) selects 17 classes across the
 * 718-file corpus, not four: `St.Bin` and eleven `Mx.*` carry the same pair over a
 * `ClutterActor`. A surface rooted at `GtkWidget` has nothing to say about those, and
 * the first version took the whole 705-namespace run down with
 * `St.Bin.child: unsupported type expression GenericType` — the generator was asked to
 * print a property type belonging to a hierarchy it does not model.
 *
 * So the child must be a WIDGET, tested with the same `takesOneWidget` the slot
 * candidates use. The rule is then anchored to the surface's own root rather than to a
 * GTK naming convention, which is also what makes it survive a namespace nobody has
 * looked at.
 *
 * It stays a rule and not a hand-written list: `AdwToggle` was absent from the list this
 * replaces, has the identical shape, and would have been an arbitrary gap. The
 * per-namespace count is printed in the provenance so an over-broad rule shows up in a
 * diff instead of in a support question.
 *
 * A holder never becomes a widget here: `Widgets` keeps its meaning and `ChildHolders`
 * is its sibling.
 */
function childHoldersOf(module: GirModule, config: OptionsGeneration): IntrospectedClass[] {
	return instantiableClassesOf(module).filter((cls) => {
		// A widget is served by `concreteWidgetsOf`. Emitting it twice would put one GType
		// in two lists a consumer is entitled to concatenate.
		if (isWidgetClass(module, cls)) return false;
		// Nearest declaration first, so an override does not lose to its own ancestor.
		const members = [cls, ...ancestorsOf(module, cls)].flatMap((decl) => [...decl.members]);
		if (!members.some((member) => member.name === "get_child")) return false;
		const setter = members.find((member) => member.name === "set_child");
		return setter !== undefined && takesOneWidget(module, config, setter);
	});
}

/**
 * Does this namespace get a `./vocabulary` at all?
 *
 * It does when it HAS one: a namespace emits a vocabulary exactly when
 * {@link instantiableClassesOf} finds something in it. That is not a second rule beside the
 * coverage rule, it is the same rule read one level up, and the gate is now a consequence
 * of the population rather than an independent test that can disagree with it.
 *
 * WHAT THIS REPLACES. The gate was "declares a concrete `GtkWidget` descendant" — 142 of
 * the 705 GIRs — and it was the last place the RENDERER's question was still being asked.
 * {@link instantiableClassesOf} stopped asking it for declarations because GtkBuilder
 * resolves `<object class="…">` through `g_type_from_name`, which knows nothing about
 * widgets; nothing about that argument was ever specific to declarations. ADR 0029 defended
 * the narrow gate as "giving a namespace with no widgets a surface would publish a widget
 * SURFACE with no widgets in it" — an argument about what the artefact IS, made while the
 * artefact was called `surface`. It shipped as `vocabulary`, the names a namespace
 * REGISTERS, and a namespace that registers `GThemedIcon` has one of those whether or not
 * it has a widget.
 *
 * NAMING A TYPE IS NOT INSTANTIATING ONE, and that is the case the narrow gate cost. A
 * Blueprint cast `as <Gio.Icon>` compiles to `type="GIcon"`; a consumer resolves that per
 * NAMESPACE, and `Gio`, `Gdk` and `GObject` shipped nothing to resolve it against no matter
 * how complete Gtk-4.0's own vocabulary was. The type named in a cast, a `<lookup>` or a
 * `<constant>` never appears in `<object class="…">` at all, so no amount of widening
 * INSIDE the 142 could reach it.
 *
 * WHAT IT STILL EXCLUDES, which is what keeps this a rule and not "emit everything": 89 of
 * the 716 packages declare no registered non-abstract class at all — `cairo-1.0`, `GLib-2.0`,
 * `Graphene-1.0`, `HarfBuzz-0.0`, `xlib-2.0`, `PangoCairo-1.0` and the `Gst*`
 * record-and-function namespaces. Their `DECLS` would be EMPTY, and an empty `DECLS` is not
 * a smaller answer but no answer: it names nothing a UI file can write and nothing a
 * consumer can key. Their types are boxed records and enums, which this vocabulary has
 * never described from either side of the gate — a cast to `GLib.Bytes` is out of scope
 * before this function is reached, not because of it.
 *
 * Answered per namespace and cached, because a consumer's base chain asks it once per
 * foreign declaration. No pre-seeded `false` guards the recursion any more: the predicate
 * reads `isAbstract`, `isIntrospectable` and `glibTypeName` off this namespace's own
 * members and never walks a parent chain, so unlike `isWidgetClass` it cannot re-enter.
 */
const qualifies = new WeakMap<GirModule, boolean>();
export function emitsVocabulary(module: GirModule): boolean {
	const cached = qualifies.get(module);
	if (cached !== undefined) return cached;
	const answer = instantiableClassesOf(module).length > 0;
	qualifies.set(module, answer);
	return answer;
}

/**
 * The declaration keys one namespace's OWN vocabulary emits.
 *
 * The import rule needs it, and needed it the moment coverage widened. A cross-namespace
 * base is IMPORTED from its owner rather than copied, and that is only sound while the
 * owner emits it — which used to follow from the rule being the same on both sides: two
 * namespaces walking widget chains reached the same declarations. They no longer do. A
 * consumer's instantiable set can reach a declaration the owner's cannot, and
 * `@girs/ide-46/vocabulary` shipped `import type { GtkSourceCompletionProposalProps } from
 * '@girs/gtksource-5/vocabulary'` for a name that package does not export — TS2724, caught
 * by the per-package `tsc --project` and by nothing else. `GtkSource.CompletionProposal` is
 * an interface NO class in GtkSource-5 implements; Ide-46 has one that does.
 *
 * So "does the owner have a vocabulary" is not the question. "Does the owner's vocabulary
 * carry THIS declaration" is, and a declaration it does not carry is inlined here exactly
 * as one from a namespace with no vocabulary at all — the `Gcr.Prompt` path, one condition
 * wider.
 *
 * Memoised per module: a consumer asks it once per foreign declaration, and the answer is
 * a property of the owner alone.
 */
const coveredKeys = new WeakMap<GirModule, ReadonlySet<string>>();
function coveredDeclarationsOf(module: GirModule): ReadonlySet<string> {
	const cached = coveredKeys.get(module);
	if (cached) return cached;
	const keys = new Set<string>();
	// A namespace that emits no vocabulary at all carries nothing.
	if (emitsVocabulary(module)) {
		for (const cls of instantiableClassesOf(module))
			for (const decl of declarationChain(module, cls)) keys.add(keyOf(decl));
	}
	coveredKeys.set(module, keys);
	return keys;
}

interface PrintedType {
	readonly text: string;
	/** GIR namespaces whose value import the text needs. */
	readonly namespaces: readonly string[];
	/** Enums whose nick alias the text references. */
	readonly enums: readonly VocabularyEnum[];
	/**
	 * Registered bitfields the text references, which get no nick alias and still need numbers.
	 *
	 * A bitfield prints as bare `number`, so nothing about the TEXT asks for it — `PROP_ENUMS`
	 * does. Naming a bitfield no table gives numbers for is a join into nothing, and it is not
	 * hypothetical: `GtkGLArea:allowed-apis` is a `GdkGLAPI`, Gdk declares no widget and so
	 * emits no vocabulary, and 5 rows in the 142-vocabulary corpus pointed at a GType no
	 * vocabulary carried.
	 */
	readonly flags: readonly VocabularyEnum[];
	/**
	 * `<Namespace>.<Name>` for every identifier this text could not resolve.
	 *
	 * The cross-namespace half of {@link printPropType}'s resolution failure — the model
	 * answers `never` and so does this, and the entry is what keeps that from being silent.
	 * A same-namespace failure is not here, because it throws.
	 */
	readonly unresolved: readonly string[];
	/**
	 * The GType of the property's own type, where that type is REGISTERED — an enum, a
	 * bitfield, a class, an interface or a boxed record.
	 *
	 * Depth 0 only, like {@link PrintedType.ownEnumType}: the GType of a property is the GType
	 * of its type, and the type of `Gtk.Widget[]` is an array, not a widget. A FUNDAMENTAL type
	 * is not here and cannot be — `getType` collapses every numeric GIR type into one
	 * `NumberType` singleton — so it is read from the GIR spelling instead, in
	 * {@link ownProps}.
	 */
	readonly ownGType?: string;
	/**
	 * The GType of the property's OWN type, when that type is a registered enum or bitfield.
	 *
	 * Recorded at depth 0 only, which is what makes it a fact rather than a guess: an array of
	 * enums and a union that mentions one both reference an enum without BEING one, and a
	 * consumer resolving a nick against them would be resolving the wrong thing. `enums` above
	 * stays the set the TEXT references, which is a different question with a different answer.
	 */
	readonly ownEnumType?: string;
}

/**
 * Print one property type, fully qualified, with enum nicks widened in.
 *
 * A separate printer rather than `TypeExpression.print()` for two reasons. The
 * built-in printer omits the namespace prefix for the CURRENT namespace, because it
 * emits inside `export namespace Gtk { … }` — this surface is a sibling module, so
 * every reference must be qualified or it does not resolve. And an enum property
 * has to accept the NICK as well as the constant, which no general-purpose printer
 * would do.
 *
 * The identifiers themselves still come from the model's own resolution, so a name
 * this surface references is a name the main emitter emitted.
 *
 * `generics` are the owning declaration's own type parameters, read only when the
 * property's type IS one of them — see the `GenericType` branch.
 */
function printPropType(
	module: GirModule,
	config: OptionsGeneration,
	type: TypeExpression,
	where: string,
	generics: readonly Generic[],
): PrintedType {
	const namespaces = new Set<string>();
	const enums = new Map<string, VocabularyEnum>();
	const flags = new Map<string, VocabularyEnum>();
	const unresolved: string[] = [];
	/** Set only from depth 0 — see `PrintedType.ownEnumType`. */
	let ownEnumType: string | undefined;
	/** Set only from depth 0 — see `PrintedType.ownGType`. */
	let ownGType: string | undefined;

	const walk = (node: TypeExpression, depth: number): string => {
		if (depth > 8) throw new VocabularyError(`${where}: type nests deeper than 8 levels`);
		if (node instanceof ArrayType) {
			const inner = walk(node.type, depth + 1);
			const element = /[|&]/.test(inner) ? `(${inner})` : inner;
			return `${element}${"[]".repeat(Math.max(node.arrayDepth, 1))}`;
		}
		if (node instanceof OrType) {
			// `T | null` is ONE type and an absence, not two types, so the nullable arm keeps the
			// caller's depth and a property typed `Gtk.Widget | null` still names `GtkWidget`.
			// Measured: without this `GtkButton:child` carried no GType while `GtkNotebookPage:child`
			// did, and nothing about either spelling said why. A union of two REAL types keeps
			// depth + 1 and therefore names none, which is correct — there is no single GType.
			const real = node.types.filter((t) => t !== NullType);
			const nullableDepth = real.length === 1 ? depth : depth + 1;
			const parts = node.types.map((t) => walk(t, t === NullType ? depth + 1 : nullableDepth));
			// `null` last, so `Gdk.Cursor | null` reads the way a human writes it.
			const ordered = [...parts.filter((p) => p !== "null"), ...parts.filter((p) => p === "null")];
			return [...new Set(ordered)].join(" | ");
		}
		// A property whose type is the class's own TYPE PARAMETER — `St.Bin:child` is an
		// `A extends Clutter.Actor`, injected by `packages/lib/src/generics/`. The props
		// interfaces are not generic, so the parameter NAME is out of scope here and printing
		// it is TS2304. The model records what it replaced; that is the type GObject registered
		// and the one a setter has to satisfy, so it is what this prints.
		//
		// A generic with nothing recorded is still refused: there is no second answer to fall
		// back on, and inventing `unknown` would type a property that accepts a specific class.
		//
		// AND THE RECORD IS CHECKED, because it is hand-written. The injection that replaced
		// the type names both the parameter and what it replaced, and the class's own generic
		// declares the bound that parameter must satisfy; the two name one type when the
		// injection is right. `generics/clutter.ts` recorded `Content` for
		// `Clutter.Actor:layout-manager` and `Clutter.Clone:source`, whose bounds are
		// `LayoutManager` and `Actor`, and the first version of this branch printed the
		// record unchecked — `@girs/shell-11/vocabulary` shipped `'layout-manager'?:
		// Clutter.Content`. A disagreement is a generator defect, not a GIR fact, so it is
		// refused with both names rather than printed as either.
		if (node instanceof GenericType) {
			if (!node.replacedType) throw new VocabularyError(`${where}: generic ${node.identifier} replaced nothing`);
			const declared = generics.find((generic) => generic.type.identifier === node.identifier);
			const bound = declared?.constraint ?? declared?.defaultType ?? null;
			if (bound && !bound.unwrap().equals(node.replacedType.unwrap())) {
				throw new VocabularyError(
					`${where}: generic ${node.identifier} records ${node.replacedType.print(module, config)} as what it replaced, but the declaration bounds it by ${bound.print(module, config)}`,
				);
			}
			return walk(node.replacedType, depth);
		}
		if (node instanceof TypeIdentifier) {
			const resolved = node.resolveIdentifier(module, config);
			if (!resolved) {
				// TWO failures wear one shape here, and the model itself tells them apart — it
				// logs "Unable to resolve type X in same namespace Y!" for one and
				// "Type X could not be resolved in Y" for the other.
				//
				// SAME NAMESPACE is a file that contradicts itself: the GIR names a type it
				// declares nowhere, nothing outside it can be the cause, and the vocabulary
				// REFUSES rather than degrade — a property the model has no type for would hide a
				// later rename in the main emitter.
				//
				// CROSS NAMESPACE is two independently released GIRs disagreeing, which no rule in
				// this generator can repair. The corpus has it: `Shell-*.gir` names
				// `Gio.DesktopAppInfo`, and glib moved that type to the `GioUnix` namespace, so
				// `Gio-2.0.gir` declares it no more. The MAIN EMITTER's answer there is `never`
				// (`TypeIdentifier.resolve()` — "if we can't resolve a type it is not
				// introspectable"), and `shell-0.1.d.ts` ships `app_info: never` today. So `never`
				// is not a fallback this invents: it is the one model's own answer, which is the
				// whole reason the vocabulary reads that model. Refusing it would take a
				// 705-namespace run down over one stale reference in a third-party GIR and lose
				// the other 24 declarations of the namespace with it.
				//
				// Never silent either way: the identifier is named in the provenance line, in a
				// remainder of its own rather than in `unsettableProps`, because "the model has no
				// such type" and "no TypeScript value satisfies this" have different fixes.
				if (node.namespace === module.namespace)
					throw new VocabularyError(`${where}: cannot resolve ${node.namespace}.${node.name}`);
				unresolved.push(`${node.namespace}.${node.name}`);
				return "never";
			}
			const owner = module.getInstalledImport(resolved.namespace);
			if (!owner) throw new VocabularyError(`${where}: namespace ${resolved.namespace} is not installed`);
			const enumeration = owner.getEnum(resolved.name);
			if (enumeration) {
				// A bitfield's GType is recorded even though its TEXT is `number`: the reason
				// `ENUM_NICKS` refuses one is that GObject cannot resolve a nick SET, and that says
				// nothing about a single member's number. 23 of the 176 properties this table keys
				// in Gtk-4.0 and Adw-1 are bitfield-typed (19 + 4), and nothing else says which
				// bitfield. That was 10 of 104 while coverage was widget-reachability: the 13 that
				// arrived with the instantiable rule sit on `GtkDragSource`, `GtkDropTarget`,
				// `GtkDropTargetAsync`, `GtkEventControllerScroll`, `GtkShortcutController`,
				// `GtkKeyvalTrigger`, `GtkCellRendererAccel`, `GtkIMContext`, `GtkTextTag` and
				// `AdwCssClassBinding` — objects a `.ui` file creates and no widget chain reaches.
				if (depth === 0 && enumeration.glibTypeName) {
					ownEnumType = enumeration.glibTypeName;
					ownGType = enumeration.glibTypeName;
				}
				const gtype = enumeration.glibTypeName;
				const reference = `${resolved.namespace}.${resolved.name}`;
				// Flags stay `number` in both positions, mirroring the runtime: GObject
				// exposes no way to resolve a nick SET ("horizontal|vertical"), so a union
				// of nicks would type something every host has to reject. The MEMBERS are
				// collected anyway — see `PrintedType.flags` for the join that needs them.
				if (enumeration.flags) {
					if (gtype) flags.set(gtype, vocabularyEnumOf(gtype, reference, enumeration));
					return "number";
				}
				// An unregistered enum has no GType, therefore no nicks GObject knows,
				// therefore nothing a string could be checked against.
				if (!gtype) return reference;
				namespaces.add(resolved.namespace);
				enums.set(gtype, vocabularyEnumOf(gtype, reference, enumeration));
				return `${nickAliasOf(gtype)} | ${reference}`;
			}
			// Not an enum: a class, an interface or a boxed record. Its GType is what a host
			// needs to name the property's type, and `glibTypeName` is where the GIR puts it.
			// An unregistered record simply has none and the row is then absent.
			if (depth === 0) {
				const registered = owner.getClass(resolved.name);
				if (registered?.glibTypeName) ownGType = registered.glibTypeName;
			}
			namespaces.add(resolved.namespace);
			return `${resolved.namespace}.${resolved.name}`;
		}
		if (node instanceof NativeType) {
			if (node === NullType) return "null";
			return node.print(module, config);
		}
		throw new VocabularyError(`${where}: unsupported type expression ${node.constructor.name}`);
	};

	const text = walk(type, 0);
	return {
		text,
		namespaces: [...namespaces],
		enums: [...enums.values()],
		flags: [...flags.values()],
		unresolved,
		...(ownEnumType === undefined ? {} : { ownEnumType }),
		...(ownGType === undefined ? {} : { ownGType }),
	};
}

/**
 * First sentence, one line, safe to embed in a block comment — a hover blurb,
 * not the manual.
 *
 * The replacement below inserts a ZERO-WIDTH SPACE between the `*` and the `/`,
 * which is why it looks like a no-op replace. Without it a GIR doc containing a
 * comment terminator closes the JSDoc it is being emitted into, and the rest of
 * the declaration becomes code. It is invisible on screen, so leave it be.
 */
function blurb(doc: string | null | undefined, limit = 200): string | undefined {
	if (!doc) return undefined;
	const flat = doc.replace(/\s+/g, " ").trim();
	if (flat === "") return undefined;
	const stop = flat.search(/\.\s|\.$/);
	const text = stop > 0 ? flat.slice(0, stop + 1) : flat;
	const cut = text.length > limit ? `${text.slice(0, limit - 1)}…` : text;
	return cut.replace(/\*\//g, "*​/");
}

/**
 * GIR spelling → the name GObject gives that fundamental type, for the types a property can
 * actually have.
 *
 * Closed and measured, not guessed: over every `.gir` this repository tracks, settable
 * properties name exactly these 23 fundamental spellings, and they are 21 059 of the 30 940
 * rows — `utf8` alone is 7 745 and `gboolean` 5 473. The other 9 881 rows name 1 708 registered
 * types, whose GType comes from `glibTypeName` instead.
 *
 * It exists because `getType` is lossy: every numeric GIR type becomes one `NumberType`
 * singleton, so `gint` and `gdouble` are the same object by the time the vocabulary sees them.
 * The values are `g_type_name` of the matching `G_TYPE_*`, which is why `utf8` is `gchararray`
 * and `guint8` is `guchar` rather than either spelling being carried through.
 *
 * A spelling NOT here yields no row, and that is the point: absence means "this generator can
 * state no GType", which a consumer can act on. A guess would be a wrong number, and the same
 * rule already governs `PROP_ENUMS`.
 */
const FUNDAMENTAL_GTYPES: Readonly<Record<string, string>> = {
	utf8: "gchararray",
	filename: "gchararray",
	gboolean: "gboolean",
	boolean: "gboolean",
	gchar: "gchar",
	guint8: "guchar",
	gint: "gint",
	int: "gint",
	guint: "guint",
	uint: "guint",
	guint32: "guint",
	gunichar: "guint",
	glong: "glong",
	gulong: "gulong",
	ulong: "gulong",
	gint64: "gint64",
	int64: "gint64",
	guint64: "guint64",
	uint64: "guint64",
	gfloat: "gfloat",
	gdouble: "gdouble",
	gpointer: "gpointer",
	GType: "GType",
};

/**
 * The settable properties of one declaration, deduplicated by registered name.
 *
 * `propertyCase: "both"` puts every property in `props` TWICE — once underscored
 * and once camelCased — and neither spelling is the one GObject registered. The
 * dashed `girName` is carried on both copies, so it is both the emitted key and the
 * key that pairs them back up.
 */
function ownProps(
	module: GirModule,
	config: OptionsGeneration,
	cls: IntrospectedBaseClass,
	collect: (printed: PrintedType) => void,
): VocabularyProp[] {
	const byName = new Map<string, VocabularyProp>();
	for (const prop of cls.props as IntrospectedProperty[]) {
		// WRITABLE ONLY — the axis `ConstructorProps` gets wrong. GObject spells
		// CONSTRUCT_ONLY out as `writable` too, so `writable` alone is the settable set.
		if (!prop.writable) continue;
		const girName = prop.girName;
		if (!girName) continue;
		if (byName.has(girName)) continue;
		const printed = printPropType(module, config, prop.type, `${keyOf(cls)}.${girName}`, cls.generics);
		collect(printed);
		// Registered types answer from the printed walk, fundamentals from the GIR spelling the
		// walk threw away. Neither can answer for the other, which is why both are asked.
		const gtype = printed.ownGType ?? (prop.girTypeName ? FUNDAMENTAL_GTYPES[prop.girTypeName] : undefined);
		byName.set(girName, {
			girName,
			...(printed.ownEnumType === undefined ? {} : { enumType: printed.ownEnumType }),
			...(gtype === undefined ? {} : { gtype }),
			ts: printed.text,
			...(printed.unresolved.length === 0 ? {} : { unresolvedTypes: printed.unresolved }),
			constructOnly: prop.constructOnly,
			since: prop.metadata?.introducedVersion,
			doc: blurb(prop.doc),
			// From the METADATA, not the base field. `IntrospectedProperty.fromXML` sets
			// `metadata` and never the inherited `deprecated`, so `prop.deprecated === true`
			// was false for every property ever emitted — the surface shipped 0 `@deprecated`
			// while the main `.d.ts` for the same namespace carried 136.
			deprecated: prop.metadata?.deprecated === true || prop.deprecated === true,
			deprecatedSince: prop.metadata?.deprecatedVersion,
			deprecatedDoc: blurb(prop.metadata?.deprecatedDoc),
			defaultValue: prop.defaultValue,
		});
	}
	return [...byName.values()].sort((a, b) => (a.girName < b.girName ? -1 : 1));
}

/**
 * The signals one declaration registers itself — never its parents'.
 *
 * Deliberately NOT `getAllSignals()`: `DECLS` already publishes the chain, so folding a
 * base's signals into every descendant would say the same fact 53 times in Gtk-4.0 and
 * lose which GType actually owns `destroy`. Interfaces answer the same way classes do,
 * because GObject registers a signal on the interface GType and `DECLS` puts that GType
 * in the chain.
 */
const ownSignals = (cls: IntrospectedBaseClass): string[] =>
	cls instanceof IntrospectedClass || cls instanceof IntrospectedInterface
		? cls.signals.map((signal) => signal.name).sort()
		: [];

/**
 * A method taking exactly one widget argument names a CANDIDATE slot.
 *
 * `pack_start` -> start, `set_title_widget` -> title, `add_top_bar` -> top. It is a
 * candidate list and never an answer: the GIR cannot tell adoption from reference.
 * `Adw.HeaderBar.set_title_widget` parents its argument and
 * `Adw.ActionRow.set_activatable_widget` does not, and both are `void f(GtkWidget*)`
 * at `transfer-ownership="none"` — nothing in the GIR separates them. Which
 * candidate is a real slot is runtime behaviour, so it stays curated in the consumer;
 * this list is what makes a GTK release that adds one show up as a diff.
 */
function slotNameOf(method: string): string | null {
	for (const pattern of [/^pack_(\w+)$/, /^set_(\w+?)(?:_widget)?$/, /^add_(\w+?)(?:_bar)?$/]) {
		const match = pattern.exec(method);
		if (match) return match[1]!.replace(/_/g, "-");
	}
	return null;
}

/** Does this method take exactly one argument, and is that argument a widget? */
function takesOneWidget(
	module: GirModule,
	config: OptionsGeneration,
	method: { parameters: readonly { direction?: string; type: { unwrap(): unknown } }[] },
): boolean {
	const params = method.parameters.filter((p) => p.direction === "in");
	if (params.length !== 1) return false;
	const type = params[0]!.type.unwrap();
	if (!(type instanceof TypeIdentifier)) return false;
	const resolved = type.resolveIdentifier(module, config);
	if (!resolved) return false;
	const owner = module.getInstalledImport(resolved.namespace);
	const target = owner?.getClass(resolved.name);
	return Boolean(target && isClassLike(target) && isWidgetClass(module, target));
}

function slotCandidatesOf(module: GirModule, config: OptionsGeneration, cls: IntrospectedClass): Map<string, string> {
	const out = new Map<string, string>();
	const methods = [...cls.members].sort((a, b) => (a.name < b.name ? -1 : 1));
	for (const method of methods) {
		const slot = slotNameOf(method.name);
		if (!slot) continue;
		if (!takesOneWidget(module, config, method)) continue;
		// First wins in sorted method order: two methods can derive the same slot name
		// (`set_child` and `add_child` both yield `child`) and a duplicate key in an
		// emitted type literal is TS1117 rather than a warning.
		if (!out.has(slot)) out.set(slot, method.name);
	}
	return out;
}

/**
 * Which member each base must be stripped of.
 *
 * Two conflicts, one repair. TypeScript requires a multiply inherited member to be
 * IDENTICAL in every base — `string` and `string | null` are not — and GTK's interfaces
 * do redeclare class properties. It also requires a declaration's OWN member to be
 * assignable to the base's, which `GimpDialog` breaks: it redeclares `parent` as
 * `Gtk.Widget` where GTK 3's writable `GtkWidget:parent` is a `Gtk.Container` (TS2430,
 * "Type 'Widget' is missing 39 properties from type 'Container'"). Neither is repaired by
 * declaring the member locally — that turns one error into another — so the only repair is
 * to stop the base from contributing it.
 *
 * This is why props are computed for FOREIGN declarations too, even though their
 * interfaces are emitted by their owner: without their members here the analysis cannot
 * see a conflict with an imported base, and `GimpDialogProps extends GtkDialogProps` was
 * emitted with no `Omit` at all. The printed text is comparable across surfaces because
 * this printer always fully qualifies, so a foreign member renders identically to the way
 * its owner rendered it.
 */
function computeOmissions(decls: ReadonlyMap<string, VocabularyDecl>): Map<string, Map<string, string[]>> {
	const resolved = new Map<string, Map<string, string>>();
	const resolving = new Set<string>();

	const membersOf = (key: string): Map<string, string> => {
		const cached = resolved.get(key);
		if (cached) return cached;
		const decl = decls.get(key);
		if (!decl || resolving.has(key)) return new Map();
		resolving.add(key);
		const members = new Map<string, string>();
		for (const prop of decl.props) members.set(prop.girName, prop.ts);
		for (const base of decl.bases) {
			for (const [name, ts] of membersOf(base)) if (!members.has(name)) members.set(name, ts);
		}
		resolving.delete(key);
		resolved.set(key, members);
		return members;
	};

	const out = new Map<string, Map<string, string[]>>();
	for (const [key, decl] of decls) {
		const claimed = new Map<string, string>();
		for (const prop of decl.props) claimed.set(prop.girName, prop.ts);
		const perBase = new Map<string, string[]>();
		for (const base of decl.bases) {
			const drop: string[] = [];
			for (const [name, ts] of membersOf(base)) {
				const held = claimed.get(name);
				if (held === undefined) claimed.set(name, ts);
				else if (held !== ts) drop.push(name);
			}
			if (drop.length > 0) perBase.set(base, drop.sort());
		}
		if (perBase.size > 0) out.set(key, perBase);
	}
	return out;
}

/**
 * Build the surface for one namespace, or null if it declares no widgets.
 *
 * Cross-namespace bases are IMPORTED, not copied: `AdwToolbarViewProps extends
 * GtkWidgetProps` reads `GtkWidgetProps` from `@girs/gtk-4.0/vocabulary`. Inlining
 * them wholesale would put a second, nominally distinct `GtkWidgetProps` in every
 * widget namespace — a copy per namespace of the same interface, and confusing errors
 * the first time a consumer mixes two of them.
 *
 * A base whose namespace declares NO widgets has no surface to import from, and the
 * answer depends on whether it carries anything:
 *
 *  - nothing settable — DROPPED. There is no vocabulary to lose, and inlining an empty
 *    interface into every widget namespace buys a name and no members.
 *  - settable properties — INLINED here, because dropping it would silently shrink the
 *    vocabulary by properties nobody would notice were missing.
 *
 * "No vocabulary to import from" is the common shape of the condition and not the
 * condition: what is asked is whether the OWNER'S vocabulary carries that declaration, and
 * a namespace with a vocabulary can fail it too — see {@link coveredDeclarationsOf}.
 *
 * Both halves are measured over the 475 namespaces in `girs/`, of which 102 declare
 * widgets. The drop case is ordinary: Gtk-4.0 and Adw-1 each reach exactly four such
 * declarations (`GObject.Object`, `GObject.InitiallyUnowned`, `Gio.ActionGroup`,
 * `Gio.ActionMap`), all empty. The inline case was EXACTLY ONE declaration in the whole
 * corpus while coverage was widget-reachability — `Gcr.Prompt`, a GObject interface with
 * ten writable properties, in a namespace whose widgets live in a different one — and it is
 * the reason the rule is not simply "drop it": the first version of this generator refused
 * the input outright and took the 705-namespace run down with it. A bounded bill is not an
 * argument for a vocabulary per namespace: `@girs/gcr-3/vocabulary` would be a widget
 * vocabulary with no widgets in it.
 */
export function buildWidgetVocabulary(module: GirModule, config: OptionsGeneration): WidgetVocabulary | null {
	// The namespace gate, and it is the population itself: a namespace with nothing
	// instantiable in it has an empty vocabulary to offer, so it offers none. See
	// {@link emitsVocabulary} — the two must stay the same test, or a consumer can import a
	// subpath whose owner's own gate says it does not exist.
	if (!emitsVocabulary(module)) return null;
	const widgetClasses = concreteWidgetsOf(module);
	// Holders ride the SAME pipeline — they need declarations, props and since-versions
	// exactly as widgets do, or a consumer cannot type them. Only the list differs.
	const holderClasses = childHoldersOf(module, config);
	// The COVERED population: everything a UI file can name, of which the two lists above
	// are subsets. `Widgets` and `ChildHolders` are still built from those two, so what
	// widens is the declaration graph and never the answer to "is this a widget".
	const instantiableClasses = instantiableClassesOf(module);

	const namespaceImports = new Map<string, string>();
	const enums = new Map<string, VocabularyEnum>();
	/**
	 * Foreign enums whose NUMBERS this vocabulary carries and whose nick UNION it imports.
	 *
	 * The split is the difference between a type and a datum, and it is the whole reason this
	 * map exists rather than a fourth branch in `enums`. A nick union is a TYPE: emitting a
	 * second `GtkPackTypeNick` beside the owner's makes two nominally distinct types for one
	 * GObject enum, which is why it is imported. `ENUM_NICKS` and `ENUM_VALUES` are DATA:
	 * copying `{'PangoStyle.italic': 2}` into a consumer costs 30 bytes and has no identity
	 * to collide with.
	 *
	 * Carried and not left to the owner because a consumer's vocabulary set is a CURATED LIST,
	 * not a dependency closure. A `.ui` file that instantiates a `GtkGLArea` never names `Gdk`,
	 * so "load every namespace the file uses" does not reach `GdkGLAPI` — and that join is the
	 * exact defect the widened coverage was written to fix. Measured on gjsify's own shape, a
	 * consumer holding gtk-4.0 + adw-1 alone: 176 joins, 0 unresolvable when every referenced
	 * table is carried, 26 unresolvable across 14 GTypes when they are left to their owners.
	 */
	const foreignEnums = new Map<string, VocabularyEnum>();
	const flags = new Map<string, VocabularyEnum>();
	const surfaceImports = new Map<string, Set<string>>();
	const importFromVocabulary = (owner: GirModule, name: string) => {
		const subpath = `${owner.importPath}/vocabulary`;
		const names = surfaceImports.get(subpath) ?? new Set<string>();
		names.add(name);
		surfaceImports.set(subpath, names);
	};
	const collect = (printed: PrintedType) => {
		for (const ns of printed.namespaces) {
			const owner = module.getInstalledImport(ns);
			if (!owner) throw new VocabularyError(`namespace ${ns} is referenced but not installed`);
			namespaceImports.set(ns, owner.importPath);
		}
		for (const enumeration of printed.enums) {
			const owner = module.getInstalledImport(enumeration.reference.slice(0, enumeration.reference.indexOf(".")));
			// A nick union is emitted ONCE, by the vocabulary that owns the enum, and imported
			// from there — `AdwHeaderBarProps` reads `GtkPackTypeNick` out of
			// `@girs/gtk-4.0/vocabulary`. An owner that emits NO vocabulary has nowhere to put
			// one, so each consumer emits its own alias for those. Skipping the emission without
			// adding the IMPORT is the shape the per-package `tsc --project` caught first: 9 ×
			// TS2304 in Adw-1, naming 6 Gtk enums.
			//
			// Sound only because a vocabulary emits a nick union for EVERY registered enum its
			// namespace declares, never only the ones its own properties reach — see the loop
			// below. The declaration import cannot lean on that and asks
			// {@link coveredDeclarationsOf} instead.
			if (owner && owner !== module && emitsVocabulary(owner)) {
				importFromVocabulary(owner, nickAliasOf(enumeration.gtype));
				// The TYPE comes from the owner; the NUMBERS stay here, or a `PROP_ENUMS` row
				// naming this GType is a join into a table the consumer may never have loaded.
				foreignEnums.set(enumeration.gtype, enumeration);
				continue;
			}
			enums.set(enumeration.gtype, enumeration);
		}
		for (const bitfield of printed.flags) {
			const owner = module.getInstalledImport(bitfield.reference.slice(0, bitfield.reference.indexOf(".")));
			// A bitfield gets no nick union, so there is no NAME to bring over and nothing to
			// import — it is numbers or nothing. Which makes the owner's own vocabulary
			// irrelevant here: the numbers are carried unconditionally, the same way the enums
			// above keep theirs. `GtkGLArea:allowed-apis` is the case that proves the rule and
			// the one that broke when it was conditional — a `GdkGLAPI` whose `gl=1, gles=2`
			// gtk-4.0 carried while Gdk emitted nothing, and stopped carrying the moment Gdk
			// did, in a consumer that has no reason to load Gdk at all.
			flags.set(bitfield.gtype, bitfield);
		}
	};

	const needed = new Map<string, IntrospectedBaseClass>();
	const chains = new Map<string, IntrospectedBaseClass[]>();
	for (const creatable of instantiableClasses) {
		const chain = declarationChain(module, creatable);
		chains.set(keyOf(creatable), chain);
		for (const decl of chain) needed.set(keyOf(decl), decl);
	}

	const dropped: string[] = [];
	const inlined: string[] = [];
	const declarations = new Map<string, VocabularyDecl>();

	for (const [key, cls] of needed) {
		const gtype = cls.glibTypeName;
		// A declaration GIR gives no GType is not a GObject type: it cannot be keyed,
		// looked up in the typelib, or named in GtkBuilder XML.
		if (!gtype) {
			if ((cls.props as IntrospectedProperty[]).some((p) => p.writable)) {
				throw new VocabularyError(`${key} has writable properties but no glib:type-name`);
			}
			dropped.push(key);
			continue;
		}
		const owner = cls.namespace as GirModule;
		const own = owner.namespace === module.namespace;
		// Not "does the owner have a vocabulary" but "does the owner's vocabulary carry this
		// declaration" — see `coveredDeclarationsOf`.
		const foreignWithoutSurface = !own && !coveredDeclarationsOf(owner).has(key);
		if (foreignWithoutSurface && !(cls.props as IntrospectedProperty[]).some((p) => p.writable)) {
			dropped.push(key);
			continue;
		}
		const emitted = own || foreignWithoutSurface;
		if (!emitted) {
			importFromVocabulary(owner, propsInterfaceOf(gtype));
			importFromVocabulary(owner, constructOnlyAliasOf(gtype));
		}
		if (foreignWithoutSurface) inlined.push(key);
		declarations.set(key, {
			key,
			namespace: owner.namespace,
			local: cls.name,
			gtype,
			emitted,
			inlined: foreignWithoutSurface,
			bases: [],
			// A foreign declaration's members are computed but its IMPORTS are not collected:
			// the interface is emitted by its owner, so a `Pango` reference inside it is the
			// owner's import to make, and adding it here would leave `noUnusedLocals` staring at
			// an import nothing in this file reads.
			props: ownProps(module, config, cls, emitted ? collect : () => {}),
			signals: ownSignals(cls),
			since: cls.metadata?.introducedVersion,
			doc: emitted ? blurb(cls.doc) : undefined,
		});
	}

	// Bases second, so a base dropped above is dropped from every `extends` too.
	const withBases = new Map<string, VocabularyDecl>();
	for (const [key, decl] of declarations) {
		const cls = needed.get(key)!;
		const bases: string[] = [];
		if (cls.superType) {
			const parent = resolveClassLike(module, cls.superType);
			if (parent && declarations.has(keyOf(parent))) bases.push(keyOf(parent));
		}
		for (const id of implementedBy(cls)) {
			const iface = resolveClassLike(module, id);
			if (iface && declarations.has(keyOf(iface))) bases.push(keyOf(iface));
		}
		withBases.set(key, { ...decl, bases });
	}

	const toEntries = (classes: readonly IntrospectedClass[]): VocabularyWidget[] =>
		classes
			.filter((widget) => withBases.has(keyOf(widget)))
			.map((widget) => ({
				key: keyOf(widget),
				namespace: widget.namespace.namespace,
				local: widget.name,
				gtype: widget.glibTypeName!,
				slotCandidates: slotCandidatesOf(module, config, widget),
			}))
			.sort((a, b) => (a.gtype < b.gtype ? -1 : 1));

	const widgets = toEntries(widgetClasses);
	const childHolders = toEntries(holderClasses);

	// The chain of EVERY instantiable GType, which is what `DECLS` publishes. Kept once,
	// here, rather than on the widget entries: a widget's chain and an instantiable's are
	// the same fact, and two copies of it would be two answers with nothing comparing them.
	const declChains = new Map<string, readonly string[]>(
		instantiableClasses
			.filter((cls) => withBases.has(keyOf(cls)))
			.map((cls): [string, readonly string[]] => [
				cls.glibTypeName!,
				(chains.get(keyOf(cls)) ?? []).filter((decl) => withBases.has(keyOf(decl))).map((decl) => decl.glibTypeName!),
			])
			.sort(([a], [b]) => (a < b ? -1 : 1)),
	);

	for (const widget of [...widgets, ...childHolders]) {
		const owner = module.getInstalledImport(widget.namespace);
		if (owner) namespaceImports.set(widget.namespace, owner.importPath);
	}

	// EVERY registered enum this namespace declares gets a nick union, not only the ones
	// its own widget properties happen to reference.
	//
	// The alternative — emit what you reference — is what shipped first, and the
	// per-package `tsc --project` failed it: `GtkSourceView.text-window-type` reaches
	// `Gtk.TextWindowType`, no Gtk-4.0 widget property does, so `@girs/gtk-4.0/vocabulary` had
	// no `GtkTextWindowTypeNick` for `@girs/gtksource-5/vocabulary` to import (TS2305, plus the
	// same shape for `GtkPackTypeNick` in Handy-1 against Gtk-3.0). The nick vocabulary of a
	// namespace is a property of the NAMESPACE, not of which of its own properties use it —
	// and emitting all of them also makes `ENUM_NICKS` a complete answer for a consumer
	// checking nicks against the installed library.
	for (const member of module.members.values()) {
		for (const candidate of Array.isArray(member) ? member : [member]) {
			if (!(candidate instanceof IntrospectedEnum)) continue;
			// An unregistered enum has no GType and no nicks GObject knows, so neither table
			// can key it.
			if (!candidate.glibTypeName) continue;
			// Flags stay `number` everywhere, so a nick union for one would type something
			// every host has to reject — but their MEMBERS still have numbers, and `flags`
			// above says why those are carried anyway.
			if (candidate.flags) {
				flags.set(
					candidate.glibTypeName,
					vocabularyEnumOf(candidate.glibTypeName, `${module.namespace}.${candidate.name}`, candidate),
				);
				continue;
			}
			enums.set(
				candidate.glibTypeName,
				vocabularyEnumOf(candidate.glibTypeName, `${module.namespace}.${candidate.name}`, candidate),
			);
		}
	}

	// Three key shapes, and none of them is decoration.
	//
	// `SINCE` exists so a consumer can tell "this vocabulary describes a NEWER library than
	// the one installed" from "this vocabulary is wrong". That test only works for the names
	// it covers, and each shape was added because a real cross-check went red without it.
	//
	// MEMBERS. Measured against gtk4-4.22.4 / libadwaita-1.9.3 while the vocabulary described
	// 4.23.3 / 1.10.0: every missing PROPERTY was explained by a since-version — 14 of them,
	// 0 unexplained — and 18 missing SIGNALS were not, because a property-only `SINCE` has
	// nothing to say about `GtkWindow::force-close`. A consumer checking signals against the
	// installed typelib therefore went red on 18 widgets for a vocabulary that was correct.
	//
	// THE TYPE ITSELF, keyed bare. A member-only map explains an absent member and says
	// nothing about an absent CLASS, and the class is the worse failure of the two: a
	// consumer resolving `GtkSvgWidget` (GIR `version="4.24"`) against an older GTK does not
	// get a name it can attribute the miss to, it gets `TypeError: can't access property
	// "$gtype", ctor() is undefined` — the GType it asked for is not in the message, so the
	// one fact needed to forgive the absence is the one fact the failure withholds.
	//
	// The attribute is real but SPARSE, which is why the entry is conditional rather than
	// required: `version` sits on 23 of 272 `<class>` and 6 of 29 `<interface>` in
	// Gtk-4.0.gir, and on 1777 of 16156 across the 715 GIRs in `girs/`. Where GIR states no
	// version none is written — inventing one would let a consumer forgive an absence that
	// is a genuine defect, which is the failure this table exists to prevent.
	//
	// `GtkBox`, `GtkBox.spacing` and `GtkBox::clicked` are GObject's own three spellings, so
	// they cannot collide, and a reader already knows which is which.
	const since = new Map<string, string>();
	for (const decl of withBases.values()) {
		if (!decl.emitted) continue;
		if (decl.since) since.set(decl.gtype, decl.since);
		for (const prop of decl.props) if (prop.since) since.set(`${decl.gtype}.${prop.girName}`, prop.since);
	}
	// Over the DECLARATIONS, exactly the set `OWN_SIGNALS` is keyed by. Walking the concrete
	// widgets instead leaves a signal a consumer can read out of `OWN_SIGNALS` with nothing
	// to explain its absence from an older library — the same hole, one table over.
	for (const [key, decl] of withBases) {
		if (!decl.emitted) continue;
		const cls = needed.get(key);
		if (!(cls instanceof IntrospectedClass || cls instanceof IntrospectedInterface)) continue;
		for (const signal of cls.signals) {
			const introduced = signal.metadata?.introducedVersion;
			if (introduced) since.set(`${decl.gtype}::${signal.name}`, introduced);
		}
	}

	const provenanceParts = [`${module.packageName}`];
	if (module.libraryVersion?.declaredByLibrary) provenanceParts.push(`library ${module.libraryVersion}`);
	// Counted, not named: the holder rule is a RULE, so what a reader needs from a diff is
	// whether it started selecting more — a namespace where it suddenly picks forty is how
	// an over-broad rule announces itself across the 700-namespace run.
	if (childHolders.length > 0) provenanceParts.push(`${childHolders.length} child holder(s)`);
	// Named, not counted: both lists are how a GTK or dependency release that changes the
	// shape of the base graph shows up in a diff rather than in a support question.
	if (dropped.length > 0) provenanceParts.push(`dropped empty base(s): ${dropped.join(" ")}`);
	if (inlined.length > 0)
		provenanceParts.push(`inlined base(s) their owner's vocabulary does not emit: ${inlined.join(" ")}`);
	const emittedDecls = [...withBases.values()].filter((decl) => decl.emitted);
	// Named, and in a remainder of its OWN: a `never` because the model has no such type is
	// a different fact from a `never` because nothing in TypeScript satisfies a writable
	// `gpointer`, and the two have different fixes. Every `never` property is in exactly one
	// of the two lists, so neither can hide the other.
	const unresolvedProps = emittedDecls
		.flatMap((decl) =>
			decl.props
				.filter((prop) => prop.unresolvedTypes !== undefined)
				.map((prop) => `${decl.key}.${prop.girName}: ${prop.unresolvedTypes!.join(" ")}`),
		)
		.sort();
	const unresolvedKeys = new Set(
		emittedDecls.flatMap((decl) =>
			decl.props.filter((prop) => prop.unresolvedTypes !== undefined).map((prop) => `${decl.key}.${prop.girName}`),
		),
	);
	const unsettable = emittedDecls
		.flatMap((decl) =>
			decl.props.filter((prop) => acceptsNothing(prop.ts)).map((prop) => `${decl.key}.${prop.girName}`),
		)
		.filter((entry) => !unresolvedKeys.has(entry))
		.sort();
	if (unsettable.length > 0) {
		provenanceParts.push(`prop(s) no TypeScript value satisfies: ${unsettable.join(" ")}`);
	}
	if (unresolvedProps.length > 0) {
		provenanceParts.push(`prop(s) whose type the model cannot resolve: ${unresolvedProps.join(" ")}`);
	}

	return {
		namespace: module.namespace,
		version: module.version,
		importName: module.importName,
		provenance: provenanceParts.join(" — "),
		provenanceData: {
			namespace: module.namespace,
			version: module.version,
			libraryVersion: module.libraryVersion?.declaredByLibrary ? `${module.libraryVersion}` : null,
			childHolders: childHolders.length,
			droppedBases: dropped,
			inlinedBases: inlined,
			unsettableProps: unsettable,
			unresolvedProps,
			// Filtered, because `"".split(",")` is `[""]` and not `[]`: `tracker-2.0` and
			// `restextras-0.7` declare `c:identifier-prefixes=""`, which would otherwise ship an
			// empty string as if it were a prefix and contradict this field's own "empty where
			// GIR states none". An empty prefix concatenated onto a type name yields the name
			// back, so a consumer would resolve `Tracker.Notifier` to `Notifier`.
			identifierPrefixes: module.c_prefixes.filter((prefix) => prefix !== ""),
			requiredVocabularies: [...surfaceImports.keys()].sort(),
		},
		widgets,
		childHolders,
		declarations: withBases,
		chains: declChains,
		enums,
		foreignEnums,
		flags,
		aria: buildAriaValueTypes(module, config),
		namespaceImports,
		surfaceImports: new Map([...surfaceImports].map(([k, v]) => [k, [...v].sort()])),
		omissions: computeOmissions(withBases),
		since,
	};
}
