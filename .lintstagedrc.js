module.exports = {
  '*.{js,css,scss,json,md}': 'prettier --write',
  '*.{js}': 'eslint --fix',
  '*.{css,scss}': 'stylelint --fix',
  '*.*': 'cspell',
};
