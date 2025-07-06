import { describe, it, expect } from 'vitest';
import { getIdentifierTypeAuto } from '@ts-for-gir/language-server';

describe('Hover Functionality', () => {
  describe('Basic TypeScript Hover', () => {
    it('should provide hover information for interface types', () => {
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

      const result = getIdentifierTypeAuto(testCode, 'obj');
      expect(result.success).toBe(true);
      expect(result.type).toBeDefined();
      expect(result.type).toContain('TestInterface');
    });

    it('should provide hover information for function types', () => {
      const testCode = `
        function calculateSum(a: number, b: number): number {
          return a + b;
        }
        
        const myFunction = calculateSum;
        const result = myFunction(5, 3);
      `;

      const result = getIdentifierTypeAuto(testCode, 'myFunction');
      expect(result.success).toBe(true);
      expect(result.type).toBeDefined();
      expect(result.type).toContain('(a: number, b: number) => number');
    });

    it('should provide hover information for generic types', () => {
      const testCode = `
        interface Container<T> {
          value: T;
          setValue(newValue: T): void;
        }
        
        const stringContainer: Container<string> = {
          value: "hello",
          setValue(newValue: string) {
            this.value = newValue;
          }
        };
        
        const numberContainer: Container<number> = {
          value: 42,
          setValue(newValue: number) {
            this.value = newValue;
          }
        };
      `;

      const stringResult = getIdentifierTypeAuto(testCode, 'stringContainer');
      expect(stringResult.success).toBe(true);
      expect(stringResult.type).toBeDefined();
      expect(stringResult.type).toContain('Container<string>');

      const numberResult = getIdentifierTypeAuto(testCode, 'numberContainer');
      expect(numberResult.success).toBe(true);
      expect(numberResult.type).toBeDefined();
      expect(numberResult.type).toContain('Container<number>');
    });

    it('should provide hover information for class instances', () => {
      const testCode = `
        class UserManager {
          private users: string[] = [];
          
          addUser(name: string): void {
            this.users.push(name);
          }
          
          getUsers(): string[] {
            return [...this.users];
          }
          
          getUserCount(): number {
            return this.users.length;
          }
        }
        
        const manager = new UserManager();
        manager.addUser("John");
      `;

      const result = getIdentifierTypeAuto(testCode, 'manager');
      expect(result.success).toBe(true);
      expect(result.type).toBeDefined();
      expect(result.type).toContain('UserManager');
    });
  });

  describe('GIR Type Hover', () => {
    it('should provide hover information for GIR widget types', () => {
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

      const buttonResult = getIdentifierTypeAuto(testCode, 'button');
      expect(buttonResult.success).toBe(true);
      expect(buttonResult.type).toBeDefined();
      expect(buttonResult.type).toContain('Button');

      const windowResult = getIdentifierTypeAuto(testCode, 'window');
      expect(windowResult.success).toBe(true);
      expect(windowResult.type).toBeDefined();
      expect(windowResult.type).toContain('Window');

      const labelResult = getIdentifierTypeAuto(testCode, 'label');
      expect(labelResult.success).toBe(true);
      expect(labelResult.type).toBeDefined();
      expect(labelResult.type).toContain('Label');
    });

    it('should provide hover information for GIR application types', () => {
      const testCode = `
        import Gtk from 'gi://Gtk?version=4.0';
        import Adw from 'gi://Adw?version=1';
        
        const gtkApp = new Gtk.Application();
        const adwApp = new Adw.Application();
        
        const window = new Adw.ApplicationWindow();
        const headerBar = new Adw.HeaderBar();
      `;

      const gtkAppResult = getIdentifierTypeAuto(testCode, 'gtkApp');
      expect(gtkAppResult.success).toBe(true);
      expect(gtkAppResult.type).toBeDefined();
      expect(gtkAppResult.type).toContain('Application');

      const adwAppResult = getIdentifierTypeAuto(testCode, 'adwApp');
      expect(adwAppResult.success).toBe(true);
      expect(adwAppResult.type).toBeDefined();
      expect(adwAppResult.type).toContain('Application');

      const windowResult = getIdentifierTypeAuto(testCode, 'window');
      expect(windowResult.success).toBe(true);
      expect(windowResult.type).toBeDefined();
      expect(windowResult.type).toContain('ApplicationWindow');
    });

    it('should provide hover information for GIR container types', () => {
      const testCode = `
        import Gtk from 'gi://Gtk?version=4.0';
        
        const box = new Gtk.Box();
        const grid = new Gtk.Grid();
        const stack = new Gtk.Stack();
        const stackSwitcher = new Gtk.StackSwitcher();
        
        box.set_orientation(Gtk.Orientation.VERTICAL);
        box.set_spacing(12);
        
        grid.set_row_spacing(6);
        grid.set_column_spacing(12);
        
        stack.add_titled(box, 'page1', 'Page 1');
        stackSwitcher.set_stack(stack);
      `;

      const boxResult = getIdentifierTypeAuto(testCode, 'box');
      expect(boxResult.success).toBe(true);
      expect(boxResult.type).toBeDefined();
      expect(boxResult.type).toContain('Box');

      const gridResult = getIdentifierTypeAuto(testCode, 'grid');
      expect(gridResult.success).toBe(true);
      expect(gridResult.type).toBeDefined();
      expect(gridResult.type).toContain('Grid');

      const stackResult = getIdentifierTypeAuto(testCode, 'stack');
      expect(stackResult.success).toBe(true);
      expect(stackResult.type).toBeDefined();
      expect(stackResult.type).toContain('Stack');
    });

    it('should provide hover information for GIR callback types', () => {
      const testCode = `
        import Gtk from 'gi://Gtk?version=4.0';
        import GLib from 'gi://GLib?version=2.0';
        
        const button = new Gtk.Button();
        
        const clickHandler = () => {
          console.log("Button clicked!");
        };
        
        const timeoutCallback = () => {
          console.log("Timeout fired");
          return GLib.SOURCE_REMOVE;
        };
        
        button.connect('clicked', clickHandler);
        const timeoutId = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 1000, timeoutCallback);
      `;

      const handlerResult = getIdentifierTypeAuto(testCode, 'clickHandler');
      expect(handlerResult.success).toBe(true);
      expect(handlerResult.type).toBeDefined();
      expect(handlerResult.type).toContain('() => void');

      const callbackResult = getIdentifierTypeAuto(testCode, 'timeoutCallback');
      expect(callbackResult.success).toBe(true);
      expect(callbackResult.type).toBeDefined();
      expect(callbackResult.type).toMatch(/\(\) => (number|boolean)/);
    });
  });

  describe('Complex Type Hover', () => {
    it('should provide hover information for union types', () => {
      const testCode = `
        type Status = 'loading' | 'success' | 'error';
        type Value = string | number | boolean;
        
        let currentStatus: Status = 'loading';
        let dynamicValue: Value = "initial";
        
        const statusChecker = (status: Status) => {
          return status === 'success';
        };
      `;

      const statusResult = getIdentifierTypeAuto(testCode, 'currentStatus');
      expect(statusResult.success).toBe(true);
      expect(statusResult.type).toBeDefined();
      expect(statusResult.type).toMatch(/Status|"loading"|"success"|"error"/);

      const valueResult = getIdentifierTypeAuto(testCode, 'dynamicValue');
      expect(valueResult.success).toBe(true);
      expect(valueResult.type).toBeDefined();
      expect(valueResult.type).toMatch(/Value|string|number|boolean/);
    });

    it('should provide hover information for mapped types', () => {
      const testCode = `
        interface User {
          id: number;
          name: string;
          email: string;
        }
        
        type PartialUser = Partial<User>;
        type UserKeys = keyof User;
        type UserValues = User[UserKeys];
        
        const partialUser: PartialUser = { name: "John" };
        const userKey: UserKeys = "email";
        const userValue: UserValues = "test@example.com";
      `;

      const partialResult = getIdentifierTypeAuto(testCode, 'partialUser');
      expect(partialResult.success).toBe(true);
      expect(partialResult.type).toBeDefined();
      expect(partialResult.type).toMatch(/Partial<User>|PartialUser/);

      const keyResult = getIdentifierTypeAuto(testCode, 'userKey');
      expect(keyResult.success).toBe(true);
      expect(keyResult.type).toBeDefined();
      expect(keyResult.type).toMatch(/UserKeys|keyof User|"id"|"name"|"email"/);
    });
  });
}); 