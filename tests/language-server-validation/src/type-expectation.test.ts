import { describe, it, expect } from 'vitest';
import { expectIdentifierTypeAuto } from '@ts-for-gir/language-server';

describe('Type Expectation Tests', () => {
  describe('Basic Type Expectations', () => {
    it('should validate basic interface type expectations', () => {
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

      const result = expectIdentifierTypeAuto(testCode, 'user', 'User');
      expect(result.success).toBe(true);
      expect(result.matches).toBe(true);
      expect(result.actualType).toContain('User');
      expect(result.expectedType).toBe('User');
    });

    it('should validate primitive type expectations', () => {
      const testCode = `
        const stringValue = "hello world";
        const numberValue = 42;
        const booleanValue = true;
        const nullValue = null;
        const undefinedValue = undefined;
      `;

      const stringResult = expectIdentifierTypeAuto(testCode, 'stringValue', 'string');
      expect(stringResult.success).toBe(true);
      // For literal strings, the type might be the literal value, not just 'string'
      expect(stringResult.actualType).toMatch(/string|"hello world"/);

      const numberResult = expectIdentifierTypeAuto(testCode, 'numberValue', 'number');
      expect(numberResult.success).toBe(true);
      // For literal numbers, the type might be the literal value, not just 'number'
      expect(numberResult.actualType).toMatch(/number|42/);

      const booleanResult = expectIdentifierTypeAuto(testCode, 'booleanValue', 'boolean');
      expect(booleanResult.success).toBe(true);
      // For literal booleans, the type might be the literal value, not just 'boolean'
      expect(booleanResult.actualType).toMatch(/boolean|true/);
    });

    it('should validate array type expectations', () => {
      const testCode = `
        const stringArray: string[] = ["hello", "world"];
        const numberArray: number[] = [1, 2, 3, 4, 5];
        const mixedArray: (string | number)[] = ["hello", 42, "world"];
        
        interface Person {
          name: string;
          age: number;
        }
        
        const personArray: Person[] = [
          { name: "John", age: 30 },
          { name: "Jane", age: 25 }
        ];
      `;

      const stringArrayResult = expectIdentifierTypeAuto(testCode, 'stringArray', 'string[]');
      expect(stringArrayResult.success).toBe(true);
      expect(stringArrayResult.matches).toBe(true);
      expect(stringArrayResult.actualType).toContain('string[]');

      const numberArrayResult = expectIdentifierTypeAuto(testCode, 'numberArray', 'number[]');
      expect(numberArrayResult.success).toBe(true);
      expect(numberArrayResult.matches).toBe(true);
      expect(numberArrayResult.actualType).toContain('number[]');

      const personArrayResult = expectIdentifierTypeAuto(testCode, 'personArray', 'Person[]');
      expect(personArrayResult.success).toBe(true);
      expect(personArrayResult.matches).toBe(true);
      expect(personArrayResult.actualType).toContain('Person[]');
    });

    it('should validate function type expectations', () => {
      const testCode = `
        function add(a: number, b: number): number {
          return a + b;
        }
        
        const arrowFunction = (x: string, y: string): string => {
          return x + y;
        };
        
        const asyncFunction = async (id: number): Promise<string> => {
          return \`User \${id}\`;
        };
      `;

      const addResult = expectIdentifierTypeAuto(testCode, 'add', '(a: number, b: number) => number');
      expect(addResult.success).toBe(true);
      expect(addResult.matches).toBe(true);
      expect(addResult.actualType).toContain('(a: number, b: number) => number');

      const arrowResult = expectIdentifierTypeAuto(testCode, 'arrowFunction', '(x: string, y: string) => string');
      expect(arrowResult.success).toBe(true);
      expect(arrowResult.matches).toBe(true);
      expect(arrowResult.actualType).toContain('(x: string, y: string) => string');
    });

    it('should validate generic type expectations', () => {
      const testCode = `
        interface Container<T> {
          value: T;
          getValue(): T;
        }
        
        const stringContainer: Container<string> = {
          value: "hello",
          getValue() { return this.value; }
        };
        
        const numberContainer: Container<number> = {
          value: 42,
          getValue() { return this.value; }
        };
        
        class GenericClass<T> {
          constructor(public data: T) {}
        }
        
        const stringClass = new GenericClass<string>("test");
        const numberClass = new GenericClass<number>(123);
      `;

      const stringContainerResult = expectIdentifierTypeAuto(testCode, 'stringContainer', 'Container<string>');
      expect(stringContainerResult.success).toBe(true);
      expect(stringContainerResult.matches).toBe(true);
      expect(stringContainerResult.actualType).toContain('Container<string>');

      const numberContainerResult = expectIdentifierTypeAuto(testCode, 'numberContainer', 'Container<number>');
      expect(numberContainerResult.success).toBe(true);
      expect(numberContainerResult.matches).toBe(true);
      expect(numberContainerResult.actualType).toContain('Container<number>');

      const stringClassResult = expectIdentifierTypeAuto(testCode, 'stringClass', 'GenericClass<string>');
      expect(stringClassResult.success).toBe(true);
      expect(stringClassResult.matches).toBe(true);
      expect(stringClassResult.actualType).toContain('GenericClass<string>');
    });
  });

  describe('GIR Type Expectations', () => {
    it('should validate GIR widget type expectations', () => {
      const testCode = `
        import Gtk from 'gi://Gtk?version=4.0';
        
        const button = new Gtk.Button();
        const window = new Gtk.Window();
        const label = new Gtk.Label();
        const entry = new Gtk.Entry();
      `;

      const buttonResult = expectIdentifierTypeAuto(testCode, 'button', 'Button');
      expect(buttonResult.success).toBe(true);
      expect(buttonResult.matches).toBe(true);
      expect(buttonResult.actualType).toContain('Button');
      expect(buttonResult.expectedType).toBe('Button');

      const windowResult = expectIdentifierTypeAuto(testCode, 'window', 'Window');
      expect(windowResult.success).toBe(true);
      expect(windowResult.matches).toBe(true);
      expect(windowResult.actualType).toContain('Window');
      expect(windowResult.expectedType).toBe('Window');

      const labelResult = expectIdentifierTypeAuto(testCode, 'label', 'Label');
      expect(labelResult.success).toBe(true);
      expect(labelResult.matches).toBe(true);
      expect(labelResult.actualType).toContain('Label');
      expect(labelResult.expectedType).toBe('Label');
    });

    it('should validate GIR application type expectations', () => {
      const testCode = `
        import Gtk from 'gi://Gtk?version=4.0';
        import Adw from 'gi://Adw?version=1';
        
        const gtkApp = new Gtk.Application();
        const adwApp = new Adw.Application();
        const window = new Adw.ApplicationWindow();
        const headerBar = new Adw.HeaderBar();
      `;

      const gtkAppResult = expectIdentifierTypeAuto(testCode, 'gtkApp', 'Application');
      expect(gtkAppResult.success).toBe(true);
      expect(gtkAppResult.matches).toBe(true);
      expect(gtkAppResult.actualType).toContain('Application');

      const adwAppResult = expectIdentifierTypeAuto(testCode, 'adwApp', 'Application');
      expect(adwAppResult.success).toBe(true);
      expect(adwAppResult.matches).toBe(true);
      expect(adwAppResult.actualType).toContain('Application');

      const windowResult = expectIdentifierTypeAuto(testCode, 'window', 'ApplicationWindow');
      expect(windowResult.success).toBe(true);
      expect(windowResult.matches).toBe(true);
      expect(windowResult.actualType).toContain('ApplicationWindow');
    });

    it('should validate GIR container type expectations', () => {
      const testCode = `
        import Gtk from 'gi://Gtk?version=4.0';
        
        const box = new Gtk.Box();
        const grid = new Gtk.Grid();
        const stack = new Gtk.Stack();
        const scrolledWindow = new Gtk.ScrolledWindow();
        const viewport = new Gtk.Viewport();
      `;

      const boxResult = expectIdentifierTypeAuto(testCode, 'box', 'Box');
      expect(boxResult.success).toBe(true);
      expect(boxResult.matches).toBe(true);
      expect(boxResult.actualType).toContain('Box');

      const gridResult = expectIdentifierTypeAuto(testCode, 'grid', 'Grid');
      expect(gridResult.success).toBe(true);
      expect(gridResult.matches).toBe(true);
      expect(gridResult.actualType).toContain('Grid');

      const stackResult = expectIdentifierTypeAuto(testCode, 'stack', 'Stack');
      expect(stackResult.success).toBe(true);
      expect(stackResult.matches).toBe(true);
      expect(stackResult.actualType).toContain('Stack');
    });

    it('should validate GIR model type expectations', () => {
      const testCode = `
        import Gtk from 'gi://Gtk?version=4.0';
        import Gio from 'gi://Gio?version=2.0';
        
        const listStore = new Gio.ListStore();
        const treeStore = new Gtk.TreeStore();
        const listModel = Gio.ListModel;
        
        const selectionModel = new Gtk.SingleSelection();
        const multiSelection = new Gtk.MultiSelection();
      `;

      const listStoreResult = expectIdentifierTypeAuto(testCode, 'listStore', 'ListStore');
      expect(listStoreResult.success).toBe(true);
      // ListStore might be qualified with namespace
      expect(listStoreResult.actualType).toMatch(/ListStore|Gio\.ListStore/);

      const selectionResult = expectIdentifierTypeAuto(testCode, 'selectionModel', 'SingleSelection');
      expect(selectionResult.success).toBe(true);
      // SingleSelection might be qualified with namespace
      expect(selectionResult.actualType).toMatch(/SingleSelection|Gtk\.SingleSelection/);
    });
  });

  describe('Type Expectation Failures', () => {
    it('should properly handle type expectation failures', () => {
      const testCode = `
        const numberValue: number = 42;
        const stringValue: string = "hello";
        const booleanValue: boolean = true;
      `;

      // Expect number to be string (should fail)
      const numberResult = expectIdentifierTypeAuto(testCode, 'numberValue', 'string');
      expect(numberResult.success).toBe(true); // The test should run successfully
      expect(numberResult.matches).toBe(false); // But the types should not match
      expect(numberResult.actualType).toContain('number');
      expect(numberResult.expectedType).toBe('string');

      // Expect string to be number (should fail)
      const stringResult = expectIdentifierTypeAuto(testCode, 'stringValue', 'number');
      expect(stringResult.success).toBe(true);
      expect(stringResult.matches).toBe(false);
      expect(stringResult.actualType).toContain('string');
      expect(stringResult.expectedType).toBe('number');

      // Expect boolean to be object (should fail)
      const booleanResult = expectIdentifierTypeAuto(testCode, 'booleanValue', 'object');
      expect(booleanResult.success).toBe(true);
      expect(booleanResult.matches).toBe(false);
      expect(booleanResult.actualType).toContain('boolean');
      expect(booleanResult.expectedType).toBe('object');
    });

    it('should handle non-existent identifier failures', () => {
      const testCode = `
        const existingVariable = "test";
      `;

      // Expect non-existent identifier (should fail)
      const result = expectIdentifierTypeAuto(testCode, 'nonExistentVariable', 'string');
      expect(result.success).toBe(false);
      expect(result.error).toContain('not found');
    });

    it('should handle complex type expectation failures', () => {
      const testCode = `
        interface User {
          name: string;
          age: number;
        }
        
        interface Product {
          title: string;
          price: number;
        }
        
        const user: User = { name: "John", age: 30 };
        const product: Product = { title: "Widget", price: 9.99 };
      `;

      // Expect User to be Product (should fail)
      const userResult = expectIdentifierTypeAuto(testCode, 'user', 'Product');
      expect(userResult.success).toBe(true);
      expect(userResult.matches).toBe(false);
      expect(userResult.actualType).toContain('User');
      expect(userResult.expectedType).toBe('Product');

      // Expect Product to be User (should fail)
      const productResult = expectIdentifierTypeAuto(testCode, 'product', 'User');
      expect(productResult.success).toBe(true);
      expect(productResult.matches).toBe(false);
      expect(productResult.actualType).toContain('Product');
      expect(productResult.expectedType).toBe('User');
    });
  });

  describe('Union and Intersection Types', () => {
    it('should validate union type expectations', () => {
      const testCode = `
        type StringOrNumber = string | number;
        type StatusType = 'loading' | 'success' | 'error';
        
        const value: StringOrNumber = "hello";
        const status: StatusType = 'loading';
        
        const flexibleValue: string | number | boolean = 42;
      `;

      const valueResult = expectIdentifierTypeAuto(testCode, 'value', 'StringOrNumber');
      expect(valueResult.success).toBe(true);
      expect(valueResult.matches).toBe(true);
      expect(valueResult.actualType).toContain('StringOrNumber');

      const statusResult = expectIdentifierTypeAuto(testCode, 'status', 'StatusType');
      expect(statusResult.success).toBe(true);
      expect(statusResult.matches).toBe(true);
      expect(statusResult.actualType).toContain('StatusType');
    });

    it('should validate intersection type expectations', () => {
      const testCode = `
        interface Timestamped {
          timestamp: Date;
        }
        
        interface Named {
          name: string;
        }
        
        type TimestampedNamed = Timestamped & Named;
        
        const item: TimestampedNamed = {
          name: "Test Item",
          timestamp: new Date()
        };
      `;

      const result = expectIdentifierTypeAuto(testCode, 'item', 'TimestampedNamed');
      expect(result.success).toBe(true);
      expect(result.matches).toBe(true);
      expect(result.actualType).toContain('TimestampedNamed');
    });
  });
}); 