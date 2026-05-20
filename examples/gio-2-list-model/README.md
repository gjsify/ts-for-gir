# Gio ListModel Implementation Example

This example demonstrates how to implement the `Gio.ListModel` interface using the new **virtual interface pattern** introduced in ts-for-gir.

## What's New: Virtual Interface Pattern

The example demonstrates the elegant implementation pattern using `declare` statements and virtual function implementations:

```typescript
class GjsListStore extends GObject.Object implements Gio.ListModel.Interface<GObject.Object> {
  // Declare interface methods for TypeScript compatibility
  declare get_item: Gio.ListModel["get_item"];
  declare get_item_type: Gio.ListModel["get_item_type"];
  declare get_n_items: Gio.ListModel["get_n_items"];

  // Only implement virtual methods - regular methods are provided automatically:
  vfunc_get_item_type(): GObject.GType { ... }
  vfunc_get_item(position: number): GObject.Object | null { ... }
  vfunc_get_n_items(): number { ... }
  
  // Regular methods like get_item(), get_n_items(), etc. are automatically provided!
}
```

## How It Works

The `declare` statements provide TypeScript with the method signatures it needs for type checking, while the `vfunc_*` methods provide the actual implementations. GJS automatically creates the public interface methods that delegate to these virtual functions.

This approach gives you:
- ✅ Full TypeScript type safety
- 🎯 Clean separation of concerns
- 🔧 No duplicate method implementations
- 🚀 Automatic delegation to virtual functions

## How Virtual Methods Work

In GObject-Introspection, interfaces have two types of methods:

- **Virtual Methods** (`vfunc_*`): Must be implemented by your class
- **Regular Methods**: Automatically provided by GObject, typically call the virtual methods

The new pattern ensures you only implement what's actually required!

## Implementation Pattern

For each interface method you need to implement:

1. **Declare the method signature** using `declare` for TypeScript compatibility
2. **Implement the virtual function** (`vfunc_*`) with your actual logic
3. **Let GJS handle the delegation** automatically

## Running the Example

```bash
# Build the example
gjsify run build

# Run the example
gjsify run start
```

## Expected Output

```
vfunc_get_item_type [object GObject_GType]
items_changed position: 0, removed: 0, added: 1
vfunc_get_item_type [object GObject_GType]  
items_changed position: 1, removed: 0, added: 1
GjsListStore example:
vfunc_get_n_items 2
Items in store: 2
vfunc_get_item_type [object GObject_GType]
Item type: [object GObject_GType]
```

## What This Example Shows

- How to implement `Gio.ListModel.Interface<T>` instead of `Gio.ListModel`
- Virtual methods (`vfunc_*`) that must be implemented
- Regular methods that are automatically provided
- Proper TypeScript generics for the item type
- Complete list store functionality with add/remove/clear operations
- Elegant `declare` pattern for TypeScript compatibility

## Related Examples

- [`virtual-interface-test`](../virtual-interface-test/): More comprehensive virtual interface examples
- [`gtk-4-list-store`](../gtk-4-list-store/): Using list models with GTK widgets 