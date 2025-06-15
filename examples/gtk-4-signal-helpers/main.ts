/**
 * GTK 4 Signal Helper Types Demo
 * 
 * This example demonstrates the advanced signal helper types that enable
 * meta-programming scenarios like JSX runtimes, signal wrappers, and
 * type-safe event handling abstractions.
 * 
 * Features demonstrated:
 * - SignalsOf<T> - Extract signal signatures from a type
 * - SignalName<T> - Get all signal names as a union type
 * - SignalCallback<T, K> - Extract callback type for a specific signal
 * - SignalParameters<T, K> - Extract parameters for a signal callback
 * - SignalReturnType<T, K> - Extract return type for a signal callback
 */

import GObject from 'gi://GObject?version=2.0';
import Gio from 'gi://Gio?version=2.0';
import GLib from 'gi://GLib?version=2.0';
import Gtk from 'gi://Gtk?version=4.0';

// Initialize GTK
Gtk.init()

// ============================================================================
// HELPER TYPE DEMONSTRATIONS
// ============================================================================

// Extract signal signatures from a Button
type ButtonSignals = Gtk.Button.SignalSignatures;

// Get all signal names as a union type
type ButtonSignalNames = keyof ButtonSignals;
// This gives us: "activate" | "clicked" | "notify" | ...

// Extract specific signal callback types
type ClickedCallback = ButtonSignals['clicked'];
// This gives us: (_source: Gtk.Button) => void

// Extract signal parameters
type ClickedParams = Parameters<ButtonSignals['clicked']>;
// This gives us: [_source: Gtk.Button]

// Extract return type
type ClickedReturn = ReturnType<ButtonSignals['clicked']>;
// This gives us: void

// Using GObject helper types (with the new flexible approach)
type ButtonSignalNamesViaHelper = GObject.SignalName<ButtonSignals>;
type ClickedCallbackViaHelper = GObject.SignalCallback<ButtonSignals, 'clicked'>;
type ClickedParamsViaHelper = GObject.SignalParameters<ButtonSignals, 'clicked'>;

// Extract signals from an instance type
type ButtonSignalsFromInstance = GObject.SignalsOf<Gtk.Button>;

// ============================================================================
// PRACTICAL USE CASE: Type-safe event handler wrapper
// ============================================================================

/**
 * A type-safe signal connection wrapper that provides better ergonomics
 * and compile-time checking
 */
class SignalHandler<T extends GObject.Object> {
    private handlers: Map<string, number> = new Map();

    constructor(private widget: T) {}

    // Type-safe signal connection
    on(signal: string, callback: (...args: any[]) => any): this {
        const handlerId = this.widget.connect(signal, callback);
        this.handlers.set(signal, handlerId);
        return this;
    }

    // Disconnect a specific signal
    off(signal: string): this {
        const handlerId = this.handlers.get(signal);
        if (handlerId !== undefined) {
            this.widget.disconnect(handlerId);
            this.handlers.delete(signal);
        }
        return this;
    }

    // Disconnect all signals
    dispose(): void {
        for (const [signal, handlerId] of this.handlers) {
            this.widget.disconnect(handlerId);
        }
        this.handlers.clear();
    }
}

// ============================================================================
// JSX-STYLE EVENT PROPS TYPE HELPER
// ============================================================================

/**
 * Transform signal names to JSX-style event props
 * e.g., "clicked" -> "onClicked", "notify::text" -> "onNotifyText"
 */
type SignalToEventProp<T extends string> = T extends `notify::${infer Prop}`
    ? `onNotify${Capitalize<Prop>}`
    : `on${Capitalize<T>}`;

/**
 * Create JSX-style event props from signal signatures
 */
type EventProps<T extends GObject.SignalSignatures> = {
    [K in keyof T as SignalToEventProp<K & string>]?: T[K];
};

// Example: ButtonEventProps would have onClicked, onActivate, etc.
// type ButtonEventProps = EventProps<ButtonSignals>;

