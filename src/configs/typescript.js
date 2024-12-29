import tseslint from 'typescript-eslint'
import { GLOB_TS_SRC } from '../globs.js'

const files = GLOB_TS_SRC

export const typescript = tseslint.config(
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
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
)
