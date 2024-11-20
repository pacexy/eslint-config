import tseslint from 'typescript-eslint'

export const typescript = tseslint.config(...tseslint.configs.recommended, {
  name: 'pacexy/typescript',
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
})
