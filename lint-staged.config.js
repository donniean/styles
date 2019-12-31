module.exports = {
  '*.{js,jsx,ts,tsx,html,vue,css,scss,json,md}': [
    'prettier --write',
    'git add'
  ],
  '*.{css,scss,js,jsx,vue}': ['stylelint --fix', 'git add']
};
