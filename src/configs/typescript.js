import tseslint from 'typescript-eslint'

export const typescript = tseslint.config(...tseslint.configs.recommended, {
  name: 'typescript/custom',
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
})
