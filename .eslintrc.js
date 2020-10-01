module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['google', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    'valid-jsdoc': 'off',
    camelcase: 'off',
    'require-jsdoc': 'off',
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    strict: [0, 'global'],
    'no-param-reasssign': 'off',
    'consistent-return': 'warn'
  }
}
