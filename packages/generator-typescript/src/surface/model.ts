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

/** The GType every widget descends from. Matched by GType, so Gtk-3.0 qualifies too. */
const WIDGET_ROOT_GTYPE = "GtkWidget";

/** Thrown with the offending member named — never swallowed into a fallback type. */
export class SurfaceError extends Error {}

/**
 * A property whose printed type accepts no value at all.
 *
 * There are two ways a property can end up unusable, and only one of them is a
 * generator defect. An UNRESOLVABLE identifier is: the model has no such type, so the
 * surface would reference a name the main emitter never emitted, and
 * {@link printPropType} throws. A RESOLVABLE type TypeScript cannot express is not:
 * `GcrTreeSelector:columns` is a writable `gpointer` and `GimpDialog:help-func` is a C
 * callback, and the model prints both as `never` on purpose — a caller cannot pass one
 * from GJS either.
 *
 * So `never` stays in the interface rather than being dropped (dropping shrinks the
 * vocabulary by a property nobody would notice was missing, and the name is still a
 * real writable ParamSpec a consumer's runtime check must find in `OWN_PROPS`), and
 * every occurrence is NAMED in the provenance line.
 *
 * No corpus-wide count is written down here, deliberately. Fourteen widget namespaces
 * were measured and four turned up — a writable `gpointer` in `GcrTreeSelector:columns`,
 * `Gtk.Object:user-data` and `Gtk.Notebook:group`, a C callback in
 * `GimpDialog:help-func` — and the first five namespaces looked at had said "two", which
 * is how a number in a comment becomes wrong. Each surface names its OWN, which is the
 * answer that cannot go stale, and is what makes the next one a diff instead of a
 * property that silently stopped accepting values.
 */
const acceptsNothing = (ts: string): boolean => /\bnever\b/.test(ts);

export interface SurfaceProp {
  /** The name GObject registered — `icon-name`, dashed. */
  readonly girName: string;
  readonly ts: string;
  readonly constructOnly: boolean;
  readonly since?: string;
  readonly doc?: string;
  readonly deprecated: boolean;
}

export interface SurfaceDecl {
  /** `Gtk.Box` — the key the graph is walked on, the way GIR references. */
  readonly key: string;
  readonly namespace: string;
  readonly local: string;
  readonly gtype: string;
  /** This surface emits the interface — its own declaration, or an inlined foreign one. */
  readonly emitted: boolean;
  /**
   * Emitted here despite belonging to another namespace, because that namespace has no
   * surface of its own to import it from. See {@link buildWidgetSurface}.
   */
  readonly inlined: boolean;
  readonly bases: readonly string[];
  readonly props: readonly SurfaceProp[];
  readonly doc?: string;
}

export interface SurfaceWidget {
  readonly key: string;
  readonly namespace: string;
  readonly local: string;
  readonly gtype: string;
  /** Slot name -> the method that might adopt a child there. Candidates only. */
  readonly slotCandidates: ReadonlyMap<string, string>;
  /** Every declaration this widget draws members from, self first, by GType. */
  readonly chain: readonly string[];
  /** Own signals, for the runtime data module. */
  readonly signals: readonly string[];
}

export interface SurfaceEnum {
  readonly gtype: string;
  /** `Gtk.Orientation` as the surface spells it. */
  readonly reference: string;
  readonly nicks: readonly string[];
}

