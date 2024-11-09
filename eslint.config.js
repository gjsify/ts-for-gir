import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
    // Base config for all files
    {
        ignores: [
            '**/node_modules/**',
            '**/cli/lib/**',
            '**/generator-base/lib/**',
            '**/generator-html-doc/lib/**',
            '**/lib/lib/**',
            '**/generator-typescript/lib/**',
            '**/parser/lib/**',
            '**/tmp/**',
            '**/dist/**',
            '**/test/**',
            '**/templates/**',
            '**/examples/**',
            '**/@types/**',
            '**/*.js',
            '**/*.cjs',
        ]
    },

    // TypeScript files
    {
        files: ['**/*.ts'], // Explicitly specify files to lint
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                project: ['./packages/*/tsconfig.json'],
            },
            globals: {
                imports: true
            }
        },
        plugins: {
            '@typescript-eslint': tseslint
        },
        rules: {
            'semi': ['error', 'never'],
            'quotes': ['error', 'single'],
            'no-debugger': 'off',
            '@typescript-eslint/triple-slash-reference': 'off',
            'camelcase': 'off',
            '@typescript-eslint/camelcase': 'off'
        }
    },

    // Special rules for .d.ts files
    {
        files: ['**/*.d.ts'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/no-unused-vars': 'off'
        }
    },

    prettier
]; 