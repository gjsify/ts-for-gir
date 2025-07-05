import { validateTypeScript, type ValidationOptions, type ValidationResult } from '@ts-for-gir/language-server';

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
 * Test GTK import validation (for future GIR type resolution)
 */
export function testGtkImport(options: ValidationOptions = {}): ValidationResult {
  const testCode = `
    import Gtk from 'gi://Gtk?version=4.0';
    
    const app = new Gtk.Application();
    const window = new Gtk.Window();
    window.show();
  `;

  return validateTypeScript(testCode, options);
}

 