# GObject ParamSpec Example

This example demonstrates how to use GObject property specifications (ParamSpec) and property binding in TypeScript with GJS.

## Features Demonstrated

### ParamSpec Usage
- String properties with full documentation (nick and blurb)
- Properties with minimal documentation (null nick and blurb) 
- Integer properties with ranges
- Boolean properties
- Object properties (Gio.File)

### Property Access Methods
- Direct property access via getters/setters
- `get_property()` and `set_property()` with GObject.Value
- Property introspection using `list_properties()`

### Property Binding
This example shows how to bind properties between GObject instances using `bind_property_full()`. Property binding automatically synchronizes values between source and target objects.

The binding examples demonstrate:
1. **Simple property binding** - changes in source property automatically update target
2. **Bidirectional binding** - changes in either source or target update the other
3. **Sync create binding** - target immediately gets source value when binding is created
4. **Property notifications** - how to trigger binding updates manually

```typescript
// Simple property binding with default transformation
const binding = sourceObj.bind_property_full(
    'property-name',
    targetObj,
    'property-name',
    GObject.BindingFlags.DEFAULT,
    null, // Use default transformation
    null  // Use default reverse transformation
);

// Bidirectional binding
const binding = sourceObj.bind_property_full(
    'count',
    targetObj,
    'count',
    GObject.BindingFlags.BIDIRECTIONAL,
    null, // No custom transformation needed
    null  // No custom reverse transformation needed
);
```

## Running the Example

```bash
yarn install
yarn build
yarn start
```

## Key Learning Points

1. **ParamSpec Creation**: Different ways to create property specifications with varying levels of documentation
2. **Property Binding**: How to bind properties between GObject instances for automatic synchronization
3. **Type Safety**: TypeScript provides full type checking for property names and values
4. **Property Notifications**: Understanding when and how property changes are propagated
5. **Binding Lifecycle**: How to create, use, and clean up property bindings

## Property Binding Patterns

### Default Binding
Use `null` for transformation functions when no custom conversion is needed:
```typescript
sourceObj.bind_property_full('prop', targetObj, 'prop', flags, null, null);
```

### With Custom Transformation
Provide Closure objects when custom value transformation is required:
```typescript
const transformTo = new GObject.Closure(/* transformation function */);
sourceObj.bind_property_full('prop', targetObj, 'prop', flags, transformTo, null);
```

### Binding Flags
- `DEFAULT`: One-way binding from source to target
- `BIDIRECTIONAL`: Two-way binding between source and target
- `SYNC_CREATE`: Immediately sync target with source value on creation

## Technical Details

Property binding in GObject allows automatic synchronization of values between object properties. The `bind_property_full()` method provides complete control over binding behavior, including the ability to use default transformations by passing `null` for the transformation functions when no custom conversion is needed. 