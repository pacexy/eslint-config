import tseslint from 'typescript-eslint'
import { GLOB_TS_SRC } from '../globs.js'

const files = GLOB_TS_SRC

/** @type {import('eslint').Linter.Config[]} */
export const typescript = [
  ...tseslint.configs.recommended.map((config) => ({
    .../** @type {any} */ (config),
    files,
  })),
  {
    name: 'typescript/custom',
    files,
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]
