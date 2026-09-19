#!/usr/bin/env node
// Refuses to cut a release into an npm publishing outage — including one npm has
// ANNOUNCED but not started yet.
//
// WHY. A ts-for-gir release is not an event, it is a THREE-AND-A-HALF-HOUR SWEEP.
// The tag triggers `release-types.yml`, which commits the generated tree into
// gjsify/types, whose `release.yml` then publishes ~716 `@girs/*` packages one at a
// time. Nothing in that path has ever looked at npm's own status page.
//
// Measured, v5.3.0 on 2026-09-19 (UTC throughout):
//
//   14:41  tag v5.3.0 pushed
//   14:44  the gjsify/types sweep starts
//   17:00  npm's scheduled maintenance window opens; `Package publishing` goes
//          `under_maintenance`
//   17:18  `@girs/atrilview-1.5.0` gets `E503 Service Unavailable` on its PUT
//   17:37  ten retries later (~20 min of the retry budget) it gives up on `E404`
//   18:15  the sweep ends: 715 of 716 published, run red
//   19:00  the window closes
//   19:02  a re-run publishes the one missing package in FOUR SECONDS
//
// One package lost, a three-and-a-half-hour sweep red, and a recovery — all of it
// avoidable by moving the cut two hours.
//
// THE OBVIOUS CHECK WOULD NOT HAVE CAUGHT IT, and that is the whole design.
// "Is `Package publishing` operational right now?" asked at 14:41 answers YES: the
// window had not opened. Measured from the status API's own record, that window was
// created at **2026-09-18T21:00:58Z** — nearly eighteen hours before the cut — and
// listed `Package publishing` among its components the entire time. It was public,
// scheduled and ignorable in advance. So this script asks TWO questions, and the
// second one is the one that pays:
//
//   1. is `Package publishing` operational NOW?           (catches a window already open)
//   2. does any scheduled window touching `Package publishing` overlap the next
//      `--horizon` hours?                                  (catches the announced one)
//
// It reads the COMPONENT, never the global banner. During the v5.3.0 incident the
// page-level indicator said `maintenance` while `Package installation` stayed
// `operational` — the banner cannot distinguish "the website is down" from "nobody
// can publish", and only the second one can half-land a release.
//
// FAIL CLOSED. A status API that times out, answers non-200, returns unparseable
// JSON, or no longer carries a component by that name is UNKNOWN — and unknown
// BLOCKS. This repository already owns that rule in another place: a failed check is
// never "current", it is unknown. The failure mode this refuses is the one that
// reads best in a log: "could not check" silently becoming "all clear".
//
// OVERRIDABLE, WITH A REASON. One day a release has to go out inside a window, and a
// gate with no escape hatch gets deleted rather than argued with. So `--override`
// exists — and it REQUIRES a reason, because a flag that can be typed without saying
// why is a rubber stamp. The reason is echoed into the log, where the next person
// reading the release output will see it.
//
// VISIBLE IS NOT INSTALLABLE, and this script deliberately does not claim to know
// either. It reports what npm says about its own write path; it does not probe the
// registry. Asking the registry is a different question with its own trap: a
// packument read says a version EXISTS, a tarball fetch says it INSTALLS, and those
// came apart for real at v5.2.0, when all four `@girs/sdk-*` bundles were visible at
// a version whose dependency closure was not yet installable. The instrument for
// AFTER a sweep is gjsify/types' `--verify-only` plus its cold `npm install` probe;
// this one is for BEFORE.
//
// Usage:
//   node --no-warnings scripts/check-npm-status.mjs
//   node --no-warnings scripts/check-npm-status.mjs --horizon=4
//   node --no-warnings scripts/check-npm-status.mjs --override="hotfix, window is website-only"
//   node --no-warnings scripts/check-npm-status.mjs --status-url=file:///abs/path/to/fixture
//
// A fixture directory holds `components.json` and
// `scheduled-maintenances/upcoming.json`, the same two files the live API serves.
// That is the runnable version of the self-test's stubs: force `Package publishing`
// to `under_maintenance` in the first file and this script exits 1.

