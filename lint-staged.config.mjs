export default {
  'package.json': 'sort-package-json',
  '*': [
    'prettier --write --ignore-unknown',
    'cspell lint --no-progress --relative --no-must-find-files --dot --gitignore',
  ],
  '*.{js,mjs,cjs}': 'eslint --fix',
  '*.css': 'stylelint --fix',
  '*.html': 'htmlhint',
  '*.md': 'markdownlint  --dot --fix',
};