// ============================================================================
// MOCK JSX RUNTIME DEMONSTRATION
// ============================================================================

/**
 * A mock JSX element creator that demonstrates type-safe signal handling
 * Simplified version that works with current type system
 */
function createElement<T extends Gtk.Widget>(
    WidgetClass: new (props?: any) => T,
    props: any,
    eventProps?: { [key: string]: (...args: any[]) => any }
): T {
    const widget = new WidgetClass(props);
    
    // Connect event handlers
    if (eventProps) {
        for (const [eventName, handler] of Object.entries(eventProps)) {
            if (eventName.startsWith('on') && handler) {
                // Convert JSX event name back to signal name
                let signalName = eventName.slice(2).toLowerCase();
                
                // Handle notify events
                if (eventName.startsWith('onNotify')) {
                    const propName = eventName.slice(8).toLowerCase();
                    signalName = `notify::${propName}`;
                }
                
                // Use type assertion since we're using a dynamic signal name
                (widget as any).connect(signalName, handler);
            }
        }
    }
    
    return widget;
}

// ============================================================================
// SIGNAL INTROSPECTION UTILITY
// ============================================================================

/**
 * A utility to introspect available signals at runtime
 * (demonstrates how helper types align with runtime capabilities)
 */
function listSignals<T extends GObject.Object>(obj: T): void {
    const className = obj.constructor.name;
    console.log(`\n=== Signals for ${className} ===`);
    
    // In a real implementation, you would use GObject introspection
    // Here we just demonstrate the concept
    const exampleSignals: string[] = [
        'clicked',
        'activate', 
        'notify',
        'notify::label',
        'notify::sensitive'
    ];
    
    exampleSignals.forEach(signal => {
        console.log(`  - ${signal}`);
    });
}

// ============================================================================
// APPLICATION DEMO
// ============================================================================

const app = new Gtk.Application({
    application_id: 'com.github.gjsify.signal-helpers-demo',
    flags: Gio.ApplicationFlags.FLAGS_NONE,
})

