import Gio from "gi://Gio";
import GLib from "gi://GLib";
import GObject from "gi://GObject";
import System from "system";

console.log("GJS Version:", System.version);

if (System.version < 18200) {
	console.log("GJS version 1.82.0 or higher is required for this example, skipping example");
	System.exit(0);
}

export class ExampleApplication extends Gio.Application {
	static {
		GObject.registerClass(
			{
				GTypeName: "ExampleApplication",
			},
			ExampleApplication,
		);
	}

	constructor() {
		super({
			application_id: "org.example.ActionEntries",
			flags: Gio.ApplicationFlags.FLAGS_NONE,
		});
		this.initActions();
	}

	private initActions() {
		// Define multiple actions at once using ActionEntryObj type
		const actions: Gio.ActionEntryObj[] = [
			// Simple action without state or parameter
			{
				name: "quit",
				activate: () => {
					console.log("Quitting application...");
					this.quit();
				},
			},

			// Action with parameter
			{
				name: "greet",
				parameter_type: "s", // GVariant type string for string parameter
				activate: (_action, parameter) => {
					if (parameter) {
						const name = parameter.get_string()[0];
						console.log(`Hello, ${name}!`);
					}
				},
			},

			// Stateful toggle action
			{
				name: "dark-mode",
				state: "false", // Initial state as string
				change_state: (_action, value) => {
					if (value) {
						const isDark = value.get_boolean();
						console.log(`Dark mode ${isDark ? "enabled" : "disabled"}`);
						// Get the action and set its state
						const action = this.lookup_action("dark-mode") as Gio.SimpleAction;
						action.set_state(value);
					}
				},
			},

			// Action with optional parameter
			{
				name: "save",
				parameter_type: "(sb)", // Tuple of string and boolean
				activate: (_action, parameter) => {
					if (parameter) {
						const [filename, backup] = parameter.deep_unpack() as [string, boolean];
						console.log(`Saving ${filename} (backup: ${backup})`);
					} else {
						console.log("Quick save");
					}
				},
			},
		];

		// Add all actions at once
		this.add_action_entries(actions);
	}

	vfunc_activate() {
		// Test the actions
		this.activate_action("greet", GLib.Variant.new_string("World"));

		// For stateful actions, we should use change-state instead of activate
		const darkModeAction = this.lookup_action("dark-mode") as Gio.SimpleAction;
		darkModeAction.change_state(GLib.Variant.new_boolean(true));

		this.activate_action("save", GLib.Variant.new("(sb)", ["document.txt", true]));
		this.activate_action("quit", null);
	}
}

// Run the application
const app = new ExampleApplication();
app.run([]);
