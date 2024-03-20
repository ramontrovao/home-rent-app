module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        "@typescript-eslint/consistent-type-imports": "error"
    },
    extends: [
        'prettier',
        'plugin:@typescript-eslint/recommended',
    ],
};