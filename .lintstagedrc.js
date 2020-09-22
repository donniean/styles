module.exports = {
  '*.{js,ts,jsx,tsx,json,html,vue,css,less,scss,md,yaml}': 'prettier --write',
  '*.{css,scss,js,jsx,vue}': 'stylelint --fix',
  '*.*': 'cspell',
};
