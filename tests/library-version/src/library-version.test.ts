// Tests for `LibraryVersion` — specifically the distinction between a version the
// library STATED and one derived from the namespace in its filename.
//
// WHY THIS EXISTS
//
// `libraryVersion` is published on every `@girs/*` package and named in gjsify's ADR
// 0008, and for a long time nothing read it. Once `@gjsify/cli`'s `system-check` began
// comparing it against the installed library — to catch types that describe a newer API
// than the host has, a defect reproduced as `tsc` exit 0 beside a runtime `TypeError` —
// the field turned out to mean two different things with no way to tell them apart.
//
// Measured across 32 published `@girs/*` packages: 12 carried a real upstream release,
// 17 carried the namespace version padded to three components (`@girs/gdk-4.0` →
// `4.0.0`, while GDK ships inside GTK 4.2x), 3 carried nothing. Compared naively, the
// middle group reports an 18-minor skew that does not exist, so the consumer had to
// keep a hand-maintained list of which packages to believe — which is the thing a
// declaration is supposed to remove.
//
// So the constructor now records WHERE the version came from, and the package template
// omits the field entirely when the library did not state one. Absence is a fact a
// consumer can act on; a plausible-looking wrong number is not.

import { describe, expect, it } from "vitest";

import { LibraryVersion, PACKAGE_DESC } from "@ts-for-gir/lib";
import type { GirConstantElement } from "@ts-for-gir/lib";

/** A GIR `<constant>` element, trimmed to the two attributes this reads. */
function constant(name: string, value?: string): GirConstantElement {
  return {
    $: { name, ...(value === undefined ? {} : { value }) },
  } as unknown as GirConstantElement;
}

const GTK_CONSTANTS = [
  constant("MAJOR_VERSION", "4"),
  constant("MINOR_VERSION", "23"),
  constant("MICRO_VERSION", "0"),
];

describe("LibraryVersion", () => {
  it("reports a version the library states as declared", () => {
    const version = new LibraryVersion(GTK_CONSTANTS, "4.0");
    expect(version.toString()).toBe("4.23.0");
    expect(version.declaredByLibrary).toBe(true);
  });

  it("accepts the VERSION_MAJOR spelling too", () => {
    const version = new LibraryVersion(
      [
        constant("VERSION_MAJOR", "1"),
        constant("VERSION_MINOR", "10"),
        constant("VERSION_MICRO", "0"),
      ],
      "1",
    );
    expect(version.toString()).toBe("1.10.0");
    expect(version.declaredByLibrary).toBe(true);
  });

  it("does NOT report the namespace fallback as declared", () => {
    // The Gdk-4.0 case: no version constants at all, so the only thing available is
    // the namespace version from the filename. It still renders — callers that want
    // a string get one — but it is marked as not the library's own claim.
    const version = new LibraryVersion([], "4.0");
    expect(version.toString()).toBe("4.0.0");
    expect(version.declaredByLibrary).toBe(false);
  });

  it("treats a bare namespace with no constants as undeclared", () => {
    const version = new LibraryVersion([], "1");
    expect(version.declaredByLibrary).toBe(false);
  });

  it("does not let a VALUELESS constant erase the namespace fallback", () => {
    // The regression this pins. The guard used to read
    //   name === "MAJOR_VERSION" || (name === "VERSION_MAJOR" && value)
    // so a `MAJOR_VERSION` with no value took the FIRST branch and assigned
    // `Number(undefined) || undefined`, wiping the component the fallback had just
    // supplied — turning 4.0 into 0.0.0 while looking like a version bump.
    const version = new LibraryVersion([constant("MAJOR_VERSION")], "4.0");
    expect(version.major).toBe(4);
    expect(version.toString()).toBe("4.0.0");
    // And a valueless constant is not a claim, so it must not flip the flag.
    expect(version.declaredByLibrary).toBe(false);
  });

  it("keeps a partial declaration usable", () => {
    // A GIR that states only the major: the stated part wins, the rest stays from the
    // namespace. Marked declared because the library did state something.
    const version = new LibraryVersion([constant("MAJOR_VERSION", "3")], "2.0");
    expect(version.major).toBe(3);
    expect(version.minor).toBe(undefined);
    expect(version.declaredByLibrary).toBe(true);
  });

  it("still orders versions for the pick-the-newest-GIR comparison", () => {
    // `DependencyManager` sorts candidate GIR files by this, so the flag must not
    // disturb ordering.
    const older = new LibraryVersion(GTK_CONSTANTS, "4.0");
    const newer = new LibraryVersion(
      [
        constant("MAJOR_VERSION", "4"),
        constant("MINOR_VERSION", "24"),
        constant("MICRO_VERSION", "1"),
      ],
      "4.0",
    );
    expect(newer.compare(older)).toBe(-1);
    expect(older.compare(newer)).toBe(1);
    expect(older.compare(new LibraryVersion(GTK_CONSTANTS, "4.0"))).toBe(0);
  });
});

describe("PACKAGE_DESC", () => {
  it("names the version when the library stated it", () => {
    expect(PACKAGE_DESC("gtk-4.0", new LibraryVersion(GTK_CONSTANTS, "4.0"))).toContain(
      "generated from library version 4.23.0",
    );
  });

  it("makes no version claim for a namespace-derived value", () => {
    // Every published `@girs/gdk-4.0` said "generated from library version 4.0.0",
    // which was not true of the GIR it was generated from.
    const desc = PACKAGE_DESC("gdk-4.0", new LibraryVersion([], "4.0"));
    expect(desc).not.toContain("library version");
    expect(desc).toBe("GJS TypeScript type definitions for gdk-4.0");
  });

  it("makes no claim when there is no version at all", () => {
    expect(PACKAGE_DESC("gjs")).toBe("GJS TypeScript type definitions for gjs");
  });
});
