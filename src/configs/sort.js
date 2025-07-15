import {
  perfectionist,
  sortPackageJson,
  sortTsconfig,
} from '@antfu/eslint-config'

export const sort = [
  ...(await sortPackageJson()),
  {
    files: ['**/package.json'],
    name: 'sort/package-json',
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          pathPattern: '^scripts$',
          order: { type: 'asc' },
        },
      ],
    },
  },
  ...sortTsconfig().map((c) => ({
    ...c,
    files: ['**/[jt]sconfig.json', '**/[jt]sconfig.*.json'],
  })),
  ...(await perfectionist()),
]
