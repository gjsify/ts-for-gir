import Adw from "gi://Adw?version=1";
import Gio from "gi://Gio?version=2.0";
import Gtk from "gi://Gtk?version=4.0";

const app = new Adw.Application({
	applicationId: "com.example.__PROJECT_NAME__",
	flags: Gio.ApplicationFlags.FLAGS_NONE,
});

app.connect("activate", (app: Adw.Application) => {
	const label = new Gtk.Label({ label: "Hello from __PROJECT_NAME__" });
	const window = new Gtk.ApplicationWindow({ application: app });
	window.set_title("__PROJECT_NAME__");
	window.set_default_size(320, 120);
	window.set_child(label);
	window.present();
});

app.run([imports.system.programInvocationName].concat(ARGV));
