/**
 * GVariant Type Validation Tests
 * 
 * Tests for validating TypeScript type generation for GLib.Variant methods.
 * Focus areas:
 * - Tuple parsing
 * - Type inference for unpack/deepUnpack/recursiveUnpack methods
 */

import { describe, it, expect } from 'vitest';
import {
  validateGIRTypeScriptAuto,
  expectIdentifierTypeAuto,
} from '@ts-for-gir/language-server';

// Test helpers using Vitest expectations for clearer failures
function expectCompilation(code: string) {
  const result = validateGIRTypeScriptAuto(code);
  if (!result.success) {
    // Show first few diagnostics to aid debugging in failures
    // eslint-disable-next-line no-console
    console.error('TypeScript compile errors (first 5):', result.errors.slice(0, 5));
  }
  expect(result.success).toBe(true);
  return result;
}

function expectType(code: string, identifier: string, pattern: RegExp) {
  const res = expectIdentifierTypeAuto(code, identifier, pattern);
  expect(res.success).toBe(true);
  expect(res.actualType).toBeDefined();
  expect(String(res.actualType)).toMatch(pattern);
  return res;
}

describe('GVariant Type Validation', () => {
  
  describe('Tuple Parsing and Inference', () => {
    it('should correctly parse integer tuples', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        // Tuple parsing inference
        type Infer<T extends string> = ReturnType<GLib.Variant<T>["unpack"]>
        
        // Should compile
        type IntTuple = Infer<"(ii)">; // Should be [Variant<any>, Variant<any>]
        
        // Test with actual usage based on GJS tests
        const intTuple = new GLib.Variant("(ii)", [42, 100]);
        
        // Based on GJS tests: unpack() should return tuple of Variant objects
        // For tuples like (ii), this should be [Variant<any>, Variant<any>]
        const tupleUnpack = intTuple.unpack();
        
        // Test deepUnpack as well - should unpack one level deep
        const tupleDeepUnpack = intTuple.deepUnpack();
      `;

      const result = validateGIRTypeScriptAuto(testCode);
      
      if (!result.success) {
        console.log('Tuple parsing issue:', result.errors);
      }
      
      // CORRECTION based on runtime analysis: unpack() returns [Variant, Variant], deepUnpack() returns [number, number]
      const tupleUnpackType = expectIdentifierTypeAuto(testCode, 'tupleUnpack', /\[Variant.*,\s*Variant.*\]|Variant.*\[\]/);
      const tupleDeepUnpackType = expectIdentifierTypeAuto(testCode, 'tupleDeepUnpack', /\[number,\s*number\]|number.*\[\]/);
      
      // Log current state for debugging
      console.log('Tuple unpack type (should be [Variant, Variant]):', tupleUnpackType.actualType);
      console.log('Tuple deepUnpack type (should be [number, number]):', tupleDeepUnpackType.actualType);
      
      // The unpack() method should return tuple of Variants, deepUnpack() should return actual values
      expect(tupleUnpackType.success).toBe(true);
      expect(tupleDeepUnpackType.success).toBe(true);
      expect(tupleUnpackType.matches).toBe(true);
    });

    it('should handle complex tuple types', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        // Based on GJS tests - struct variant test shows tuples work
        // GJS test: new GLib.Variant('(sogvau)', [...]) works fine
        const simpleTuple = new GLib.Variant("(si)", ["hello", 42]);
        const boolTuple = new GLib.Variant("(sib)", ["test", 123, true]);
        const doubleTuple = new GLib.Variant("(dd)", [3.14, 2.71]);
        
        // Test unpacking - unpack() returns tuple of Variants
        const simple = simpleTuple.unpack();        // Should be [Variant<any>, Variant<any>]
        const withBool = boolTuple.unpack();        // Should be [Variant<any>, Variant<any>, Variant<any>]
        const doubles = doubleTuple.unpack();       // Should be [Variant<any>, Variant<any>]
        
        // Test deepUnpack as well
        const simpleDeep = simpleTuple.deepUnpack();
        const boolDeep = boolTuple.deepUnpack();
      `;

      expectCompilation(testCode);
      // CORRECTION: unpack() returns tuple of Variants, deepUnpack() returns actual values
      expectType(testCode, 'simple', /\[Variant.*,\s*Variant.*\]/);
      expectType(testCode, 'withBool', /\[Variant.*,\s*Variant.*,\s*Variant.*\]/);
      expectType(testCode, 'doubles', /\[Variant.*,\s*Variant.*\]/);
      // deepUnpack() should return actual values
      expectType(testCode, 'simpleDeep', /\[string,\s*number\]|(string|number).*\[\]/);
      expectType(testCode, 'boolDeep', /\[string,\s*number,\s*boolean\]|(string|number|boolean).*\[\]/);
    });
  });

  describe('Unpacking Method Type Inference', () => {
    it('should differentiate between unpack, deepUnpack, and recursiveUnpack', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        // Based on GJS tests: string array unpacking
        const arrayVariant = new GLib.Variant("as", ["one", "two", "three"]);
        
        // From GJS tests, unpack() returns Variant[], deepUnpack/recursiveUnpack return string[]
        const shallowUnpack = arrayVariant.unpack();         // Should be Variant[] (shallow)
        const deepUnpack = arrayVariant.deepUnpack();        // Should be string[]
        const recursiveUnpack = arrayVariant.recursiveUnpack(); // Should be string[]
        
        // Test dictionary variant - this is where differences matter
        // GJS test shows: deepUnpack() preserves Variants in a{sv}
        const dictVariant = new GLib.Variant("a{sv}", {
          key1: new GLib.Variant("s", "value1"),
          key2: new GLib.Variant("i", 123)
        });
        
        const dictShallow = dictVariant.unpack();     // Should be {[key: string]: Variant}
        const dictDeep = dictVariant.deepUnpack();    // Should be {[key: string]: Variant} (GJS preserves variants!)
        const dictRecursive = dictVariant.recursiveUnpack(); // Should be {[key: string]: unknown} (GJS unpacks all)
      `;

      expectCompilation(testCode);
      // Arrays
      expectType(testCode, 'shallowUnpack', /Variant.*\[\]/);
      expectType(testCode, 'deepUnpack', /string.*\[\]|Array.*string/);
      expectType(testCode, 'recursiveUnpack', /string.*\[\]|Array.*string/);
      // Dictionary types - preserve index signature expectation
      expectType(testCode, 'dictShallow', /\{\s*\[.*\]:\s*Variant/);
      expectType(testCode, 'dictDeep', /\{\s*\[.*\]:\s*Variant/);
      const dictRecursiveType = expectType(testCode, 'dictRecursive', /\{\s*\[.*\]:\s*unknown/);
      // recursiveUnpack should not contain Variant types (GJS test confirms this)
      expect(String(dictRecursiveType.actualType)).not.toMatch(/Variant(?!.*Error)/);
    });

    it('should handle nested variant structures', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        // Complex nested structure
        const nested = new GLib.Variant("a{sv}", {
          metadata: new GLib.Variant("a{sv}", {
            title: new GLib.Variant("s", "Test"),
            count: new GLib.Variant("i", 42)
          }),
          items: new GLib.Variant("as", ["item1", "item2"])
        });
        
        // Test different unpacking levels
        const level1 = nested.unpack();
        const level2 = nested.deepUnpack();
        const fullUnpack = nested.recursiveUnpack();
      `;

      expectCompilation(testCode);
      expectType(testCode, 'level1', /\{\s*\[.*\]:\s*Variant/);
      expectType(testCode, 'level2', /\{\s*\[.*\]:\s*Variant/);
      const fullType = expectType(testCode, 'fullUnpack', /\{\s*\[.*\]:\s*unknown/);
      // recursiveUnpack should not contain Variant types (fully unpacked)
      expect(String(fullType.actualType)).not.toMatch(/Variant(?!.*Error)/);
    });

    it('should handle struct variants like GJS tests', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        // Based on GJS test: constructs a struct variant
        // GJS test line 21: new GLib.Variant('(sogvau)', [...])
        const structVariant = new GLib.Variant('(sogvau)', [
          'a string',
          '/a/object/path', 
          'asig',
          new GLib.Variant('s', 'variant'),
          [7, 3]
        ]);
        
        // GJS test shows deepUnpack() behavior
        const unpacked = structVariant.deepUnpack();
        
        // GJS test shows array access works
        const firstElement = unpacked[0];   // Should be string
        const thirdElement = unpacked[2];   // Should be string  
        const fourthElement = unpacked[3];  // Should be Variant (GJS test: instanceof GLib.Variant)
        const fifthElement = unpacked[4];   // Should be array
      `;

      expectCompilation(testCode);
      // Test struct unpacking based on GJS test expectations - strict type checking
      expectType(testCode, 'unpacked', /\[.*\]|Array/);
      expectType(testCode, 'firstElement', /string/);
      expectType(testCode, 'thirdElement', /string/);
      expectType(testCode, 'fourthElement', /Variant/);
      expectType(testCode, 'fifthElement', /\[\]|Array|number.*\[\]/);
    });
  });

  describe('Compile-time ReturnType inference', () => {
    it('should infer correct ReturnType for common patterns and match expected types', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';

        // Tuple ReturnType inference
        type IntTupleType = ReturnType<GLib.Variant<"(ii)">["unpack"]>;
        type StringIntTupleType = ReturnType<GLib.Variant<"(si)">["deepUnpack"]>;

        // Use declared values to allow type inspection
        declare const intTupleValue: IntTupleType;
        declare const stringIntTupleValue: StringIntTupleType;

        // Array ReturnType inference
        type StringArrayUnpack = ReturnType<GLib.Variant<"as">["unpack"]>;
        type StringArrayDeep = ReturnType<GLib.Variant<"as">["deepUnpack"]>;

        declare const stringArrayUnpackVal: StringArrayUnpack;
        declare const stringArrayDeepVal: StringArrayDeep;

        // Dictionary ReturnType inference
        type DictUnpack = ReturnType<GLib.Variant<"a{sv}">["unpack"]>;
        type DictDeep = ReturnType<GLib.Variant<"a{sv}">["deepUnpack"]>;
        type DictRecursive = ReturnType<GLib.Variant<"a{sv}">["recursiveUnpack"]>;

        declare const dictUnpackVal: DictUnpack;
        declare const dictDeepVal: DictDeep;
        declare const dictRecursiveVal: DictRecursive;

        // Simple types
        type BooleanUnpack = ReturnType<GLib.Variant<"b">["unpack"]>;
        type StringDeep = ReturnType<GLib.Variant<"s">["deepUnpack"]>;

        declare const booleanUnpackVal: BooleanUnpack;
        declare const stringDeepVal: StringDeep;
      `;

      expectCompilation(testCode);
      // Verify expected types (see examples/glib-2-variant/main.ts expectations)
      // Tuples
      expectType(testCode, 'intTupleValue', /\[Variant.*,\s*Variant.*\]/);
      expectType(testCode, 'stringIntTupleValue', /\[string,\s*number\]|(string|number).*\[\]/);
      // Arrays
      expectType(testCode, 'stringArrayUnpackVal', /Variant.*\[\]/);
      expectType(testCode, 'stringArrayDeepVal', /string.*\[\]|Array.*string/);
      // Dictionaries
      expectType(testCode, 'dictUnpackVal', /\{\s*\[.*\]:\s*Variant/);
      expectType(testCode, 'dictDeepVal', /\{\s*\[.*\]:\s*Variant/);
      expectType(testCode, 'dictRecursiveVal', /\{\s*\[.*\]:\s*unknown/);
      // Simple
      expectType(testCode, 'booleanUnpackVal', /boolean/);
      expectType(testCode, 'stringDeepVal', /string/);
    });
  });

  describe('Generic parameter override (Advanced Variant Types enabled)', () => {
    it('should allow explicit generic parameters to override inferred types (also works without Advanced Variant Types)', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        // Advanced Variant Types are enabled in these tests.
        // We still validate that explicit generic parameters can override inference,
        // which is also how one would work without Advanced Variant Types enabled.
        const dict = new GLib.Variant("a{sv}", {
          name: new GLib.Variant("s", "Test"),
          value: new GLib.Variant("i", 42)
        });
        
        // Explicit generic parameter to force deepUnpack() return type
        const unpacked = dict.deepUnpack<{ [key: string]: any }>();
        
        // Without explicit type, deepUnpack() preserves Variant values by default
        // when Advanced Variant Types are enabled
        const unpackedNoType = dict.deepUnpack();
      `;

      expectCompilation(testCode);
      // Test type expectations with and without explicit type parameters - strict checking
      expectType(testCode, 'unpacked', /\{\s*\[.*\]:\s*any/);
      expectType(testCode, 'unpackedNoType', /\{\s*\[.*\]:\s*Variant/);
    });
  });

  describe('Simple Type Validation', () => {
    it('should handle simple variant types correctly', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        // Simple types - all unpacking methods should return the same result
        const boolVariant = new GLib.Variant("b", true);
        const stringVariant = new GLib.Variant("s", "hello");
        const numberVariant = new GLib.Variant("i", 42);
        
        // All unpacking methods return the same for simple types
        const boolUnpack = boolVariant.unpack();
        const boolDeep = boolVariant.deepUnpack();
        const boolRecursive = boolVariant.recursiveUnpack();
        
        const stringUnpack = stringVariant.unpack();
        const stringDeep = stringVariant.deepUnpack();
        const stringRecursive = stringVariant.recursiveUnpack();
        
        const numberUnpack = numberVariant.unpack();
        const numberDeep = numberVariant.deepUnpack();
        const numberRecursive = numberVariant.recursiveUnpack();
      `;

      expectCompilation(testCode);
      // boolean
      expectType(testCode, 'boolUnpack', /boolean/);
      expectType(testCode, 'boolDeep', /boolean/);
      expectType(testCode, 'boolRecursive', /boolean/);
      // string
      expectType(testCode, 'stringUnpack', /string/);
      expectType(testCode, 'stringDeep', /string/);
      expectType(testCode, 'stringRecursive', /string/);
      // number
      expectType(testCode, 'numberUnpack', /number/);
      expectType(testCode, 'numberDeep', /number/);
      expectType(testCode, 'numberRecursive', /number/);
    });
  });

  describe('Real-world Usage Patterns', () => {
    it('should validate DBus-style variant usage', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        // Common DBus pattern
        const dbusMessage = new GLib.Variant("(sa{sv})", [
          "org.example.Service",
          {
            method: new GLib.Variant("s", "GetStatus"),
            args: new GLib.Variant("as", ["arg1", "arg2"]),
            timeout: new GLib.Variant("i", 5000)
          }
        ]);
        
        // Unpack for processing
        const [service, params] = dbusMessage.deepUnpack();
        
        // Access parameters without generics → unknown
        const methodA = params.method.deepUnpack();
        // With generics → string
        const methodB = params.method.deepUnpack<string>();
      `;

      const result = expectCompilation(testCode);
      // Test type expectations for DBus patterns - strict checking
      expectType(testCode, 'service', /string/);
      expectType(testCode, 'params', /\{\s*\[.*\]:\s*Variant/);
      // For a{sv}, values are Variants with unknown contained types at compile time.
      // Therefore, deepUnpack() on params.method yields unknown.
      expectType(testCode, 'methodA', /(unknown)/);
      expectType(testCode, 'methodB', /(string)/);
      // Compilation should succeed
      expect(result.success).toBe(true);
    });
  });

  describe('GVariant nesting depth (type-level)', () => {
    it('should infer nested arrays within reasonable depth', () => {
      // 12-level nested array of strings: 'aaaaaaaaaaaa' + 's'
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        // Rationale: Constructor value must match $ParseDeepVariant<'aaaaaaaaaaaas'> (12-level nested string array)
        const v = new GLib.Variant('aaaaaaaaaaaas', [[[[[[[[[[[['x']]]]]]]]]]]]);
        const d = v.deepUnpack();
      `;

      expectCompilation(testCode);
      // Should be a 12-level nested array of strings
      expectType(testCode, 'd', /string(\[\]){12}/);
    });
  });
  
  describe('Additional semantics from gvariant-types', () => {
    it('handles byte arrays (ay): constructor types and unpacking results', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        const fromString = new GLib.Variant('ay', 'abc');
        const fromBytes = new GLib.Variant('ay', new Uint8Array([1, 2, 3]));
        
        const u1 = fromString.unpack();
        const u2 = fromString.deepUnpack();
        const u3 = fromString.recursiveUnpack();
      `;
      expectCompilation(testCode);
      expectType(testCode, 'u1', /Uint8Array/);
      expectType(testCode, 'u2', /Uint8Array/);
      expectType(testCode, 'u3', /Uint8Array/);
    });

    it('handles Maybe types (mT): nullability across unpack methods for simple and container types', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        const maybeStringA = new GLib.Variant('ms', 'hello');
        const maybeStringB = new GLib.Variant('ms', null);
        
        const mu1 = maybeStringA.unpack();
        const md1 = maybeStringA.deepUnpack();
        const mr1 = maybeStringA.recursiveUnpack();
        
        const maybeArray = new GLib.Variant('mas', ['a', 'b']);
        const mau = maybeArray.deepUnpack();
      `;
      expectCompilation(testCode);
      // simple maybe
      expectType(testCode, 'mu1', /string\s*\|\s*null|null\s*\|\s*string/);
      expectType(testCode, 'md1', /string\s*\|\s*null|null\s*\|\s*string/);
      expectType(testCode, 'mr1', /string\s*\|\s*null|null\s*\|\s*string/);
      // container maybe (array of strings)
      expectType(testCode, 'mau', /(string\[\])\s*\|\s*null|null\s*\|\s*(string\[\])/);
    });

    it('handles uniform dictionaries (a{ss}, a{si}, a{sb})', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        const dss = new GLib.Variant('a{ss}', { a: 'x', b: 'y' });
        const dsi = new GLib.Variant('a{si}', { a: 1, b: 2 });
        const dsb = new GLib.Variant('a{sb}', { a: true, b: false });
        
        const s1 = dss.unpack();
        const s2 = dsi.unpack();
        const s3 = dsb.unpack();
        
        const dd1 = dss.deepUnpack();
        const dd2 = dsi.deepUnpack();
        const dd3 = dsb.deepUnpack();
        
        const dr1 = dss.recursiveUnpack();
        const dr2 = dsi.recursiveUnpack();
        const dr3 = dsb.recursiveUnpack();
      `;
      expectCompilation(testCode);
      // shallow keeps Variant values
      expectType(testCode, 's1', /\{\s*\[.*\]:\s*Variant/);
      expectType(testCode, 's2', /\{\s*\[.*\]:\s*Variant/);
      expectType(testCode, 's3', /\{\s*\[.*\]:\s*Variant/);
      // deep infers uniform native value types
      expectType(testCode, 'dd1', /\{\s*\[.*\]:\s*string/);
      expectType(testCode, 'dd2', /\{\s*\[.*\]:\s*number/);
      expectType(testCode, 'dd3', /\{\s*\[.*\]:\s*boolean/);
      // recursive matches deep for uniform dicts
      expectType(testCode, 'dr1', /\{\s*\[.*\]:\s*string/);
      expectType(testCode, 'dr2', /\{\s*\[.*\]:\s*number/);
      expectType(testCode, 'dr3', /\{\s*\[.*\]:\s*boolean/);
    });

    it('handles Variant type (v) and arrays of variants (av)', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        const v = new GLib.Variant('v', new GLib.Variant('s', 'x'));
        const vu = v.unpack();
        const vd = v.deepUnpack();
        const vr = v.recursiveUnpack();
        
        const av = new GLib.Variant('av', [new GLib.Variant('s', 'y')]);
        const avu = av.unpack();
        const avd = av.deepUnpack();
        const avr = av.recursiveUnpack();
      `;
      expectCompilation(testCode);
      // scalar v
      expectType(testCode, 'vu', /Variant/);
      expectType(testCode, 'vd', /Variant/);
      expectType(testCode, 'vr', /\bunknown\b/);
      // array of variants
      expectType(testCode, 'avu', /Variant.*\[\]/);
      expectType(testCode, 'avd', /Variant.*\[\]/);
      expectType(testCode, 'avr', /(unknown\[\])|Array<\s*unknown\s*>/);
    });

    it('treats handle and unknown types as unknown (h, ?)', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        const h = new GLib.Variant('h', 1);
        const q = new GLib.Variant('?', 1);
        
        const hu = h.unpack();
        const hd = h.deepUnpack();
        const hr = h.recursiveUnpack();
        
        const qu = q.unpack();
        const qd = q.deepUnpack();
        const qr = q.recursiveUnpack();
      `;
      expectCompilation(testCode);
      // All methods yield unknown for these base types
      expectType(testCode, 'hu', /(unknown)/);
      expectType(testCode, 'hd', /(unknown)/);
      expectType(testCode, 'hr', /(unknown)/);
      expectType(testCode, 'qu', /(unknown)/);
      expectType(testCode, 'qd', /(unknown)/);
      expectType(testCode, 'qr', /(unknown)/);
    });
  });

  describe('new_tuple accepts Variant[] (Issue #296)', () => {
    it('should accept Variant instances, not VariantType', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';

        const tuple = GLib.Variant.new_tuple([
          GLib.Variant.new_string('hello'),
          GLib.Variant.new_int32(42),
        ]);
      `;
      expectCompilation(testCode);
      expectType(testCode, 'tuple', /Variant<"\(si\)">/);
    });

    it('should infer correct tuple type for multiple elements', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';

        const tuple = GLib.Variant.new_tuple([
          GLib.Variant.new_boolean(true),
          GLib.Variant.new_string('test'),
          GLib.Variant.new_int32(1),
        ]);
      `;
      expectCompilation(testCode);
      expectType(testCode, 'tuple', /Variant<"\(bsi\)">/);
    });
  });

  describe('Nested dictionary parsing (Issue #286)', () => {
    it('should parse nested dictionaries for recursiveUnpack', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';

        type NestedDict = GLib.$ParseRecursiveVariant<"a{sa{sv}}">;
      `;
      expectCompilation(testCode);
      expectType(testCode, 'NestedDict', /\{ \[key: string\]/);
    });

    it('should parse nested dictionaries for deepUnpack', () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';

        type NestedDictDeep = GLib.$ParseDeepVariant<"a{sa{sv}}">;
      `;
      expectCompilation(testCode);
      expectType(testCode, 'NestedDictDeep', /\{ \[key: string\]/);
    });
  });
});
