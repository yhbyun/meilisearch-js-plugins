const prettierRules = require('./rules/prettier')

module.exports = {
  /*
   * JS
   */
  // files: ['**/*.js', '**/*.cjs'],
  env: {
    browser: true,
    es2020: true,
    'jest/globals': true,
    node: true,
    jasmine: true,
  },
  globals: {
    instantsearch: true,
    instantMeiliSearch: true,
    page: true, // for jest/puppeteer tests in tests/env/express
    browser: true, // for jest/puppeteer tests in tests/env/express
    context: true, // for jest/puppeteer tests in tests/env/express
    jestPuppeteer: true, // for jest/puppeteer tests in tests/env/express
    jasmine: true, // for angular e2e tests in playground/angular
  },
  extends: [
    'standard',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:cypress/recommended',
  ],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'cypress/no-unnecessary-waiting': 'off',
    'prettier/prettier': ['error', prettierRules],
  },
}
