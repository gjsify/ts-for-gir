import { describe, it, expect } from 'vitest';
import { validateTypeScript, validateGIRTypeScriptAuto } from '@ts-for-gir/language-server';

describe('TypeScript Validation', () => {
  describe('Basic TypeScript Code', () => {
    it('should validate valid TypeScript code', () => {
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

      const result = validateTypeScript(testCode);
      expect(result.success).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should validate TypeScript with complex types', () => {
      const testCode = `
        type Status = 'loading' | 'success' | 'error';
        
        interface ApiResponse<T> {
          data: T;
          status: Status;
          timestamp: Date;
        }
        
        class DataManager<T> {
          private cache: Map<string, T> = new Map();
          
          async fetchData(id: string): Promise<ApiResponse<T>> {
            const cachedData = this.cache.get(id);
            if (cachedData) {
              return {
                data: cachedData,
                status: 'success',
                timestamp: new Date()
              };
            }
            throw new Error('Data not found');
          }
        }
        
        const manager = new DataManager<string>();
      `;

      const result = validateTypeScript(testCode);
      expect(result.success).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });

  describe('Error Detection', () => {
    it('should detect type mismatch errors', () => {
      const testCode = `const x: number = "invalid";`;
      
      const result = validateTypeScript(testCode);
      expect(result.success).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors[0]).toContain('Type \'string\' is not assignable to type \'number\'');
    });

    it('should detect undefined variable errors', () => {
      const testCode = `
        const result = undefinedVariable + 5;
      `;
      
      const result = validateTypeScript(testCode);
      expect(result.success).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors[0]).toContain('Cannot find name \'undefinedVariable\'');
    });

    it('should detect interface property errors', () => {
      const testCode = `
        interface User {
          name: string;
          age: number;
        }
        
        const user: User = {
          name: "John",
          // missing age property
        };
      `;
      
      const result = validateTypeScript(testCode);
      expect(result.success).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors[0]).toContain('Property \'age\' is missing');
    });

    it('should detect function parameter errors', () => {
      const testCode = `
        function greet(name: string): string {
          return "Hello " + name;
        }
        
        const result = greet(42); // should be string
      `;
      
      const result = validateTypeScript(testCode);
      expect(result.success).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
      expect(result.errors[0]).toContain('Argument of type \'number\' is not assignable to parameter of type \'string\'');
    });
  });

  describe('GIR Type Validation', () => {
    it('should validate GIR types with auto-discovery', () => {
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

      const result = validateGIRTypeScriptAuto(testCode);
      expect(result.success).toBe(true);
      if (!result.success) {
        console.log('GIR validation errors:', result.errors);
        console.log('GIR validation warnings:', result.warnings);
      }
    });

    it('should validate complex GIR widget hierarchies', () => {
      const testCode = `
        import Gtk from 'gi://Gtk?version=4.0';
        import Adw from 'gi://Adw?version=1';
        
        const app = new Adw.Application();
        const window = new Adw.ApplicationWindow();
        
        const headerBar = new Adw.HeaderBar();
        const toolbarView = new Adw.ToolbarView();
        const toastOverlay = new Adw.ToastOverlay();
        
        const box = new Gtk.Box();
        box.set_orientation(Gtk.Orientation.VERTICAL);
        box.set_spacing(12);
        
        const button = new Gtk.Button();
        button.set_label("Action Button");
        button.add_css_class("suggested-action");
        
        box.append(button);
        toastOverlay.set_child(box);
        toolbarView.set_content(toastOverlay);
        toolbarView.add_top_bar(headerBar);
        window.set_content(toolbarView);
        
        app.connect('activate', () => {
          window.present();
        });
      `;

      const result = validateGIRTypeScriptAuto(testCode);
      expect(result.success).toBe(true);
      if (!result.success) {
        console.log('Complex GIR validation errors:', result.errors);
        console.log('Complex GIR validation warnings:', result.warnings);
      }
    });

    it('should validate GIR event handling', () => {
      const testCode = `
        import Gtk from 'gi://Gtk?version=4.0';
        import GLib from 'gi://GLib?version=2.0';
        
        const button = new Gtk.Button();
        button.set_label("Click Me");
        
        button.connect('clicked', () => {
          console.log("Button clicked!");
        });
        
        const entry = new Gtk.Entry();
        entry.set_placeholder_text("Enter text here");
        
        entry.connect('activate', () => {
          const text = entry.get_text();
          console.log("Entry activated with text:", text);
        });
        
        const window = new Gtk.Window();
        window.connect('close-request', () => {
          console.log("Window closing");
          return false;
        });
      `;

      const result = validateGIRTypeScriptAuto(testCode);
      expect(result.success).toBe(true);
      if (!result.success) {
        console.log('GIR event handling errors:', result.errors);
        console.log('GIR event handling warnings:', result.warnings);
      }
    });
  });
}); 