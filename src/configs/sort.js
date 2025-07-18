/** @type {import("@antfu/eslint-config").TypedFlatConfigItem[]} */
export const sort = [
  {
    files: ['**/package.json'],
    name: 'pacexy/sort/package-json',
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
  // TODO: upgrade dep after antfu/eslint-config#733 is merged
]
