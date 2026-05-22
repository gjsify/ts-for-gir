/**
 * GObject.registerClass + static block — ordering trap demo.
 *
 * Reproducer for GNOME/gjs work_items/704:
 *   https://gitlab.gnome.org/GNOME/gjs/-/work_items/704
 *
 * `GObject.registerClass()` inside a `static { … }` block runs in the
 * source-order position of that block. If a `static [GObject.interfaces]`
 * (or any other field `registerClass` reads) appears AFTER the static
 * block, registerClass fires too early — the interfaces / properties /
 * vfuncs declared there are not picked up. The failure shows up at
 * class evaluation time on current GJS (1.86+) as
 *   `Gjs-CRITICAL: Could not find definition of virtual function init`
 * thrown out of `_classInit`. Older GJS versions deferred the same
 * error to the first `vfunc_init` invocation.
 *
 * This example demonstrates the broken pattern side-by-side with two
 * fixed ones, runs all three, and asserts:
 *   - constructing the broken class raises the expected ordering error
 *   - the corrected static-block-last class registers + runs vfunc_init
 *   - the inline-metadata class registers + runs vfunc_init
 *
 * See https://gjsify.github.io/gjsify/patterns/gobject-classes/ for the
 * full pattern reference.
 */

import Gio from "gi://Gio?version=2.0";
import GObject from "gi://GObject?version=2.0";
import System from "system";

// ─── Broken: registerClass-first, static fields after ────────────────────
//
// `static { GObject.registerClass(BrokenFoo); }` runs first. By the time
// it executes, `static [GObject.interfaces]` is still `undefined`. On
// current GJS the registerClass call itself throws out of `_classInit`
// because the class declares a `vfunc_init` that doesn't match any
// interface the registered class implements — the trap is *visible*
// at module load on this runtime, but on older GJS it deferred to the
// first `.init()` call. Either way it's a runtime error caused by
// source ordering, not a missing API.
//
// Wrapped in a try block because the throw happens at the
// `class BrokenFoo` declaration's static-block evaluation — without
// the try, the whole module file fails to load and the working demos
// below never run.

let brokenError: string | null = null;
try {
	class BrokenFoo extends GObject.Object {
		static override $gtype: GObject.GType<BrokenFoo>;
		static { GObject.registerClass(BrokenFoo); }
		static [GObject.interfaces] = [Gio.Initable];
		vfunc_init(_cancellable: Gio.Cancellable | null): boolean {
			print("[BrokenFoo] vfunc_init body — should NOT print");
			return true;
		}
	}
	const broken = new BrokenFoo() as unknown as Gio.Initable;
	broken.init(null);
} catch (err) {
	brokenError = err instanceof Error ? err.message : String(err);
}

if (brokenError === null) {
	printerr("FAIL: BrokenFoo was expected to throw (either at registerClass time or at init() time), but completed cleanly");
	System.exit(1);
}
print(`✓ BrokenFoo failed as expected: ${brokenError}`);

// ─── Working: registerClass-last, static fields first ────────────────────
//
// Source order: `vfunc_init` (prototype — order-independent), then
// `static [GObject.interfaces] = […]`, then `static { registerClass(...); }`.
// When registerClass runs, the interfaces array is already assigned, so
// Initable's vtable is wired up and `vfunc_init` lands as the init impl.

class WorkingFoo extends GObject.Object {
	static override $gtype: GObject.GType<WorkingFoo>;
	static [GObject.interfaces] = [Gio.Initable];
	vfunc_init(_cancellable: Gio.Cancellable | null): boolean {
		print("[WorkingFoo] vfunc_init body — should print");
		return true;
	}
	static { GObject.registerClass(WorkingFoo); }
}

const working = new WorkingFoo() as unknown as Gio.Initable;
working.init(null);
print("✓ WorkingFoo.init() ran the vfunc body");

// ─── Inline (preferred Form A): metadata in registerClass call ───────────
//
// Sidesteps the ordering question entirely. No `static [GObject.*] = …`
// initializers exist — everything `registerClass` needs is in its own
// arguments. This is the form `patterns/gobject-classes` recommends.

class InlineFoo extends GObject.Object {
	static override $gtype: GObject.GType<InlineFoo>;
	vfunc_init(_cancellable: Gio.Cancellable | null): boolean {
		print("[InlineFoo] vfunc_init body — should print");
		return true;
	}
	static {
		GObject.registerClass(
			{
				GTypeName: "InlineFoo",
				Implements: [Gio.Initable],
			},
			InlineFoo,
		);
	}
}

const inline = new InlineFoo() as unknown as Gio.Initable;
inline.init(null);
print("✓ InlineFoo.init() ran the vfunc body");

print("");
print("Done — see https://gjsify.github.io/gjsify/patterns/gobject-classes/ for the pattern reference.");
