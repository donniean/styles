module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'color-named': [
      'never',
      {
        ignore: ['inside-function'],
      },
    ],
    'no-unknown-animations': true,
  },
  ignoreFiles: ['node_modules/', 'lib/', 'build/', 'dist/', '**/*.min.*'],
};