const DEFAULT_BASE = "https://status.npmjs.org/api/v2";

/**
 * The component that decides whether a sweep can run. Not the page-level indicator:
 * `Package installation` stayed operational through the v5.3.0 window while
 * publishing did not, and only publishing can half-land a release.
 */
const COMPONENT = "Package publishing";

/**
 * How far ahead to look for an announced window, in hours. The v5.3.0 sweep took
 * 3h31m wall-clock (14:44 → 18:15) for 716 packages; 4 is that rounded up. A cut at
 * 14:41 with this horizon reaches 18:41 and therefore overlaps the 17:00–19:00
 * window that actually bit — which is the arm of the self-test that proves it.
 */
const DEFAULT_HORIZON_HOURS = 4;

const TIMEOUT_MS = 15000;

// --- Reading the status API --------------------------------------------------

/**
 * The named component's status, or `unknown` with the reason it could not be read.
 *
 * Every failure collapses to `unknown` ON PURPOSE, including a component that is
 * simply absent: npm renaming or retiring `Package publishing` must not read as
 * "nothing wrong". A gate that passes when it cannot find its own subject is worse
 * than no gate, because it reports success.
 *
 * @returns {{ status: string, reason?: string }}
 */
export function componentStatus(payload, name = COMPONENT) {
  if (payload === null || typeof payload !== "object" || !Array.isArray(payload.components)) {
    return { status: "unknown", reason: "components.json had no `components` array" };
  }
  const wanted = name.toLowerCase();
  const found = payload.components.find((c) => typeof c?.name === "string" && c.name.toLowerCase() === wanted);
  if (!found) {
    return { status: "unknown", reason: `no component named ${JSON.stringify(name)} — renamed or retired?` };
  }
  if (typeof found.status !== "string" || found.status === "") {
    return { status: "unknown", reason: `component ${JSON.stringify(name)} carries no status` };
  }
  return { status: found.status };
}

/** Half-open overlap: a window touching the horizon at its very edge does not count. */
export function overlaps(startMs, endMs, fromMs, toMs) {
  return startMs < toMs && endMs > fromMs;
}

/**
 * Scheduled windows that touch the named component and overlap `[from, to)`.
 *
 * A window with no `scheduled_until` is treated as reaching the END of the horizon
 * rather than as a point in time — an open-ended outage is the worst case, not the
 * mildest, and rounding it down to zero length would let exactly that one through.
 *
 * @returns {Array<{name: string, from: string, until: string|null, status: string}>}
 */
export function windowsOverlapping(maintenances, name, fromMs, toMs) {
  if (!Array.isArray(maintenances)) return [];
  const wanted = name.toLowerCase();
  const hits = [];
  for (const m of maintenances) {
    if (m === null || typeof m !== "object") continue;
    if (m.status === "completed" || m.status === "cancelled") continue;
    const touches = Array.isArray(m.components)
      && m.components.some((c) => typeof c?.name === "string" && c.name.toLowerCase() === wanted);
    if (!touches) continue;
    const startMs = Date.parse(m.scheduled_for ?? "");
    if (Number.isNaN(startMs)) continue;
    const parsedEnd = Date.parse(m.scheduled_until ?? "");
    const endMs = Number.isNaN(parsedEnd) ? toMs : parsedEnd;
    if (!overlaps(startMs, endMs, fromMs, toMs)) continue;
    hits.push({
      name: typeof m.name === "string" ? m.name : "scheduled maintenance",
      from: m.scheduled_for,
      until: m.scheduled_until ?? null,
      status: typeof m.status === "string" ? m.status : "unknown",
    });
  }
  return hits;
}

