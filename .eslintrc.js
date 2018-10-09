module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:vue/recommended'],
  rules: {
    /// `Vue create` defaults
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    /// Vue
    'vue/valid-v-on': ['warn', { modifiers: ['digit1', 'digit2', 'digit3', 'digit4'] }],
    /// 'off'
    'no-unused-vars': 0,
  },
}
