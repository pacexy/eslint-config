import pluginJs from '@eslint/js'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export const javascript = [
  {
    name: 'javascript/setup',
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  { name: 'javascript/recommended', ...pluginJs.configs.recommended },
]
