module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "extends": [
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],
    "rules": {
        "semi": ["error", "never"],
        "no-debugger": "off",
        "@typescript-eslint/triple-slash-reference": "off",
        "camelcase": "off",
        "@typescript-eslint/camelcase": "off"
    },
    "parserOptions": {
        "tsconfigRootDir": __dirname,
        "project": ["./tsconfig.json"]
    },
    "globals": {
        "imports": true
    }
}
