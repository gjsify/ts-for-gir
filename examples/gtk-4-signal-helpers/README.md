# GTK 4 Signal Helper Types Demo

This example shows how the **generated `$signals` metadata** and the helper
`GObject.SignalCallback` enable fully type-safe signal handling, even for
meta-programming scenarios such as JSX runtimes.

## Key concepts

* `$signals` — a **compile-time only** instance property that every
  `GObject.Object`-derived class now carries.  It exposes the
  `SignalSignatures` interface for that class and can be overridden in
  subclasses.
* `GObject.SignalCallback<Emitter, Fn>` — helper that prepends the
  emitter (`this`) to the inline callback type.

## Direct usage

```ts
// Inferred callback type, `self` is Gtk.Button
btn.connect('clicked', (self) => {
    print(self.get_label());
});
```

## Generic helper (e.g. for JSX runtimes)

```ts
import GObject from 'gi://GObject?version=2.0';

// Only instances that actually have `$signals` are allowed
interface HasSignals {
  $signals: Record<PropertyKey, (...args: any[]) => any>;
}

type SignalKey<T extends HasSignals> = Extract<keyof T['$signals'], string>;

function on<
  T extends typeof GObject.Object,
  K extends SignalKey<InstanceType<T>>,
>(
  ctor: T,
  signal: K,
  cb: GObject.SignalCallback<InstanceType<T>, InstanceType<T>['$signals'][K]>,
) {
  return (ctor.prototype as any).connect.call(ctor.prototype, signal, cb);
}

// usage
on(Gtk.Button, 'clicked', (src) => print(src.get_label()));
```

## Runtime note

`$signals` is **undefined at runtime**; it only exists in the generated
`.d.ts` files for the TypeScript compiler.  Attempting to read it in
JavaScript will return `undefined`. The property is defined as an instance
property, allowing type inference from both class constructors and instances.


## Working Approaches

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

1. **Type Extraction**: The `SignalSignatures` interface allows extracting signal information at the type level.
2. **Meta-Programming**: Enable building abstractions on top of the signal system with strong type guarantees.
3. **Framework Development**: The patterns shown are ideal for building UI frameworks or reactive libraries on top of GJS.
4. **Type Safety**: Maintain full type safety with standard TypeScript features and the provided helpers.

## Comparison with Basic Example

- `gtk-4-signal-interfaces`: Shows direct signal usage with `.connect()`
- `gtk-4-signal-helpers`: Shows how to build abstractions using the type system for advanced scenarios.

Both examples complement each other to provide a complete picture of the signal interfaces feature. 