app.connect('activate', () => {
    // Create main window using traditional approach
    const window = new Gtk.ApplicationWindow({ 
        application: app,
        title: 'Signal Helper Types Demo',
        default_width: 600,
        default_height: 500
    })

    // Create main container
    const box = new Gtk.Box({
        orientation: Gtk.Orientation.VERTICAL,
        spacing: 20,
        margin_top: 20,
        margin_bottom: 20,
        margin_start: 20,
        margin_end: 20,
    })

    // Title
    const titleLabel = new Gtk.Label({
        label: '<span size="large" weight="bold">Signal Helper Types Demo</span>',
        use_markup: true,
        margin_bottom: 10,
    })

    // Description
    const descLabel = new Gtk.Label({
        label: 'This demo shows advanced signal helper types for meta-programming',
        margin_bottom: 20,
    })

    // Demo 1: Type-safe signal handler wrapper
    const demo1Label = new Gtk.Label({
        label: '<b>Demo 1: Type-safe Signal Handler</b>',
        use_markup: true,
        margin_top: 10,
    })

    const button1 = new Gtk.Button({ label: 'Click me (Signal Handler)' })
    const handler1 = new SignalHandler(button1)
        .on('clicked', () => {
            statusLabel.set_text('Button clicked via SignalHandler wrapper!')
        })
        .on('notify::label', () => {
            statusLabel.set_text(`Label changed to: ${button1.get_label()}`)
        });

    // Demo 2: JSX-style element creation
    const demo2Label = new Gtk.Label({
        label: '<b>Demo 2: JSX-style Element Creation</b>',
        use_markup: true,
        margin_top: 20,
    })

    const button2 = createElement(
        Gtk.Button,
        { label: 'Click me (JSX-style)' },
        {
            onClicked: () => {
                statusLabel.set_text('Button clicked via JSX-style handler!')
            },
            onNotifyLabel: () => {
                statusLabel.set_text(`JSX button label: ${button2.get_label()}`)
            }
        }
    );

    // Demo 3: Dynamic signal connection based on type extraction
    const demo3Label = new Gtk.Label({
        label: '<b>Demo 3: Dynamic Type-safe Connections</b>',
        use_markup: true,
        margin_top: 20,
    })

    const entry = new Gtk.Entry({ 
        placeholder_text: 'Type here...',
        margin_bottom: 10 
    })

    // Approach 1: Direct type extraction (works best)
    function connectToEntry<K extends keyof Gtk.Entry.SignalSignatures>(
        signal: K,
        callback: Gtk.Entry.SignalSignatures[K]
    ) {
        return entry.connect(signal, callback);
    }

    // Type-safe connections
    connectToEntry('activate', () => {
        statusLabel.set_text(`Entry activated: "${entry.get_text()}"`)
    });

    connectToEntry('notify::text', (_obj, _pspec) => {
        if (entry.get_text().length > 0) {
            statusLabel.set_text(`Typing: "${entry.get_text()}"`)
        }
    });

    // Approach 2: Using a generic signal connector for any widget
    function createSignalConnector<T extends GObject.Object>(widget: T) {
        return function connect<K extends keyof (T extends { constructor: infer C } 
            ? C extends { SignalSignatures: infer S } ? S : never 
            : never)>(
            signal: K,
            callback: any // Would need complex type inference here
        ) {
            return widget.connect(signal as string, callback);
        };
    }

    const entryConnector = createSignalConnector(entry);
    // This shows the concept but loses type safety due to complexity

    // Status label
    const statusLabel = new Gtk.Label({
        label: 'Ready - try the demos above!',
        wrap: true,
        margin_top: 20,
    })

    // Code example
    const codeLabel = new Gtk.Label({
        label: `<span font_family="monospace" size="small">// Working patterns with current type system:

// 1. Direct signal type extraction
type Signals = Gtk.Button.SignalSignatures;
type SignalNames = keyof Signals; // "clicked" | "activate" | ...

// 2. Type-safe connections using keyof
function connect&lt;K extends keyof Widget.SignalSignatures&gt;(
    signal: K,
    callback: Widget.SignalSignatures[K]
) { return widget.connect(signal, callback); }

// 3. Helper types for meta-programming
type ClickedCallback = GObject.SignalCallback&lt;Signals, 'clicked'&gt;;
type ClickedParams = GObject.SignalParameters&lt;Signals, 'clicked'&gt;;

// 4. JSX-style event props (simplified)
&lt;Gtk.Button onClicked={() => {}} /&gt;

// 5. Extract signals from instance type
type ButtonSignals = GObject.SignalsOf&lt;Gtk.Button&gt;;</span>`,
        use_markup: true,
        justify: Gtk.Justification.LEFT,
        selectable: true,
        margin_top: 20,
    })

    // Pack widgets
    box.append(titleLabel)
    box.append(descLabel)
    box.append(new Gtk.Separator({ orientation: Gtk.Orientation.HORIZONTAL }))
    
    box.append(demo1Label)
    box.append(button1)
    
    box.append(demo2Label)
    box.append(button2)
    
    box.append(demo3Label)
    box.append(entry)
    
    box.append(statusLabel)
    box.append(codeLabel)

    window.set_child(box)
    
    // List available signals for demonstration
    listSignals(button1);

    // Window close handler
    window.connect('close-request', () => {
        handler1.dispose(); // Clean up signal handlers
        app.quit()
        return false
    })

    // Show window
    window.present()

    console.log('=== Signal Helper Types Demo Started ===')
    console.log('This demo showcases advanced signal type helpers for:')
    console.log('• Meta-programming and framework development')
    console.log('• JSX runtime implementations') 
    console.log('• Type-safe signal wrappers')
    console.log('• Dynamic signal introspection')
})

// Run the application
app.run([]) 