import pluginJs from '@eslint/js'
import globals from 'globals'
import { unusedImports } from '../plugins/unused-imports.js'

/** @type {import('eslint').Linter.Config[]} */
export const javascript = [
  {
    name: 'javascript/setup',
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    name: 'javascript/recommended',
    ...pluginJs.configs.recommended,
  },
  {
    name: 'javascript/custom',
    plugins: {
      ...unusedImports.javascript.plugins,
    },
    rules: {
      ...unusedImports.javascript.rules,
    },
  },
]
