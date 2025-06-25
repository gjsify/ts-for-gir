import type { GirConstantElement } from "./types/index.ts";

export class LibraryVersion {
	major: number | undefined;
	minor: number | undefined;
	patch: number | undefined;

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

		for (const constant of constants) {
			if (constant.$.name === "MAJOR_VERSION" || (constant.$.name === "VERSION_MAJOR" && constant.$.value)) {
				this.major = Number(constant.$.value) || undefined;
			}
			if (constant.$.name === "MINOR_VERSION" || (constant.$.name === "VERSION_MINOR" && constant.$.value)) {
				this.minor = Number(constant.$.value) || undefined;
			}
			if (constant.$.name === "MICRO_VERSION" || (constant.$.name === "VERSION_MICRO" && constant.$.value)) {
				this.patch = Number(constant.$.value) || undefined;
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
