import { ensurePackages, GLOB_SRC } from '@antfu/eslint-config'

const files = [GLOB_SRC]

/** @return {Promise<import('@antfu/eslint-config').TypedFlatConfigItem[]>} */
export async function tailwindcss() {
  await ensurePackages([
    'eslint-plugin-better-tailwindcss',
  ])

  const { default: eslintPluginBetterTailwindcss } = await import('eslint-plugin-better-tailwindcss')

  return [
    {
      files,
      name: 'pacexy/tailwindcss',
      plugins: {
        'better-tailwindcss': eslintPluginBetterTailwindcss,
      },
      rules: {
        ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
      },
    },
  ]
}
