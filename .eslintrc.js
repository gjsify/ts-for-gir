// see https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
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
        // '@typescript-eslint/no-explicit-any': 'off',
        // '@typescript-eslint/no-misused-new': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        // For Gjs
        camelcase: 'off',
        '@typescript-eslint/camelcase': 'off',
    },
    parserOptions: {
        files: ['*.ts', '*.tsx'],
        project: "./tsconfig.json",
    },
    globals: {
        imports: true,
    },
}