export interface WidgetSurface {
  readonly namespace: string;
  readonly version: string;
  readonly importName: string;
  readonly provenance: string;
  readonly widgets: readonly SurfaceWidget[];
  /** Key -> declaration, own and foreign, in emit order. */
  readonly declarations: ReadonlyMap<string, SurfaceDecl>;
  /** Nick unions this surface must emit itself, by enum GType. */
  readonly enums: ReadonlyMap<string, SurfaceEnum>;
  /** GIR namespace -> the import this surface needs for its VALUE types. */
  readonly namespaceImports: ReadonlyMap<string, string>;
  /** `@girs/<pkg>/surface` -> the names imported from another namespace's surface. */
  readonly surfaceImports: ReadonlyMap<string, readonly string[]>;
  /** Base -> members it must not contribute, because a nearer declaration disagrees. */
  readonly omissions: ReadonlyMap<string, ReadonlyMap<string, readonly string[]>>;
  /** Declaration GType -> its own properties' since versions, for the skew rule. */
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
  cls.glibTypeName === WIDGET_ROOT_GTYPE ||
  ancestorsOf(module, cls).some((a) => a.glibTypeName === WIDGET_ROOT_GTYPE);

/** The concrete widgets of one namespace — the set a renderer can actually create. */
function concreteWidgetsOf(module: GirModule): IntrospectedClass[] {
  return classLikeMembers(module).filter(
    (cls): cls is IntrospectedClass =>
      cls instanceof IntrospectedClass &&
      !cls.isAbstract &&
      cls.isIntrospectable &&
      typeof cls.glibTypeName === "string" &&
      isWidgetClass(module, cls),
  );
}

/**
 * Does this namespace get a `./surface` at all?
 *
 * Only namespaces that DECLARE widgets, not the 700-odd that merely appear in a
 * widget's property types. Answered per namespace and cached, because a widget's
 * base chain asks it once per foreign declaration.
 */
const qualifies = new WeakMap<GirModule, boolean>();
export function declaresWidgets(module: GirModule): boolean {
  const cached = qualifies.get(module);
  if (cached !== undefined) return cached;
  // Set before recursing: `isWidgetClass` walks parents, which can re-enter here
  // through a namespace that depends on this one.
  qualifies.set(module, false);
  const answer = concreteWidgetsOf(module).length > 0;
  qualifies.set(module, answer);
  return answer;
}

interface PrintedType {
  readonly text: string;
  /** GIR namespaces whose value import the text needs. */
  readonly namespaces: readonly string[];
  /** Enums whose nick alias the text references. */
  readonly enums: readonly SurfaceEnum[];
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
 */
function printPropType(
  module: GirModule,
  config: OptionsGeneration,
  type: TypeExpression,
  where: string,
): PrintedType {
  const namespaces = new Set<string>();
  const enums = new Map<string, SurfaceEnum>();

  const walk = (node: TypeExpression, depth: number): string => {
    if (depth > 8) throw new SurfaceError(`${where}: type nests deeper than 8 levels`);
    if (node instanceof ArrayType) {
      const inner = walk(node.type, depth + 1);
      const element = /[|&]/.test(inner) ? `(${inner})` : inner;
      return `${element}${"[]".repeat(Math.max(node.arrayDepth, 1))}`;
    }
    if (node instanceof OrType) {
      const parts = node.types.map((t) => walk(t, depth + 1));
      // `null` last, so `Gdk.Cursor | null` reads the way a human writes it.
      const ordered = [...parts.filter((p) => p !== "null"), ...parts.filter((p) => p === "null")];
      return [...new Set(ordered)].join(" | ");
    }
    if (node instanceof TypeIdentifier) {
      const resolved = node.resolveIdentifier(module, config);
      if (!resolved) throw new SurfaceError(`${where}: cannot resolve ${node.namespace}.${node.name}`);
      const owner = module.getInstalledImport(resolved.namespace);
      if (!owner) throw new SurfaceError(`${where}: namespace ${resolved.namespace} is not installed`);
      const enumeration = owner.getEnum(resolved.name);
      if (enumeration) {
        // Flags stay `number` in both positions, mirroring the runtime: GObject
        // exposes no way to resolve a nick SET ("horizontal|vertical"), so a union
        // of nicks would type something every host has to reject.
        if (enumeration.flags) return "number";
        const gtype = enumeration.glibTypeName;
        // An unregistered enum has no GType, therefore no nicks GObject knows,
        // therefore nothing a string could be checked against.
        if (!gtype) return `${resolved.namespace}.${resolved.name}`;
        namespaces.add(resolved.namespace);
        const reference = `${resolved.namespace}.${resolved.name}`;
        const nicks = [...enumeration.members.values()].map((m) => m.nick);
        enums.set(gtype, { gtype, reference, nicks });
        return `${nickAliasOf(gtype)} | ${reference}`;
      }
      namespaces.add(resolved.namespace);
      return `${resolved.namespace}.${resolved.name}`;
    }
    if (node instanceof NativeType) {
      if (node === NullType) return "null";
      return node.print(module, config);
    }
    throw new SurfaceError(`${where}: unsupported type expression ${node.constructor.name}`);
  };

  return { text: walk(type, 0), namespaces: [...namespaces], enums: [...enums.values()] };
}

/** First sentence, one line, `*​/`-safe — a hover blurb, not the manual. */
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
): SurfaceProp[] {
  const byName = new Map<string, SurfaceProp>();
  for (const prop of cls.props as IntrospectedProperty[]) {
    // WRITABLE ONLY — the axis `ConstructorProps` gets wrong. GObject spells
    // CONSTRUCT_ONLY out as `writable` too, so `writable` alone is the settable set.
    if (!prop.writable) continue;
    const girName = prop.girName;
    if (!girName) continue;
    if (byName.has(girName)) continue;
    const printed = printPropType(module, config, prop.type, `${keyOf(cls)}.${girName}`);
    collect(printed);
    byName.set(girName, {
      girName,
      ts: printed.text,
      constructOnly: prop.constructOnly,
      since: prop.metadata?.introducedVersion,
      doc: blurb(prop.doc),
      deprecated: prop.deprecated === true,
    });
  }
  return [...byName.values()].sort((a, b) => (a.girName < b.girName ? -1 : 1));
}

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

function slotCandidatesOf(module: GirModule, config: OptionsGeneration, cls: IntrospectedClass): Map<string, string> {
  const out = new Map<string, string>();
  const methods = [...cls.members].sort((a, b) => (a.name < b.name ? -1 : 1));
  for (const method of methods) {
    const slot = slotNameOf(method.name);
    if (!slot) continue;
    const params = method.parameters.filter((p) => p.direction === "in");
    if (params.length !== 1) continue;
    const type = params[0]!.type.unwrap();
    if (!(type instanceof TypeIdentifier)) continue;
    const resolved = type.resolveIdentifier(module, config);
    if (!resolved) continue;
    const owner = module.getInstalledImport(resolved.namespace);
    const target = owner?.getClass(resolved.name);
    if (!target || !isClassLike(target) || !isWidgetClass(module, target)) continue;
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
function computeOmissions(decls: ReadonlyMap<string, SurfaceDecl>): Map<string, Map<string, string[]>> {
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
 * GtkWidgetProps` reads `GtkWidgetProps` from `@girs/gtk-4.0/surface`. Inlining
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
 * Both halves are measured over the 475 namespaces in `girs/`, of which 102 declare
 * widgets. The drop case is ordinary: Gtk-4.0 and Adw-1 each reach exactly four such
 * declarations (`GObject.Object`, `GObject.InitiallyUnowned`, `Gio.ActionGroup`,
 * `Gio.ActionMap`), all empty. The inline case happens EXACTLY ONCE in the whole
 * corpus — `Gcr.Prompt`, a GObject interface with ten writable properties, in a
 * namespace whose widgets live in a different one — and it is the reason the rule is not
 * simply "drop it": the first version of this generator refused the input outright and
 * took the 705-namespace run down with it. One counterexample is a bounded bill, not an
 * argument for a surface per namespace: `@girs/gcr-3/surface` would be a widget surface
 * with no widgets in it.
 */
export function buildWidgetSurface(module: GirModule, config: OptionsGeneration): WidgetSurface | null {
  const widgetClasses = concreteWidgetsOf(module);
  if (widgetClasses.length === 0) return null;

  const namespaceImports = new Map<string, string>();
  const enums = new Map<string, SurfaceEnum>();
  const surfaceImports = new Map<string, Set<string>>();
  const importFromSurface = (owner: GirModule, name: string) => {
    const subpath = `${owner.importPath}/surface`;
    const names = surfaceImports.get(subpath) ?? new Set<string>();
    names.add(name);
    surfaceImports.set(subpath, names);
  };
  const collect = (printed: PrintedType) => {
    for (const ns of printed.namespaces) {
      const owner = module.getInstalledImport(ns);
      if (!owner) throw new SurfaceError(`namespace ${ns} is referenced but not installed`);
      namespaceImports.set(ns, owner.importPath);
    }
    for (const enumeration of printed.enums) {
      const owner = module.getInstalledImport(enumeration.reference.slice(0, enumeration.reference.indexOf(".")));
      // A nick union is emitted ONCE, by the surface that owns the enum, and imported
      // from there — `AdwHeaderBarProps` reads `GtkPackTypeNick` out of
      // `@girs/gtk-4.0/surface`. Enums from namespaces with no widgets (Pango, Gdk)
      // have no surface to live in, so each consumer emits its own alias for those.
      // Skipping the emission without adding the IMPORT is the shape the per-package
      // `tsc --project` caught first: 9 × TS2304 in Adw-1, naming 6 Gtk enums.
      if (owner && owner !== module && declaresWidgets(owner)) {
        importFromSurface(owner, nickAliasOf(enumeration.gtype));
        continue;
      }
      enums.set(enumeration.gtype, enumeration);
    }
  };

  const needed = new Map<string, IntrospectedBaseClass>();
  const chains = new Map<string, IntrospectedBaseClass[]>();
  for (const widget of widgetClasses) {
    const chain = declarationChain(module, widget);
    chains.set(keyOf(widget), chain);
    for (const decl of chain) needed.set(keyOf(decl), decl);
  }

  const dropped: string[] = [];
  const inlined: string[] = [];
  const declarations = new Map<string, SurfaceDecl>();

  for (const [key, cls] of needed) {
    const gtype = cls.glibTypeName;
    // A declaration GIR gives no GType is not a GObject type: it cannot be keyed,
    // looked up in the typelib, or named in GtkBuilder XML.
    if (!gtype) {
      if ((cls.props as IntrospectedProperty[]).some((p) => p.writable)) {
        throw new SurfaceError(`${key} has writable properties but no glib:type-name`);
      }
      dropped.push(key);
      continue;
    }
    const owner = cls.namespace as GirModule;
    const own = owner.namespace === module.namespace;
    const foreignWithoutSurface = !own && !declaresWidgets(owner);
    if (foreignWithoutSurface && !(cls.props as IntrospectedProperty[]).some((p) => p.writable)) {
      dropped.push(key);
      continue;
    }
    const emitted = own || foreignWithoutSurface;
    if (!emitted) {
      importFromSurface(owner, propsInterfaceOf(gtype));
      importFromSurface(owner, constructOnlyAliasOf(gtype));
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
      doc: emitted ? blurb(cls.doc) : undefined,
    });
  }

  // Bases second, so a base dropped above is dropped from every `extends` too.
  const withBases = new Map<string, SurfaceDecl>();
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

  const widgets: SurfaceWidget[] = widgetClasses
    .filter((widget) => withBases.has(keyOf(widget)))
    .map((widget) => ({
      key: keyOf(widget),
      namespace: widget.namespace.namespace,
      local: widget.name,
      gtype: widget.glibTypeName!,
      slotCandidates: slotCandidatesOf(module, config, widget),
      chain: (chains.get(keyOf(widget)) ?? [])
        .filter((decl) => withBases.has(keyOf(decl)))
        .map((decl) => decl.glibTypeName!),
      signals: [...widget.signals].map((signal) => signal.name).sort(),
    }))
    .sort((a, b) => (a.gtype < b.gtype ? -1 : 1));

  for (const widget of widgets) {
    const owner = module.getInstalledImport(widget.namespace);
    if (owner) namespaceImports.set(widget.namespace, owner.importPath);
  }

  // EVERY registered enum this namespace declares gets a nick union, not only the ones
  // its own widget properties happen to reference.
  //
  // The alternative — emit what you reference — is what shipped first, and the
  // per-package `tsc --project` failed it: `GtkSourceView.text-window-type` reaches
  // `Gtk.TextWindowType`, no Gtk-4.0 widget property does, so `@girs/gtk-4.0/surface` had
  // no `GtkTextWindowTypeNick` for `@girs/gtksource-5/surface` to import (TS2305, plus the
  // same shape for `GtkPackTypeNick` in Handy-1 against Gtk-3.0). The nick vocabulary of a
  // namespace is a property of the NAMESPACE, not of which of its own properties use it —
  // and emitting all of them also makes `ENUM_NICKS` a complete answer for a consumer
  // checking nicks against the installed library.
  for (const member of module.members.values()) {
    for (const candidate of Array.isArray(member) ? member : [member]) {
      if (!(candidate instanceof IntrospectedEnum)) continue;
      // Flags stay `number` everywhere, so a nick union for one would type something
      // every host has to reject; an unregistered enum has no nicks GObject knows.
      if (candidate.flags || !candidate.glibTypeName) continue;
      enums.set(candidate.glibTypeName, {
        gtype: candidate.glibTypeName,
        reference: `${module.namespace}.${candidate.name}`,
        nicks: [...candidate.members.values()].map((m) => m.nick),
      });
    }
  }

  const since = new Map<string, string>();
  for (const decl of withBases.values()) {
    if (!decl.emitted) continue;
    for (const prop of decl.props) if (prop.since) since.set(`${decl.gtype}.${prop.girName}`, prop.since);
  }

  const provenanceParts = [`${module.packageName}`];
  if (module.libraryVersion?.declaredByLibrary) provenanceParts.push(`library ${module.libraryVersion}`);
  // Named, not counted: both lists are how a GTK or dependency release that changes the
  // shape of the base graph shows up in a diff rather than in a support question.
  if (dropped.length > 0) provenanceParts.push(`dropped empty base(s): ${dropped.join(" ")}`);
  if (inlined.length > 0) provenanceParts.push(`inlined base(s) from a namespace with no surface: ${inlined.join(" ")}`);
  const unsettable = [...withBases.values()]
    .filter((decl) => decl.emitted)
    .flatMap((decl) => decl.props.filter((prop) => acceptsNothing(prop.ts)).map((prop) => `${decl.key}.${prop.girName}`))
    .sort();
  if (unsettable.length > 0) {
    provenanceParts.push(`prop(s) no TypeScript value satisfies: ${unsettable.join(" ")}`);
  }

  return {
    namespace: module.namespace,
    version: module.version,
    importName: module.importName,
    provenance: provenanceParts.join(" — "),
    widgets,
    declarations: withBases,
    enums,
    namespaceImports,
    surfaceImports: new Map([...surfaceImports].map(([k, v]) => [k, [...v].sort()])),
    omissions: computeOmissions(withBases),
    since,
  };
}
