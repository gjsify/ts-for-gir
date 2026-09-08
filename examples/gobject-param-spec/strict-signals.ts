// Rationale: real Gio signals must retain inference when untyped fallbacks are omitted.
import Gio from "gi://Gio?version=2.0";
import GObject from "gi://GObject?version=2.0";

const action = new Gio.SimpleAction({ name: "strict-signals" });
let calls = 0;
action.connect("activate", (source, parameter) => {
  if (source !== action || parameter !== null) throw new Error("Unexpected signal arguments");
  calls++;
});
const after = action.connect_after("activate", (source) => {
  if (source.name !== "strict-signals") throw new Error("Emitter type lost");
  calls++;
});
action.emit("activate", null);
action.disconnect(after);
if (calls !== 2) throw new Error(`Expected two callbacks, got ${calls}`);
print("Strict signal connections and emission passed.");

// Rationale: registerClass signals absent from GIR need all three typed overrides.
interface StrictSignalActionSignals extends Gio.SimpleAction.SignalSignatures {
  "value-changed": (value: number, label: string) => void;
}

class StrictSignalAction extends Gio.SimpleAction {
  static {
    GObject.registerClass(
      {
        GTypeName: "StrictSignalAction",
        Signals: {
          "value-changed": {
            flags: GObject.SignalFlags.RUN_LAST,
            param_types: [GObject.TYPE_INT, GObject.TYPE_STRING],
          },
        },
      },
      StrictSignalAction,
    );
  }

  override connect<K extends keyof StrictSignalActionSignals>(
    signal: K,
    callback: GObject.SignalCallback<this, StrictSignalActionSignals[K]>,
  ): number {
    return GObject.signal_connect(this, signal, callback);
  }

  override connect_after<K extends keyof StrictSignalActionSignals>(
    signal: K,
    callback: GObject.SignalCallback<this, StrictSignalActionSignals[K]>,
  ): number {
    return GObject.signal_connect_after(this, signal, callback);
  }

  override emit<K extends keyof StrictSignalActionSignals>(
    signal: K,
    ...args: GObject.GjsParameters<StrictSignalActionSignals[K]>
  ): void {
    GObject.signal_emit_by_name(this, signal, ...args);
  }
}

const customAction = new StrictSignalAction({ name: "custom-signals" });
const received: string[] = [];
const firstHandler = customAction.connect("value-changed", (source, value, label) => {
  const amount: number = value;
  const text: string = label;
  received.push(
    source === customAction ? `connect:${source.name}:${amount}:${text}` : "wrong source",
  );
});
const afterHandler = customAction.connect_after("value-changed", (source, value, label) => {
  const amount: number = value;
  const text: string = label;
  received.push(
    source === customAction ? `after:${source.name}:${amount}:${text}` : "wrong source",
  );
});
customAction.emit("value-changed", 42, "answer");
customAction.disconnect(firstHandler);
customAction.emit("value-changed", 7, "remaining");
customAction.disconnect(afterHandler);
customAction.emit("value-changed", 0, "disconnected");
const expected = [
  "connect:custom-signals:42:answer",
  "after:custom-signals:42:answer",
  "after:custom-signals:7:remaining",
];
if (JSON.stringify(received) !== JSON.stringify(expected)) {
  throw new Error(`Unexpected custom signal callbacks: ${JSON.stringify(received)}`);
}
let inheritedCalls = 0;
customAction.connect("activate", (_source, parameter) => {
  if (parameter === null) inheritedCalls++;
});
customAction.connect_after("activate", (_source, parameter) => {
  if (parameter === null) inheritedCalls++;
});
customAction.emit("activate", null);
if (inheritedCalls !== 2) throw new Error("Inherited signal callbacks were lost");
print("Registered custom signals and inherited signals passed.");
