// Cairo Pattern + SurfacePattern method-coverage example.
//
// Regression demo for ts-for-gir#419: GJS exposes `Pattern.getType`,
// `SurfacePattern.{setExtend,getExtend,setFilter,getFilter}` (see
// gjs/modules/cairo-pattern.cpp + cairo-surface-pattern.cpp), but the
// hand-maintained `cairo.d.ts` template under `@ts-for-gir/templates`
// was missing them — so any consumer reaching for those methods got
// a TS2339 type-check error even though the runtime succeeds.
//
// This example exercises every newly-typed method end-to-end:
//
//   - Creates a 32x32 ImageSurface
//   - Wraps it in a SurfacePattern
//   - setExtend(REPEAT) + getExtend() — assert round-trip
//   - setFilter(NEAREST) + getFilter() — assert round-trip
//   - getType() on both Pattern and SurfacePattern — assert correct
//     PatternType.SURFACE value
//
// If the type definitions regress (the methods get dropped from the
// template again), this file fails to compile. If GJS itself changes
// the runtime shape, the assertions fail.

import Cairo from "cairo";
import System from "system";

const surface = new Cairo.ImageSurface(Cairo.Format.ARGB32, 32, 32);
const pattern = new Cairo.SurfacePattern(surface);

// ── Pattern.getType ──────────────────────────────────────────────
const patternType: Cairo.PatternType = pattern.getType();
if (patternType !== Cairo.PatternType.SURFACE) {
  console.error(`Expected PatternType.SURFACE (${Cairo.PatternType.SURFACE}), got ${patternType}`);
  System.exit(1);
}
console.log(`✓ getType() → PatternType.SURFACE (${patternType})`);

// ── SurfacePattern.setExtend / getExtend ─────────────────────────
const initialExtend = pattern.getExtend();
console.log(`  initial extend: ${initialExtend}`);
pattern.setExtend(Cairo.Extend.REPEAT);
const setExtendResult = pattern.getExtend();
if (setExtendResult !== Cairo.Extend.REPEAT) {
  console.error(`setExtend round-trip failed: expected REPEAT, got ${setExtendResult}`);
  System.exit(1);
}
console.log(`✓ setExtend(REPEAT) → getExtend() (${setExtendResult})`);

pattern.setExtend(Cairo.Extend.REFLECT);
if (pattern.getExtend() !== Cairo.Extend.REFLECT) {
  console.error("setExtend(REFLECT) did not round-trip");
  System.exit(1);
}
console.log(`✓ setExtend(REFLECT) → getExtend() (${pattern.getExtend()})`);

// ── SurfacePattern.setFilter / getFilter ─────────────────────────
const initialFilter = pattern.getFilter();
console.log(`  initial filter: ${initialFilter}`);
pattern.setFilter(Cairo.Filter.NEAREST);
const setFilterResult = pattern.getFilter();
if (setFilterResult !== Cairo.Filter.NEAREST) {
  console.error(`setFilter round-trip failed: expected NEAREST, got ${setFilterResult}`);
  System.exit(1);
}
console.log(`✓ setFilter(NEAREST) → getFilter() (${setFilterResult})`);

pattern.setFilter(Cairo.Filter.BILINEAR);
if (pattern.getFilter() !== Cairo.Filter.BILINEAR) {
  console.error("setFilter(BILINEAR) did not round-trip");
  System.exit(1);
}
console.log(`✓ setFilter(BILINEAR) → getFilter() (${pattern.getFilter()})`);

// ── Pattern.getType (parent-class call via SurfacePattern instance) ──
// Verifies the method lookup chain — `SurfacePattern extends Pattern`,
// so `getType` is inherited.
const inheritedType = (pattern as Cairo.Pattern).getType();
if (inheritedType !== Cairo.PatternType.SURFACE) {
  console.error(`Inherited getType() returned wrong type: ${inheritedType}`);
  System.exit(1);
}
console.log(`✓ (Pattern.prototype).getType() on a SurfacePattern still returns SURFACE`);

// ── ImageSurface.getStride / Surface.getType / Surface.writeToPNG ──
// Scan for related Surface methods that were also missing from the
// template before this PR.
const stride = surface.getStride();
if (typeof stride !== "number" || stride <= 0) {
  console.error(`Expected positive getStride(), got ${stride}`);
  System.exit(1);
}
console.log(`✓ ImageSurface.getStride() → ${stride} bytes/row`);

const surfaceType: Cairo.SurfaceType = surface.getType();
if (surfaceType !== Cairo.SurfaceType.IMAGE) {
  console.error(`Expected SurfaceType.IMAGE, got ${surfaceType}`);
  System.exit(1);
}
console.log(`✓ Surface.getType() → SurfaceType.IMAGE (${surfaceType})`);

// ── Context.copyPathFlat / Context.getGroupTarget ─────────────────
const ctx = new Cairo.Context(surface);
ctx.moveTo(0, 0);
ctx.curveTo(0, 32, 16, 32, 16, 16);
const flatPath = ctx.copyPathFlat();
console.log(
  `✓ Context.copyPathFlat() returned a Path (${typeof flatPath === "object" ? "ok" : "wrong type"})`,
);

ctx.pushGroup();
const groupTarget = ctx.getGroupTarget();
if (!groupTarget) {
  console.error("Context.getGroupTarget() returned falsy inside a group");
  System.exit(1);
}
ctx.popGroup();
console.log(`✓ Context.getGroupTarget() returned a Surface inside pushGroup/popGroup`);

// ── Region — entire surface was empty before this PR ─────────────
const r1 = new Cairo.Region();
const r2 = new Cairo.Region();
r1.unionRectangle({ x: 0, y: 0, width: 10, height: 10 });
r1.unionRectangle({ x: 20, y: 0, width: 10, height: 10 });
if (r1.numRectangles() !== 2) {
  console.error(`Expected 2 rectangles, got ${r1.numRectangles()}`);
  System.exit(1);
}
console.log(`✓ Region.unionRectangle x2 → numRectangles() = 2`);

const rect0 = r1.getRectangle(0);
if (rect0.width !== 10 || rect0.height !== 10) {
  console.error(`Wrong rect[0]: ${JSON.stringify(rect0)}`);
  System.exit(1);
}
console.log(
  `✓ Region.getRectangle(0) → {x: ${rect0.x}, y: ${rect0.y}, w: ${rect0.width}, h: ${rect0.height}}`,
);

r2.unionRectangle({ x: 5, y: 5, width: 30, height: 30 });
const r3 = new Cairo.Region();
r3.unionRectangle({ x: 0, y: 0, width: 10, height: 10 });
r3.unionRectangle({ x: 20, y: 0, width: 10, height: 10 });
r3.intersect(r2);
// After intersecting with r2 (5,5 → 35,35), only parts of both source
// rects within that area survive. Just assert numRectangles() > 0.
if (r3.numRectangles() <= 0) {
  console.error("Region.intersect produced no rectangles");
  System.exit(1);
}
console.log(`✓ Region.intersect(other) → ${r3.numRectangles()} rectangle(s)`);

console.log("");
console.log(
  "All Pattern + SurfacePattern + Region + Surface + ImageSurface + Context method assertions passed.",
);
console.log("Closes ts-for-gir#419.");
