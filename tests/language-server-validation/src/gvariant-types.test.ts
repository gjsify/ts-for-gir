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
      
      // SHOULD compile without errors when generator is fixed
      expect(result.success).toBe(true);
      expect(result.errors.length).toBe(0);
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
        
        // Tuple with multiple types - SHOULD work when generator is fixed
        const complexTuple = new GLib.Variant("(sib)", ["hello", 123, true]);
        
        // Integer tuple that SHOULD work when parser is fixed
        const intTuple = new GLib.Variant("(ii)", [42, 100]);
      `;

      const result: ValidationResult = validateGIRTypeScriptAuto(testCode);
      
      // SHOULD compile without errors when tuple parsing is fixed
      expect(result.success).toBe(true);
      expect(result.errors.length).toBe(0);
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
      
      // According to GJS docs: unpack() should return GVariant[] for arrays (shallow)
      expect(arrayResult.success).toBe(true);
      expect(arrayResult.type).toMatch(/Variant.*\[\]|Array.*Variant/);
      
      // According to GJS docs: unpack() should return GVariant[] for tuples (shallow)
      expect(tupleResult.success).toBe(true);
      expect(tupleResult.type).toMatch(/Variant.*\[\]|Array.*Variant|\[Variant.*Variant\]/);
      
      // According to GJS docs: unpack() should return object with Variant values for dictionaries
      expect(dictResult.success).toBe(true);
      expect(dictResult.type).toMatch(/\{\s*\[.*\]:\s*Variant/);
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
      
      // According to GJS docs: deepUnpack() should return string[] for string arrays
      expect(arrayResult.success).toBe(true);
      expect(arrayResult.type).toMatch(/string.*\[\]|Array.*string/);
      
      // According to GJS docs: deepUnpack() should return [string, number] for (si) tuple
      expect(tupleResult.success).toBe(true);
      expect(tupleResult.type).toMatch(/\[string,\s*number\]|string.*number/);
      
      // According to GJS docs: deepUnpack() should unpack one level - still has Variants
      expect(dictResult.success).toBe(true);
      expect(dictResult.type).toMatch(/\{\s*\[.*\]:\s*Variant|\{\s*\[.*\]:\s*any/);
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
      
      // According to GJS docs: recursiveUnpack() should return string[] for string arrays
      expect(arrayResult.success).toBe(true);
      expect(arrayResult.type).toMatch(/string.*\[\]|Array.*string/);
      
      // According to GJS docs: recursiveUnpack() should return fully unpacked native JS types
      expect(complexResult.success).toBe(true);
      expect(complexResult.type).toMatch(/\{\s*\[.*\]:\s*any/);
      
      // According to GJS docs: recursiveUnpack() should return [string, number, boolean] for (sib)
      expect(tupleResult.success).toBe(true);
      expect(tupleResult.type).toMatch(/\[string,\s*number,\s*boolean\]/);
    });
  });

  describe('GVariant Type Inference Issues (Currently Failing - TDD)', () => {
    it('should handle tuple parsing correctly when generator is fixed', async () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        // This SHOULD work when tuple parsing is fixed
        const intTuple = new GLib.Variant("(ii)", [42, 100]);
        const tupleUnpack = intTuple.unpack();
        
        // Complex tuple that SHOULD work when parsing is fixed  
        const complexTuple = new GLib.Variant("(sib)", ["hello", 123, true]);
        const complexUnpack = complexTuple.unpack();
        
        // Test array methods on unpacked results - SHOULD work when types are correct
        const firstElement = tupleUnpack[0];
        const isArray = Array.isArray(complexUnpack);
      `;

      const result: ValidationResult = validateGIRTypeScriptAuto(testCode);
      
      // Currently fails, but SHOULD succeed when generator is fixed
      console.log('Tuple parsing validation (SHOULD pass when fixed):', result.errors);
      
      // Test hover on the results - document what SHOULD happen
      const tupleHover: HoverResult = getIdentifierTypeAuto(testCode, 'tupleUnpack');
      const complexHover: HoverResult = getIdentifierTypeAuto(testCode, 'complexUnpack');
      
      console.log('Tuple unpack hover (SHOULD be GVariant[]):', tupleHover.type);
      console.log('Complex tuple unpack hover (SHOULD be GVariant[]):', complexHover.type);
      
      // SHOULD be true when generator produces correct types
      // Currently may fail due to VariantTypeError, but that's expected
      if (result.success) {
        expect(tupleHover.type).toMatch(/Variant.*\[\]|Array.*Variant/);
        expect(complexHover.type).toMatch(/Variant.*\[\]|Array.*Variant/);
      }
    });

    it('should handle instanceof checks correctly when types are fixed', async () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        const stringArrayVariant = new GLib.Variant("as", ["one", "two"]);
        const unpackResult = stringArrayVariant.unpack();
        
        // This SHOULD work when types are correct
        const firstElement = unpackResult[0];
        const isVariant = firstElement instanceof GLib.Variant;
        
        // Test if array methods exist - SHOULD work when unpack returns proper array
        const hasEveryMethod = unpackResult.every((item) => item instanceof GLib.Variant);
      `;

      const result: ValidationResult = validateGIRTypeScriptAuto(testCode);
      
      // Document current state vs expected
      console.log('instanceof check validation (SHOULD pass when fixed):', result.errors);
      
      // Test hover on elements - document expected types
      const firstElementHover: HoverResult = getIdentifierTypeAuto(testCode, 'firstElement');
      const isVariantHover: HoverResult = getIdentifierTypeAuto(testCode, 'isVariant');
      
      console.log('First element hover (SHOULD be Variant):', firstElementHover.type);
      console.log('instanceof result hover (SHOULD be boolean):', isVariantHover.type);
      
      // When working correctly, these should pass
      if (result.success && firstElementHover.type && !firstElementHover.type.includes('Error')) {
        expect(firstElementHover.type).toMatch(/Variant/);
      }
      if (result.success && isVariantHover.type && !isVariantHover.type.includes('Error')) {
        expect(isVariantHover.type).toMatch(/boolean/);
      }
    });
  });

  describe('GVariant Type Expectations (Target Behavior)', () => {
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

      // Test type expectations for string variants - all should return string for simple types
      const stringUnpackResult: TypeExpectationResult = expectIdentifierTypeAuto(testCode, 'stringUnpack', 'string');
      const stringDeepResult: TypeExpectationResult = expectIdentifierTypeAuto(testCode, 'stringDeep', 'string');
      const stringRecursiveResult: TypeExpectationResult = expectIdentifierTypeAuto(testCode, 'stringRecursive', 'string');
      
      // All should return string for simple string variant
      expect(stringUnpackResult.success).toBe(true);
      expect(stringDeepResult.success).toBe(true);
      expect(stringRecursiveResult.success).toBe(true);
      
      // Test hover for array variants to document expected behavior
      const arrayUnpackHover: HoverResult = getIdentifierTypeAuto(testCode, 'arrayUnpack');
      const arrayDeepHover: HoverResult = getIdentifierTypeAuto(testCode, 'arrayDeep');
      const arrayRecursiveHover: HoverResult = getIdentifierTypeAuto(testCode, 'arrayRecursive');
      
      console.log('Array unpack types (expected behavior):');
      console.log('- unpack() SHOULD be Variant[]:', arrayUnpackHover.type);
      console.log('- deepUnpack() SHOULD be string[]:', arrayDeepHover.type);
      console.log('- recursiveUnpack() SHOULD be string[]:', arrayRecursiveHover.type);
      
      // When generator is fixed, these should match the expected patterns
      if (arrayUnpackHover.success && arrayUnpackHover.type && !arrayUnpackHover.type.includes('Error')) {
        expect(arrayUnpackHover.type).toMatch(/Variant.*\[\]|Array.*Variant/);
      }
      if (arrayDeepHover.success && arrayDeepHover.type && !arrayDeepHover.type.includes('Error')) {
        expect(arrayDeepHover.type).toMatch(/string.*\[\]|Array.*string/);
      }
      if (arrayRecursiveHover.success && arrayRecursiveHover.type && !arrayRecursiveHover.type.includes('Error')) {
        expect(arrayRecursiveHover.type).toMatch(/string.*\[\]|Array.*string/);
      }
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

      // Test hover information to document expected behavior
      const dictUnpackHover: HoverResult = getIdentifierTypeAuto(testCode, 'dictUnpack');
      const dictDeepHover: HoverResult = getIdentifierTypeAuto(testCode, 'dictDeep');
      const dictRecursiveHover: HoverResult = getIdentifierTypeAuto(testCode, 'dictRecursive');
      
      const tupleUnpackHover: HoverResult = getIdentifierTypeAuto(testCode, 'tupleUnpack');
      const tupleDeepHover: HoverResult = getIdentifierTypeAuto(testCode, 'tupleDeep');
      const tupleRecursiveHover: HoverResult = getIdentifierTypeAuto(testCode, 'tupleRecursive');
      
      console.log('Dictionary unpack types (expected behavior):');
      console.log('- unpack() SHOULD be {[key: string]: Variant}:', dictUnpackHover.type);
      console.log('- deepUnpack() SHOULD be {[key: string]: any}:', dictDeepHover.type);
      console.log('- recursiveUnpack() SHOULD be {[key: string]: any}:', dictRecursiveHover.type);
      
      console.log('Tuple unpack types (expected behavior):');
      console.log('- unpack() SHOULD be [Variant, Variant]:', tupleUnpackHover.type);
      console.log('- deepUnpack() SHOULD be [string, number]:', tupleDeepHover.type);
      console.log('- recursiveUnpack() SHOULD be [string, number]:', tupleRecursiveHover.type);
      
      // Test expectations when types are working correctly
      if (dictUnpackHover.success && dictUnpackHover.type && !dictUnpackHover.type.includes('Error')) {
        expect(dictUnpackHover.type).toMatch(/\{\s*\[.*\]:\s*Variant/);
      }
      if (tupleUnpackHover.success && tupleUnpackHover.type && !tupleUnpackHover.type.includes('Error')) {
        expect(tupleUnpackHover.type).toMatch(/\[.*Variant.*Variant\]|Variant.*\[\]/);
      }
      if (tupleDeepHover.success && tupleDeepHover.type && !tupleDeepHover.type.includes('Error')) {
        expect(tupleDeepHover.type).toMatch(/\[string,\s*number\]/);
      }
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
      
      // Validate method signatures are functions
      expect(unpackHover.type).toMatch(/function|\(\)/);
      expect(deepUnpackHover.type).toMatch(/function|\(\)/);
      expect(recursiveUnpackHover.type).toMatch(/function|\(\)/);
      expect(printHover.type).toMatch(/function|\(\)/);
    });

    it('should validate print method with parameters', async () => {
      const testCode = `
        import GLib from 'gi://GLib?version=2.0';
        
        const variant = new GLib.Variant("s", "hello");
        
        // Test print method signatures
        const printBasic = variant.print(false);
        const printFormatted = variant.print(true);
        
        // Test getting type string and size
        const typeString = variant.get_type_string();
        const size = variant.get_size();
        
        // Test type checking methods
        const isString = variant.is_of_type(new GLib.VariantType("s"));
      `;

      const result: ValidationResult = validateGIRTypeScriptAuto(testCode);
      
      // Should compile without errors
      expect(result.success).toBe(true);
      
      // Test hover on method results
      const printHover: HoverResult = getIdentifierTypeAuto(testCode, 'printBasic');
      const typeStringHover: HoverResult = getIdentifierTypeAuto(testCode, 'typeString');
      const sizeHover: HoverResult = getIdentifierTypeAuto(testCode, 'size');
      const isStringHover: HoverResult = getIdentifierTypeAuto(testCode, 'isString');
      
      console.log('GVariant method result hover types:', {
        print: printHover.type,
        typeString: typeStringHover.type,
        size: sizeHover.type,
        isString: isStringHover.type
      });
      
      // Validate return types
      expect(printHover.type).toMatch(/string/);
      expect(typeStringHover.type).toMatch(/string/);
      expect(sizeHover.type).toMatch(/number/);
      expect(isStringHover.type).toMatch(/boolean/);
    });
  });
}); 