import { validateGIRTypeScript, validateTypeScript, type ValidationOptions, type ValidationResult } from '@ts-for-gir/language-server';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Test basic TypeScript validation (no imports)
 */
export function testBasicTypeScript(options: ValidationOptions = {}): ValidationResult {
  const testCode = `
    interface TestInterface {
      name: string;
      value: number;
    }
    
    const obj: TestInterface = {
      name: "test",
      value: 42
    };
    
    function processObject(item: TestInterface): string {
      return \`\${item.name}: \${item.value}\`;
    }
    
    const result = processObject(obj);
  `;

  return validateTypeScript(testCode, options);
}

/**
 * Test GTK import WITHOUT type definitions (should fail)
 * This demonstrates that GIR imports don't work without proper type setup
 */
export function testGtkImportWithoutTypes(options: ValidationOptions = {}): ValidationResult {
  const testCode = `
    import Gtk from 'gi://Gtk?version=4.0';
    
    const app = new Gtk.Application();
    const window = new Gtk.Window();
    window.show();
  `;

  // Explicitly use validateTypeScript WITHOUT typesPath to ensure no types are loaded
  return validateTypeScript(testCode, { ...options, typesPath: undefined });
}

/**
 * Test GIR type validation WITH actual type definitions (should succeed)
 * This demonstrates that GIR imports work when proper types are available
 */
export function testGIRTypeValidationWithTypes(): ValidationResult {
  const testCode = `
    import Gtk from 'gi://Gtk?version=4.0';
    import GLib from 'gi://GLib?version=2.0';
    
    const app = new Gtk.Application();
    const window = new Gtk.Window();
    window.set_title("Test Window");
    window.set_default_size(400, 300);
    
    const button = new Gtk.Button();
    button.set_label("Click Me");
    
    const timeout = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 1000, () => {
      console.log("Timer fired");
      return GLib.SOURCE_REMOVE;
    });
  `;

  // Try to find types directory
  const possibleTypesPaths = [
    path.resolve('./@types'),
    path.resolve('../@types'),
    path.resolve('../../@types'),
  ];

  for (const typesPath of possibleTypesPaths) {
    try {
      if (fs.existsSync(typesPath)) {
        return validateGIRTypeScript(testCode, typesPath);
      }
    } catch {
      // Continue to next path
    }
  }

  // If no types found, fall back to basic validation (will fail)
  return validateTypeScript(testCode);
}

// Keep old names for backward compatibility
export const testGtkImport = testGtkImportWithoutTypes;
export const testGIRTypeValidation = testGIRTypeValidationWithTypes;

 