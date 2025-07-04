# GIO-2 DBus Example

This example demonstrates D-Bus server/client communication using GJS and TypeScript.

## Advanced Variants Support

This example demonstrates both the traditional approach and the new Advanced Variants feature (`noAdvancedVariants: false`).

### Backward Compatibility

The `deepUnpack()` method now supports both approaches for maximum compatibility:

**Traditional approach (explicit type parameters):**
```ts
// Explicitly specify the expected type
const data = variant.deepUnpack<{ [key: string]: GLib.Variant }>();
```

**Advanced Variants approach (automatic type inference):**
```ts
// The type is automatically inferred from the variant's type signature
const data = variant.deepUnpack();
```

Both approaches work simultaneously, providing seamless migration paths.

### Benefits of Advanced Variants

- **Automatic type inference** based on GLib.Variant type signatures
- **Backward compatibility** with existing code using explicit type parameters
- **Better type safety** through constraint checking
- **Improved developer experience** with intelligent TypeScript IntelliSense
- Better type safety for complex variant structures
- Compile-time validation of variant operations

### Running the Example

```bash
# Build the TypeScript sources
yarn build

# Start the server (in one terminal)
yarn start:server

# Start the client (in another terminal)  
yarn start:client

# Or run both simultaneously
yarn start
``` 