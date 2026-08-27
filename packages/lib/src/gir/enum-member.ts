import type { FormatGenerator } from "../generators/generator.ts";
import type { GirMemberElement } from "../index.ts";
import type { OptionsLoad } from "../types/index.ts";
import { parseDoc, parseMetadata } from "../utils/gir-parsing.ts";
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

	constructor(name: string, value: string, parent: IntrospectedEnum, c_identifier: string, nick: string) {
		super(name, parent);
		this.value = value;
		this.c_identifier = c_identifier;
		this.nick = nick;
	}

	get namespace() {
		return this.parent.namespace;
	}

	accept(visitor: GirVisitor): GirEnumMember {
		const node = this.copy();
		return visitor.visitEnumMember?.(node) ?? node;
	}

	copy(): GirEnumMember {
		const { value, name, parent, c_identifier, nick } = this;

		return new GirEnumMember(name, value, parent, c_identifier, nick)._copyBaseProperties(this);
	}

	static fromXML(element: GirMemberElement, parent: IntrospectedEnum, options: OptionsLoad): GirEnumMember {
		const upper = element.$.name.toUpperCase();
		const c_identifier = element.$["c:identifier"];
		// The fallback reads the ORIGINAL member name, not `upper`: GIR writes
		// `baseline_fill` and the nick GObject registered is `baseline-fill`. It preserves
		// case, because a nick never differs from its name by case -- see `nick` above.
		const nick = element.$["glib:nick"] ?? element.$.name.replace(/_/g, "-");

		const enumMember = new GirEnumMember(upper, element.$.value, parent, c_identifier, nick);

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
