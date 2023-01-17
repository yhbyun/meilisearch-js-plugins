const prettierRules = require('./rules/prettier')

module.exports = {
  /*
   * VUE FILES
   */

  // files: ['**/*.vue'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/essential',
    'plugin:vue/base',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', 'jsdoc'],
  rules: {
    'prettier/prettier': ['error', prettierRules],
  },
}
