import pluginJsonc from 'eslint-plugin-jsonc'
import parserJsonc from 'jsonc-eslint-parser'
import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from '../globs.js'

/** @type {import('eslint').Linter.Config[]} */
export const jsonc = [
  {
    files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
    languageOptions: {
      parser: parserJsonc,
    },
    name: 'json',
    plugins: {
      // @ts-expect-error
      jsonc: pluginJsonc,
    },
    // @ts-expect-error
    rules: {
      ...pluginJsonc.configs['recommended-with-jsonc'].rules,
    },
  },
]
