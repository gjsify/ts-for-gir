// GTK 4 JSX Signal Implementation Demo - Instance-based $signals

import GObject from "gi://GObject?version=2.0";
import Gtk from "gi://Gtk?version=4.0";

Gtk.init();

// -----------------------------------------------------------------------------
// 1. Custom Button with Extended Signal Signatures
// -----------------------------------------------------------------------------

interface MyButtonSignals extends Gtk.Button.SignalSignatures {
	"my-signal": (arg: number) => number;
	"custom-event": (data: string) => void;
}

// biome-ignore lint/suspicious/noExplicitAny: Required for generic signal handler flexibility - GObject signals have varying parameter signatures and return types
type AnySignalCallback<T extends GObject.Object = GObject.Object> = GObject.SignalCallback<T, (...args: any[]) => any>;

class MyButton extends Gtk.Button {
	// Instance $signals property for type-safe signal access
	declare $signals: MyButtonSignals;

	static {
		GObject.registerClass(
			{
				GTypeName: "MyButton",
				Signals: {
					"my-signal": { param_types: [GObject.TYPE_INT], return_type: GObject.TYPE_INT },
					"custom-event": { param_types: [GObject.TYPE_STRING] },
				},
			},
			MyButton,
		);
	}

	override connect<K extends keyof MyButtonSignals>(
		signal: K,
		callback: GObject.SignalCallback<this, MyButtonSignals[K]>,
	): number {
		return super.connect(signal, callback);
	}

	triggerCustomSignal() {
		this.emit("my-signal", 42);
		this.emit("custom-event", "Hello from MyButton!");
	}
}

// -----------------------------------------------------------------------------
// 2. JSX Helper Types and Functions
// -----------------------------------------------------------------------------

// Convert kebab-case to CamelCase for JSX props
type KebabToCamel<S extends string> = S extends `${infer P1}-${infer P2}${infer P3}`
	? `${P1}${Capitalize<KebabToCamel<`${P2}${P3}`>>}`
	: S;

// JSX props type that transforms signals to onSignal handlers
type SignalProps<T extends GObject.Object> = T extends { $signals: infer S }
	? {
			// biome-ignore lint/suspicious/noExplicitAny: Required for generic signal signature pattern matching - signals have varying parameter types
			[K in keyof S as `on${Capitalize<KebabToCamel<K & string>>}`]?: S[K] extends (...args: any[]) => any
				? GObject.SignalCallback<T, S[K]>
				: never;
		}
	: Record<string, never>;

// Combined props type for JSX elements
type ElementProps<T extends GObject.Object> = SignalProps<T> & {
	ref?: (instance: T) => void;
	children?: GObject.Object[];
};

// JSX implementation that works with instances
function jsx<T extends GObject.Object>(widget: T, props: ElementProps<T>): T {
	// Connect signal handlers
	for (const [key, handler] of Object.entries(props)) {
		if (key.startsWith("on") && typeof handler === "function") {
			// Convert onSignalName back to signal-name
			const signalName = key
				.slice(2) // Remove 'on'
				.replace(/([A-Z])/g, "-$1") // CamelCase to kebab-case
				.toLowerCase()
				.replace(/^-/, ""); // Remove leading dash if any

			widget.connect(signalName, handler as AnySignalCallback<T>);
		}
	}

	// Handle ref callback
	if (props.ref) {
		props.ref(widget);
	}

	// Handle children (if applicable)
	if (props.children && "append" in widget) {
		for (const child of props.children) {
			// biome-ignore lint/suspicious/noExplicitAny: Widget containers have different append method signatures
			(widget as any).append(child);
		}
	}

	return widget;
}

