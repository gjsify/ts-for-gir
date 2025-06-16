/**
 * GTK 4 Signal Interfaces Demo
 * 
 * This example demonstrates the comprehensive type-safe signal interfaces feature
 * that enables TypeScript to infer signal names and callback signatures.
 * 
 * Features demonstrated:
 * - Basic signal connections with type safety
 * - Detail signal variants (notify::property-name)
 * - Property change notifications for all GObject properties
 * - Signal parameter type checking
 * - Detailed signals for properties with DETAILED flag
 */

import GObject from 'gi://GObject?version=2.0';
import Gio from 'gi://Gio?version=2.0';
import GLib from 'gi://GLib?version=2.0';
import Gtk from 'gi://Gtk?version=4.0';

// Initialize GTK
Gtk.init()

const loop = GLib.MainLoop.new(null, false)

const app = new Gtk.Application({
    application_id: 'com.github.gjsify.signal-interfaces-demo',
    flags: Gio.ApplicationFlags.FLAGS_NONE,
})

app.connect('activate', () => {
    // Create main window
    const window = new Gtk.ApplicationWindow({ 
        application: app,
        title: 'Signal Interfaces Demo',
        default_width: 600,
        default_height: 400
    })

    // Create a header bar
    const headerBar = new Gtk.HeaderBar()
    window.set_titlebar(headerBar)

    // Create main container
    const box = new Gtk.Box({
        orientation: Gtk.Orientation.VERTICAL,
        spacing: 20,
        margin_top: 20,
        margin_bottom: 20,
        margin_start: 20,
        margin_end: 20,
    })

    // Title label
    const titleLabel = new Gtk.Label({
        label: '<span size="large" weight="bold">Type-Safe Signal Interfaces Demo</span>',
        use_markup: true,
        margin_bottom: 10,
    })

    // Description label
    const descLabel = new Gtk.Label({
        label: 'This demo shows how the SignalSignatures feature enables\ntype-safe signal handling in TypeScript.\n\nFeatures working:\n• Basic signals with type checking\n• Property change notifications (notify)\n• Detail signals (notify::property-name)\n• Detailed signals for all properties\n• Automatic hyphenated property variants\n• Correct `this` type on subclass signals',
        justify: Gtk.Justification.CENTER,
        margin_bottom: 20,
    })

    // Create buttons to demonstrate different signal types
    const buttonBox = new Gtk.Box({
        orientation: Gtk.Orientation.HORIZONTAL,
        spacing: 10,
        halign: Gtk.Align.CENTER,
    })

    // Button with simple signal (no parameters)
    const simpleButton = new Gtk.Button({ label: 'Simple Signal' })
    
    // ✅ Type-safe: TypeScript knows this signal exists and takes no parameters
    simpleButton.connect('clicked', () => {
        console.log('Simple button clicked!')
        statusLabel.set_text('Simple button clicked - no parameters needed')
    })

    // Button with complex signal handling
    const complexButton = new Gtk.Button({ label: 'Complex Signal' })
    
    // ✅ Type-safe: TypeScript knows the exact signature
    complexButton.connect('clicked', (_source) => {
        console.log('Complex button clicked with source:', _source.get_label())
        statusLabel.set_text(`Complex button clicked - received source: ${_source.get_label()}`)
    })

    // Define a custom signal interface
    interface MyButtonSignals extends Gtk.Button.SignalSignatures {
        "hello": (arg: string) => void;
    }

    // Button to demonstrate subclass signal typing
    class MyButton extends Gtk.Button {

        static {
            GObject.registerClass({
                GTypeName: 'MyButton',
                Properties: {
                    foobar: GObject.ParamSpec.string(
                        'foobar',
                        'Foobar',
                        'Foobar',
                        GObject.ParamFlags.READWRITE,
                        'default value'
                    )
                },
                Signals: {'hello': {param_types: [GObject.TYPE_STRING]}},
            }, this);
        }

        // Define a custom property
        declare protected _foobar: string;

        // Define a custom signal interface as instance property
        declare $signals: MyButtonSignals;

        override connect<K extends keyof MyButtonSignals>(
            signal: K,
            callback: GObject.SignalCallback<this, MyButtonSignals[K]>,
        ): number {
            return super.connect(signal, callback);
        }

        constructor(props?: Partial<Gtk.Button.ConstructorProps>) {
            super(props);
        }
        
        public customMethod() {
            this.emit('hello', 'world');
            return "This is MyButton!";
        }
    }

    const myButton = new MyButton({ label: 'Subclassed Button' });

    // ✅ Type-safe: TypeScript knows `src` is `MyButton`, not just `Gtk.Button`
    myButton.connect('clicked', (src) => {
        console.log('Subclassed button clicked!', src.customMethod());
        statusLabel.set_text(`Subclassed button clicked! Got: "${src.customMethod()}"`);
    });

    myButton.connect('hello', (src, arg) => {
        console.log('Hello signal received:', arg);
    });

    // Toggle button to demonstrate state changes
    const toggleButton = new Gtk.ToggleButton({ label: 'Toggle Me' })
    
    // ✅ Type-safe: TypeScript infers the toggle button signal
    toggleButton.connect('toggled', () => {
        const isActive = toggleButton.get_active()
        console.log('Toggle button state:', isActive)
        statusLabel.set_text(`Toggle button is now: ${isActive ? 'ACTIVE' : 'INACTIVE'}`)
        
        // Update button label based on state
        toggleButton.set_label(isActive ? 'Active Toggle' : 'Inactive Toggle')
    })

    // Entry widget to demonstrate text-based signals
    const entry = new Gtk.Entry({
        placeholder_text: 'Type something and press Enter...',
        margin_bottom: 10,
    })

    // ✅ Type-safe: TypeScript knows the activate signal signature
    entry.connect('activate', () => {
        const text = entry.get_text()
        console.log('Entry activated with text:', text)
        statusLabel.set_text(`Entry activated with: "${text}"`)
        entry.set_text('') // Clear the entry
    })

    // ✅ Type-safe: TypeScript knows the notify signal for property changes
    // This demonstrates the detail signal feature: notify::property-name
    entry.connect('notify', (obj, pspec) => {
        if (pspec && pspec.get_name() === 'text') {
            const text = entry.get_text()
            if (text.length > 0) {
                statusLabel.set_text(`Entry text changed via notify: "${text}" (${text.length} characters)`)
            }
        }
    })

    // ✅ Detail signals are now fully implemented and working!
    // The 'text' property comes from the Editable interface that Entry implements
    entry.connect('notify::text', (obj, pspec) => {
        const text = entry.get_text()
        statusLabel.set_text(`Entry text changed via detail signal: "${text}"`)
    })

    // Demonstrate property change notifications on the toggle button
    toggleButton.connect('notify', (obj, pspec) => {
        if (pspec && pspec.get_name() === 'active') {
            const isActive = toggleButton.get_active()
            console.log(`Toggle button 'active' property changed to: ${isActive}`)
        }
    })

    // ✅ Detail signal for the active property - fully implemented!
    toggleButton.connect('notify::active', () => {
        const isActive = toggleButton.get_active()
        console.log(`Toggle button activated: ${isActive}`)
    })

    // Demonstrate multiple property notifications on the window
    window.connect('notify', (obj, pspec) => {
        const propName = pspec?.get_name()
        if (propName === 'default-width' || propName === 'default-height') {
            console.log(`Window ${propName} changed`)
            statusLabel.set_text(`Window ${propName} was modified`)
        }
    })

    // ✅ Window dimension properties now work perfectly!
    window.connect('notify::default-width', () => {
        console.log('Window width changed')
    })
    window.connect('notify::default-height', () => {
        console.log('Window height changed')  
    })

    // ✅ Hyphenated property variants work automatically:
    window.connect('notify::default-width', () => {
        // Works for both default_width and default-width
    })

    // ✅ `this` type is correctly inferred for subclasses
    const myBtn = new MyButton({ label: 'Another one' });
    myBtn.connect('clicked', (src) => {
        // `src` is correctly typed as `MyButton`
        console.log(src.customMethod());
    });

    // Status label to show feedback
    const statusLabel = new Gtk.Label({
        label: 'Ready - try interacting with the widgets above!',
        wrap: true,
        justify: Gtk.Justification.CENTER,
        margin_top: 20,
    })

    // Add a separator for better visual structure
    const separator = new Gtk.Separator({
        orientation: Gtk.Orientation.HORIZONTAL,
        margin_top: 10,
        margin_bottom: 10,
    })

    // Code example label
    const codeLabel = new Gtk.Label({
        label: `<span font_family="monospace" size="small">// Example of type-safe signal usage:
button.connect('clicked', (_source: Gtk.Button) => {
    // TypeScript knows the exact signature!
    console.log('Clicked:', _source.get_label())
})

// Property change notifications:
widget.connect('notify', (obj, pspec) => {
    console.log('Property changed:', pspec.get_name())
})

// ✅ Detail signal variants (fully implemented):
widget.connect('notify::property-name', () => {
    // Only called when specific property changes
})

// ✅ Hyphenated property variants work automatically:
window.connect('notify::default-width', () => {
    // Works for both default_width and default-width
})

// ✅ 'this' type is correctly inferred for subclasses
const myBtn = new MyButton({ label: 'Another one' });
myBtn.connect('clicked', (src) => {
    // 'src' is correctly typed as 'MyButton'
    console.log(src.customMethod());
});

// ❌ This should cause a TypeScript error:
// button.connect('invalid-signal', () => {})
//                ^^^^^^^^^^^^^^^ 
// Error: Argument of type '"invalid-signal"' is not assignable</span>`,
        use_markup: true,
        justify: Gtk.Justification.LEFT,
        selectable: true,
        margin_top: 10,
    })

    // Pack all widgets
    buttonBox.append(simpleButton)
    buttonBox.append(complexButton)
    buttonBox.append(myButton)
    buttonBox.append(toggleButton)

    box.append(titleLabel)
    box.append(descLabel)
    box.append(buttonBox)
    box.append(entry)
    box.append(statusLabel)
    box.append(separator)
    box.append(codeLabel)

    window.set_child(box)

    // Window signals
    window.connect('close-request', () => {
        console.log('Window close requested')
        app.quit()
        return false
    })

    // Show window
    window.present()

    console.log('=== Signal Interfaces Demo Started ===')
    console.log('This demo showcases the comprehensive type-safe signal handling!')
    console.log('All signal connections are now type-checked by TypeScript.')
    console.log('')
    console.log('Implemented features:')
    console.log('✅ Type-safe basic signal connections')
    console.log('✅ Property change notifications via notify signal')
    console.log('✅ Detail signal variants: notify::property-name')
    console.log('✅ Detailed signals for properties: changed::key-name')
    console.log('✅ Automatic hyphenated property variants (default-width/default_width)')
    console.log('✅ Compile-time error checking for invalid signals')
    console.log('✅ Property signals for all GObject-derived classes')
    console.log('')
    console.log('🚀 Child property signals: child-notify::expand, child-notify::fill')
    console.log('🚀 Better coverage of all GObject properties')
})

// Run the application
app.run([]) 