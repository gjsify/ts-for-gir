# ModuleGenerator Refactoring

## Overview

The `ModuleGenerator` has been refactored to unify the functionality previously split across three separate generators:
- `ModuleGenerator` (in generator-typescript package)
- `DtsGenerator` (in lib package)
- `DtsModuleGenerator` (in lib package)

This refactoring consolidates all TypeScript generation logic into a single, more maintainable generator while preserving backward compatibility through new methods.

## Key Changes

### 1. Unified Generator
The new `ModuleGenerator` now handles all output formats:
- **String Array** (default) - The original format
- **String** - For DtsGenerator compatibility
- **Module Declaration** - For DtsModuleGenerator compatibility

### 2. AdvancedVariants Support
The AdvancedVariants feature is now fully integrated:
- Automatically applies GLib type overrides when generating GLib modules
- Automatically applies GObject registerClass overrides when generating GObject modules
- Can be disabled with the `noAdvancedVariants` option

### 3. Override Files
The GLib and GObject override files have been moved from the lib package to the generator-typescript package:
- `packages/generator-typescript/src/overrides/glib.ts`
- `packages/generator-typescript/src/overrides/gobject.ts`

## API Changes

### New Methods

```typescript
// Generate module as a single string (DtsGenerator compatibility)
generateModuleString(girModule: GirModule): Promise<string>

// Generate namespace as a single string (DtsGenerator compatibility)
generateNamespaceAsString(girModule: GirModule): Promise<string>

// Generate module declaration (DtsModuleGenerator compatibility)
generateModuleDeclaration(girModule: GirModule): Promise<string | null>
```

### Existing Methods (Unchanged)
```typescript
// Generate module as string array (default behavior)
generateModule(girModule: GirModule): Promise<string[]>

// Generate namespace as string array
generateNamespace(girModule: GirModule): Promise<string[]>

// Convert namespace to string (existing method)
stringifyNamespace(node: GirModule): Promise<string | null>
```

## Migration Guide

### From DtsGenerator
```typescript
// Before
import { DtsGenerator } from "@ts-for-gir/lib";
const generator = new DtsGenerator(namespace, options);
const output = await generator.generateNamespace(namespace);

// After
import { ModuleGenerator } from "@ts-for-gir/generator-typescript";
const generator = new ModuleGenerator(namespace, options, registry);
const output = await generator.generateNamespaceAsString(namespace);
```

### From DtsModuleGenerator
```typescript
// Before
import { DtsModuleGenerator } from "@ts-for-gir/lib";
const generator = new DtsModuleGenerator(namespace, options);
const output = await generator.generateNamespace(namespace);

// After
import { ModuleGenerator } from "@ts-for-gir/generator-typescript";
const generator = new ModuleGenerator(namespace, options, registry);
const output = await generator.generateModuleDeclaration(namespace);
```

## Benefits

1. **Single Source of Truth**: All TypeScript generation logic is now in one place
2. **Easier Maintenance**: No need to synchronize changes across multiple generators
3. **Better Feature Parity**: All output formats benefit from the same features
4. **Cleaner Architecture**: Removes cross-package dependencies for generator functionality
5. **Full AdvancedVariants Support**: The feature is now properly integrated across all output formats

## Future Considerations

The override files (glib.ts and gobject.ts) could potentially be converted to templates using EJS, but they are kept as TypeScript files for now because:
- They contain complex TypeScript type definitions
- They don't have much dynamic content that would benefit from templating
- Keeping them as TypeScript files provides better IDE support and type checking 