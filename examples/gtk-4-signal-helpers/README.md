# GTK 4 Signal Helper Types Demo

This example demonstrates the advanced signal helper types that enable meta-programming scenarios like JSX runtimes, signal wrappers, and type-safe event handling abstractions.

## Overview

While the `gtk-4-signal-interfaces` example shows basic signal usage, this example focuses on the **helper types** that enable advanced use cases:

- **SignalsOf<T>** - Extract signal signatures from a type
- **SignalName<T>** - Get all signal names as a union type  
- **SignalCallback<T, K>** - Extract callback type for a specific signal
- **SignalParameters<T, K>** - Extract parameters for a signal callback
- **SignalReturnType<T, K>** - Extract return type for a signal callback

## Working Approaches

### 1. Direct Type Extraction (Recommended)
```typescript
// Extract signal signatures directly
type Signals = Gtk.Button.SignalSignatures;
type SignalNames = keyof Signals;

// Type-safe connection function
function connect<K extends keyof Widget.SignalSignatures>(
    signal: K,
    callback: Widget.SignalSignatures[K]
) {
    return widget.connect(signal, callback);
}
```

### 2. Helper Types for Meta-Programming
```typescript
// Use GObject helper types for advanced scenarios
type ClickedCallback = GObject.SignalCallback<Signals, 'clicked'>;
type ClickedParams = GObject.SignalParameters<Signals, 'clicked'>;
type ButtonSignals = GObject.SignalsOf<Gtk.Button>;
```

## Use Cases Demonstrated

### 1. Type-Safe Signal Handler Wrapper

```typescript
class SignalHandler<T extends GObject.Object> {
    on<K extends GObject.SignalName<T['constructor']['SignalSignatures']>>(
        signal: K,
        callback: GObject.SignalCallback<T['constructor']['SignalSignatures'], K>
    ): this
}
```

This wrapper provides a fluent API with full type safety for signal connections.

### 2. JSX-Style Event Props

```typescript
type EventProps<T extends GObject.SignalSignatures> = {
    [K in keyof T as SignalToEventProp<K & string>]?: T[K];
};

// Usage in JSX:
<Gtk.Button onClicked={() => {}} onNotifyLabel={() => {}} />
```

Demonstrates how to transform signal names to JSX-style event props for React-like frameworks.

### 3. Dynamic Type-Safe Connections

```typescript
function connectToEntry<K extends GObject.SignalName<Gtk.Entry.SignalSignatures>>(
    signal: K,
    callback: GObject.SignalCallback<Gtk.Entry.SignalSignatures, K>
)
```

Shows how to create functions that accept only valid signal names and enforce correct callback signatures.

## Running the Example

```bash
# Build the TypeScript code
yarn build

# Run the example
yarn start
```

## Key Concepts

1. **Type Extraction**: The helper types allow extracting signal information at the type level
2. **Meta-Programming**: Enable building abstractions on top of the signal system
3. **Framework Development**: Perfect for building UI frameworks or reactive libraries
4. **Type Safety**: Maintain full type safety even with dynamic signal handling

## Comparison with Basic Example

- `gtk-4-signal-interfaces`: Shows direct signal usage with `.connect()`
- `gtk-4-signal-helpers`: Shows how to build abstractions using the type system

Both examples complement each other to provide a complete picture of the signal interfaces feature. 