import { ensurePackages, GLOB_SRC } from '@antfu/eslint-config'

const files = [GLOB_SRC]

/**
 * @type {import("../types").ConfigFn}
 */
export async function tailwindcss(options = {}) {
  const {
    stylistic = true,
  } = options

  await ensurePackages([
    'eslint-plugin-better-tailwindcss',
  ])

  const { default: betterTailwindcss } = await import('eslint-plugin-better-tailwindcss')

  return [
    {
      files,
      name: 'pacexy/tailwindcss',
      plugins: {
        'better-tailwindcss': betterTailwindcss,
      },
      rules: {
        // Correctness rules
        'better-tailwindcss/no-restricted-classes': 'error',
        ...betterTailwindcss.configs.correctness.rules,

        // Stylistic rules
        ...stylistic && {
          'better-tailwindcss/enforce-consistent-important-position': 'warn',
          'better-tailwindcss/enforce-consistent-variable-syntax': 'warn',
          'better-tailwindcss/enforce-logical-properties': 'warn',
          'better-tailwindcss/enforce-shorthand-classes': 'warn',
          ...betterTailwindcss.configs.stylistic.rules,
        },
      },
    },
  ]
}