/**
 * The decision, given everything already read. Pure, so the self-test can drive
 * every branch — including the ones that must go red.
 *
 * @returns {{ ok: boolean, blocked: boolean, lines: string[] }}
 */
export function verdict({ status, reason, windows, override }) {
  const lines = [];
  let blocked = false;

  if (status === "operational") {
    lines.push(`${COMPONENT}: operational`);
  } else if (status === "unknown") {
    blocked = true;
    lines.push(`${COMPONENT}: UNKNOWN — ${reason ?? "could not be read"}`);
    lines.push("  an unreadable status is not an operational one; this blocks rather than guesses");
  } else {
    blocked = true;
    lines.push(`${COMPONENT}: ${status.toUpperCase()} — npm is not accepting publishes normally`);
  }

  for (const w of windows) {
    blocked = true;
    lines.push(`announced window overlaps the sweep: ${w.name} [${w.status}] ${w.from} → ${w.until ?? "open-ended"}`);
  }
  if (windows.length > 0) {
    lines.push("  the sweep would still be running when it opens — cut after it closes instead");
  }

  if (blocked && override) {
    lines.push(`OVERRIDDEN on purpose: ${override}`);
    return { ok: true, blocked, lines };
  }
  return { ok: !blocked, blocked, lines };
}

/**
 * One JSON document, or the reason it is unknown. Never throws.
 *
 * `file:` is handled off the `fetch` path because Node's `fetch` REFUSES it
 * outright. That is not a detail: the first version documented
 * `--status-url=file:///…` as the way to prove this check red, and pointing it at a
 * fixture produced `fetch failed` → `unknown` → blocked. Blocking was the right
 * ANSWER for the wrong REASON, which is the shape that makes a gate look tested
 * when it is not — it would have reported exactly the same thing for a fixture
 * saying `operational`.
 */
async function readJson(url, fetchImpl, timeoutMs) {
  if (url.startsWith("file://")) {
    try {
      const { readFile } = await import("node:fs/promises");
      return { value: JSON.parse(await readFile(new URL(url), "utf8")) };
    } catch (error) {
      return { error: `${url}: ${error?.message ?? error}` };
    }
  }
  try {
    const response = await fetchImpl(url, {
      signal: AbortSignal.timeout(timeoutMs),
      headers: { Accept: "application/json", "Cache-Control": "no-cache" },
    });
    if (!response.ok) return { error: `HTTP ${response.status} from ${url}` };
    return { value: await response.json() };
  } catch (error) {
    return { error: `${url}: ${error?.message ?? error}` };
  }
}

/**
 * Both questions, against a live or stubbed API.
 * @returns {Promise<{status: string, reason?: string, windows: Array<object>}>}
 */
export async function inspect({ base, fetchImpl, now, horizonHours, timeoutMs = TIMEOUT_MS }) {
  const components = await readJson(`${base}/components.json`, fetchImpl, timeoutMs);
  if (components.error) return { status: "unknown", reason: components.error, windows: [] };

  const { status, reason } = componentStatus(components.value);

  const scheduled = await readJson(`${base}/scheduled-maintenances/upcoming.json`, fetchImpl, timeoutMs);
  if (scheduled.error) {
    return { status: "unknown", reason: `could not read the scheduled windows — ${scheduled.error}`, windows: [] };
  }

  const fromMs = now;
  const toMs = now + horizonHours * 3600_000;
  const windows = windowsOverlapping(scheduled.value?.scheduled_maintenances, COMPONENT, fromMs, toMs);
  return { status, reason, windows };
}

// --- SELF-TEST ---------------------------------------------------------------
//
// Runs on every invocation, and every arm that MUST go red is here. The one that
// matters is `the v5.3.0 incident`: the component reads `operational`, which is what
// the naive check would have seen and passed on, and the announced window still
// blocks it. If that arm ever goes green, this script has been refactored back into
// the bug it exists to prevent.

