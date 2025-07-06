import type { ValidationResult, HoverResult, TypeExpectationResult } from '@ts-for-gir/language-server';
import {
  testBasicTypeScript,
  testGIRTypeValidation,
  testErrorDetection,
  testHoverFunctionality,
  testBasicHover,
  testGIRTypeExpectation,
  testBasicTypeExpectation,
  testTypeExpectationFailure
} from './test-cases.ts';

console.log('🚀 ts-for-gir Language Server Validation Tests');
console.log('==================================================\n');

function logTest(name: string, success: boolean, details?: string) {
  const icon = success ? '✅ PASS' : '❌ FAIL';
  console.log(`${icon} ${name}`);
  if (details) {
    console.log(`   ${details}`);
  }
}

function runValidationTest(name: string, testFn: () => ValidationResult): boolean {
  try {
    const result = testFn();
    const success = result.success;
    logTest(name, success, 
           success ? 'All good!' : `Errors: ${result.errors.length}, Warnings: ${result.warnings.length}`);
    
    // Show first few errors if any
    if (!success && result.errors.length > 0) {
      console.log('   📝 Errors:');
      result.errors.slice(0, 2).forEach(error => console.log(`      - ${error}`));
    }
    
    return success;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logTest(name, false, `Exception: ${errorMessage}`);
    return false;
  }
}

function runHoverTest(name: string, testFn: () => HoverResult): boolean {
  try {
    const result = testFn();
    const success = result.success;
    logTest(name, success, 
           success ? `Type: ${result.type}` : `Error: ${result.error}`);
    
    // Show type information if successful
    if (success && result.type) {
      console.log(`   🔍 Type: ${result.type}`);
      if (result.documentation) {
        console.log(`   📖 Documentation: ${result.documentation}`);
      }
    }
    
    return success;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logTest(name, false, `Exception: ${errorMessage}`);
    return false;
  }
}

function runTypeExpectationTest(name: string, testFn: () => TypeExpectationResult, expectFailure = false): boolean {
  try {
    const result = testFn();
    const success = result.success;
    
    // For expectFailure tests, success means the test ran but the types didn't match
    const testPassed = expectFailure ? (success && !result.matches) : (success && result.matches);
    
    let details = '';
    if (success) {
      if (result.matches) {
        details = `✓ Expected '${result.expectedType}', got '${result.actualType}'`;
      } else {
        details = `✗ Expected '${result.expectedType}', got '${result.actualType}'`;
      }
    } else {
      details = `Error: ${result.error}`;
    }
    
    logTest(name, testPassed, details);
    
    return testPassed;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logTest(name, false, `Exception: ${errorMessage}`);
    return false;
  }
}

function main() {
  let passedTests = 0;
  let totalTests = 0;

  const validationTests: [string, () => ValidationResult][] = [
    ['Basic TypeScript validation', testBasicTypeScript],
    ['Error detection', () => {
      const result = testErrorDetection();
      // For error detection, we expect it to fail (have errors)
      return { success: !result.success && result.errors.length > 0, errors: result.errors, warnings: result.warnings };
    }],
    ['GIR type validation with auto-discovery', testGIRTypeValidation],
  ];

  const hoverTests: [string, () => HoverResult][] = [
    ['Basic TypeScript hover', testBasicHover],
    ['GIR type hover functionality', testHoverFunctionality],
  ];

  const typeExpectationTests: [string, () => TypeExpectationResult, boolean?][] = [
    ['Basic type expectation', testBasicTypeExpectation],
    ['GIR type expectation', testGIRTypeExpectation],
    ['Type expectation failure (expected)', testTypeExpectationFailure, true], // Expect this to fail
  ];

  let testNumber = 1;

  // Run validation tests
  console.log('🔍 Validation Tests');
  console.log('===================');
  validationTests.forEach(([name, testFn]) => {
    console.log(`${testNumber}️⃣ Testing ${name}...`);
    if (runValidationTest(name, testFn)) {
      passedTests++;
    }
    totalTests++;
    testNumber++;
    console.log('');
  });

  // Run hover tests  
  console.log('🎯 Hover Tests');
  console.log('===============');
  hoverTests.forEach(([name, testFn]) => {
    console.log(`${testNumber}️⃣ Testing ${name}...`);
    if (runHoverTest(name, testFn)) {
      passedTests++;
    }
    totalTests++;
    testNumber++;
    console.log('');
  });

  // Run type expectation tests
  console.log('✅ Type Expectation Tests');
  console.log('==========================');
  typeExpectationTests.forEach(([name, testFn, expectFailure]) => {
    console.log(`${testNumber}️⃣ Testing ${name}...`);
    if (runTypeExpectationTest(name, testFn, expectFailure)) {
      passedTests++;
    }
    totalTests++;
    testNumber++;
    console.log('');
  });

  console.log(`${'='.repeat(50)}`);
  console.log('📊 Test Results Summary:');
  console.log(`   ✅ Passed: ${passedTests}`);
  console.log(`   ❌ Failed: ${totalTests - passedTests}`);
  console.log(`   📈 Success Rate: ${((passedTests / totalTests) * 100).toFixed(1)}%`);
  
  if (passedTests < totalTests) {
    console.log('\n⚠️  Some tests failed. Check if GIR types are available in @types directory.');
  } else {
    console.log('\n🎉 All tests passed!');
  }

  console.log('\n💡 Language Server capabilities:');
  console.log('   - TypeScript validation working');
  console.log('   - Error detection working');
  console.log('   - GIR type auto-discovery working');
  console.log('   - Hover functionality for type inspection');
  console.log('   - Type expectation validation for precise testing');
}

main(); 