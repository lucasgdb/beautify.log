module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: false,
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'eslint:recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    quotes: ['error', 'single', 'avoid-escape'],
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        paths: ['src'],
      },
    },
  },
};
