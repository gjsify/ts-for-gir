// Compact GTK 4 Signal Helper Demo using `$signals` and `GObject.SignalCallback`

import Gtk from 'gi://Gtk?version=4.0';
import GObject from 'gi://GObject?version=2.0';

Gtk.init();

// -----------------------------------------------------------------------------
// 1. Type helpers
// -----------------------------------------------------------------------------

// Direct access to the generated interface
type ButtonSignals = Gtk.Button.SignalSignatures;

// Generic helper using the new static `$signals` field (compile-time only)
// NOTE: `$signals` does **not** exist at runtime; it is emitted purely in *.d.ts files.
type HasSignals = { $signals: unknown };

type SignalKey<T extends HasSignals> = Extract<keyof T['$signals'], string>;

function on<
    T extends typeof GObject.Object & HasSignals,
    K extends SignalKey<T>
>(
    ctor: T,
    signal: K,
    cb: GObject.SignalCallback<InstanceType<T>, T['$signals'][K]>,
): number {
    // cast: runtime has the regular `connect`
    return ctor.prototype.connect.call(ctor.prototype, signal, cb as any);
}

// -----------------------------------------------------------------------------
// 2. Simple usage
// -----------------------------------------------------------------------------

const app = new Gtk.Application({ application_id: 'com.example.signal-demo' });

app.connect('activate', () => {
    const win = new Gtk.ApplicationWindow({ application: app, title: 'Signal demo' });

    const btn = new Gtk.Button({ label: 'Click me' });

    // Instance connect – `source` param (this) is inferred automatically
    btn.connect('clicked', (self) => {
        print('Instance clicked:', self.get_label());
    });

    // Static helper using `$signals`
    on(Gtk.Button, 'clicked', (src) => print('Static helper clicked', src.get_label()));

    win.set_child(btn);
    win.present();
});

app.run([]);