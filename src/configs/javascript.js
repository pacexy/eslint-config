import pluginJs from '@eslint/js'
import globals from 'globals'
import { GLOB_JS_SRC } from '../globs.js'

const files = GLOB_JS_SRC

/** @type {import('eslint').Linter.Config[]} */
export const javascript = [
  {
    name: 'javascript/setup',
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    name: 'javascript/recommended',
    files,
    ...pluginJs.configs.recommended,
  },
]
