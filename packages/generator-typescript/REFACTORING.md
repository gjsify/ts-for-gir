# ModuleGenerator Refactoring

## Overview

The `ModuleGenerator` has been completely refactored to unify the functionality previously split across three separate generators:
- `ModuleGenerator` (in generator-typescript package)
- `DtsGenerator` (removed from lib package)
- `DtsModuleGenerator` (removed from lib package)
- `DtsInlineGenerator` (removed from lib package)

This refactoring consolidates all TypeScript generation logic into a single, more maintainable generator. The old generators have been completely removed from the lib package.

## Key Changes

### 1. Unified Generator
The new `ModuleGenerator` now handles all output formats:
- **String Array** (default) - The original format
- **String** - For legacy DtsGenerator compatibility
- **Module Declaration** - For legacy DtsModuleGenerator compatibility
- **Inline** - For legacy DtsInlineGenerator compatibility

### 2. AdvancedVariants Support
The AdvancedVariants feature is now fully integrated:
- Automatically applies GLib type overrides when generating GLib modules
- Automatically applies GObject registerClass overrides when generating GObject modules
- Can be disabled with the `noAdvancedVariants` option

### 3. Override Files
The GLib and GObject override files have been moved from the lib package to the generator-typescript package:
- `packages/generator-typescript/src/overrides/glib.ts`
- `packages/generator-typescript/src/overrides/gobject.ts`

### 4. JSON Generator Moved
The `JsonGenerator` has been moved to its own package:
- `@ts-for-gir/generator-json`

## API Changes

### New Methods

```typescript
// Generate module as a single string (legacy DtsGenerator compatibility)
generateModuleString(girModule: GirModule): Promise<string>

// Generate namespace as a single string (legacy DtsGenerator compatibility)
generateNamespaceAsString(girModule: GirModule): Promise<string>

// Generate module declaration (legacy DtsModuleGenerator compatibility)
generateModuleDeclaration(girModule: GirModule): Promise<string | null>

// Generate inline DTS (legacy DtsInlineGenerator compatibility)
generateInline(girModule: GirModule): Promise<string | null>
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

### From Legacy DtsGenerator (REMOVED)
```typescript
// Old (no longer available)
import { DtsGenerator } from "@ts-for-gir/lib";
const generator = new DtsGenerator(namespace, options);
const output = await generator.generateNamespace(namespace);

// New
import { ModuleGenerator } from "@ts-for-gir/generator-typescript";
const generator = new ModuleGenerator(namespace, options, registry);
const output = await generator.generateNamespaceAsString(namespace);
```

### From Legacy DtsModuleGenerator (REMOVED)
```typescript
// Old (no longer available)
import { DtsModuleGenerator } from "@ts-for-gir/lib";
const generator = new DtsModuleGenerator(namespace, options);
const output = await generator.generateNamespace(namespace);

// New
import { ModuleGenerator } from "@ts-for-gir/generator-typescript";
const generator = new ModuleGenerator(namespace, options, registry);
const output = await generator.generateModuleDeclaration(namespace);
```

### From Legacy DtsInlineGenerator (REMOVED)
```typescript
// Old (no longer available)
import { DtsInlineGenerator } from "@ts-for-gir/lib";
const generator = new DtsInlineGenerator(namespace, options);
const output = await generator.generateNamespace(namespace);

// New
import { ModuleGenerator } from "@ts-for-gir/generator-typescript";
const generator = new ModuleGenerator(namespace, options, registry);
const output = await generator.generateInline(namespace);
```

### From Legacy JsonGenerator (MOVED)
```typescript
// Old (no longer available from lib)
import { JsonGenerator } from "@ts-for-gir/lib";

// New
import { JsonGenerator } from "@ts-for-gir/generator-json";
```

## Benefits

1. **Single Source of Truth**: All TypeScript generation logic is now in one place
2. **Easier Maintenance**: No need to synchronize changes across multiple generators
3. **Better Feature Parity**: All output formats benefit from the same features
4. **Cleaner Architecture**: Removes cross-package dependencies for generator functionality
5. **Full AdvancedVariants Support**: The feature is now properly integrated across all output formats
6. **Modular Packages**: JSON generation is now in its own dedicated package

## CLI Integration

The new generators are fully integrated with the CLI:
- `ts-for-gir generate` - Uses `@ts-for-gir/generator-typescript`
- `ts-for-gir json` - Uses `@ts-for-gir/generator-json`

## Future Considerations

The override files (glib.ts and gobject.ts) could potentially be converted to templates using EJS, but they are kept as TypeScript files for now because:
- They contain complex TypeScript type definitions
- They don't have much dynamic content that would benefit from templating
- Keeping them as TypeScript files provides better IDE support and type checking 