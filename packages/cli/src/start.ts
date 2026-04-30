import { APP_NAME, APP_USAGE, APP_VERSION } from "@ts-for-gir/lib";
import yargs, { type CommandModule } from "yargs";
import { hideBin } from "yargs/helpers";

import { analyze, copy, create, doc, generate, json, list } from "./commands/index.ts";

interface GjsMainLoop {
	runAsync(): void;
	quit(): void;
}

interface GjsGLib {
	MainLoop: new (context: null, isRunning: boolean) => GjsMainLoop;
	main_depth(): number;
	idle_add(priority: number, fn: () => boolean): number;
	PRIORITY_DEFAULT: number;
	SOURCE_REMOVE: boolean;
}

interface GjsImports {
	gi: { GLib: GjsGLib };
	system: { exit(code: number): never };
}

// On GJS, async command handlers do Gio I/O that needs the GLib main context
// to dispatch. Park an idempotent MainLoop here so handlers complete before
// the process exits. No-op on Node where `globalThis.imports` is undefined.
const gjsImports = (globalThis as { imports?: GjsImports }).imports;
let gjsMainLoop: GjsMainLoop | undefined;
if (gjsImports) {
	const { GLib } = gjsImports.gi;
	const loop = new GLib.MainLoop(null, false);
	if (GLib.main_depth() === 0) {
		try {
			loop.runAsync();
			gjsMainLoop = loop;
		} catch {
			// Default-ctx loop already running (e.g. embedded GJS host)
		}
	}
}

// On GJS the exit syscall has to fire from a fresh main-loop iteration;
// calling it from a promise-microtask continuation leaves the process parked.
// On Node we set `process.exitCode` instead of calling `process.exit(code)` —
// the latter truncates async stdout writes that command handlers may still
// have in flight when stdout is a pipe.
function shutdown(code: number): void {
	if (gjsImports) {
		const { GLib } = gjsImports.gi;
		GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
			gjsMainLoop?.quit();
			gjsImports.system.exit(code);
			return GLib.SOURCE_REMOVE;
		});
		return;
	}
	process.exitCode = code;
}

try {
	await yargs(hideBin(process.argv))
		.scriptName(APP_NAME)
		.strict()
		.usage(APP_USAGE)
		.version(APP_VERSION)
		// `.exitProcess(false)` keeps yargs from calling `process.exit`
		// synchronously for --version/--help; on GJS that deadlocks the
		// parked MainLoop. parseAsync + shutdown() works on both runtimes.
		.exitProcess(false)
		// `.fail(false)` makes yargs throw validation/strict-mode errors
		// instead of printing+swallowing them when exitProcess is off.
		.fail(false)
		// TODO: Fix this
		.command(analyze as unknown as CommandModule)
		.command(create as unknown as CommandModule)
		.command(generate as unknown as CommandModule)
		.command(json as unknown as CommandModule)
		.command(list as unknown as CommandModule)
		.command(copy as unknown as CommandModule)
		.command(doc as unknown as CommandModule)
		.demandCommand(1)
		.help()
		.parseAsync();
	shutdown(0);
} catch (err) {
	// Passing the whole error instance to console.error hits a slow
	// JSON-stringify path on GJS that can stall for tens of seconds.
	const message = err instanceof Error ? err.message : String(err);
	process.stderr.write(`${message}\n`);
	shutdown(1);
}
