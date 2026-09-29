import Adw from "gi://Adw?version=1";
import Gio from "gi://Gio?version=2.0";
import Gtk from "gi://Gtk?version=4.0";

const app = new Adw.Application({
	applicationId: __APP_ID__,
	flags: Gio.ApplicationFlags.FLAGS_NONE,
});

app.connect("activate", () => {
	const label = new Gtk.Label({
		label: "__PROJECT_NAME__",
		cssClasses: ["title-1"],
	});

	const window = new Adw.ApplicationWindow({ application: app });
	window.set_title("__PROJECT_NAME__");
	window.set_default_size(360, 200);
	window.set_content(new Adw.ToolbarView({ content: label }));
	window.present();
});

app.run([imports.system.programInvocationName].concat(ARGV));
