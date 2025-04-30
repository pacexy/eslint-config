import pluginUnicorn from 'eslint-plugin-unicorn'

/** @type {import('eslint').Linter.Config[]} */
export const unicorn = [
  pluginUnicorn.configs['flat/recommended'],
  {
    name: 'unicorn/custom',
    rules: {
      'unicorn/import-style': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-null': 'off', // https://github.com/sindresorhus/meta/discussions/7
    },
  },
]
