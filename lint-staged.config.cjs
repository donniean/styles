module.exports = {
  'package.json': 'sort-package-json',
  '*.{js,cjs,json,html,css,md,yaml,yml}': 'prettier --write',
  '*.css': 'stylelint --fix',
  '*.html': 'htmlhint',
  '*.md': 'markdownlint --fix',
  '**': 'cspell --no-must-find-files',
};
