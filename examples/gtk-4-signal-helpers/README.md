# GTK 4 Signal Helper Types Demo

This example demonstrates the advanced signal helper types that enable meta-programming scenarios like JSX runtimes, signal wrappers, and type-safe event handling abstractions.

## Overview

While the `gtk-4-signal-interfaces` example shows basic signal usage, this example focuses on the **helper types** that enable advanced use cases:

- **SignalsOf<T>**: A type helper to extract all signal signatures from a GObject instance type.
- **SignalSignatures**: An interface generated on GObject classes containing all signal definitions.

These can be combined with TypeScript's built-in `keyof`, `Parameters`, and `ReturnType` for powerful, type-safe signal handling.

## Working Approaches

### 1. Direct Type Extraction (Recommended)
```typescript
// Extract signal signatures directly from the class
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

### 2. Extracting Types for Meta-Programming
```typescript
// Use GObject.SignalsOf to get signals from an instance type
type ButtonSignals = GObject.SignalsOf<Gtk.Button>;

// Use built-in helpers to get parameter and return types
type ClickedParams = Parameters<ButtonSignals['clicked']>;
type ClickedReturn = ReturnType<ButtonSignals['clicked']>;
```

## Use Cases Demonstrated

### 1. Type-Safe Signal Handler Wrapper

A wrapper can provide a fluent API for managing signal connections. While full type safety in a generic wrapper can be complex, the underlying types make it possible.

```typescript
// A simplified wrapper
class SignalHandler<T extends GObject.Object> {
    on(signal: string, callback: (...args: any[]) => any): this
}
```

### 2. JSX-Style Event Props

```typescript
// Transform signal names into JSX-style event props
type EventProps<T extends GObject.SignalSignatures> = {
    [K in keyof T as `on${Capitalize<K & string>}`]?: T[K];
};

// Usage in JSX:
<Gtk.Button onClicked={() => {}} onActivate={() => {}} />
```

Demonstrates how to transform signal names to JSX-style event props for React-like frameworks.

### 3. Dynamic Type-Safe Connections

```typescript
function connectToEntry<K extends keyof Gtk.Entry.SignalSignatures>(
    signal: K,
    callback: Gtk.Entry.SignalSignatures[K]
)
```

Shows how to create functions that accept only valid signal names and enforce correct callback signatures for a specific widget class.

## Running the Example

```bash
# Build the TypeScript code
yarn build

# Run the example
yarn start
```

## Key Concepts

1. **Type Extraction**: The `SignalSignatures` and `SignalsOf` types allow extracting signal information at the type level.
2. **Meta-Programming**: Enable building abstractions on top of the signal system with strong type guarantees.
3. **Framework Development**: The patterns shown are ideal for building UI frameworks or reactive libraries on top of GJS.
4. **Type Safety**: Maintain full type safety with standard TypeScript features and the provided helpers.

## Comparison with Basic Example

- `gtk-4-signal-interfaces`: Shows direct signal usage with `.connect()`
- `gtk-4-signal-helpers`: Shows how to build abstractions using the type system for advanced scenarios.

Both examples complement each other to provide a complete picture of the signal interfaces feature. 