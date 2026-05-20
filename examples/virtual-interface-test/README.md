# Virtual Interface Implementation Test

This example demonstrates the new virtual interface functionality for implementing GObject interfaces in TypeScript.

## Overview

With the new virtual interface feature, you can implement GObject interfaces by only implementing the virtual methods (`vfunc_*`) instead of all interface methods. This matches the GObject-Introspection pattern and makes interface implementation much cleaner.

## What This Example Shows

The example demonstrates the elegant implementation pattern using `declare` statements and virtual function implementations:

```typescript
class CustomPaintable extends GObject.Object implements Gdk.Paintable.Interface {
  // Declare interface methods for TypeScript compatibility
  declare get_current_image: Gdk.Paintable["get_current_image"];
  declare get_flags: Gdk.Paintable["get_flags"];
  declare get_intrinsic_width: Gdk.Paintable["get_intrinsic_width"];
  declare get_intrinsic_height: Gdk.Paintable["get_intrinsic_height"];
  declare get_intrinsic_aspect_ratio: Gdk.Paintable["get_intrinsic_aspect_ratio"];
  declare snapshot: Gdk.Paintable["snapshot"];

  // Only implement virtual methods:
  vfunc_get_current_image(): Gdk.Paintable { ... }
  vfunc_get_flags(): Gdk.PaintableFlags { ... }
  vfunc_get_intrinsic_width(): number { ... }
  vfunc_get_intrinsic_height(): number { ... }
  vfunc_get_intrinsic_aspect_ratio(): number { ... }
  vfunc_snapshot(...): void { ... }
  // That's it! Other methods are automatically provided
}
```

## How It Works

The `declare` statements provide TypeScript with the method signatures it needs for type checking, while the `vfunc_*` methods provide the actual implementations. GJS automatically creates the public interface methods that delegate to these virtual functions.

This approach gives you:
- ✅ Full TypeScript type safety
- 🎯 Clean separation of concerns
- 🔧 No duplicate method implementations
- 🚀 Automatic delegation to virtual functions

## How to Test

### Step 3: Build and Run the Example
```bash
cd examples/virtual-interface-test
gjsify install
gjsify run build
gjsify run start
```

## Benefits

1. **Cleaner Implementation**: Only implement the methods you actually need to provide
2. **Matches GObject Patterns**: Follows the same pattern as GObject-Introspection
3. **Better Developer Experience**: Less boilerplate, more focused on actual functionality
4. **Backward Compatible**: Existing implementations continue to work
5. **Elegant TypeScript Integration**: Uses `declare` for clean type declarations without implementation duplication

## Interface Examples

The example shows implementations of:
- `Gio.ListModel.Interface` - for custom list models
- `Gdk.Paintable.Interface` - for custom paintable objects

Both interfaces now have `.Interface` namespaced types that contain only the virtual methods needed for implementation.

## Implementation Pattern

For each interface method you need to implement:

1. **Declare the method signature** using `declare` for TypeScript compatibility
2. **Implement the virtual function** (`vfunc_*`) with your actual logic
3. **Let GJS handle the delegation** automatically

```typescript
class MyInterface extends GObject.Object implements SomeInterface.Interface {
  // 1. Declare for TypeScript
  declare someMethod: SomeInterface["someMethod"];
  
  // 2. Implement the virtual function
  vfunc_someMethod(): ReturnType {
    // Your implementation here
  }
}
```

## Advanced Type Safety with `this` Types

For even better type safety in your virtual function implementations, you can use intersection types with `this`:

```typescript
class CustomPaintable extends GObject.Object implements Gdk.Paintable.Interface {
  // Declare interface methods
  declare get_current_image: Gdk.Paintable["get_current_image"];
  
  // Enhanced type safety with this intersection
  vfunc_get_current_image(this: this & Gdk.Paintable): Gdk.Paintable {
    // TypeScript now knows that 'this' has both the class methods
    // AND the interface methods available
    return this; // This is now fully type-safe
  }
}
```
