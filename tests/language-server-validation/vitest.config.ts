import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Use Node.js environment for language server tests
    environment: 'node',
    
    // Test files pattern
    include: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
    
    // Timeout settings (language server operations can take time)
    testTimeout: 30000,
    hookTimeout: 30000,
    
    // Coverage settings
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts']
    },
    
    // Global setup
    globals: true,
    
    // Reporter settings - use simple text reporter
    reporters: ['verbose'],
    
    // Retry failed tests
    retry: 1
  }
}); 