// Factory functions for creating widgets with JSX-like syntax
const createElement = {
	Button: (props: ElementProps<Gtk.Button> & Partial<Gtk.Button.ConstructorProps> = {}) => {
		const { ref, children, ...allProps } = props;

		// Separate signal props from constructor props
		const signalProps: Record<string, AnySignalCallback<Gtk.Button>> = {};
		const constructorProps: Record<string, unknown> = {};

		for (const [key, value] of Object.entries(allProps)) {
			if (key.startsWith("on") && typeof value === "function") {
				signalProps[key] = value as AnySignalCallback<Gtk.Button>;
			} else {
				constructorProps[key] = value;
			}
		}

		const widget = new Gtk.Button(constructorProps);
		return jsx(widget, { ref, children, ...signalProps });
	},

	MyButton: (props: ElementProps<MyButton> & Partial<Gtk.Button.ConstructorProps> = {}) => {
		const { ref, children, ...allProps } = props;

		// Separate signal props from constructor props
		const signalProps: Record<string, AnySignalCallback<MyButton>> = {};
		const constructorProps: Record<string, unknown> = {};

		for (const [key, value] of Object.entries(allProps)) {
			if (key.startsWith("on") && typeof value === "function") {
				signalProps[key] = value as AnySignalCallback<MyButton>;
			} else {
				constructorProps[key] = value;
			}
		}

		const widget = new MyButton(constructorProps);
		return jsx(widget, { ref, children, ...signalProps });
	},

	ApplicationWindow: (
		props: ElementProps<Gtk.ApplicationWindow> & Partial<Gtk.ApplicationWindow.ConstructorProps> = {},
	) => {
		const { ref, children, ...allProps } = props;

		// Separate signal props from constructor props
		const signalProps: Record<string, AnySignalCallback<Gtk.ApplicationWindow>> = {};
		const constructorProps: Record<string, unknown> = {};

		for (const [key, value] of Object.entries(allProps)) {
			if (key.startsWith("on") && typeof value === "function") {
				signalProps[key] = value as AnySignalCallback<Gtk.ApplicationWindow>;
			} else {
				constructorProps[key] = value;
			}
		}

		const widget = new Gtk.ApplicationWindow(constructorProps);
		return jsx(widget, { ref, children, ...signalProps });
	},

	Box: (props: ElementProps<Gtk.Box> & Partial<Gtk.Box.ConstructorProps> = {}) => {
		const { ref, children, ...allProps } = props;

		// Separate signal props from constructor props
		const signalProps: Record<string, AnySignalCallback<Gtk.Box>> = {};
		const constructorProps: Record<string, unknown> = {};

		for (const [key, value] of Object.entries(allProps)) {
			if (key.startsWith("on") && typeof value === "function") {
				signalProps[key] = value as AnySignalCallback<Gtk.Box>;
			} else {
				constructorProps[key] = value;
			}
		}

		const widget = new Gtk.Box(constructorProps);
		return jsx(widget, { ref, children, ...signalProps });
	},
};

// -----------------------------------------------------------------------------
// 3. JSX Demo Application
// -----------------------------------------------------------------------------

const app = new Gtk.Application({ application_id: "com.example.jsx-signals-demo" });

app.connect("activate", () => {
	// Create widgets using JSX-like syntax with type-safe signal handlers

	let myButtonRef: MyButton | null = null;
	let _regularButtonRef: Gtk.Button | null = null;

	const window = createElement.ApplicationWindow({
		application: app,
		title: "JSX Signals Demo",
		default_width: 500,
		default_height: 400,
		onCloseRequest: () => {
			print("Window close requested via JSX handler");
			app.quit();
			return false;
		},
	});

	const box = createElement.Box({
		orientation: Gtk.Orientation.VERTICAL,
		spacing: 10,
		margin_top: 20,
		margin_bottom: 20,
		margin_start: 20,
		margin_end: 20,
	});

	// Regular button with JSX-style signal handling
	const regularButton = createElement.Button({
		label: "Regular Button",
		ref: (btn) => {
			_regularButtonRef = btn;
		},
		onClicked: (source) => {
			print("Regular button clicked via JSX:", source.get_label());
		},
	});

	// Custom button with extended signals
	const myButton = createElement.MyButton({
		label: "Custom Button",
		ref: (btn) => {
			myButtonRef = btn;
		},
		onClicked: (source) => {
			print("Custom button clicked via JSX:", source.get_label());
			source.triggerCustomSignal();
		},
		onMySignal: (_source, arg) => {
			print("Custom signal received via JSX:", arg);
			return arg * 3;
		},
		onCustomEvent: (_source, data) => {
			print("Custom event received via JSX:", data);
		},
		// Property change notifications
		onNotify: (source, pspec) => {
			if (pspec?.get_name() === "label") {
				print("Label changed via JSX notify:", source.get_label());
			}
		},
	});

	// Demonstrate programmatic signal connections alongside JSX
	myButton.connect("notify::label", (source) => {
		print("Label changed via direct connect:", source.get_label());
	});

	// Manual appending since we don't have full JSX syntax
	box.append(regularButton);
	box.append(myButton);

	window.set_child(box);
	window.present();

	// Demonstrate that refs work
	setTimeout(() => {
		if (myButtonRef) {
			myButtonRef.set_label("Updated via ref!");
			print("Button label updated via ref");
		}
	}, 2000);

	print("=== JSX Signals Demo Started ===");
	print("Features demonstrated:");
	print("✅ JSX-like syntax with type-safe signal handlers");
	print("✅ Instance $signals property usage");
	print("✅ Automatic signal name conversion (onClicked -> clicked)");
	print("✅ Custom signal handling via JSX");
	print("✅ Property notification signals (onNotify)");
	print("✅ Ref callbacks for accessing widget instances");
	print("✅ Mixed JSX and direct signal connection usage");
	print("");
	print("Try clicking the buttons and watch the console!");
	print("The custom button label will change automatically after 2 seconds.");
});

app.run([]);
