module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    globals: {
        JSX: 'readonly',
        React: 'readonly'
    },
    extends: [
        'plugin:react/recommended',
        'standard',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        indent: ['error', 4]
    }
}
