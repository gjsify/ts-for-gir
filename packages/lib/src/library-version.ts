import type { GirConstantElement } from "./types/index.ts";

export class LibraryVersion {
	major: number | undefined;
	minor: number | undefined;
	patch: number | undefined;

	/**
	 * Whether the library ITSELF stated this version, through `MAJOR_VERSION` /
	 * `MINOR_VERSION` / `MICRO_VERSION` (or the `VERSION_*` spelling) constants in its
	 * GIR — as opposed to it being derived from the NAMESPACE version in the filename.
	 *
	 * The distinction is the entire point, because the two render identically and mean
	 * completely different things. `Gtk-4.0.gir` declares 4.23.0. `Gdk-4.0.gir` declares
	 * nothing — GDK ships INSIDE GTK and has no version of its own — so the namespace
	 * fallback below renders `4.0.0`, a string shaped exactly like a release that
	 * corresponds to no release. Measured across 32 published `@girs/*` packages: 12
	 * real, 17 of these, 3 absent.
	 *
	 * It only became visible once something tried to USE the field. `@gjsify/cli`'s
	 * `system-check` compares it against the installed library to catch types describing
	 * a newer API than the host has — a real defect, reproduced as `tsc` exit 0 beside a
	 * runtime `TypeError`. Against `@girs/gdk-4.0`'s `4.0.0` and a host GTK 4.22.4 that
	 * comparison reports an 18-minor skew that does not exist, so the consumer had to
	 * carry its own list of which packages to believe. A value that must be
	 * second-guessed per package is worse than no value: this makes absence the answer.
	 */
	declaredByLibrary = false;

	constructor(constants: GirConstantElement[] = [], version = "0.0.0") {
		const [_major, _minor, _micro] = version.split(".").filter((v) => v !== "");
		if (_major) {
			this.major = Number(_major) || undefined;
		}
		if (_minor) {
			this.minor = Number(_minor) || undefined;
		}
		if (_micro) {
			this.patch = Number(_micro) || undefined;
		}

		// The `&& constant.$.value` guard used to bind to the SECOND name only —
		// `name === "MAJOR_VERSION" || (name === "VERSION_MAJOR" && value)` — so a
		// valueless `MAJOR_VERSION` constant took the first branch and assigned
		// `Number(undefined) || undefined`, silently ERASING the component the
		// namespace fallback had just supplied. Hoisted so the guard covers both
		// spellings, which is what the shape was always reaching for.
		for (const constant of constants) {
			const { name, value } = constant.$;
			if (!value) continue;
			if (name === "MAJOR_VERSION" || name === "VERSION_MAJOR") {
				this.major = Number(value) || undefined;
				this.declaredByLibrary = true;
			}
			if (name === "MINOR_VERSION" || name === "VERSION_MINOR") {
				this.minor = Number(value) || undefined;
				this.declaredByLibrary = true;
			}
			if (name === "MICRO_VERSION" || name === "VERSION_MICRO") {
				this.patch = Number(value) || undefined;
				this.declaredByLibrary = true;
			}
		}
	}

	toString() {
		return `${this.major || "0"}.${this.minor || "0"}.${this.patch || "0"}`;
	}

	/** Compare two library versions and return -1 if this version is greater than the other, 1 if this version is less than the other, and 0 if they are equal. */
	compare(other: LibraryVersion) {
		if (this.major !== other.major) {
			return (this.major || 0) > (other.major || 0) ? -1 : 1;
		}
		if (this.minor !== other.minor) {
			return (this.minor || 0) > (other.minor || 0) ? -1 : 1;
		}
		if (this.patch !== other.patch) {
			return (this.patch || 0) > (other.patch || 0) ? -1 : 1;
		}
		return 0;
	}
}
