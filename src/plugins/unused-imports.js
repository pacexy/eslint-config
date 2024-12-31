import pluginUnusedImports from 'eslint-plugin-unused-imports'

/** @satisfies {Record<string, import('eslint').Linter.Config>} */
export const unusedImports = {
  javascript: {
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
  typescript: {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
}
