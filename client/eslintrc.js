module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Add any specific rules or overrides here
  },
};
