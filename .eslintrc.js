module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: ['standard', 'prettier/standard'],
  parser: 'babel-eslint',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-unresolved': ['warn'],
    'import/no-named-as-default': ['warn'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
}
