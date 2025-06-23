import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'

export default tseslint.config(
    // Global ignores
    {
        ignores: [
            '**/node_modules/**',
            '**/lib/**',
            '**/dist/**',
            '**/build/**',
            '**/tmp/**',
            '**/test/**',
            '**/tests/**',
            '**/templates/**',
            '**/examples/**',
            '**/@types/**',
            '**/types/**',
            '**/*.js',
            '**/*.cjs',
        ]
    },

    // Base JavaScript recommendations
    js.configs.recommended,

    // TypeScript files with recommended rules
    ...tseslint.configs.recommended,

    // TypeScript files configuration
    {
        files: ['**/*.ts'],
        ignores: ['**/esbuild.ts'],
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // Only essential custom rules for a simplified setup
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': 'warn', // Allow 'any' but warn about it
            'no-fallthrough': 'warn', // Warn about missing break statements
        }
    },

    // Special rules for .d.ts files  
    {
        files: ['**/*.d.ts'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/triple-slash-reference': 'off',
        }
    },

    // Prettier integration (disables conflicting rules)
    prettier
) 