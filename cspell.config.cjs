module.exports = {
  version: '0.2',
  language: 'en',
  ignorePaths: [
    '.git/',
    '.history/',
    'node_modules/',
    'coverage/',
    'dist/',
    '.next/',
    '.idea/',
    '.vscode/',
    '**/*.svg',
    '.*ignore',
    '*.tsbuildinfo',
    '.gitattributes',
    '.htmlhintrc',
    'package.json',
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
    'CHANGELOG.md',
    'Dockerfile',
  ],
  dictionaries: [
    'user-apps',
    'user-brands',
    'user-custom',
    'user-files',
    'user-npm',
  ],
  dictionaryDefinitions: [
    {
      name: 'user-apps',
      path: './dictionaries/apps.dic',
      addWords: true,
    },
    {
      name: 'user-brands',
      path: './dictionaries/brands.dic',
      addWords: true,
    },
    {
      name: 'user-custom',
      path: './dictionaries/custom.dic',
      addWords: true,
    },
    {
      name: 'user-files',
      path: './dictionaries/files.dic',
      addWords: true,
    },
    {
      name: 'user-npm',
      path: './dictionaries/npm.dic',
      addWords: true,
    },
  ],
};
