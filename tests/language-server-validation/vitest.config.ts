import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Use Node.js environment for language server tests
    environment: 'node',
    
    // Test files pattern - only GVariant validation
    include: ['src/gvariant-validation.test.ts'],
    
    // Timeout settings (language server operations can take time)
    testTimeout: 240000, // 4 minutes per test
    hookTimeout: 240000,
    
    // Global setup
    globals: true,
    
    // Use single worker without isolation to avoid worker communication issues (Vitest 4+ pool API)
    maxWorkers: 1,
    isolate: false,
    
    // Reduce concurrency to avoid resource conflicts
    maxConcurrency: 1,
  }
}); 