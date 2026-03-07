<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/ts-for-gir.png" />
  <h1 align="center">TS <small>for</small> GIR</h1>
</p>

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/gjsify/ts-for-gir/ci.yml" />
  <img src="https://img.shields.io/github/license/gjsify/ts-for-gir" />
  <img src="https://img.shields.io/npm/v/@ts-for-gir/generator-json" />
  <img src="https://img.shields.io/npm/dw/@ts-for-gir/generator-json" />
</p>

<p align="center">TypeScript type definition generator for GObject introspection GIR files</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/feeling.gif" />
</p>

# JSON Generator

JSON output generator for `ts-for-gir`. This package uses [TypeDoc](https://typedoc.org/) to produce standardized **TypeDoc JSON Schema 2.0** output, enriched with GIR-specific metadata.

## How It Works

The generator uses a two-step process:

1. **Generate `.d.ts` files** into a temporary directory using the TypeScript type definition generator
2. **Run TypeDoc programmatically** over those files to produce standardized JSON, enriched with GIR-specific metadata via a custom `SerializerComponent`

This approach combines the best of both worlds: TypeDoc's standardized, well-documented JSON schema with GIR-specific introspection data that would otherwise be lost during TypeScript generation.

## Features

- **Standardized Output**: Produces [TypeDoc JSON Schema 2.0](https://typedoc.org/guides/documents/#json-output), compatible with the TypeDoc ecosystem
- **GIR Metadata Enrichment**: Adds `girMetadata` fields to each reflection with GIR-specific data (C types, signal flags, property access, parameter directions, etc.)
- **Namespace Metadata**: Includes `girNamespaceMetadata` at the project root with C prefixes, library version, and dependency information
- **Complete Type Information**: Full TypeScript type information including generics, overloads, and JSDoc

## JSON Structure

The output follows TypeDoc's JSON Schema 2.0 with additional GIR metadata:

```json
{
  "schemaVersion": "2.0",
  "name": "Gtk-4.0",
  "variant": "project",
  "kind": 1,
  "children": [
    {
      "name": "Gtk",
      "variant": "declaration",
      "kind": 4,
      "children": [
        {
          "name": "Widget",
          "kind": 128,
          "girMetadata": {
            "girKind": "class",
            "resolveNames": ["GtkWidget"],
            "classMetadata": {
              "isAbstract": true,
              "interfaces": ["Gtk.Accessible", "Gtk.Buildable"],
              "signalNames": ["destroy", "show", "hide"]
            }
          }
        }
      ]
    }
  ],
  "girNamespaceMetadata": {
    "namespace": "Gtk",
    "version": "4.0",
    "packageName": "Gtk-4.0",
    "cPrefixes": ["Gtk"],
    "libraryVersion": "4.20.3",
    "dependencies": [
      { "namespace": "Gsk", "version": "4.0" },
      { "namespace": "Gdk", "version": "4.0" }
    ]
  }
}
```

## GIR Metadata

Each TypeDoc reflection can include a `girMetadata` field with GIR-specific data:

| GIR Kind | Metadata | Fields |
|----------|----------|--------|
| `class` | `classMetadata` | `isAbstract`, `interfaces`, `signalNames` |
| `record` | `recordMetadata` | `isForeign`, `isSimple`, `structFor` |
| `enum` / `bitfield` | `enumMetadata` | `isFlags` |
| `method` / `virtual-method` / `static-method` | `functionMetadata` | `isVirtual`, `isStatic`, `parameterDirections`, `nullableParams`, `optionalParams` |
| `property` | `propertyMetadata` | `readable`, `writable`, `constructOnly` |
| `signal` | `signalMetadata` | `signalName`, `detailed` |
| `constructor` | `functionMetadata` | `parameterDirections`, `nullableParams`, `optionalParams` |
| `constant`, `alias`, `callback`, `field` | — | Common metadata only |

All GIR elements also include common metadata when available: `resolveNames` (C type names), `introducedVersion`, `deprecated`, `deprecatedVersion`, `deprecatedDoc`.

## Usage

```bash
# Generate JSON for a specific module
ts-for-gir json Gtk-4.0 --outdir ./json-output

# Generate with verbose output (pretty-printed JSON)
ts-for-gir json Gtk-4.0 --outdir ./json-output --verbose
```

The JSON output can be useful for:
- Building documentation websites
- Creating API analysis and exploration tools
- Generating bindings for other languages
- Data processing and transformation pipelines
- IDE integration and tooling

## Integration

The JSON generator integrates with the ts-for-gir ecosystem through:
- **Reporter System**: Comprehensive logging and error reporting
- **Generator Interface**: Standard lifecycle methods (`start`, `generate`, `finish`)
- **TypeDoc**: Programmatic usage of TypeDoc for JSON serialization with custom `SerializerComponent`
- **Configuration**: Respects all standard ts-for-gir options and settings