const T0 = Date.parse("2026-09-19T14:41:00Z");
const INCIDENT_WINDOW = {
  name: "Scheduled maintenance",
  status: "scheduled",
  scheduled_for: "2026-09-19T17:00:00.000Z",
  scheduled_until: "2026-09-19T19:00:00.000Z",
  components: [{ name: "www.npmjs.com website" }, { name: "Package publishing" }],
};

/** @type {Array<[string, object, boolean]>} label, verdict input, expected `ok` */
const VECTORS = [
  ["all clear", { status: "operational", windows: [] }, true],
  ["the v5.3.0 incident: operational NOW, window announced", {
    status: "operational",
    windows: windowsOverlapping([INCIDENT_WINDOW], COMPONENT, T0, T0 + 4 * 3600_000),
  }, false],
  ["a window already open", { status: "under_maintenance", windows: [] }, false],
  ["degraded is not operational", { status: "degraded_performance", windows: [] }, false],
  ["major outage", { status: "major_outage", windows: [] }, false],
  ["unknown blocks", { status: "unknown", reason: "HTTP 503", windows: [] }, false],
  ["override lets a block through", { status: "under_maintenance", windows: [], override: "hotfix" }, true],
  ["override on a clean run changes nothing", { status: "operational", windows: [], override: "x" }, true],
];

const failures = [];
for (const [label, input, expectedOk] of VECTORS) {
  const got = verdict({ windows: [], ...input }).ok;
  if (got !== expectedOk) failures.push(`${label}: expected ok=${expectedOk}, got ok=${got}`);
}

// The horizon is what makes the incident arm red. Proved by shortening it: with one
// hour, the same window is out of reach and the same release sails through — which is
// how we know the arm above is testing the horizon and not something incidental.
if (windowsOverlapping([INCIDENT_WINDOW], COMPONENT, T0, T0 + 4 * 3600_000).length !== 1) {
  failures.push("a 4h horizon from 14:41 must reach the 17:00–19:00 window");
}
if (windowsOverlapping([INCIDENT_WINDOW], COMPONENT, T0, T0 + 1 * 3600_000).length !== 0) {
  failures.push("a 1h horizon from 14:41 must NOT reach it — otherwise the horizon is not what is being tested");
}
if (windowsOverlapping([{ ...INCIDENT_WINDOW, status: "completed" }], COMPONENT, T0, T0 + 4 * 3600_000).length !== 0) {
  failures.push("a completed window is history, not a forecast");
}
if (windowsOverlapping([{ ...INCIDENT_WINDOW, components: [{ name: "Package search" }] }], COMPONENT, T0, T0 + 4 * 3600_000).length !== 0) {
  failures.push("a window on another component must not block a publish");
}
if (windowsOverlapping([{ ...INCIDENT_WINDOW, scheduled_until: null }], COMPONENT, T0, T0 + 4 * 3600_000).length !== 1) {
  failures.push("an open-ended window is the worst case and must still block");
}

// Fail-closed, driven through the REAL fetch path with a stubbed transport — a check
// nobody has watched fail is a check nobody has tested.
const stub = (payloads) => async (url) => {
  const key = Object.keys(payloads).find((k) => url.includes(k));
  const entry = payloads[key];
  if (entry === undefined) throw new Error("unstubbed url");
  if (entry instanceof Error) throw entry;
  if (typeof entry === "number") return { ok: false, status: entry };
  return { ok: true, status: 200, json: async () => entry };
};
const OK_COMPONENTS = { components: [{ name: COMPONENT, status: "operational" }] };
const probes = [
  ["a timeout is unknown", stub({ "components.json": new Error("The operation was aborted due to timeout") }), "unknown"],
  ["a 503 is unknown", stub({ "components.json": 503 }), "unknown"],
  ["unreadable scheduled windows are unknown", stub({ "components.json": OK_COMPONENTS, "upcoming.json": 500 }), "unknown"],
  ["a renamed component is unknown", stub({ "components.json": { components: [{ name: "Publishing", status: "operational" }] }, "upcoming.json": {} }), "unknown"],
  ["a healthy registry is operational", stub({ "components.json": OK_COMPONENTS, "upcoming.json": {} }), "operational"],
];
for (const [label, fetchImpl, expected] of probes) {
  const got = await inspect({ base: "https://x/api/v2", fetchImpl, now: T0, horizonHours: 4 });
  if (got.status !== expected) failures.push(`${label}: expected ${expected}, got ${got.status}`);
}
// End to end, exactly as the coordinator asked it be proved: a component forced to
// `under_maintenance` must produce a blocking verdict.
{
  const forced = stub({
    "components.json": { components: [{ name: COMPONENT, status: "under_maintenance" }] },
    "upcoming.json": {},
  });
  const seen = await inspect({ base: "https://x/api/v2", fetchImpl: forced, now: T0, horizonHours: 4 });
  if (verdict({ ...seen, override: null }).ok !== false) {
    failures.push("a component forced to under_maintenance must block");
  }
}

