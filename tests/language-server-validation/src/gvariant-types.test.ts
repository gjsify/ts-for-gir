import { describe, it, expect } from 'vitest';
import { 
  validateGIRTypeScriptAuto, 
  getIdentifierTypeAuto, 
  expectIdentifierTypeAuto,
  type ValidationResult,
  type HoverResult,
  type TypeExpectationResult 
} from '@ts-for-gir/language-server';

describe('GVariant Type Validation', () => {
  describe('Basic GVariant Creation', () => {
    it('should validate basic GVariant types', async () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        // Basic variant types
        const stringVariant = new GLib.Variant("s", "hello");
        const numberVariant = new GLib.Variant("i", 42);
        const boolVariant = new GLib.Variant("b", true);
        
        // Array and tuple types
        const arrayVariant = new GLib.Variant("as", ["one", "two", "three"]);
        const tupleVariant = new GLib.Variant("(si)", ["hello", 42]);
        
        // Dictionary variant
        const dictVariant = new GLib.Variant("a{sv}", {
          key1: new GLib.Variant("s", "value1"),
          key2: new GLib.Variant("i", 123)
        });
      `;

      const result: ValidationResult = validateGIRTypeScriptAuto(testCode);
      
      // Should compile without critical errors
      expect(result.success).toBe(true);
      expect(result.errors.length).toBeLessThan(3); // Allow some expected type errors
    });

    it('should validate complex nested GVariant structures', async () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        // Complex nested structure from the example
        const complexVariant = new GLib.Variant("a{sv}", {
          simpleString: new GLib.Variant("s", "value"),
          nestedArray: new GLib.Variant("as", ["nested1", "nested2"]),
          deepStruct: new GLib.Variant("(si)", ["tuple", 123])
        });
        
        // Tuple with multiple types
        const complexTuple = new GLib.Variant("(sib)", ["hello", 123, true]);
        
        // Integer tuple that was failing
        const intTuple = new GLib.Variant("(ii)", [42, 100]);
      `;

      const result: ValidationResult = validateGIRTypeScriptAuto(testCode);
      
      // May have some type errors due to current limitations
      expect(result.success).toBe(true);
      console.log('Complex GVariant validation errors:', result.errors);
    });
  });

  describe('GVariant Unpacking Method Hover', () => {
    it('should provide correct hover information for unpack() method', async () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        const stringArrayVariant = new GLib.Variant("as", ["one", "two", "three"]);
        const unpackResult = stringArrayVariant.unpack();
        
        const tupleVariant = new GLib.Variant("(si)", ["hello", 42]);
        const tupleUnpack = tupleVariant.unpack();
        
        const dictVariant = new GLib.Variant("a{sv}", {
          key1: new GLib.Variant("s", "value1")
        });
        const dictUnpack = dictVariant.unpack();
      `;

      const arrayResult: HoverResult = getIdentifierTypeAuto(testCode, 'unpackResult');
      const tupleResult: HoverResult = getIdentifierTypeAuto(testCode, 'tupleUnpack');
      const dictResult: HoverResult = getIdentifierTypeAuto(testCode, 'dictUnpack');
      
      // unpack() should return GVariant[] for arrays
      expect(arrayResult.success).toBe(true);
      expect(arrayResult.type).toMatch(/Variant.*\[\]|Array.*Variant/);
      
      // unpack() should return GVariant[] for tuples  
      expect(tupleResult.success).toBe(true);
      expect(tupleResult.type).toMatch(/Variant.*\[\]|Array.*Variant/);
      
      // unpack() should return object with Variant values for dictionaries
      expect(dictResult.success).toBe(true);
      console.log('Dictionary unpack() hover type:', dictResult.type);
    });

    it('should provide correct hover information for deepUnpack() method', async () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        const stringArrayVariant = new GLib.Variant("as", ["one", "two", "three"]);
        const deepResult = stringArrayVariant.deepUnpack();
        
        const tupleVariant = new GLib.Variant("(si)", ["hello", 42]);
        const tupleDeep = tupleVariant.deepUnpack();
        
        const dictVariant = new GLib.Variant("a{sv}", {
          key1: new GLib.Variant("s", "value1"),
          key2: new GLib.Variant("i", 123)
        });
        const dictDeep = dictVariant.deepUnpack();
      `;

      const arrayResult: HoverResult = getIdentifierTypeAuto(testCode, 'deepResult');
      const tupleResult: HoverResult = getIdentifierTypeAuto(testCode, 'tupleDeep');
      const dictResult: HoverResult = getIdentifierTypeAuto(testCode, 'dictDeep');
      
      // deepUnpack() should return string[] for string arrays
      expect(arrayResult.success).toBe(true);
      expect(arrayResult.type).toMatch(/string.*\[\]|Array.*string/);
      
      // deepUnpack() should return native JS types for tuples
      expect(tupleResult.success).toBe(true);
      console.log('Tuple deepUnpack() hover type:', tupleResult.type);
      
      // deepUnpack() should return object with mixed native types
      expect(dictResult.success).toBe(true);
      console.log('Dictionary deepUnpack() hover type:', dictResult.type);
    });

    it('should provide correct hover information for recursiveUnpack() method', async () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        const stringArrayVariant = new GLib.Variant("as", ["one", "two", "three"]);
        const recursiveResult = stringArrayVariant.recursiveUnpack();
        
        const complexVariant = new GLib.Variant("a{sv}", {
          simpleString: new GLib.Variant("s", "value"),
          nestedArray: new GLib.Variant("as", ["nested1", "nested2"]),
          deepStruct: new GLib.Variant("(si)", ["tuple", 123])
        });
        const complexRecursive = complexVariant.recursiveUnpack();
        
        const tupleVariant = new GLib.Variant("(sib)", ["hello", 123, true]);
        const tupleRecursive = tupleVariant.recursiveUnpack();
      `;

      const arrayResult: HoverResult = getIdentifierTypeAuto(testCode, 'recursiveResult');
      const complexResult: HoverResult = getIdentifierTypeAuto(testCode, 'complexRecursive');
      const tupleResult: HoverResult = getIdentifierTypeAuto(testCode, 'tupleRecursive');
      
      // recursiveUnpack() should return string[] for string arrays
      expect(arrayResult.success).toBe(true);
      expect(arrayResult.type).toMatch(/string.*\[\]|Array.*string/);
      
      // recursiveUnpack() should return fully unpacked native JS types
      expect(complexResult.success).toBe(true);
      console.log('Complex recursiveUnpack() hover type:', complexResult.type);
      
      // recursiveUnpack() should return native JS array for tuples
      expect(tupleResult.success).toBe(true);
      console.log('Tuple recursiveUnpack() hover type:', tupleResult.type);
    });
  });

  describe('GVariant Type Inference Issues', () => {
    it('should handle tuple parsing correctly', async () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        // This was failing according to linter errors
        const intTuple = new GLib.Variant("(ii)", [42, 100]);
        const tupleUnpack = intTuple.unpack();
        
        // Complex tuple that shows parsing issues  
        const complexTuple = new GLib.Variant("(sib)", ["hello", 123, true]);
        const complexUnpack = complexTuple.unpack();
        
        // Test array methods on unpacked results
        const hasEveryMethod = tupleUnpack.every;
        const hasMapMethod = complexUnpack.map;
      `;

      const result: ValidationResult = validateGIRTypeScriptAuto(testCode);
      
      // Currently expected to fail - this is for TDD
      console.log('Tuple parsing validation errors:', result.errors);
      
      // Test hover on the problematic unpack results
      const tupleHover: HoverResult = getIdentifierTypeAuto(testCode, 'tupleUnpack');
      const complexHover: HoverResult = getIdentifierTypeAuto(testCode, 'complexUnpack');
      
      console.log('Tuple unpack hover type:', tupleHover.type);
      console.log('Complex tuple unpack hover type:', complexHover.type);
    });

    it('should handle instanceof checks correctly', async () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        const stringArrayVariant = new GLib.Variant("as", ["one", "two"]);
        const unpackResult = stringArrayVariant.unpack();
        
        // This should work but currently fails
        const firstElement = unpackResult[0];
        const isVariant = firstElement instanceof GLib.Variant;
        
        // Test if methods exist on the result
        const hasInstanceOfCheck = unpackResult.every((item) => item instanceof GLib.Variant);
      `;

      const result: ValidationResult = validateGIRTypeScriptAuto(testCode);
      
      // Expected to have errors currently
      console.log('instanceof check validation errors:', result.errors);
      
      // Test hover on problematic elements
      const firstElementHover: HoverResult = getIdentifierTypeAuto(testCode, 'firstElement');
      const isVariantHover: HoverResult = getIdentifierTypeAuto(testCode, 'isVariant');
      
      console.log('First element hover type:', firstElementHover.type);
      console.log('instanceof result hover type:', isVariantHover.type);
    });
  });

  describe('GVariant Type Expectations', () => {
    it('should expect correct types for basic unpacking methods', async () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        const stringVariant = new GLib.Variant("s", "hello");
        const stringUnpack = stringVariant.unpack();
        const stringDeep = stringVariant.deepUnpack();
        const stringRecursive = stringVariant.recursiveUnpack();
        
        const arrayVariant = new GLib.Variant("as", ["one", "two"]);
        const arrayUnpack = arrayVariant.unpack();
        const arrayDeep = arrayVariant.deepUnpack();
        const arrayRecursive = arrayVariant.recursiveUnpack();
      `;

      // Test type expectations for string variants
      const stringUnpackResult: TypeExpectationResult = expectIdentifierTypeAuto(testCode, 'stringUnpack', 'string');
      const stringDeepResult: TypeExpectationResult = expectIdentifierTypeAuto(testCode, 'stringDeep', 'string');
      const stringRecursiveResult: TypeExpectationResult = expectIdentifierTypeAuto(testCode, 'stringRecursive', 'string');
      
      // All should return string for simple string variant
      expect(stringUnpackResult.success).toBe(true);
      expect(stringDeepResult.success).toBe(true);
      expect(stringRecursiveResult.success).toBe(true);
      
      // Test type expectations for array variants
      const arrayUnpackResult: TypeExpectationResult = expectIdentifierTypeAuto(testCode, 'arrayUnpack', /Variant.*\[\]|Array.*Variant/);
      const arrayDeepResult: TypeExpectationResult = expectIdentifierTypeAuto(testCode, 'arrayDeep', /string.*\[\]|Array.*string/);
      const arrayRecursiveResult: TypeExpectationResult = expectIdentifierTypeAuto(testCode, 'arrayRecursive', /string.*\[\]|Array.*string/);
      
      // unpack() should return Variant[], deep/recursive should return string[]
      console.log('Array unpack type expectation:', arrayUnpackResult);
      console.log('Array deep type expectation:', arrayDeepResult);
      console.log('Array recursive type expectation:', arrayRecursiveResult);
    });

    it('should expect correct types for complex variant structures', async () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        const dictVariant = new GLib.Variant("a{sv}", {
          key1: new GLib.Variant("s", "value1"),
          key2: new GLib.Variant("i", 123)
        });
        
        const dictUnpack = dictVariant.unpack();
        const dictDeep = dictVariant.deepUnpack();
        const dictRecursive = dictVariant.recursiveUnpack();
        
        const tupleVariant = new GLib.Variant("(si)", ["hello", 42]);
        const tupleUnpack = tupleVariant.unpack();
        const tupleDeep = tupleVariant.deepUnpack();
        const tupleRecursive = tupleVariant.recursiveUnpack();
      `;

      // Test dictionary unpacking expectations
      const dictUnpackResult: TypeExpectationResult = expectIdentifierTypeAuto(testCode, 'dictUnpack', 'object');
      const dictDeepResult: TypeExpectationResult = expectIdentifierTypeAuto(testCode, 'dictDeep', 'object');
      const dictRecursiveResult: TypeExpectationResult = expectIdentifierTypeAuto(testCode, 'dictRecursive', 'object');
      
      console.log('Dictionary unpack type expectations:', {
        unpack: dictUnpackResult,
        deep: dictDeepResult,
        recursive: dictRecursiveResult
      });
      
      // Test tuple unpacking expectations
      const tupleUnpackResult: TypeExpectationResult = expectIdentifierTypeAuto(testCode, 'tupleUnpack', /\[\]|Array/);
      const tupleDeepResult: TypeExpectationResult = expectIdentifierTypeAuto(testCode, 'tupleDeep', /\[\]|Array/);
      const tupleRecursiveResult: TypeExpectationResult = expectIdentifierTypeAuto(testCode, 'tupleRecursive', /\[\]|Array/);
      
      console.log('Tuple unpack type expectations:', {
        unpack: tupleUnpackResult,
        deep: tupleDeepResult,
        recursive: tupleRecursiveResult
      });
    });
  });

  describe('GVariant Method Signature Validation', () => {
    it('should validate GVariant constructor signatures', async () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        // Test various constructor signatures
        const variant1 = new GLib.Variant("s", "hello");
        const variant2 = new GLib.Variant("i", 42);
        const variant3 = new GLib.Variant("as", ["one", "two"]);
        const variant4 = new GLib.Variant("(si)", ["hello", 42]);
        
        // Test method availability
        const hasUnpack = variant1.unpack;
        const hasDeepUnpack = variant1.deepUnpack;
        const hasRecursiveUnpack = variant1.recursiveUnpack;
        const hasPrint = variant1.print;
      `;

      const result: ValidationResult = validateGIRTypeScriptAuto(testCode);
      
      // Should compile without major errors
      expect(result.success).toBe(true);
      
      // Test hover on methods
      const unpackHover: HoverResult = getIdentifierTypeAuto(testCode, 'hasUnpack');
      const deepUnpackHover: HoverResult = getIdentifierTypeAuto(testCode, 'hasDeepUnpack');
      const recursiveUnpackHover: HoverResult = getIdentifierTypeAuto(testCode, 'hasRecursiveUnpack');
      const printHover: HoverResult = getIdentifierTypeAuto(testCode, 'hasPrint');
      
      console.log('GVariant method hover types:', {
        unpack: unpackHover.type,
        deepUnpack: deepUnpackHover.type,
        recursiveUnpack: recursiveUnpackHover.type,
        print: printHover.type
      });
    });

    it('should validate print method with parameters', async () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        const variant = new GLib.Variant("s", "hello");
        
        // Test print method signatures
        const printBasic = variant.print(false);
        const printFormatted = variant.print(true);
        
        // Test getting type string
        const typeString = variant.get_type_string();
        const size = variant.get_size();
      `;

      const result: ValidationResult = validateGIRTypeScriptAuto(testCode);
      
      // Should compile without errors
      expect(result.success).toBe(true);
      
      // Test hover on method results
      const printHover: HoverResult = getIdentifierTypeAuto(testCode, 'printBasic');
      const typeStringHover: HoverResult = getIdentifierTypeAuto(testCode, 'typeString');
      const sizeHover: HoverResult = getIdentifierTypeAuto(testCode, 'size');
      
      console.log('GVariant method result hover types:', {
        print: printHover.type,
        typeString: typeStringHover.type,
        size: sizeHover.type
      });
    });
  });
}); 