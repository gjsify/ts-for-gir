# Gio ListModel Implementation Example

This example demonstrates how to implement the `Gio.ListModel` interface using the new **virtual interface pattern** introduced in ts-for-gir.

## What's New: Virtual Interface Pattern

### Before (Old Way)
```typescript
class GjsListStore extends GObject.Object implements Gio.ListModel {
  // Had to implement ALL methods of Gio.ListModel:
  get_item_type(): GObject.GType { ... }
  get_item(position: number): GObject.Object | null { ... }
  get_n_items(): number { ... }
  items_changed(position: number, removed: number, added: number): void { ... }
  
  // PLUS all virtual methods:
  vfunc_get_item_type(): GObject.GType { ... }
  vfunc_get_item(position: number): GObject.Object | null { ... }
  vfunc_get_n_items(): number { ... }
}
```

### After (New Way)
```typescript
class GjsListStore extends GObject.Object implements Gio.ListModel.Interface<GObject.Object> {
  // Only implement virtual methods - regular methods are provided automatically:
  vfunc_get_item_type(): GObject.GType { ... }
  vfunc_get_item(position: number): GObject.Object | null { ... }
  vfunc_get_n_items(): number { ... }
  
  // Regular methods like get_item(), get_n_items(), etc. are automatically provided!
}
```

## Key Benefits

1. **Less Boilerplate**: Only implement the methods you actually need to override
2. **Better Type Safety**: TypeScript will catch missing virtual method implementations
3. **Matches GObject-Introspection**: Follows the actual GObject pattern where only virtual methods need implementation
4. **Automatic Methods**: Regular interface methods are provided by the GObject runtime

## How Virtual Methods Work

In GObject-Introspection, interfaces have two types of methods:

- **Virtual Methods** (`vfunc_*`): Must be implemented by your class
- **Regular Methods**: Automatically provided by GObject, typically call the virtual methods

The new pattern ensures you only implement what's actually required!

## Running the Example

```bash
# Build the example
yarn build

# Run the example
yarn start
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
✅ Virtual interface implementation working correctly!
```

## What This Example Shows

- How to implement `Gio.ListModel.Interface<T>` instead of `Gio.ListModel`
- Virtual methods (`vfunc_*`) that must be implemented
- Regular methods that are automatically provided
- Proper TypeScript generics for the item type
- Complete list store functionality with add/remove/clear operations

## Related Examples

- [`virtual-interface-test`](../virtual-interface-test/): More comprehensive virtual interface examples
- [`gtk-4-list-store`](../gtk-4-list-store/): Using list models with GTK widgets 