if (failures.length > 0) {
  console.error("check-npm-status: SELF-TEST failed — the check itself is broken:");
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

// --- The live check ----------------------------------------------------------

if (import.meta.url === `file://${process.argv[1]}`) {
  const argv = process.argv.slice(2);
  const flag = (name) => {
    const inline = argv.find((a) => a.startsWith(`--${name}=`));
    if (inline) return inline.slice(name.length + 3);
    const at = argv.indexOf(`--${name}`);
    return at >= 0 ? argv[at + 1] : undefined;
  };

  const base = flag("status-url") ?? DEFAULT_BASE;
  const horizonHours = Number(flag("horizon") ?? DEFAULT_HORIZON_HOURS);
  if (!Number.isFinite(horizonHours) || horizonHours <= 0) {
    console.error(`check-npm-status: --horizon must be a positive number of hours, got ${flag("horizon")}`);
    process.exit(1);
  }

  // A bare `--override` is REFUSED. The reason is the whole point: it is what makes
  // this an argument someone made rather than a box someone ticked.
  //
  // `NPM_STATUS_OVERRIDE` exists because the release path calls this from a FIXED
  // string in `.release-it.json`, where nobody can add a flag without editing the
  // config — and a gate whose escape hatch requires editing the gate is a gate that
  // gets deleted at 02:00 instead of overridden. Same rule either way: empty is not a
  // reason.
  const envOverride = (process.env.NPM_STATUS_OVERRIDE ?? "").trim();
  const hasFlag = argv.some((a) => a === "--override" || a.startsWith("--override="));
  const flagOverride = hasFlag ? (flag("override") ?? "").trim() : "";
  if (hasFlag && !flagOverride) {
    console.error('check-npm-status: --override needs a reason, e.g. --override="hotfix, window is website-only"');
    process.exit(1);
  }
  if (!hasFlag && process.env.NPM_STATUS_OVERRIDE !== undefined && !envOverride) {
    console.error("check-npm-status: NPM_STATUS_OVERRIDE is set but empty — it must state a reason");
    process.exit(1);
  }
  const override = flagOverride || envOverride || null;

  const seen = await inspect({ base, fetchImpl: fetch, now: Date.now(), horizonHours });
  const { ok, blocked, lines } = verdict({ ...seen, override });

  const say = ok ? console.log : console.error;
  say(`check-npm-status: self-test green — ${VECTORS.length} vector(s), ${probes.length} transport probe(s).`);
  for (const line of lines) say(`  ${line}`);

  if (!ok) {
    console.error(
      `  a ${horizonHours}h sweep starting now would run into it. Wait for the window to close, or ` +
        "re-run with --override=\"<reason>\".",
    );
    process.exit(1);
  }
  if (blocked) process.exit(0);
  console.log(`  no scheduled window touches ${COMPONENT} in the next ${horizonHours}h — safe to cut.`);
}
