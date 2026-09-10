import type { FormatGenerator } from "../generators/generator.ts";
import type { GirMemberElement } from "../index.ts";
import type { OptionsLoad } from "../types/index.ts";
import { parseDoc, parseMetadata } from "../utils/gir-parsing.ts";
import { isDeprecated } from "../utils/girs.ts";
import type { GirVisitor } from "../visitor.ts";
import type { IntrospectedEnum } from "./enum.ts";
import { IntrospectedBase } from "./introspected-base.ts";

export class GirEnumMember extends IntrospectedBase<IntrospectedEnum> {
	value: string;
	c_identifier: string;
	/**
	 * The nick GObject registered for this member — GIR's `glib:nick`.
	 *
	 * This is the string a `g_object_set()` on an enum property accepts, and the
	 * only string form GTK will answer to; the C identifier is not. The parser has
	 * modelled the attribute since the beginning and nothing read it, so every
	 * consumer that needed a nick derived one from the member name instead.
	 *
	 * The derivation is right by luck rather than by construction, and the corpus says
	 * so in a way no single count does. `scripts/check-nick-derivation.mjs` measures it
	 * over `girs/` and asserts the two invariants this fallback rests on:
	 *
	 * - A nick differs from its member name ONLY in which underscores became dashes.
	 *   Some keep underscores the substitution would have replaced -- `audio_unit_client_activated`
	 *   registers as `audio_unit-client-activated`, and nothing but the attribute knows
	 *   which underscore survived. That is why the attribute wins wherever it exists.
	 * - Case is never part of that difference, so this fallback must not change case.
	 *   It used to call `toLowerCase()`, which was wrong in principle and invisible in
	 *   practice: no member LACKING the attribute has an uppercase name, so the fallback's
	 *   entire input is already lowercase and dropping the call changed no generated type.
	 *
	 * Gtk-4.0 and Adw-1 contradict no derivation at all, which is exactly how a derived
	 * nick survives review and then breaks in some other namespace. The script carries the
	 * counts, deliberately: quoted here they drift, and two repositories already quoted two
	 * different ones from this same corpus because each named a different derivation.
	 */
	nick: string;

	/**
	 * GIR's `deprecated="1"` on the member itself.
	 *
	 * A first-class field and not `metadata.deprecated`, for the same reason `nick` is
	 * one: `parseMetadata` only runs when docs are loaded, and this is a fact about the
	 * ENUM rather than about its documentation. Two members sharing a value is how GObject
	 * spells an alias -- `GTK_ALIGN_BASELINE` and `GTK_ALIGN_BASELINE_FILL` are both 4 --
	 * and the flag is the only thing that says which of the two names is the old one.
	 */
	deprecated: boolean;

	constructor(
		name: string,
		value: string,
		parent: IntrospectedEnum,
		c_identifier: string,
		nick: string,
		deprecated = false,
	) {
		super(name, parent);
		this.value = value;
		this.c_identifier = c_identifier;
		this.nick = nick;
		this.deprecated = deprecated;
	}

	/**
	 * The GIR's `value` as a number, or null where it is not one this can carry.
	 *
	 * THE INCIDENT. Without it the numbers were simply wrong, and since TS 5.0 made
	 * numeric enums literal unions, wrong in a way the compiler enforces:
	 * `Gtk.ResponseType.OK` is -5 upstream and was emitted as 4, so `response === -5`
	 * failed to compile against the very enum that defines it. Bitfields are worse than
	 * off-by-one -- `Gtk.StateFlags` declares 0,1,2,4,8,16 and got 0,1,2,3,4,5, so
	 * `SELECTED | INSENSITIVE` computed 7 where GTK means 12. Measured: 124 of 806 members
	 * in Gtk-4.0 and 424 of 751 in GLib had a value that is not their position.
	 *
	 * ONE RULE, TWO EMITTERS. The `.d.ts` enum initialiser and the `./vocabulary` runtime
	 * table both ask this. They used to be one rule and one caller; a second copy of
	 * "which GIR values TypeScript can carry" is the thing that would drift apart, and
	 * nothing would say so because both would still emit something.
	 *
	 * Null covers the two shapes GIR writes that no initialiser can hold: a symbolic or
	 * absent value (Vala emits `(null)`, and a char enum emits `'a'`), and an integer past
	 * `Number.MAX_SAFE_INTEGER`, where the literal loses precision and the emitted number
	 * is not the GIR's. Measured over the 718 GIRs in `girs/`: 32 of 34096 registered-enum
	 * members, none of them in Gtk, Adw, GLib or Gio.
	 */
	get numericValue(): number | null {
		const trimmed = this.value?.trim();
		if (trimmed === undefined || !/^-?\d+$/.test(trimmed)) return null;
		const parsed = Number(trimmed);
		return Number.isSafeInteger(parsed) ? parsed : null;
	}

	get namespace() {
		return this.parent.namespace;
	}

	accept(visitor: GirVisitor): GirEnumMember {
		const node = this.copy();
		return visitor.visitEnumMember?.(node) ?? node;
	}

	copy(): GirEnumMember {
		const { value, name, parent, c_identifier, nick, deprecated } = this;

		return new GirEnumMember(
			name,
			value,
			parent,
			c_identifier,
			nick,
			deprecated,
		)._copyBaseProperties(this);
	}

	static fromXML(element: GirMemberElement, parent: IntrospectedEnum, options: OptionsLoad): GirEnumMember {
		const upper = element.$.name.toUpperCase();
		const c_identifier = element.$["c:identifier"];
		// The fallback reads the ORIGINAL member name, not `upper`: GIR writes
		// `baseline_fill` and the nick GObject registered is `baseline-fill`. It preserves
		// case, because a nick never differs from its name by case -- see `nick` above.
		const nick = element.$["glib:nick"] ?? element.$.name.replace(/_/g, "-");

		const enumMember = new GirEnumMember(
			upper,
			element.$.value,
			parent,
			c_identifier,
			nick,
			isDeprecated(element),
		);

		if (options.loadDocs) {
			enumMember.doc = parseDoc(element);
			enumMember.metadata = parseMetadata(element);
		}

		return enumMember;
	}

	asString<T extends FormatGenerator<unknown>>(generator: T): ReturnType<T["generateEnumMember"]> {
		return generator.generateEnumMember(this) as ReturnType<T["generateEnumMember"]>;
	}
}
