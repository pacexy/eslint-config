import tsconfigKeys from '../generated/tsconfig-keys.json' with { type: 'json' }

/** @type {import('eslint').Linter.Config[]} */
const sortTsconfig = [
  {
    files: ['**/[jt]sconfig.json', '**/[jt]sconfig.*.json'],
    name: 'sort/tsconfig',
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          order: [
            'extends',
            'compilerOptions',
            'references',
            'files',
            'include',
            'exclude',
          ],
          pathPattern: '^$',
        },
        ...tsconfigKeys.groups.map((g) => {
          return {
            order: g.categories.flatMap((c) => c.options),
            pathPattern: `^${g.name}$`,
          }
        }),
      ],
    },
  },
]

export const sort = [...sortTsconfig]
