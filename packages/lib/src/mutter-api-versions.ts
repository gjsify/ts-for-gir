/**
 * The Mutter API versions this generator specialises — the ONE place a GNOME
 * cycle is declared.
 *
 * Mutter versions its introspected namespaces (`Clutter`, `Cogl`, `Meta`,
 * `Mtk`, and with them GNOME Shell's `St` and `Shell`) by an API number that
 * has nothing to do with the library version: GNOME 46..50 shipped API 14..18,
 * i.e. GNOME − 32.
 *
 * **GNOME 51 realigned the two.** `mutter_api_version` is now the GNOME major
 * itself, so the namespaces jumped 18 → 51 in one step, 19..50 will never
 * exist, and every cycle after this is simply its own number.
 *
 * That jump is why this list exists. The versions used to be written out by
 * hand in four files — `generics/{clutter,meta,st}.ts` and
 * `injections/shell.ts` — each ending in a speculative `+1`/`+2` ("possibly
 * future versions, adjust if necessary"). The guess encoded an assumption that
 * upstream broke, and honouring the break meant the same edit in four places
 * with nothing tying them together. Declaring a cycle is now one line here.
 *
 * Listing a version costs nothing when the GIR is absent: every consumer
 * registers these as OPTIONAL definitions, which are skipped for namespaces
 * the registry does not have.
 */
export const MUTTER_API_VERSIONS = [
	"10",
	"11",
	"12",
	"13",
	/** GNOME 46 */
	"14",
	/** GNOME 47 */
	"15",
	/** GNOME 48 */
	"16",
	/** GNOME 49 */
	"17",
	/** GNOME 50 — the last of the GNOME − 32 series */
	"18",
	/** GNOME 51 — API version realigned with the GNOME major */
	"51",
	/** GNOME 52, once it exists */
	"52",
] as const;

export type MutterApiVersion = (typeof MUTTER_API_VERSIONS)[number];

/**
 * The known API versions from `first` onward.
 *
 * Not every namespace goes back as far as Clutter does: `St` is specialised
 * from 12 and `Shell` from 14, because the older GIRs lack classes their
 * modifiers assert and would throw rather than degrade. The floor is a fact
 * about the namespace; the list of cycles is not — so the floor stays with the
 * namespace and only the list is shared.
 */
export function mutterApiVersionsFrom(first: MutterApiVersion): MutterApiVersion[] {
	const index = MUTTER_API_VERSIONS.indexOf(first);
	if (index < 0) {
		throw new Error(`mutterApiVersionsFrom: ${first} is not a known Mutter API version`);
	}
	return MUTTER_API_VERSIONS.slice(index);
}
