const prettierRules = require('./rules/prettier')

module.exports = {
  /*
   * REACT
   */
  files: ['**/*.jsx', '**/*.tsx'],
  env: {
    es2020: true,
    commonjs: true, // Needed to avoid import is reserved error
    node: true,
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'import'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': 0,
    'prettier/prettier': ['error', prettierRules],
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
}
