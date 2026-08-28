<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/ts-for-gir.png" />
  <h1 align="center">TS <small>for</small> GIR</h1>
</p>

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/gjsify/ts-for-gir/ci.yml" />
  <img src="https://img.shields.io/github/license/gjsify/ts-for-gir" />
  <img src="https://img.shields.io/npm/v/@ts-for-gir/templates" />
  <img src="https://img.shields.io/npm/dw/@ts-for-gir/templates" />
</p>

<p align="center">TypeScript type definition generator for GObject introspection GIR files</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/gjsify/ts-for-gir/main/.github/feeling.gif" />
</p>

# Templates

Template collection for `ts-for-gir`. This package contains EJS templates and static template files used by the TypeScript generator to produce TypeScript definition files and NPM packages from GIR data.

## Purpose

This package holds every template the generator writes from:

- **EJS Templates**: Dynamic templates for generating TypeScript declaration files (.d.ts)
- **Static Templates**: Pre-built type definitions for core GJS modules and runtime APIs
- **Package Templates**: Templates for generating NPM package.json files and documentation
- **GJS Runtime Types**: TypeScript definitions for GJS-specific APIs like console, system, gettext, and DOM

## Template Categories

### Core GIR Templates
- Module templates for generating TypeScript definitions from GIR data
- Ambient module declarations for `gi://` imports
- Import/export templates for different module formats

### GJS Runtime Templates
Located in `templates/gjs/`, these provide TypeScript definitions for:
- **Cairo**: 2D graphics library bindings
- **Console**: GJS console API with logging functions
- **DOM**: Basic DOM-like APIs for GJS
- **Gettext**: Internationalization support
- **System**: System-level utilities and information

### Library-Specific Templates
Pre-built templates for common libraries with special handling:
- GLib, GObject, Gio core libraries
- Cogl, Granite, GStreamer bindings
- Custom overrides for complex type mappings

### Package Generation Templates
- NPM package.json generation
- README.md templates for generated packages
- TypeScript configuration files
- Documentation generation templates

## Usage

This package is used internally by `@ts-for-gir/generator-typescript` and is not intended for direct use by end users. The templates are automatically loaded and processed during the type generation process.

The template processor uses EJS to render dynamic content, allowing for:
- Conditional template sections
- Variable substitution
- Loop-based code generation
- Template inheritance and includes

## Template Structure

Templates follow a consistent structure with:
- **prepend**: Content added before generated code
- **append**: Content added after generated code
- **Variables**: Dynamic data injected during processing
- **Conditionals**: Logic for handling different generation scenarios

This package ensures consistent output formatting and provides a centralized location for all template-related assets in the ts-for-gir toolchain.
