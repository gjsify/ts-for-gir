import { validateGIRTypeScriptAuto, validateTypeScript, getIdentifierTypeAuto, expectIdentifierTypeAuto, type ValidationOptions, type ValidationResult, type HoverResult, type TypeExpectationResult } from '@ts-for-gir/language-server';

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
 * Test GIR type validation with automatic type discovery
 * This demonstrates that GIR imports work when proper types are available
 */
export function testGIRTypeValidation(): ValidationResult {
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

  return validateGIRTypeScriptAuto(testCode);
}

/**
 * Test error detection with intentionally invalid TypeScript
 */
export function testErrorDetection(): ValidationResult {
  const testCode = `const x: number = "invalid";`;
  return validateTypeScript(testCode);
}

/**
 * Test hover functionality - check if we can get type information for GIR objects
 */
export function testHoverFunctionality(): HoverResult {
  const testCode = `
    import Gtk from 'gi://Gtk?version=4.0';
    import GLib from 'gi://GLib?version=2.0';
    
    const app = new Gtk.Application();
    const window = new Gtk.Window();
    const button = new Gtk.Button();
    const label = new Gtk.Label();
    
    window.set_title("Test Window");
    button.set_label("Click Me");
    label.set_text("Hello World");
  `;

  // Test type information for different GIR objects
  return getIdentifierTypeAuto(testCode, 'button');
}

/**
 * Test hover functionality with basic TypeScript (no GIR)
 */
export function testBasicHover(): HoverResult {
  const testCode = `
    interface TestInterface {
      name: string;
      value: number;
    }
    
    const obj: TestInterface = {
      name: "test",
      value: 42
    };
    
    const result = obj.name;
  `;

  return getIdentifierTypeAuto(testCode, 'obj');
}

/**
 * Test type expectation - validate that GIR objects have expected types
 */
export function testGIRTypeExpectation(): TypeExpectationResult {
  const testCode = `
    import Gtk from 'gi://Gtk?version=4.0';
    
    const button = new Gtk.Button();
    const window = new Gtk.Window();
    const label = new Gtk.Label();
  `;

  // Expect button to be of type Gtk.Button
  return expectIdentifierTypeAuto(testCode, 'button', 'Button');
}

/**
 * Test type expectation with basic TypeScript
 */
export function testBasicTypeExpectation(): TypeExpectationResult {
  const testCode = `
    interface User {
      name: string;
      age: number;
    }
    
    const user: User = {
      name: "John",
      age: 30
    };
    
    const userName = user.name;
  `;

  // Expect user to be of type User
  return expectIdentifierTypeAuto(testCode, 'user', 'User');
}

/**
 * Test type expectation failure - expecting wrong type
 */
export function testTypeExpectationFailure(): TypeExpectationResult {
  const testCode = `
    const numberValue: number = 42;
  `;

  // Expect number to be string (should fail)
  return expectIdentifierTypeAuto(testCode, 'numberValue', 'string');
}

// Keep old names for backward compatibility
export const testGtkImport = testGIRTypeValidation;

 