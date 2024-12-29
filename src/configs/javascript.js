import pluginJs from '@eslint/js'
import pluginUnusedImports from 'eslint-plugin-unused-imports'
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
  {
    name: 'javascript/custom',
    files,
    plugins: {
      'unused-imports': pluginUnusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      // TODO: detect isInEditor
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
]
