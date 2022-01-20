import type { ESLint } from 'eslint'

const eslintConfig: ESLint.Options = {
    fix: true,
    // fixTypes: ['problem', 'suggestion', 'layout'],
    // Default is true. If false is present, the eslint.lintFiles() method doesn't respect .eslintignore files or ignorePatterns in your configuration.
    ignore: false,
    useEslintrc: false,
    errorOnUnmatchedPattern: true,
    extensions: ['.ts', '.d.ts', '.js'],
    baseConfig: {
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint'],
        extends: [
            'plugin:prettier/recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/recommended-requiring-type-checking',
            'prettier',
        ],
        rules: {
            semi: ['error', 'never'],
            'no-debugger': 'off',
            '@typescript-eslint/triple-slash-reference': 'off',
            camelcase: 'off',
            '@typescript-eslint/camelcase': 'off',
        },
        parserOptions: {
            requireConfigFile: false,
            project: './tsconfig.types.json',
            sourceType: 'module',
        },
        globals: {
            imports: true,
        },
    },
}

export default eslintConfig
