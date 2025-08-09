import { ensurePackages, GLOB_SRC } from '@antfu/eslint-config'

const files = [GLOB_SRC]

/** @return {Promise<import('@antfu/eslint-config').TypedFlatConfigItem[]>} */
export async function react() {
  // TODO: not work, as `isCwdInScope` is false when `@antfu/eslint-config` is an implicit dependency
  await ensurePackages([
    'eslint-plugin-react-google-translate',
  ])

  return [
    {
      files,
      name: 'pacexy/react',
      plugins: {
        'react-google-translate': await import('eslint-plugin-react-google-translate'),
      },
      rules: {
        'react-google-translate/no-conditional-text-nodes-with-siblings': 'warn',
        'react-google-translate/no-return-text-nodes': 'warn',
      },
    },
  ]
}
