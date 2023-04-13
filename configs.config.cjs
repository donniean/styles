module.exports = {
  features: {
    gitignore: true,
    gitattributes: true,
    editorconfig: true,
    prettier: {
      extensions: ['js', 'cjs', 'json', 'html', 'css', 'md', 'yaml', 'yml'],
    },
    stylelint: {
      extensions: ['css'],
    },
    htmlhint: true,
    markdownlint: true,
    cspell: {
      extensions: ['**'],
    },
    commitlint: true,
    commitizen: true,
    'sort-package-json': true,
    'lint-staged': true,
    husky: true,
  },
};
