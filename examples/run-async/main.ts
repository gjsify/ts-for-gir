import Gio from "gi://Gio";
import GObject from "gi://GObject";

class ExampleApplication extends Gio.Application {
	static {
		GObject.registerClass(ExampleApplication);
	}

	constructor() {
		super({
			application_id: "com.example.ExampleApplication",
			flags: Gio.ApplicationFlags.FLAGS_NONE,
		});
	}

	override vfunc_activate() {
		log("Application activated");
	}
}

const gioApp = new ExampleApplication();

gioApp
	.runAsync(ARGV)
	.then((exitStatus: number) => {
		log(`Exited with status: ${exitStatus}`);
	})
	.catch((error: unknown) => {
		logError(error);
	});

setTimeout(() => {
	gioApp.quit();
}, 1000);
