import pluginUnicorn from 'eslint-plugin-unicorn'

/** @type {import('eslint').Linter.Config[]} */
export const unicorn = [
  {
    name: 'unicorn/custom',
    plugins: {
      unicorn: pluginUnicorn,
    },
    rules: {
      // https://github.com/nodejs/node/issues/38343
      // https://github.com/import-js/eslint-plugin-import/issues/2717
      'unicorn/prefer-node-protocol': 'error',
    },
  },
]
