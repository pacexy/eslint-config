import pluginUnicorn from 'eslint-plugin-unicorn'

/** @type {import('eslint').Linter.Config[]} */
export const unicorn = [
  pluginUnicorn.configs['flat/recommended'],
  {
    name: 'unicorn/custom',
    rules: {
      //
    },
  },
]
