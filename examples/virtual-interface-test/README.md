# Virtual Interface Implementation Test

This example demonstrates the new virtual interface functionality for implementing GObject interfaces in TypeScript.

## Overview

With the new virtual interface feature, you can implement GObject interfaces by only implementing the virtual methods (`vfunc_*`) instead of all interface methods. This matches the GObject-Introspection pattern and makes interface implementation much cleaner.

## What This Example Shows

### Before (Old Way)
```typescript
class CustomPaintable extends GObject.Object implements Gdk.Paintable {
  // Had to implement ALL methods of Gdk.Paintable:
  get_current_image(): Gdk.Paintable { ... }
  get_flags(): Gdk.PaintableFlags { ... }
  get_intrinsic_width(): number { ... }
  get_intrinsic_height(): number { ... }
  get_intrinsic_aspect_ratio(): number { ... }
  compute_concrete_size(...): [number, number] { ... }
  snapshot(...): void { ... }
  // ... and many more methods
}
```

### After (New Way)
```typescript
class CustomPaintable extends GObject.Object implements Gdk.Paintable.Interface {
  // Only implement virtual methods:
  vfunc_get_current_image(): Gdk.Paintable { ... }
  vfunc_get_flags(): Gdk.PaintableFlags { ... }
  vfunc_get_intrinsic_width(): number { ... }
  vfunc_get_intrinsic_height(): number { ... }
  vfunc_get_intrinsic_aspect_ratio(): number { ... }
  // That's it! Other methods are automatically provided
}
```

## How to Test

**Note:** This example will show TypeScript errors until the new virtual interface types are generated.

### Step 1: Generate New Types
```bash
# From the project root
yarn ts-for-gir generate
```

### Step 2: Build Type Packages
```bash
yarn build
```

### Step 3: Build and Run the Example
```bash
cd examples/virtual-interface-test
yarn install
yarn build
yarn start
```

## Expected Output

When working correctly, you should see:
- ✅ TypeScript compilation without errors
- 🎯 Demo showing virtual interface implementations
- 📋 CustomListModel working with only virtual methods implemented
- 🎨 CustomPaintable working with only virtual methods implemented

## Benefits

1. **Cleaner Implementation**: Only implement the methods you actually need to provide
2. **Matches GObject Patterns**: Follows the same pattern as GObject-Introspection
3. **Better Developer Experience**: Less boilerplate, more focused on actual functionality
4. **Backward Compatible**: Existing implementations continue to work

## Interface Examples

The example shows implementations of:
- `Gio.ListModel.Interface` - for custom list models
- `Gdk.Paintable.Interface` - for custom paintable objects

Both interfaces now have `.Interface` namespaced types that contain only the virtual methods needed for implementation.

## Troubleshooting

If you see TypeScript errors:
1. Make sure you've generated the new types with the updated generator
2. Ensure all type packages are rebuilt
3. Check that your tsconfig.json includes the necessary types

If the virtual interfaces aren't available:
- The generator changes may not be active yet
- Try regenerating all types from scratch 